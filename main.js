// Create a new Telegram bot instance
const token = '7263167373:AAGu68Qq1BT9MuZ0Ol5CeWygqZWCJYeAb00';
const apiURL = `https://api.telegram.org/bot${token}`;


// Define a function to send a message to the bot

async function sendMessage(chatId, text) {

  const response = await fetch(`${apiURL}/sendMessage`, {

    method: 'POST',

    headers: {

      'Content-Type': 'application/json',

    },

    body: JSON.stringify({

      chat_id: chatId,

      text: text,

    }),

  });

  const data = await response.json();

  console.log(data);

}


// Define a function to handle incoming messages

async function handleMessage(event) {

  const chatId = event.message.chat.id;

  const text = event.message.text;

  console.log(`Received message: ${text}`);

  await sendMessage(chatId, `You sent: ${text}`);

}


// Set up an event listener for incoming messages

window.addEventListener('message', handleMessage);