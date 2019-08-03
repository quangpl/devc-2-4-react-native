const CHOICES = [
  {
    value: "rock",
    name: "Rock",
    imageUrl: "https://i.imgur.com/tCSOIso.png"
  },
  {
    value: "paper",
    name: "Paper",
    imageUrl: "https://i.imgur.com/q0cVZTN.png"
  },
  {
    value: "scissors",
    name: "Scissors",
    imageUrl: "https://i.imgur.com/JFZHIUh.png"
  }
];
const getRandomChoice = () => {
  return CHOICES[Math.floor(Math.random() * CHOICES.length)];
};
export { CHOICES, getRandomChoice };
