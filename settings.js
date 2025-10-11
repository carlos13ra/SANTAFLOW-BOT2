import { watchFile, unwatchFile } from 'fs' 
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'
import cheerio from 'cheerio'
import fetch from 'node-fetch'
import axios from 'axios'
import moment from 'moment-timezone' 

//✎﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏

global.botNumber = ''

//✎﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏

global.owner = [
// <-- Número @s.whatsapp.net -->
  ['51984169553', '🜲 Propietario 🎃', true],
  ['51946200884', 'carlos', true],
  ['59898719147', 'feli', true],
  ['51934053286', ':v', true ],
  ['51965763942', 'Shadow-xyz ⚡', true],
  ['51946200884'],
  ['59892681750'],
  
// <-- Número @lid -->

  //['41885158654125, 'Propietario', true],
  ['49285437599822', 'carlos', true],
  ['119069730668723', 'feli', true ],
  ['102680420733070', ':v', true ],
  ['106820853043217', 'shadow-xyz ⭐', true]
];  

//✎﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏

global.mods = ['51984169553', '51984169553']
global.suittag = ['51984169553'] 
global.prems = ['51984169553', '51934053286']

//✎﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏

global.libreria = 'Baileys'
global.baileys = 'V 6.7.17' 
global.vs = '3.0.0'
global.nameqr = '⋆｡°✩🍂 Santaflow•Bot ⚡✩°｡⋆'
global.namebot = '✿⋆｡° Santaflow•Bot °｡⋆✿'
global.sessions = 'Sessions'
global.jadi = 'JadiBots' 
global.shadowJadibts = true

//✎﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏

global.packname = '⸙͎۪۫ ࣭࿐ ✿ ˚.🔥𝑺𝑨𝑵𝑻𝑨𝑭𝑳𝑶𝑾 ⌗ 𝐁𝐨𝐭 ♡⚡ ࿐ ۪۫⸙͎'
global.botname = '⋆ ˚｡⋆୨୧˚ 𝑺𝑨𝑵𝑻𝑨𝑭𝑳𝑶𝑾 𝐁𝐨𝐭 ⚽ ˚୨୧⋆｡˚ ⋆'
global.wm = '◈ 𝑺𝑨𝑵𝑻𝑨𝑭𝑳𝑶𝑾 𝑩𝒐𝒕 ◈'
global.author = '⩇⃟🔋 𝑴𝒂𝒅𝒆 𝒃𝒚 𝑪𝒂𝒓𝒍𝒐𝒔.𝑹.𝑽 ⩇⃟⚡'
global.dev = '✧ 𖦹 𝚃𝙷𝙴 ᴄᴀʀʟᴏs ⊹꙰ ꔛ R.V ✧'
global.bot = '𝑺𝒂𝒏𝒕𝒂𝒇𝒍𝒐𝒘 𝑩𝒐𝒕'
global.club = '𓏲⍣⃝🌙꙰꙳ 𝑷𝒐𝒘𝒆𝒓𝒆𝒅 𝒃𝒚 𝗖𝗮𝗿𝗹𝗼𝘀 𝑪𝒍𝒖𝒃 ꙳⍣⃝ ☻⋆͙̈✫.🪷'
global.textbot = '𓏲⍣⃝🍧꙰꙳ 𝚁𝙸𝙽 𝙸𝚃𝙾𝚂𝙷𝙸 𝙱𝙾𝚃 ✦ 𝕊𝔸ℕ𝕋𝔸𝔽𝕃𝕆𝕎꙳⍣⃝☻⋆͙̈✫.⚽'
global.etiqueta = '@sʜᴀᴅᴏᴡ°ᴄᴏʀᴇ'

//✎﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏

global.moneda = 'Euros💶'
global.welcom1 = '🌿 𝐄ძі𝗍ᥲ ᥱᥣ ᥕᥱᥣᥴ᥆mᥱ ᥴ᥆ᥒ #sᥱ𝗍ᥕᥱᥣᥴ᥆mᥱ'
global.welcom2 = '🌷 𝐄ძі𝗍ᥲ ᥱᥣ ᥕᥱᥣᥴ᥆mᥱ ᥴ᥆ᥒ #sᥱ𝗍ᑲᥡᥱ'
global.banner = 'https://i.postimg.cc/pTm6Z0fw/1754253021526.jpg'
global.avatar = 'https://i.postimg.cc/Y2JJXwyb/1754525693627.jpg'
global.logo = 'https://i.postimg.cc/0NxWTkp0/1754525596737.jpg'

//✎﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏

global.gp1 = 'https://whatsapp.com/channel/0029Vb6iXGDISTkKY8fxUa39'
global.comunidad1 = 'https://whatsapp.com/channel/0029Vb6iXGDISTkKY8fxUa39'
global.channel = 'https://whatsapp.com/channel/0029Vb6iXGDISTkKY8fxUa39'
global.channel2 = 'https://whatsapp.com/channel/0029Vb6iXGDISTkKY8fxUa39'
global.md = 'https://github.com/carlos13ra/SANTAFLOW-BOT2'
global.correo = 'carlosramirezvillanueva30@gmail.com'

//✎﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏

global.catalogo = fs.readFileSync('./src/catalogo.jpg');
global.estilo = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "5219992095479-1625305606@g.us" } : {}) }, message: { orderMessage: { itemCount : -999999, status: 1, surface : 1, message: packname, orderTitle: 'Bang', thumbnail: catalogo, sellerJid: '0@s.whatsapp.net'}}}
global.ch = {
ch1: "120363402079893698@newsletter",
ch2: "120363402079893698@newsletter",
ch3: "120363402079893698@newsletter"
}
global.multiplier = 60

//✎﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏

global.cheerio = cheerio
global.fs = fs
global.fetch = fetch
global.axios = axios
global.moment = moment   

//✎﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'settings.js'"))
  import(`${file}?update=${Date.now()}`)
})
