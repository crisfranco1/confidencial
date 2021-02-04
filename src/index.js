const messages = [
  "🤠 Sebastian 🧔🏻",
  "🧦 Johan 🤑",
  "💪 Felipe 🤣",
  "😁 Edgar 💩",
  "🐖 Sanchez 💄",
  "😉 Kelly 🤩 ",
  "🤓 Eme 😝  ",
  "🤗 Jhon ⚽️ ",
  "👬 Franco"
];

const randomMsg = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(message);
  };

module.exports = { randomMsg };
