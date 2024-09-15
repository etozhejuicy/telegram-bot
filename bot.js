import axios from "axios";

const token = "7155676478:AAEjVwCxt3AtnUZL9-3bqxrv4b1Xw2RI52M";
const api = `https://api.telegram.org/bot${token}`;

axios
  .post(`${api}/setWebhook`, {
    url: "https://etozhejuicy.github.io/telegram-bot/",
  })
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error(error);
  });
