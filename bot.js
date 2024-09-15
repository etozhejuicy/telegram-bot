import axios from "axios";

const token = "YOUR_TELEGRAM_BOT_TOKEN";
const api = `https://api.telegram.org/bot${token}`;

axios
  .post(`${api}/setWebhook`, {
    url: "https://your-github-username.github.io/telegram-bot/", // Update with your GitHub username
  })
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error(error);
  });
