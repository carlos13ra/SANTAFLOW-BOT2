import fetch from 'node-fetch'

let suscripciones = global.suscripciones || (global.suscripciones = {})

let handler = async (m, { conn, args, usedPrefix, command }) => {
  if (!args[0] || !args[1]) {
    return m.reply(`✘ Uso incorrecto.\n\n🌷 Ejemplo: *${usedPrefix + command} enlace 3d*  
(Usa m = minutos, h = horas, d = días, w = semanas)`)
  }

  let enlace = args[0].trim()
  let tiempoStr = args[1].toLowerCase()

  if (!enlace.startsWith('https://chat.whatsapp.com/')) {
    return m.reply('✘ Enlace no válido.')
  }


  let tiempoMs = 0
  let cantidad = parseInt(tiempoStr)

  if (isNaN(cantidad) || cantidad < 1) {
    return m.reply('✘ Ingresa un número válido (ejemplo: 10m, 5h, 2d, 1w).')
  }

  if (tiempoStr.endsWith('m')) tiempoMs = cantidad * 60 * 1000        // minutos
  else if (tiempoStr.endsWith('h')) tiempoMs = cantidad * 60 * 60 * 1000 // horas
  else if (tiempoStr.endsWith('d')) tiempoMs = cantidad * 24 * 60 * 60 * 1000 // días
  else if (tiempoStr.endsWith('w')) tiempoMs = cantidad * 7 * 24 * 60 * 60 * 1000 // semanas
  else return m.reply('✘ Unidad de tiempo no válida. Usa: m = minutos, h = horas, d = días, w = semanas.')

  let codigoGrupo = enlace.split('https://chat.whatsapp.com/')[1]?.trim()
  if (!codigoGrupo) return m.reply('✘ Código de grupo no válido.')
  await m.reply(`listo 💥`);
  try {
    let groupId = await conn.groupAcceptInvite(codigoGrupo)
    let groupMetadata = await conn.groupMetadata(groupId)
    let groupName = groupMetadata.subject
    
    let url = await conn.profilePictureUrl(m.chat, 'image').catch(_ => null);
    let admins = groupMetadata.participants.filter(p => p.admin).map(p => p.id)
    let mentionList = [m.sender, ...admins]

    await conn.sendMessage(groupId, {
      text: `💥 El bot se ha unido a *${groupName}*.\n\n☘️ Estará aquí durante *${cantidad}${tiempoStr.replace(cantidad, '')}*.\n\n🍂 Luego saldrá automáticamente.`,
      mentions: mentionList,
      contextInfo: {
        externalAdReply: {
          title: `Hola Grupo: ${groupName}`,
          body: '☘️◌*̥₊ sᴀɴᴛᴀғʟᴏᴡ ʙᴏᴛ ◌❐💫༉',
          thumbnailUrl: url || icono,
          sourceUrl: global.redes,
          mediaType: 1,
          renderLargerThumbnail: true
        }
      }
    }, { quoted: global.fkontak })


    if (suscripciones[groupId]) clearTimeout(suscripciones[groupId])
    suscripciones[groupId] = setTimeout(async () => {
      try {
        await conn.sendMessage(groupId, { text: '*⏳ Tiempo terminado. El bot saldrá del grupo.*' })
        await conn.groupLeave(groupId)
        delete suscripciones[groupId]
      } catch (err) {
        console.log(`Error al salir del grupo: ${err.message}`)
      }
    }, tiempoMs)

  } catch (e) {
    console.error(e)
    m.reply(`✘ Error al unirse al grupo:\n${e?.message || 'No se pudo unir. Verifica el enlace.'}`)
  }
}

handler.help = ['suscripción <enlace> <tiempo>']
handler.tags = ['bot']
handler.command = ['comprado', 'joinfor']

export default handler