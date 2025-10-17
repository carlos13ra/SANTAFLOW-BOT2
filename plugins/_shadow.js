const handler = async (m, { conn }) => {
  const ownerNumber = '51919199620'; // gay si editas esta parte att: Shadow_xyz
  const senderNumber = m.sender.split('@')[0];

  if (senderNumber !== ownerNumber) {
    return conn.reply(
      m.chat,
      `🚫 *Acceso denegado*\n\nSolo *${ownerNumber}* puede usar este comando.`,
      m
    );
  }

  const user = global.db.data.users[m.sender];
  if (!user.lastclaim) user.lastclaim = 0;
  if (!user.coin) user.coin = 0;
  if (!user.exp) user.exp = 0;
  if (!user.joincount) user.joincount = 0;

  const oneMinuteInMillis = 60_000; // 1 minuto
  const now = Date.now();
  const timeRemaining = user.lastclaim + oneMinuteInMillis - now;

  if (timeRemaining > 0) {
    return conn.reply(
      m.chat,
      `🕒 *Ya reclamaste tu recompensa🌸*\n\n⌛ Vuelve en: *${msToTime(timeRemaining)}*`,
      m
    );
  }

  const recompensa = 1_000_000_000;
  user.coin += recompensa;
  user.exp += recompensa;
  user.joincount += recompensa;
  user.lastclaim = now;

  const senderName = await conn.getName(m.sender);

  const texto = `
╭━━━〔 🎁 𝐑𝐄𝐂𝐎𝐌𝐏𝐄𝐍𝐒𝐀 🎋 〕━━⬣
│
│ 💎 *Usuario:* @${senderNumber}
│ 🧸 *Nombre:* ${senderName}
│
│ 🌸 *Has recibido:*
│ 💵 *${recompensa.toLocaleString()} monedas*
│ 🧠 *${recompensa.toLocaleString()} XP*
│ 🪙 *${recompensa.toLocaleString()} tokens*
│
│ 🕒 Próximo reclamo en 1 minuto.
│
╰━━━〔 𝐑𝐢𝐧 𝐈𝐭𝐨𝐬𝐡𝐢 🌷 〕━━⬣
`;

  await conn.sendMessage(
    m.chat,
    {
      text: texto,
      mentions: [m.sender],
      contextInfo: {
        externalAdReply: {
          title: '🎁 Recompensa de Rin Itoshi 🌸',
          body: 'Has sido recompensado generosamente!',
          thumbnailUrl: 'https://qu.ax/ALOZa.jpg',
          sourceUrl: 'https://github.com/Shadow-nex',
          mediaType: 1,
          renderLargerThumbnail: true
        }
      }
    },
    { quoted: m }
  );
};

handler.help = ['shadow'];
handler.tags = ['rpg'];
handler.command = ['shadow'];
handler.fail = null;
handler.premium = false;
export default handler;

function msToTime(duration) {
  let seconds = Math.floor((duration / 1000) % 60);
  let minutes = Math.floor((duration / (1000 * 60)) % 60);
  let hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
  let days = Math.floor(duration / (1000 * 60 * 60 * 24));

  return `${days > 0 ? days + 'd ' : ''}${hours > 0 ? hours + 'h ' : ''}${
    minutes > 0 ? minutes + 'm ' : ''
  }${seconds}s`;
}