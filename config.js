require("dotenv").config();
let oo = process.env.SUDO;
let mm = process.env.MENTION_AUDIO;
global.mentionaudio = mm.split(",");
global.owner = oo.split(",");
module.exports = {
  mongodb: process.env.MONGODB_URL || "",
  BOT_INFO: process.env.BOT_INFO || "IBRAAH-MD;Ibrahim-tech;https://telegra.ph/file/9bc81b0f606ee3fd374db.jpg",
  STICKER_DATA: process.env.STICKER_DATA || "Tech;Ibraah",
  SESSION_ID: process.env.SESSION_ID || "",
  MENTION: process.env.MENTION || "true",
  MENTION_DATA: process.env.MENTION_DATA || 'IBRAAH-MD;MULTI-DEVICE BOT MADE BY IBRAHIM-TECH;https://wa.me/2547107726666;https://i.imgur.com/3cMVKBk.jpeg',
  MENTION_AUDIO: global.mentionaudio,
  AUTO_STATUS_VIEW: process.env.AUTO_STATUS_VIEW || "true",
  AUTOBIO: process.env.AUTOBIO || "",
  CAPTION: process.env.CAPTION || "®©©ⁱᵇʳᵃᵃʰ-ᵐᵈV10",
  TENORAPI: process.env.TENOR_API_KEY || "AIzaSyCyouca1_KKy4W_MG1xsPzuku5oa8W358c",
  PORT: process.env.PORT || "9000",
  PREFIX: process.env.PREFIX || ".",
};
