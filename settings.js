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

global.owner = 
// <-- Número @s.whatsapp.net -->
  ['51900922660', '🜲 Propietario 🎃', true],
  ['51900922660', 'shadow', true],
  ['51984169553', ':v', true ],
  ['51919199620', 'Shadow-xyz ⚡', true]

//✎﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏

global.suittag = ['51919199620', '51900922660'] 
global.prems = []

//✎﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏
/storage/emulated/0/SANTAFLOW-BOT2/

global.libreria = 'Baileys'
global.baileys = 'V 6.7.17' 
global.vs = '3.0.0'
global.nameqr = '⋆｡°✩🍂 SANTAFLOW Bot MD ⚡✩°｡⋆'
global.namebot = '✿⋆｡° SANTAFLOW - MD °｡⋆✿'
global.sessions = 'Sessions'
global.jadi = 'JadiBots' 
global.shadowJadibts = true

//✎﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏

global.packname = '🏆 ⌬ 𝐒𝐚𝐧𝐭𝐚𝐟𝐥𝐨𝐰 𝑩𝒐𝒕 𝑴𝑫 ⌬ ⚽'
global.botname = '☘️ 𝐒𝐀𝐍𝐓𝐀𝐅𝐋𝐎𝐖⚽'
global.wm = '◈SANTAFLOW 𝐁𝐨𝐭◈'
global.author = '⩇⃟🔋 𝑴𝒂𝒅𝒆 𝒃𝒚 𝐜𝐚𝐫𝐥𝐨𝐬.𝐫𝐯 ⩇⃟⚡'
global.dev = '☘️ ミ💨 》𝑪𝑨𝑹𝑳𝑶𝑺.𝑹𝑽《 💥ミ 🌀'
global.bot = '𝑺𝒂𝒏𝒕𝒂𝒇𝒍𝒐𝒘 𝒃𝒐𝒕'
global.club = '🌱 𝖯𝗈𝗐𝖾𝗋𝖾𝖽 𝖻𝗒 carlos•Core 𝖢𝗅𝗎𝖻 ⚡'
global.textbot = '𝐬𝐚𝐧𝐭𝐚𝐟𝐥𝐨𝐰 𝙱𝙾𝚃 ✦ 𝕊ℍ𝔸𝔻𝕆𝕎•ℂ𝕆ℝ𝔼'
global.etiqueta = '@sʜᴀᴅᴏᴡ°ᴄᴏʀᴇ'

//✎﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏

global.moneda = '¥enes💴'
global.banner = 'https://files.catbox.moe/ixknbf.jpg', 'https://files.catbox.moe/iokrvl.jpg'
global.avatar = 'https://files.catbox.moe/i2klfl.jpg', 'https://files.catbox.moe/e4f34u.jpg'
global.logo = 'https://files.catbox.moe/0w0wmc.jpg', 'https://files.catbox.moe/7tpaiu.jpg'

//✎﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏

global.gp1 = 'https://whatsapp.com/channel/0029Vb6iXGDISTkKY8fxUa39'
global.comunidad1 = 'https://whatsapp.com/channel/0029Vb6iXGDISTkKY8fxUa39'
global.channel = 'https://whatsapp.com/channel/0029Vb6iXGDISTkKY8fxUa39'
global.channel2 = 'https://whatsapp.com/channel/0029Vb6iXGDISTkKY8fxUa39'
global.md = 'https://github.com/Carlos13ra/SANTAFLOW-BOT2'
global.correo = 'shadowcore.xyz@gmail.com'

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
