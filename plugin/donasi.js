let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Axis [083103592954]
│ • Telkomsel [---]
╰────

╭─「 Donasi • Non Pulsa 」
│ • Gopay, OVO, [Qris only🗿]
│ • https://saweria.co/memeg
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
