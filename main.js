const randomFacts = ['Honey never spoils and has been found in ancient Egyptian tombs still edible', 'The shortest war in history was between Britain and Zanzibar on August 27, 1896, lasting only 38 minutes.',
    'A day on Venus is longer than a year on Venus', "Bananas are berries, but strawberries aren't", "There are more possible iterations of a game of chess than there are atoms in the known universe",
    "Octopuses have three hearts and blue blood", "The Eiffel Tower can be 15 cm taller during the summer due to the expansion of iron", "Wombat poop is cube-shaped",
    "A group of flamingos is called a 'flamboyance.", "The inventor of the Pringles can is now buried in one", "The shortest commercial flight in the world lasts just 57 seconds between two Scottish islands",
    "A bolt of lightning contains enough energy to toast 100,000 slices of bread", "The dot over the lowercase 'i' and 'j' is called a 'tittle'", "The oldest 'your mom' joke was discovered on a 3,500-year-old Babylonian tablet",
    "There are more stars in the universe than grains of sand on all the Earth's beaches", "The smell of freshly cut grass is actually a plant distress call", "The first computer virus was created in 1983 and was called the 'Elk Cloner'",
    "Humans share about 60% of their DNA with bananas", "The human nose can detect over 1 trillion different scents", "A sneeze can travel up to 100 miles per hour",
    "The longest hiccuping spree lasted 68 years", "The fingerprints of a koala are so indistinguishable from humans that they have been confused at crime scenes",
    "The word 'nerd' was first coined by Dr. Seuss in his book 'If I Ran the Zoo'", "There's a species of jellyfish that is biologically immortal", "Sloths can hold their breath longer than dolphins can",
    "The Guinness World Record for the longest time without sleep is 11 days", "A single cloud can weigh more than a million pounds", "Humans are the only animals that blush",
    "The national animal of Scotland is the unicorn", "The inventor of the Frisbee was turned into a Frisbee after he died", "A duck's quack doesn't echo, and no one knows why",
    "The first oranges weren't orange; they were green", "Cows have best friends and get stressed when they are separated", "It's illegal to own just one guinea pig in Switzerland because they get lonely",
    "Sea otters hold hands when they sleep to keep from drifting apart", "The heart of a blue whale is so large that a human can swim through its arteries",
    "The word 'PEZ' comes from the German word for peppermint, 'Pfefferminz'", "The voices of Mickey Mouse and Minnie Mouse got married in real life",
    "The first webcam watched a coffee pot at the University of Cambridge", "The original London Bridge is now in Arizona", "An apple, potato, and onion all taste the same if you eat them with your nose plugged",
    "The scientific term for brain freeze is 'sphenopalatine ganglioneuralgia'", "There is a basketball court on the top floor of the U.S. Supreme Court building, known as the 'Highest Court in the Land'",
    "Elephants are the only mammals that can't jump", "A group of crows is called a 'murder'", "Humans are born with 300 bones, but by the time they reach adulthood, they have only 206",
    "The longest recorded flight of a chicken is 13 seconds", "A jellyfish is 95% water", "A crocodile cannot stick its tongue out", "The Twitter bird actually has a name: Larry",
    "It takes a photon 40,000 years to travel from the core of the sun to the surface, but only 8 minutes to reach Earth", "A shrimp's heart is located in its head",
    "The average person will spend six months of their life waiting for red lights to turn green", "If you lift a kangaroo's tail off the ground, it can't hop",
    "A snail can sleep for three years", "The world's smallest reptile was discovered in 2021 and can fit on the tip of a finger", "A day on Earth used to be 22 hours long 620 million years ago", "A blue whale's tongue can weigh as much as an elephant",
    "The chance of getting a royal flush in poker is 1 in 649,740", "In 2006, Pluto was reclassified as a dwarf planet", "Cheetahs can't roar; they can only meow like domestic cats",
    "The word 'quiz' was invented in 1791 by a Dublin theater manager who made a bet that he could introduce a new word into the English language within 24 hours",
    "Mosquitoes are attracted to people who have just eaten bananas", "The first recorded use of the word 'nerd' was in 1950 by Dr. Seuss", "Avocados are berries, while raspberries and strawberries are not",
    "The M's in M&M's stand for Mars and Murrie, the creators of the candy", "There's a town in Norway called Hell, and it freezes over every winter", "The original name for butterfly was 'flutterby'",
    "There's a basketball court inside the U.S. Supreme Court building", "Banging your head against a wall for one hour burns 150 calories", "In Switzerland, it's illegal to flush the toilet after 10 PM in an apartment building",
    "The longest word in the English language is 189,819 letters long and takes three and a half hours to pronounce", "The inventor of the microwave appliance received only $2 for his discovery",
    "A polar bear's skin is black, and its fur is actually clear", "Most of the dust in your home is made of human skin", "In Japan, there's a museum dedicated entirely to rocks that look like faces",
    "A group of pandas is called an 'embarrassment'", "The tongue of a giraffe is so long that it can lick its own ears", "The first food eaten in space by astronauts was applesauce",
    "An ostrich's eye is bigger than its brain", "The moon has moonquakes, just like the Earth has earthquakes", "The human stomach gets a new lining every three to four days to prevent it from digesting itself",
    "The average person walks the equivalent of three times around the world in a lifetime", "The Great Wall of China is not visible from space without aid.", "The strongest muscle in the body, relative to its size, is the tongue",
    "Polar bears are nearly undetectable by infrared cameras due to their transparent fur", "A cockroach can live for a week without its head", "The 'sixth sick sheik's sixth sheep's sick' is said to be the toughest tongue twister in the English language",
    "The word 'set' has the most definitions of any word in the English language", "The world's oldest piece of chewing gum is over 9,000 years old", "The human body contains enough fat to make seven bars of soap",
    "In France, it is legal to marry a dead person", "The longest time between two twins being born is 87 days", "The word 'ghost' is derived from the Old English word 'gast,' which means 'spirit' or 'soul'",
    "A single strand of spaghetti is called a 'spaghetto'", "The average human adult has approximately 5 million hair follicles", "The name 'Jessica' was first used in William Shakespeare's play 'The Merchant of Venice'",
    "A group of porcupines is called a 'prickle'", "The only letter that doesn't appear in any U.S. state name is the letter 'Q'", "The 100 folds in a chef's hat represent 100 ways to cook an egg"
];
const randomAdjectives = ["Adventurous", "Brave", "Calm", "Dazzling", "Elegant", "Friendly", "Grumpy", "Humble", "Icy", "Jovial", "Kind", "Luminous", "Mysterious",
    "Nimble", "Optimistic", "Puzzling", "Quirky", "Radiant", "Serene", "Tenacious", "Uplifting", "Vibrant", "Whimsical", "Zealous", "Agile", "Bold", "Cautious",
    "Delicate", "Energetic", "Fierce", "Gentle", "Hilarious", "Inquisitive", "Jolly", "Keen", "Lazy", "Majestic", "Nervous", "Obedient", "Playful", "Quiet",
    "Robust", "Sly", "Tranquil", "Unpredictable", "Vivid", "Witty", "Youthful", "Zany", "Ambitious", "Blissful", "Crafty", "Daring", "Eager", "Fearless", "Gracious",
    "Honest", "Intense", "Joyful", "Knowledgeable", "Lively", "Marvelous", "Naughty", "Observant", "Patient", "Quick", "Resilient", "Strong", "Thoughtful", "Unyielding",
    "Versatile", "Warm", "Xuberant", "Zesty", "Ardent", "Bright", "Curious", "Dynamic", "Enthusiastic", "Frank", "Gritty", "Happy", "Inventive", "Jumpy", "Kindhearted",
    "Loyal", "Mischievous", "Noble", "Outgoing", "Persistent", "Quizzical", "Spirited", "Trustworthy", "Unique", "Vivacious", "Wise", "Xenial", "Youthful", "Zesty",
    "Zippy"
];

const randomTimes = ["second", "minute", "hour", "day", "week", "month", "Three months", "year", "Five years", "decade"];

let randomFact;
let randomAdjective;
let randomTime;

// Get the random Fact
function getRandomFact(arr) {
    let selectionNumber = Math.floor(Math.random() * 100);
    randomFact = arr[selectionNumber];
    return randomFact;
}

const generatedFact = getRandomFact(randomFacts);

// Get random adjective
function getRandomAdjective(arr) {
    let selectionNumber = Math.floor(Math.random() * 100);
    randomAdjective = arr[selectionNumber];
    randomAdjective = randomAdjective.toLowerCase();
    return randomAdjective;
}

//Get random time period
function getRandomTime(arr) {
    let selectionNumber = Math.floor(Math.random() * 10);
    randomTime = arr[selectionNumber];
    randomTime = randomTime.toLowerCase();
    return randomTime;
}

//Calls the functions
getRandomFact(randomFacts);
getRandomAdjective(randomAdjectives);
getRandomTime(randomTimes);

//Prints the output to the console
console.log(`Your ${randomAdjective} fact of the ${randomTime} is:`);
console.log(randomFact + '!');
