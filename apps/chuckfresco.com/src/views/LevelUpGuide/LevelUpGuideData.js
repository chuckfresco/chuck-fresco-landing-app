export const levelSections = [
  {
    levelRange: "1-2",
    description: "Farm Rats and Grey Wolves in Southern Thicket.",
    monsters: [
      { name: "Rat", image: "/assets/level-up/southern-thicket/rat_a_portrait.png", location: "Southern Thicket" },
      { name: "Grey Wolf", image: "/assets/level-up/southern-thicket/wolf_a_portrait.png", location: "Southern Thicket" }
    ]
  },
  {
    levelRange: "3-4",
    description: "Farm Warg level 3 and level 4 Gigas Hornet to farm some Chilling Shard in Southern Thicket.",
    monsters: [
      { name: "Warg", image: "/assets/level-up/southern-thicket/wolf_b_portrait.png", location: "Southern Thicket", keyDrops: "Feral Ember"  },
      { name: "Gigas Hornet", image: "/assets/level-up/southern-thicket/wasp_a_portrait.png", location: "Southern Thicket", keyDrops: "Chilling Shard" }
    ]
  },
  {
    levelRange: "5",
    description: "Farm Brown Bear in Southern Thicket.",
    monsters: [
      { name: "Brown Bear", image: "/assets/level-up/southern-thicket/bear_brown_portrait.png", location: "Southern Thicket" }
    ]
  },
  {
    levelRange: "6-7",
    description: "Farm Chemist in Northern Thicket and craft Heat Wave once you finish Quest #1.",
    monsters: [
      { name: "Chemist", image: "/assets/level-up/northern-thicket/chemist_a_portrait.png", location: "Northern Thicket", keyDrops: "Cunning Shard I" }
    ],
    upgradeSpells: ["📜Heat Wave"],

  },
  {
    levelRange: "8-10",
    description: "Farm Green Goblin With Chain in Northern Thicket.",
    monsters: [
      { name: "Green Goblin With Chain", image: "/assets/level-up/northern-thicket/goblin_gladiator_a_portrait.png", location: "Northern Thicket" }
    ]
  },
  {
    levelRange: "11",
    description: "Yellow Gigas Hornet in Northern Thicket.",
    monsters: [
      { name: "Gigas Hornet", image: "/assets/level-up/northern-thicket/wasp_a_portrait.png", location: "Northern Thicket" }
    ]
  },
  {
    levelRange: "12",
    description: "Move to The Wild. Farm Grey Rat.",
    monsters: [
      { name: "Grey Rat", image: "/assets/level-up/the-wild/rat_a_portrait.png", location: "The Wild", keyDrops: "Feral Shard I, Volatile Gambit (Recipe)" }
    ]
  },
  {
    levelRange: "13",
    description: "Farm Yellow Firefly to craft Volatile Gambit Spell. Continue to farm Grey Goo and Warg.",
    monsters: [
      { name: "Erynis Yellow Firefly", image: "/assets/level-up/the-wild/erynis_c_portrait.png", location: "The Wild", keyDrops: "Pulsing Shard I" },
      { name: "Smoking Slime", image: "/assets/level-up/the-wild/slimegrey.png", location: "The Wild" },
      { name: "Warg", image: "/assets/level-up/southern-thicket/wolf_b_portrait.png", location: "The Wild", keyDrops: "Feral Ember I" },
    ],
     upgradeSpells: ["Volatile Gambit"],
  },
  {
    levelRange: "14",
    description: "Move to Azure Expanse. Farm Yellow Firefly and Giant Rat in Azure to craft Firebolt II.",
    monsters: [
      { name: "Yellow Firefly", image: "/assets/level-up/azure-expanse/erynis_c_portrait.png", location: "Azure Expanse", keyDrops: "Pulsing Shard II" },
      { name: "Giant Rat", image: "/assets/level-up/azure-expanse/rat_a_portrait.png", location: "Azure Expanse", keyDrops: "Feral Shard II" }
    ],
    upgradeSpells: ["Firebolt II"],

  },
  {
    levelRange: "15-16",
    description: "Farm Green Slime and then Blue Djinn for materials to craft Demon Armor and craft Halting Staff.",
    monsters: [
      { name: "Green Slime", image: "/assets/level-up/azure-expanse/slimegreen.png", location: "Azure Expanse", keyDrops: "Disturbing Shard II"  },
      { name: "Blue Djinn", image: "/assets/level-up/azure-expanse/djinnblue.png", location: "Azure Expanse", keyDrops: "Pulsing Ember II" },

    ],

      equipmentList: ["Kirama Demon Armor", "Halting Staff"],
  },
  {
    levelRange: "17",
    description: "Craft Demon Helm by farming Black Eagle materials. Continue farming Green Slime materials.",
    monsters: [
      { name: "Black Eagle", image: "/assets/level-up/azure-expanse/eagle_b_portrait.png", location: "Azure Expanse", keyDrops: "Feral Ember II" },
      { name: "Green Slime", image: "/assets/level-up/azure-expanse/slimegreen.png", location: "Azure Expanse", keyDrops: "Disturbing Shard II" }
    ],
    equipmentList: ["Kirama Demon Helm"],
  },
  {
    levelRange: "18",
    description: "Continue to farm Blue Djinn after crafting Demon Armor & Halting Staff. Consider completing Quest #9 to get Devouring Scythe Relic. Farm Miama Toad in the Wild for materials" ,
    monsters: [
      { name: "Blue Djinn", image: "/assets/level-up/azure-expanse/djinnblue.png", location: "Azure Expanse", keyDrops: "Pulsing Ember II" },
      { name: "Miasma Toad", image: "/assets/level-up/moon-wood/Miasmatoad_icon.png", location: "The Wild",  keyDrops: "Pulsing Ember, Halting Staff (Recipe)" }
    ],
    equipmentList: ["Halting Staff", ],
  },
  {
    levelRange: "19",
    description: "Farm Owls because of their high experience gain.",
    monsters: [
      { name: "Owl", image: "/assets/level-up/azure-expanse/owl_a_portrait.png", location: "Azure Expanse", keyDrops: "Feral Shard II" }
    ]
  },
  {
    levelRange: "20-22",
    description: "Move to Moon Wood. Farm Chemist for Cunning Shard II and Gigas Hornet for Crittering Shard II. Craft Volatile Gambit II & Heat Wave II.",
    monsters: [
      { name: "Scientist", image: "/assets/level-up/moon-wood/chemist_a_portrait.png", location: "Moon Wood", keyDrops: "Cunning Shard II" },
      { name: "Gigas Hornet", image: "/assets/level-up/southern-thicket/wasp_a_portrait.png", location: "Moon Wood", keyDrops: "Chilling Shard II" }
    ],

    upgradeSpells: ["Heat Wave II", "Volatile Gambit II"],
  },
  {
    levelRange: "23",
    description: "Chemist and Miasma Toad.",
    monsters: [
      { name: "Chemist", image: "/assets/level-up/moon-wood/chemist_a_portrait.png", location: "Moon Wood", keyDrops: "Cunning Shard II" },
      { name: "Miasma Toad", image: "/assets/level-up/moon-wood/Miasmatoad_icon.png", location: "Moon Wood" }
    ]
  },
  {
    levelRange: "24",
    description: "Farm Miasma Toad",
    monsters: [
      { name: "Miasma Toad", image: "/assets/level-up/moon-wood/Miasmatoad_icon.png", location: "Moon Wood" }
    ]
  },
  {
    levelRange: "25",
    description: "Level 25 Complete!",
    monsters: []
  }
];

export const sideQuests = [
{
  title: "Quest #1: The Gathering Tree",
  youtube: "https://youtu.be/R0K0COdizEI?si=klVb-kPHwTKTB7y9",
  levelRange: "5",
  mapImage: "/assets/level-up/quests/images/quest-1-map.jpg",
  steps: [
    "Initiate the quest by speaking with the Green Emissary located at marker #1.",
    "As you travel toward point #2, collect the nearby flowers and have a brief conversation with the elf along the dirt path.",
    "Speak with the Attendant when you reach location #2.",
    "Make sure to mark #2 on your map for easy return.",
    "Head over to #3 and craft the flower hat.",
    "Use teleportation to return to the Attendant at #2.",
    "Take down both the corrupted fox and crow enemies.",

    "",
    "Reach at least level 6 before moving forward.",
    "Challenge and defeat the Corrupted Bear waiting at location #4.",
    "Return to #2 to follow up.",
    "Wrap up the quest by reporting back to the Green Emissary at #1.",
    "Quest completed!ee"
  ],
  reward: "Flower Hat, Old Pilgrim's Staff, Wild Call I, Eye Patch, Heat Wave I"
},
  {
  title: "Quest #2: The Mining Rights",
  youtube: "https://youtu.be/qDBtuu8jwyw?si=Kz2K-3GK35BaCV7b",
  levelRange: "5",
  mapImage: "/assets/level-up/quests/images/quest-2-map.jpg",
steps: [
  "Talk to the Red Emissary at point #1.",
  "Meet Johnie B. Wolfe at point #2.",
  "Enter the cave.",
  "Speak with Captain Gaines and hear him out. Get rewarded for letting him escape without fighting.",
  "Return to point #1 and tell the Red Emissary the truth.",
  "Quest completed!"
],
  reward: "Runibird Mount, 10x Ruby Gems "
},

  {
    title: "Quest #9: Follow the White Rabbit",
    levelRange: "18",
    mapImage: "/assets/level-up/quests/images/quest-9-map.jpg",
    steps: [
      "From The Wild Stone, head northeast to find the White Rabbit near a cave.",
      "Craft and equip a magical relic like Halting Staff to be allowed inside.",
      "Enter the cave and defeat the lurking beast.",
      "Go back to the Rabbit to finish your mission.",
      "Quest completed!"
    ],
    

    reward: "Devouring Scythe",

    equipmentList: ["Halting Staff", "📜Devouring Scythe"],
  },

];
