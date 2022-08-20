let handler = async (m, { conn }) => {
let ppown = await conn.profilePictureUrl(nomorown + '@s.whatsapp.net', 'image').catch(_ => hwaifu[1]) 
let teksbio = `*───────[ BIODATA OWNER ]───────*
*💌 Nama* : Filobot-Md
*✉️ Nama RL* : SkyxmoonOffc
*♂️ Gender* : Laki - laki
*🕋 Agama* : Hindu
*⏰ Tanggal lahir* : 01 September 2008
*🎨 Umur* : 13
*🧮 Kelas* : 8 masih sempet banh
*🧩 Hobby* : gtw
*💬 Sifat* : Dingin, Ramah, Lemah lembut, Prik, Tolol
*🗺️ Tinggal* : Indo, Bali, Jembrana, Negara
*❤️ Suka* : warnah hitam, putih, makan , kucing
*💔 Benci* : Cewe Alay/Matre, anak opeber, seleb

*───────[ SOSIAL MEDIA ]───────*
*📷 instagran* : @Skyxmoon
*🇫  Facebook* : sahrulwara
*🏮 Chanel Youtube* : ARULL OFC
*🐈 Github* : Xavieroffcial

`
conn.sendHydrated(m.chat, teksbio, wm, ppown, "wa.me/" + nomorown, "💬 ᴄʜᴀᴛs", null,null, [["ᴅᴏɴᴀsɪ", '.donasi'], [null, null],[null,null]], m)
}
handler.help = ['bioowner']
handler.tags = ['info']
handler.command = /^(bioowner)$/i

export default handler
