// Genrate abasic insight based on Dob

// based on month
const zodiacSignsByMonth = [
  "Capricorn",
  "Aquarius",
  "Pisces",
  "Aries",
  "Taurus",
  "Gemini",
  "Cancer",
  "Leo",
  "Virgo",
  "Libra",
  "Scorpio",
  "Sagittarius",
];
function getZodiacSign(d, m) {
  // Western sun sign by month/day
  const z = [
    {
      sign: "Capricorn",
      from: [12, 22],
      to: [1, 19],
      emoji: "🐐",
      color: "#786fa6",
      planet: "Saturn",
    },
    {
      sign: "Aquarius",
      from: [1, 20],
      to: [2, 18],
      emoji: "🏺",
      color: "#00d2d3",
      planet: "Saturn/Uranus",
    },
    {
      sign: "Pisces",
      from: [2, 19],
      to: [3, 20],
      emoji: "🐟",
      color: "#48dbfb",
      planet: "Jupiter/Neptune",
    },
    {
      sign: "Aries",
      from: [3, 21],
      to: [4, 19],
      emoji: "🐏",
      color: "#ff6b6b",
      planet: "Mars",
    },
    {
      sign: "Taurus",
      from: [4, 20],
      to: [5, 20],
      emoji: "🐂",
      color: "#1dd1a1",
      planet: "Venus",
    },
    {
      sign: "Gemini",
      from: [5, 21],
      to: [6, 20],
      emoji: "👯",
      color: "#54a0ff",
      planet: "Mercury",
    },
    {
      sign: "Cancer",
      from: [6, 21],
      to: [7, 22],
      emoji: "🦀",
      color: "#576574",
      planet: "Moon",
    },
    {
      sign: "Leo",
      from: [7, 23],
      to: [8, 22],
      emoji: "🦁",
      color: "#feca57",
      planet: "Sun",
    },
    {
      sign: "Virgo",
      from: [8, 23],
      to: [9, 22],
      emoji: "🌾",
      color: "#10ac84",
      planet: "Mercury",
    },
    {
      sign: "Libra",
      from: [9, 23],
      to: [10, 22],
      emoji: "⚖️",
      color: "#5f27cd",
      planet: "Venus",
    },
    {
      sign: "Scorpio",
      from: [10, 23],
      to: [11, 21],
      emoji: "🦂",
      color: "#222f3e",
      planet: "Mars/Pluto",
    },
    {
      sign: "Sagittarius",
      from: [11, 22],
      to: [12, 21],
      emoji: "🏹",
      color: "#ffa502",
      planet: "Jupiter",
    },
  ];
}

// size31 based on date
const compliments = [
  "You have a great sense of humor.",
  "Your positive energy is contagious.",
  "You are a wonderful listener.",
  "I admire your confidence.",
  "You have an amazing smile.",
  "You're an incredibly strong person.",
  "You make the world a better place.",
  "Your creativity is inspiring.",
  "You have a heart of gold.",
  "You are so thoughtful and kind.",
  "I love your style.",
  "You always know how to make me laugh.",
  "You are a true friend.",
  "You handle challenges with grace.",
  "You're a brilliant problem-solver.",
  "You have such a calming presence.",
  "You're an inspiration to others.",
  "You're so good at what you do.",
  "Your passion is infectious.",
  "You have the best ideas.",
  "You're a joy to be around.",
  "You radiate kindness.",
  "You're incredibly resilient.",
  "Your perspective is so refreshing.",
  "You have a beautiful soul.",
  "You are capable of great things.",
  "You always see the best in people.",
  "You make difficult things look easy.",
  "You are fiercely intelligent.",
  "You're one of a kind.",
  "You're a true leader.",
];

// size 20
const victimCompliments = [
  "You're so giving, even when others don't appreciate it.",
  "Your kindness is a light in a dark world, even if it goes unnoticed.",
  "You're always there for everyone, but who is there for you?",
  "You put others first, even at your own expense.",
  "You're a true martyr, always sacrificing for others.",
  "You have a heart of gold, but people just walk all over you.",
  "It's a shame your efforts aren't always reciprocated.",
  "You're always the bigger person, even when they're wrong.",
  "You're too good for this world.",
  "You have a level of empathy that most people lack.",
  "You're a beacon of selflessness in a selfish world.",
  "You keep giving, even when you're running on empty.",
  "Your generosity is a rare gift, often taken for granted.",
  "It's sad that people don't see how much you do for them.",
  "You're always the one to apologize, even when it's not your fault.",
  "You're a beautiful soul, but people don't deserve you.",
  "Your strength is admirable, especially when you face so much unfairness.",
  "You always offer a hand, but no one ever seems to offer one back.",
  "You go above and beyond, and no one ever returns the favor.",
  "You're a selfless hero, even if you never get the credit.",
];

// size 30
const zodiacRecommendations = [
  // Aries (March 21 - April 19)
  "Try a new physical activity that gets your heart pumping, like a boxing or spin class.",
  "Start a new habit, like journaling or meditating for five minutes every morning.",
  "Reach out to someone you admire and ask them for career advice.",
  // Taurus (April 20 - May 20)
  "Dedicate an entire afternoon to doing absolutely nothing.",
  "Cook a lavish meal for yourself or a loved one, savoring every step of the process.",
  "Buy a new plant for your home to nurture and watch it grow.",
  // Gemini (May 21 - June 20)
  "Listen to a new podcast series on a topic you know nothing about.",
  "Call a friend you haven't spoken to in a while just to catch up.",
  "Go to a bookstore and pick up the first book that catches your eye, no matter the genre.",
  // Cancer (June 21 - July 22)
  "Spend a day volunteering at a local animal shelter.",
  "Organize a small get-together at your home for your close friends.",
  "Write a letter to yourself about what you hope to achieve in the next year.",
  // Leo (July 23 - August 22)
  "Perform a random act of kindness for a stranger, like paying for their coffee.",
  "Take a selfie and post it, embracing your confidence.",
  "Treat yourself to a night out at the movies or a live show.",
  // Virgo (August 23 - September 22)
  "Declutter a small area of your home, like a drawer or a single shelf.",
  "Create a detailed to-do list for the week ahead and stick to it.",
  "Try a new, healthy recipe and focus on the precise measurements.",
  // Libra (September 23 - October 22)
  "Put on a playlist of calming music and just sit quietly.",
  "Compliment three different people on something specific and genuine.",
  "Go to a museum or art gallery and spend time with a single piece that speaks to you.",
  // Scorpio (October 23 - November 21)
  "Practice a new form of meditation or mindfulness.",
  "Have a difficult but honest conversation you've been avoiding.",
  "Read a psychological thriller that challenges your thinking.",
  // Sagittarius (November 22 - December 21)
  "Research and plan a dream vacation, even if it's years away.",
  "Watch a documentary on a historical or cultural topic you find fascinating.",
  "Take a new route to work or an errand you run often.",
  // Capricorn (December 22 - January 19)
  "Set a new professional goal for yourself.",
  "Begin a long-term DIY project, like building a piece of furniture.",
  "Put on a playlist of motivational music and get your workspace organized.",
];

// size 20
const futurePredictions = [
  "You will find great success in your career.",
  "An exciting new adventure is on the horizon for you.",
  "You will become a source of inspiration to many.",
  "A deep and meaningful connection will enter your life soon.",
  "You will overcome a long-standing challenge with grace.",
  "Your financial situation will improve unexpectedly.",
  "You will discover a hidden talent you never knew you had.",
  "A cherished dream is closer to reality than you think.",
  "You will travel to a place you've always wanted to visit.",
  "Your creative work will find its audience.",
  "You will find profound peace and inner happiness.",
  "A past mistake will lead to a valuable lesson and a new beginning.",
  "You will build a strong and supportive community around you.",
  "Your wisdom and perspective will be sought after by others.",
  "A significant personal goal will be achieved in the coming year.",
  "You will feel a renewed sense of purpose and direction.",
  "A new friendship will bring immense joy and laughter.",
  "You will become the master of a skill you once found difficult.",
  "A wonderful surprise is waiting for you just around the corner.",
  "You will have a profound impact on someone's life.",
];

function getBirthstone(m) {
  const stones = {
    1: { name: "Garnet", emoji: "🟥" },
    2: { name: "Amethyst", emoji: "💜" },
    3: { name: "Aquamarine", emoji: "🩵" },
    4: { name: "Diamond", emoji: "💎" },
    5: { name: "Emerald", emoji: "💚" },
    6: { name: "Pearl/Alexandrite", emoji: "⚪️" },
    7: { name: "Ruby", emoji: "❤️" },
    8: { name: "Peridot/Spinel", emoji: "🟩" },
    9: { name: "Sapphire", emoji: "💙" },
    10: { name: "Opal/Tourmaline", emoji: "🌈" },
    11: { name: "Topaz/Citrine", emoji: "🟨" },
    12: { name: "Turquoise/Tanzanite", emoji: "🟦" },
  };
  return stones[m];
}

const form = document.getElementById("astroForm");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const Name = document.getElementById("firstName").value;
  const Surname = document.getElementById("lastName").value;
  const Day = Number(document.getElementById("day").value);
  const Month = Number(document.getElementById("month").value);
  const Year = Number(document.getElementById("year").value);
  const result = document.getElementById("results");

  const first_message = ` Hello ${Name} ${Surname}`;
  const sec_message = ` Your Zodiac sign is ${zodiacSignsByMonth[Month - 1]} `;
  const third_message = compliments[Day - 1];

  var index = Math.floor(Math.random() * 20);
  const fourth_message = victimCompliments[index];

  index = (Name.length * Surname.length * Year) % 30;
  const fifth_message = zodiacRecommendations[index];

  index = (Day * Month * Year) % 20;
  const sixth_message = futurePredictions[index];

  // // Theme toggle
  // const themeToggle = $("#themeToggle");
  // function applyTheme(mode) {
  //   document.body.classList.toggle("light", mode === "light");
  //   localStorage.setItem("theme", mode);
  // }
  // themeToggle.addEventListener("click", () => {
  //   const isLight = document.body.classList.contains("light");
  //   applyTheme(isLight ? "dark" : "light");

  //   if (savedTheme) applyTheme(savedTheme);
  // });

  result.innerText = `${first_message} ${sec_message} ${third_message} ${fourth_message}  Our Reccomdation for you: ${fifth_message} Your Future Prediction is: ${sixth_message} `;
});

// zomato responsive clone
