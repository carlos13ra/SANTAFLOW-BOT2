import fetch from 'node-fetch'
import Jimp from 'jimp'

let handler = async (m, { conn, text }) => {
  if (!text && !m.quoted) {
    return m.reply(`✨ Pásame una URL de imagen o responde a una imagen.`)
  }

  try {
    let buffer

    if (text) {
      const res = await fetch(text)
      if (!res.ok) throw new Error('No se pudo descargar la imagen desde la URL')
      buffer = await res.arrayBuffer()
      buffer = Buffer.from(buffer)
    } else if (m.quoted && /image/.test(m.quoted.mtype)) {
      buffer = await m.quoted.download()
    } else {
      throw new Error('No se detectó una imagen válida')
    }

    let quality = 80
    let thumb
    let img = await Jimp.read(buffer)

    do {
      let clone = img.clone()
      clone.resize(200, Jimp.AUTO)
      clone.quality(quality)
      thumb = await clone.getBufferAsync(Jimp.MIME_JPEG)
      quality -= 10
    } while (thumb.length > 64 * 1024 && quality > 10)
    const base64Thumb = thumb.toString('base64')

    await conn.sendMessage(m.chat, {
      image: thumb,
      caption: `🎃 Aquí tienes tu miniatura lista para WhatsApp (≤64KB)

🍧 Peso: ${(thumb.length / 1024).toFixed(1)} KB

\`\`\`Código Base64:\`\`\`
${base64Thumb.substring(0, 200)}...`
    }, { quoted: m })

  } catch (e) {
    console.error(e)
    m.reply('❌ Error al procesar la imagen.')
  }
}

handler.command = /^miniatura|mine$/i
export default handler