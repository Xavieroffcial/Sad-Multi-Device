import fetch from 'node-fetch'
let handler = async(m, { conn, text, usedPrefix, command }) => {
let pp = await conn.profilePictureUrl(m.chat).catch(_ => null)

let str = `*Private Ngab*\n\n*Subscribe My Channel:\n*https://youtube.com/channel/UC1ikkqsPvtWuE_QonsET1yg\n\n*Terimakasih*`
conn.sendButtonDoc(m.chat, str, wm, 'Thanks','Bilek', ftextt, m)
}
handler.command = handler.help = ['sc']
handler.tags = ['info']

export default handler
