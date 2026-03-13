const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })

global.port =process.env.PORT
global.mongodb= process.env.MONGODB_URI || ""

global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94700000000";

global.timezone= process.env.TZ || "Asia/Karachi";

global.github="https://github.com/SuhailTechInfo/Suhail-Md";

module.exports = {

  HANDLERS: process.env.PREFIX  || ".",
  VERSION : "V1.2.8",

  botname : process.env.BOT_NAME  || "suhail-md",
  ownername:process.env.OWNER_NAME|| "Suhail",

  sessionName:process.env.SESSION_ID || "",

  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",

  WORKTYPE: process.env.MODE || "private"

};
