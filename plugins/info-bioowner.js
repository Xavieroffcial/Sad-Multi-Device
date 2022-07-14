let handler = async (m, { conn }) => {
let ppown = await conn.profilePictureUrl(nomorown + '@s.whatsapp.net', 'image').catch(_ => hwaifu[1]) 
let teksbio = `*───────[ BIODATA OWNER ]───────*
*💌 Nama* : ArullBotz
*✉️ Nama RL* : ArullOfc
*♂️ Gender* : Laki - laki
*🕋 Agama* : Islam
*⏰ Tanggal lahir* : 04 November 2003
*🎨 Umur* : 18
*🧮 Kelas* : Lulus SMA
*🧩 Hobby* : gtw
*💬 Sifat* : Dingin, Ramah, Lemah lembut, Prik, Tolol
*🗺️ Tinggal* : Indo, Kalsel, Kotabaru, Berangas
*❤️ Suka* : warnah Hijau dan Ungu, kucing
*💔 Benci* : Cewe Alay/Matre, anak epep, seleb

*───────[ SOSIAL MEDIA ]───────*
*📷 instagran* : @sahrulwara_____
*🇫  Facebook* : sahrulwara
*🏮 Chanel Youtube* : ARULL OFC
*🐈 Github* : Warikrr

`
conn.sendHydrated(m.chat, teksbio, wm, ppown, "wa.me/" + nomorown, "💬 ᴄʜᴀᴛs", null,null, [["ᴅᴏɴᴀsɪ", '.donasi'], [null, null],[null,null]], m)
}
handler.help = ['bioowner']
handler.tags = ['info']
handler.command = /^(bioowner)$/i

export default handler
