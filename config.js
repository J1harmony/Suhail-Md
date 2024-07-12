const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_21_30_07_12_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgOTQsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjUxLFxuICAgICAgICAxNTQsXG4gICAgICAgIDUxLFxuICAgICAgICAxOTQsXG4gICAgICAgIDM3LFxuICAgICAgICAxNTEsXG4gICAgICAgIDQ4LFxuICAgICAgICAxODUsXG4gICAgICAgIDU2LFxuICAgICAgICAxMjgsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjMyLFxuICAgICAgICA0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNzEsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNCxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMCxcbiAgICAgICAgMjMwLFxuICAgICAgICA1MixcbiAgICAgICAgMTEwLFxuICAgICAgICAxNjksXG4gICAgICAgIDUzLFxuICAgICAgICAxMDhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMixcbiAgICAgICAgMTg2LFxuICAgICAgICAyMixcbiAgICAgICAgNzcsXG4gICAgICAgIDIwMyxcbiAgICAgICAgOTcsXG4gICAgICAgIDE1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDgyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDc5LFxuICAgICAgICAxNzYsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMTEsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjUwLFxuICAgICAgICAxNyxcbiAgICAgICAgMTAxLFxuICAgICAgICAxOTAsXG4gICAgICAgIDk3LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjU0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTE3LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIzOSxcbiAgICAgICAgODYsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMTEsXG4gICAgICAgIDM4LFxuICAgICAgICA3NixcbiAgICAgICAgMTYxLFxuICAgICAgICAxMTgsXG4gICAgICAgIDQ4LFxuICAgICAgICA3LFxuICAgICAgICAyMzEsXG4gICAgICAgIDY2LFxuICAgICAgICA2OSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyNyxcbiAgICAgICAgMTIsXG4gICAgICAgIDQyLFxuICAgICAgICA3LFxuICAgICAgICAxMzksXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTQxLFxuICAgICAgICA0MyxcbiAgICAgICAgNjMsXG4gICAgICAgIDEsXG4gICAgICAgIDQ5LFxuICAgICAgICAxOTIsXG4gICAgICAgIDExN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgOTUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxLFxuICAgICAgICAxOTksXG4gICAgICAgIDEzMCxcbiAgICAgICAgNjcsXG4gICAgICAgIDY4LFxuICAgICAgICAzOCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNTAsXG4gICAgICAgIDgyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxOSxcbiAgICAgICAgMjksXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjM1LFxuICAgICAgICAwLFxuICAgICAgICA5NSxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDkxLFxuICAgICAgICAxNzMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIzMixcbiAgICAgICAgOTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNixcbiAgICAgICAgMjAyLFxuICAgICAgICAxODcsXG4gICAgICAgIDk2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTczLFxuICAgICAgICAxNTEsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTc5LFxuICAgICAgICAxMixcbiAgICAgICAgMTM5LFxuICAgICAgICA4OCxcbiAgICAgICAgOTYsXG4gICAgICAgIDEyMixcbiAgICAgICAgNzgsXG4gICAgICAgIDE5NixcbiAgICAgICAgNjQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTksXG4gICAgICAgIDg0LFxuICAgICAgICAxNyxcbiAgICAgICAgNTUsXG4gICAgICAgIDIyOSxcbiAgICAgICAgODUsXG4gICAgICAgIDc1LFxuICAgICAgICAyMTksXG4gICAgICAgIDMyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNzMsXG4gICAgICAgIDk2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjAxLFxuICAgICAgICA3OCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMDgsXG4gICAgICAgIDg1LFxuICAgICAgICAxNDYsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMTQsXG4gICAgICAgIDI0MixcbiAgICAgICAgOTgsXG4gICAgICAgIDc0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTAxLFxuICAgICAgICAxOTIsXG4gICAgICAgIDk3LFxuICAgICAgICA2MSxcbiAgICAgICAgODEsXG4gICAgICAgIDQ2LFxuICAgICAgICA2NSxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMjksXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjM4LFxuICAgICAgICA5NSxcbiAgICAgICAgNjEsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMzksXG4gICAgICAgIDU2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTE1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDksXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDI2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDI2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNTMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMzMsXG4gICAgICAgIDM5LFxuICAgICAgICAxNTIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxODQsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTUxLFxuICAgICAgICAxODcsXG4gICAgICAgIDE0LFxuICAgICAgICAxMCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjI3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTAsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDEyLFxuICAgICAgICA1OSxcbiAgICAgICAgMjgsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTA2LFxuICAgICAgICA5MixcbiAgICAgICAgMTc2LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE0LFxuICAgICAgICAxOSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDY4LFxuICAgICAgICA5NSxcbiAgICAgICAgMCxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxODUsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMTAsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjM4LFxuICAgICAgICA5NixcbiAgICAgICAgOTUsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTMxXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNzIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiZzJSTnVqenNEUnVnYzdoenB6VEFhOVJJM05yVWptNnpFTzR0dElqWUQzWT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiQzR5WW10ZjRScWk0Qll3M01WaU5FUVwiLFxuICBcInBob25lSWRcIjogXCIwMTBkMTAzNS0yYmExLTRmOGItYTczYi03ZDkzMjViMjAwYWNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjIzLFxuICAgICAgNTQsXG4gICAgICA4NSxcbiAgICAgIDksXG4gICAgICAxNDUsXG4gICAgICAxMzgsXG4gICAgICAyMDcsXG4gICAgICAxODUsXG4gICAgICAxNDQsXG4gICAgICAxNDgsXG4gICAgICAyNixcbiAgICAgIDEwOSxcbiAgICAgIDMxLFxuICAgICAgMTI4LFxuICAgICAgMjI4LFxuICAgICAgMCxcbiAgICAgIDg4LFxuICAgICAgNjQsXG4gICAgICAxNTMsXG4gICAgICA2MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA0NSxcbiAgICAgIDExNyxcbiAgICAgIDI4LFxuICAgICAgMTQ0LFxuICAgICAgMjI5LFxuICAgICAgODYsXG4gICAgICA4MyxcbiAgICAgIDE2OSxcbiAgICAgIDg1LFxuICAgICAgMTAzLFxuICAgICAgMTQ2LFxuICAgICAgMjI2LFxuICAgICAgMjE2LFxuICAgICAgMjUwLFxuICAgICAgMTIxLFxuICAgICAgMTExLFxuICAgICAgMjAzLFxuICAgICAgMTE4LFxuICAgICAgMjQzLFxuICAgICAgMjBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiRzg5WE4zUE1cIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzMzU1MDEyMzc4NDozMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTI5NTAyMjA2MjY3NDQ0OjMxQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ01YeXpyVURFSUhCeHJRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiM0REa0I0OWhqYi9kVnhaRmFKS3lEa0w3T3NHazJhV2lSbUoyTGxNYlMzbz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJOM3VGUWFHTjh1RFhDN0Erd3VMbS9xUTZSblZsWUYzbFVZQ0dhSU8xdDBadlpsdHU3NGRjU093R0paYUxFT283ZXI5alNSK3RGLzE5UWs2bkdqaE5CQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ4Yklrb0ZRNkNHbm1DckRKYmdVRmRnUEgySzlEUlo3aW9mZTZhZ1p6ZU9aYys4WFhkWUN3V3ZTejhDN29FUzViZGg3UEw3bzBsU0VZM0sza05DVHloQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzM1NTAxMjM3ODQ6MzFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxMjJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDgxOTg0NVxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
