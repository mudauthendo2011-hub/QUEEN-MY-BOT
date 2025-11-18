//PREXZY SOLOS
//YouTube: @prexzyvilla
//Telegram: t.me/prexzyvilla_tech



const fs = require('fs')
const chalk = require('chalk')

//owmner v card
global.ytname = "ttk: @crazy.squad001" //ur ttk chanel name
global.socialm = "IG : prexzy.ay" //ur github or insta name
global.location = "south Africa" //ur location

//new
global.botname = 'QUEEN NYX' //ur bot name
global.ownernumber = 27799648540' //ur owner number
global.ownername = 'mudau thendo' //ur owner name
global.websitex = "https://whatsapp.com/channel/0029Vb7EosF9hXFBUaF5PT1E " //"https://whatsapp.com/channel/0029VaoNzzlJJhzQTJBL5n0F"
global.wagc = "https://whatsapp.com/channel/0029Vb7EosF9hXFBUaF5PT1E" //"https://whatsapp.com/channel/0029VaoNzzlJJhzQTJBL5n0F"
global.idch = '120363322892680943@newsletter'
global.themeemoji = '👑'
global.wm = "NYX"
global.botscript = 'https:https://whatsapp.com/channel/0029Vb7EosF9hXFBUaF5PT1E' //'https://whatsapp.com/channel/0029VaoNzzlJJhzQTJBL5n0F' //script link
global.packname = "アニメ・Sector X"
global.author = "Precious Ayomide"
global.creator = "27799648540@s.whatsapp.net"
global.xprefix = '.'
global.antidelete = false 
global.premium = ["27799648540"] // Premium User
global.hituet = 0
global.chatModeUsers = {}; // Store chat mode status per user

//bot sett
global.typemenu = 'v8' // menu type 'v1' => 'v8'
global.typereply = 'v4' // reply type 'v1' => 'v3'
global.autoblocknumber = '' //set autoblock country code
global.antiforeignnumber = '' //set anti foreign number country code
global.welcome = true //welcome/left in groups
global.anticall = true //bot blocks user when called
global.autoswview = true //auto status/story view
global.adminevent = false //show promote/demote message
global.groupevent = true //show update messages in group chat
//msg
global.mess = {
	limit: 'Your limit is up <\>',
	nsfw: 'Nsfw is disabled in this group, Please tell the admin to enable',
    done: 'Done ✓',
    error: 'Error !',
    success: 'Succes •'
}
//thumbnail
global.thumb = fs.readFileSync('./PrexzyMedia/theme/nyxpic.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
