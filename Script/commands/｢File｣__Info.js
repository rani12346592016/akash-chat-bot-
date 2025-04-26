‎const axios = require("axios");
‎const request = require("request");
‎const fs = require("fs-extra");
‎const moment = require("moment-timezone");
‎
‎module.exports.config = {
‎    name: "admin",
‎    version: "1.0.0",
‎    hasPermssion: 0,
‎    credits: "akash",
‎    description: "Show Owner Info",
‎    commandCategory: "info",
‎    usages: "",
‎    cooldowns: 5
‎};
‎
‎module.exports.run = async function({ api, event }) {
‎    var time = moment().tz("Asia/Dhaka").format("DD/MM/YYYY hh:mm:ss A");
‎
‎    var callback = () => api.sendMessage({
‎        body: `
‎┏━━━━━━━━━━━━━━━━━━━━━┓
‎┃      🌟 𝗢𝗪𝗡𝗘𝗥 𝗜𝗡𝗙𝗢 🌟      
‎┣━━━━━━━━━━━━━━━━━━━━━┫
‎┃ 👤 𝐍𝐚𝐦𝐞      : 𝐚 𝐤 𝐚 𝐬 𝐡 ッ
‎┃ 🚹 𝐆𝐞𝐧𝐝𝐞𝐫    : 𝐌𝐚𝐥𝐞
‎┃ ❤️ 𝐑𝐞𝐥𝐚𝐭𝐢𝐨𝐧  : 𝐈𝐧 
‎┃ 🎂 𝐀𝐠𝐞       : 21
‎┃ 🕌 𝐑𝐞𝐥𝐢𝐠𝐢𝐨𝐧  : 𝐈𝐬𝐥𝐚𝐦
‎┃ 🏫 𝐄𝐝𝐮𝐜𝐚𝐭𝐢𝐨𝐧 : 𝐝𝐢𝐩𝐥𝐨𝐦𝐚 𝐢𝐧 𝐀𝐠𝐫𝐢𝐜𝐮𝐥𝐭𝐮𝐫𝐞
‎┃ 🏡 𝐀𝐝𝐝𝐫𝐞𝐬𝐬  : 𝐒𝐚𝐭𝐤𝐡𝐢𝐫𝐚, 𝐁𝐚𝐧𝐠𝐥𝐚𝐝𝐞𝐬𝐡
‎┣━━━━━━━━━━━━━━━━━━━━━┫
‎┃ 🎭 𝐓𝐢𝐤𝐭𝐨𝐤  : @obito_uchiha_853
‎┃ 📢 𝐓𝐞𝐥𝐞𝐠𝐫𝐚𝐦 : [𝐉𝐨𝐢𝐧 𝐍𝐨𝐰](@akash_72963)
‎┃ 🌐 𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 : [𝐂𝐥𝐢𝐜𝐤 𝐇𝐞𝐫𝐞](https://www.facebook.com/profile.php?id=100090438467997)
‎┣━━━━━━━━━━━━━━━━━━━━━┫
‎┃ 🕒 𝐔𝐩𝐝𝐚𝐭𝐞𝐝 𝐓𝐢𝐦𝐞: 24/04/2025 11:58:34 PM
‎┗━━━━━━━━━━━━━━━━━━━━━┛
‎        `,
‎        attachment: fs.createReadStream(__dirname + "/cache/1.png")
‎    }, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.png"));
‎  
‎    return request(encodeURI(`https://www.facebook.com/share/g/1BP3YRahKo/`))
‎        .pipe(fs.createWriteStream(__dirname + '/cache/1.png'))
‎        .on('close', () => callback());
‎};
