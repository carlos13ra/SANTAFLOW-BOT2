let handler = async (m, { conn }) => {
  try {
    let imageUrl = "https://shadow-xyz.vercel.app/img/shadow2.jpg";
    let caption = `> ${club}`.trim();

    await conn.sendMessage(m.chat, {
      image: { url: imageUrl },
      caption: caption
    }, { quoted: m });

  } catch (e) {
    console.error(e);
    m.reply("Error al enviar la imagen.");
  }
};

handler.command = ['xd']; 
handler.help = ['xd'];
handler.tags = ['anime'];

export default handler;