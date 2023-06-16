import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, args, command, text }) => {
if (!args[0]) throw `Where's the link?🌝`
  let res = await fetch(`https://api.zeltoria.my.id/api/download/tiktok?url=${args[0]}&apikey=${global.zeltoria}`)
  let x = await res.json()
  let anu = x.result
  let cap = `*🍃Here is the video🍃* `
  conn.sendFile(m.chat, anu.video.no_watermark, 'tiktok.mp4', cap, m)
}
handler.help = ['tiktok']
handler.tags = ['downloader']
handler.command = /^(tiktok|tt|ttdl|tiktokdl)$/i
handler.limit = 

export default handler
