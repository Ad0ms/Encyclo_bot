var TelegramBot = require('node-telegram-bot-api');
var fs = require('fs');
var token = '6861515589:AAEhgd4C8A398aPQ5_anbXastZwlgp0NenQ';
var bot = new TelegramBot(token, {polling: true});
bot.on('text', function(msg) {
	var msgN = msg.text[0].toUpperCase() + msg.text.slice(1);
	fs.readFile('fuflo.txt', function (err, data) {
  if (err) throw err;
  else if(data.indexOf(msgN) >= 0){
  	var start = data.indexOf(msgN);
  	var end = data.indexOf("\n", start);
    bot.sendMessage(msg.from.id, data.slice(start, end));
 }
 else bot.sendMessage(msg.from.id, 'То что Вы ищете среди заведомых фуфломицинов не числится(при условии корректного написания) и скорее всего является нормальным лекарством, подробнее разобраться можно по ссылкам:\nhttp://www.cochranelibrary.com/\nhttps://www.ncbi.nlm.nih.gov/pubmed/\nhttps://www.accessdata.fda.gov/scripts/cder/daf/'); 
});
});
const express = require('express');
const app = express();

// Replace 'YOUR_VERCEL_DEPLOYED_URL' with the actual URL of your deployed Vercel app.
const webhookUrl = 'https://encyclo-bot-vqvo.vercel.app/api/telegram-bot';

bot.setWebHook(webhookUrl);
