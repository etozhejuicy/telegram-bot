// Import the Telegram Bot API
import { TelegramBot } from 'node-telegram-bot-api';

// Create a new Telegram bot instance
const token = '7263167373:AAGu68Qq1BT9MuZ0Ol5CeWygqZWCJYeAb00';
const bot = new TelegramBot(token, { polling: true });

// Define a command handler for the /start command
bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, 'Добро пожаловать в моего бота!');
});

// Define a message handler for all incoming messages
bot.on('message', (msg) => {
  bot.sendMessage(msg.chat.id, `Вы отправили: ${msg.text}`);
});