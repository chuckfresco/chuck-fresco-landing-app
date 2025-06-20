

export const materialFilterMap = {
  Red: "632256e24745f215b46c902e",
  Blue: "631fbee3308c6c735bd574c9",
  Green: "634ec38b808f6bf4626a3130",
  Yellow: "634ec133808f6bf4626a30ec",
  Purple: "631fc033308c6c735bd57524",
  White: "634ec4bc808f6bf4626a3154",
  Brown: "634ec267808f6bf4626a30fe"
};

export const pastelColors = {
  All: { bg: "#d3d3d3", text: "#333333" },
  Red: { bg: "#f4cccc", text: "#a40000" },
  Blue: { bg: "#cfe2f3", text: "#005087" },
  Green: { bg: "#d9ead3", text: "#216e39" },
  Yellow: { bg: "#fff2cc", text: "#a87f00" },
  Purple: { bg: "#e6ccff", text: "#6b28a7" },
  White: { bg: "#f9f9f9", text: "#888888" },
  Brown: { bg: "#e5cbb1", text: "#5d3a00" }
};

export const buffs = [
  { name: "Accelerate", description: "Fills a percentage of the ATB.", duration: "Immediate", icon: "/assets/status/accelerate.png" },
  { name: "Regen", description: "Recover a small amount of HP at the start of each turn.", duration: "Lasts 3 turns", icon: "/assets/status/regen.png" },
  { name: "Cleanse", description: "Removes all debuffs.", duration: "Immediate", icon: "/assets/status/cleanse.png" },
  { name: "Shield", description: "Grants a decaying shield which absorbs damage taken.", duration: "Lasts until depleted", icon: "/assets/status/shield.png" },
  { name: "Empower", description: "Increases damage dealt.", duration: "Applies 3 times", icon: "/assets/status/empower.png" },
  { name: "Taunt", description: "When attacked, must be targeted first.", duration: "Lasts 3 turns", icon: "/assets/status/taunt.png" },
  { name: "Haste", description: "Increases speed.", duration: "Lasts 3 turns", icon: "/assets/status/haste.png" },
  { name: "Ward", description: "Reduces damage taken.", duration: "Applies 3 times", icon: "/assets/status/ward.png" },
];

export const debuffs = [
  { name: "Bleed", description: "Lose a moderate amount of HP when damage is taken.", duration: "Applies once", icon: "/assets/status/bleed.png" },
  { name: "Burn", description: "Lose a small amount of HP at the start of each turn.", duration: "Lasts 3 turns", icon: "/assets/status/burn.png" },
  { name: "Charm", description: "Allies are considered enemies. Actions are chosen at random.", duration: "Applies once", icon: "/assets/status/charm.png" },
  { name: "Confuse", description: "Actions and targets are chosen at random.", duration: "Applies once", icon: "/assets/status/confuse.png" },
  { name: "Corrupt", description: "Lose a small amount of HP when healing is received.", duration: "Applies 3 times", icon: "/assets/status/corrupt.png" },
  { name: "Enfeeble", description: "Reduces damage dealt.", duration: "Applies 3 times", icon: "/assets/status/enfeeble.png" },
  { name: "Exhaust", description: "Removes a percentage of the ATB.", duration: "Immediate", icon: "/assets/status/exhaust.png" },
  { name: "Frostbite", description: "Lose a small amount of HP when a spell/ability is used.", duration: "Applies 3 times", icon: "/assets/status/frostbite.png" },
  { name: "Poison", description: "Lose a small amount of HP at the end of each turn.", duration: "Lasts 3 turns", icon: "/assets/status/poison.png" },
  { name: "Purge", description: "Removes all buffs.", duration: "Immediate", icon: "/assets/status/purge.png" },
  { name: "Sleep", description: "Cannot take actions. Ends early if hit.", duration: "3 seconds", icon: "/assets/status/sleep.png" },
  { name: "Stagger", description: "Increases damage taken.", duration: "Applies 3 times", icon: "/assets/status/stagger.png" },
  { name: "Slow", description: "Reduces speed.", duration: "Lasts 3 turns", icon: "/assets/status/slow.png" },
];

export const starThresholds = [0, 25, 75, 325, 1575];

export const workshops = [
  { name: "Red Workshop", id: "67f60ed1bf36ddb6981a6767" },
  { name: "Yellow Workshop", id: "67f6aea3bbbb44e4131c2efd" },
  { name: "Blue Workshop", id: "67f6169c3383e39973448021" },
  { name: "Green Workshop", id: "67f618faeefe9139e67659fb" }
];

export const guideEquipment = [
    [
        {
            "_id": "64dfb0bfe8ec8d469b25b08f",
            "recipe_type": "Equipment",
            "name": "Nimbus 1337",
            "image": "https://d3hv7cxq1p9foc.cloudfront.net/Dev/SingleFileAssets/ForgingIcon/Image/ICO_broom_weapon.png",
            "tier_text": "TIER I",
            "rarity": 0,
            "type": "Weapon",
            "description": "Nothing quite like the classics.",
            "materials": [
                {
                    "amount": 7,
                    "material": "634f29cb808f6bf4626a362a",
                    "rarity": 2,
                    "icon": "https://d3hv7cxq1p9foc.cloudfront.net/Dev/SingleFileAssets/Material/Image/Wood_Holly.png",
                    "generic": false,
                    "type": "wood"
                },
                {
                    "amount": 35,
                    "material": "65d75e4b0da2729615db078f",
                    "rarity": 0,
                    "icon": "https://d3hv7cxq1p9foc.cloudfront.net/Dev/SingleFileAssets/Material/Image/SpiritualMaterial_Icon_Dragon_Shard_Common.png",
                    "generic": false,
                    "type": "shard"
                },
                {
                    "amount": 5,
                    "material": "65d75e970da2729615db07a1",
                    "rarity": 0,
                    "icon": "https://d3hv7cxq1p9foc.cloudfront.net/Dev/SingleFileAssets/Material/Image/SpiritualMaterial_Icon_Dragon_Ember_Common1.png",
                    "generic": false,
                    "type": "ember"
                },
                {
                    "amount": 5,
                    "material": "635a01e5ef066c46dfa1791d",
                    "rarity": 0,
                    "icon": "https://d3hv7cxq1p9foc.cloudfront.net/Dev/SingleFileAssets/Material/Image/SpiritualMaterial_Icon_Disturbing_Ember_Common.png",
                    "generic": false,
                    "type": "ember"
                }
            ],
            "currencies": {
                "gold": 50,
                "mana": 60
            },
            "properties_atelier": {
                "can_interior": false,
                "can_exterior": false,
                "can_rotate": false,
                "surface_type": 1
            },
            "properties_forge": {
                "affixes": [
                    {
                        "type": "Offensive",
                        "affix": "Random",
                        "name": "",
                        "description": "",
                        "icon": "../images/UI/Crafting/Affixes/Affix_Offensive.png"
                    },
                    {
                        "type": "Support",
                        "affix": "679a63ba88ed77a5303392fd",
                        "name": "",
                        "description": "",
                        "icon": "../images/UI/Crafting/Affixes/Affix_Support.png"
                    }
                ],
                "affixes_pool": [
                    {
                        "type": "Offensive",
                        "affix": "679a60c788ed77a530338506",
                        "name": "Mighty I",
                        "description": "",
                        "icon": "../images/UI/Crafting/Affixes/Affix_Offensive.png"
                    },
                    {
                        "type": "Offensive",
                        "affix": "679a618c88ed77a530338554",
                        "name": "Brilliant I",
                        "description": "",
                        "icon": "../images/UI/Crafting/Affixes/Affix_Offensive.png"
                    },
                    {
                        "type": "Offensive",
                        "affix": "679a611088ed77a53033851c",
                        "name": "Mighty II",
                        "description": "",
                        "icon": "../images/UI/Crafting/Affixes/Affix_Offensive.png"
                    },
                    {
                        "type": "Offensive",
                        "affix": "679a61b588ed77a53033856a",
                        "name": "Brilliant II",
                        "description": "",
                        "icon": "../images/UI/Crafting/Affixes/Affix_Offensive.png"
                    }
                ]
            },
            "properties_crystal": {
                "stats": {
                    "strength": 0,
                    "dexterity": 0,
                    "constitution": 0,
                    "intelligence": 0,
                    "wisdom": 0
                },
                "ability_properties": {
                    "icon": "",
                    "name": "",
                    "description": "",
                    "target_type": "Enemy",
                    "cooldown": 0
                }
            },
            "one_time_use": false,
            "sprite": "64de9db4734a13168b91748d",
            "station_data": {
                "extra_time": 0,
                "last_inscription": "Tue May 13 2025 16:55:13 GMT+0000 (Coordinated Universal Time)",
                "level": 1,
                "total_inscriptions": 2
            }
        },
         {
        "_id": "64de8e5e734a13168b9171fb",
        "recipe_type": "Equipment",
        "name": "Halting Staff",
        "image": "https://d3hv7cxq1p9foc.cloudfront.net/Dev/SingleFileAssets/ForgingIcon/Image/ICO_stop_sign_weapon.png",
        "tier_text": "TIER I",
        "rarity": 0,
        "type": "Weapon",
        "description": "Now that's what I call stopping power.",
        "materials": [
            {
                "amount": 5,
                "material": "634f05ab808f6bf4626a3506",
                "rarity": 2,
                "icon": "https://d3hv7cxq1p9foc.cloudfront.net/Dev/SingleFileAssets/Material/Image/Metal_Aluminum.png",
                "generic": false,
                "type": "metal"
            },
            {
                "amount": 5,
                "material": "634f29cb808f6bf4626a362a",
                "rarity": 2,
                "icon": "https://d3hv7cxq1p9foc.cloudfront.net/Dev/SingleFileAssets/Material/Image/Wood_Holly.png",
                "generic": false,
                "type": "wood"
            },
            {
                "amount": 32,
                "material": "6359abf1ef066c46dfa177e1",
                "rarity": 0,
                "icon": "https://d3hv7cxq1p9foc.cloudfront.net/Dev/SingleFileAssets/Material/Image/SpiritualMaterial_Icon_Beast_Shard_Common.png",
                "generic": false,
                "type": "shard"
            },
            {
                "amount": 9,
                "material": "6359ac59ef066c46dfa1780d",
                "rarity": 0,
                "icon": "https://d3hv7cxq1p9foc.cloudfront.net/Dev/SingleFileAssets/Material/Image/SpiritualMaterial_Icon_Beast_Ember_Common.png",
                "generic": false,
                "type": "ember"
            }
        ],
        "currencies": {
            "gold": 50,
            "mana": 60
        },
        "properties_atelier": {
            "can_interior": false,
            "can_exterior": false,
            "can_rotate": false,
            "surface_type": 1
        },
        "properties_forge": {
            "affixes": [
                {
                    "type": "Offensive",
                    "affix": "679a53b788ed77a53032c44b",
                    "name": "",
                    "description": "",
                    "icon": "../images/UI/Crafting/Affixes/Affix_Offensive.png"
                },
                {
                    "type": "All",
                    "affix": "Random",
                    "name": "",
                    "description": "",
                    "icon": "../images/UI/Crafting/Affixes/Affix_All.png"
                }
            ],
            "affixes_pool": [
                {
                    "type": "Offensive",
                    "affix": "679a60c788ed77a530338506",
                    "name": "Mighty I",
                    "description": "",
                    "icon": "../images/UI/Crafting/Affixes/Affix_Offensive.png"
                },
                {
                    "type": "Offensive",
                    "affix": "679a611088ed77a53033851c",
                    "name": "Mighty II",
                    "description": "",
                    "icon": "../images/UI/Crafting/Affixes/Affix_Offensive.png"
                },
                {
                    "type": "Support",
                    "affix": "679a637a88ed77a5303392e7",
                    "name": "Quick I",
                    "description": "",
                    "icon": "../images/UI/Crafting/Affixes/Affix_Support.png"
                },
                {
                    "type": "Support",
                    "affix": "679a63ba88ed77a5303392fd",
                    "name": "Quick II",
                    "description": "",
                    "icon": "../images/UI/Crafting/Affixes/Affix_Support.png"
                }
            ]
        },
        "properties_crystal": {
            "stats": {
                "strength": 0,
                "dexterity": 0,
                "constitution": 0,
                "intelligence": 0,
                "wisdom": 0
            },
            "ability_properties": {
                "icon": "",
                "name": "",
                "description": "",
                "target_type": "Enemy",
                "cooldown": 0
            }
        },
        "one_time_use": false,
        "sprite": "64daa029734a13168b914e0b",
        "station_data": {
            "extra_time": 0,
            "last_inscription": "Mon May 12 2025 22:46:41 GMT+0000 (Coordinated Universal Time)",
            "level": 1,
            "total_inscriptions": 1
        }
    },
    {
        "_id": "64e7a1a0e8ec8d469b25f630",
        "recipe_type": "Equipment",
        "name": "Hip Shades",
        "image": "https://d3hv7cxq1p9foc.cloudfront.net/Dev/SingleFileAssets/ForgingIcon/Image/Sprite-0010.png",
        "tier_text": "TIER I",
        "rarity": 0,
        "type": "Headgear",
        "description": "Cool. Hypnotic. Vibrant. Other adjectives.",
        "materials": [
            {
                "amount": 2,
                "material": "634f579fbbce1b02b687d699",
                "rarity": 0,
                "icon": "https://d3hv7cxq1p9foc.cloudfront.net/Dev/SingleFileAssets/Material/Image/Element_Carbon.png",
                "generic": false,
                "type": "element"
            },
            {
                "amount": 2,
                "material": "634f19f2808f6bf4626a355e",
                "rarity": 0,
                "icon": "https://d3hv7cxq1p9foc.cloudfront.net/Dev/SingleFileAssets/Material/Image/Wood_Redwood.png",
                "generic": false,
                "type": "wood"
            },
            {
                "amount": 14,
                "material": "6359abf1ef066c46dfa177e1",
                "rarity": 0,
                "icon": "https://d3hv7cxq1p9foc.cloudfront.net/Dev/SingleFileAssets/Material/Image/SpiritualMaterial_Icon_Beast_Shard_Common.png",
                "generic": false,
                "type": "shard"
            }
        ],
        "currencies": {
            "gold": 10,
            "mana": 60
        },
        "properties_atelier": {
            "can_interior": false,
            "can_exterior": false,
            "can_rotate": false,
            "surface_type": 1
        },
        "properties_forge": {
            "affixes": [
                {
                    "type": "Support",
                    "affix": "Random",
                    "name": "",
                    "description": "",
                    "icon": "../images/UI/Crafting/Affixes/Affix_Support.png"
                }
            ],
            "affixes_pool": [
                {
                    "type": "Support",
                    "affix": "679a59af88ed77a530337b17",
                    "name": "Lucky I",
                    "description": "",
                    "icon": "../images/UI/Crafting/Affixes/Affix_Support.png"
                },
                {
                    "type": "Support",
                    "affix": "679a5aa288ed77a53033832b",
                    "name": "Lucky II",
                    "description": "",
                    "icon": "../images/UI/Crafting/Affixes/Affix_Support.png"
                }
            ]
        },
        "properties_crystal": {
            "stats": {
                "strength": 0,
                "dexterity": 0,
                "constitution": 0,
                "intelligence": 0,
                "wisdom": 0
            },
            "ability_properties": {
                "icon": "",
                "name": "",
                "description": "",
                "target_type": "Enemy",
                "cooldown": 0
            }
        },
        "one_time_use": false,
        "sprite": "634756e92efecc0d69b26648",
        "station_data": {
            "extra_time": 0,
            "last_inscription": "Sat May 10 2025 22:20:58 GMT+0000 (Coordinated Universal Time)",
            "level": 1,
            "total_inscriptions": 1
        }
    },

        {
        "_id": "64e7be7ae8ec8d469b25f8af",
        "recipe_type": "Equipment",
        "name": "Kirama Demon Helm",
        "image": "https://d3hv7cxq1p9foc.cloudfront.net/Dev/SingleFileAssets/ForgingIcon/Image/Sprite-0037.png",
        "tier_text": "TIER II",
        "rarity": 1,
        "type": "Headgear",
        "description": "To wear this helm is to declare your strength to the world.",
        "materials": [
            {
                "amount": 127,
                "material": "67abd4ffb4ee8b4c5f3da4f8",
                "rarity": 1,
                "icon": "https://d3hv7cxq1p9foc.cloudfront.net/Dev/SingleFileAssets/Material/Image/SpiritualMaterial_Icon_Beast_Shard_Uncommon.png",
                "generic": false,
                "type": "shard"
            },
            {
                "amount": 36,
                "material": "67abd621b4ee8b4c5f3dddde",
                "rarity": 1,
                "icon": "https://d3hv7cxq1p9foc.cloudfront.net/Dev/SingleFileAssets/Material/Image/SpiritualMaterial_Icon_Beast_Ember_Uncommon.png",
                "generic": false,
                "type": "ember"
            },
            {
                "amount": 20,
                "material": "631fbe65308c6c735bd57492",
                "rarity": 0,
                "icon": "https://d3hv7cxq1p9foc.cloudfront.net/Dev/SingleFileAssets/Material/Image/Metal_Zinc_.png",
                "generic": false,
                "type": "metal"
            },
            {
                "amount": 13,
                "material": "631fbe90308c6c735bd574a5",
                "rarity": 0,
                "icon": "https://d3hv7cxq1p9foc.cloudfront.net/Dev/SingleFileAssets/Material/Image/Wood_Oak.png",
                "generic": false,
                "type": "wood"
            },
            {
                "amount": 7,
                "material": "631fbd60308c6c735bd57404",
                "rarity": 0,
                "icon": "https://d3hv7cxq1p9foc.cloudfront.net/Dev/SingleFileAssets/Material/Image/Metal_Tin.png",
                "generic": false,
                "type": "metal"
            }
        ],
        "currencies": {
            "gold": 1000,
            "mana": 300
        },
        "properties_atelier": {
            "can_interior": false,
            "can_exterior": false,
            "can_rotate": false,
            "surface_type": 1
        },
        "properties_forge": {
            "affixes": [
                {
                    "type": "Support",
                    "affix": "679a5c1d88ed77a530338428",
                    "name": "",
                    "description": "",
                    "icon": "../images/UI/Crafting/Affixes/Affix_Support.png"
                },
                {
                    "type": "Support",
                    "affix": "679a63ba88ed77a5303392fd",
                    "name": "",
                    "description": "",
                    "icon": "../images/UI/Crafting/Affixes/Affix_Support.png"
                },
                {
                    "type": "All",
                    "affix": "Random",
                    "name": "",
                    "description": "",
                    "icon": "../images/UI/Crafting/Affixes/Affix_All.png"
                }
            ],
            "affixes_pool": [
                {
                    "type": "Offensive",
                    "affix": "679a60c788ed77a530338506",
                    "name": "Mighty I",
                    "description": "",
                    "icon": "../images/UI/Crafting/Affixes/Affix_Offensive.png"
                },
                {
                    "type": "Offensive",
                    "affix": "679a611088ed77a53033851c",
                    "name": "Mighty II",
                    "description": "",
                    "icon": "../images/UI/Crafting/Affixes/Affix_Offensive.png"
                },
                {
                    "type": "Offensive",
                    "affix": "679a869588ed77a53035fbc6",
                    "name": "Desperate",
                    "description": "",
                    "icon": "../images/UI/Crafting/Affixes/Affix_Offensive.png"
                },
                {
                    "type": "Offensive",
                    "affix": "67d45ea3b2102728065ed90f",
                    "name": "Mighty III",
                    "description": "",
                    "icon": "../images/UI/Crafting/Affixes/Affix_Offensive.png"
                },
                {
                    "type": "Offensive",
                    "affix": "679a526a88ed77a53032a68f",
                    "name": "Strong I",
                    "description": "",
                    "icon": "../images/UI/Crafting/Affixes/Affix_Offensive.png"
                },
                {
                    "type": "Offensive",
                    "affix": "679a53b788ed77a53032c44b",
                    "name": "Strong II",
                    "description": "",
                    "icon": "../images/UI/Crafting/Affixes/Affix_Offensive.png"
                },
                {
                    "type": "Offensive",
                    "affix": "67d45cddb2102728065e5ef9",
                    "name": "Strong III",
                    "description": "",
                    "icon": "../images/UI/Crafting/Affixes/Affix_Offensive.png"
                }
            ]
        },
        "properties_crystal": {
            "stats": {
                "strength": 0,
                "dexterity": 0,
                "constitution": 0,
                "intelligence": 0,
                "wisdom": 0
            },
            "ability_properties": {
                "icon": "",
                "name": "",
                "description": "",
                "target_type": "Enemy",
                "cooldown": 0
            }
        },
        "one_time_use": false,
        "sprite": "634757362efecc0d69b2665c",
        "station_data": {
            "extra_time": 0,
            "last_inscription": "Thu Sep 11 2025 16:40:16 GMT+0000 (Coordinated Universal Time)",
            "level": 4,
            "total_inscriptions": 554
        }
    },
    {
        "_id": "64e7bb01e8ec8d469b25f82c",
        "recipe_type": "Equipment",
        "name": "Kirama Style Mask",
        "image": "https://d3hv7cxq1p9foc.cloudfront.net/Dev/SingleFileAssets/ForgingIcon/Image/Sprite-0029.png",
        "tier_text": "TIER II",
        "rarity": 1,
        "type": "Headgear",
        "description": "P. A. R. T. Why? Because you've got to.",
        "materials": [
            {
                "amount": 112,
                "material": "67abd4ffb4ee8b4c5f3da4f8",
                "rarity": 1,
                "icon": "https://d3hv7cxq1p9foc.cloudfront.net/Dev/SingleFileAssets/Material/Image/SpiritualMaterial_Icon_Beast_Shard_Uncommon.png",
                "generic": false,
                "type": "shard"
            },
            {
                "amount": 32,
                "material": "67ac0eb6b4ee8b4c5f3fa8d5",
                "rarity": 1,
                "icon": "https://d3hv7cxq1p9foc.cloudfront.net/Dev/SingleFileAssets/Material/Image/SpiritualMaterial_Icon_Dragon_Ember_Uncommon.png",
                "generic": false,
                "type": "ember"
            },
            {
                "amount": 17,
                "material": "634f38abbbce1b02b687d49e",
                "rarity": 2,
                "icon": "https://d3hv7cxq1p9foc.cloudfront.net/Dev/SingleFileAssets/Material/Image/Fabric_Wool.png",
                "generic": false,
                "type": "fabric"
            },
            {
                "amount": 12,
                "material": "634f30b4808f6bf4626a3720",
                "rarity": 0,
                "icon": "https://d3hv7cxq1p9foc.cloudfront.net/Dev/SingleFileAssets/Material/Image/Fabric_Flax.png",
                "generic": false,
                "type": "fabric"
            },
            {
                "amount": 6,
                "material": "634f579fbbce1b02b687d699",
                "rarity": 0,
                "icon": "https://d3hv7cxq1p9foc.cloudfront.net/Dev/SingleFileAssets/Material/Image/Element_Carbon.png",
                "generic": false,
                "type": "element"
            }
        ],
        "currencies": {
            "gold": 1000,
            "mana": 300
        },
        "properties_atelier": {
            "can_interior": false,
            "can_exterior": false,
            "can_rotate": false,
            "surface_type": 1
        },
        "properties_forge": {
            "affixes": [
                {
                    "type": "Support",
                    "affix": "679a5d3988ed77a530338480",
                    "name": "",
                    "description": "",
                    "icon": "../images/UI/Crafting/Affixes/Affix_Support.png"
                },
                {
                    "type": "Support",
                    "affix": "679a63ba88ed77a5303392fd",
                    "name": "",
                    "description": "",
                    "icon": "../images/UI/Crafting/Affixes/Affix_Support.png"
                },
                {
                    "type": "All",
                    "affix": "Random",
                    "name": "",
                    "description": "",
                    "icon": "../images/UI/Crafting/Affixes/Affix_All.png"
                }
            ],
            "affixes_pool": [
                {
                    "type": "Support",
                    "affix": "679a6c3088ed77a530342548",
                    "name": "Gracious II",
                    "description": "",
                    "icon": "../images/UI/Crafting/Affixes/Affix_Support.png"
                },
                {
                    "type": "Offensive",
                    "affix": "679a61b588ed77a53033856a",
                    "name": "Brilliant II",
                    "description": "",
                    "icon": "../images/UI/Crafting/Affixes/Affix_Offensive.png"
                },
                {
                    "type": "Support",
                    "affix": "679a6c0688ed77a530342202",
                    "name": "Gracious I",
                    "description": "",
                    "icon": "../images/UI/Crafting/Affixes/Affix_Support.png"
                },
                {
                    "type": "Offensive",
                    "affix": "679a618c88ed77a530338554",
                    "name": "Brilliant I",
                    "description": "",
                    "icon": "../images/UI/Crafting/Affixes/Affix_Offensive.png"
                },
                {
                    "type": "Support",
                    "affix": "67d46050b2102728065ee58b",
                    "name": "Gracious III",
                    "description": "",
                    "icon": "../images/UI/Crafting/Affixes/Affix_Support.png"
                },
                {
                    "type": "Offensive",
                    "affix": "67d45ef2b2102728065ed9a9",
                    "name": "Brilliant III",
                    "description": "",
                    "icon": "../images/UI/Crafting/Affixes/Affix_Offensive.png"
                }
            ]
        },
        "properties_crystal": {
            "stats": {
                "strength": 0,
                "dexterity": 0,
                "constitution": 0,
                "intelligence": 0,
                "wisdom": 0
            },
            "ability_properties": {
                "icon": "",
                "name": "",
                "description": "",
                "target_type": "Enemy",
                "cooldown": 0
            }
        },
        "one_time_use": false,
        "sprite": "64e69830e8ec8d469b25f22d",
        "station_data": {
            "extra_time": 0,
            "last_inscription": "Mon May 26 2025 06:07:10 GMT+0000 (Coordinated Universal Time)",
            "level": 3,
            "total_inscriptions": 107
        }
    },

     {
        "_id": "64e7bcd1e8ec8d469b25f864",
        "recipe_type": "Equipment",
        "name": "Kirama Demon Armor",
        "image": "https://d3hv7cxq1p9foc.cloudfront.net/Dev/SingleFileAssets/ForgingIcon/Image/Sprite-0038.png",
        "tier_text": "TIER II",
        "rarity": 1,
        "type": "Suits",
        "description": "An armor empowered with the memory of a Samurai warrior from before the Singularity.",
        "materials": [
            {
                "amount": 112,
                "material": "67ac0d89b4ee8b4c5f3fa813",
                "rarity": 1,
                "icon": "https://d3hv7cxq1p9foc.cloudfront.net/Dev/SingleFileAssets/Material/Image/SpiritualMaterial_Icon_Disturbing_Shard_Uncommon.png",
                "generic": false,
                "type": "shard"
            },
            {
                "amount": 32,
                "material": "67ac0eb6b4ee8b4c5f3fa8d5",
                "rarity": 1,
                "icon": "https://d3hv7cxq1p9foc.cloudfront.net/Dev/SingleFileAssets/Material/Image/SpiritualMaterial_Icon_Dragon_Ember_Uncommon.png",
                "generic": false,
                "type": "ember"
            },
            {
                "amount": 17,
                "material": "634f27ad808f6bf4626a3618",
                "rarity": 2,
                "icon": "https://d3hv7cxq1p9foc.cloudfront.net/Dev/SingleFileAssets/Material/Image/Wood_Ash.png",
                "generic": false,
                "type": "wood"
            },
            {
                "amount": 12,
                "material": "631fbe65308c6c735bd57492",
                "rarity": 0,
                "icon": "https://d3hv7cxq1p9foc.cloudfront.net/Dev/SingleFileAssets/Material/Image/Metal_Zinc_.png",
                "generic": false,
                "type": "metal"
            },
            {
                "amount": 6,
                "material": "631fbe3d308c6c735bd57480",
                "rarity": 2,
                "icon": "https://d3hv7cxq1p9foc.cloudfront.net/Dev/SingleFileAssets/Material/Image/3_3_Stone_Sand_Normal.png",
                "generic": false,
                "type": "stone"
            }
        ],
        "currencies": {
            "gold": 1000,
            "mana": 300
        },
        "properties_atelier": {
            "can_interior": false,
            "can_exterior": false,
            "can_rotate": false,
            "surface_type": 1
        },
        "properties_forge": {
            "affixes": [
                {
                    "type": "Offensive",
                    "affix": "679a611088ed77a53033851c",
                    "name": "",
                    "description": "",
                    "icon": "../images/UI/Crafting/Affixes/Affix_Offensive.png"
                },
                {
                    "type": "Offensive",
                    "affix": "Random",
                    "name": "",
                    "description": "",
                    "icon": "../images/UI/Crafting/Affixes/Affix_Offensive.png"
                },
                {
                    "type": "Support",
                    "affix": "679a63ba88ed77a5303392fd",
                    "name": "",
                    "description": "",
                    "icon": "../images/UI/Crafting/Affixes/Affix_Support.png"
                }
            ],
            "affixes_pool": [
                {
                    "type": "Offensive",
                    "affix": "679a814088ed77a53035d34c",
                    "name": "Deadly I",
                    "description": "",
                    "icon": "../images/UI/Crafting/Affixes/Affix_Offensive.png"
                },
                {
                    "type": "Offensive",
                    "affix": "679a526a88ed77a53032a68f",
                    "name": "Strong I",
                    "description": "",
                    "icon": "../images/UI/Crafting/Affixes/Affix_Offensive.png"
                },
                {
                    "type": "Offensive",
                    "affix": "679a53b788ed77a53032c44b",
                    "name": "Strong II",
                    "description": "",
                    "icon": "../images/UI/Crafting/Affixes/Affix_Offensive.png"
                },
                {
                    "type": "Offensive",
                    "affix": "679a80d588ed77a53035c7a6",
                    "name": "Accurate I",
                    "description": "",
                    "icon": "../images/UI/Crafting/Affixes/Affix_Offensive.png"
                },
                {
                    "type": "Offensive",
                    "affix": "679a84f888ed77a53035eaa8",
                    "name": "Critical",
                    "description": "",
                    "icon": "../images/UI/Crafting/Affixes/Affix_Offensive.png"
                },
                {
                    "type": "Offensive",
                    "affix": "67d45ea3b2102728065ed90f",
                    "name": "Mighty III",
                    "description": "",
                    "icon": "../images/UI/Crafting/Affixes/Affix_Offensive.png"
                }
            ]
        },
        "properties_crystal": {
            "stats": {
                "strength": 0,
                "dexterity": 0,
                "constitution": 0,
                "intelligence": 0,
                "wisdom": 0
            },
            "ability_properties": {
                "icon": "",
                "name": "",
                "description": "",
                "target_type": "Enemy",
                "cooldown": 0
            }
        },
        "one_time_use": false,
        "sprite": "634757512efecc0d69b26667",
        "station_data": {
            "extra_time": 0,
            "last_inscription": "Thu Feb 26 2026 10:40:19 GMT+0000 (Coordinated Universal Time)",
            "level": 4,
            "total_inscriptions": 1271
        }
    },
    {
        "_id": "64e7be7ae8ec8d469b25f8af",
        "recipe_type": "Equipment",
        "name": "Kirama Demon Helm",
        "image": "https://d3hv7cxq1p9foc.cloudfront.net/Dev/SingleFileAssets/ForgingIcon/Image/Sprite-0037.png",
        "tier_text": "TIER II",
        "rarity": 1,
        "type": "Headgear",
        "description": "To wear this helm is to declare your strength to the world.",
        "materials": [
            {
                "amount": 127,
                "material": "67abd4ffb4ee8b4c5f3da4f8",
                "rarity": 1,
                "icon": "https://d3hv7cxq1p9foc.cloudfront.net/Dev/SingleFileAssets/Material/Image/SpiritualMaterial_Icon_Beast_Shard_Uncommon.png",
                "generic": false,
                "type": "shard"
            },
            {
                "amount": 36,
                "material": "67abd621b4ee8b4c5f3dddde",
                "rarity": 1,
                "icon": "https://d3hv7cxq1p9foc.cloudfront.net/Dev/SingleFileAssets/Material/Image/SpiritualMaterial_Icon_Beast_Ember_Uncommon.png",
                "generic": false,
                "type": "ember"
            },
            {
                "amount": 20,
                "material": "631fbe65308c6c735bd57492",
                "rarity": 0,
                "icon": "https://d3hv7cxq1p9foc.cloudfront.net/Dev/SingleFileAssets/Material/Image/Metal_Zinc_.png",
                "generic": false,
                "type": "metal"
            },
            {
                "amount": 13,
                "material": "631fbe90308c6c735bd574a5",
                "rarity": 0,
                "icon": "https://d3hv7cxq1p9foc.cloudfront.net/Dev/SingleFileAssets/Material/Image/Wood_Oak.png",
                "generic": false,
                "type": "wood"
            },
            {
                "amount": 7,
                "material": "631fbd60308c6c735bd57404",
                "rarity": 0,
                "icon": "https://d3hv7cxq1p9foc.cloudfront.net/Dev/SingleFileAssets/Material/Image/Metal_Tin.png",
                "generic": false,
                "type": "metal"
            }
        ],
        "currencies": {
            "gold": 1000,
            "mana": 300
        },
        "properties_atelier": {
            "can_interior": false,
            "can_exterior": false,
            "can_rotate": false,
            "surface_type": 1
        },
        "properties_forge": {
            "affixes": [
                {
                    "type": "Support",
                    "affix": "679a5c1d88ed77a530338428",
                    "name": "",
                    "description": "",
                    "icon": "../images/UI/Crafting/Affixes/Affix_Support.png"
                },
                {
                    "type": "Support",
                    "affix": "679a63ba88ed77a5303392fd",
                    "name": "",
                    "description": "",
                    "icon": "../images/UI/Crafting/Affixes/Affix_Support.png"
                },
                {
                    "type": "All",
                    "affix": "Random",
                    "name": "",
                    "description": "",
                    "icon": "../images/UI/Crafting/Affixes/Affix_All.png"
                }
            ],
            "affixes_pool": [
                {
                    "type": "Offensive",
                    "affix": "679a60c788ed77a530338506",
                    "name": "Mighty I",
                    "description": "",
                    "icon": "../images/UI/Crafting/Affixes/Affix_Offensive.png"
                },
                {
                    "type": "Offensive",
                    "affix": "679a611088ed77a53033851c",
                    "name": "Mighty II",
                    "description": "",
                    "icon": "../images/UI/Crafting/Affixes/Affix_Offensive.png"
                },
                {
                    "type": "Offensive",
                    "affix": "679a869588ed77a53035fbc6",
                    "name": "Desperate",
                    "description": "",
                    "icon": "../images/UI/Crafting/Affixes/Affix_Offensive.png"
                },
                {
                    "type": "Offensive",
                    "affix": "67d45ea3b2102728065ed90f",
                    "name": "Mighty III",
                    "description": "",
                    "icon": "../images/UI/Crafting/Affixes/Affix_Offensive.png"
                },
                {
                    "type": "Offensive",
                    "affix": "679a526a88ed77a53032a68f",
                    "name": "Strong I",
                    "description": "",
                    "icon": "../images/UI/Crafting/Affixes/Affix_Offensive.png"
                },
                {
                    "type": "Offensive",
                    "affix": "679a53b788ed77a53032c44b",
                    "name": "Strong II",
                    "description": "",
                    "icon": "../images/UI/Crafting/Affixes/Affix_Offensive.png"
                },
                {
                    "type": "Offensive",
                    "affix": "67d45cddb2102728065e5ef9",
                    "name": "Strong III",
                    "description": "",
                    "icon": "../images/UI/Crafting/Affixes/Affix_Offensive.png"
                }
            ]
        },
        "properties_crystal": {
            "stats": {
                "strength": 0,
                "dexterity": 0,
                "constitution": 0,
                "intelligence": 0,
                "wisdom": 0
            },
            "ability_properties": {
                "icon": "",
                "name": "",
                "description": "",
                "target_type": "Enemy",
                "cooldown": 0
            }
        },
        "one_time_use": false,
        "sprite": "634757362efecc0d69b2665c",
        "station_data": {
            "extra_time": 0,
            "last_inscription": "Thu Sep 11 2025 16:40:16 GMT+0000 (Coordinated Universal Time)",
            "level": 4,
            "total_inscriptions": 554
        }
    },

     {
        "_id": "636a86c6d22c16e85b821bae",
        "recipe_type": "Equipment",
        "name": "📜Devouring Scythe",
        "image": "https://d3hv7cxq1p9foc.cloudfront.net/Dev/SingleFileAssets/ForgingIcon/Image/ICO_void_scythe_weapon.png",
        "tier_text": "TIER II",
        "rarity": 1,
        "type": "Weapon",
        "description": "A scythe empowered by the Quantum Shadow, not for the faint of heart. ",
        "materials": [
            {
                "amount": 18,
                "material": "6359abf1ef066c46dfa177e1",
                "rarity": 1,
                "icon": "https://d3hv7cxq1p9foc.cloudfront.net/Dev/SingleFileAssets/Material/Image/SpiritualMaterial_Icon_Insect_Shard_Uncommon.png",
                "generic": false,
                "type": "shard"
            },
            {
                "amount": 18,
                "material": "65d75e970da2729615db07a1",
                "rarity": 1,
                "icon": "https://d3hv7cxq1p9foc.cloudfront.net/Dev/SingleFileAssets/Material/Image/SpiritualMaterial_Icon_Bandit_Shard_Uncommon.png",
                "generic": false,
                "type": "shard"
            },
            {
                "amount": 7,
                "material": "65d75e970da2729615db07a1",
                "rarity": 1,
                "icon": "https://d3hv7cxq1p9foc.cloudfront.net/Dev/SingleFileAssets/Material/Image/SpiritualMaterial_Icon_Dragon_Ember_Uncommon.png",
                "generic": false,
                "type": "ember"
            },
            {
                "amount": 7,
                "material": "6758bcd5be88b5e0330cde9c",
                "rarity": 0,
                "icon": "https://d3hv7cxq1p9foc.cloudfront.net/Dev/SingleFileAssets/Material/Image/Resin_Blue.png",
                "generic": false,
                "type": "resin"
            },
            {
                "amount": 5,
                "material": "634f3db2bbce1b02b687d629",
                "rarity": 0,
                "icon": "https://d3hv7cxq1p9foc.cloudfront.net/Dev/SingleFileAssets/Material/Image/Element_Sulfur.png",
                "generic": false,
                "type": "element"
            },
            {
                "amount": 3,
                "material": "631fbe65308c6c735bd57492",
                "rarity": 0,
                "icon": "https://d3hv7cxq1p9foc.cloudfront.net/Dev/SingleFileAssets/Material/Image/Metal_Zinc_.png",
                "generic": false,
                "type": "metal"
            }
        ],
        "currencies": {
            "gold": 1000,
            "mana": 300
        },
        "properties_atelier": {
            "can_interior": false,
            "can_exterior": false,
            "can_rotate": false,
            "surface_type": 1
        },
        "properties_forge": {
            "affixes": [
                {
                    "type": "Offensive",
                    "affix": "Random",
                    "name": "",
                    "description": "",
                    "icon": "../images/UI/Crafting/Affixes/Affix_Offensive.png"
                },
                {
                    "type": "Offensive",
                    "affix": "679a53b788ed77a53032c44b",
                    "name": "",
                    "description": "",
                    "icon": "../images/UI/Crafting/Affixes/Affix_Offensive.png"
                },
                {
                    "type": "Offensive",
                    "affix": "679a816d88ed77a53035da08",
                    "name": "",
                    "description": "",
                    "icon": "../images/UI/Crafting/Affixes/Affix_Offensive.png"
                }
            ],
            "affixes_pool": [
                {
                    "type": "Offensive",
                    "affix": "679a60c788ed77a530338506",
                    "name": "Mighty I",
                    "description": "",
                    "icon": "../images/UI/Crafting/Affixes/Affix_Offensive.png"
                },
                {
                    "type": "Offensive",
                    "affix": "679a611088ed77a53033851c",
                    "name": "Mighty II",
                    "description": "",
                    "icon": "../images/UI/Crafting/Affixes/Affix_Offensive.png"
                },
                {
                    "type": "Offensive",
                    "affix": "679a869588ed77a53035fbc6",
                    "name": "Desperate",
                    "description": "",
                    "icon": "../images/UI/Crafting/Affixes/Affix_Offensive.png"
                },
                {
                    "type": "Offensive",
                    "affix": "67d45ea3b2102728065ed90f",
                    "name": "Mighty III",
                    "description": "",
                    "icon": "../images/UI/Crafting/Affixes/Affix_Offensive.png"
                },
                {
                    "type": "Offensive",
                    "affix": "679a526a88ed77a53032a68f",
                    "name": "Strong I",
                    "description": "",
                    "icon": "../images/UI/Crafting/Affixes/Affix_Offensive.png"
                },
                {
                    "type": "Offensive",
                    "affix": "67d45cddb2102728065e5ef9",
                    "name": "Strong III",
                    "description": "",
                    "icon": "../images/UI/Crafting/Affixes/Affix_Offensive.png"
                }
            ]
        },
        "properties_crystal": {
            "stats": {
                "strength": 0,
                "dexterity": 0,
                "constitution": 0,
                "intelligence": 0,
                "wisdom": 0
            },
            "ability_properties": {
                "icon": "",
                "name": "",
                "description": "",
                "target_type": "Enemy",
                "cooldown": 0
            }
        },
        "one_time_use": false,
        "sprite": "64daa057734a13168b914e1a",
        "station_data": {
            "extra_time": 0,
            "last_inscription": "Sun Jun 22 2025 12:04:57 GMT+0000 (Coordinated Universal Time)",
            "level": 3,
            "total_inscriptions": 217
        }
    },
    {
        "_id": "679d265788ed77a530482036",
        "recipe_type": "Equipment",
        "name": "Dynasty Crown",
        "image": "https://d3hv7cxq1p9foc.cloudfront.net/Dev/SingleFileAssets/ForgingIcon/Image/asianroyal_headgear_icon.png",
        "tier_text": "TIER II",
        "rarity": 1,
        "type": "Headgear",
        "description": "\"Uneasy lies the head...\"",
        "materials": [
            {
                "amount": 76,
                "material": "67ac080ab4ee8b4c5f3fa7b9",
                "rarity": 1,
                "icon": "https://d3hv7cxq1p9foc.cloudfront.net/Dev/SingleFileAssets/Material/Image/SpiritualMaterial_Icon_Bandit_Shard_Uncommon.png",
                "generic": false,
                "type": "shard"
            },
            {
                "amount": 76,
                "material": "67ac0e85b4ee8b4c5f3fa8b7",
                "rarity": 1,
                "icon": "https://d3hv7cxq1p9foc.cloudfront.net/Dev/SingleFileAssets/Material/Image/SpiritualMaterial_Icon_Dragon_Shard_Uncommon.png",
                "generic": false,
                "type": "shard"
            },
            {
                "amount": 19,
                "material": "67ac0dc0b4ee8b4c5f3fa831",
                "rarity": 1,
                "icon": "https://d3hv7cxq1p9foc.cloudfront.net/Dev/SingleFileAssets/Material/Image/SpiritualMaterial_Icon_Disturbing_Ember_Uncommon.png",
                "generic": false,
                "type": "ember"
            },
            {
                "amount": 16,
                "material": "634f27ad808f6bf4626a3618",
                "rarity": 2,
                "icon": "https://d3hv7cxq1p9foc.cloudfront.net/Dev/SingleFileAssets/Material/Image/Wood_Ash.png",
                "generic": false,
                "type": "wood"
            },
            {
                "amount": 10,
                "material": "6758bcebbe88b5e0330cdeae",
                "rarity": 0,
                "icon": "https://d3hv7cxq1p9foc.cloudfront.net/Dev/SingleFileAssets/Material/Image/Resin_Yellow.png",
                "generic": false,
                "type": "resin"
            },
            {
                "amount": 5,
                "material": "634f3f15bbce1b02b687d63b",
                "rarity": 0,
                "icon": "https://d3hv7cxq1p9foc.cloudfront.net/Dev/SingleFileAssets/Material/Image/Element_Calcium.png",
                "generic": false,
                "type": "element"
            }
        ],
        "currencies": {
            "gold": 0,
            "mana": 300
        },
        "properties_atelier": {
            "can_interior": false,
            "can_exterior": false,
            "can_rotate": false,
            "surface_type": 1
        },
        "properties_forge": {
            "affixes": [
                {
                    "type": "Defensive",
                    "affix": "Random",
                    "name": "",
                    "description": "",
                    "icon": "../images/UI/Crafting/Affixes/Affix_Defensive.png"
                },
                {
                    "type": "Support",
                    "affix": "679a587988ed77a530335896",
                    "name": "",
                    "description": "",
                    "icon": "../images/UI/Crafting/Affixes/Affix_Support.png"
                },
                {
                    "type": "Defensive",
                    "affix": "679a6a1988ed77a53033dec4",
                    "name": "",
                    "description": "",
                    "icon": "../images/UI/Crafting/Affixes/Affix_Defensive.png"
                }
            ],
            "affixes_pool": [
                {
                    "type": "Defensive",
                    "affix": "679a83f888ed77a53035db52",
                    "name": "Protected",
                    "description": "",
                    "icon": "../images/UI/Crafting/Affixes/Affix_Defensive.png"
                },
                {
                    "type": "Defensive",
                    "affix": "679a835f88ed77a53035daee",
                    "name": "Hardened I",
                    "description": "",
                    "icon": "../images/UI/Crafting/Affixes/Affix_Defensive.png"
                },
                {
                    "type": "Defensive",
                    "affix": "679a838c88ed77a53035db04",
                    "name": "Hardened II",
                    "description": "",
                    "icon": "../images/UI/Crafting/Affixes/Affix_Defensive.png"
                },
                {
                    "type": "Defensive",
                    "affix": "67d46176b2102728065ef2de",
                    "name": "Hardened III",
                    "description": "",
                    "icon": "../images/UI/Crafting/Affixes/Affix_Defensive.png"
                },
                {
                    "type": "Defensive",
                    "affix": "679a685888ed77a53033b249",
                    "name": "Healthy I",
                    "description": "",
                    "icon": "../images/UI/Crafting/Affixes/Affix_Defensive.png"
                },
                {
                    "type": "Defensive",
                    "affix": "67d45f8bb2102728065edacf",
                    "name": "Healthy III",
                    "description": "",
                    "icon": "../images/UI/Crafting/Affixes/Affix_Defensive.png"
                }
            ]
        },
        "properties_crystal": {
            "stats": {
                "strength": 0,
                "dexterity": 0,
                "constitution": 0,
                "intelligence": 0,
                "wisdom": 0
            },
            "ability_properties": {
                "icon": "",
                "name": "",
                "description": "",
                "target_type": "Enemy",
                "cooldown": 0
            }
        },
        "one_time_use": false,
        "sprite": "64e69805e8ec8d469b25f20f",
        "station_data": {
            "extra_time": 0,
            "last_inscription": "Thu May 01 2025 02:03:52 GMT+0000 (Coordinated Universal Time)",
            "level": 1,
            "total_inscriptions": 4
        }
    },

    



    ]
];
export const guideSpells = [
    [
        {
            "_id": "66bbcb9187375013b036925a",
            "recipe_type": "Crystal",
            "name": "Volatile Gambit",
            "image": "https://d3hv7cxq1p9foc.cloudfront.net/Dev/SingleFileAssets/CraftingCrystalIcon/Image/Normal_Crystal_Red_Image.png",
            "tier_text": "TIER I",
            "rarity": 0,
            "type": "Normal",
            "description": "A crystal containing the cheers of a fortunate gambler.",
            "materials": [
                {
                    "amount": 4,
                    "material": "632256e24745f215b46c902e",
                    "rarity": 0,
                    "icon": "https://d3hv7cxq1p9foc.cloudfront.net/Dev/SingleFileAssets/Material/Image/Gem_Ruby.png",
                    "generic": false,
                    "type": "gem"
                },
                {
                    "amount": 24,
                    "material": "65d75e4b0da2729615db078f",
                    "rarity": 0,
                    "icon": "https://d3hv7cxq1p9foc.cloudfront.net/Dev/SingleFileAssets/Material/Image/SpiritualMaterial_Icon_Dragon_Shard_Common.png",
                    "generic": false,
                    "type": "shard"
                }
            ],
            "currencies": {
                "gold": 20,
                "mana": 100
            },
            "properties_atelier": {
                "can_interior": false,
                "can_exterior": false,
                "can_rotate": false,
                "surface_type": 1
            },
            "properties_forge": {
                "affixes": [],
                "affixes_pool": []
            },
            "properties_crystal": {
                "stats": {
                    "strength": 2,
                    "dexterity": 0,
                    "constitution": 1,
                    "intelligence": 0,
                    "wisdom": 0
                },
                "ability_properties": {
                    "icon": "https://d3hv7cxq1p9foc.cloudfront.net/Dev/SingleFileAssets/BattlerAbility/Image/Volatile_Gambit_Normal.png",
                    "name": "Volatile Gambit",
                    "description": "Deal high Physical DMG to an Enemy, with a small chance to deal Physical DMG to yourself.",
                    "target_type": "Enemy",
                    "cooldown": 3
                }
            },
            "one_time_use": false,
            "station_data": {
                "extra_time": 0,
                "last_inscription": "Mon May 12 2025 01:07:31 GMT+0000 (Coordinated Universal Time)",
                "level": 1,
                "total_inscriptions": 7
            }
        },

        {
        "_id": "671b8f1bc1f51821d517ef51",
        "recipe_type": "Crystal",
        "name": "Firebolt II",
        "image": "https://d3hv7cxq1p9foc.cloudfront.net/Dev/SingleFileAssets/CraftingCrystalIcon/Image/Cantrip_Crystal_Red_Image.png",
        "tier_text": "TIER II",
        "rarity": 1,
        "type": "Cantrip",
        "description": "A crystal containing a memory of a fateful blaze lighting up a thatched rooftop.",
        "materials": [
            {
                "amount": 21,
                "material": "632256e24745f215b46c902e",
                "rarity": 0,
                "icon": "https://d3hv7cxq1p9foc.cloudfront.net/Dev/SingleFileAssets/Material/Image/Gem_Ruby.png",
                "generic": false,
                "type": "gem"
            },
            {
                "amount": 68,
                "material": "67abd4ffb4ee8b4c5f3da4f8",
                "rarity": 1,
                "icon": "https://d3hv7cxq1p9foc.cloudfront.net/Dev/SingleFileAssets/Material/Image/SpiritualMaterial_Icon_Beast_Shard_Uncommon.png",
                "generic": false,
                "type": "shard"
            },
            {
                "amount": 102,
                "material": "67ac0e85b4ee8b4c5f3fa8b7",
                "rarity": 1,
                "icon": "https://d3hv7cxq1p9foc.cloudfront.net/Dev/SingleFileAssets/Material/Image/SpiritualMaterial_Icon_Dragon_Shard_Uncommon.png",
                "generic": false,
                "type": "shard"
            }
        ],
        "currencies": {
            "gold": 500,
            "mana": 500
        },
        "properties_atelier": {
            "can_interior": false,
            "can_exterior": false,
            "can_rotate": false,
            "surface_type": 1
        },
        "properties_forge": {
            "affixes": [],
            "affixes_pool": []
        },
        "properties_crystal": {
            "stats": {
                "strength": 3,
                "dexterity": 0,
                "constitution": 1,
                "intelligence": 0,
                "wisdom": 0
            },
            "ability_properties": {
                "icon": "https://d3hv7cxq1p9foc.cloudfront.net/SingleFileAssets/BattlerAbility/Image/1_Firebolt_Normal.png",
                "name": "Firebolt",
                "description": "Deal low Physical DMG to an Enemy, with a small chance to BURN them.",
                "target_type": "Enemy",
                "cooldown": 0
            }
        },
        "one_time_use": false,
        "station_data": {
            "extra_time": 1745173711290,
            "last_inscription": "Thu May 21 2026 09:03:33 GMT+0000 (Coordinated Universal Time)",
            "level": 5,
            "total_inscriptions": 1635
        }
    },
    {
        "_id": "671b90ebc1f51821d517f009",
        "recipe_type": "Crystal",
        "name": "Volatile Gambit II",
        "image": "https://d3hv7cxq1p9foc.cloudfront.net/Dev/SingleFileAssets/CraftingCrystalIcon/Image/Normal_Crystal_Red_Image.png",
        "tier_text": "TIER II",
        "rarity": 1,
        "type": "Normal",
        "description": "A crystal containing a memory of beating the odds with the perfect draw.",
        "materials": [
            {
                "amount": 18,
                "material": "632256e24745f215b46c902e",
                "rarity": 0,
                "icon": "https://d3hv7cxq1p9foc.cloudfront.net/Dev/SingleFileAssets/Material/Image/Gem_Ruby.png",
                "generic": false,
                "type": "gem"
            },
            {
                "amount": 116,
                "material": "67ac080ab4ee8b4c5f3fa7b9",
                "rarity": 1,
                "icon": "https://d3hv7cxq1p9foc.cloudfront.net/Dev/SingleFileAssets/Material/Image/SpiritualMaterial_Icon_Bandit_Shard_Uncommon.png",
                "generic": false,
                "type": "shard"
            },
            {
                "amount": 58,
                "material": "67abd4ffb4ee8b4c5f3da4f8",
                "rarity": 1,
                "icon": "https://d3hv7cxq1p9foc.cloudfront.net/Dev/SingleFileAssets/Material/Image/SpiritualMaterial_Icon_Beast_Shard_Uncommon.png",
                "generic": false,
                "type": "shard"
            }
        ],
        "currencies": {
            "gold": 500,
            "mana": 500
        },
        "properties_atelier": {
            "can_interior": false,
            "can_exterior": false,
            "can_rotate": false,
            "surface_type": 1
        },
        "properties_forge": {
            "affixes": [],
            "affixes_pool": []
        },
        "properties_crystal": {
            "stats": {
                "strength": 2,
                "dexterity": 1,
                "constitution": 1,
                "intelligence": 0,
                "wisdom": 0
            },
            "ability_properties": {
                "icon": "https://d3hv7cxq1p9foc.cloudfront.net/Dev/SingleFileAssets/BattlerAbility/Image/Volatile_Gambit_Normal.png",
                "name": "Volatile Gambit",
                "description": "Deal high Physical DMG to an Enemy, with a small chance to deal Physical DMG to yourself.",
                "target_type": "Enemy",
                "cooldown": 3
            }
        },
        "one_time_use": false,
        "station_data": {
            "extra_time": 0,
            "last_inscription": "Mon Apr 27 2026 23:05:49 GMT+0000 (Coordinated Universal Time)",
            "level": 5,
            "total_inscriptions": 1587
        }
    },
    {
        "_id": "671b960bc1f51821d517f1a3",
        "recipe_type": "Crystal",
        "name": "Wheel of Chaos Ii",
        "image": "https://d3hv7cxq1p9foc.cloudfront.net/Dev/SingleFileAssets/CraftingCrystalIcon/Image/Normal_Crystal_Purple_Image.png",
        "tier_text": "TIER II",
        "rarity": 1,
        "type": "Normal",
        "description": "A crystal containing the memory of twisting currents on a sea of fates.",
        "materials": [
            {
                "amount": 21,
                "material": "631fc033308c6c735bd57524",
                "rarity": 0,
                "icon": "https://d3hv7cxq1p9foc.cloudfront.net/Dev/SingleFileAssets/Material/Image/Gem_Amethyst.png",
                "generic": false,
                "type": "gem"
            },
            {
                "amount": 68,
                "material": "67abd4ffb4ee8b4c5f3da4f8",
                "rarity": 1,
                "icon": "https://d3hv7cxq1p9foc.cloudfront.net/Dev/SingleFileAssets/Material/Image/SpiritualMaterial_Icon_Beast_Shard_Uncommon.png",
                "generic": false,
                "type": "shard"
            },
            {
                "amount": 102,
                "material": "67ac0e85b4ee8b4c5f3fa8b7",
                "rarity": 1,
                "icon": "https://d3hv7cxq1p9foc.cloudfront.net/Dev/SingleFileAssets/Material/Image/SpiritualMaterial_Icon_Dragon_Shard_Uncommon.png",
                "generic": false,
                "type": "shard"
            }
        ],
        "currencies": {
            "gold": 500,
            "mana": 500
        },
        "properties_atelier": {
            "can_interior": false,
            "can_exterior": false,
            "can_rotate": false,
            "surface_type": 1
        },
        "properties_forge": {
            "affixes": [],
            "affixes_pool": []
        },
        "properties_crystal": {
            "stats": {
                "strength": 1,
                "dexterity": 0,
                "constitution": 1,
                "intelligence": 1,
                "wisdom": 1
            },
            "ability_properties": {
                "icon": "https://d3hv7cxq1p9foc.cloudfront.net/Dev/SingleFileAssets/BattlerAbility/Image/Wheel_Of_Chaos_Normal.png",
                "name": "Wheel of Chaos",
                "description": "Deal Random Hybrid DMG to all Enemies & HEAL party for a Random amount, then apply one or more random Effects to Enemies and/or Allies (Regen, Poison, Accelerate, Exhaust).",
                "target_type": "All",
                "cooldown": 4
            }
        },
        "one_time_use": false,
        "station_data": {
            "extra_time": 0,
            "last_inscription": "Mon Jun 09 2025 15:54:40 GMT+0000 (Coordinated Universal Time)",
            "level": 3,
            "total_inscriptions": 174
        }
    },
    {
        "_id": "671b9119c1f51821d517f020",
        "recipe_type": "Crystal",
        "name": "Heat Wave II",
        "image": "https://d3hv7cxq1p9foc.cloudfront.net/Dev/SingleFileAssets/CraftingCrystalIcon/Image/Normal_Crystal_Red_Image.png",
        "tier_text": "TIER II",
        "rarity": 1,
        "type": "Normal",
        "description": "A crystal containing the memory of an ashen landscape of embers and coals.",
        "materials": [
            {
                "amount": 16,
                "material": "632256e24745f215b46c902e",
                "rarity": 0,
                "icon": "https://d3hv7cxq1p9foc.cloudfront.net/Dev/SingleFileAssets/Material/Image/Gem_Ruby.png",
                "generic": false,
                "type": "gem"
            },
            {
                "amount": 102,
                "material": "67ac056fb4ee8b4c5f3fa75f",
                "rarity": 1,
                "icon": "https://d3hv7cxq1p9foc.cloudfront.net/Dev/SingleFileAssets/Material/Image/SpiritualMaterial_Icon_Insect_Shard_Uncommon.png",
                "generic": false,
                "type": "shard"
            },
            {
                "amount": 76,
                "material": "67ac080ab4ee8b4c5f3fa7b9",
                "rarity": 1,
                "icon": "https://d3hv7cxq1p9foc.cloudfront.net/Dev/SingleFileAssets/Material/Image/SpiritualMaterial_Icon_Bandit_Shard_Uncommon.png",
                "generic": false,
                "type": "shard"
            }
        ],
        "currencies": {
            "gold": 500,
            "mana": 500
        },
        "properties_atelier": {
            "can_interior": false,
            "can_exterior": false,
            "can_rotate": false,
            "surface_type": 1
        },
        "properties_forge": {
            "affixes": [],
            "affixes_pool": []
        },
        "properties_crystal": {
            "stats": {
                "strength": 2,
                "dexterity": 0,
                "constitution": 2,
                "intelligence": 0,
                "wisdom": 0
            },
            "ability_properties": {
                "icon": "https://d3hv7cxq1p9foc.cloudfront.net/SingleFileAssets/BattlerAbility/Image/34_HeatWave_Normal.png",
                "name": "Heat Wave",
                "description": "Deal Physical DMG and BURN all Enemies.",
                "target_type": "Enemy",
                "cooldown": 4
            }
        },
        "one_time_use": false,
        "station_data": {
            "extra_time": 0,
            "last_inscription": "Sat May 09 2026 19:39:08 GMT+0000 (Coordinated Universal Time)",
            "level": 5,
            "total_inscriptions": 1577
        }
    },
    {
        "_id": "66d89fb82eb55a13f03ac474",
        "recipe_type": "Crystal",
        "name": "Modulation Grenade",
        "image": "https://d3hv7cxq1p9foc.cloudfront.net/Dev/SingleFileAssets/CraftingCrystalIcon/Image/HighNormal_Crystal_Red_Image.png",
        "tier_text": "TIER II",
        "rarity": 1,
        "type": "High",
        "description": "A crystal containing the memory of a masked soldier wading through thick fog.",
        "materials": [
            {
                "amount": 60,
                "material": "632256e24745f215b46c902e",
                "rarity": 0,
                "icon": "https://d3hv7cxq1p9foc.cloudfront.net/Dev/SingleFileAssets/Material/Image/Gem_Ruby.png",
                "generic": false,
                "type": "gem"
            },
            {
                "amount": 16,
                "material": "66bb7f4387375013b0364951",
                "rarity": 1,
                "icon": "https://d3hv7cxq1p9foc.cloudfront.net/Dev/SingleFileAssets/Material/Image/SpiritualMaterial_Icon_Golden_Essence_Uncommon.png",
                "generic": false,
                "type": "soul"
            },
            {
                "amount": 48,
                "material": "66bb7f4387375013b0364951",
                "rarity": 1,
                "icon": "https://d3hv7cxq1p9foc.cloudfront.net/Dev/SingleFileAssets/Material/Image/SpiritualMaterial_Icon_Golden_Essence_Uncommon.png",
                "generic": false,
                "type": "soul"
            },
            {
                "amount": 144,
                "material": "66bb7e4487375013b0364757",
                "rarity": 1,
                "icon": "https://d3hv7cxq1p9foc.cloudfront.net/Dev/SingleFileAssets/Material/Image/9_2_Golden_Shard_Uncommon.png",
                "generic": false,
                "type": "shard"
            }
        ],
        "currencies": {
            "gold": 7000,
            "mana": 500
        },
        "properties_atelier": {
            "can_interior": false,
            "can_exterior": false,
            "can_rotate": false,
            "surface_type": 1
        },
        "properties_forge": {
            "affixes": [],
            "affixes_pool": []
        },
        "properties_crystal": {
            "stats": {
                "strength": 1,
                "dexterity": 1,
                "constitution": 2,
                "intelligence": 0,
                "wisdom": 1
            },
            "ability_properties": {
                "icon": "https://d3hv7cxq1p9foc.cloudfront.net/Dev/SingleFileAssets/BattlerAbility/Image/SpellIcon_Red_HighNormal_ModulationGrenade_Normal.png",
                "name": "Modulation Grenade",
                "description": "CLEANSE all allies and CONFUSE up to 2 enemies.",
                "target_type": "All",
                "cooldown": 5
            }
        },
        "one_time_use": false,
        "station_data": {
            "extra_time": 0,
            "last_inscription": "Fri May 23 2025 17:02:45 GMT+0000 (Coordinated Universal Time)",
            "level": 3,
            "total_inscriptions": 100
        }
    },
    {
        "_id": "679c47e788ed77a530418fdc",
        "recipe_type": "Crystal",
        "name": "📜Heat Wave",
        "image": "https://d3hv7cxq1p9foc.cloudfront.net/Dev/SingleFileAssets/CraftingCrystalIcon/Image/Normal_Crystal_Red_Image.png",
        "tier_text": "TIER I",
        "rarity": 0,
        "type": "Normal",
        "description": "A crystal containing the memory of a forest engulfed in flames.",
        "materials": [
            {
                "amount": 2,
                "material": "632256e24745f215b46c902e",
                "rarity": 0,
                "icon": "https://d3hv7cxq1p9foc.cloudfront.net/Dev/SingleFileAssets/Material/Image/Gem_Ruby.png",
                "generic": false,
                "type": "gem"
            },
            {
                "amount": 12,
                "material": "635a0e7fef066c46dfa17953",
                "rarity": 0,
                "icon": "https://d3hv7cxq1p9foc.cloudfront.net/Dev/SingleFileAssets/Material/Image/SpiritualMaterial_Icon_Bandit_Shard_Common.png",
                "generic": false,
                "type": "shard"
            }
        ],
        "currencies": {
            "gold": 10,
            "mana": 100
        },
        "properties_atelier": {
            "can_interior": false,
            "can_exterior": false,
            "can_rotate": false,
            "surface_type": 1
        },
        "properties_forge": {
            "affixes": [],
            "affixes_pool": []
        },
        "properties_crystal": {
            "stats": {
                "strength": 2,
                "dexterity": 0,
                "constitution": 1,
                "intelligence": 0,
                "wisdom": 0
            },
            "ability_properties": {
                "icon": "https://d3hv7cxq1p9foc.cloudfront.net/SingleFileAssets/BattlerAbility/Image/34_HeatWave_Normal.png",
                "name": "Heat Wave",
                "description": "Deal Physical DMG and BURN all Enemies.",
                "target_type": "Enemy",
                "cooldown": 4
            }
        },
        "one_time_use": true,
        "station_data": {
            "last_inscription": "Tue May 27 2025 02:17:12 GMT+0000 (Coordinated Universal Time)",
            "level": 1,
            "extra_time": 0,
            "total_inscriptions": 1
        }
    },
    {
        "_id": "679c499e88ed77a53041902e",
        "recipe_type": "Crystal",
        "name": "📜Sparkling Volley",
        "image": "https://d3hv7cxq1p9foc.cloudfront.net/Dev/SingleFileAssets/CraftingCrystalIcon/Image/Cantrip_Crystal_Yellow_Image.png",
        "tier_text": "TIER I",
        "rarity": 0,
        "type": "Cantrip",
        "description": "A crystal containing a childhood memory of wondrous, if fleeting, joy.",
        "materials": [
            {
                "amount": 2,
                "material": "634ec133808f6bf4626a30ec",
                "rarity": 0,
                "icon": "https://d3hv7cxq1p9foc.cloudfront.net/Dev/SingleFileAssets/Material/Image/Gem_Topaz.png",
                "generic": false,
                "type": "gem"
            },
            {
                "amount": 12,
                "material": "6359f4aeef066c46dfa1785f",
                "rarity": 0,
                "icon": "https://d3hv7cxq1p9foc.cloudfront.net/Dev/SingleFileAssets/Material/Image/SpiritualMaterial_Icon_Insect_Shard_Common.png",
                "generic": false,
                "type": "shard"
            }
        ],
        "currencies": {
            "gold": 10,
            "mana": 100
        },
        "properties_atelier": {
            "can_interior": false,
            "can_exterior": false,
            "can_rotate": false,
            "surface_type": 1
        },
        "properties_forge": {
            "affixes": [],
            "affixes_pool": []
        },
        "properties_crystal": {
            "stats": {
                "strength": 1,
                "dexterity": 1,
                "constitution": 0,
                "intelligence": 1,
                "wisdom": 0
            },
            "ability_properties": {
                "icon": "https://d3hv7cxq1p9foc.cloudfront.net/SingleFileAssets/BattlerAbility/Image/4_Partysnappers_Normal.png",
                "name": "Sparkling Volley",
                "description": "Deal low Hybrid DMG to an Enemy, then hit up to 2 more times against random Enemies.",
                "target_type": "Enemy",
                "cooldown": 0
            }
        },
        "one_time_use": true,
        "station_data": {
            "last_inscription": "Tue May 27 2025 02:17:12 GMT+0000 (Coordinated Universal Time)",
            "level": 1,
            "extra_time": 0,
            "total_inscriptions": 1
        }
    },


    ]
];

export const idDescriptors = [
  [
        {
        "_id": "67ffdad2ade0fec677a62e8f",
        "__v": 0,
        "bag": 2,
        "burneable": false,
        "family": "",
        "icon": "67f85a77ade0fec6779b0974",
        "minteable": false,
        "name": "Apex Ember II",
        "rarity": 1,
        "type": "ember"
    },
    
    {
        "_id": "631fbd60308c6c735bd57404",
        "__v": 0,
        "bag": 2,
        "family": "",
        "icon": "631fb82e308c6c735bd572e0",
        "name": "Tin",
        "rarity": 0,
        "type": "metal"
    },
    {
        "_id": "631fbe3d308c6c735bd57480",
        "__v": 0,
        "bag": 2,
        "family": "",
        "icon": "631fba32308c6c735bd57399",
        "name": "Sand",
        "rarity": 2,
        "type": "stone"
    },
    {
        "_id": "631fbe65308c6c735bd57492",
        "__v": 0,
        "bag": 2,
        "family": "",
        "icon": "631fba22308c6c735bd57390",
        "name": "Zinc",
        "rarity": 0,
        "type": "metal"
    },
    {
        "_id": "631fbe90308c6c735bd574a5",
        "__v": 0,
        "bag": 2,
        "family": "",
        "icon": "631fb87a308c6c735bd572f2",
        "name": "Oak",
        "rarity": 0,
        "type": "wood"
    },
    {
        "_id": "631fbebc308c6c735bd574b7",
        "__v": 0,
        "bag": 2,
        "family": "",
        "icon": "631fb89e308c6c735bd572fb",
        "name": "Cashmere",
        "rarity": 2,
        "type": "fabric"
    },
    {
        "_id": "631fbee3308c6c735bd574c9",
        "__v": 0,
        "bag": 2,
        "family": "",
        "icon": "631fb8b1308c6c735bd57304",
        "name": "Sapphire",
        "rarity": 0,
        "type": "gem"
    },
    {
        "_id": "631fbf2d308c6c735bd574db",
        "__v": 0,
        "bag": 2,
        "family": "",
        "icon": "631fb869308c6c735bd572e9",
        "name": "Shale",
        "rarity": 0,
        "type": "stone"
    },
    {
        "_id": "631fc033308c6c735bd57524",
        "__v": 0,
        "bag": 2,
        "family": "",
        "icon": "631fc010308c6c735bd57511",
        "name": "Amethyst",
        "rarity": 0,
        "type": "gem"
    },
    {
        "_id": "632256e24745f215b46c902e",
        "__v": 0,
        "bag": 2,
        "family": "",
        "icon": "63236be64745f215b46c9371",
        "name": "Ruby",
        "rarity": 0,
        "type": "gem"
    },
    {
        "_id": "634ec133808f6bf4626a30ec",
        "__v": 0,
        "bag": 2,
        "family": "",
        "icon": "63236c894745f215b46c9379",
        "name": "Topaz",
        "rarity": 0,
        "type": "gem"
    },
    {
        "_id": "634ec267808f6bf4626a30fe",
        "__v": 0,
        "bag": 2,
        "family": "",
        "icon": "63236cdf4745f215b46c938c",
        "name": "Smoky Quartz",
        "rarity": 0,
        "type": "gem"
    },
    {
        "_id": "634ec38b808f6bf4626a3130",
        "__v": 0,
        "bag": 2,
        "family": "",
        "icon": "63236ca04745f215b46c9383",
        "name": "Emerald",
        "rarity": 0,
        "type": "gem"
    },
    {
        "_id": "634ec4bc808f6bf4626a3154",
        "__v": 0,
        "bag": 2,
        "family": "",
        "icon": "63236cf84745f215b46c9395",
        "name": "Diamond",
        "rarity": 0,
        "type": "gem"
    },
    {
        "_id": "634ed2a9808f6bf4626a3226",
        "__v": 0,
        "bag": 2,
        "family": "",
        "icon": "63236a594745f215b46c9332",
        "name": "Basalt",
        "rarity": 0,
        "type": "stone"
    },
    {
        "_id": "634ed426808f6bf4626a3240",
        "__v": 0,
        "bag": 2,
        "family": "",
        "icon": "63236b0a4745f215b46c9356",
        "name": "Granite",
        "rarity": 0,
        "type": "stone"
    },
    {
        "_id": "634edbe5808f6bf4626a3294",
        "__v": 0,
        "bag": 2,
        "family": "",
        "icon": "63236a924745f215b46c933b",
        "name": "Limestone",
        "rarity": 0,
        "type": "stone"
    },
    {
        "_id": "634ef0c9808f6bf4626a33f6",
        "__v": 0,
        "bag": 2,
        "family": "",
        "icon": "63236b824745f215b46c935f",
        "name": "Marble",
        "rarity": 2,
        "type": "stone"
    },
    {
        "_id": "634ef14d808f6bf4626a3408",
        "__v": 0,
        "bag": 2,
        "family": "",
        "icon": "63236ae34745f215b46c934d",
        "name": "Alabaster",
        "rarity": 2,
        "type": "stone"
    },
    {
        "_id": "634ef96e808f6bf4626a347a",
        "__v": 0,
        "bag": 2,
        "family": "",
        "icon": "632367a34745f215b46c92d4",
        "name": "Iron",
        "rarity": 0,
        "type": "metal"
    },
    {
        "_id": "634ef9ed808f6bf4626a348c",
        "__v": 0,
        "bag": 2,
        "family": "",
        "icon": "632366ef4745f215b46c92b8",
        "name": "Tungsten",
        "rarity": 0,
        "type": "metal"
    },
    {
        "_id": "634f034e808f6bf4626a34d7",
        "__v": 0,
        "bag": 2,
        "family": "",
        "icon": "632367534745f215b46c92c1",
        "name": "Copper",
        "rarity": 0,
        "type": "metal"
    },
    {
        "_id": "634f05ab808f6bf4626a3506",
        "__v": 0,
        "bag": 2,
        "family": "",
        "icon": "6323677f4745f215b46c92ca",
        "name": "Aluminum",
        "rarity": 2,
        "type": "metal"
    },
    {
        "_id": "634f06eb808f6bf4626a3518",
        "__v": 0,
        "bag": 2,
        "family": "",
        "icon": "632367ba4745f215b46c92dc",
        "name": "Titanium",
        "rarity": 2,
        "type": "metal"
    },
    {
        "_id": "634f19f2808f6bf4626a355e",
        "__v": 0,
        "bag": 2,
        "family": "",
        "icon": "6323685d4745f215b46c92ef",
        "name": "Redwood",
        "rarity": 0,
        "type": "wood"
    },
    {
        "_id": "634f1f7f808f6bf4626a3570",
        "__v": 0,
        "bag": 2,
        "family": "",
        "icon": "6323687f4745f215b46c92f8",
        "name": "Olive",
        "rarity": 0,
        "type": "wood"
    },
    {
        "_id": "634f2160808f6bf4626a3582",
        "__v": 0,
        "bag": 2,
        "family": "",
        "icon": "6323689f4745f215b46c9301",
        "name": "Willow",
        "rarity": 0,
        "type": "wood"
    },
    {
        "_id": "634f2461808f6bf4626a35b4",
        "__v": 0,
        "bag": 2,
        "family": "",
        "icon": "632368b84745f215b46c930a",
        "name": "Pine",
        "rarity": 0,
        "type": "wood"
    },
    {
        "_id": "634f27ad808f6bf4626a3618",
        "__v": 0,
        "bag": 2,
        "family": "",
        "icon": "632369a64745f215b46c9313",
        "name": "Ash",
        "rarity": 2,
        "type": "wood"
    },
    {
        "_id": "634f29cb808f6bf4626a362a",
        "__v": 0,
        "bag": 2,
        "family": "",
        "icon": "632369e34745f215b46c9320",
        "name": "Holly",
        "rarity": 2,
        "type": "wood"
    },
    {
        "_id": "634f2a9e808f6bf4626a3653",
        "__v": 0,
        "bag": 2,
        "family": "",
        "icon": "63236d464745f215b46c93a7",
        "name": "Hemp",
        "rarity": 0,
        "type": "fabric"
    },
    {
        "_id": "634f2e76808f6bf4626a370e",
        "__v": 0,
        "bag": 2,
        "family": "",
        "icon": "63236e714745f215b46c93d4",
        "name": "Jute",
        "rarity": 0,
        "type": "fabric"
    },
    {
        "_id": "634f30b4808f6bf4626a3720",
        "__v": 0,
        "bag": 2,
        "family": "",
        "icon": "63236d654745f215b46c93b0",
        "name": "Flax",
        "rarity": 0,
        "type": "fabric"
    },
    {
        "_id": "634f3562808f6bf4626a3738",
        "__v": 0,
        "bag": 2,
        "family": "",
        "icon": "63236ded4745f215b46c93b9",
        "name": "Cotton",
        "rarity": 0,
        "type": "fabric"
    },
    {
        "_id": "634f3597808f6bf4626a374a",
        "__v": 0,
        "bag": 2,
        "family": "",
        "icon": "63236e164745f215b46c93c2",
        "name": "Silk",
        "rarity": 0,
        "type": "fabric"
    },
    {
        "_id": "634f38abbbce1b02b687d49e",
        "__v": 0,
        "bag": 2,
        "family": "",
        "icon": "63236e304745f215b46c93cb",
        "name": "Wool",
        "rarity": 2,
        "type": "fabric"
    },
    {
        "_id": "634f3db2bbce1b02b687d629",
        "__v": 0,
        "bag": 2,
        "family": "",
        "icon": "632147664745f215b46c8d16",
        "name": "Sulfur",
        "rarity": 0,
        "type": "element"
    },
    {
        "_id": "634f3f15bbce1b02b687d63b",
        "__v": 0,
        "bag": 2,
        "family": "",
        "icon": "63236ecc4745f215b46c93e6",
        "name": "Calcium",
        "rarity": 0,
        "type": "element"
    },
    {
        "_id": "634f4d56bbce1b02b687d66d",
        "__v": 0,
        "bag": 2,
        "family": "",
        "icon": "63236ee44745f215b46c93ef",
        "name": "Nitrogen",
        "rarity": 0,
        "type": "element"
    },
    {
        "_id": "634f579fbbce1b02b687d699",
        "__v": 0,
        "bag": 2,
        "family": "",
        "icon": "63236f204745f215b46c93f8",
        "name": "Carbon",
        "rarity": 0,
        "type": "element"
    },
    {
        "_id": "634f60ddbbce1b02b687d6ab",
        "__v": 0,
        "bag": 2,
        "family": "",
        "icon": "63236f5d4745f215b46c9401",
        "name": "Antimony",
        "rarity": 0,
        "type": "element"
    },
    {
        "_id": "634f6114bbce1b02b687d6bd",
        "__v": 0,
        "bag": 2,
        "family": "",
        "icon": "63236f734745f215b46c940a",
        "name": "Silicon",
        "rarity": 2,
        "type": "element"
    },
    {
        "_id": "634f644fbbce1b02b687d6ef",
        "__v": 0,
        "bag": 2,
        "family": "",
        "icon": "63236f884745f215b46c9413",
        "name": "Hydrogen",
        "rarity": 2,
        "type": "element"
    },
    {
        "_id": "6359abf1ef066c46dfa177e1",
        "__v": 0,
        "bag": 2,
        "family": "",
        "icon": "635716adef066c46dfa173d9",
        "name": "Feral Shard",
        "rarity": 0,
        "type": "shard"
    },
    {
        "_id": "6359ac59ef066c46dfa1780d",
        "__v": 0,
        "bag": 2,
        "family": "",
        "icon": "67a6b0518e2bca692b53c4a7",
        "name": "Feral Ember",
        "rarity": 0,
        "type": "ember"
    },
    {
        "_id": "6359f4aeef066c46dfa1785f",
        "__v": 0,
        "bag": 2,
        "family": "",
        "icon": "63571760ef066c46dfa1741b",
        "name": "Chittering Shard",
        "rarity": 0,
        "type": "shard"
    },
    {
        "_id": "6359f99def066c46dfa17891",
        "__v": 0,
        "bag": 2,
        "family": "",
        "icon": "67a6b2258e2bca692b53c827",
        "name": "Chittering Ember",
        "rarity": 0,
        "type": "ember"
    },
    {
        "_id": "6359fad6ef066c46dfa178bd",
        "__v": 0,
        "bag": 2,
        "family": "",
        "icon": "63571bfbef066c46dfa17537",
        "name": "Sorrowful Shard",
        "rarity": 0,
        "type": "shard"
    },
    {
        "_id": "6359fb16ef066c46dfa178cf",
        "__v": 0,
        "bag": 2,
        "family": "",
        "icon": "63571c2bef066c46dfa1754d",
        "name": "Sorrowful Ember",
        "rarity": 1,
        "type": "ember"
    },
    {
        "_id": "6359feabef066c46dfa178eb",
        "__v": 0,
        "bag": 2,
        "family": "",
        "icon": "635717f2ef066c46dfa1745f",
        "name": "Disturbing Shard",
        "rarity": 0,
        "type": "shard"
    },
    {
        "_id": "635a01e5ef066c46dfa1791d",
        "__v": 0,
        "bag": 2,
        "family": "",
        "icon": "67a6b3e08e2bca692b53cb59",
        "name": "Disturbing Ember",
        "rarity": 0,
        "type": "ember"
    },
    {
        "_id": "635a0973ef066c46dfa1792f",
        "__v": 0,
        "bag": 2,
        "family": "",
        "icon": "63571b2fef066c46dfa174e8",
        "name": "Soaring Shard",
        "rarity": 0,
        "type": "shard"
    },
    {
        "_id": "635a0aadef066c46dfa17941",
        "__v": 0,
        "bag": 2,
        "family": "",
        "icon": "63571b71ef066c46dfa174ff",
        "name": "Soaring Ember",
        "rarity": 1,
        "type": "ember"
    },
    {
        "_id": "635a0e7fef066c46dfa17953",
        "__v": 0,
        "bag": 2,
        "family": "",
        "icon": "63571889ef066c46dfa174a6",
        "name": "Cunning Shard",
        "rarity": 0,
        "type": "shard"
    },
    {
        "_id": "635a0ea4ef066c46dfa17965",
        "__v": 0,
        "bag": 2,
        "family": "",
        "icon": "67a6b5468e2bca692b53ce65",
        "name": "Cunning Ember",
        "rarity": 0,
        "type": "ember"
    },
    {
        "_id": "635a0ed6ef066c46dfa17977",
        "__v": 0,
        "bag": 2,
        "family": "",
        "icon": "67a6b0ef8e2bca692b53c5d7",
        "name": "Feral Essence",
        "rarity": 0,
        "type": "soul"
    },
    {
        "_id": "635a0efeef066c46dfa17989",
        "__v": 0,
        "bag": 2,
        "family": "",
        "icon": "67a6b2a38e2bca692b53c947",
        "name": "Chittering Essence",
        "rarity": 0,
        "type": "soul"
    },
    {
        "_id": "635a0f27ef066c46dfa1799b",
        "__v": 0,
        "bag": 2,
        "family": "",
        "icon": "63571c77ef066c46dfa17563",
        "name": "Sorrowful Essence",
        "rarity": 2,
        "type": "soul"
    },
    {
        "_id": "635a0f66ef066c46dfa179ad",
        "__v": 0,
        "bag": 2,
        "family": "",
        "icon": "67a6b4698e2bca692b53cc99",
        "name": "Disturbing Essence",
        "rarity": 0,
        "type": "soul"
    },
    {
        "_id": "635a1237ef066c46dfa179d9",
        "__v": 0,
        "bag": 2,
        "family": "",
        "icon": "63571bb8ef066c46dfa17514",
        "name": "Soaring Essence",
        "rarity": 2,
        "type": "soul"
    },
    {
        "_id": "635a1289ef066c46dfa179f1",
        "__v": 0,
        "bag": 2,
        "family": "",
        "icon": "67a6b5d78e2bca692b53cf87",
        "name": "Cunning Essence",
        "rarity": 0,
        "type": "soul"
    },
    {
        "_id": "636be8c7d22c16e85b821d23",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "636c1304d22c16e85b8220e4",
        "minteable": true,
        "name": "Witch's Hat",
        "rarity": 1,
        "type": "Headgear"
    },
    {
        "_id": "636bf180d22c16e85b821db6",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "636c1314d22c16e85b8220ef",
        "minteable": true,
        "name": "Witch's Robes",
        "rarity": 1,
        "type": "Suits"
    },
    {
        "_id": "6361f545d22c16e85b8212e5",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "6364496bd22c16e85b82173e",
        "minteable": true,
        "name": "Pilgrim's Staff",
        "rarity": 0,
        "type": "Weapon"
    },
    {
        "_id": "63642f52d22c16e85b821705",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "63644c61d22c16e85b821893",
        "minteable": true,
        "name": "Nature's Gift",
        "rarity": 0,
        "type": "Weapon"
    },
    {
        "_id": "6364592cd22c16e85b821a12",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "63644b7cd22c16e85b82180f",
        "minteable": true,
        "name": "Ol' Trusty",
        "rarity": 0,
        "type": "Weapon"
    },
    {
        "_id": "63646233d22c16e85b821a24",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "63644dbcd22c16e85b8218ca",
        "minteable": true,
        "name": "Butcher's Friend",
        "rarity": 0,
        "type": "Weapon"
    },
    {
        "_id": "636a8485d22c16e85b821b9c",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "63644fd9d22c16e85b8219bc",
        "minteable": true,
        "name": "Joybringer",
        "rarity": 0,
        "type": "Weapon"
    },
    {
        "_id": "636a86c6d22c16e85b821bae",
        "__v": 1,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "63644912d22c16e85b82171d",
        "minteable": true,
        "name": "Devouring Scythe",
        "rarity": 1,
        "type": "Weapon"
    },
    {
        "_id": "636c22d5d22c16e85b8221c0",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "636c128bd22c16e85b8220b8",
        "minteable": true,
        "name": "Comfy Hood",
        "rarity": 0,
        "type": "Headgear"
    },
    {
        "_id": "636c28b4d22c16e85b822229",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "636c0e7ad22c16e85b821fa2",
        "minteable": true,
        "name": "Bold Circlet",
        "rarity": 0,
        "type": "Headgear"
    },
    {
        "_id": "636c2d64d22c16e85b82223b",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "636c1367d22c16e85b822112",
        "minteable": true,
        "name": "Corsair Bandana",
        "rarity": 0,
        "type": "Headgear"
    },
    {
        "_id": "636c3035d22c16e85b82226a",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "636c0d8bd22c16e85b821f53",
        "minteable": true,
        "name": "Tactician's Helm",
        "rarity": 1,
        "type": "Headgear"
    },
    {
        "_id": "636c73c377714a57873dc45d",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "636c0fdfd22c16e85b82203c",
        "minteable": true,
        "name": "Dreamy Time Cap",
        "rarity": 0,
        "type": "Headgear"
    },
    {
        "_id": "636c763977714a57873dc48f",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "636c12a2d22c16e85b8220c3",
        "minteable": true,
        "name": "Comfy Robes",
        "rarity": 0,
        "type": "Suits"
    },
    {
        "_id": "636c7b0f77714a57873dc4be",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "636c0e91d22c16e85b821fad",
        "minteable": true,
        "name": "Bold Straps",
        "rarity": 0,
        "type": "Suits"
    },
    {
        "_id": "636c7dbc77714a57873dc4d0",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "636c1381d22c16e85b82211b",
        "minteable": true,
        "name": "Corsair Apparel",
        "rarity": 0,
        "type": "Suits"
    },
    {
        "_id": "636c83e577714a57873dc4e2",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "636c0da0d22c16e85b821f5e",
        "minteable": true,
        "name": "Tactician's Armor",
        "rarity": 1,
        "type": "Suits"
    },
    {
        "_id": "636c880d77714a57873dc54b",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "636c0ff2d22c16e85b822047",
        "minteable": true,
        "name": "Dreamy Time Pajamas",
        "rarity": 0,
        "type": "Suits"
    },
    {
        "_id": "63866a485c5c376fbbd4c646",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "638665985c5c376fbbd4c5db",
        "minteable": true,
        "name": "Firebolt",
        "rarity": 0,
        "type": "Cantrip"
    },
    {
        "_id": "6386b4b65c5c376fbbd4cbfa",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "638665885c5c376fbbd4c5d0",
        "minteable": true,
        "name": "Drawing of Chaos",
        "rarity": 0,
        "type": "Cantrip"
    },
    {
        "_id": "6386baf35c5c376fbbd4cc0f",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "638665bd5c5c376fbbd4c5f1",
        "minteable": true,
        "name": "Leech Blossom",
        "rarity": 0,
        "type": "Cantrip"
    },
    {
        "_id": "6386bc095c5c376fbbd4cc24",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "638665a55c5c376fbbd4c5e6",
        "minteable": true,
        "name": "Sparkling Volley",
        "rarity": 0,
        "type": "Cantrip"
    },
    {
        "_id": "6386bcaa5c5c376fbbd4cc59",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "63616121c2284ba32e1bc35c",
        "minteable": true,
        "name": "Life Bloom",
        "rarity": 0,
        "type": "Normal"
    },
    {
        "_id": "63877c635c5c376fbbd4cd03",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "6361612dc2284ba32e1bc367",
        "minteable": true,
        "name": "Violent Dismissal",
        "rarity": 0,
        "type": "Normal"
    },
    {
        "_id": "63878b275c5c376fbbd4cd18",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "63616114c2284ba32e1bc350",
        "minteable": true,
        "name": "Zoom Attack",
        "rarity": 0,
        "type": "Normal"
    },
    {
        "_id": "63878d475c5c376fbbd4cd2d",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "6386651e5c5c376fbbd4c5a4",
        "minteable": true,
        "name": "Shattered Crystal",
        "rarity": 0,
        "type": "Normal"
    },
    {
        "_id": "638792e75c5c376fbbd4cd82",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "6386651e5c5c376fbbd4c5a4",
        "minteable": true,
        "name": "Chilling Breath",
        "rarity": 0,
        "type": "Normal"
    },
    {
        "_id": "638795c05c5c376fbbd4cd97",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "638665435c5c376fbbd4c5ba",
        "minteable": true,
        "name": "Tremor",
        "rarity": 0,
        "type": "Normal"
    },
    {
        "_id": "638798a55c5c376fbbd4cde0",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "638665435c5c376fbbd4c5ba",
        "minteable": true,
        "name": "Brief Respite",
        "rarity": 0,
        "type": "Normal"
    },
    {
        "_id": "63879fb35c5c376fbbd4ce15",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "6386652f5c5c376fbbd4c5af",
        "minteable": true,
        "name": "Fate Reversal",
        "rarity": 0,
        "type": "Normal"
    },
    {
        "_id": "649b60b1d75ceee289bd59cf",
        "__v": 1,
        "bag": 12,
        "family": "",
        "icon": "63f7a79655b8cb87f3417b24",
        "journal_name": "Learning the Ropes",
        "name": "FTUE 1 - Forging and Enchanting",
        "rarity": 0,
        "region": [
            {
                "value": "64b01970d3d5ac314bfbbf17",
                "label": "HedgeWizardEncampment"
            }
        ],
        "state": 0,
        "type": "rumor"
    },
    {
        "_id": "649f323e7d6ddcceba1aa36c",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "638665dc5c5c376fbbd4c608",
        "minteable": true,
        "name": "Solar Blast",
        "rarity": 0,
        "type": "Cantrip"
    },
    {
        "_id": "649f35477d6ddcceba1aa5a0",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "638665e85c5c376fbbd4c613",
        "minteable": true,
        "name": "Frost Phaser",
        "rarity": 0,
        "type": "Cantrip"
    },
    {
        "_id": "649f38307d6ddcceba1aa5e3",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "638665435c5c376fbbd4c5ba",
        "minteable": true,
        "name": "Decoy",
        "rarity": 0,
        "type": "Normal"
    },
    {
        "_id": "649f4e5d7d6ddcceba1aacde",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "638665515c5c376fbbd4c5c5",
        "minteable": true,
        "name": "Rift Pox",
        "rarity": 0,
        "type": "Normal"
    },
    {
        "_id": "649f4ee47d6ddcceba1aad21",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "63616121c2284ba32e1bc35c",
        "minteable": true,
        "name": "Wild Call",
        "rarity": 0,
        "type": "Normal"
    },
    {
        "_id": "649f5cc37d6ddcceba1ab00f",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "63616114c2284ba32e1bc350",
        "minteable": true,
        "name": "Overload",
        "rarity": 0,
        "type": "Normal"
    },
    {
        "_id": "64a44343d3d5ac314bfb0cdc",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "638665515c5c376fbbd4c5c5",
        "minteable": true,
        "name": "Fractal Barrier",
        "rarity": 0,
        "type": "Normal"
    },
    {
        "_id": "64a447e1d3d5ac314bfb0dbd",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "6386652f5c5c376fbbd4c5af",
        "minteable": true,
        "name": "Cleansing Rune",
        "rarity": 0,
        "type": "Normal"
    },
    {
        "_id": "64a44abcd3d5ac314bfb0e60",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "6361612dc2284ba32e1bc367",
        "minteable": true,
        "name": "Heat Wave",
        "rarity": 0,
        "type": "Normal"
    },
    {
        "_id": "64b9adae2c5595e63d87e325",
        "__v": 0,
        "bag": 14,
        "burneable": true,
        "family": "",
        "icon": "",
        "minteable": true,
        "name": "Bronze Quantum Gift - Familiar 1",
        "rarity": 1,
        "type": "familiar"
    },
    {
        "_id": "64b9adc32c5595e63d87e3bc",
        "__v": 0,
        "bag": 14,
        "burneable": true,
        "family": "",
        "icon": "",
        "minteable": true,
        "name": "Bronze Quantum Gift - Familiar 2",
        "rarity": 1,
        "type": "familiar"
    },
    {
        "_id": "64b9add82c5595e63d87e403",
        "__v": 0,
        "bag": 14,
        "burneable": true,
        "family": "",
        "icon": "",
        "minteable": true,
        "name": "Bronze Quantum Gift - Familiar 3",
        "rarity": 1,
        "type": "familiar"
    },
    {
        "_id": "64b9aded2c5595e63d87e41f",
        "__v": 0,
        "bag": 14,
        "burneable": true,
        "family": "",
        "icon": "",
        "minteable": true,
        "name": "Bronze Quantum Gift - Familiar 4",
        "rarity": 1,
        "type": "familiar"
    },
    {
        "_id": "64b9ae032c5595e63d87e439",
        "__v": 0,
        "bag": 14,
        "burneable": true,
        "family": "",
        "icon": "",
        "minteable": true,
        "name": "Bronze Quantum Gift - Familiar 5",
        "rarity": 1,
        "type": "familiar"
    },
    {
        "_id": "64b9ae1c2c5595e63d87e454",
        "__v": 0,
        "bag": 14,
        "burneable": true,
        "family": "",
        "icon": "",
        "minteable": true,
        "name": "Silver Quantum Gift - Familiar 1",
        "rarity": 2,
        "type": "familiar"
    },
    {
        "_id": "64b9ae2c2c5595e63d87e46f",
        "__v": 0,
        "bag": 14,
        "burneable": true,
        "family": "",
        "icon": "",
        "minteable": true,
        "name": "Silver Quantum Gift - Familiar 2",
        "rarity": 2,
        "type": "familiar"
    },
    {
        "_id": "64b9ae3e2c5595e63d87e48a",
        "__v": 0,
        "bag": 14,
        "burneable": true,
        "family": "",
        "icon": "",
        "minteable": true,
        "name": "Silver Quantum Gift - Familiar 3",
        "rarity": 2,
        "type": "familiar"
    },
    {
        "_id": "64b9ae582c5595e63d87e4cf",
        "__v": 0,
        "bag": 14,
        "burneable": true,
        "family": "",
        "icon": "",
        "minteable": true,
        "name": "Gold Quantum Gift - Familiar 1",
        "rarity": 3,
        "type": "familiar"
    },
    {
        "_id": "64b9aec52c5595e63d87e53e",
        "__v": 0,
        "bag": 27,
        "burneable": false,
        "family": "Mount",
        "icon": "67a23b5b88ed77a5304d3f6d",
        "minteable": true,
        "mystery_box_data": {
            "_id": "64b9aec52c5595e63d87e53e",
            "name": "Bronze Quantum Gift - Mount 3",
            "bag": 14,
            "icon": "",
            "type": "mount",
            "family": "",
            "rarity": 1,
            "__v": 0,
            "burneable": true,
            "minteable": true
        },
        "name": "Flying Carpet",
        "rarity": 1,
        "type": "Mount"
    },
    {
        "_id": "64b9ae8f2c5595e63d87e509",
        "__v": 0,
        "bag": 27,
        "burneable": false,
        "family": "Mount",
        "icon": "67a23b6988ed77a5304d3f94",
        "minteable": true,
        "mystery_box_data": {
            "_id": "64b9ae8f2c5595e63d87e509",
            "name": "Bronze Quantum Gift - Mount 1",
            "bag": 14,
            "icon": "",
            "type": "mount",
            "family": "",
            "rarity": 1,
            "__v": 0,
            "burneable": true,
            "minteable": true
        },
        "name": "Flying Disk",
        "rarity": 1,
        "type": "Mount"
    },
    {
        "_id": "64b9ae6c2c5595e63d87e4eb",
        "__v": 0,
        "bag": 14,
        "burneable": true,
        "family": "",
        "icon": "",
        "minteable": true,
        "name": "Gold Quantum Gift - Familiar 2",
        "rarity": 3,
        "type": "familiar"
    },
    {
        "_id": "64b9aea22c5595e63d87e523",
        "__v": 0,
        "bag": 27,
        "burneable": false,
        "family": "Mount",
        "icon": "67a23b9188ed77a5304d3ff2",
        "minteable": true,
        "mystery_box_data": {
            "_id": "64b9aea22c5595e63d87e523",
            "name": "Bronze Quantum Gift - Mount 2",
            "bag": 14,
            "icon": "",
            "type": "mount",
            "family": "",
            "rarity": 1,
            "__v": 0,
            "burneable": true,
            "minteable": true
        },
        "name": "Jetpack",
        "rarity": 1,
        "type": "Mount"
    },
    {
        "_id": "64b9af452c5595e63d87e559",
        "__v": 0,
        "bag": 27,
        "burneable": false,
        "family": "Mount",
        "icon": "67d1f9317b8f1f9f24c8afe9",
        "minteable": true,
        "mystery_box_data": {
            "_id": "64b9af452c5595e63d87e559",
            "name": "Bronze Quantum Gift - Mount 4",
            "bag": 14,
            "icon": "",
            "type": "mount",
            "family": "",
            "rarity": 1,
            "__v": 0,
            "burneable": true,
            "minteable": true
        },
        "name": "Thopter",
        "rarity": 1,
        "type": "Mount"
    },
    {
        "_id": "64b9af5e2c5595e63d87e574",
        "__v": 0,
        "bag": 27,
        "burneable": false,
        "family": "Mount",
        "icon": "67d1f9197b8f1f9f24c8ad7e",
        "minteable": true,
        "mystery_box_data": {
            "_id": "64b9af5e2c5595e63d87e574",
            "name": "Bronze Quantum Gift - Mount 5",
            "bag": 14,
            "icon": "",
            "type": "mount",
            "family": "",
            "rarity": 1,
            "__v": 0,
            "burneable": true,
            "minteable": true
        },
        "name": "Boar",
        "rarity": 1,
        "type": "Mount"
    },
    {
        "_id": "64b9af702c5595e63d87e58f",
        "__v": 0,
        "bag": 27,
        "burneable": false,
        "family": "Mount",
        "icon": "67a23b4e88ed77a5304d3f46",
        "minteable": true,
        "mystery_box_data": {
            "_id": "64b9af702c5595e63d87e58f",
            "name": "Silver Quantum Gift - Mount 1",
            "bag": 14,
            "icon": "",
            "type": "mount",
            "family": "",
            "rarity": 2,
            "__v": 0,
            "burneable": true,
            "minteable": true
        },
        "name": "Floating Bubble",
        "rarity": 2,
        "type": "Mount"
    },
    {
        "_id": "64b9af992c5595e63d87e5c5",
        "__v": 0,
        "bag": 27,
        "burneable": false,
        "family": "Mount",
        "icon": "67a23b7c88ed77a5304d3fcb",
        "minteable": true,
        "mystery_box_data": {
            "_id": "64b9af992c5595e63d87e5c5",
            "name": "Silver Quantum Gift - Mount 3",
            "bag": 14,
            "icon": "",
            "type": "mount",
            "family": "",
            "rarity": 2,
            "__v": 0,
            "burneable": true,
            "minteable": true
        },
        "name": "Goblin Bike",
        "rarity": 2,
        "type": "Mount"
    },
    {
        "_id": "64b9af892c5595e63d87e5aa",
        "__v": 0,
        "bag": 27,
        "burneable": false,
        "family": "Mount",
        "icon": "67d1f9be7b8f1f9f24c8bcc9",
        "minteable": true,
        "mystery_box_data": {
            "_id": "64b9af892c5595e63d87e5aa",
            "name": "Silver Quantum Gift - Mount 2",
            "bag": 14,
            "icon": "",
            "type": "mount",
            "family": "",
            "rarity": 2,
            "__v": 0,
            "burneable": true,
            "minteable": true
        },
        "name": "White Wolf",
        "rarity": 2,
        "type": "Mount"
    },
    {
        "_id": "64b9afa82c5595e63d87e5e0",
        "__v": 0,
        "bag": 27,
        "burneable": false,
        "family": "Mount",
        "icon": "67a23ba788ed77a5304d4019",
        "minteable": true,
        "mystery_box_data": {
            "_id": "64b9afa82c5595e63d87e5e0",
            "name": "Gold Quantum Gift - Mount 1",
            "bag": 14,
            "icon": "",
            "type": "mount",
            "family": "",
            "rarity": 3,
            "__v": 0,
            "burneable": true,
            "minteable": true
        },
        "name": "Mini-Cockatrice",
        "rarity": 3,
        "type": "Mount"
    },
    {
        "_id": "64b9afb62c5595e63d87e5fd",
        "__v": 0,
        "bag": 27,
        "burneable": false,
        "family": "Mount",
        "icon": "67a23b4188ed77a5304d3f1f",
        "minteable": true,
        "mystery_box_data": {
            "_id": "64b9afb62c5595e63d87e5fd",
            "name": "Gold Quantum Gift - Mount 2",
            "bag": 14,
            "icon": "",
            "type": "mount",
            "family": "",
            "rarity": 3,
            "__v": 0,
            "burneable": true,
            "minteable": true
        },
        "name": "Alessar's Chair",
        "rarity": 3,
        "type": "Mount"
    },
    {
        "_id": "64b9b2652c5595e63d87e62d",
        "__v": 0,
        "bag": 14,
        "burneable": true,
        "family": "",
        "icon": "",
        "minteable": true,
        "name": "Bronze Quantum Gift - Blueprint 1",
        "rarity": 1,
        "type": "architectural"
    },
    {
        "_id": "64b9b27b2c5595e63d87e670",
        "__v": 0,
        "bag": 14,
        "burneable": true,
        "family": "",
        "icon": "",
        "minteable": true,
        "name": "Bronze Quantum Gift - Blueprint 2",
        "rarity": 1,
        "type": "architectural"
    },
    {
        "_id": "64b9b2872c5595e63d87e68b",
        "__v": 0,
        "bag": 14,
        "burneable": true,
        "family": "",
        "icon": "",
        "minteable": true,
        "name": "Bronze Quantum Gift - Blueprint 3",
        "rarity": 1,
        "type": "architectural"
    },
    {
        "_id": "64b9b29d2c5595e63d87e6a6",
        "__v": 0,
        "bag": 14,
        "burneable": true,
        "family": "",
        "icon": "",
        "minteable": true,
        "name": "Bronze Quantum Gift - Blueprint 4",
        "rarity": 1,
        "type": "architectural"
    },
    {
        "_id": "64b9b2ad2c5595e63d87e6c1",
        "__v": 0,
        "bag": 14,
        "burneable": true,
        "family": "",
        "icon": "",
        "minteable": true,
        "name": "Bronze Quantum Gift - Blueprint 5",
        "rarity": 1,
        "type": "architectural"
    },
    {
        "_id": "64b9b2ca2c5595e63d87e6f7",
        "__v": 0,
        "bag": 14,
        "burneable": true,
        "family": "",
        "icon": "",
        "minteable": true,
        "name": "Silver Quantum Gift - Blueprint 2",
        "rarity": 2,
        "type": "architectural"
    },
    {
        "_id": "64b9b2bb2c5595e63d87e6dc",
        "__v": 0,
        "bag": 14,
        "burneable": true,
        "family": "",
        "icon": "",
        "minteable": true,
        "name": "Silver Quantum Gift - Blueprint 1",
        "rarity": 2,
        "type": "architectural"
    },
    {
        "_id": "64b9b2d82c5595e63d87e712",
        "__v": 0,
        "bag": 14,
        "burneable": true,
        "family": "",
        "icon": "",
        "minteable": true,
        "name": "Silver Quantum Gift - Blueprint 3",
        "rarity": 2,
        "type": "architectural"
    },
    {
        "_id": "64b9b2fe2c5595e63d87e748",
        "__v": 0,
        "bag": 14,
        "burneable": true,
        "family": "",
        "icon": "",
        "minteable": true,
        "name": "Gold Quantum Gift - Blueprint 2",
        "rarity": 3,
        "type": "architectural"
    },
    {
        "_id": "64b9b31c2c5595e63d87e763",
        "__v": 0,
        "bag": 28,
        "burneable": true,
        "family": "",
        "hidden": true,
        "icon": "679a96ff88ed77a53036c8bb",
        "minteable": true,
        "mystery_box_data": {
            "_id": "64b9b31c2c5595e63d87e763",
            "name": "Bronze Quantum Gift - Item Style 1",
            "bag": 14,
            "icon": "",
            "type": "item",
            "family": "",
            "rarity": 1,
            "__v": 0,
            "burneable": true,
            "minteable": true
        },
        "name": "Kitsune Headgear",
        "rarity": 1,
        "type": "Headgear"
    },
    {
        "_id": "64b9b32b2c5595e63d87e77f",
        "__v": 0,
        "bag": 28,
        "burneable": true,
        "family": "",
        "hidden": true,
        "icon": "679a96c488ed77a53036c892",
        "minteable": true,
        "mystery_box_data": {
            "_id": "64b9b32b2c5595e63d87e77f",
            "name": "Bronze Quantum Gift - Item Style 2",
            "bag": 14,
            "icon": "",
            "type": "item",
            "family": "",
            "rarity": 1,
            "__v": 0,
            "burneable": true,
            "minteable": true
        },
        "name": "Kitsune Suit",
        "rarity": 1,
        "type": "Suits"
    },
    {
        "_id": "64b9b2ec2c5595e63d87e72d",
        "__v": 0,
        "bag": 14,
        "burneable": true,
        "family": "",
        "icon": "",
        "minteable": true,
        "name": "Gold Quantum Gift - Blueprint 1",
        "rarity": 3,
        "type": "architectural"
    },
    {
        "_id": "64b9b33e2c5595e63d87e7c3",
        "__v": 0,
        "bag": 28,
        "burneable": true,
        "family": "",
        "hidden": true,
        "icon": "679a97bc88ed77a53036c8e4",
        "minteable": true,
        "mystery_box_data": {
            "_id": "64b9b33e2c5595e63d87e7c3",
            "name": "Bronze Quantum Gift - Item Style 3",
            "bag": 14,
            "icon": "",
            "type": "item",
            "family": "",
            "rarity": 1,
            "__v": 0,
            "burneable": true,
            "minteable": true
        },
        "name": "Kitsune Relic",
        "rarity": 1,
        "type": "Weapon"
    },
    {
        "_id": "64b9b34e2c5595e63d87e7de",
        "__v": 0,
        "bag": 28,
        "burneable": true,
        "family": "",
        "hidden": true,
        "icon": "679d080d88ed77a53043bc77",
        "minteable": true,
        "mystery_box_data": {
            "_id": "64b9b34e2c5595e63d87e7de",
            "name": "Bronze Quantum Gift - Item Style 4",
            "bag": 14,
            "icon": "",
            "type": "item",
            "family": "",
            "rarity": 1,
            "__v": 0,
            "burneable": true,
            "minteable": true
        },
        "name": "Alberto's Coffe Cup",
        "rarity": 1,
        "type": "Weapon"
    },
    {
        "_id": "64b9b3762c5595e63d87e814",
        "__v": 0,
        "bag": 28,
        "burneable": true,
        "family": "",
        "hidden": true,
        "icon": "679d063188ed77a530435d16",
        "minteable": true,
        "mystery_box_data": {
            "_id": "64b9b3762c5595e63d87e814",
            "name": "Silver Quantum Gift - Item Style 1",
            "bag": 14,
            "icon": "",
            "type": "item",
            "family": "",
            "rarity": 2,
            "__v": 0,
            "burneable": true,
            "minteable": true
        },
        "name": "Game Buddy Headgear",
        "rarity": 2,
        "type": "Headgear"
    },
    {
        "_id": "64b9b3602c5595e63d87e7fa",
        "__v": 0,
        "bag": 28,
        "burneable": true,
        "family": "",
        "hidden": true,
        "icon": "679d060b88ed77a5304358da",
        "minteable": true,
        "mystery_box_data": {
            "_id": "64b9b3602c5595e63d87e7fa",
            "name": "Bronze Quantum Gift - Item Style 5",
            "bag": 14,
            "icon": "",
            "type": "item",
            "family": "",
            "rarity": 1,
            "__v": 0,
            "burneable": true,
            "minteable": true
        },
        "name": "Memory Stone",
        "rarity": 1,
        "type": "Weapon"
    },
    {
        "_id": "64b9b3862c5595e63d87e82f",
        "__v": 0,
        "bag": 28,
        "burneable": true,
        "family": "",
        "hidden": true,
        "icon": "679d061488ed77a5304358f2",
        "minteable": true,
        "mystery_box_data": {
            "_id": "64b9b3862c5595e63d87e82f",
            "name": "Silver Quantum Gift - Item Style 2",
            "bag": 14,
            "icon": "",
            "type": "item",
            "family": "",
            "rarity": 2,
            "__v": 0,
            "burneable": true,
            "minteable": true
        },
        "name": "Game Buddy Suit",
        "rarity": 2,
        "type": "Suits"
    },
    {
        "_id": "64b9b3932c5595e63d87e84a",
        "__v": 0,
        "bag": 28,
        "burneable": true,
        "family": "",
        "hidden": true,
        "icon": "679d064a88ed77a530435fcb",
        "minteable": true,
        "mystery_box_data": {
            "_id": "64b9b3932c5595e63d87e84a",
            "name": "Silver Quantum Gift - Item Style 3",
            "bag": 14,
            "icon": "",
            "type": "item",
            "family": "",
            "rarity": 2,
            "__v": 0,
            "burneable": true,
            "minteable": true
        },
        "name": "Game Buddy Relic",
        "rarity": 2,
        "type": "Weapon"
    },
    {
        "_id": "64b9b3b42c5595e63d87e881",
        "__v": 0,
        "bag": 28,
        "burneable": true,
        "family": "",
        "hidden": true,
        "icon": "679a964b88ed77a53036c828",
        "minteable": true,
        "mystery_box_data": {
            "_id": "64b9b3b42c5595e63d87e881",
            "name": "Gold Quantum Gift - Item Style 2",
            "bag": 14,
            "icon": "",
            "type": "item",
            "family": "",
            "rarity": 3,
            "__v": 0,
            "burneable": true,
            "minteable": true
        },
        "name": "Rainbow Robe",
        "rarity": 3,
        "type": "Suits"
    },
    {
        "_id": "64b9b3a22c5595e63d87e865",
        "__v": 0,
        "bag": 28,
        "burneable": true,
        "family": "",
        "hidden": true,
        "icon": "679a965188ed77a53036c840",
        "minteable": true,
        "mystery_box_data": {
            "_id": "64b9b3a22c5595e63d87e865",
            "name": "Gold Quantum Gift - Item Style 1",
            "bag": 14,
            "icon": "",
            "type": "item",
            "family": "",
            "rarity": 3,
            "__v": 0,
            "burneable": true,
            "minteable": true
        },
        "name": "Rainbow Hat",
        "rarity": 3,
        "type": "Headgear"
    },
    {
        "_id": "64b9b3cf2c5595e63d87e8a1",
        "__v": 0,
        "bag": 13,
        "burneable": false,
        "family": "",
        "icon": "",
        "minteable": true,
        "name": "Seal of Tenure - Homestead",
        "rarity": 3,
        "type": "plot"
    },
    {
        "_id": "64b9b3dd2c5595e63d87e8bc",
        "__v": 0,
        "bag": 13,
        "burneable": false,
        "family": "",
        "icon": "",
        "minteable": true,
        "name": "Seal of Tenure - Settlement",
        "rarity": 3,
        "type": "plot"
    },
    {
        "_id": "64b9b4192c5595e63d87e902",
        "__v": 0,
        "bag": 13,
        "burneable": false,
        "family": "",
        "icon": "",
        "minteable": true,
        "name": "Seal of Tenure - Village",
        "rarity": 3,
        "type": "plot"
    },
    {
        "_id": "64b9b4292c5595e63d87e91c",
        "__v": 0,
        "bag": 13,
        "burneable": false,
        "family": "",
        "icon": "",
        "minteable": true,
        "name": "Seal of Tenure - Town",
        "rarity": 3,
        "type": "plot"
    },
    {
        "_id": "64c80988eca5aa57cae33df4",
        "__v": 0,
        "bag": 23,
        "color": 0,
        "name": "Watcher's Ring of Influence",
        "rarity": 2,
        "type": "ring"
    },
    {
        "_id": "64c80997eca5aa57cae33df5",
        "__v": 0,
        "bag": 23,
        "color": 1,
        "name": "Watcher's Ring of Knowledge",
        "rarity": 2,
        "type": "ring"
    },
    {
        "_id": "64c809b1eca5aa57cae33df6",
        "__v": 0,
        "bag": 23,
        "color": 2,
        "name": "Watcher's Ring of Contentment",
        "rarity": 2,
        "type": "ring"
    },
    {
        "_id": "64c809beeca5aa57cae33df8",
        "__v": 0,
        "bag": 23,
        "color": 4,
        "name": "Watcher's Ring of Resolve",
        "rarity": 2,
        "type": "ring"
    },
    {
        "_id": "64c809b8eca5aa57cae33df7",
        "__v": 0,
        "bag": 23,
        "color": 3,
        "name": "Watcher's Ring of Nurture",
        "rarity": 2,
        "type": "ring"
    },
    {
        "_id": "64c809c3eca5aa57cae33df9",
        "__v": 0,
        "bag": 23,
        "color": 5,
        "name": "Watcher's Ring of Contemplation",
        "rarity": 2,
        "type": "ring"
    },
    {
        "_id": "64df91b6e8ec8d469b25af2b",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "63644900d22c16e85b821712",
        "minteable": true,
        "name": "Pale Light",
        "rarity": 0,
        "type": "Weapon"
    },
    {
        "_id": "64c809cceca5aa57cae33dfa",
        "__v": 0,
        "bag": 23,
        "color": 6,
        "name": "Watcher's Ring of Transience",
        "rarity": 2,
        "type": "ring"
    },
    {
        "_id": "64c809d6eca5aa57cae33dfb",
        "__v": 0,
        "bag": 23,
        "color": 7,
        "name": "Watcher's Ring of Unity",
        "rarity": 3,
        "type": "ring"
    },
    {
        "_id": "64de8e5e734a13168b9171fb",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "63644ab7d22c16e85b8217ac",
        "minteable": true,
        "name": "Halting Staff",
        "rarity": 0,
        "type": "Weapon"
    },
    {
        "_id": "64dfac4de8ec8d469b25aff9",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "6364501fd22c16e85b8219e8",
        "minteable": true,
        "name": "Enchanted Key",
        "rarity": 0,
        "type": "Weapon"
    },
    {
        "_id": "64dfae0be8ec8d469b25b014",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "63644aeed22c16e85b8217cd",
        "minteable": true,
        "name": "Fearmonger",
        "rarity": 0,
        "type": "Weapon"
    },
    {
        "_id": "64dfaf49e8ec8d469b25b02f",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "63644d8ad22c16e85b8218b4",
        "minteable": true,
        "name": "Rusted Sickle",
        "rarity": 0,
        "type": "Weapon"
    },
    {
        "_id": "64dfb0bfe8ec8d469b25b08f",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "63644f94d22c16e85b821990",
        "minteable": true,
        "name": "Nimbus 1337",
        "rarity": 0,
        "type": "Weapon"
    },
    {
        "_id": "64dfb54ce8ec8d469b25b455",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "63644bcfd22c16e85b82183b",
        "minteable": true,
        "name": "Magic Lamp",
        "rarity": 1,
        "type": "Weapon"
    },
    {
        "_id": "64dfbe77e8ec8d469b25b726",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "63644a65d22c16e85b821780",
        "minteable": true,
        "name": "Jeweled Staff",
        "rarity": 0,
        "type": "Weapon"
    },
    {
        "_id": "64dfc9d9e8ec8d469b25b8ea",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "63644c0ad22c16e85b821867",
        "minteable": true,
        "name": "Rifle & Bayonet",
        "rarity": 1,
        "type": "Weapon"
    },
    {
        "_id": "64dfc15ee8ec8d469b25b831",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "63644bddd22c16e85b821846",
        "minteable": true,
        "name": "Full Pitcher",
        "rarity": 0,
        "type": "Weapon"
    },
    {
        "_id": "64dfd20ae8ec8d469b25b982",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "63644a34d22c16e85b82176a",
        "minteable": true,
        "name": "Raven Staff",
        "rarity": 1,
        "type": "Weapon"
    },
    {
        "_id": "64dfcdcee8ec8d469b25b905",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "63644e65d22c16e85b8218e0",
        "minteable": true,
        "name": "Sconce Blade",
        "rarity": 1,
        "type": "Weapon"
    },
    {
        "_id": "64dfd2a6e8ec8d469b25b99d",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "63644b03d22c16e85b8217d8",
        "minteable": true,
        "name": "Soulblade",
        "rarity": 1,
        "type": "Weapon"
    },
    {
        "_id": "64dfd323e8ec8d469b25b9b8",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "63644f76d22c16e85b82197a",
        "minteable": true,
        "name": "Frozen Flame",
        "rarity": 1,
        "type": "Weapon"
    },
    {
        "_id": "64dfd466e8ec8d469b25b9ef",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "636c0df5d22c16e85b821f69",
        "minteable": true,
        "name": "Plated Armor",
        "rarity": 0,
        "type": "Suits"
    },
    {
        "_id": "64dfd4bae8ec8d469b25ba26",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "636c0ef5d22c16e85b821fd9",
        "minteable": true,
        "name": "Overalls",
        "rarity": 0,
        "type": "Suits"
    },
    {
        "_id": "64dfd8bee8ec8d469b25bae8",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "636c126fd22c16e85b8220ad",
        "minteable": true,
        "name": "Brawler's Vest",
        "rarity": 0,
        "type": "Suits"
    },
    {
        "_id": "64dfd706e8ec8d469b25ba7f",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "636c0f99d22c16e85b82201b",
        "minteable": true,
        "name": "Kaiju Monk Robes",
        "rarity": 0,
        "type": "Suits"
    },
    {
        "_id": "64dfd9cde8ec8d469b25bb03",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "636c0ecfd22c16e85b821fc3",
        "minteable": true,
        "name": "Bath Robe",
        "rarity": 0,
        "type": "Suits"
    },
    {
        "_id": "64dfd7e2e8ec8d469b25ba9f",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "636c1183d22c16e85b822096",
        "minteable": true,
        "name": "Formal Kathin",
        "rarity": 0,
        "type": "Suits"
    },
    {
        "_id": "64dfdaf4e8ec8d469b25bb39",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "636c0ebed22c16e85b821fb8",
        "minteable": true,
        "name": "Sweatband",
        "rarity": 0,
        "type": "Headgear"
    },
    {
        "_id": "64dfdaa7e8ec8d469b25bb1e",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "636c0e2ed22c16e85b821f81",
        "minteable": true,
        "name": "Plated Helm",
        "rarity": 0,
        "type": "Headgear"
    },
    {
        "_id": "64dfdb71e8ec8d469b25bb56",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "636c0ee5d22c16e85b821fce",
        "minteable": true,
        "name": "Plumber's Cap",
        "rarity": 0,
        "type": "Headgear"
    },
    {
        "_id": "64dfdbebe8ec8d469b25bb75",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "636c0f81d22c16e85b822010",
        "minteable": true,
        "name": "Kaiju Monk Hat",
        "rarity": 0,
        "type": "Headgear"
    },
    {
        "_id": "64e63588e8ec8d469b25ecfc",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "636c134fd22c16e85b822105",
        "minteable": true,
        "name": "Luchador Leotard",
        "rarity": 0,
        "type": "Suits"
    },
    {
        "_id": "64e6723ce8ec8d469b25f08a",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "636c0f4bd22c16e85b822005",
        "minteable": true,
        "name": "Kirama Guard Brigandine",
        "rarity": 0,
        "type": "Suits"
    },
    {
        "_id": "64e6821fe8ec8d469b25f199",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "64e675cce8ec8d469b25f0d9",
        "minteable": true,
        "name": "Flowing Robes",
        "rarity": 1,
        "type": "Suits"
    },
    {
        "_id": "64e7a133e8ec8d469b25f615",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "636c106dd22c16e85b82208b",
        "minteable": true,
        "name": "Ceremonial Cap",
        "rarity": 0,
        "type": "Headgear"
    },
    {
        "_id": "64e682ade8ec8d469b25f1b4",
        "__v": 0,
        "bag": 3,
        "burneable": false,
        "family": "",
        "hidden": false,
        "icon": "636c12e5d22c16e85b8220d9",
        "minteable": false,
        "name": "Stellar Robes",
        "rarity": 1,
        "type": "Suits"
    },
    {
        "_id": "64e69a1fe8ec8d469b25f243",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "636c13bad22c16e85b822131",
        "minteable": true,
        "name": "Kirama Style Vest",
        "rarity": 1,
        "type": "Suits"
    },
    {
        "_id": "64e7a1a0e8ec8d469b25f630",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "636c121dd22c16e85b8220a2",
        "minteable": true,
        "name": "Hip Shades",
        "rarity": 0,
        "type": "Headgear"
    },
    {
        "_id": "64e7a245e8ec8d469b25f679",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "636c133ad22c16e85b8220fa",
        "minteable": true,
        "name": "Luchador Headband",
        "rarity": 0,
        "type": "Headgear"
    },
    {
        "_id": "64e7b88ce8ec8d469b25f79f",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "636c0f37d22c16e85b821ffa",
        "minteable": true,
        "name": "Kirama Guard Helm",
        "rarity": 0,
        "type": "Headgear"
    },
    {
        "_id": "64e7b990e8ec8d469b25f7ba",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "64e675e7e8ec8d469b25f0e6",
        "minteable": true,
        "name": "Serpent Circlet",
        "rarity": 1,
        "type": "Headgear"
    },
    {
        "_id": "64e7ba57e8ec8d469b25f7e6",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "636c12d6d22c16e85b8220ce",
        "minteable": true,
        "name": "Arcanist Cap",
        "rarity": 0,
        "type": "Headgear"
    },
    {
        "_id": "64e7bb01e8ec8d469b25f82c",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "636c13a5d22c16e85b822126",
        "minteable": true,
        "name": "Kirama Style Mask",
        "rarity": 1,
        "type": "Headgear"
    },
    {
        "_id": "64e7bf35e8ec8d469b25f8ca",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "636c1012d22c16e85b82205f",
        "minteable": true,
        "name": "Galactic Band",
        "rarity": 1,
        "type": "Headgear"
    },
    {
        "_id": "64e7be7ae8ec8d469b25f8af",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "636c0f0dd22c16e85b821fe4",
        "minteable": true,
        "name": "Kirama Demon Helm",
        "rarity": 1,
        "type": "Headgear"
    },
    {
        "_id": "64e7bcd1e8ec8d469b25f864",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "636c0f1cd22c16e85b821fef",
        "minteable": true,
        "name": "Kirama Demon Armor",
        "rarity": 1,
        "type": "Suits"
    },
    {
        "_id": "64e7bd88e8ec8d469b25f894",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "636c1025d22c16e85b82206a",
        "minteable": true,
        "name": "Galactic Armor",
        "rarity": 1,
        "type": "Suits"
    },
    {
        "_id": "64e7d15ce8ec8d469b25f997",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "636c0d16d22c16e85b821f3d",
        "minteable": true,
        "name": "Royal Helm",
        "rarity": 1,
        "type": "Headgear"
    },
    {
        "_id": "64e7cdf0e8ec8d469b25f97c",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "636c0d2fd22c16e85b821f48",
        "minteable": true,
        "name": "Royal Plate",
        "rarity": 1,
        "type": "Suits"
    },
    {
        "_id": "65009b73d110673cefedc933",
        "__v": 0,
        "bag": 2,
        "family": "",
        "icon": "65e611f831018cea1d5b1f45",
        "name": "Avian Horn",
        "rarity": 3,
        "type": "soul"
    },
    {
        "_id": "65048444d110673cefee20c7",
        "__v": 0,
        "bag": 2,
        "family": "",
        "icon": "65e6120631018cea1d5b1f53",
        "name": "Jeweled Eye",
        "rarity": 3,
        "type": "soul"
    },
    {
        "_id": "650485edd110673cefee21dc",
        "__v": 0,
        "bag": 2,
        "family": "",
        "icon": "65e6121631018cea1d5b1f6d",
        "name": "Preserved Petal",
        "rarity": 3,
        "type": "soul"
    },
    {
        "_id": "6504862dd110673cefee21f2",
        "__v": 0,
        "bag": 2,
        "family": "",
        "icon": "65e6122b31018cea1d5b1f7a",
        "name": "Vial of Goo",
        "rarity": 3,
        "type": "soul"
    },
    {
        "_id": "650486c3d110673cefee2208",
        "__v": 0,
        "bag": 2,
        "family": "",
        "icon": "65e6123d31018cea1d5b1f87",
        "name": "Bladed Feather",
        "rarity": 3,
        "type": "soul"
    },
    {
        "_id": "650486f3d110673cefee221e",
        "__v": 0,
        "bag": 2,
        "family": "",
        "icon": "65e6124d31018cea1d5b1f94",
        "name": "Spectral Powder",
        "rarity": 3,
        "type": "soul"
    },
    {
        "_id": "6516e547cb028918664e5f5d",
        "__v": 1,
        "bag": 12,
        "family": "",
        "icon": "63f7a79655b8cb87f3417b24",
        "journal_name": "Secret Rumor",
        "name": "Over 9000",
        "rarity": 0,
        "region": [
            {
                "value": "64b01970d3d5ac314bfbbf17",
                "label": "HedgeWizardEncampment"
            }
        ],
        "state": 0,
        "type": "rumor"
    },
    {
        "_id": "65a69b61f3d3584418db729c",
        "__v": 0,
        "bag": 3,
        "burneable": false,
        "family": "",
        "hidden": false,
        "icon": "671e560ac1f51821d5198006",
        "minteable": true,
        "mystery_box_data": {
            "_id": "65a69b61f3d3584418db729c",
            "name": "Bronze Builder's Crate - Furniture 1",
            "bag": 14,
            "icon": "",
            "type": "furniture",
            "family": "",
            "rarity": 1,
            "__v": 0,
            "burneable": true,
            "minteable": true
        },
        "name": "Druidic Chair",
        "rarity": 1,
        "sub_type": "66a407b48678f3f706330770",
        "type": "Furniture"
    },
    {
        "_id": "65a69b75f3d3584418db72b7",
        "__v": 0,
        "bag": 3,
        "burneable": false,
        "family": "",
        "hidden": false,
        "icon": "671e56acc1f51821d5198081",
        "minteable": true,
        "mystery_box_data": {
            "_id": "65a69b75f3d3584418db72b7",
            "name": "Bronze Builder's Crate - Furniture 2",
            "bag": 14,
            "icon": "",
            "type": "furniture",
            "family": "",
            "rarity": 1,
            "__v": 0,
            "burneable": true,
            "minteable": true
        },
        "name": "Druidic Table",
        "rarity": 1,
        "sub_type": "66a4077e8678f3f706330620",
        "type": "Furniture"
    },
    {
        "_id": "65a69d72f3d3584418db7310",
        "__v": 0,
        "bag": 3,
        "burneable": false,
        "family": "",
        "hidden": false,
        "icon": "671e5696c1f51821d5198058",
        "minteable": true,
        "mystery_box_data": {
            "_id": "65a69d72f3d3584418db7310",
            "name": "Bronze Builder's Crate - Furniture 3",
            "bag": 14,
            "icon": "",
            "type": "furniture",
            "family": "",
            "rarity": 1,
            "__v": 0,
            "burneable": true,
            "minteable": true
        },
        "name": "Druidic Small Table",
        "rarity": 1,
        "sub_type": "66a4077e8678f3f706330620",
        "type": "Furniture"
    },
    {
        "_id": "65a69d8ef3d3584418db734b",
        "__v": 0,
        "bag": 3,
        "burneable": false,
        "family": "",
        "hidden": false,
        "icon": "671e56ccc1f51821d51980ba",
        "minteable": true,
        "mystery_box_data": {
            "_id": "65a69d8ef3d3584418db734b",
            "name": "Bronze Builder's Crate - Furniture 4",
            "bag": 14,
            "icon": "",
            "type": "furniture",
            "family": "",
            "rarity": 1,
            "__v": 0,
            "burneable": true,
            "minteable": true
        },
        "name": "Druidic Wardrobe",
        "rarity": 1,
        "sub_type": "66a407b48678f3f706330770",
        "type": "Furniture"
    },
    {
        "_id": "65a69d9ef3d3584418db7362",
        "__v": 0,
        "bag": 3,
        "burneable": false,
        "family": "",
        "hidden": false,
        "icon": "671e5674c1f51821d519802f",
        "minteable": true,
        "mystery_box_data": {
            "_id": "65a69d9ef3d3584418db7362",
            "name": "Bronze Builder's Crate - Furniture 5",
            "bag": 14,
            "icon": "",
            "type": "furniture",
            "family": "",
            "rarity": 1,
            "__v": 0,
            "burneable": true,
            "minteable": true
        },
        "name": "Druidic Shelves",
        "rarity": 1,
        "sub_type": "66a407b48678f3f706330770",
        "type": "Furniture"
    },
    {
        "_id": "65a6a535f3d3584418db7519",
        "__v": 0,
        "bag": 3,
        "burneable": false,
        "family": "",
        "hidden": false,
        "icon": "66ba63a6707a46ffb5bd46bf",
        "minteable": true,
        "mystery_box_data": {
            "_id": "65a6a535f3d3584418db7519",
            "name": "Silver Builder's Crate - Furniture 1",
            "bag": 14,
            "icon": "",
            "type": "furniture",
            "family": "",
            "rarity": 2,
            "__v": 0,
            "burneable": true,
            "minteable": true
        },
        "name": "Crystalcore Chair",
        "rarity": 2,
        "sub_type": "66a407b48678f3f706330770",
        "type": "Furniture"
    },
    {
        "_id": "65a6a563f3d3584418db753a",
        "__v": 0,
        "bag": 3,
        "burneable": false,
        "family": "",
        "hidden": false,
        "icon": "67381d0ea71472a5d75f75a1",
        "minteable": true,
        "mystery_box_data": {
            "_id": "65a6a563f3d3584418db753a",
            "name": "Silver Builder's Crate - Furniture 2",
            "bag": 14,
            "icon": "",
            "type": "furniture",
            "family": "",
            "rarity": 2,
            "__v": 0,
            "burneable": true,
            "minteable": true
        },
        "name": "Crystalcore Table",
        "rarity": 2,
        "sub_type": "66a407b48678f3f706330770",
        "type": "Furniture"
    },
    {
        "_id": "65a6a573f3d3584418db7555",
        "__v": 0,
        "bag": 3,
        "burneable": false,
        "family": "",
        "hidden": false,
        "icon": "671e55a3c1f51821d5197f94",
        "minteable": true,
        "mystery_box_data": {
            "_id": "65a6a573f3d3584418db7555",
            "name": "Silver Builder's Crate - Furniture 3",
            "bag": 14,
            "icon": "",
            "type": "furniture",
            "family": "",
            "rarity": 2,
            "__v": 0,
            "burneable": true,
            "minteable": true
        },
        "name": "Crystalcore Small Table",
        "rarity": 2,
        "sub_type": "66a407b48678f3f706330770",
        "type": "Furniture"
    },
    {
        "_id": "65a6a5faf3d3584418db75be",
        "__v": 0,
        "bag": 3,
        "burneable": false,
        "family": "",
        "hidden": false,
        "icon": "669fe8933175d6ddb6cd962d",
        "minteable": true,
        "mystery_box_data": {
            "_id": "65a6a5faf3d3584418db75be",
            "name": "Gold Builder's Crate - Furniture 1",
            "bag": 14,
            "icon": "",
            "type": "furniture",
            "family": "",
            "rarity": 3,
            "__v": 0,
            "burneable": true,
            "minteable": true
        },
        "name": "Crystalcore Wardrobe",
        "rarity": 3,
        "sub_type": "66a407b48678f3f706330770",
        "type": "Furniture"
    },
    {
        "_id": "65a6a60ef3d3584418db75d7",
        "__v": 0,
        "bag": 3,
        "burneable": false,
        "family": "",
        "hidden": false,
        "icon": "67381d40a71472a5d75f75ca",
        "minteable": true,
        "mystery_box_data": {
            "_id": "65a6a60ef3d3584418db75d7",
            "name": "Gold Builder's Crate - Furniture 2",
            "bag": 14,
            "icon": "",
            "type": "furniture",
            "family": "",
            "rarity": 3,
            "__v": 0,
            "burneable": true,
            "minteable": true
        },
        "name": "Crystalcore Shelves",
        "rarity": 3,
        "sub_type": "66a407b48678f3f706330770",
        "type": "Furniture"
    },
    {
        "_id": "65d3af8b6b9ca8fe6cd5bedf",
        "__v": 0,
        "bag": 3,
        "burneable": false,
        "family": "",
        "hidden": false,
        "icon": "66ba5e7b707a46ffb5bd4307",
        "minteable": true,
        "mystery_box_data": {
            "_id": "65d3af8b6b9ca8fe6cd5bedf",
            "name": "Bronze Builder's Crate - Magical 1",
            "bag": 14,
            "icon": "",
            "type": "magical",
            "family": "",
            "rarity": 1,
            "__v": 0,
            "burneable": true,
            "minteable": true
        },
        "name": "Floating Chair",
        "rarity": 1,
        "sub_type": "66a407b48678f3f706330770",
        "type": "Furniture"
    },
    {
        "_id": "65d3af9b6b9ca8fe6cd5bef6",
        "__v": 0,
        "bag": 3,
        "burneable": false,
        "family": "",
        "hidden": false,
        "icon": "67381d86a71472a5d75f7674",
        "minteable": true,
        "mystery_box_data": {
            "_id": "65d3af9b6b9ca8fe6cd5bef6",
            "name": "Bronze Builder's Crate - Magical 2",
            "bag": 14,
            "icon": "",
            "type": "magical",
            "family": "",
            "rarity": 1,
            "__v": 0,
            "burneable": true,
            "minteable": true
        },
        "name": "Floating Small Table",
        "rarity": 1,
        "sub_type": "66a407b48678f3f706330770",
        "type": "Furniture"
    },
    {
        "_id": "65d3afae6b9ca8fe6cd5bf0d",
        "__v": 0,
        "bag": 3,
        "burneable": false,
        "family": "",
        "hidden": false,
        "icon": "67381d9aa71472a5d75f769d",
        "minteable": true,
        "mystery_box_data": {
            "_id": "65d3afae6b9ca8fe6cd5bf0d",
            "name": "Bronze Builder's Crate - Magical 3",
            "bag": 14,
            "icon": "",
            "type": "magical",
            "family": "",
            "rarity": 1,
            "__v": 0,
            "burneable": true,
            "minteable": true
        },
        "name": "Floating Wizard Figurine",
        "rarity": 1,
        "sub_type": "66a407658678f3f706330615",
        "type": "Art"
    },
    {
        "_id": "65d3afc76b9ca8fe6cd5bf48",
        "__v": 0,
        "bag": 3,
        "burneable": false,
        "family": "",
        "hidden": false,
        "icon": "67381dd4a71472a5d75f76d6",
        "minteable": true,
        "mystery_box_data": {
            "_id": "65d3afc76b9ca8fe6cd5bf48",
            "name": "Bronze Builder's Crate - Magical 4",
            "bag": 14,
            "icon": "",
            "type": "magical",
            "family": "",
            "rarity": 1,
            "__v": 0,
            "burneable": true,
            "minteable": true
        },
        "name": "Holographic Sunset",
        "rarity": 1,
        "sub_type": "66a407b48678f3f706330770",
        "type": "Art"
    },
    {
        "_id": "65d3afd76b9ca8fe6cd5bf5f",
        "__v": 0,
        "bag": 3,
        "burneable": false,
        "family": "",
        "hidden": false,
        "icon": "672f9f14c1f51821d529b8e8",
        "minteable": true,
        "mystery_box_data": {
            "_id": "65d3afd76b9ca8fe6cd5bf5f",
            "name": "Bronze Builder's Crate - Magical 5",
            "bag": 14,
            "icon": "",
            "type": "magical",
            "family": "",
            "rarity": 1,
            "__v": 0,
            "burneable": true,
            "minteable": true
        },
        "name": "Wizard Plushie",
        "rarity": 1,
        "sub_type": "66a407658678f3f706330615",
        "type": "Miscelaneous"
    },
    {
        "_id": "65d3afea6b9ca8fe6cd5bf76",
        "__v": 0,
        "bag": 3,
        "burneable": false,
        "family": "",
        "hidden": false,
        "icon": "66ba63d3707a46ffb5bd46f7",
        "minteable": true,
        "mystery_box_data": {
            "_id": "65d3afea6b9ca8fe6cd5bf76",
            "name": "Silver Builder's Crate - Magical 1",
            "bag": 14,
            "icon": "",
            "type": "magical",
            "family": "",
            "rarity": 2,
            "__v": 0,
            "burneable": true,
            "minteable": true
        },
        "name": "Floating Sofa",
        "rarity": 2,
        "sub_type": "66a407b48678f3f706330770",
        "type": "Furniture"
    },
    {
        "_id": "65d3b0226b9ca8fe6cd5bf93",
        "__v": 0,
        "bag": 3,
        "burneable": false,
        "family": "",
        "hidden": false,
        "icon": "67381d6ba71472a5d75f762b",
        "minteable": true,
        "mystery_box_data": {
            "_id": "65d3b0226b9ca8fe6cd5bf93",
            "name": "Silver Builder's Crate - Magical 2",
            "bag": 14,
            "icon": "",
            "type": "magical",
            "family": "",
            "rarity": 2,
            "__v": 0,
            "burneable": true,
            "minteable": true
        },
        "name": "Floating Table",
        "rarity": 2,
        "sub_type": "66a407b48678f3f706330770",
        "type": "Furniture"
    },
    {
        "_id": "65d3b0416b9ca8fe6cd5bfaa",
        "__v": 0,
        "bag": 3,
        "burneable": false,
        "family": "",
        "hidden": false,
        "icon": "672f9f3dc1f51821d529b938",
        "minteable": true,
        "mystery_box_data": {
            "_id": "65d3b0416b9ca8fe6cd5bfaa",
            "name": "Silver Builder's Crate - Magical 3",
            "bag": 14,
            "icon": "",
            "type": "magical",
            "family": "",
            "rarity": 2,
            "__v": 0,
            "burneable": true,
            "minteable": true
        },
        "name": "Premium Wizard Plushie",
        "rarity": 2,
        "sub_type": "66a407658678f3f706330615",
        "type": "Miscelaneous"
    },
    {
        "_id": "65d3b0536b9ca8fe6cd5bfc1",
        "__v": 0,
        "bag": 3,
        "burneable": false,
        "family": "",
        "hidden": false,
        "icon": "66ba61fb707a46ffb5bd447e",
        "minteable": true,
        "mystery_box_data": {
            "_id": "65d3b0536b9ca8fe6cd5bfc1",
            "name": "Gold Builder's Crate - Magical 1",
            "bag": 14,
            "icon": "",
            "type": "magical",
            "family": "",
            "rarity": 3,
            "__v": 0,
            "burneable": true,
            "minteable": true
        },
        "name": "Holographic Cockatrice",
        "rarity": 3,
        "sub_type": "66a407b48678f3f706330770",
        "type": "Art"
    },
    {
        "_id": "65d3b0686b9ca8fe6cd5bfd8",
        "__v": 0,
        "bag": 3,
        "burneable": false,
        "family": "",
        "hidden": false,
        "icon": "672f9f28c1f51821d529b90f",
        "minteable": true,
        "mystery_box_data": {
            "_id": "65d3b0686b9ca8fe6cd5bfd8",
            "name": "Gold Builder's Crate - Magical 2",
            "bag": 14,
            "icon": "",
            "type": "magical",
            "family": "",
            "rarity": 3,
            "__v": 0,
            "burneable": true,
            "minteable": true
        },
        "name": "Floor Portal",
        "rarity": 3,
        "sub_type": "66a407b48678f3f706330770",
        "type": "Art"
    },
    {
        "_id": "65d3b0d16b9ca8fe6cd5bfef",
        "__v": 0,
        "bag": 3,
        "burneable": false,
        "family": "",
        "hidden": false,
        "icon": "669fe78b3175d6ddb6cd95a2",
        "minteable": true,
        "mystery_box_data": {
            "_id": "65d3b0d16b9ca8fe6cd5bfef",
            "name": "Bronze Builder's Crate - Art 1",
            "bag": 14,
            "icon": "",
            "type": "art",
            "family": "",
            "rarity": 1,
            "__v": 0,
            "burneable": true,
            "minteable": true
        },
        "name": "\"Encampment Sunset\"",
        "rarity": 1,
        "sub_type": "66a407b48678f3f706330770",
        "type": "Art"
    },
    {
        "_id": "65d3b0e26b9ca8fe6cd5c007",
        "__v": 0,
        "bag": 3,
        "burneable": false,
        "family": "",
        "hidden": false,
        "icon": "672f9f7bc1f51821d529b9b3",
        "minteable": true,
        "mystery_box_data": {
            "_id": "65d3b0e26b9ca8fe6cd5c007",
            "name": "Bronze Builder's Crate - Art 2",
            "bag": 14,
            "icon": "",
            "type": "art",
            "family": "",
            "rarity": 1,
            "__v": 0,
            "burneable": true,
            "minteable": true
        },
        "name": "\"Coming Through\"",
        "rarity": 1,
        "sub_type": "66a407b48678f3f706330770",
        "type": "Art"
    },
    {
        "_id": "65d3b0f16b9ca8fe6cd5c01e",
        "__v": 0,
        "bag": 3,
        "burneable": false,
        "family": "",
        "hidden": false,
        "icon": "672f9f99c1f51821d529ba05",
        "minteable": true,
        "mystery_box_data": {
            "_id": "65d3b0f16b9ca8fe6cd5c01e",
            "name": "Bronze Builder's Crate - Art 3",
            "bag": 14,
            "icon": "",
            "type": "art",
            "family": "",
            "rarity": 1,
            "__v": 0,
            "burneable": true,
            "minteable": true
        },
        "name": "\"Roar of the Cockatrice\"",
        "rarity": 1,
        "sub_type": "66a407b48678f3f706330770",
        "type": "Art"
    },
    {
        "_id": "65d3b1026b9ca8fe6cd5c035",
        "__v": 0,
        "bag": 3,
        "burneable": false,
        "family": "",
        "hidden": false,
        "icon": "672f9fb8c1f51821d529ba57",
        "minteable": true,
        "mystery_box_data": {
            "_id": "65d3b1026b9ca8fe6cd5c035",
            "name": "Bronze Builder's Crate - Art 4",
            "bag": 14,
            "icon": "",
            "type": "art",
            "family": "",
            "rarity": 1,
            "__v": 0,
            "burneable": true,
            "minteable": true
        },
        "name": "Small Mage Statue",
        "rarity": 1,
        "sub_type": "66a407b48678f3f706330770",
        "type": "Art"
    },
    {
        "_id": "65d3b1116b9ca8fe6cd5c04c",
        "__v": 0,
        "bag": 3,
        "burneable": false,
        "family": "",
        "hidden": false,
        "icon": "672f9fa8c1f51821d529ba2e",
        "minteable": true,
        "mystery_box_data": {
            "_id": "65d3b1116b9ca8fe6cd5c04c",
            "name": "Bronze Builder's Crate - Art 5",
            "bag": 14,
            "icon": "",
            "type": "art",
            "family": "",
            "rarity": 1,
            "__v": 0,
            "burneable": true,
            "minteable": true
        },
        "name": "Small Frog Statue",
        "rarity": 1,
        "sub_type": "66a407b48678f3f706330770",
        "type": "Art"
    },
    {
        "_id": "65d3b24d6b9ca8fe6cd5c07f",
        "__v": 0,
        "bag": 3,
        "burneable": false,
        "family": "",
        "hidden": false,
        "icon": "669fe8493175d6ddb6cd95fe",
        "minteable": true,
        "mystery_box_data": {
            "_id": "65d3b24d6b9ca8fe6cd5c07f",
            "name": "Silver Builder's Crate - Art 1",
            "bag": 14,
            "icon": "",
            "type": "art",
            "family": "",
            "rarity": 2,
            "__v": 0,
            "burneable": true,
            "minteable": true
        },
        "name": "\"The Four\"",
        "rarity": 2,
        "sub_type": "66a407b48678f3f706330770",
        "type": "Art"
    },
    {
        "_id": "65d3b6936b9ca8fe6cd5c0ac",
        "__v": 0,
        "bag": 3,
        "burneable": false,
        "family": "",
        "hidden": false,
        "icon": "672f9ff5c1f51821d529bae2",
        "minteable": true,
        "mystery_box_data": {
            "_id": "65d3b6936b9ca8fe6cd5c0ac",
            "name": "Silver Builder's Crate - Art 2",
            "bag": 14,
            "icon": "",
            "type": "art",
            "family": "",
            "rarity": 2,
            "__v": 0,
            "burneable": true,
            "minteable": true
        },
        "name": "\"Cuckoo's Land\"",
        "rarity": 2,
        "sub_type": "66a407b48678f3f706330770",
        "type": "Art"
    },
    {
        "_id": "65d3b6f06b9ca8fe6cd5c0c3",
        "__v": 0,
        "bag": 3,
        "burneable": false,
        "family": "",
        "hidden": false,
        "icon": "672f9fd9c1f51821d529baa9",
        "minteable": true,
        "mystery_box_data": {
            "_id": "65d3b6f06b9ca8fe6cd5c0c3",
            "name": "Silver Builder's Crate - Art 3",
            "bag": 14,
            "icon": "",
            "type": "art",
            "family": "",
            "rarity": 2,
            "__v": 0,
            "burneable": true,
            "minteable": true
        },
        "name": "City Stone Replica",
        "rarity": 2,
        "sub_type": "66a407b48678f3f706330770",
        "type": "Art"
    },
    {
        "_id": "65d3b7176b9ca8fe6cd5c0e8",
        "__v": 0,
        "bag": 3,
        "burneable": false,
        "family": "",
        "hidden": false,
        "icon": "669fe8a83175d6ddb6cd964d",
        "minteable": true,
        "mystery_box_data": {
            "_id": "65d3b7176b9ca8fe6cd5c0e8",
            "name": "Gold Builder's Crate - Art 1",
            "bag": 14,
            "icon": "",
            "type": "art",
            "family": "",
            "rarity": 3,
            "__v": 0,
            "burneable": true,
            "minteable": true
        },
        "name": "Cockatrice Statue",
        "rarity": 3,
        "sub_type": "66a407b48678f3f706330770",
        "type": "Art"
    },
    {
        "_id": "65d3b7256b9ca8fe6cd5c0ff",
        "__v": 0,
        "bag": 3,
        "burneable": false,
        "family": "",
        "hidden": false,
        "icon": "672f9fc8c1f51821d529ba80",
        "minteable": true,
        "mystery_box_data": {
            "_id": "65d3b7256b9ca8fe6cd5c0ff",
            "name": "Gold Builder's Crate - Art 2",
            "bag": 14,
            "icon": "",
            "type": "art",
            "family": "",
            "rarity": 3,
            "__v": 0,
            "burneable": true,
            "minteable": true
        },
        "name": "Portal Replica",
        "rarity": 3,
        "sub_type": "66a407658678f3f706330615",
        "type": "Art"
    },
    {
        "_id": "65d7564a0da2729615db0663",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "63616121c2284ba32e1bc35c",
        "minteable": true,
        "name": "Traitor's Reward",
        "rarity": 0,
        "type": "Normal"
    },
    {
        "_id": "65d7569b0da2729615db067a",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "6386651e5c5c376fbbd4c5a4",
        "minteable": true,
        "name": "Ice Spear",
        "rarity": 0,
        "type": "Normal"
    },
    {
        "_id": "65d756d00da2729615db0691",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "638665cb5c5c376fbbd4c5fc",
        "minteable": true,
        "name": "Frag Wall",
        "rarity": 0,
        "type": "Cantrip"
    },
    {
        "_id": "65d75e4b0da2729615db078f",
        "__v": 0,
        "bag": 2,
        "family": "",
        "icon": "63571620ef066c46dfa17396",
        "name": "Pulsing Shard",
        "rarity": 0,
        "type": "shard"
    },
    {
        "_id": "65d75e970da2729615db07a1",
        "__v": 0,
        "bag": 2,
        "family": "",
        "icon": "67a6ae138e2bca692b53c0f9",
        "name": "Pulsing Ember",
        "rarity": 0,
        "type": "ember"
    },
    {
        "_id": "65d75ee60da2729615db07cd",
        "__v": 0,
        "bag": 2,
        "family": "",
        "icon": "67a6acff8e2bca692b53bf48",
        "name": "Pulsing Essence",
        "rarity": 0,
        "type": "soul"
    },
    {
        "_id": "65d8d8870da2729615db3b35",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "65d8e2980da2729615db4420",
        "minteable": true,
        "name": "Storm Crown",
        "rarity": 3,
        "type": "Headgear"
    },
    {
        "_id": "65d8edbb0da2729615db445d",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "65d8e2a70da2729615db442d",
        "minteable": true,
        "name": "Storm Cloak",
        "rarity": 3,
        "type": "Suits"
    },
    {
        "_id": "65d8f0a20da2729615db4498",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "65d8e2b30da2729615db4439",
        "minteable": true,
        "name": "Storm Rod",
        "rarity": 3,
        "type": "Weapon"
    },
    {
        "_id": "65d8f1a80da2729615db4500",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "65d8e2790da2729615db4405",
        "minteable": true,
        "name": "Cardboard Helmet",
        "rarity": 1,
        "type": "Headgear"
    },
    {
        "_id": "65d8f2350da2729615db453b",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "65d8e2670da2729615db43f9",
        "minteable": true,
        "name": "Cardboard Armor",
        "rarity": 1,
        "type": "Suits"
    },
    {
        "_id": "65d8f2950da2729615db4552",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "65d8e2890da2729615db4412",
        "minteable": true,
        "name": "Cardboard Sword",
        "rarity": 1,
        "type": "Weapon"
    },
    {
        "_id": "65dfa78931018cea1d5ac3a6",
        "__v": 0,
        "bag": 2,
        "family": "",
        "icon": "65e8b5ddc4c368907b562bba",
        "name": "Storm in a Bottle",
        "rarity": 3,
        "type": "soul"
    },
    {
        "_id": "65ea40edc4c368907b5686d3",
        "__v": 0,
        "bag": 3,
        "burneable": false,
        "family": "",
        "hidden": false,
        "icon": "669fe7623175d6ddb6cd9590",
        "minteable": true,
        "mystery_box_data": {
            "_id": "65ea40edc4c368907b5686d3",
            "name": "Bronze Builder's Crate - Miscellaneous 1",
            "bag": 14,
            "icon": "",
            "type": "miscellaneous",
            "family": "",
            "rarity": 1,
            "__v": 0,
            "burneable": true,
            "minteable": true
        },
        "name": "Wolf Plushie",
        "rarity": 1,
        "sub_type": "66a407658678f3f706330615",
        "type": "Miscelaneous"
    },
    {
        "_id": "65ea4163c4c368907b5686ea",
        "__v": 0,
        "bag": 3,
        "burneable": false,
        "family": "",
        "hidden": false,
        "icon": "672f9de2c1f51821d529b780",
        "minteable": true,
        "mystery_box_data": {
            "_id": "65ea4163c4c368907b5686ea",
            "name": "Bronze Builder's Crate - Miscellaneous 2",
            "bag": 14,
            "icon": "",
            "type": "miscellaneous",
            "family": "",
            "rarity": 1,
            "__v": 0,
            "burneable": true,
            "minteable": true
        },
        "name": "Bat Plushie",
        "rarity": 1,
        "sub_type": "66a407658678f3f706330615",
        "type": "Miscelaneous"
    },
    {
        "_id": "65ea4194c4c368907b568707",
        "__v": 0,
        "bag": 3,
        "burneable": false,
        "family": "",
        "hidden": false,
        "icon": "672f9e01c1f51821d529b7a9",
        "minteable": true,
        "mystery_box_data": {
            "_id": "65ea4194c4c368907b568707",
            "name": "Bronze Builder's Crate - Miscellaneous 3",
            "bag": 14,
            "icon": "",
            "type": "miscellaneous",
            "family": "",
            "rarity": 1,
            "__v": 0,
            "burneable": true,
            "minteable": true
        },
        "name": "Rat Plushie",
        "rarity": 1,
        "sub_type": "66a407658678f3f706330615",
        "type": "Miscelaneous"
    },
    {
        "_id": "65ea41aec4c368907b56874b",
        "__v": 0,
        "bag": 3,
        "burneable": false,
        "family": "",
        "hidden": false,
        "icon": "672f9e3ac1f51821d529b7e2",
        "minteable": true,
        "mystery_box_data": {
            "_id": "65ea41aec4c368907b56874b",
            "name": "Bronze Builder's Crate - Miscellaneous 4",
            "bag": 14,
            "icon": "",
            "type": "miscellaneous",
            "family": "",
            "rarity": 1,
            "__v": 0,
            "burneable": true,
            "minteable": true
        },
        "name": "Wizard Tankard",
        "rarity": 1,
        "sub_type": "66a407658678f3f706330615",
        "type": "Miscelaneous"
    },
    {
        "_id": "65ea41dec4c368907b5687fa",
        "__v": 0,
        "bag": 3,
        "burneable": false,
        "family": "",
        "hidden": false,
        "icon": "672f9dd1c1f51821d529b747",
        "minteable": true,
        "mystery_box_data": {
            "_id": "65ea41dec4c368907b5687fa",
            "name": "Bronze Builder's Crate - Miscellaneous 5",
            "bag": 14,
            "icon": "",
            "type": "miscellaneous",
            "family": "",
            "rarity": 1,
            "__v": 0,
            "burneable": true,
            "minteable": true
        },
        "name": "Ball",
        "rarity": 1,
        "sub_type": "66a407658678f3f706330615",
        "type": "Miscelaneous"
    },
    {
        "_id": "65ea4247c4c368907b568811",
        "__v": 0,
        "bag": 3,
        "burneable": false,
        "family": "",
        "hidden": false,
        "icon": "669fe7de3175d6ddb6cd95ce",
        "minteable": true,
        "mystery_box_data": {
            "_id": "65ea4247c4c368907b568811",
            "name": "Silver Builder's Crate - Miscellaneous 1",
            "bag": 14,
            "icon": "",
            "type": "miscellaneous",
            "family": "",
            "rarity": 2,
            "__v": 0,
            "burneable": true,
            "minteable": true
        },
        "name": "Dire Wolf Plushie",
        "rarity": 2,
        "sub_type": "66a407658678f3f706330615",
        "type": "Miscelaneous"
    },
    {
        "_id": "65ea426dc4c368907b56883e",
        "__v": 0,
        "bag": 3,
        "burneable": false,
        "family": "",
        "hidden": false,
        "icon": "672f9e5ac1f51821d529b834",
        "minteable": true,
        "mystery_box_data": {
            "_id": "65ea426dc4c368907b56883e",
            "name": "Silver Builder's Crate - Miscellaneous 2",
            "bag": 14,
            "icon": "",
            "type": "miscellaneous",
            "family": "",
            "rarity": 2,
            "__v": 0,
            "burneable": true,
            "minteable": true
        },
        "name": "Dire Bat Plushie",
        "rarity": 2,
        "sub_type": "66a407658678f3f706330615",
        "type": "Miscelaneous"
    },
    {
        "_id": "65ea42aac4c368907b568879",
        "__v": 0,
        "bag": 3,
        "burneable": false,
        "family": "",
        "hidden": false,
        "icon": "672f9e79c1f51821d529b86d",
        "minteable": true,
        "mystery_box_data": {
            "_id": "65ea42aac4c368907b568879",
            "name": "Silver Builder's Crate - Miscellaneous 3",
            "bag": 14,
            "icon": "",
            "type": "miscellaneous",
            "family": "",
            "rarity": 2,
            "__v": 0,
            "burneable": true,
            "minteable": true
        },
        "name": "Dire Rat Plushie",
        "rarity": 2,
        "sub_type": "66a407658678f3f706330615",
        "type": "Miscelaneous"
    },
    {
        "_id": "65ea434ec4c368907b5688ad",
        "__v": 0,
        "bag": 3,
        "burneable": false,
        "family": "",
        "hidden": false,
        "icon": "669fe8893175d6ddb6cd961e",
        "minteable": true,
        "mystery_box_data": {
            "_id": "65ea434ec4c368907b5688ad",
            "name": "Gold Builder's Crate - Miscellaneous 1",
            "bag": 14,
            "icon": "",
            "type": "miscellaneous",
            "family": "",
            "rarity": 3,
            "__v": 0,
            "burneable": true,
            "minteable": true
        },
        "name": "Cockatrice Plushie",
        "rarity": 3,
        "sub_type": "66a407658678f3f706330615",
        "type": "Miscelaneous"
    },
    {
        "_id": "65ea435cc4c368907b5688c4",
        "__v": 0,
        "bag": 3,
        "burneable": false,
        "family": "",
        "hidden": false,
        "icon": "672f9e47c1f51821d529b80b",
        "minteable": true,
        "mystery_box_data": {
            "_id": "65ea435cc4c368907b5688c4",
            "name": "Gold Builder's Crate - Miscellaneous 2",
            "bag": 14,
            "icon": "",
            "type": "miscellaneous",
            "family": "",
            "rarity": 3,
            "__v": 0,
            "burneable": true,
            "minteable": true
        },
        "name": "Premium Ball",
        "rarity": 3,
        "sub_type": "66a407658678f3f706330615",
        "type": "Miscelaneous"
    },
    {
        "_id": "65f3623f4d196b2c15ff8182",
        "__v": 0,
        "bag": 2,
        "family": "",
        "icon": "65e611f831018cea1d5b1f45",
        "name": "Shadow Horn",
        "rarity": 3,
        "type": "soul"
    },
    {
        "_id": "65f3626b4d196b2c15ff81af",
        "__v": 0,
        "bag": 2,
        "family": "",
        "icon": "65e6120631018cea1d5b1f53",
        "name": "Shadow Eye",
        "rarity": 3,
        "type": "soul"
    },
    {
        "_id": "65f362964d196b2c15ff81d9",
        "__v": 0,
        "bag": 2,
        "family": "",
        "icon": "65e6121631018cea1d5b1f6d",
        "name": "Shadow Petal",
        "rarity": 3,
        "type": "soul"
    },
    {
        "_id": "65f362d44d196b2c15ff8223",
        "__v": 0,
        "bag": 2,
        "family": "",
        "icon": "65e6122b31018cea1d5b1f7a",
        "name": "Shadow Goo",
        "rarity": 3,
        "type": "soul"
    },
    {
        "_id": "65f362e94d196b2c15ff824d",
        "__v": 0,
        "bag": 2,
        "family": "",
        "icon": "65e6123d31018cea1d5b1f87",
        "name": "Shadow Feather",
        "rarity": 3,
        "type": "soul"
    },
    {
        "_id": "65f363024d196b2c15ff825f",
        "__v": 0,
        "bag": 2,
        "family": "",
        "icon": "65e6124d31018cea1d5b1f94",
        "name": "Shadow Powder",
        "rarity": 3,
        "type": "soul"
    },
    {
        "_id": "66830afd6e4bbca68f53af9a",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "66451e616e4bbca68f52ef60",
        "minteable": true,
        "name": "Rustic Bed",
        "rarity": 0,
        "sub_type": "66a407b48678f3f706330770",
        "type": "Furniture"
    },
    {
        "_id": "66830b5d6e4bbca68f53afae",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "66451ead6e4bbca68f52ef7a",
        "minteable": true,
        "name": "Rustic Chair",
        "rarity": 0,
        "sub_type": "66a407b48678f3f706330770",
        "type": "Furniture"
    },
    {
        "_id": "66830bad6e4bbca68f53afff",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "66451ee36e4bbca68f52ef95",
        "minteable": true,
        "name": "Rustic Table",
        "rarity": 0,
        "sub_type": "66a4077e8678f3f706330620",
        "type": "Furniture"
    },
    {
        "_id": "66830c006e4bbca68f53b03a",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "66451e886e4bbca68f52ef6d",
        "minteable": true,
        "name": "Rustic Bookshelf",
        "rarity": 0,
        "sub_type": "66a407b48678f3f706330770",
        "type": "Furniture"
    },
    {
        "_id": "66830c316e4bbca68f53b051",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "66451ec86e4bbca68f52ef87",
        "minteable": true,
        "name": "Rustic End Table",
        "rarity": 0,
        "sub_type": "66a4077e8678f3f706330620",
        "type": "Furniture"
    },
    {
        "_id": "66830c796e4bbca68f53b068",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "6645200f6e4bbca68f52f004",
        "minteable": true,
        "name": "Simple Flower Pot",
        "rarity": 0,
        "sub_type": "66a407b48678f3f706330770",
        "type": "Plant"
    },
    {
        "_id": "66830cbd6e4bbca68f53b07f",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "664520236e4bbca68f52f010",
        "minteable": true,
        "name": "Simple Tall Plant",
        "rarity": 0,
        "sub_type": "66a407b48678f3f706330770",
        "type": "Plant"
    },
    {
        "_id": "66830cf96e4bbca68f53b096",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "66451fd76e4bbca68f52efe7",
        "minteable": true,
        "name": "Simple Cactus",
        "rarity": 1,
        "sub_type": "66a407b48678f3f706330770",
        "type": "Plant"
    },
    {
        "_id": "66830d966e4bbca68f53b1db",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "66451e466e4bbca68f52ef53",
        "minteable": true,
        "name": "Plain Rug",
        "rarity": 0,
        "sub_type": "66a408418678f3f7063316bb",
        "type": "Floor"
    },
    {
        "_id": "66830de86e4bbca68f53b1f2",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "66450ba76e4bbca68f52ecf0",
        "minteable": true,
        "name": "Empty Frame",
        "rarity": 0,
        "sub_type": "66a407b48678f3f706330770",
        "type": "Art"
    },
    {
        "_id": "66830e606e4bbca68f53b372",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "664510fc6e4bbca68f52ee09",
        "minteable": true,
        "name": "Empty Picture Frame",
        "rarity": 0,
        "sub_type": "66a407658678f3f706330615",
        "type": "Art"
    },
    {
        "_id": "66830eac6e4bbca68f53b3ac",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "66ba6319707a46ffb5bd4614",
        "minteable": true,
        "name": "Everburning Candle",
        "rarity": 1,
        "sub_type": "66a407658678f3f706330615",
        "type": "Lighting"
    },
    {
        "_id": "66830f006e4bbca68f53b3c3",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "66ba635f707a46ffb5bd4676",
        "minteable": true,
        "name": "Witch Cauldron",
        "rarity": 1,
        "sub_type": "66c7a1d1a5345ba667eb7f3b",
        "type": "Miscelaneous"
    },
    {
        "_id": "66830f506e4bbca68f53b3da",
        "__v": 0,
        "bag": 3,
        "burneable": false,
        "family": "",
        "hidden": false,
        "icon": "66451fb76e4bbca68f52efda",
        "minteable": false,
        "name": "Old Magic Book",
        "rarity": 0,
        "sub_type": "66a407b48678f3f706330770",
        "type": "Miscelaneous"
    },
    {
        "_id": "66830fae6e4bbca68f53b3f1",
        "__v": 0,
        "bag": 3,
        "burneable": false,
        "family": "",
        "icon": "6647c0a26e4bbca68f52f0af",
        "minteable": false,
        "name": "Broken Wood Floor (INC)",
        "rarity": 0,
        "type": "Rug"
    },
    {
        "_id": "6683100c6e4bbca68f53b408",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "669939b80a9e89e76d874188",
        "minteable": true,
        "name": "Miniature Larissa",
        "rarity": 1,
        "sub_type": "66a407658678f3f706330615",
        "type": "Miscelaneous"
    },
    {
        "_id": "668310746e4bbca68f53b443",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "669939d10a9e89e76d874197",
        "minteable": true,
        "name": "Tarot Cards",
        "rarity": 1,
        "sub_type": "66a407b48678f3f706330770",
        "type": "Miscelaneous"
    },
    {
        "_id": "66882cae6e4bbca68f53c496",
        "__v": 0,
        "bag": 2,
        "family": "",
        "icon": "66b29fc647fe62f0e089fe25",
        "name": "Timeless Shard II",
        "rarity": 1,
        "type": "shard"
    },
    {
        "_id": "66882d326e4bbca68f53c4a8",
        "__v": 0,
        "bag": 2,
        "family": "",
        "icon": "66b29fec47fe62f0e089fe34",
        "name": "Timeless Ember II",
        "rarity": 1,
        "type": "ember"
    },
    {
        "_id": "66882d636e4bbca68f53c4ba",
        "__v": 0,
        "bag": 2,
        "family": "",
        "icon": "67aa6763db9efc46981ca679",
        "name": "Timeless Essence II",
        "rarity": 1,
        "type": "soul"
    },
    {
        "_id": "66882e7d6e4bbca68f53c545",
        "__v": 0,
        "bag": 2,
        "family": "",
        "icon": "66b2a23247fe62f0e089fef5",
        "name": "The Queen's Heart",
        "rarity": 3,
        "type": "soul"
    },
    {
        "_id": "66882ef06e4bbca68f53c561",
        "__v": 0,
        "bag": 2,
        "family": "",
        "icon": "66b2a26947fe62f0e089ff04",
        "name": "Witch's Glass Eye",
        "rarity": 3,
        "type": "soul"
    },
    {
        "_id": "66a3d3108941ff49bf83cc7a",
        "__v": 0,
        "bag": 14,
        "burneable": false,
        "family": "",
        "icon": "",
        "minteable": false,
        "name": "Closed Server Test Item",
        "rarity": 0,
        "type": "miscellaneous"
    },
    {
        "_id": "66a94d4bd359fea1f575c075",
        "__v": 0,
        "bag": 13,
        "burneable": false,
        "family": "",
        "icon": "",
        "minteable": true,
        "name": "Seal of Tenure - City",
        "rarity": 3,
        "type": "plot"
    },
    {
        "_id": "66197e976e4bbca68f52bb2e",
        "__v": 0,
        "bag": 12,
        "family": "",
        "journal_name": "LD tutorial",
        "name": "LD Tutorial",
        "rarity": 0,
        "region": [
            {
                "value": "64b04fc0d3d5ac314bfbcf8a",
                "label": "TheWild"
            }
        ],
        "state": 0,
        "type": "rumor"
    },
    {
        "_id": "668ee1b3471363959a15e622",
        "__v": 0,
        "bag": 2,
        "family": "",
        "icon": "631fb82e308c6c735bd572e0",
        "name": "Twin Essence",
        "rarity": 3,
        "type": "soul"
    },
    {
        "_id": "668ee1e1471363959a15e63d",
        "__v": 0,
        "bag": 2,
        "family": "",
        "icon": "631fb82e308c6c735bd572e0",
        "name": "Prized Truffle",
        "rarity": 3,
        "type": "soul"
    },
    {
        "_id": "66954a51e6b35606de2d4938",
        "__v": 0,
        "bag": 25,
        "created_at": "2024-07-15T16:12:01.677Z",
        "name": "WIN - Spirit Sap",
        "sprite": "666b6f246e4bbca68f536d19",
        "updated_at": "2024-08-08T21:59:44.419Z"
    },
    {
        "_id": "668fec06edc1c2090e8355a7",
        "__v": 0,
        "bag": 25,
        "created_at": "2024-07-11T14:28:22.900Z",
        "name": "WIN - Magic Mushroom A",
        "sprite": "666b6f396e4bbca68f536d26",
        "updated_at": "2024-08-08T22:00:00.976Z"
    },
    {
        "_id": "668fec37edc1c2090e8355bf",
        "__v": 0,
        "bag": 25,
        "created_at": "2024-07-11T14:29:11.711Z",
        "name": "WIN - Empty Bottles",
        "sprite": "65e8b5ddc4c368907b562bba",
        "updated_at": "2024-08-08T21:59:54.473Z"
    },
    {
        "_id": "66954b32e6b35606de2d4a1c",
        "__v": 0,
        "bag": 25,
        "created_at": "2024-07-15T16:15:46.572Z",
        "name": "WIN - Spores",
        "sprite": "666b6eff6e4bbca68f536d00",
        "updated_at": "2024-08-08T21:59:31.540Z"
    },
    {
        "_id": "66954a9ee6b35606de2d4979",
        "__v": 0,
        "bag": 25,
        "created_at": "2024-07-15T16:13:18.125Z",
        "name": "WIN - Soothing Water",
        "sprite": "666b6f136e4bbca68f536d0c",
        "updated_at": "2024-08-08T21:59:37.020Z"
    },
    {
        "_id": "66968799b0e435f1745b7c16",
        "__v": 0,
        "bag": 25,
        "created_at": "2024-07-16T14:45:45.870Z",
        "name": "WIN - Magic Mushroom B",
        "sprite": "666b6f396e4bbca68f536d26",
        "updated_at": "2024-08-08T21:59:21.793Z"
    },
    {
        "_id": "669abb8f0a9e89e76d88535e",
        "__v": 0,
        "bag": 3,
        "burneable": false,
        "family": "",
        "hidden": false,
        "icon": "668e2afa471363959a15b6bc",
        "minteable": true,
        "name": "Blue Wizard Statue",
        "rarity": 0,
        "sub_type": "66a407b48678f3f706330770",
        "type": "Art"
    },
    {
        "_id": "669abb3b0a9e89e76d885294",
        "__v": 0,
        "bag": 3,
        "burneable": false,
        "family": "",
        "hidden": false,
        "icon": "668e2c16471363959a15b77f",
        "minteable": true,
        "name": "Large Vase",
        "rarity": 0,
        "sub_type": "66a407b48678f3f706330770",
        "type": "Art"
    },
    {
        "_id": "669abaea0a9e89e76d8851cd",
        "__v": 0,
        "bag": 3,
        "burneable": false,
        "family": "",
        "hidden": false,
        "icon": "668e2b47471363959a15b6e0",
        "minteable": true,
        "name": "Medium Vase",
        "rarity": 0,
        "sub_type": "66a407b48678f3f706330770",
        "type": "Art"
    },
    {
        "_id": "669687a2b0e435f1745b7c26",
        "__v": 0,
        "bag": 25,
        "created_at": "2024-07-16T14:45:54.939Z",
        "name": "WIN - Magic Mushroom C",
        "sprite": "666b6f396e4bbca68f536d26",
        "updated_at": "2024-08-08T21:59:14.126Z"
    },
    {
        "_id": "669aba720a9e89e76d885109",
        "__v": 0,
        "bag": 3,
        "burneable": false,
        "family": "",
        "hidden": false,
        "icon": "668e290a471363959a15b5d3",
        "minteable": true,
        "name": "Simple Rug",
        "rarity": 0,
        "sub_type": "66a408418678f3f7063316bb",
        "type": "Floor"
    },
    {
        "_id": "669abbe60a9e89e76d885434",
        "__v": 0,
        "bag": 3,
        "burneable": false,
        "family": "",
        "hidden": false,
        "icon": "668dd159471363959a15b499",
        "minteable": true,
        "name": "Blue Wizard Clock",
        "rarity": 0,
        "sub_type": "66a407b48678f3f706330770",
        "type": "Furniture"
    },
    {
        "_id": "669abc3c0a9e89e76d885516",
        "__v": 0,
        "bag": 3,
        "burneable": false,
        "family": "",
        "hidden": false,
        "icon": "668f0382edc1c2090e834f18",
        "minteable": true,
        "name": "Blue Wizard Bed",
        "rarity": 0,
        "sub_type": "66a407b48678f3f706330770",
        "type": "Furniture"
    },
    {
        "_id": "669abc940a9e89e76d885604",
        "__v": 0,
        "bag": 3,
        "burneable": false,
        "family": "",
        "hidden": false,
        "icon": "668f036eedc1c2090e834f0d",
        "minteable": true,
        "name": "Armoire",
        "rarity": 0,
        "sub_type": "66a407b48678f3f706330770",
        "type": "Furniture"
    },
    {
        "_id": "669abd320a9e89e76d885812",
        "__v": 0,
        "bag": 3,
        "burneable": false,
        "family": "",
        "hidden": false,
        "icon": "668f03a7edc1c2090e834f43",
        "minteable": true,
        "name": "Couch",
        "rarity": 0,
        "sub_type": "66a407b48678f3f706330770",
        "type": "Furniture"
    },
    {
        "_id": "669abceb0a9e89e76d8856fe",
        "__v": 0,
        "bag": 3,
        "burneable": false,
        "family": "",
        "hidden": false,
        "icon": "668f03b6edc1c2090e834f51",
        "minteable": true,
        "name": "Large Table",
        "rarity": 0,
        "sub_type": "66a4077e8678f3f706330620",
        "type": "Furniture"
    },
    {
        "_id": "669abdc30a9e89e76d885a42",
        "__v": 0,
        "bag": 3,
        "burneable": false,
        "family": "",
        "hidden": false,
        "icon": "668f03e9edc1c2090e834f8a",
        "minteable": true,
        "name": "Stool",
        "rarity": 0,
        "sub_type": "66a407b48678f3f706330770",
        "type": "Furniture"
    },
    {
        "_id": "669abd860a9e89e76d885928",
        "__v": 0,
        "bag": 3,
        "burneable": false,
        "family": "",
        "hidden": false,
        "icon": "668f0395edc1c2090e834f34",
        "minteable": true,
        "name": "Chair",
        "rarity": 0,
        "sub_type": "66a407b48678f3f706330770",
        "type": "Furniture"
    },
    {
        "_id": "669abe010a9e89e76d885b6c",
        "__v": 0,
        "bag": 3,
        "burneable": false,
        "family": "",
        "hidden": false,
        "icon": "668e2a59471363959a15b665",
        "minteable": true,
        "name": "Triangular Drawer",
        "rarity": 0,
        "sub_type": "66a4077e8678f3f706330620",
        "type": "Furniture"
    },
    {
        "_id": "669abe6d0a9e89e76d885dca",
        "__v": 0,
        "bag": 3,
        "burneable": false,
        "family": "",
        "hidden": false,
        "icon": "668f03d6edc1c2090e834f7e",
        "minteable": true,
        "name": "Blue Wizard Lightstand 2",
        "rarity": 0,
        "sub_type": "66a407b48678f3f706330770",
        "type": "Lighting"
    },
    {
        "_id": "669abe3a0a9e89e76d885c99",
        "__v": 0,
        "bag": 3,
        "burneable": false,
        "family": "",
        "hidden": false,
        "icon": "668f03c6edc1c2090e834f61",
        "minteable": true,
        "name": "Blue Wizard Lightstand 1",
        "rarity": 0,
        "sub_type": "66a407b48678f3f706330770",
        "type": "Lighting"
    },
    {
        "_id": "669abf7b0a9e89e76d8863a4",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "66968882b0e435f1745b7d39",
        "minteable": true,
        "name": "Famous Wizard Painting",
        "rarity": 1,
        "sub_type": "66a407b48678f3f706330770",
        "type": "Art"
    },
    {
        "_id": "669abf320a9e89e76d8861b4",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "66968913b0e435f1745b7d4e",
        "minteable": true,
        "name": "Opal Orb",
        "rarity": 1,
        "sub_type": "66a407b48678f3f706330770",
        "type": "Art"
    },
    {
        "_id": "669abebc0a9e89e76d885efe",
        "__v": 0,
        "bag": 3,
        "burneable": false,
        "family": "",
        "hidden": false,
        "icon": "668e296d471363959a15b5f7",
        "minteable": true,
        "name": "Chest",
        "rarity": 0,
        "sub_type": "66a407b48678f3f706330770",
        "type": "Furniture"
    },
    {
        "_id": "669abeff0a9e89e76d886041",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "669687a8b0e435f1745b7c34",
        "minteable": true,
        "name": "Hedge Wizard Rug",
        "rarity": 0,
        "sub_type": "66a408418678f3f7063316bb",
        "type": "Floor"
    },
    {
        "_id": "669abfb70a9e89e76d8864f8",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "669687e2b0e435f1745b7ccb",
        "minteable": true,
        "name": "Southern Thicket Tree",
        "rarity": 0,
        "sub_type": "66a407b48678f3f706330770",
        "type": "Plant"
    },
    {
        "_id": "669ac0b40a9e89e76d886bd8",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "6696882ab0e435f1745b7ce5",
        "minteable": true,
        "name": "Stone Couch",
        "rarity": 0,
        "sub_type": "66a407b48678f3f706330770",
        "type": "Furniture"
    },
    {
        "_id": "669ac1240a9e89e76d886eca",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "66ba6227707a46ffb5bd44b7",
        "minteable": true,
        "name": "Water Tub",
        "rarity": 1,
        "sub_type": "66a407b48678f3f706330770",
        "type": "Furniture"
    },
    {
        "_id": "669ac01c0a9e89e76d88666a",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "6696886cb0e435f1745b7d2b",
        "minteable": true,
        "name": "Bedroll",
        "rarity": 0,
        "sub_type": "66a408418678f3f7063316bb",
        "type": "Floor"
    },
    {
        "_id": "669ac06b0a9e89e76d8867d4",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "66968845b0e435f1745b7cfa",
        "minteable": true,
        "name": "Camp Bench",
        "rarity": 0,
        "sub_type": "66a407b48678f3f706330770",
        "type": "Furniture"
    },
    {
        "_id": "669ac0f20a9e89e76d886d53",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "66ba629f707a46ffb5bd4572",
        "minteable": true,
        "name": "Firepit",
        "rarity": 1,
        "sub_type": "66c7a1d1a5345ba667eb7f3b",
        "type": "Lighting"
    },
    {
        "_id": "669ac2570a9e89e76d887580",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "66968a14b0e435f1745b7dde",
        "minteable": true,
        "name": "Home Sign",
        "rarity": 0,
        "sub_type": "66a407b48678f3f706330770",
        "type": "Art"
    },
    {
        "_id": "669ac1aa0a9e89e76d88726c",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "669689f3b0e435f1745b7dd1",
        "minteable": true,
        "name": "Camping Bag",
        "rarity": 0,
        "sub_type": "66a407b48678f3f706330770",
        "type": "Furniture"
    },
    {
        "_id": "669ac1590a9e89e76d887040",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "66ba62c3707a46ffb5bd45bb",
        "minteable": true,
        "name": "Cookpot",
        "rarity": 1,
        "sub_type": "66c7a1d1a5345ba667eb7f3b",
        "type": "Appliance"
    },
    {
        "_id": "669ac3000a9e89e76d887b51",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "66968a51b0e435f1745b7dfc",
        "minteable": true,
        "name": "Magic Book",
        "rarity": 0,
        "sub_type": "66a407b48678f3f706330770",
        "type": "Miscelaneous"
    },
    {
        "_id": "669ac2250a9e89e76d8873fa",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "66ba624d707a46ffb5bd44f0",
        "minteable": true,
        "name": "Small Bucket",
        "rarity": 1,
        "sub_type": "66a407b48678f3f706330770",
        "type": "Miscelaneous"
    },
    {
        "_id": "669ac3410a9e89e76d887ce7",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "66968a2ab0e435f1745b7deb",
        "minteable": true,
        "name": "Stack of Books",
        "rarity": 0,
        "sub_type": "66a407b48678f3f706330770",
        "type": "Miscelaneous"
    },
    {
        "_id": "66a00d6f3175d6ddb6cdd466",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-07-23T20:07:11.210Z",
        "name": "WIN-CHEST-KEY-A",
        "sprite": "None",
        "updated_at": "2024-07-23T20:07:11.210Z"
    },
    {
        "_id": "66a00d7b3175d6ddb6cdd482",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-07-23T20:07:23.652Z",
        "name": "WIN-CHEST-KEY-C",
        "sprite": "None",
        "updated_at": "2024-07-23T20:07:23.652Z"
    },
    {
        "_id": "66a00d7f3175d6ddb6cdd490",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-07-23T20:07:27.188Z",
        "name": "WIN-CHEST-KEY-D",
        "sprite": "None",
        "updated_at": "2024-07-23T20:07:27.188Z"
    },
    {
        "_id": "66a00e863175d6ddb6cdde6f",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-07-23T20:11:50.180Z",
        "name": "WIN-CHEST-KEY-G",
        "sprite": "None",
        "updated_at": "2024-07-23T20:11:50.180Z"
    },
    {
        "_id": "66a00d993175d6ddb6cdd49e",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-07-23T20:07:53.705Z",
        "name": "WIN-CHEST-KEY-E",
        "sprite": "None",
        "updated_at": "2024-07-23T20:07:53.705Z"
    },
    {
        "_id": "66a00d733175d6ddb6cdd474",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-07-23T20:07:15.372Z",
        "name": "WIN-CHEST-KEY-B",
        "sprite": "None",
        "updated_at": "2024-07-23T20:07:15.372Z"
    },
    {
        "_id": "66a00d9d3175d6ddb6cdd4ac",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-07-23T20:07:57.345Z",
        "name": "WIN-CHEST-KEY-F",
        "sprite": "None",
        "updated_at": "2024-07-23T20:07:57.345Z"
    },
    {
        "_id": "66a00e8d3175d6ddb6cdde8b",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-07-23T20:11:57.286Z",
        "name": "WIN-CHEST-KEY-I",
        "sprite": "None",
        "updated_at": "2024-07-23T20:11:57.286Z"
    },
    {
        "_id": "66a02d703175d6ddb6ce6094",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-07-23T22:23:44.968Z",
        "name": "WIN - TORTURED TREE KEY B",
        "sprite": "None",
        "updated_at": "2024-07-23T22:23:44.968Z"
    },
    {
        "_id": "66a02d6d3175d6ddb6ce6086",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-07-23T22:23:41.413Z",
        "name": "WIN - TORTURED TREE KEY A",
        "sprite": "None",
        "updated_at": "2024-07-23T22:23:41.413Z"
    },
    {
        "_id": "66a02d7b3175d6ddb6ce60be",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-07-23T22:23:55.044Z",
        "name": "WIN - TORTURED TREE KEY E",
        "sprite": "None",
        "updated_at": "2024-07-23T22:23:55.044Z"
    },
    {
        "_id": "66a00e893175d6ddb6cdde7d",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-07-23T20:11:53.902Z",
        "name": "WIN-CHEST-KEY-H",
        "sprite": "None",
        "updated_at": "2024-07-23T20:11:53.902Z"
    },
    {
        "_id": "66a02d743175d6ddb6ce60a2",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-07-23T22:23:48.612Z",
        "name": "WIN - TORTURED TREE KEY C",
        "sprite": "None",
        "updated_at": "2024-07-23T22:23:48.612Z"
    },
    {
        "_id": "66a02d773175d6ddb6ce60b0",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-07-23T22:23:51.908Z",
        "name": "WIN - TORTURED TREE KEY D",
        "sprite": "None",
        "updated_at": "2024-07-23T22:23:51.908Z"
    },
    {
        "_id": "66a02d7e3175d6ddb6ce60cc",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-07-23T22:23:58.349Z",
        "name": "WIN - TORTURED TREE KEY F",
        "sprite": "None",
        "updated_at": "2024-07-23T22:23:58.349Z"
    },
    {
        "_id": "66a02e2d3175d6ddb6ce60db",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-07-23T22:26:53.425Z",
        "name": "WIN - LARISSA KEY",
        "sprite": "None",
        "updated_at": "2024-07-23T22:26:53.425Z"
    },
    {
        "_id": "66a02ea03175d6ddb6ce6105",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-07-23T22:28:48.380Z",
        "name": "WIN - SPORE KEY C",
        "sprite": "None",
        "updated_at": "2024-07-23T22:28:48.380Z"
    },
    {
        "_id": "66a02e9c3175d6ddb6ce60f7",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-07-23T22:28:44.752Z",
        "name": "WIN - SPORE KEY B",
        "sprite": "None",
        "updated_at": "2024-07-23T22:28:44.752Z"
    },
    {
        "_id": "66a02ea63175d6ddb6ce6121",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-07-23T22:28:54.359Z",
        "name": "WIN - SPORE KEY E",
        "sprite": "None",
        "updated_at": "2024-07-23T22:28:54.359Z"
    },
    {
        "_id": "66a02ea33175d6ddb6ce6113",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-07-23T22:28:51.183Z",
        "name": "WIN - SPORE KEY D",
        "sprite": "None",
        "updated_at": "2024-07-23T22:28:51.183Z"
    },
    {
        "_id": "66a02e993175d6ddb6ce60e9",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-07-23T22:28:41.704Z",
        "name": "WIN - SPORE KEY A",
        "sprite": "None",
        "updated_at": "2024-07-23T22:28:41.704Z"
    },
    {
        "_id": "66a02ed23175d6ddb6ce613d",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-07-23T22:29:38.547Z",
        "name": "WIN - SERENE POOL A",
        "sprite": "None",
        "updated_at": "2024-07-23T22:29:38.547Z"
    },
    {
        "_id": "66a02ea93175d6ddb6ce612f",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-07-23T22:28:57.570Z",
        "name": "WIN - SPORE KEY F",
        "sprite": "None",
        "updated_at": "2024-07-23T22:28:57.570Z"
    },
    {
        "_id": "66a02ed53175d6ddb6ce614b",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-07-23T22:29:41.444Z",
        "name": "WIN - SERENE POOL B",
        "sprite": "None",
        "updated_at": "2024-07-23T22:29:41.444Z"
    },
    {
        "_id": "66a02eec3175d6ddb6ce6195",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-07-23T22:30:04.631Z",
        "name": "WIN - SERENE POOL F",
        "sprite": "None",
        "updated_at": "2024-07-23T22:30:04.631Z"
    },
    {
        "_id": "66a02ed83175d6ddb6ce6159",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-07-23T22:29:44.233Z",
        "name": "WIN - SERENE POOL C",
        "sprite": "None",
        "updated_at": "2024-07-23T22:29:44.233Z"
    },
    {
        "_id": "66a02edd3175d6ddb6ce6175",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-07-23T22:29:49.882Z",
        "name": "WIN - SERENE POOL E",
        "sprite": "None",
        "updated_at": "2024-07-23T22:30:00.764Z"
    },
    {
        "_id": "66a02eda3175d6ddb6ce6167",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-07-23T22:29:46.848Z",
        "name": "WIN - SERENE POOL D",
        "sprite": "None",
        "updated_at": "2024-07-23T22:29:46.848Z"
    },
    {
        "_id": "66a124a93175d6ddb6cf05fc",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-07-24T15:58:33.324Z",
        "name": "WIN - SAPLING KEY A",
        "sprite": "None",
        "updated_at": "2024-07-24T15:58:33.324Z"
    },
    {
        "_id": "66a124b03175d6ddb6cf085f",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-07-24T15:58:40.556Z",
        "name": "WIN - SAPLING KEY C",
        "sprite": "None",
        "updated_at": "2024-07-24T15:58:40.556Z"
    },
    {
        "_id": "66a16c6d3175d6ddb6cfd1ff",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-07-24T21:04:45.905Z",
        "name": "WIN - MIST BLOSSOM KEY A ",
        "sprite": "None",
        "updated_at": "2024-07-24T21:04:45.905Z"
    },
    {
        "_id": "66a16c723175d6ddb6cfd20d",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-07-24T21:04:50.026Z",
        "name": "WIN - MIST BLOSSOM KEY B",
        "sprite": "None",
        "updated_at": "2024-07-24T21:04:50.026Z"
    },
    {
        "_id": "66a124ac3175d6ddb6cf072d",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-07-24T15:58:36.596Z",
        "name": "WIN - SAPLING KEY B",
        "sprite": "None",
        "updated_at": "2024-07-24T15:58:36.596Z"
    },
    {
        "_id": "66a16c793175d6ddb6cfd225",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-07-24T21:04:57.353Z",
        "name": "WIN - MIST BLOSSOM KEY C",
        "sprite": "None",
        "updated_at": "2024-07-24T21:04:57.353Z"
    },
    {
        "_id": "66a16c7c3175d6ddb6cfd233",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-07-24T21:05:00.479Z",
        "name": "WIN - MIST BLOSSOM KEY D",
        "sprite": "None",
        "updated_at": "2024-07-24T21:05:00.479Z"
    },
    {
        "_id": "66a16c873175d6ddb6cfd24f",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-07-24T21:05:11.235Z",
        "name": "WIN - MIST BLOSSOM KEY F",
        "sprite": "None",
        "updated_at": "2024-07-24T21:05:11.235Z"
    },
    {
        "_id": "66aa993d94a489cd05764325",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-07-31T20:06:21.396Z",
        "name": "WIN - AGON SPIRIT KEY A",
        "sprite": "None",
        "updated_at": "2024-07-31T20:06:21.396Z"
    },
    {
        "_id": "66a16c823175d6ddb6cfd241",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-07-24T21:05:06.157Z",
        "name": "WIN - MIST BLOSSOM KEY E",
        "sprite": "None",
        "updated_at": "2024-07-24T21:05:06.157Z"
    },
    {
        "_id": "66a2a0cd03210e6cdc19eaf3",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-07-25T19:00:29.798Z",
        "name": "TEST DUMMY 1|",
        "sprite": "None",
        "updated_at": "2024-07-25T19:00:29.798Z"
    },
    {
        "_id": "66aa995694a489cd0576435d",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-07-31T20:06:46.134Z",
        "name": "WIN - AGON SPIRIT KEY I",
        "sprite": "None",
        "updated_at": "2024-07-31T20:06:46.134Z"
    },
    {
        "_id": "66aa994b94a489cd05764341",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-07-31T20:06:35.233Z",
        "name": "WIN - AGON SPIRIT KEY E",
        "sprite": "None",
        "updated_at": "2024-07-31T20:06:35.233Z"
    },
    {
        "_id": "66abd40894a489cd057991c5",
        "__v": 0,
        "bag": 3,
        "burneable": false,
        "family": "",
        "hidden": false,
        "icon": "669fe8983175d6ddb6cd963c",
        "minteable": false,
        "name": "Animated Decoration Test",
        "rarity": 0,
        "sub_type": "66984749a6e16c004007b6e0",
        "type": "Lighting"
    },
    {
        "_id": "66aea97694a489cd058075dd",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-08-03T22:04:38.839Z",
        "name": "WIN - MUSHROOM KEY A",
        "sprite": "None",
        "updated_at": "2024-08-03T22:04:38.839Z"
    },
    {
        "_id": "66aea97b94a489cd058075eb",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-08-03T22:04:43.777Z",
        "name": "WIN - MUSHROOM KEY B",
        "sprite": "None",
        "updated_at": "2024-08-03T22:04:43.777Z"
    },
    {
        "_id": "66aea98194a489cd058075f9",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-08-03T22:04:49.429Z",
        "name": "WIN - MUSHROOM KEY C",
        "sprite": "None",
        "updated_at": "2024-08-03T22:04:49.429Z"
    },
    {
        "_id": "66b0d82194a489cd05830d4f",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-08-05T13:48:17.982Z",
        "name": "WIN-A-MAGICCIRCLE-KEY-1",
        "sprite": "None",
        "updated_at": "2024-08-05T13:48:17.982Z"
    },
    {
        "_id": "66b0d84094a489cd05830d5d",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-08-05T13:48:48.444Z",
        "name": "WIN-A-MAGICCIRCLE-KEY-2",
        "sprite": "None",
        "updated_at": "2024-08-05T13:48:48.444Z"
    },
    {
        "_id": "66b0d84794a489cd05830d6b",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-08-05T13:48:55.900Z",
        "name": "WIN-A-MAGICCIRCLE-KEY-3",
        "sprite": "None",
        "updated_at": "2024-08-05T13:48:55.900Z"
    },
    {
        "_id": "66b0dce294a489cd05837a00",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-08-05T14:08:34.854Z",
        "name": "WIN - FOG MOLDY",
        "sprite": "None",
        "updated_at": "2024-08-05T14:08:34.854Z"
    },
    {
        "_id": "66b0dcf394a489cd05837a0e",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-08-05T14:08:51.487Z",
        "name": "WIN - FOG WHISPY",
        "sprite": "None",
        "updated_at": "2024-08-05T14:08:51.487Z"
    },
    {
        "_id": "66b0dd0d94a489cd05837a1c",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-08-05T14:09:17.769Z",
        "name": "WIN - FOG TREE",
        "sprite": "None",
        "updated_at": "2024-08-05T14:09:17.769Z"
    },
    {
        "_id": "66b2243f94a489cd0586266d",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-08-06T13:25:19.119Z",
        "name": "WIN - EIZO A",
        "sprite": "None",
        "updated_at": "2024-08-06T13:25:19.119Z"
    },
    {
        "_id": "66b2918794a489cd058a3b08",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-08-06T21:11:35.717Z",
        "name": "D-WIN-Eizo-B-Key",
        "sprite": "None",
        "updated_at": "2024-08-06T21:11:35.717Z"
    },
    {
        "_id": "66b291a394a489cd058a3b16",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-08-06T21:12:03.958Z",
        "name": "D-WIN-Eizo-C-Key",
        "sprite": "None",
        "updated_at": "2024-08-06T21:12:03.958Z"
    },
    {
        "_id": "66b291bd94a489cd058a3b24",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-08-06T21:12:29.903Z",
        "name": "D-WIN-Eizo-D-Key",
        "sprite": "None",
        "updated_at": "2024-08-08T23:53:33.884Z"
    },
    {
        "_id": "66b3d41dd7c4d23ad2fa4e53",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-08-07T20:07:57.497Z",
        "name": "D-WIN-Cerulean_Key",
        "sprite": "None",
        "updated_at": "2024-08-07T20:07:57.497Z"
    },
    {
        "_id": "66b3e7b8d7c4d23ad2fb6fb3",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-08-07T21:31:36.252Z",
        "name": "LARISSA-D-1",
        "sprite": "None",
        "updated_at": "2024-08-07T21:31:36.252Z"
    },
    {
        "_id": "66b3e7ced7c4d23ad2fb6fd0",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-08-07T21:31:58.273Z",
        "name": "LARISSA-D-3",
        "sprite": "None",
        "updated_at": "2024-08-07T21:31:58.273Z"
    },
    {
        "_id": "66b3e7c3d7c4d23ad2fb6fc1",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-08-07T21:31:47.567Z",
        "name": "LARISSA-D-2",
        "sprite": "None",
        "updated_at": "2024-08-07T21:31:47.567Z"
    },
    {
        "_id": "66b3e7fcd7c4d23ad2fb6fdd",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-08-07T21:32:44.467Z",
        "name": "LARISSA-C-1",
        "sprite": "None",
        "updated_at": "2024-08-07T21:32:44.467Z"
    },
    {
        "_id": "66b3e805d7c4d23ad2fb6fef",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-08-07T21:32:53.941Z",
        "name": "LARISSA-C-2",
        "sprite": "None",
        "updated_at": "2024-08-07T21:32:53.941Z"
    },
    {
        "_id": "66b3e80ed7c4d23ad2fb6ffd",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-08-07T21:33:02.184Z",
        "name": "LARISSA-C-3",
        "sprite": "None",
        "updated_at": "2024-08-07T21:33:02.184Z"
    },
    {
        "_id": "66b3e817d7c4d23ad2fb700b",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-08-07T21:33:11.139Z",
        "name": "LARISSA-B-1",
        "sprite": "None",
        "updated_at": "2024-08-07T21:33:11.139Z"
    },
    {
        "_id": "66b3e824d7c4d23ad2fb7019",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-08-07T21:33:24.668Z",
        "name": "LARISSA-B-2",
        "sprite": "None",
        "updated_at": "2024-08-07T21:33:24.668Z"
    },
    {
        "_id": "66b3e832d7c4d23ad2fb7027",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-08-07T21:33:38.329Z",
        "name": "LARISSA-B-3",
        "sprite": "None",
        "updated_at": "2024-08-07T21:33:38.329Z"
    },
    {
        "_id": "66b645b487375013b027dd9e",
        "__v": 0,
        "bag": 12,
        "family": "",
        "journal_name": "Test 1",
        "name": "Daily Quest Test",
        "rarity": 0,
        "region": [
            {
                "value": "64b01970d3d5ac314bfbbf17",
                "label": "HedgeWizardEncampment"
            }
        ],
        "state": 0,
        "type": "rumor"
    },
    {
        "_id": "66b6455687375013b027dce2",
        "__v": 0,
        "bag": 14,
        "burneable": true,
        "family": "",
        "icon": "66be95040871e62657b9c31a",
        "minteable": true,
        "name": "The Shadow Goat",
        "rarity": 3,
        "type": "card"
    },
    {
        "_id": "66b645c187375013b027ddd5",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-08-09T16:37:21.099Z",
        "name": "WIN - EIZO G",
        "sprite": "None",
        "updated_at": "2024-08-09T16:37:21.099Z"
    },
    {
        "_id": "66b6463487375013b027de47",
        "__v": 0,
        "bag": 14,
        "burneable": true,
        "family": "",
        "icon": "66be94e60871e62657b9c2b8",
        "minteable": true,
        "name": "The Secret Tower",
        "rarity": 3,
        "type": "card"
    },
    {
        "_id": "66b6464a87375013b027de81",
        "__v": 0,
        "bag": 14,
        "burneable": true,
        "family": "",
        "icon": "66be90110871e62657b9bef5",
        "minteable": true,
        "name": "One of Reds",
        "rarity": 3,
        "type": "card"
    },
    {
        "_id": "66b6819387375013b02d0989",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-08-09T20:52:35.459Z",
        "name": "WIN - EIZO H",
        "sprite": "None",
        "updated_at": "2024-08-09T20:52:35.459Z"
    },
    {
        "_id": "66b6a7aa87375013b02e3555",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-08-09T23:35:06.296Z",
        "name": "TRUFFLE BEAST KEY",
        "sprite": "None",
        "updated_at": "2024-08-09T23:35:06.296Z"
    },
    {
        "_id": "66b6a7b587375013b02e388b",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-08-09T23:35:17.891Z",
        "name": "SHROOM GOLEM KEY",
        "sprite": "None",
        "updated_at": "2024-08-09T23:35:17.891Z"
    },
    {
        "_id": "66b6a7c087375013b02e3899",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-08-09T23:35:28.834Z",
        "name": "WILL O WISP KEY",
        "sprite": "None",
        "updated_at": "2024-08-09T23:35:28.834Z"
    },
    {
        "_id": "66ba3ae087375013b03232e8",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-08-12T16:40:00.108Z",
        "name": "D-WIN-L-LARISSA-J-1",
        "sprite": "None",
        "updated_at": "2024-08-12T16:40:00.108Z"
    },
    {
        "_id": "66baa6c187375013b034a162",
        "__v": 0,
        "bag": 14,
        "burneable": true,
        "family": "",
        "icon": "66be8dca0871e62657b9b9fd",
        "minteable": true,
        "name": "One of Blues",
        "rarity": 3,
        "type": "card"
    },
    {
        "_id": "66baa6d887375013b034a19c",
        "__v": 0,
        "bag": 14,
        "burneable": true,
        "family": "",
        "icon": "66be911f0871e62657b9c193",
        "minteable": true,
        "name": "One of Yellows",
        "rarity": 3,
        "type": "card"
    },
    {
        "_id": "66baa6e387375013b034a1b3",
        "__v": 0,
        "bag": 14,
        "burneable": true,
        "family": "",
        "icon": "66be8ef30871e62657b9bc81",
        "minteable": true,
        "name": "One of Greens",
        "rarity": 3,
        "type": "card"
    },
    {
        "_id": "66baa6f087375013b034a1ca",
        "__v": 0,
        "bag": 14,
        "burneable": true,
        "family": "",
        "icon": "66be8e580871e62657b9bb5c",
        "minteable": true,
        "name": "One of Browns",
        "rarity": 3,
        "type": "card"
    },
    {
        "_id": "66baa6fa87375013b034a1e1",
        "__v": 0,
        "bag": 14,
        "burneable": true,
        "family": "",
        "icon": "66be8f920871e62657b9bdb2",
        "minteable": true,
        "name": "One of Purples",
        "rarity": 3,
        "type": "card"
    },
    {
        "_id": "66baa70687375013b034a1f8",
        "__v": 0,
        "bag": 14,
        "burneable": true,
        "family": "",
        "icon": "66be90970871e62657b9c034",
        "minteable": true,
        "name": "One of Whites",
        "rarity": 3,
        "type": "card"
    },
    {
        "_id": "66baa84e87375013b034a210",
        "__v": 0,
        "bag": 14,
        "burneable": true,
        "family": "",
        "icon": "66be90210871e62657b9bf1e",
        "minteable": true,
        "name": "Two of Reds",
        "rarity": 3,
        "type": "card"
    },
    {
        "_id": "66baa85887375013b034a229",
        "__v": 0,
        "bag": 14,
        "burneable": true,
        "family": "",
        "icon": "66be8ddd0871e62657b9ba46",
        "minteable": true,
        "name": "Two of Blues",
        "rarity": 3,
        "type": "card"
    },
    {
        "_id": "66baa86287375013b034a23d",
        "__v": 0,
        "bag": 14,
        "burneable": true,
        "family": "",
        "icon": "66be912d0871e62657b9c1bc",
        "minteable": true,
        "name": "Two of Yellows",
        "rarity": 3,
        "type": "card"
    },
    {
        "_id": "66baa8c787375013b034a255",
        "__v": 0,
        "bag": 14,
        "burneable": true,
        "family": "",
        "icon": "66be8f030871e62657b9bcaa",
        "minteable": true,
        "name": "Two of Greens",
        "rarity": 3,
        "type": "card"
    },
    {
        "_id": "66baa8d787375013b034a26b",
        "__v": 0,
        "bag": 14,
        "burneable": true,
        "family": "",
        "icon": "66be90300871e62657b9bf47",
        "minteable": true,
        "name": "Three of Reds",
        "rarity": 3,
        "type": "card"
    },
    {
        "_id": "66baa8e887375013b034a282",
        "__v": 0,
        "bag": 14,
        "burneable": true,
        "family": "",
        "icon": "66be8dee0871e62657b9ba7f",
        "minteable": true,
        "name": "Three of Blues",
        "rarity": 3,
        "type": "card"
    },
    {
        "_id": "66baa8f387375013b034a299",
        "__v": 0,
        "bag": 14,
        "burneable": true,
        "family": "",
        "icon": "66be91430871e62657b9c1e9",
        "minteable": true,
        "name": "Three of Yellows",
        "rarity": 3,
        "type": "card"
    },
    {
        "_id": "66baa90487375013b034a2b0",
        "__v": 0,
        "bag": 14,
        "burneable": true,
        "family": "",
        "icon": "66be8f150871e62657b9bcd3",
        "minteable": true,
        "name": "Three of Greens",
        "rarity": 3,
        "type": "card"
    },
    {
        "_id": "66baa9d187375013b034a2c8",
        "__v": 0,
        "bag": 14,
        "burneable": true,
        "family": "",
        "icon": "66be90420871e62657b9bf70",
        "minteable": true,
        "name": "Four of Reds",
        "rarity": 3,
        "type": "card"
    },
    {
        "_id": "66baa9dc87375013b034a2de",
        "__v": 0,
        "bag": 14,
        "burneable": true,
        "family": "",
        "icon": "66be8e030871e62657b9baa8",
        "minteable": true,
        "name": "Four of Blues",
        "rarity": 3,
        "type": "card"
    },
    {
        "_id": "66baa9e687375013b034a2f5",
        "__v": 0,
        "bag": 14,
        "burneable": true,
        "family": "",
        "icon": "66be918f0871e62657b9c212",
        "minteable": true,
        "name": "Four of Yellows",
        "rarity": 3,
        "type": "card"
    },
    {
        "_id": "66baa9f187375013b034a30c",
        "__v": 0,
        "bag": 14,
        "burneable": true,
        "family": "",
        "icon": "66be8f2c0871e62657b9bcfe",
        "minteable": true,
        "name": "Four of Greens",
        "rarity": 3,
        "type": "card"
    },
    {
        "_id": "66baa9ff87375013b034a323",
        "__v": 0,
        "bag": 14,
        "burneable": true,
        "family": "",
        "icon": "66be8e8b0871e62657b9bbd7",
        "minteable": true,
        "name": "Four of Browns",
        "rarity": 3,
        "type": "card"
    },
    {
        "_id": "66baaa1887375013b034a386",
        "__v": 0,
        "bag": 14,
        "burneable": true,
        "family": "",
        "icon": "66be8fc10871e62657b9be4d",
        "minteable": true,
        "name": "Four of Purples",
        "rarity": 3,
        "type": "card"
    },
    {
        "_id": "66baaa2287375013b034a394",
        "__v": 0,
        "bag": 14,
        "burneable": true,
        "family": "",
        "icon": "66be90da0871e62657b9c0df",
        "minteable": true,
        "name": "Four of Whites",
        "rarity": 3,
        "type": "card"
    },
    {
        "_id": "66baaa3087375013b034a3ab",
        "__v": 0,
        "bag": 14,
        "burneable": true,
        "family": "",
        "icon": "66be905e0871e62657b9bfb9",
        "minteable": true,
        "name": "Five of Reds",
        "rarity": 3,
        "type": "card"
    },
    {
        "_id": "66baaa3b87375013b034a3c2",
        "__v": 0,
        "bag": 14,
        "burneable": true,
        "family": "",
        "icon": "66be8e170871e62657b9bad1",
        "minteable": true,
        "name": "Five of Blues",
        "rarity": 3,
        "type": "card"
    },
    {
        "_id": "66baaa4887375013b034a3d9",
        "__v": 0,
        "bag": 14,
        "burneable": true,
        "family": "",
        "icon": "66be91a00871e62657b9c23b",
        "minteable": true,
        "name": "Five of Yellows",
        "rarity": 3,
        "type": "card"
    },
    {
        "_id": "66baaa5987375013b034a3ef",
        "__v": 0,
        "bag": 14,
        "burneable": true,
        "family": "",
        "icon": "66be8f470871e62657b9bd27",
        "minteable": true,
        "name": "Five of Greens",
        "rarity": 3,
        "type": "card"
    },
    {
        "_id": "66baaa6487375013b034a406",
        "__v": 0,
        "bag": 14,
        "burneable": true,
        "family": "",
        "icon": "66be8e9f0871e62657b9bbf2",
        "minteable": true,
        "name": "Five of Browns",
        "rarity": 3,
        "type": "card"
    },
    {
        "_id": "66baaa7487375013b034a41d",
        "__v": 0,
        "bag": 14,
        "burneable": true,
        "family": "",
        "icon": "66be8fd20871e62657b9be76",
        "minteable": true,
        "name": "Five of Purples",
        "rarity": 3,
        "type": "card"
    },
    {
        "_id": "66baaa7f87375013b034a434",
        "__v": 0,
        "bag": 14,
        "burneable": true,
        "family": "",
        "icon": "66be90ea0871e62657b9c108",
        "minteable": true,
        "name": "Five of Whites",
        "rarity": 3,
        "type": "card"
    },
    {
        "_id": "66baaa8a87375013b034a44b",
        "__v": 0,
        "bag": 14,
        "burneable": true,
        "family": "",
        "icon": "66be906e0871e62657b9bfe2",
        "minteable": true,
        "name": "Six of Reds",
        "rarity": 3,
        "type": "card"
    },
    {
        "_id": "66baaa9387375013b034a462",
        "__v": 0,
        "bag": 14,
        "burneable": true,
        "family": "",
        "icon": "66be8e280871e62657b9bafa",
        "minteable": true,
        "name": "Six of Blues",
        "rarity": 3,
        "type": "card"
    },
    {
        "_id": "66baaa9f87375013b034a479",
        "__v": 0,
        "bag": 14,
        "burneable": true,
        "family": "",
        "icon": "66be91b00871e62657b9c274",
        "minteable": true,
        "name": "Six of Yellows",
        "rarity": 3,
        "type": "card"
    },
    {
        "_id": "66baaaaa87375013b034a490",
        "__v": 0,
        "bag": 14,
        "burneable": true,
        "family": "",
        "icon": "66be8f560871e62657b9bd60",
        "minteable": true,
        "name": "Six of Greens",
        "rarity": 3,
        "type": "card"
    },
    {
        "_id": "66baaab787375013b034a4a7",
        "__v": 0,
        "bag": 14,
        "burneable": true,
        "family": "",
        "icon": "66be8eb00871e62657b9bc1b",
        "minteable": true,
        "name": "Six of Browns",
        "rarity": 3,
        "type": "card"
    },
    {
        "_id": "66baaac387375013b034a4be",
        "__v": 0,
        "bag": 14,
        "burneable": true,
        "family": "",
        "icon": "66be8fe70871e62657b9be91",
        "minteable": true,
        "name": "Six of Purples",
        "rarity": 3,
        "type": "card"
    },
    {
        "_id": "66baaace87375013b034a4d5",
        "__v": 0,
        "bag": 14,
        "burneable": true,
        "family": "",
        "icon": "66be90f90871e62657b9c141",
        "minteable": true,
        "name": "Six of Whites",
        "rarity": 3,
        "type": "card"
    },
    {
        "_id": "66baaae287375013b034a4ec",
        "__v": 0,
        "bag": 14,
        "burneable": true,
        "family": "",
        "icon": "66be90830871e62657b9c00b",
        "minteable": true,
        "name": "Seven of Reds",
        "rarity": 3,
        "type": "card"
    },
    {
        "_id": "66baaaee87375013b034a503",
        "__v": 0,
        "bag": 14,
        "burneable": true,
        "family": "",
        "icon": "66be8e380871e62657b9bb33",
        "minteable": true,
        "name": "Seven of Blues",
        "rarity": 3,
        "type": "card"
    },
    {
        "_id": "66baaaf987375013b034a51a",
        "__v": 0,
        "bag": 14,
        "burneable": true,
        "family": "",
        "icon": "66be91c50871e62657b9c28f",
        "minteable": true,
        "name": "Seven of Yellows",
        "rarity": 3,
        "type": "card"
    },
    {
        "_id": "66baab0387375013b034a531",
        "__v": 0,
        "bag": 14,
        "burneable": true,
        "family": "",
        "icon": "66be8f670871e62657b9bd89",
        "minteable": true,
        "name": "Seven of Greens",
        "rarity": 3,
        "type": "card"
    },
    {
        "_id": "66baab0f87375013b034a548",
        "__v": 0,
        "bag": 14,
        "burneable": true,
        "family": "",
        "icon": "66be8ed70871e62657b9bc58",
        "minteable": true,
        "name": "Seven of Browns",
        "rarity": 3,
        "type": "card"
    },
    {
        "_id": "66baab1b87375013b034a55f",
        "__v": 0,
        "bag": 14,
        "burneable": true,
        "family": "",
        "icon": "66be8ff60871e62657b9beca",
        "minteable": true,
        "name": "Seven of Purples",
        "rarity": 3,
        "type": "card"
    },
    {
        "_id": "66baab2587375013b034a576",
        "__v": 0,
        "bag": 14,
        "burneable": true,
        "family": "",
        "icon": "66be910c0871e62657b9c16a",
        "minteable": true,
        "name": "Seven of Whites",
        "rarity": 3,
        "type": "card"
    },
    {
        "_id": "66bb7e4487375013b0364757",
        "__v": 0,
        "bag": 2,
        "family": "",
        "icon": "66ba978787375013b034962e",
        "name": "Golden Shard II",
        "rarity": 1,
        "type": "shard"
    },
    {
        "_id": "66bb7ee787375013b03648ad",
        "__v": 0,
        "bag": 2,
        "family": "",
        "icon": "66ba97a087375013b0349657",
        "name": "Golden Ember II",
        "rarity": 1,
        "type": "ember"
    },
    {
        "_id": "66bb7f4387375013b0364951",
        "__v": 0,
        "bag": 2,
        "family": "",
        "icon": "67aa6867db9efc46981ccad5",
        "name": "Golden Essence II",
        "rarity": 1,
        "type": "soul"
    },
    {
        "_id": "66bbbeee87375013b0368614",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "66bcc6a287375013b038c56a",
        "minteable": true,
        "name": "Amber Guard Helm",
        "rarity": 1,
        "type": "Headgear"
    },
    {
        "_id": "66bbc3e287375013b0368c96",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "66bcc6c787375013b038c5b3",
        "minteable": true,
        "name": "Amber Guard Armor",
        "rarity": 1,
        "type": "Suits"
    },
    {
        "_id": "66bbc48987375013b0368cd3",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "66bcc6e387375013b038c5ee",
        "minteable": true,
        "name": "Amber Guard Spear",
        "rarity": 1,
        "type": "Weapon"
    },
    {
        "_id": "66bbc66087375013b0368d98",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "66bcc6f887375013b038c633",
        "minteable": true,
        "name": "Druid Crown",
        "rarity": 1,
        "type": "Headgear"
    },
    {
        "_id": "66bbc72187375013b0368db5",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "66bcc71087375013b038c68c",
        "minteable": true,
        "name": "Druid Vestments",
        "rarity": 1,
        "type": "Suits"
    },
    {
        "_id": "66bbc7be87375013b0368dd2",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "66bcc72187375013b038c6c9",
        "minteable": true,
        "name": "Druidic Staff",
        "rarity": 1,
        "type": "Weapon"
    },
    {
        "_id": "66bbc89e87375013b0368dec",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "66bcc73687375013b038c6fe",
        "minteable": true,
        "name": "Shadow Mask",
        "rarity": 0,
        "type": "Headgear"
    },
    {
        "_id": "66bbc98d87375013b0368ea2",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "66bcc74b87375013b038cedb",
        "minteable": true,
        "name": "Shadow Armor",
        "rarity": 0,
        "type": "Suits"
    },
    {
        "_id": "66bbcaaa87375013b0368ff0",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "66bcc75e87375013b038cf04",
        "minteable": true,
        "name": "Shadow Relic",
        "rarity": 0,
        "type": "Weapon"
    },
    {
        "_id": "66bbcb9187375013b036925a",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "6361612dc2284ba32e1bc367",
        "minteable": true,
        "name": "Volatile Gambit",
        "rarity": 0,
        "type": "Normal"
    },
    {
        "_id": "66bbcc2987375013b03692df",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "638665515c5c376fbbd4c5c5",
        "minteable": true,
        "name": "Wheel of Chaos",
        "rarity": 0,
        "type": "Normal"
    },
    {
        "_id": "66bbccbf87375013b036934e",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "63616114c2284ba32e1bc350",
        "minteable": true,
        "name": "Kinetic Transfer",
        "rarity": 0,
        "type": "Normal"
    },
    {
        "_id": "66bbcd5e87375013b036937e",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "6386652f5c5c376fbbd4c5af",
        "minteable": true,
        "name": "Fated Defiance",
        "rarity": 0,
        "type": "Normal"
    },
    {
        "_id": "66be389687375013b03adda5",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-08-15T17:19:18.436Z",
        "name": "WIN - EIZO I",
        "sprite": "None",
        "updated_at": "2024-08-15T17:19:18.436Z"
    },
    {
        "_id": "66be66570871e62657b91914",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-08-15T20:34:31.008Z",
        "name": "D-PYR-LEVER-KEY",
        "sprite": "None",
        "updated_at": "2024-08-15T20:34:31.008Z"
    },
    {
        "_id": "66be739c0871e62657b9443a",
        "__v": 0,
        "bag": 25,
        "created_at": "2024-08-15T21:31:08.850Z",
        "name": "PYR - Golden Vault Key",
        "sprite": "66b2a37a47fe62f0e089ff31",
        "updated_at": "2025-03-10T17:02:45.319Z"
    },
    {
        "_id": "66bee47b23323de565af8e32",
        "__v": 0,
        "bag": 12,
        "family": "",
        "journal_name": "Storm Hunter",
        "name": "Daily Quest #9",
        "rarity": 0,
        "region": [
            {
                "value": "64b01970d3d5ac314bfbbf17",
                "label": "HedgeWizardEncampment"
            }
        ],
        "state": 0,
        "type": "rumor"
    },
    {
        "_id": "66bf62ff0871e62657ba8ab2",
        "__v": 0,
        "bag": 25,
        "created_at": "2024-08-16T14:32:31.832Z",
        "name": "PYR - HONEY CRYSTAL",
        "sprite": "66cf4e589581d5c9600f2446",
        "updated_at": "2024-08-28T19:47:47.700Z"
    },
    {
        "_id": "66bf63200871e62657ba8ad3",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-08-16T14:33:04.786Z",
        "name": "D-PYR-COFFIN-KEY-A",
        "sprite": "None",
        "updated_at": "2024-08-16T14:33:04.786Z"
    },
    {
        "_id": "66bf63250871e62657ba8ae1",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-08-16T14:33:09.527Z",
        "name": "D-PYR-COFFIN-KEY-B",
        "sprite": "None",
        "updated_at": "2024-08-16T14:33:09.527Z"
    },
    {
        "_id": "66bf63280871e62657ba8aef",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-08-16T14:33:12.978Z",
        "name": "D-PYR-COFFIN-KEY-C",
        "sprite": "None",
        "updated_at": "2024-08-16T14:33:12.978Z"
    },
    {
        "_id": "66bf632e0871e62657ba8afd",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-08-16T14:33:18.201Z",
        "name": "D-PYR-COFFIN-KEY-D",
        "sprite": "None",
        "updated_at": "2024-08-16T14:33:18.201Z"
    },
    {
        "_id": "66bf63320871e62657ba8b0b",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-08-16T14:33:22.601Z",
        "name": "D-PYR-COFFIN-KEY-E",
        "sprite": "None",
        "updated_at": "2024-08-16T14:33:22.601Z"
    },
    {
        "_id": "66bf63350871e62657ba8b19",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-08-16T14:33:25.799Z",
        "name": "D-PYR-COFFIN-KEY-F",
        "sprite": "None",
        "updated_at": "2024-08-16T14:33:25.799Z"
    },
    {
        "_id": "66bf634d0871e62657ba8b5a",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-08-16T14:33:49.437Z",
        "name": "D-PYR-COFFIN-KEY-G",
        "sprite": "None",
        "updated_at": "2024-08-16T14:33:49.437Z"
    },
    {
        "_id": "66bf63500871e62657ba8b68",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-08-16T14:33:52.999Z",
        "name": "D-PYR-COFFIN-KEY-H",
        "sprite": "None",
        "updated_at": "2024-08-16T14:33:52.999Z"
    },
    {
        "_id": "66bf63540871e62657ba8b76",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-08-16T14:33:56.447Z",
        "name": "D-PYR-COFFIN-KEY-I",
        "sprite": "None",
        "updated_at": "2024-08-16T14:33:56.447Z"
    },
    {
        "_id": "66bf635e0871e62657ba8b84",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-08-16T14:34:06.230Z",
        "name": "D-PYR-COFFIN-KEY-J",
        "sprite": "None",
        "updated_at": "2024-08-16T14:34:06.230Z"
    },
    {
        "_id": "66bf63640871e62657ba8b92",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-08-16T14:34:12.265Z",
        "name": "D-PYR-COFFIN-KEY-K",
        "sprite": "None",
        "updated_at": "2024-08-16T14:34:12.265Z"
    },
    {
        "_id": "66bf63690871e62657ba8ba0",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-08-16T14:34:17.518Z",
        "name": "D-PYR-COFFIN-KEY-L",
        "sprite": "None",
        "updated_at": "2024-08-16T14:34:17.518Z"
    },
    {
        "_id": "66bf6e380871e62657bb947e",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-08-16T15:20:24.770Z",
        "name": "D-PYR-AMBER-KEY-A",
        "sprite": "None",
        "updated_at": "2024-08-16T15:20:24.770Z"
    },
    {
        "_id": "66bf6e450871e62657bb949a",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-08-16T15:20:37.739Z",
        "name": "D-PYR-AMBER-KEY-B",
        "sprite": "None",
        "updated_at": "2024-08-16T15:20:37.739Z"
    },
    {
        "_id": "66bf6e670871e62657bb973f",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-08-16T15:21:11.269Z",
        "name": "D-PYR-AMBER-KEY-C",
        "sprite": "None",
        "updated_at": "2024-08-16T15:21:11.269Z"
    },
    {
        "_id": "66bf6e6c0871e62657bb974d",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-08-16T15:21:16.552Z",
        "name": "D-PYR-AMBER-KEY-D",
        "sprite": "None",
        "updated_at": "2024-08-16T15:21:16.552Z"
    },
    {
        "_id": "66bf6e800871e62657bb98c6",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-08-16T15:21:36.695Z",
        "name": "D-PYR-AMBER-KEY-E",
        "sprite": "None",
        "updated_at": "2024-08-16T15:21:36.695Z"
    },
    {
        "_id": "66bf6e900871e62657bb9a6c",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-08-16T15:21:52.702Z",
        "name": "D-PYR-AMBER-KEY-F",
        "sprite": "None",
        "updated_at": "2024-08-16T15:21:52.702Z"
    },
    {
        "_id": "66bf6e9e0871e62657bb9c1d",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-08-16T15:22:06.044Z",
        "name": "D-PYR-AMBER-KEY-G",
        "sprite": "None",
        "updated_at": "2024-08-16T15:22:06.044Z"
    },
    {
        "_id": "66bf6ea50871e62657bb9c2b",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-08-16T15:22:13.856Z",
        "name": "D-PYR-AMBER-KEY-H",
        "sprite": "None",
        "updated_at": "2024-08-16T15:22:13.856Z"
    },
    {
        "_id": "66bf6eab0871e62657bb9c39",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-08-16T15:22:19.328Z",
        "name": "D-PYR-AMBER-KEY-I",
        "sprite": "None",
        "updated_at": "2024-08-16T15:22:19.328Z"
    },
    {
        "_id": "66bf6f140871e62657bb9d75",
        "__v": 0,
        "bag": 14,
        "burneable": true,
        "family": "",
        "icon": "66be94f50871e62657b9c2e1",
        "minteable": true,
        "name": "The Shadow Dotta",
        "rarity": 3,
        "type": "card"
    },
    {
        "_id": "66bf727f0871e62657bbbcb0",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-08-16T15:38:39.093Z",
        "name": "D-PYR-JUG-KEY-A",
        "sprite": "None",
        "updated_at": "2024-08-16T15:38:39.093Z"
    },
    {
        "_id": "66bf72a70871e62657bbbcbe",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-08-16T15:39:19.861Z",
        "name": "D-PYR-JUG-KEY-B",
        "sprite": "None",
        "updated_at": "2024-08-16T15:39:19.861Z"
    },
    {
        "_id": "66bf72aa0871e62657bbbccc",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-08-16T15:39:22.553Z",
        "name": "D-PYR-JUG-KEY-C",
        "sprite": "None",
        "updated_at": "2024-08-16T15:39:22.553Z"
    },
    {
        "_id": "66bf72ad0871e62657bbbcda",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-08-16T15:39:25.057Z",
        "name": "D-PYR-JUG-KEY-D",
        "sprite": "None",
        "updated_at": "2024-08-16T15:39:25.057Z"
    },
    {
        "_id": "66bf72af0871e62657bbbce8",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-08-16T15:39:27.702Z",
        "name": "D-PYR-JUG-KEY-E",
        "sprite": "None",
        "updated_at": "2024-08-16T15:39:27.702Z"
    },
    {
        "_id": "66bf72b20871e62657bbbcf6",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-08-16T15:39:30.018Z",
        "name": "D-PYR-JUG-KEY-F",
        "sprite": "None",
        "updated_at": "2024-08-16T15:39:30.018Z"
    },
    {
        "_id": "66bf72b40871e62657bbbd04",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-08-16T15:39:32.484Z",
        "name": "D-PYR-JUG-KEY-G",
        "sprite": "None",
        "updated_at": "2024-08-16T15:39:32.484Z"
    },
    {
        "_id": "66bf841b0871e62657bd9acc",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-08-16T16:53:47.237Z",
        "name": "D-PYR-TRAP-KEY-A",
        "sprite": "None",
        "updated_at": "2024-08-16T16:53:47.237Z"
    },
    {
        "_id": "66bf84280871e62657bd9ada",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-08-16T16:54:00.678Z",
        "name": "D-PYR-TRAP-KEY-B",
        "sprite": "None",
        "updated_at": "2024-08-16T16:54:00.678Z"
    },
    {
        "_id": "66bf842e0871e62657bd9af7",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-08-16T16:54:06.427Z",
        "name": "D-PYR-TRAP-KEY-C",
        "sprite": "None",
        "updated_at": "2024-08-16T16:54:06.427Z"
    },
    {
        "_id": "66bf84520871e62657bd9b0f",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-08-16T16:54:42.409Z",
        "name": "D-PYR-TRAP-KEY-D",
        "sprite": "None",
        "updated_at": "2024-08-16T16:54:42.409Z"
    },
    {
        "_id": "66bf88760871e62657bdce2f",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-08-16T17:12:22.891Z",
        "name": "D-PYR-TRAP-KEY-E",
        "sprite": "None",
        "updated_at": "2024-08-16T17:12:22.891Z"
    },
    {
        "_id": "66bf887e0871e62657bdce3d",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-08-16T17:12:30.598Z",
        "name": "D-PYR-TRAP-KEY-F",
        "sprite": "None",
        "updated_at": "2024-08-16T17:12:30.598Z"
    },
    {
        "_id": "66bf889e0871e62657bdce4b",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-08-16T17:13:02.166Z",
        "name": "D-PYR-TRAP-KEY-G",
        "sprite": "None",
        "updated_at": "2024-08-16T17:13:02.166Z"
    },
    {
        "_id": "66bf88a20871e62657bdce59",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-08-16T17:13:06.536Z",
        "name": "D-PYR-TRAP-KEY-H",
        "sprite": "None",
        "updated_at": "2024-08-16T17:13:06.536Z"
    },
    {
        "_id": "66bfae140871e62657bf1fb4",
        "__v": 0,
        "bag": 3,
        "burneable": false,
        "family": "",
        "hidden": false,
        "icon": "66bf85660871e62657bda06a",
        "minteable": true,
        "name": "Ronin Banner",
        "rarity": 3,
        "sub_type": "66a407b48678f3f706330770",
        "type": "Miscelaneous"
    },
    {
        "_id": "66bfae7c0871e62657bf23d3",
        "__v": 0,
        "bag": 3,
        "burneable": false,
        "family": "",
        "hidden": false,
        "icon": "66bf85400871e62657bd9efb",
        "minteable": true,
        "name": "V Banner",
        "rarity": 3,
        "sub_type": "66a407b48678f3f706330770",
        "type": "Miscelaneous"
    },
    {
        "_id": "66bfb1230871e62657bf41a7",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-08-16T20:05:55.241Z",
        "name": "D-PYR-ENTRYDOOR-KEY",
        "sprite": "None",
        "updated_at": "2024-08-16T20:05:55.241Z"
    },
    {
        "_id": "66bfb5150871e62657bf8ee4",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-08-16T20:22:45.386Z",
        "name": "D-PYR-JUG-KEY-H",
        "sprite": "None",
        "updated_at": "2024-08-16T20:22:45.386Z"
    },
    {
        "_id": "66bfb5190871e62657bf8ef2",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-08-16T20:22:49.518Z",
        "name": "D-PYR-JUG-KEY-I",
        "sprite": "None",
        "updated_at": "2024-08-16T20:22:49.518Z"
    },
    {
        "_id": "66bfb51e0871e62657bf8f00",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-08-16T20:22:54.782Z",
        "name": "D-PYR-JUG-KEY-J",
        "sprite": "None",
        "updated_at": "2024-08-16T20:22:54.782Z"
    },
    {
        "_id": "66bfb5220871e62657bf8f0e",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-08-16T20:22:58.481Z",
        "name": "D-PYR-JUG-KEY-K",
        "sprite": "None",
        "updated_at": "2024-08-16T20:22:58.481Z"
    },
    {
        "_id": "66bfb5250871e62657bf8f1c",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-08-16T20:23:01.764Z",
        "name": "D-PYR-JUG-KEY-L",
        "sprite": "None",
        "updated_at": "2024-08-16T20:23:01.764Z"
    },
    {
        "_id": "66bfb52d0871e62657bf8f2a",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-08-16T20:23:09.387Z",
        "name": "D-PYR-JUG-KEY-M",
        "sprite": "None",
        "updated_at": "2024-08-16T20:23:09.387Z"
    },
    {
        "_id": "66bfb5300871e62657bf8f4f",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-08-16T20:23:12.874Z",
        "name": "D-PYR-JUG-KEY-N",
        "sprite": "None",
        "updated_at": "2024-08-16T20:23:12.874Z"
    },
    {
        "_id": "66bfb5360871e62657bf8f5d",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-08-16T20:23:18.435Z",
        "name": "D-PYR-JUG-KEY-O",
        "sprite": "None",
        "updated_at": "2024-08-16T20:23:18.435Z"
    },
    {
        "_id": "66bfb53f0871e62657bf8f79",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-08-16T20:23:27.741Z",
        "name": "D-PYR-JUG-KEY-P",
        "sprite": "None",
        "updated_at": "2024-08-16T20:23:27.741Z"
    },
    {
        "_id": "66c34a0a4192e5e11efeb77c",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-08-19T13:35:06.697Z",
        "name": "D-PYR-VAULT-KEY-A",
        "sprite": "None",
        "updated_at": "2024-08-19T13:35:06.697Z"
    },
    {
        "_id": "66c34a104192e5e11efeb78a",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-08-19T13:35:12.331Z",
        "name": "D-PYR-VAULT-KEY-B",
        "sprite": "None",
        "updated_at": "2024-08-19T13:35:12.331Z"
    },
    {
        "_id": "66c34a134192e5e11efeb798",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-08-19T13:35:15.684Z",
        "name": "D-PYR-VAULT-KEY-C",
        "sprite": "None",
        "updated_at": "2024-08-19T13:35:15.684Z"
    },
    {
        "_id": "66c34a174192e5e11efeb7a6",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-08-19T13:35:19.264Z",
        "name": "D-PYR-VAULT-KEY-D",
        "sprite": "None",
        "updated_at": "2024-08-19T13:35:19.264Z"
    },
    {
        "_id": "66c34a1a4192e5e11efeb7b4",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-08-19T13:35:22.832Z",
        "name": "D-PYR-VAULT-KEY-E",
        "sprite": "None",
        "updated_at": "2024-08-19T13:35:22.832Z"
    },
    {
        "_id": "66c34a1f4192e5e11efeb7c2",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-08-19T13:35:27.253Z",
        "name": "D-PYR-VAULT-KEY-F",
        "sprite": "None",
        "updated_at": "2024-08-19T13:35:27.253Z"
    },
    {
        "_id": "66c34a224192e5e11efeb7d0",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-08-19T13:35:30.567Z",
        "name": "D-PYR-VAULT-KEY-G",
        "sprite": "None",
        "updated_at": "2024-08-19T13:35:30.567Z"
    },
    {
        "_id": "66c34f104192e5e11eff1272",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-08-19T13:56:32.080Z",
        "name": "D-PYR-FOUNTAIN-KEY",
        "sprite": "None",
        "updated_at": "2024-08-19T13:56:32.080Z"
    },
    {
        "_id": "66c4a3964192e5e11e02d271",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-08-20T14:09:26.417Z",
        "name": "D-PYR-MIRROR-KEY-1",
        "sprite": "None",
        "updated_at": "2024-09-01T22:38:45.736Z"
    },
    {
        "_id": "66c4fdfd4192e5e11e03e9f3",
        "__v": 0,
        "bag": 3,
        "burneable": false,
        "family": "",
        "hidden": false,
        "icon": "66bf851f0871e62657bd9ed1",
        "minteable": true,
        "name": "Moku Banner",
        "rarity": 3,
        "sub_type": "66a407b48678f3f706330770",
        "type": "Miscelaneous"
    },
    {
        "_id": "66c4ff494192e5e11e03ee9f",
        "__v": 0,
        "bag": 3,
        "burneable": false,
        "family": "",
        "hidden": false,
        "icon": "66bf85060871e62657bd9e88",
        "minteable": true,
        "name": "KIND Banner",
        "rarity": 3,
        "sub_type": "66a407b48678f3f706330770",
        "type": "Miscelaneous"
    },
    {
        "_id": "66c4ffb84192e5e11e03f2c9",
        "__v": 0,
        "bag": 3,
        "burneable": false,
        "family": "",
        "hidden": false,
        "icon": "66bf84e90871e62657bd9e4f",
        "minteable": true,
        "name": "BoodNation Banner",
        "rarity": 3,
        "sub_type": "66a407b48678f3f706330770",
        "type": "Miscelaneous"
    },
    {
        "_id": "66c500894192e5e11e040c89",
        "__v": 0,
        "bag": 3,
        "burneable": false,
        "family": "",
        "hidden": false,
        "icon": "66bfad370871e62657bf1e21",
        "minteable": true,
        "name": "Statue of the Generous",
        "rarity": 3,
        "sub_type": "66a407b48678f3f706330770",
        "type": "Art"
    },
    {
        "_id": "66c500e94192e5e11e04156e",
        "__v": 0,
        "bag": 3,
        "burneable": false,
        "family": "",
        "hidden": false,
        "icon": "66bfac9f0871e62657bf1c7f",
        "minteable": true,
        "name": "Idol of the Generous",
        "rarity": 3,
        "sub_type": "66a407b48678f3f706330770",
        "type": "Art"
    },
    {
        "_id": "66c5014d4192e5e11e041f06",
        "__v": 0,
        "bag": 3,
        "burneable": false,
        "family": "",
        "hidden": false,
        "icon": "66bfad640871e62657bf1e61",
        "minteable": true,
        "name": "Land Owner's Deed",
        "rarity": 3,
        "sub_type": "66a407b48678f3f706330770",
        "type": "Miscelaneous"
    },
    {
        "_id": "66c501be4192e5e11e04214e",
        "__v": 0,
        "bag": 3,
        "burneable": false,
        "family": "",
        "hidden": false,
        "icon": "66bfacf00871e62657bf1cb8",
        "minteable": true,
        "name": "Cloud Chair",
        "rarity": 3,
        "sub_type": "66a407b48678f3f706330770",
        "type": "Furniture"
    },
    {
        "_id": "66c603e34192e5e11e04fb76",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-08-21T15:12:35.041Z",
        "name": "D-WIN-A-EIZO-2",
        "sprite": "None",
        "updated_at": "2024-08-21T15:12:44.207Z"
    },
    {
        "_id": "66c66f65a5345ba667e79f68",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-08-21T22:51:17.230Z",
        "name": "EIZO-F-END-INTERACTION",
        "sprite": "None",
        "updated_at": "2024-08-21T22:51:17.230Z"
    },
    {
        "_id": "66c773afa5345ba667e869cf",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-08-22T17:21:51.984Z",
        "name": "D-PYR-CAPTAIN-A2",
        "sprite": "None",
        "updated_at": "2024-09-03T02:12:54.393Z"
    },
    {
        "_id": "66c77528a5345ba667e87b94",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-08-22T17:28:08.538Z",
        "name": "D-PYR-CAPTAIN-A3",
        "sprite": "None",
        "updated_at": "2024-09-03T02:13:02.836Z"
    },
    {
        "_id": "66c776d8a5345ba667e88bd4",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-08-22T17:35:20.784Z",
        "name": "D-PYR-CAPTAIN-A4",
        "sprite": "None",
        "updated_at": "2024-09-03T02:13:05.338Z"
    },
    {
        "_id": "66c776e4a5345ba667e88be2",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-08-22T17:35:32.876Z",
        "name": "D-PYR-CAPTAIN-Over",
        "sprite": "None",
        "updated_at": "2024-09-03T02:13:24.194Z"
    },
    {
        "_id": "66c7ab41a5345ba667ed2e5e",
        "__v": 0,
        "bag": 3,
        "burneable": false,
        "family": "",
        "hidden": false,
        "icon": "66c79b57a5345ba667ea8384",
        "minteable": true,
        "name": "Swan Figurine",
        "rarity": 1,
        "sub_type": "66a407658678f3f706330615",
        "type": "Art"
    },
    {
        "_id": "66c7d6e5a5345ba667ef6a8d",
        "__v": 0,
        "bag": 12,
        "family": "",
        "journal_name": "Swan Song",
        "name": "Plot Quest",
        "rarity": 0,
        "region": [
            {
                "value": "64b01970d3d5ac314bfbbf17",
                "label": "HedgeWizardEncampment"
            }
        ],
        "state": 0,
        "type": "rumor"
    },
    {
        "_id": "66c898cca5345ba667efb417",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-08-23T14:12:28.552Z",
        "name": "D-PYR-Archeologist-A2-Key",
        "sprite": "None",
        "updated_at": "2024-08-23T14:12:28.552Z"
    },
    {
        "_id": "66c898d3a5345ba667efb425",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-08-23T14:12:35.692Z",
        "name": "D-PYR-Archeologist-A3-Key",
        "sprite": "None",
        "updated_at": "2024-08-23T14:12:35.692Z"
    },
    {
        "_id": "66c898eca5345ba667efb433",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-08-23T14:13:00.472Z",
        "name": "D-PYR-Archeologist-A4-Key",
        "sprite": "None",
        "updated_at": "2024-08-23T14:47:46.925Z"
    },
    {
        "_id": "66c8aac4a5345ba667f07dbc",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-08-23T15:29:08.692Z",
        "name": "D-PYR-Archeologist-B1-Key",
        "sprite": "None",
        "updated_at": "2024-08-23T15:29:08.692Z"
    },
    {
        "_id": "66c8aacea5345ba667f07dca",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-08-23T15:29:18.559Z",
        "name": "D-PYR-Archeologist-B2-Key",
        "sprite": "None",
        "updated_at": "2024-08-23T15:29:18.559Z"
    },
    {
        "_id": "66c8d6d2cb2ae7406294a766",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-08-23T18:37:06.839Z",
        "name": "D-PYR-Archeologist-A5-Key",
        "sprite": "None",
        "updated_at": "2024-08-23T18:37:06.839Z"
    },
    {
        "_id": "66c8db67cb2ae74062950af6",
        "__v": 0,
        "bag": 25,
        "created_at": "2024-08-23T18:56:39.185Z",
        "name": "PYR - CYPHER",
        "sprite": "66cf4e299581d5c9600f23e4",
        "updated_at": "2024-08-28T19:47:39.637Z"
    },
    {
        "_id": "66c8eed4cb2ae74062958acf",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-08-23T20:19:32.214Z",
        "name": "D-PYR-TrappedWanderer-A-Key",
        "sprite": "None",
        "updated_at": "2024-08-23T20:19:32.214Z"
    },
    {
        "_id": "66c8eee1cb2ae74062958af6",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-08-23T20:19:45.362Z",
        "name": "D-PYR-TrappedWanderer-B-Key",
        "sprite": "None",
        "updated_at": "2024-08-23T20:19:45.362Z"
    },
    {
        "_id": "66c8eeebcb2ae74062958b04",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-08-23T20:19:55.116Z",
        "name": "D-PYR-TrappedWanderer-C-Key",
        "sprite": "None",
        "updated_at": "2024-08-23T20:19:55.116Z"
    },
    {
        "_id": "66c8eef8cb2ae74062958b30",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-08-23T20:20:08.348Z",
        "name": "D-PYR-TrappedWanderer-D-Key",
        "sprite": "None",
        "updated_at": "2024-08-23T20:20:08.348Z"
    },
    {
        "_id": "66c8f151cb2ae7406295e55b",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-08-23T20:30:09.669Z",
        "name": "D-PYR-TrappedWanderer-E-Key",
        "sprite": "None",
        "updated_at": "2024-08-23T20:30:09.669Z"
    },
    {
        "_id": "66c8f158cb2ae7406295e574",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-08-23T20:30:16.447Z",
        "name": "D-PYR-TrappedWanderer-F-Key",
        "sprite": "None",
        "updated_at": "2024-08-23T20:30:16.447Z"
    },
    {
        "_id": "66cde191325f02f8bd8f9d80",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-08-27T14:24:17.165Z",
        "name": "D-PYR-FREEWANDERER-KEY",
        "sprite": "None",
        "updated_at": "2024-08-27T14:24:17.165Z"
    },
    {
        "_id": "66cde311325f02f8bd8fa170",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-08-27T14:30:41.783Z",
        "name": "D-PYR-FREED-A-KEY",
        "sprite": "None",
        "updated_at": "2024-08-27T14:30:41.783Z"
    },
    {
        "_id": "66cde320325f02f8bd8fa17e",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-08-27T14:30:56.315Z",
        "name": "D-PYR-FREED-B-KEY",
        "sprite": "None",
        "updated_at": "2024-08-27T14:30:56.315Z"
    },
    {
        "_id": "66cde327325f02f8bd8fa18c",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-08-27T14:31:03.222Z",
        "name": "D-PYR-FREED-C-KEY",
        "sprite": "None",
        "updated_at": "2024-08-27T14:31:03.222Z"
    },
    {
        "_id": "66cde32d325f02f8bd8fa19a",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-08-27T14:31:09.483Z",
        "name": "D-PYR-FREED-D-KEY",
        "sprite": "None",
        "updated_at": "2024-08-27T14:31:09.483Z"
    },
    {
        "_id": "66cde332325f02f8bd8fa1a8",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-08-27T14:31:14.636Z",
        "name": "D-PYR-FREED-E-KEY",
        "sprite": "None",
        "updated_at": "2024-08-27T14:31:14.636Z"
    },
    {
        "_id": "66cde33f325f02f8bd8fa1b6",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-08-27T14:31:27.392Z",
        "name": "D-PYR-FREED-F-KEY",
        "sprite": "None",
        "updated_at": "2024-08-27T14:31:27.392Z"
    },
    {
        "_id": "66cdead1325f02f8bd8ffaa2",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-08-27T15:03:45.385Z",
        "name": "D-PYR-CYPHER-KEY",
        "sprite": "None",
        "updated_at": "2024-08-27T15:03:45.385Z"
    },
    {
        "_id": "66cdedc3325f02f8bd90110b",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-08-27T15:16:19.697Z",
        "name": "D-PYR-CLAYQUEEN-A-KEY",
        "sprite": "None",
        "updated_at": "2024-08-27T15:16:19.697Z"
    },
    {
        "_id": "66cdedd3325f02f8bd90111b",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-08-27T15:16:35.865Z",
        "name": "D-PYR-CLAYQUEEN-B-KEY",
        "sprite": "None",
        "updated_at": "2024-08-27T15:16:35.865Z"
    },
    {
        "_id": "66ce34f6325f02f8bd91ce19",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-08-27T20:20:06.630Z",
        "name": "D-PYR-VAULT-KEY-H",
        "sprite": "None",
        "updated_at": "2024-08-27T20:20:06.630Z"
    },
    {
        "_id": "66ce34f9325f02f8bd91ce27",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-08-27T20:20:09.745Z",
        "name": "D-PYR-VAULT-KEY-I",
        "sprite": "None",
        "updated_at": "2024-08-27T20:20:09.745Z"
    },
    {
        "_id": "66ce34fd325f02f8bd91ce35",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-08-27T20:20:13.538Z",
        "name": "D-PYR-VAULT-KEY-J",
        "sprite": "None",
        "updated_at": "2024-08-27T20:20:13.538Z"
    },
    {
        "_id": "66cf41229581d5c9600d6d85",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-08-28T15:24:18.471Z",
        "name": "D-PYR-SPECTRE-KEY",
        "sprite": "None",
        "updated_at": "2024-08-28T15:24:18.471Z"
    },
    {
        "_id": "66cf43c79581d5c9600dd201",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-08-28T15:35:35.729Z",
        "name": "D-PYR-FALLEN-KEY",
        "sprite": "None",
        "updated_at": "2024-08-28T15:35:35.729Z"
    },
    {
        "_id": "66cfa8f79581d5c960129e78",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-08-28T22:47:19.701Z",
        "name": "D-PYR-GOLDEN-KEY",
        "sprite": "None",
        "updated_at": "2024-08-28T22:47:19.701Z"
    },
    {
        "_id": "66d089995611eb6657533df0",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-08-29T14:45:45.582Z",
        "name": "D-PYR-MAZE-KEY",
        "sprite": "None",
        "updated_at": "2024-08-29T14:45:45.582Z"
    },
    {
        "_id": "66d0e4195611eb665756d6ac",
        "__v": 0,
        "bag": 25,
        "created_at": "2024-08-29T21:11:53.029Z",
        "name": "PYR - Radiant Elixir",
        "sprite": "66d0eb2b5611eb6657576ad7",
        "updated_at": "2024-08-29T21:43:59.250Z"
    },
    {
        "_id": "66d1e5265611eb665759edfa",
        "__v": 0,
        "bag": 3,
        "burneable": false,
        "family": "",
        "hidden": false,
        "icon": "63616114c2284ba32e1bc350",
        "minteable": false,
        "name": "Nuke",
        "rarity": 3,
        "type": "Normal"
    },
    {
        "_id": "66d20fab5611eb66575c0503",
        "__v": 0,
        "bag": 2,
        "family": "",
        "icon": "66d0eb2b5611eb6657576ad7",
        "name": "Radiant Elixir",
        "rarity": 3,
        "type": "soul"
    },
    {
        "_id": "66d3b0ad2eb55a13f027727c",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-09-01T00:09:17.775Z",
        "name": "D-PYR-QUEENVAULT",
        "sprite": "None",
        "updated_at": "2024-09-01T00:09:17.775Z"
    },
    {
        "_id": "66d4ecf72eb55a13f0292c59",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-09-01T22:38:47.438Z",
        "name": "D-PYR-MIRROR-KEY-2",
        "sprite": "None",
        "updated_at": "2024-09-01T22:38:47.438Z"
    },
    {
        "_id": "66d87c392eb55a13f03ab34d",
        "__v": 0,
        "bag": 3,
        "burneable": false,
        "family": "",
        "icon": "6361612dc2284ba32e1bc367",
        "minteable": false,
        "name": "No delay fist test",
        "rarity": 0,
        "type": "Normal"
    },
    {
        "_id": "66d87c6c2eb55a13f03ab364",
        "__v": 0,
        "bag": 3,
        "burneable": false,
        "family": "",
        "icon": "6361612dc2284ba32e1bc367",
        "minteable": false,
        "name": "Delay fist test",
        "rarity": 0,
        "type": "Normal"
    },
    {
        "_id": "66d88fe02eb55a13f03ab833",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "67afc74f5c75aee0bc06eea1",
        "minteable": true,
        "name": "Arctic Vortex",
        "rarity": 1,
        "type": "High"
    },
    {
        "_id": "66d8902b2eb55a13f03ab86e",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "67afc74f5c75aee0bc06eea1",
        "minteable": true,
        "name": "Fortunate Blizzard",
        "rarity": 1,
        "type": "High"
    },
    {
        "_id": "66d890682eb55a13f03ab8a9",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "67afc74f5c75aee0bc06eea1",
        "minteable": true,
        "name": "Shattering Pallisade",
        "rarity": 1,
        "type": "High"
    },
    {
        "_id": "66d8909d2eb55a13f03ab8c0",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "67afc6e75c75aee0bc06ed90",
        "minteable": true,
        "name": "Piercing Hail",
        "rarity": 1,
        "type": "HighCantrip"
    },
    {
        "_id": "66d890d92eb55a13f03ab949",
        "__v": 0,
        "bag": 3,
        "burneable": false,
        "family": "",
        "icon": "6386652f5c5c376fbbd4c5af",
        "minteable": false,
        "name": "TEST Inflictor",
        "rarity": 0,
        "type": "Normal"
    },
    {
        "_id": "66d897c92eb55a13f03abf34",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "67afc7315c75aee0bc06ee7a",
        "minteable": true,
        "name": "Empowerment Sigil",
        "rarity": 1,
        "type": "HighCantrip"
    },
    {
        "_id": "66d898432eb55a13f03abf4b",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "67afc7945c75aee0bc06ef8b",
        "minteable": true,
        "name": "Forever Young",
        "rarity": 1,
        "type": "High"
    },
    {
        "_id": "66d89e402eb55a13f03ac37b",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "67afc77a5c75aee0bc06ef3d",
        "minteable": true,
        "name": "Heat Up!",
        "rarity": 1,
        "type": "High"
    },
    {
        "_id": "66d89e6c2eb55a13f03ac392",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "67afc71b5c75aee0bc06ee2c",
        "minteable": true,
        "name": "Ignition Fist",
        "rarity": 1,
        "type": "HighCantrip"
    },
    {
        "_id": "66d89e982eb55a13f03ac3b3",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "67afc77a5c75aee0bc06ef3d",
        "minteable": true,
        "name": "Flaming Barrage",
        "rarity": 1,
        "type": "High"
    },
    {
        "_id": "66d89ec92eb55a13f03ac3ee",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "67afc77a5c75aee0bc06ef3d",
        "minteable": true,
        "name": "Blazing Presence",
        "rarity": 1,
        "type": "High"
    },
    {
        "_id": "66d89f0d2eb55a13f03ac42f",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "67afc71b5c75aee0bc06ee2c",
        "minteable": true,
        "name": "Personal Heat Shield",
        "rarity": 1,
        "type": "HighCantrip"
    },
    {
        "_id": "66d89f342eb55a13f03ac446",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "67afc77a5c75aee0bc06ef3d",
        "minteable": true,
        "name": "Tactical Striker",
        "rarity": 1,
        "type": "High"
    },
    {
        "_id": "66d89f662eb55a13f03ac45d",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "67afc77a5c75aee0bc06ef3d",
        "minteable": true,
        "name": "Heat Shield Overload",
        "rarity": 1,
        "type": "High"
    },
    {
        "_id": "66d89fb82eb55a13f03ac474",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "67afc77a5c75aee0bc06ef3d",
        "minteable": true,
        "name": "Modulation Grenade",
        "rarity": 1,
        "type": "High"
    },
    {
        "_id": "66df6931c9d961ccfbbfae1e",
        "__v": 0,
        "bag": 14,
        "burneable": true,
        "family": "",
        "icon": "66df7d2dc9d961ccfbbfb3b5",
        "minteable": true,
        "name": "Scalebound Chest",
        "rarity": 3,
        "type": "card"
    },
    {
        "_id": "66e04c69c9d961ccfbbfc448",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "67afc7945c75aee0bc06ef8b",
        "minteable": true,
        "name": "Harmonic Resonance",
        "rarity": 1,
        "type": "High"
    },
    {
        "_id": "66e04c96c9d961ccfbbfc45f",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "67afc7945c75aee0bc06ef8b",
        "minteable": true,
        "name": "Rejuvenating Aura",
        "rarity": 1,
        "type": "High"
    },
    {
        "_id": "66e04d03c9d961ccfbbfc4c9",
        "__v": 0,
        "bag": 3,
        "burneable": false,
        "family": "",
        "icon": "63644900d22c16e85b821712",
        "minteable": false,
        "name": "AFFIX TEST",
        "rarity": 0,
        "type": "Weapon"
    },
    {
        "_id": "66e84c2cc9d961ccfbc0b3c3",
        "__v": 0,
        "bag": 25,
        "created_at": "2024-09-16T15:18:04.736Z",
        "name": "HOL-CorruptedSolvent",
        "sprite": "678af35b353f07a47b545918",
        "updated_at": "2025-02-05T17:43:35.031Z"
    },
    {
        "_id": "66e84d4dc9d961ccfbc0b454",
        "__v": 0,
        "bag": 25,
        "created_at": "2024-09-16T15:22:53.857Z",
        "name": "HOL-RuneAxe",
        "sprite": "678af33b353f07a47b5458b6",
        "updated_at": "2025-02-05T17:43:04.418Z"
    },
    {
        "_id": "66e84d93c9d961ccfbc0b475",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-09-16T15:24:03.747Z",
        "name": "D-HOL-WEBS-A-OVER",
        "sprite": "None",
        "updated_at": "2024-09-16T15:25:17.414Z"
    },
    {
        "_id": "66e85bf6c9d961ccfbc0c809",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-09-16T16:25:26.409Z",
        "name": "D-HOL-RUNEAXE-KEY",
        "sprite": "None",
        "updated_at": "2024-09-16T16:25:26.409Z"
    },
    {
        "_id": "66e85c08c9d961ccfbc0c817",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-09-16T16:25:44.085Z",
        "name": "D-HOL-SOLVENT-KEY",
        "sprite": "None",
        "updated_at": "2024-09-16T16:25:44.085Z"
    },
    {
        "_id": "66e85e86c9d961ccfbc0d6b5",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-09-16T16:36:22.640Z",
        "name": "HOL-ROOTS-A-OVER",
        "sprite": "None",
        "updated_at": "2024-09-25T17:05:47.325Z"
    },
    {
        "_id": "66eb3a14c9d961ccfbc198aa",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-09-18T20:37:40.960Z",
        "name": "HOL-FOUNTAIN-A-KEY",
        "sprite": "None",
        "updated_at": "2024-09-18T20:37:40.960Z"
    },
    {
        "_id": "66eb3a72c9d961ccfbc198db",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-09-18T20:39:14.415Z",
        "name": "HOL-CLEANFOUNTAIN-A2",
        "sprite": "None",
        "updated_at": "2024-09-18T20:39:14.415Z"
    },
    {
        "_id": "66eb3a83c9d961ccfbc198e9",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-09-18T20:39:31.945Z",
        "name": "HOL-CLEANFOUNTAIN-A3",
        "sprite": "None",
        "updated_at": "2024-09-18T20:39:31.945Z"
    },
    {
        "_id": "66eb4e47c9d961ccfbc1e6e8",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-09-18T22:03:51.339Z",
        "name": "HOL-STASH-A-KEY",
        "sprite": "None",
        "updated_at": "2024-09-18T22:03:51.339Z"
    },
    {
        "_id": "66f2d80ac9d961ccfbc2a87b",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-09-24T15:17:30.510Z",
        "name": "D-HOL-WEBS-B-OVER",
        "sprite": "None",
        "updated_at": "2024-09-24T15:17:30.510Z"
    },
    {
        "_id": "66f2dc9fc9d961ccfbc2a88b",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-09-24T15:37:03.055Z",
        "name": "D-HOL-WEBS-C-OVER",
        "sprite": "None",
        "updated_at": "2024-09-24T15:37:03.055Z"
    },
    {
        "_id": "66f2dca6c9d961ccfbc2a897",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-09-24T15:37:10.263Z",
        "name": "D-HOL-WEBS-D-OVER",
        "sprite": "None",
        "updated_at": "2024-09-24T15:37:10.263Z"
    },
    {
        "_id": "66f2dcaec9d961ccfbc2a8a5",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-09-24T15:37:18.814Z",
        "name": "D-HOL-WEBS-E-OVER",
        "sprite": "None",
        "updated_at": "2024-09-24T15:37:18.814Z"
    },
    {
        "_id": "66f2dcb7c9d961ccfbc2a8b3",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-09-24T15:37:27.699Z",
        "name": "D-HOL-WEBS-F-OVER",
        "sprite": "None",
        "updated_at": "2024-09-24T15:37:27.699Z"
    },
    {
        "_id": "66f4430cc9d961ccfbc36096",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-09-25T17:06:20.206Z",
        "name": "HOL-ROOTS-B-OVER",
        "sprite": "None",
        "updated_at": "2024-09-25T17:06:20.206Z"
    },
    {
        "_id": "66f44359c9d961ccfbc360ac",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-09-25T17:07:37.024Z",
        "name": "HOL-ROOTS-C-OVER",
        "sprite": "None",
        "updated_at": "2024-09-25T17:07:37.024Z"
    },
    {
        "_id": "66f44360c9d961ccfbc360c3",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-09-25T17:07:44.631Z",
        "name": "HOL-ROOTS-D-OVER",
        "sprite": "None",
        "updated_at": "2024-09-25T17:07:44.631Z"
    },
    {
        "_id": "66f4436ac9d961ccfbc360cf",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-09-25T17:07:54.564Z",
        "name": "HOL-ROOTS-E-OVER",
        "sprite": "None",
        "updated_at": "2024-09-25T17:07:54.564Z"
    },
    {
        "_id": "66f4437ac9d961ccfbc360dd",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-09-25T17:08:10.479Z",
        "name": "HOL-ROOTS-F-OVER",
        "sprite": "None",
        "updated_at": "2024-09-25T17:08:10.479Z"
    },
    {
        "_id": "66f462e3c9d961ccfbc406ad",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-09-25T19:22:11.317Z",
        "name": "HOL-FOUNTAIN-B-KEY",
        "sprite": "None",
        "updated_at": "2024-09-25T19:22:11.317Z"
    },
    {
        "_id": "66f462e9c9d961ccfbc406ba",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-09-25T19:22:17.750Z",
        "name": "HOL-FOUNTAIN-C-KEY",
        "sprite": "None",
        "updated_at": "2024-09-25T19:22:17.750Z"
    },
    {
        "_id": "66f462f4c9d961ccfbc406c8",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-09-25T19:22:28.403Z",
        "name": "HOL-CLEANFOUNTAIN-B2",
        "sprite": "None",
        "updated_at": "2024-09-25T19:22:28.403Z"
    },
    {
        "_id": "66f462fac9d961ccfbc406d6",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-09-25T19:22:34.381Z",
        "name": "HOL-CLEANFOUNTAIN-B3",
        "sprite": "None",
        "updated_at": "2024-09-25T19:22:34.381Z"
    },
    {
        "_id": "66f46302c9d961ccfbc406e4",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-09-25T19:22:42.335Z",
        "name": "HOL-CLEANFOUNTAIN-C2",
        "sprite": "None",
        "updated_at": "2024-09-25T19:22:42.335Z"
    },
    {
        "_id": "66f46309c9d961ccfbc406f2",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-09-25T19:22:49.541Z",
        "name": "HOL-CLEANFOUNTAIN-C3",
        "sprite": "None",
        "updated_at": "2024-09-25T19:22:49.541Z"
    },
    {
        "_id": "66f46f35c9d961ccfbc46a4e",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-09-25T20:14:45.250Z",
        "name": "HOL-HEDGEWIZ-A2",
        "sprite": "None",
        "updated_at": "2024-09-25T20:14:45.250Z"
    },
    {
        "_id": "66f496a2c9d961ccfbc54077",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-09-25T23:02:58.164Z",
        "name": "HOL-HEDGEWIZ-B2",
        "sprite": "None",
        "updated_at": "2024-09-25T23:02:58.164Z"
    },
    {
        "_id": "66f5b07bc9d961ccfbc6d25f",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-09-26T19:05:31.132Z",
        "name": "HOL-BEETLE-OVER",
        "sprite": "None",
        "updated_at": "2024-09-26T19:05:31.132Z"
    },
    {
        "_id": "66f5b112c9d961ccfbc6d26d",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-09-26T19:08:02.124Z",
        "name": "HOL-MANTIS-OVER",
        "sprite": "None",
        "updated_at": "2024-09-26T19:08:02.124Z"
    },
    {
        "_id": "66f5ba7cc9d961ccfbc78c5e",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-09-26T19:48:12.050Z",
        "name": "HOL-HANDCULTIST-B-OVER",
        "sprite": "None",
        "updated_at": "2024-09-26T19:48:12.050Z"
    },
    {
        "_id": "66f5ba8ac9d961ccfbc791c2",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-09-26T19:48:26.899Z",
        "name": "HOL-HANDCULTIST-C-OVER",
        "sprite": "None",
        "updated_at": "2024-09-26T19:48:26.899Z"
    },
    {
        "_id": "66f6dd8dc9d961ccfbc97722",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-09-27T16:30:05.359Z",
        "name": "HOL-HANDWIZ-A-OVER",
        "sprite": "None",
        "updated_at": "2024-09-27T16:30:05.359Z"
    },
    {
        "_id": "66f70b3cc9d961ccfbcaeae7",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-09-27T19:45:00.465Z",
        "name": "HOL-STASH-B-KEY",
        "sprite": "None",
        "updated_at": "2024-09-27T19:45:00.465Z"
    },
    {
        "_id": "66f70b44c9d961ccfbcaeaf5",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-09-27T19:45:08.192Z",
        "name": "HOL-STASH-C-KEY",
        "sprite": "None",
        "updated_at": "2024-09-27T19:45:08.192Z"
    },
    {
        "_id": "66f70b68c9d961ccfbcaeb03",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-09-27T19:45:44.399Z",
        "name": "HOL-STASH-D-KEY",
        "sprite": "None",
        "updated_at": "2024-09-27T19:45:44.399Z"
    },
    {
        "_id": "66f70b79c9d961ccfbcaeb23",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-09-27T19:46:01.067Z",
        "name": "HOL-STASH-E-KEY",
        "sprite": "None",
        "updated_at": "2024-09-27T19:46:01.067Z"
    },
    {
        "_id": "66f70b81c9d961ccfbcaeb43",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-09-27T19:46:09.368Z",
        "name": "HOL-STASH-F-KEY",
        "sprite": "None",
        "updated_at": "2024-09-27T19:46:09.368Z"
    },
    {
        "_id": "66f73455c9d961ccfbcbe3d9",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-09-27T22:40:21.052Z",
        "name": "HOL-CHEST-A-KEY",
        "sprite": "None",
        "updated_at": "2024-09-27T22:40:21.052Z"
    },
    {
        "_id": "66f70e9fc9d961ccfbcb00fe",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-09-27T19:59:27.240Z",
        "name": "D-HOL-CHASM-A-KEY",
        "sprite": "None",
        "updated_at": "2024-09-27T19:59:27.240Z"
    },
    {
        "_id": "66f7345dc9d961ccfbcbe3e7",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-09-27T22:40:29.856Z",
        "name": "HOL-CHEST-B-KEY",
        "sprite": "None",
        "updated_at": "2024-09-27T22:40:29.856Z"
    },
    {
        "_id": "66faf1acc9d961ccfbcd09fd",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-09-30T18:45:00.732Z",
        "name": "HOL-BAG-A-KEY",
        "sprite": "None",
        "updated_at": "2024-09-30T18:45:00.732Z"
    },
    {
        "_id": "66faf1bcc9d961ccfbcd0a0c",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-09-30T18:45:16.104Z",
        "name": "HOL-BAG-B-KEY",
        "sprite": "None",
        "updated_at": "2024-09-30T18:45:16.104Z"
    },
    {
        "_id": "66faf1bfc9d961ccfbcd0a1a",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-09-30T18:45:19.981Z",
        "name": "HOL-BAG-C-KEY",
        "sprite": "None",
        "updated_at": "2024-09-30T18:45:19.981Z"
    },
    {
        "_id": "66faf1c4c9d961ccfbcd0a28",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-09-30T18:45:24.880Z",
        "name": "HOL-BAG-D-KEY",
        "sprite": "None",
        "updated_at": "2024-09-30T18:45:24.880Z"
    },
    {
        "_id": "66faf1c9c9d961ccfbcd0a36",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-09-30T18:45:29.300Z",
        "name": "HOL-BAG-E-KEY",
        "sprite": "None",
        "updated_at": "2024-09-30T18:45:29.300Z"
    },
    {
        "_id": "66faf1cdc9d961ccfbcd0a44",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-09-30T18:45:33.454Z",
        "name": "HOL-BAG-F-KEY",
        "sprite": "None",
        "updated_at": "2024-09-30T18:45:33.454Z"
    },
    {
        "_id": "66faf1d1c9d961ccfbcd0a52",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-09-30T18:45:37.964Z",
        "name": "HOL-BAG-G-KEY",
        "sprite": "None",
        "updated_at": "2024-09-30T18:45:37.964Z"
    },
    {
        "_id": "66faf1d7c9d961ccfbcd0a60",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-09-30T18:45:43.172Z",
        "name": "HOL-BAG-H-KEY",
        "sprite": "None",
        "updated_at": "2024-09-30T18:45:43.172Z"
    },
    {
        "_id": "66faf547c9d961ccfbcd91a5",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-09-30T19:00:23.480Z",
        "name": "HOL-BAG-I-KEY",
        "sprite": "None",
        "updated_at": "2024-09-30T19:00:23.480Z"
    },
    {
        "_id": "66faf89fc9d961ccfbce4343",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-09-30T19:14:39.381Z",
        "name": "HOL-BAG-J-KEY",
        "sprite": "None",
        "updated_at": "2024-09-30T19:14:39.381Z"
    },
    {
        "_id": "66faf8a5c9d961ccfbce4351",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-09-30T19:14:45.474Z",
        "name": "HOL-BAG-K-KEY",
        "sprite": "None",
        "updated_at": "2024-09-30T19:14:45.474Z"
    },
    {
        "_id": "66faf8aac9d961ccfbce435e",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-09-30T19:14:50.091Z",
        "name": "HOL-BAG-L-KEY",
        "sprite": "None",
        "updated_at": "2024-09-30T19:14:50.091Z"
    },
    {
        "_id": "66faf8c1c9d961ccfbce436d",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-09-30T19:15:13.833Z",
        "name": "HOL-BAG-M-KEY",
        "sprite": "None",
        "updated_at": "2024-09-30T19:15:13.833Z"
    },
    {
        "_id": "66fd6427c9d961ccfbcf78d9",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-10-02T15:17:59.517Z",
        "name": "CRB-HELPER-A2-KEY",
        "sprite": "None",
        "updated_at": "2024-10-02T15:17:59.517Z"
    },
    {
        "_id": "66fd6434c9d961ccfbcf78e7",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-10-02T15:18:12.310Z",
        "name": "CRB-CORRUPTDEVOTEE-OVER",
        "sprite": "None",
        "updated_at": "2024-10-02T15:18:12.310Z"
    },
    {
        "_id": "66fd6456c9d961ccfbcf7903",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-10-02T15:18:46.698Z",
        "name": "CRB-SAFERUNE-A",
        "sprite": "None",
        "updated_at": "2024-10-02T15:18:46.698Z"
    },
    {
        "_id": "66fd6442c9d961ccfbcf78f5",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-10-02T15:18:26.277Z",
        "name": "CRB-WATERFALL-A-KEY",
        "sprite": "None",
        "updated_at": "2024-10-02T15:18:26.277Z"
    },
    {
        "_id": "66fd6464c9d961ccfbcf7910",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-10-02T15:19:00.638Z",
        "name": "CRB-DANGERRUNE-A",
        "sprite": "None",
        "updated_at": "2024-10-02T15:19:00.638Z"
    },
    {
        "_id": "66fd8452c9d961ccfbd13181",
        "__v": 0,
        "bag": 25,
        "created_at": "2024-10-02T17:35:14.709Z",
        "name": "CRB-Solution",
        "sprite": "678af273353f07a47b545821",
        "updated_at": "2025-02-05T17:49:32.749Z"
    },
    {
        "_id": "66fd9106c9d961ccfbd1d2b7",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-10-02T18:29:26.281Z",
        "name": "CRB-WATERFALL-B-KEY",
        "sprite": "None",
        "updated_at": "2024-10-02T18:29:26.281Z"
    },
    {
        "_id": "66fd910dc9d961ccfbd1d2c5",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-10-02T18:29:33.642Z",
        "name": "CRB-WATERFALL-C-KEY",
        "sprite": "None",
        "updated_at": "2024-10-02T18:29:33.642Z"
    },
    {
        "_id": "66fd9111c9d961ccfbd1d2d3",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-10-02T18:29:37.943Z",
        "name": "CRB-WATERFALL-D-KEY",
        "sprite": "None",
        "updated_at": "2024-10-02T18:29:37.943Z"
    },
    {
        "_id": "66fef218c9d961ccfbd405a9",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-10-03T19:35:52.874Z",
        "name": "CRB-TOPPLE-A2-KEY",
        "sprite": "None",
        "updated_at": "2024-10-03T19:35:52.874Z"
    },
    {
        "_id": "66fef21dc9d961ccfbd405b7",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-10-03T19:35:57.735Z",
        "name": "CRB-TOPPLE-A3-KEY",
        "sprite": "None",
        "updated_at": "2024-10-03T19:35:57.735Z"
    },
    {
        "_id": "66fef224c9d961ccfbd405c5",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-10-03T19:36:04.485Z",
        "name": "CRB-STANDING-A-KEY",
        "sprite": "None",
        "updated_at": "2024-10-03T19:36:04.485Z"
    },
    {
        "_id": "67002372c9d961ccfbd5c678",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-10-04T17:18:42.325Z",
        "name": "CBR-CHEST-A-KEY",
        "sprite": "None",
        "updated_at": "2024-10-04T17:18:42.325Z"
    },
    {
        "_id": "67002425c9d961ccfbd5e7b2",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-10-04T17:21:41.501Z",
        "name": "CRB-DARKWATER-A-KEY",
        "sprite": "None",
        "updated_at": "2024-10-04T17:21:41.501Z"
    },
    {
        "_id": "67004104c9d961ccfbd6f258",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-10-04T19:24:52.523Z",
        "name": "CRB-SOULPONY-4-KEY",
        "sprite": "None",
        "updated_at": "2024-10-04T19:24:52.523Z"
    },
    {
        "_id": "6700201dc9d961ccfbd58d99",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-10-04T17:04:29.109Z",
        "name": "CRB-LEVER-A-KEY",
        "sprite": "None",
        "updated_at": "2024-10-04T17:04:29.109Z"
    },
    {
        "_id": "6700410ac9d961ccfbd6f265",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-10-04T19:24:58.367Z",
        "name": "CRB-SOULPONY-5-KEY",
        "sprite": "None",
        "updated_at": "2024-10-04T19:24:58.367Z"
    },
    {
        "_id": "6700416fc9d961ccfbd6f86b",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-10-04T19:26:39.478Z",
        "name": "CRB-LEVER-B-KEY",
        "sprite": "None",
        "updated_at": "2024-10-04T19:26:39.478Z"
    },
    {
        "_id": "67005dffc9d961ccfbd79a39",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-10-04T21:28:31.859Z",
        "name": "CBR-CHEST-B-KEY",
        "sprite": "None",
        "updated_at": "2024-10-04T21:28:31.859Z"
    },
    {
        "_id": "67005e04c9d961ccfbd79a47",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-10-04T21:28:36.587Z",
        "name": "CBR-CHEST-C-KEY",
        "sprite": "None",
        "updated_at": "2024-10-04T21:28:36.587Z"
    },
    {
        "_id": "6703e785c9d961ccfbd90c92",
        "__v": 0,
        "bag": 12,
        "family": "",
        "journal_name": "Mining Rights",
        "name": "R-MiningRights-MIR",
        "rarity": 0,
        "region": [
            {
                "value": "64b01970d3d5ac314bfbbf17",
                "label": "HedgeWizardEncampment"
            }
        ],
        "state": 0,
        "type": "rumor"
    },
    {
        "_id": "6703ec52c9d961ccfbd91aec",
        "__v": 0,
        "bag": 12,
        "family": "",
        "journal_name": "The Gathering Tree",
        "name": "R-TheGatheringTree-TGT",
        "rarity": 0,
        "region": [
            {
                "value": "64b01970d3d5ac314bfbbf17",
                "label": "HedgeWizardEncampment"
            }
        ],
        "state": -2,
        "type": "rumor"
    },
    {
        "_id": "6703ec93c9d961ccfbd91e97",
        "__v": 0,
        "bag": 12,
        "family": "",
        "journal_name": "Sparks Of Innovation",
        "name": "R-SparksOfInnovation-SOI",
        "rarity": 0,
        "region": [
            {
                "value": "64b01970d3d5ac314bfbbf17",
                "label": "HedgeWizardEncampment"
            }
        ],
        "state": -2,
        "type": "rumor"
    },
    {
        "_id": "6703ecd4c9d961ccfbd920e3",
        "__v": 0,
        "bag": 12,
        "family": "",
        "journal_name": "The Fairies' Playground",
        "name": "R-TheFairiesPlayground-TFP",
        "rarity": 0,
        "region": [
            {
                "value": "64b01970d3d5ac314bfbbf17",
                "label": "HedgeWizardEncampment"
            }
        ],
        "state": -2,
        "type": "rumor"
    },
    {
        "_id": "6706bd3c970321982236876c",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-10-09T17:28:28.102Z",
        "name": "HOL-HANDPRIEST-OVER",
        "sprite": "None",
        "updated_at": "2024-10-09T17:28:28.102Z"
    },
    {
        "_id": "67082fb297032198223c9406",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-10-10T19:49:06.755Z",
        "name": "CRB-DARKWATER-C-KEY",
        "sprite": "None",
        "updated_at": "2024-10-10T19:49:06.755Z"
    },
    {
        "_id": "67082fac97032198223c93e9",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-10-10T19:49:00.783Z",
        "name": "CRB-DARKWATER-B-KEY",
        "sprite": "None",
        "updated_at": "2024-10-10T19:49:00.783Z"
    },
    {
        "_id": "67082fb697032198223c94b2",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-10-10T19:49:10.669Z",
        "name": "CRB-DARKWATER-D-KEY",
        "sprite": "None",
        "updated_at": "2024-10-10T19:49:10.669Z"
    },
    {
        "_id": "67082fbf97032198223c94c0",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-10-10T19:49:19.211Z",
        "name": "CRB-DARKWATER-E-KEY",
        "sprite": "None",
        "updated_at": "2024-10-10T19:49:19.211Z"
    },
    {
        "_id": "67096fd697032198223dd0d1",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-10-11T18:35:02.449Z",
        "name": "CRB-HAUNTEDDEVOTEE-OVER",
        "sprite": "None",
        "updated_at": "2024-10-11T18:35:02.449Z"
    },
    {
        "_id": "67084d6097032198223d2746",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-10-10T21:55:44.865Z",
        "name": "CRB-DANGERRUNE-B",
        "sprite": "None",
        "updated_at": "2024-10-10T21:55:44.865Z"
    },
    {
        "_id": "670984cb97032198223de6b3",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-10-11T20:04:27.089Z",
        "name": "CRB-WARNINGDEVOTEE-OVER",
        "sprite": "None",
        "updated_at": "2024-10-11T20:04:27.089Z"
    },
    {
        "_id": "670ea4a797032198223f7fac",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-10-15T17:21:43.474Z",
        "name": "CRB-GHOSTBANSHEE-OVER",
        "sprite": "None",
        "updated_at": "2024-10-15T17:21:43.474Z"
    },
    {
        "_id": "670ea24a97032198223f640e",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-10-15T17:11:38.558Z",
        "name": "CRB-GUARDIAN-OVER",
        "sprite": "None",
        "updated_at": "2024-10-15T17:11:38.558Z"
    },
    {
        "_id": "670ea46497032198223f7902",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-10-15T17:20:36.089Z",
        "name": "CRB-GHOSTPARASITE-OVER",
        "sprite": "None",
        "updated_at": "2024-10-15T17:20:36.089Z"
    },
    {
        "_id": "670ea97797032198223fb53a",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-10-15T17:42:15.327Z",
        "name": "CRB-MOTHIDOLEXCHANGE-KEY",
        "sprite": "None",
        "updated_at": "2024-10-15T17:42:15.327Z"
    },
    {
        "_id": "670fdbd29703219822405004",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-10-16T15:29:22.424Z",
        "name": "CRB-TOPPLE-B2-KEY",
        "sprite": "None",
        "updated_at": "2024-10-16T15:29:22.424Z"
    },
    {
        "_id": "670fdbd89703219822405011",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-10-16T15:29:28.983Z",
        "name": "CRB-TOPPLE-B3-KEY",
        "sprite": "None",
        "updated_at": "2024-10-16T15:29:28.983Z"
    },
    {
        "_id": "670fdbe09703219822405020",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-10-16T15:29:36.608Z",
        "name": "CRB-TOPPLE-C2-KEY",
        "sprite": "None",
        "updated_at": "2024-10-16T15:29:36.608Z"
    },
    {
        "_id": "670fdbee970321982240502e",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-10-16T15:29:50.354Z",
        "name": "CRB-TOPPLE-C3-KEY",
        "sprite": "None",
        "updated_at": "2024-10-16T15:29:50.354Z"
    },
    {
        "_id": "670fdbf4970321982240503c",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-10-16T15:29:56.058Z",
        "name": "CRB-TOPPLE-D2-KEY",
        "sprite": "None",
        "updated_at": "2024-10-16T15:29:56.058Z"
    },
    {
        "_id": "670fdbf8970321982240504a",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-10-16T15:30:00.629Z",
        "name": "CRB-TOPPLE-D3-KEY",
        "sprite": "None",
        "updated_at": "2024-10-16T15:30:00.629Z"
    },
    {
        "_id": "670fdc029703219822405058",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-10-16T15:30:10.784Z",
        "name": "CRB-TOPPLE-E2-KEY",
        "sprite": "None",
        "updated_at": "2024-10-16T15:30:10.784Z"
    },
    {
        "_id": "670fdc089703219822405065",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-10-16T15:30:16.798Z",
        "name": "CRB-TOPPLE-E3-KEY",
        "sprite": "None",
        "updated_at": "2024-10-16T15:30:16.798Z"
    },
    {
        "_id": "670fdc0e9703219822405073",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-10-16T15:30:22.247Z",
        "name": "CRB-TOPPLE-F2-KEY",
        "sprite": "None",
        "updated_at": "2024-10-16T15:30:22.247Z"
    },
    {
        "_id": "670fdc139703219822405082",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-10-16T15:30:27.296Z",
        "name": "CRB-TOPPLE-F3-KEY",
        "sprite": "None",
        "updated_at": "2024-10-16T15:30:27.296Z"
    },
    {
        "_id": "670fdc1a9703219822405090",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-10-16T15:30:34.078Z",
        "name": "CRB-TOPPLE-G2-KEY",
        "sprite": "None",
        "updated_at": "2024-10-16T15:30:34.078Z"
    },
    {
        "_id": "670fdc24970321982240509e",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-10-16T15:30:44.008Z",
        "name": "CRB-TOPPLE-G3-KEY",
        "sprite": "None",
        "updated_at": "2024-10-16T15:30:44.008Z"
    },
    {
        "_id": "670fdc2997032198224050ac",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-10-16T15:30:49.187Z",
        "name": "CRB-TOPPLE-H2-KEY",
        "sprite": "None",
        "updated_at": "2024-10-16T15:30:49.187Z"
    },
    {
        "_id": "670fdc2e97032198224050ba",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-10-16T15:30:54.814Z",
        "name": "CRB-TOPPLE-H3-KEY",
        "sprite": "None",
        "updated_at": "2024-10-16T15:30:54.814Z"
    },
    {
        "_id": "670fdc3897032198224050c8",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-10-16T15:31:04.621Z",
        "name": "CRB-TOPPLE-I2-KEY",
        "sprite": "None",
        "updated_at": "2024-10-16T15:31:04.621Z"
    },
    {
        "_id": "670fdc3f97032198224050d6",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-10-16T15:31:11.969Z",
        "name": "CRB-TOPPLE-I3-KEY",
        "sprite": "None",
        "updated_at": "2024-10-16T15:31:11.969Z"
    },
    {
        "_id": "670fdc4497032198224050e4",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-10-16T15:31:16.968Z",
        "name": "CRB-TOPPLE-J2-KEY",
        "sprite": "None",
        "updated_at": "2024-10-16T15:31:16.968Z"
    },
    {
        "_id": "670fdc4997032198224050f1",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-10-16T15:31:21.929Z",
        "name": "CRB-TOPPLE-J3-KEY",
        "sprite": "None",
        "updated_at": "2024-10-16T15:31:21.929Z"
    },
    {
        "_id": "670fdc4f97032198224050ff",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-10-16T15:31:27.212Z",
        "name": "CRB-TOPPLE-K2-KEY",
        "sprite": "None",
        "updated_at": "2024-10-16T15:31:27.212Z"
    },
    {
        "_id": "670fdc54970321982240510e",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-10-16T15:31:32.394Z",
        "name": "CRB-TOPPLE-K3-KEY",
        "sprite": "None",
        "updated_at": "2024-10-16T15:31:32.394Z"
    },
    {
        "_id": "670fdc59970321982240511b",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-10-16T15:31:37.338Z",
        "name": "CRB-TOPPLE-L2-KEY",
        "sprite": "None",
        "updated_at": "2024-10-16T15:31:37.338Z"
    },
    {
        "_id": "670fdc5e970321982240512a",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-10-16T15:31:42.953Z",
        "name": "CRB-TOPPLE-L3-KEY",
        "sprite": "None",
        "updated_at": "2024-10-16T15:31:42.953Z"
    },
    {
        "_id": "670fdc769703219822405138",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-10-16T15:32:06.164Z",
        "name": "CRB-STANDING-B-KEY",
        "sprite": "None",
        "updated_at": "2024-10-16T15:32:06.164Z"
    },
    {
        "_id": "670fdc7a9703219822405146",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-10-16T15:32:10.393Z",
        "name": "CRB-STANDING-C-KEY",
        "sprite": "None",
        "updated_at": "2024-10-16T15:32:10.393Z"
    },
    {
        "_id": "670fdc829703219822405154",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-10-16T15:32:18.576Z",
        "name": "CRB-STANDING-D-KEY",
        "sprite": "None",
        "updated_at": "2024-10-16T15:32:18.576Z"
    },
    {
        "_id": "67114f14970321982242834b",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-10-17T17:53:24.782Z",
        "name": "CRB-HELPER-A2-KEYDUPLICATED",
        "sprite": "None",
        "updated_at": "2024-11-21T16:10:02.445Z"
    },
    {
        "_id": "671948d753d21068ddee7817",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-10-23T19:04:55.342Z",
        "name": "MTP-FOUNTAIN-KEY",
        "sprite": "None",
        "updated_at": "2024-10-23T19:04:55.342Z"
    },
    {
        "_id": "671948e653d21068ddee7833",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-10-23T19:05:10.082Z",
        "name": "MTP-SUN-KEY-1",
        "sprite": "None",
        "updated_at": "2025-03-04T19:57:45.717Z"
    },
    {
        "_id": "6719499053d21068ddee7886",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-10-23T19:08:00.190Z",
        "name": "MTP-PEDESTAL-A1-KEY",
        "sprite": "None",
        "updated_at": "2024-10-23T19:08:15.130Z"
    },
    {
        "_id": "6719491153d21068ddee7841",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-10-23T19:05:53.122Z",
        "name": "MTP-FOUNTAIN-OVER",
        "sprite": "None",
        "updated_at": "2025-02-28T16:21:29.423Z"
    },
    {
        "_id": "6719497e53d21068ddee7878",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-10-23T19:07:42.996Z",
        "name": "MTP-RUNE-A-KEY",
        "sprite": "None",
        "updated_at": "2024-10-23T19:07:42.996Z"
    },
    {
        "_id": "6719499553d21068ddee7895",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-10-23T19:08:05.784Z",
        "name": "MTP-PEDESTAL-A2-KEY",
        "sprite": "None",
        "updated_at": "2024-10-23T19:08:22.610Z"
    },
    {
        "_id": "671948e053d21068ddee7824",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-10-23T19:05:04.687Z",
        "name": "MTP-MOON-KEY-1",
        "sprite": "None",
        "updated_at": "2025-03-04T19:57:54.229Z"
    },
    {
        "_id": "67194ac353d21068ddee790f",
        "__v": 0,
        "bag": 25,
        "created_at": "2024-10-23T19:13:07.139Z",
        "name": "MTP-SunTile",
        "sprite": "678af5c5353f07a47b545b12",
        "updated_at": "2025-02-05T17:50:15.279Z"
    },
    {
        "_id": "67194ae553d21068ddee7962",
        "__v": 0,
        "bag": 25,
        "created_at": "2024-10-23T19:13:41.588Z",
        "name": "MTP-MoonTile",
        "sprite": "678af599353f07a47b545ac0",
        "updated_at": "2025-02-05T17:50:49.426Z"
    },
    {
        "_id": "6719526953d21068ddee9896",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-10-23T19:45:45.335Z",
        "name": "MTP-ASHESALTAR-2-KEY",
        "sprite": "None",
        "updated_at": "2024-10-23T19:45:45.335Z"
    },
    {
        "_id": "6719526e53d21068ddee98a4",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-10-23T19:45:50.956Z",
        "name": "MTP-ASHESALTAR-3-KEY",
        "sprite": "None",
        "updated_at": "2024-10-23T19:45:50.956Z"
    },
    {
        "_id": "6719527853d21068ddee98b2",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-10-23T19:46:00.150Z",
        "name": "MTP-ASHESALTAR-4-KEY",
        "sprite": "None",
        "updated_at": "2024-10-23T19:46:00.150Z"
    },
    {
        "_id": "671a6d4a53d21068ddeef275",
        "__v": 0,
        "bag": 3,
        "burneable": false,
        "family": "",
        "icon": "63644b03d22c16e85b8217d8",
        "minteable": false,
        "name": "Enchanter's Shard",
        "rarity": 2,
        "type": "Weapon"
    },
    {
        "_id": "671a6cf553d21068ddeef253",
        "__v": 0,
        "bag": 3,
        "burneable": false,
        "family": "",
        "icon": "636c1314d22c16e85b8220ef",
        "minteable": false,
        "name": "Enchanter's Robes",
        "rarity": 2,
        "type": "Suits"
    },
    {
        "_id": "67195d5c53d21068ddeeabd4",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-10-23T20:32:28.872Z",
        "name": "MTP-HANDCULTIST-OVER",
        "sprite": "None",
        "updated_at": "2024-10-23T20:32:28.872Z"
    },
    {
        "_id": "671a6b4753d21068ddeef1a4",
        "__v": 0,
        "bag": 3,
        "burneable": false,
        "family": "",
        "icon": "636c0f0dd22c16e85b821fe4",
        "minteable": false,
        "name": "Slayer's Helm",
        "rarity": 2,
        "type": "Headgear"
    },
    {
        "_id": "671a6c6853d21068ddeef20f",
        "__v": 0,
        "bag": 3,
        "burneable": false,
        "family": "",
        "hidden": false,
        "icon": "63644912d22c16e85b82171d",
        "minteable": false,
        "name": "Slayer's Scythe",
        "rarity": 2,
        "type": "Weapon"
    },
    {
        "_id": "671952c453d21068ddee98dc",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-10-23T19:47:16.357Z",
        "name": "MTP-CHARLOTTESASHES",
        "sprite": "None",
        "updated_at": "2024-10-23T19:47:16.357Z"
    },
    {
        "_id": "671952d653d21068ddee98ea",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-10-23T19:47:34.190Z",
        "name": "MTP-JESSICASASHES",
        "sprite": "None",
        "updated_at": "2024-10-23T19:47:34.190Z"
    },
    {
        "_id": "671a6e0553d21068ddeefd37",
        "__v": 0,
        "bag": 3,
        "burneable": false,
        "family": "",
        "icon": "636c0d16d22c16e85b821f3d",
        "minteable": false,
        "name": "Defender's Helm",
        "rarity": 2,
        "type": "Headgear"
    },
    {
        "_id": "6719527e53d21068ddee98c0",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-10-23T19:46:06.029Z",
        "name": "MTP-ASHESALTAR-5-KEY",
        "sprite": "None",
        "updated_at": "2024-10-23T19:46:06.029Z"
    },
    {
        "_id": "67195d6b53d21068ddeeabe3",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-10-23T20:32:43.143Z",
        "name": "MTP-VOIDSPECTER-OVER",
        "sprite": "None",
        "updated_at": "2024-10-23T20:32:43.143Z"
    },
    {
        "_id": "671a6caf53d21068ddeef231",
        "__v": 0,
        "bag": 3,
        "burneable": false,
        "family": "",
        "hidden": false,
        "icon": "636c1304d22c16e85b8220e4",
        "minteable": false,
        "name": "Enchanter's Hat",
        "rarity": 2,
        "type": "Headgear"
    },
    {
        "_id": "671a6c2153d21068ddeef1e4",
        "__v": 0,
        "bag": 3,
        "burneable": false,
        "family": "",
        "icon": "636c0f1cd22c16e85b821fef",
        "minteable": false,
        "name": "Slayer's Armor",
        "rarity": 2,
        "type": "Suits"
    },
    {
        "_id": "671a6ea053d21068ddeefd83",
        "__v": 0,
        "bag": 3,
        "burneable": false,
        "family": "",
        "icon": "636c0d2fd22c16e85b821f48",
        "minteable": false,
        "name": "Defender's Plate",
        "rarity": 2,
        "type": "Suits"
    },
    {
        "_id": "671a6ef053d21068ddeefdd0",
        "__v": 0,
        "bag": 3,
        "burneable": false,
        "family": "",
        "icon": "63644f76d22c16e85b82197a",
        "minteable": false,
        "name": "Defender's Orb",
        "rarity": 2,
        "type": "Weapon"
    },
    {
        "_id": "671a6f7453d21068ddeeff5a",
        "__v": 0,
        "bag": 3,
        "burneable": false,
        "family": "",
        "icon": "636c1012d22c16e85b82205f",
        "minteable": false,
        "name": "Mender's Band",
        "rarity": 2,
        "type": "Headgear"
    },
    {
        "_id": "671a6fc253d21068ddeeff7c",
        "__v": 0,
        "bag": 3,
        "burneable": false,
        "family": "",
        "icon": "636c1025d22c16e85b82206a",
        "minteable": false,
        "name": "Mender's Armor",
        "rarity": 2,
        "type": "Suits"
    },
    {
        "_id": "671a700753d21068ddeeff9e",
        "__v": 0,
        "bag": 3,
        "burneable": false,
        "family": "",
        "icon": "63644bcfd22c16e85b82183b",
        "minteable": false,
        "name": "Mender's Lamp",
        "rarity": 2,
        "type": "Weapon"
    },
    {
        "_id": "671a9f4553d21068ddf0543c",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-10-24T19:25:57.703Z",
        "name": "MTP-PEDESTAL-A3-KEY",
        "sprite": "None",
        "updated_at": "2024-10-24T19:25:57.703Z"
    },
    {
        "_id": "671b8f9bc1f51821d517ef7f",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "638665bd5c5c376fbbd4c5f1",
        "minteable": true,
        "name": "Leech Blossom II",
        "rarity": 1,
        "type": "Cantrip"
    },
    {
        "_id": "671b8f1bc1f51821d517ef51",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "638665985c5c376fbbd4c5db",
        "minteable": true,
        "name": "Firebolt II",
        "rarity": 1,
        "type": "Cantrip"
    },
    {
        "_id": "671b8fd0c1f51821d517ef96",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "638665a55c5c376fbbd4c5e6",
        "minteable": true,
        "name": "Sparkling Volley II",
        "rarity": 1,
        "type": "Cantrip"
    },
    {
        "_id": "671b9003c1f51821d517efad",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "638665cb5c5c376fbbd4c5fc",
        "minteable": true,
        "name": "Frag Wall II",
        "rarity": 1,
        "type": "Cantrip"
    },
    {
        "_id": "671b8f55c1f51821d517ef68",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "638665e85c5c376fbbd4c613",
        "minteable": true,
        "name": "Frost Phaser II",
        "rarity": 1,
        "type": "Cantrip"
    },
    {
        "_id": "671b9038c1f51821d517efc4",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "638665885c5c376fbbd4c5d0",
        "minteable": true,
        "name": "Drawing of Chaos II",
        "rarity": 1,
        "type": "Cantrip"
    },
    {
        "_id": "671b906bc1f51821d517efdb",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "638665dc5c5c376fbbd4c608",
        "minteable": true,
        "name": "Solar Blast II",
        "rarity": 1,
        "type": "Cantrip"
    },
    {
        "_id": "671b90a5c1f51821d517eff2",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "6361612dc2284ba32e1bc367",
        "minteable": true,
        "name": "Violent Dismissal II",
        "rarity": 1,
        "type": "Normal"
    },
    {
        "_id": "671b915cc1f51821d517f037",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "6386651e5c5c376fbbd4c5a4",
        "minteable": true,
        "name": "Ice Spear II",
        "rarity": 1,
        "type": "Normal"
    },
    {
        "_id": "671b9119c1f51821d517f020",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "6361612dc2284ba32e1bc367",
        "minteable": true,
        "name": "Heat Wave II",
        "rarity": 1,
        "type": "Normal"
    },
    {
        "_id": "671b90ebc1f51821d517f009",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "6361612dc2284ba32e1bc367",
        "minteable": true,
        "name": "Volatile Gambit II",
        "rarity": 1,
        "type": "Normal"
    },
    {
        "_id": "671b9194c1f51821d517f04e",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "6386651e5c5c376fbbd4c5a4",
        "minteable": true,
        "name": "Chilling Breath II",
        "rarity": 1,
        "type": "Normal"
    },
    {
        "_id": "671b9252c1f51821d517f093",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "63616114c2284ba32e1bc350",
        "minteable": true,
        "name": "Zoom Attack II",
        "rarity": 1,
        "type": "Normal"
    },
    {
        "_id": "671b91cec1f51821d517f065",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "6386651e5c5c376fbbd4c5a4",
        "minteable": true,
        "name": "Shattered Crystal II",
        "rarity": 1,
        "type": "Normal"
    },
    {
        "_id": "671b9220c1f51821d517f07c",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "63616114c2284ba32e1bc350",
        "minteable": true,
        "name": "Overload II",
        "rarity": 1,
        "type": "Normal"
    },
    {
        "_id": "671b9291c1f51821d517f0aa",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "63616114c2284ba32e1bc350",
        "minteable": true,
        "name": "Kinetic Transfer II",
        "rarity": 1,
        "type": "Normal"
    },
    {
        "_id": "671b933dc1f51821d517f0d8",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "63616121c2284ba32e1bc35c",
        "minteable": true,
        "name": "Wild Call II",
        "rarity": 1,
        "type": "Normal"
    },
    {
        "_id": "671b92dfc1f51821d517f0c1",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "63616121c2284ba32e1bc35c",
        "minteable": true,
        "name": "Life Bloom II",
        "rarity": 1,
        "type": "Normal"
    },
    {
        "_id": "671b93b9c1f51821d517f0ef",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "63616121c2284ba32e1bc35c",
        "minteable": true,
        "name": "Traitor's Reward II",
        "rarity": 1,
        "type": "Normal"
    },
    {
        "_id": "671b948bc1f51821d517f10c",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "638665435c5c376fbbd4c5ba",
        "minteable": true,
        "name": "Decoy II",
        "rarity": 1,
        "type": "Normal"
    },
    {
        "_id": "671b94c9c1f51821d517f123",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "638665435c5c376fbbd4c5ba",
        "minteable": true,
        "name": "Tremor II",
        "rarity": 1,
        "type": "Normal"
    },
    {
        "_id": "671b9504c1f51821d517f13a",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "638665435c5c376fbbd4c5ba",
        "minteable": true,
        "name": "Brief Respite II",
        "rarity": 1,
        "type": "Normal"
    },
    {
        "_id": "671b9578c1f51821d517f151",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "638665515c5c376fbbd4c5c5",
        "minteable": true,
        "name": "Fractal Barrier II",
        "rarity": 1,
        "type": "Normal"
    },
    {
        "_id": "671b95b5c1f51821d517f18c",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "638665515c5c376fbbd4c5c5",
        "minteable": true,
        "name": "Rift Pox II",
        "rarity": 1,
        "type": "Normal"
    },
    {
        "_id": "671b960bc1f51821d517f1a3",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "638665515c5c376fbbd4c5c5",
        "minteable": true,
        "name": "Wheel of Chaos Ii",
        "rarity": 1,
        "type": "Normal"
    },
    {
        "_id": "671b96c3c1f51821d517f1d1",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "6386652f5c5c376fbbd4c5af",
        "minteable": true,
        "name": "Cleansing Rune II",
        "rarity": 1,
        "type": "Normal"
    },
    {
        "_id": "671b968dc1f51821d517f1ba",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "6386652f5c5c376fbbd4c5af",
        "minteable": true,
        "name": "Fated Defiance II",
        "rarity": 1,
        "type": "Normal"
    },
    {
        "_id": "671b9702c1f51821d517f1e8",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "6386652f5c5c376fbbd4c5af",
        "minteable": true,
        "name": "Fate Reversal II",
        "rarity": 1,
        "type": "Normal"
    },
    {
        "_id": "671faa24c1f51821d5198af9",
        "__v": 0,
        "bag": 25,
        "created_at": "2024-10-28T15:13:40.576Z",
        "name": "MTP-FinalDoorKey-A",
        "sprite": "678af54e353f07a47b5459fc",
        "updated_at": "2025-02-05T17:52:31.790Z"
    },
    {
        "_id": "671faa63c1f51821d5198df1",
        "__v": 0,
        "bag": 25,
        "created_at": "2024-10-28T15:14:43.135Z",
        "name": "MTP-FinalDoorKey-B",
        "sprite": "678af562353f07a47b545a4e",
        "updated_at": "2025-02-05T17:52:40.168Z"
    },
    {
        "_id": "671fee83c1f51821d51af436",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-10-28T20:05:23.463Z",
        "name": "MTP-OMORNEGHOST-A1-KEY",
        "sprite": "None",
        "updated_at": "2024-10-28T20:05:23.463Z"
    },
    {
        "_id": "671fee87c1f51821d51af444",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-10-28T20:05:27.438Z",
        "name": "MTP-OMORNEGHOST-A2-KEY",
        "sprite": "None",
        "updated_at": "2024-10-28T20:05:27.438Z"
    },
    {
        "_id": "671fee8ec1f51821d51af451",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-10-28T20:05:34.426Z",
        "name": "MTP-OMORNEGHOST-A3-KEY",
        "sprite": "None",
        "updated_at": "2024-10-28T20:05:34.426Z"
    },
    {
        "_id": "671feea5c1f51821d51af5c0",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-10-28T20:05:57.513Z",
        "name": "MTP-VANHURTEGHOST-A1-KEY",
        "sprite": "None",
        "updated_at": "2024-10-28T20:05:57.513Z"
    },
    {
        "_id": "671feea9c1f51821d51af5ce",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-10-28T20:06:01.929Z",
        "name": "MTP-VANHURTEGHOST-A2-KEY",
        "sprite": "None",
        "updated_at": "2024-10-28T20:06:01.929Z"
    },
    {
        "_id": "671feeb2c1f51821d51af5db",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-10-28T20:06:10.258Z",
        "name": "MTP-VANHURTEGHOST-A3-KEY",
        "sprite": "None",
        "updated_at": "2024-10-28T20:06:10.258Z"
    },
    {
        "_id": "671feecbc1f51821d51af687",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-10-28T20:06:35.619Z",
        "name": "MTP-OMORNEGHOST-B1-KEY",
        "sprite": "None",
        "updated_at": "2024-10-28T20:06:35.619Z"
    },
    {
        "_id": "671feed2c1f51821d51af695",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-10-28T20:06:42.613Z",
        "name": "MTP-OMORNEGHOST-B2-KEY",
        "sprite": "None",
        "updated_at": "2024-10-28T20:06:42.613Z"
    },
    {
        "_id": "671feef2c1f51821d51af8c6",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-10-28T20:07:14.232Z",
        "name": "MTP-OMORNEGHOST-C2-KEY",
        "sprite": "None",
        "updated_at": "2024-10-28T20:07:14.232Z"
    },
    {
        "_id": "671feeecc1f51821d51af81a",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-10-28T20:07:08.293Z",
        "name": "MTP-OMORNEGHOST-C1-KEY",
        "sprite": "None",
        "updated_at": "2024-10-28T20:07:08.293Z"
    },
    {
        "_id": "671feef9c1f51821d51af8d4",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-10-28T20:07:21.826Z",
        "name": "MTP-OMORNEGHOST-D1-KEY",
        "sprite": "None",
        "updated_at": "2024-10-28T20:07:21.826Z"
    },
    {
        "_id": "671feefec1f51821d51af8e2",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-10-28T20:07:26.936Z",
        "name": "MTP-OMORNEGHOST-D2-KEY",
        "sprite": "None",
        "updated_at": "2024-10-28T20:07:26.936Z"
    },
    {
        "_id": "671fef11c1f51821d51afa4f",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-10-28T20:07:45.945Z",
        "name": "MTP-VANHURTEGHOST-B1-KEY",
        "sprite": "None",
        "updated_at": "2024-10-28T20:07:45.945Z"
    },
    {
        "_id": "671fef17c1f51821d51afa5d",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-10-28T20:07:51.071Z",
        "name": "MTP-VANHURTEGHOST-B2-KEY",
        "sprite": "None",
        "updated_at": "2024-10-28T20:07:51.071Z"
    },
    {
        "_id": "671fef1dc1f51821d51afb09",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-10-28T20:07:57.994Z",
        "name": "MTP-VANHURTEGHOST-C1-KEY",
        "sprite": "None",
        "updated_at": "2024-10-28T20:07:57.994Z"
    },
    {
        "_id": "671fef23c1f51821d51afb16",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-10-28T20:08:03.302Z",
        "name": "MTP-VANHURTEGHOST-C2-KEY",
        "sprite": "None",
        "updated_at": "2024-10-28T20:08:03.302Z"
    },
    {
        "_id": "671fef29c1f51821d51afb24",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-10-28T20:08:09.654Z",
        "name": "MTP-VANHURTEGHOST-D1-KEY",
        "sprite": "None",
        "updated_at": "2024-10-28T20:08:09.654Z"
    },
    {
        "_id": "671fef2ec1f51821d51afb33",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-10-28T20:08:14.399Z",
        "name": "MTP-VANHURTEGHOST-D2-KEY",
        "sprite": "None",
        "updated_at": "2024-10-28T20:08:14.399Z"
    },
    {
        "_id": "671fef62c1f51821d51afd3e",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-10-28T20:09:06.330Z",
        "name": "MTP-JESSICAURN-KEY",
        "sprite": "None",
        "updated_at": "2024-10-28T20:09:06.330Z"
    },
    {
        "_id": "671fef91c1f51821d51afecb",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-10-28T20:09:53.275Z",
        "name": "MTP-KEYMASTER-A-OVER",
        "sprite": "None",
        "updated_at": "2024-10-28T20:09:53.275Z"
    },
    {
        "_id": "671fef95c1f51821d51afeda",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-10-28T20:09:57.313Z",
        "name": "MTP-KEYMASTER-B-OVER",
        "sprite": "None",
        "updated_at": "2024-10-28T20:09:57.313Z"
    },
    {
        "_id": "671fefbfc1f51821d51b00e5",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-10-28T20:10:39.490Z",
        "name": "MTP-MOONALTAR-A-KEY",
        "sprite": "None",
        "updated_at": "2024-10-28T20:10:39.490Z"
    },
    {
        "_id": "671fefd3c1f51821d51b019e",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-10-28T20:10:59.741Z",
        "name": "MTP-FINALKEY-B-OVER",
        "sprite": "None",
        "updated_at": "2024-10-28T20:10:59.741Z"
    },
    {
        "_id": "671fefcec1f51821d51b0190",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-10-28T20:10:54.197Z",
        "name": "MTP-FINALKEY-A-OVER",
        "sprite": "None",
        "updated_at": "2024-10-28T20:10:54.197Z"
    },
    {
        "_id": "672107adc1f51821d51d4041",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-10-29T16:05:01.261Z",
        "name": "MTP-ASHESALTAR-OVER",
        "sprite": "None",
        "updated_at": "2024-10-29T16:05:01.261Z"
    },
    {
        "_id": "67210808c1f51821d51d4ce8",
        "__v": 0,
        "bag": 25,
        "created_at": "2024-10-29T16:06:32.940Z",
        "name": "MTP-CharlottesAshes",
        "sprite": "678af52c353f07a47b54598a",
        "updated_at": "2025-02-05T17:51:40.836Z"
    },
    {
        "_id": "6721088ec1f51821d51d4d4f",
        "__v": 0,
        "bag": 25,
        "created_at": "2024-10-29T16:08:46.058Z",
        "name": "MTP-JessicasAshes",
        "sprite": "678af52c353f07a47b54598a",
        "updated_at": "2025-02-05T17:51:45.750Z"
    },
    {
        "_id": "672508b7c1f51821d523b74f",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-11-01T16:58:31.495Z",
        "name": "MTP-CHARLOTTEURN-KEY",
        "sprite": "None",
        "updated_at": "2024-11-01T16:58:31.495Z"
    },
    {
        "_id": "672541f6c1f51821d5251cf4",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-11-01T21:02:46.803Z",
        "name": "MTP-ALTARONE-KEY",
        "sprite": "None",
        "updated_at": "2024-11-01T21:02:46.803Z"
    },
    {
        "_id": "672541fcc1f51821d5251d02",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-11-01T21:02:52.643Z",
        "name": "MTP-JESSANDCHAR-KEY",
        "sprite": "None",
        "updated_at": "2024-11-01T21:02:52.643Z"
    },
    {
        "_id": "67322c37c1f51821d52a045d",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-11-11T16:09:27.430Z",
        "name": "HOL-CHEST-C-KEY",
        "sprite": "None",
        "updated_at": "2024-11-11T16:09:27.430Z"
    },
    {
        "_id": "67322c3ec1f51821d52a046c",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-11-11T16:09:34.642Z",
        "name": "HOL-CHEST-D-KEY",
        "sprite": "None",
        "updated_at": "2024-11-11T16:09:34.642Z"
    },
    {
        "_id": "673b4922a71472a5d75fcd0e",
        "__v": 0,
        "bag": 12,
        "family": "",
        "journal_name": "Follow the White Rabbit",
        "name": "R-FollowTheWhiteRabbit-FWR",
        "rarity": 0,
        "region": [
            {
                "value": "64b04fc0d3d5ac314bfbcf8a",
                "label": "TheWild"
            }
        ],
        "state": -2,
        "type": "rumor"
    },
    {
        "_id": "673b7041a71472a5d7617f88",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-11-18T16:50:09.837Z",
        "name": "CRB-SAFERUNE-B",
        "sprite": "None",
        "updated_at": "2024-11-18T16:50:09.837Z"
    },
    {
        "_id": "673b70bfa71472a5d7618ad3",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-11-18T16:52:15.511Z",
        "name": "CRB-DANGERRUNE-C",
        "sprite": "None",
        "updated_at": "2024-11-18T16:52:15.511Z"
    },
    {
        "_id": "673b70c3a71472a5d7618ae1",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-11-18T16:52:19.264Z",
        "name": "CRB-DANGERRUNE-D",
        "sprite": "None",
        "updated_at": "2024-11-18T16:52:19.264Z"
    },
    {
        "_id": "673b70d4a71472a5d7618afc",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-11-18T16:52:36.078Z",
        "name": "CRB-DANGERRUNE-F",
        "sprite": "None",
        "updated_at": "2024-11-18T16:52:36.078Z"
    },
    {
        "_id": "673b70d1a71472a5d7618aef",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-11-18T16:52:33.052Z",
        "name": "CRB-DANGERRUNE-E",
        "sprite": "None",
        "updated_at": "2024-11-18T16:52:33.052Z"
    },
    {
        "_id": "673bb5f4a71472a5d763608f",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-11-18T21:47:32.768Z",
        "name": "MTP-ASCENDANTVICTORY-KEY",
        "sprite": "None",
        "updated_at": "2024-11-18T21:47:32.768Z"
    },
    {
        "_id": "673c9c97a71472a5d7644e93",
        "__v": 0,
        "bag": 12,
        "family": "",
        "journal_name": "A Path to Knowledge",
        "name": "R-APathToKnowledge-PTK",
        "rarity": 0,
        "region": [
            {
                "value": "64b04fc0d3d5ac314bfbcf8a",
                "label": "TheWild"
            }
        ],
        "state": -2,
        "type": "rumor"
    },
    {
        "_id": "673c9ccea71472a5d76450ea",
        "__v": 0,
        "bag": 12,
        "family": "",
        "journal_name": "Into the Wild",
        "name": "R-IntoTheWild-ITW",
        "rarity": 0,
        "region": [
            {
                "value": "64b04fc0d3d5ac314bfbcf8a",
                "label": "TheWild"
            }
        ],
        "state": -2,
        "type": "rumor"
    },
    {
        "_id": "673e35a9df4fd194bc16048c",
        "__v": 0,
        "bag": 25,
        "created_at": "2024-11-20T19:16:57.709Z",
        "name": "MTP-PassageKey-A",
        "sprite": "64836bb41e9a35f80163f0b8",
        "updated_at": "2024-11-20T19:16:57.709Z"
    },
    {
        "_id": "673e35c9df4fd194bc1604c9",
        "__v": 0,
        "bag": 25,
        "created_at": "2024-11-20T19:17:29.462Z",
        "name": "MTP-PassageKey-B",
        "sprite": "64836bb41e9a35f80163f0b8",
        "updated_at": "2024-11-20T19:17:29.462Z"
    },
    {
        "_id": "673e35dcdf4fd194bc1604ea",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-11-20T19:17:48.029Z",
        "name": "MTP-KEYCRYPT-A-OVER",
        "sprite": "None",
        "updated_at": "2024-11-20T19:17:48.029Z"
    },
    {
        "_id": "673e35e3df4fd194bc1604f8",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-11-20T19:17:55.615Z",
        "name": "MTP-KEYCRYPT-B-OVER",
        "sprite": "None",
        "updated_at": "2024-11-20T19:17:55.615Z"
    },
    {
        "_id": "673e37d0df4fd194bc1631e5",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-11-20T19:26:08.958Z",
        "name": "MTP-PASSCRYPT-A-OVER",
        "sprite": "None",
        "updated_at": "2024-11-20T19:26:08.958Z"
    },
    {
        "_id": "673e37d5df4fd194bc1631f2",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-11-20T19:26:13.554Z",
        "name": "MTP-PASSCRYPT-B-OVER",
        "sprite": "None",
        "updated_at": "2024-11-20T19:26:13.554Z"
    },
    {
        "_id": "673f810bdf4fd194bc18b56d",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-11-21T18:50:51.023Z",
        "name": "MTP-RUNE-C-KEY",
        "sprite": "None",
        "updated_at": "2024-11-21T18:50:51.023Z"
    },
    {
        "_id": "673f8107df4fd194bc18b424",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-11-21T18:50:47.120Z",
        "name": "MTP-RUNE-B-KEY",
        "sprite": "None",
        "updated_at": "2024-11-21T18:50:47.120Z"
    },
    {
        "_id": "673f810fdf4fd194bc18b57c",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-11-21T18:50:55.255Z",
        "name": "MTP-RUNE-D-KEY",
        "sprite": "None",
        "updated_at": "2024-11-21T18:50:55.255Z"
    },
    {
        "_id": "673f84b7df4fd194bc191375",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-11-21T19:06:31.162Z",
        "name": "MTP-PEDESTAL-B2-KEY",
        "sprite": "None",
        "updated_at": "2024-11-21T19:06:31.162Z"
    },
    {
        "_id": "673f84aedf4fd194bc191367",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-11-21T19:06:22.862Z",
        "name": "MTP-PEDESTAL-D1-KEY",
        "sprite": "None",
        "updated_at": "2024-11-21T19:06:22.862Z"
    },
    {
        "_id": "673f849adf4fd194bc19134b",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-11-21T19:06:02.897Z",
        "name": "MTP-PEDESTAL-B1-KEY",
        "sprite": "None",
        "updated_at": "2024-11-21T19:06:02.897Z"
    },
    {
        "_id": "673f84a9df4fd194bc19135a",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-11-21T19:06:17.275Z",
        "name": "MTP-PEDESTAL-C1-KEY",
        "sprite": "None",
        "updated_at": "2024-11-21T19:06:17.275Z"
    },
    {
        "_id": "673f84bbdf4fd194bc191383",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-11-21T19:06:35.896Z",
        "name": "MTP-PEDESTAL-C2-KEY",
        "sprite": "None",
        "updated_at": "2024-11-21T19:06:35.896Z"
    },
    {
        "_id": "673f84c0df4fd194bc191392",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-11-21T19:06:40.051Z",
        "name": "MTP-PEDESTAL-D2-KEY",
        "sprite": "None",
        "updated_at": "2024-11-21T19:06:40.051Z"
    },
    {
        "_id": "673f84c8df4fd194bc19139f",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-11-21T19:06:48.913Z",
        "name": "MTP-PEDESTAL-B3-KEY",
        "sprite": "None",
        "updated_at": "2024-11-21T19:06:48.913Z"
    },
    {
        "_id": "673f84ccdf4fd194bc1913ae",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-11-21T19:06:52.097Z",
        "name": "MTP-PEDESTAL-C3-KEY",
        "sprite": "None",
        "updated_at": "2024-11-21T19:06:52.097Z"
    },
    {
        "_id": "673f84cfdf4fd194bc1913bb",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-11-21T19:06:55.819Z",
        "name": "MTP-PEDESTAL-D3-KEY",
        "sprite": "None",
        "updated_at": "2024-11-21T19:06:55.819Z"
    },
    {
        "_id": "673fa36adf4fd194bc1a1d62",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-11-21T21:17:30.583Z",
        "name": "MTP-VANHURTEGHOST-B3-KEY",
        "sprite": "None",
        "updated_at": "2024-11-21T21:17:30.583Z"
    },
    {
        "_id": "673fa370df4fd194bc1a1d6f",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-11-21T21:17:36.628Z",
        "name": "MTP-VANHURTEGHOS-C3-KEY",
        "sprite": "None",
        "updated_at": "2024-11-21T21:17:36.628Z"
    },
    {
        "_id": "673fa374df4fd194bc1a1d7d",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-11-21T21:17:40.562Z",
        "name": "MTP-VANHURTEGHOST-D3-KEY",
        "sprite": "None",
        "updated_at": "2024-11-21T21:17:40.562Z"
    },
    {
        "_id": "673fa383df4fd194bc1a1d8b",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-11-21T21:17:55.485Z",
        "name": "MTP-OMORNEGHOST-B3-KEY",
        "sprite": "None",
        "updated_at": "2024-11-21T21:17:55.485Z"
    },
    {
        "_id": "673fa388df4fd194bc1a1d9a",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-11-21T21:18:00.359Z",
        "name": "MTP-OMORNEGHOST-C3-KEY",
        "sprite": "None",
        "updated_at": "2024-11-21T21:18:00.359Z"
    },
    {
        "_id": "6747911f93ffbcb1de805655",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-11-27T21:37:35.289Z",
        "name": "MTP-PASS-C-KEY",
        "sprite": "None",
        "updated_at": "2024-11-27T21:37:35.289Z"
    },
    {
        "_id": "673fa38cdf4fd194bc1a1da8",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-11-21T21:18:04.392Z",
        "name": "MTP-OMORNEGHOST-D3-KEY",
        "sprite": "None",
        "updated_at": "2024-11-21T21:18:04.392Z"
    },
    {
        "_id": "6747920b93ffbcb1de807c57",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-11-27T21:41:31.153Z",
        "name": "MTP-PASS-D-KEY",
        "sprite": "None",
        "updated_at": "2024-11-27T21:41:31.153Z"
    },
    {
        "_id": "674881e693ffbcb1de80bc81",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-11-28T14:44:54.660Z",
        "name": "MTP-CRYPT-C-KEY",
        "sprite": "None",
        "updated_at": "2024-11-28T14:44:54.660Z"
    },
    {
        "_id": "674881eb93ffbcb1de80bc8f",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-11-28T14:44:59.541Z",
        "name": "MTP-CRYPT-D-KEY",
        "sprite": "None",
        "updated_at": "2024-11-28T14:44:59.541Z"
    },
    {
        "_id": "674881e293ffbcb1de80bc73",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-11-28T14:44:50.193Z",
        "name": "MTP-CRYPT-B-KEY",
        "sprite": "None",
        "updated_at": "2024-11-28T14:44:50.193Z"
    },
    {
        "_id": "6747931793ffbcb1de809b7c",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-11-27T21:45:59.950Z",
        "name": "MTP-CRYPT-A-KEY",
        "sprite": "None",
        "updated_at": "2024-11-27T21:45:59.950Z"
    },
    {
        "_id": "674881f093ffbcb1de80bc9d",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-11-28T14:45:04.429Z",
        "name": "MTP-CRYPT-E-KEY",
        "sprite": "None",
        "updated_at": "2024-11-28T14:45:04.429Z"
    },
    {
        "_id": "6748820293ffbcb1de80bcab",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-11-28T14:45:22.984Z",
        "name": "MTP-CRYPT-F-KEY",
        "sprite": "None",
        "updated_at": "2024-11-28T14:45:22.984Z"
    },
    {
        "_id": "6748821093ffbcb1de80bcb9",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-11-28T14:45:36.207Z",
        "name": "MTP-CRYPT-G-KEY",
        "sprite": "None",
        "updated_at": "2024-11-28T14:45:36.207Z"
    },
    {
        "_id": "6748821593ffbcb1de80bcc7",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-11-28T14:45:41.515Z",
        "name": "MTP-CRYPT-H-KEY",
        "sprite": "None",
        "updated_at": "2024-11-28T14:45:41.515Z"
    },
    {
        "_id": "6748822093ffbcb1de80bcd4",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-11-28T14:45:52.686Z",
        "name": "MTP-CRYPT-I-KEY",
        "sprite": "None",
        "updated_at": "2024-11-28T14:45:52.686Z"
    },
    {
        "_id": "6748825c93ffbcb1de80bcf1",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-11-28T14:46:52.794Z",
        "name": "MTP-CRYPT-K-KEY",
        "sprite": "None",
        "updated_at": "2024-11-28T14:46:52.794Z"
    },
    {
        "_id": "6748825793ffbcb1de80bce2",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-11-28T14:46:47.177Z",
        "name": "MTP-CRYPT-J-KEY",
        "sprite": "None",
        "updated_at": "2024-11-28T14:46:47.177Z"
    },
    {
        "_id": "6748826493ffbcb1de80bcfe",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-11-28T14:47:00.150Z",
        "name": "MTP-CRYPT-L-KEY",
        "sprite": "None",
        "updated_at": "2024-11-28T14:47:00.150Z"
    },
    {
        "_id": "6748828c93ffbcb1de80bd0d",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-11-28T14:47:40.023Z",
        "name": "MTP-CRYPT-M-KEY",
        "sprite": "None",
        "updated_at": "2024-11-28T14:47:40.023Z"
    },
    {
        "_id": "6748829093ffbcb1de80bd1b",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-11-28T14:47:44.733Z",
        "name": "MTP-CRYPT-N-KEY",
        "sprite": "None",
        "updated_at": "2024-11-28T14:47:44.733Z"
    },
    {
        "_id": "6748829693ffbcb1de80bd29",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-11-28T14:47:50.111Z",
        "name": "MTP-CRYPT-O-KEY",
        "sprite": "None",
        "updated_at": "2024-11-28T14:47:50.111Z"
    },
    {
        "_id": "6748829a93ffbcb1de80bd37",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-11-28T14:47:54.962Z",
        "name": "MTP-CRYPT-P-KEY",
        "sprite": "None",
        "updated_at": "2024-11-28T14:47:54.962Z"
    },
    {
        "_id": "6749e88487cd05c35c130e40",
        "__v": 0,
        "bag": 2,
        "family": "",
        "icon": "6357168cef066c46dfa173cd",
        "name": "Fae Essence",
        "rarity": 3,
        "type": "soul"
    },
    {
        "_id": "6749ee7187cd05c35c1332f2",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-11-29T16:40:17.967Z",
        "name": "EVENT-RUMORCOMPLETE",
        "sprite": "None",
        "updated_at": "2024-11-29T16:40:17.967Z"
    },
    {
        "_id": "674dfa0687cd05c35c145859",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-12-02T18:18:46.533Z",
        "name": "D-HOL-HOLLOWTREE-KEY",
        "sprite": "None",
        "updated_at": "2024-12-02T18:18:57.556Z"
    },
    {
        "_id": "674dfaa687cd05c35c145939",
        "__v": 0,
        "bag": 12,
        "family": "",
        "journal_name": "Hands in the Dark",
        "name": "DR-HollowTree-1-HOL",
        "rarity": 0,
        "region": [
            {
                "value": "6723c2adc1f51821d520e2a9",
                "label": "HollowTree"
            }
        ],
        "state": 0,
        "type": "rumor"
    },
    {
        "_id": "674f29cb87cd05c35c156d93",
        "__v": 0,
        "bag": 12,
        "family": "",
        "journal_name": "Cleansing the Waters",
        "name": "DR-Crib_of_the_Moon-1-CRB",
        "rarity": 0,
        "region": [
            {
                "value": "671293f0970321982243623b",
                "label": "CribOfTheMoon"
            }
        ],
        "state": 0,
        "type": "rumor"
    },
    {
        "_id": "674f29f287cd05c35c156de9",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-12-03T15:55:30.234Z",
        "name": "CRB-CLEANSED-KEY",
        "sprite": "None",
        "updated_at": "2024-12-03T15:55:30.234Z"
    },
    {
        "_id": "6750ca4a700cd2a91b942201",
        "__v": 0,
        "bag": 2,
        "family": "",
        "icon": "67d1bb5e7b8f1f9f24c629cb",
        "name": "Memory Fragment",
        "rarity": 3,
        "type": "soul"
    },
    {
        "_id": "674f396287cd05c35c157d6a",
        "__v": 0,
        "bag": 12,
        "family": "",
        "journal_name": "Beneath the Moon",
        "name": "DR-Moon_Temple-1-MTP",
        "rarity": 0,
        "region": [
            {
                "value": "64baf1aa2c5595e63d87f421",
                "label": "MoonTemple"
            }
        ],
        "state": 0,
        "type": "rumor"
    },
    {
        "_id": "6750cacc700cd2a91b942438",
        "__v": 0,
        "bag": 28,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "675b4c809c54914832aaa2b4",
        "minteable": true,
        "name": "Novice Explorer's Vest",
        "rarity": 0,
        "type": "Suits"
    },
    {
        "_id": "6750caa0700cd2a91b9422ac",
        "__v": 0,
        "bag": 28,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "675b4d089c54914832aaa3cc",
        "minteable": true,
        "name": "Novice Explorer's Hat",
        "rarity": 0,
        "type": "Headgear"
    },
    {
        "_id": "6750cb03700cd2a91b9425c7",
        "__v": 0,
        "bag": 28,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "675b4b119c54914832aaa1da",
        "minteable": true,
        "name": "Novice Explorer's Cane",
        "rarity": 0,
        "type": "Weapon"
    },
    {
        "_id": "6750cb31700cd2a91b9425f5",
        "__v": 0,
        "bag": 28,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "675b4cef9c54914832aaa378",
        "minteable": true,
        "name": "Adept Explorer's Hat",
        "rarity": 1,
        "type": "Headgear"
    },
    {
        "_id": "6750ccf4700cd2a91b942651",
        "__v": 0,
        "bag": 28,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "675b4ae29c54914832aaa16b",
        "minteable": true,
        "name": "Adept Explorer's Cane",
        "rarity": 1,
        "type": "Weapon"
    },
    {
        "_id": "6750cb56700cd2a91b942615",
        "__v": 0,
        "bag": 28,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "675b4c659c54914832aaa27b",
        "minteable": true,
        "name": "Adept Explorer's Vest",
        "rarity": 1,
        "type": "Suits"
    },
    {
        "_id": "6750cd99700cd2a91b942701",
        "__v": 0,
        "bag": 28,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "675b4c1a9c54914832aaa23c",
        "minteable": true,
        "name": "Expert Explorer's Vest",
        "rarity": 2,
        "type": "Suits"
    },
    {
        "_id": "6750cd41700cd2a91b942678",
        "__v": 0,
        "bag": 28,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "675b4cd39c54914832aaa31c",
        "minteable": true,
        "name": "Expert Explorer's Hat",
        "rarity": 2,
        "type": "Headgear"
    },
    {
        "_id": "6750cdd0700cd2a91b942741",
        "__v": 0,
        "bag": 28,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "675b4ac49c54914832aaa142",
        "minteable": true,
        "name": "Expert Explorer's Cane",
        "rarity": 2,
        "type": "Weapon"
    },
    {
        "_id": "6750ce04700cd2a91b942769",
        "__v": 0,
        "bag": 28,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "675b4cad9c54914832aaa2f3",
        "minteable": true,
        "name": "Master Explorer's Hat",
        "rarity": 3,
        "type": "Headgear"
    },
    {
        "_id": "6750cebd700cd2a91b94283d",
        "__v": 0,
        "bag": 28,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "675b4b439c54914832aaa203",
        "minteable": true,
        "name": "Master Explorer's Vest",
        "rarity": 3,
        "type": "Suits"
    },
    {
        "_id": "6750ceed700cd2a91b94285d",
        "__v": 0,
        "bag": 28,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "675b4aa69c54914832aaa119",
        "minteable": true,
        "name": "Master Explorer's Cane",
        "rarity": 3,
        "type": "Weapon"
    },
    {
        "_id": "6515f40f75fbe0ee3d0986e2",
        "__v": 1,
        "bag": 12,
        "family": "",
        "icon": "63f7a79655b8cb87f3417b24",
        "journal_name": "You already know the ropes",
        "name": "FTUE 2 - Second Characters and onward.",
        "rarity": 0,
        "region": [
            {
                "value": "64b01970d3d5ac314bfbbf17",
                "label": "HedgeWizardEncampment"
            }
        ],
        "state": 0,
        "type": "rumor"
    },
    {
        "_id": "67585b0ebe88b5e0330baf43",
        "__v": 0,
        "bag": 27,
        "burneable": false,
        "family": "Mount",
        "icon": "67a23b4e88ed77a5304d3f46",
        "minteable": true,
        "name": "[Template] Floating Bubble",
        "rarity": 2,
        "type": "Mount"
    },
    {
        "_id": "67585b33be88b5e0330baf55",
        "__v": 0,
        "bag": 27,
        "burneable": false,
        "family": "Mount",
        "icon": "67a23b6988ed77a5304d3f94",
        "minteable": true,
        "name": "[Template] Flying Disk",
        "rarity": 1,
        "type": "Mount"
    },
    {
        "_id": "67585b52be88b5e0330baf67",
        "__v": 0,
        "bag": 27,
        "burneable": false,
        "family": "Mount",
        "icon": "67a23ba788ed77a5304d4019",
        "minteable": true,
        "name": "[Template] Mini-Cockatrice",
        "rarity": 3,
        "type": "Mount"
    },
    {
        "_id": "67585c20be88b5e0330baf7f",
        "__v": 0,
        "bag": 27,
        "burneable": false,
        "family": "Mount",
        "icon": "67a23b5b88ed77a5304d3f6d",
        "minteable": true,
        "name": "[Template] Flying Carpet",
        "rarity": 1,
        "type": "Mount"
    },
    {
        "_id": "67585c44be88b5e0330baf98",
        "__v": 0,
        "bag": 27,
        "burneable": false,
        "family": "Mount",
        "icon": "63f7a79655b8cb87f3417b24",
        "minteable": false,
        "name": "Battle Warg",
        "rarity": 2,
        "type": "Mount"
    },
    {
        "_id": "67585c64be88b5e0330bafaa",
        "__v": 0,
        "bag": 27,
        "burneable": false,
        "family": "Mount",
        "icon": "67a23b9188ed77a5304d3ff2",
        "minteable": true,
        "name": "[Template] Jetpack",
        "rarity": 1,
        "type": "Mount"
    },
    {
        "_id": "67585ce6be88b5e0330bafce",
        "__v": 0,
        "bag": 27,
        "burneable": false,
        "family": "Mount",
        "icon": "63f7a79655b8cb87f3417b24",
        "minteable": false,
        "name": "Firework",
        "rarity": 3,
        "type": "Mount"
    },
    {
        "_id": "67585c9ebe88b5e0330bafbb",
        "__v": 0,
        "bag": 27,
        "burneable": false,
        "family": "Mount",
        "icon": "67a23bb988ed77a5304d4040",
        "minteable": false,
        "name": "Runibird",
        "rarity": 0,
        "type": "Mount"
    },
    {
        "_id": "67585d07be88b5e0330baff5",
        "__v": 0,
        "bag": 27,
        "burneable": false,
        "family": "Mount",
        "icon": "63f7a79655b8cb87f3417b24",
        "minteable": true,
        "name": "Paper Plane",
        "rarity": 1,
        "type": "Mount"
    },
    {
        "_id": "67585d30be88b5e0330bb163",
        "__v": 0,
        "bag": 27,
        "burneable": false,
        "family": "Mount",
        "icon": "67a23b7c88ed77a5304d3fcb",
        "minteable": true,
        "name": "[Template] Goblin Bike",
        "rarity": 2,
        "type": "Mount"
    },
    {
        "_id": "67585d58be88b5e0330bb175",
        "__v": 0,
        "bag": 27,
        "burneable": false,
        "family": "Mount",
        "icon": "67a23b4188ed77a5304d3f1f",
        "minteable": true,
        "name": "[Template] Alessar's Chair",
        "rarity": 3,
        "type": "Mount"
    },
    {
        "_id": "67585d70be88b5e0330bb188",
        "__v": 0,
        "bag": 27,
        "burneable": false,
        "family": "Mount",
        "icon": "67d1f9fc7b8f1f9f24c8da63",
        "minteable": true,
        "name": "Piggy",
        "rarity": 3,
        "type": "Mount"
    },
    {
        "_id": "67585d9abe88b5e0330bb1b3",
        "__v": 0,
        "bag": 27,
        "burneable": false,
        "family": "Mount",
        "icon": "67a23bcb88ed77a5304d4067",
        "minteable": true,
        "name": "Pony",
        "rarity": 3,
        "type": "Mount"
    },
    {
        "_id": "67585dc8be88b5e0330bbc58",
        "__v": 0,
        "bag": 27,
        "burneable": false,
        "family": "Mount",
        "icon": "67d1fa477b8f1f9f24c8f951",
        "minteable": true,
        "name": "Dino",
        "rarity": 3,
        "type": "Mount"
    },
    {
        "_id": "6758b3adbe88b5e0330cd8e5",
        "__v": 0,
        "bag": 12,
        "family": "",
        "journal_name": "The Golden Queen",
        "name": "R-Pyramid-Story1-PYR",
        "rarity": 0,
        "region": [
            {
                "value": "65f0b7af13f8c2161b6fd678",
                "label": "TheRiviera"
            }
        ],
        "state": 0,
        "type": "rumor"
    },
    {
        "_id": "6758b15ebe88b5e0330cd594",
        "__v": 0,
        "bag": 12,
        "family": "",
        "journal_name": "The Wild Rift",
        "name": "R-Windmill-Story1-WIN",
        "rarity": 0,
        "region": [
            {
                "value": "64b04fc0d3d5ac314bfbcf8a",
                "label": "TheWild"
            }
        ],
        "state": 0,
        "type": "rumor"
    },
    {
        "_id": "6758bc8dbe88b5e0330cde8a",
        "__v": 0,
        "bag": 2,
        "family": "",
        "icon": "66b2a0e647fe62f0e089fe7f",
        "name": "Dragon's Blood",
        "rarity": 0,
        "type": "resin"
    },
    {
        "_id": "6758bcebbe88b5e0330cdeae",
        "__v": 0,
        "bag": 2,
        "family": "",
        "icon": "66b2a0f747fe62f0e089fe8e",
        "name": "Amber",
        "rarity": 0,
        "type": "resin"
    },
    {
        "_id": "6758bd1bbe88b5e0330cdec0",
        "__v": 0,
        "bag": 2,
        "family": "",
        "icon": "66b2a11347fe62f0e089fe9d",
        "name": "Copal",
        "rarity": 0,
        "type": "resin"
    },
    {
        "_id": "6758bcd5be88b5e0330cde9c",
        "__v": 0,
        "bag": 2,
        "family": "",
        "icon": "66b2a12647fe62f0e089feac",
        "name": "Mastic",
        "rarity": 0,
        "type": "resin"
    },
    {
        "_id": "6758bd79be88b5e0330cded2",
        "__v": 0,
        "bag": 2,
        "family": "",
        "icon": "66b2a75047fe62f0e08a0004",
        "name": "Shellac",
        "rarity": 0,
        "type": "resin"
    },
    {
        "_id": "6758bd9abe88b5e0330cdee4",
        "__v": 0,
        "bag": 2,
        "family": "",
        "icon": "66b2a14b47fe62f0e089febb",
        "name": "Pitch",
        "rarity": 0,
        "type": "resin"
    },
    {
        "_id": "6758bf0abe88b5e0330cdf79",
        "__v": 0,
        "bag": 2,
        "family": "",
        "icon": "66b2a19447fe62f0e089fee5",
        "name": "Guaiac",
        "rarity": 0,
        "type": "resin"
    },
    {
        "_id": "6759cf0c9c54914832a463e1",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-12-11T17:42:36.433Z",
        "name": "MTP-MOONALTAR-B-KEY",
        "sprite": "None",
        "updated_at": "2024-12-11T17:42:36.433Z"
    },
    {
        "_id": "6759cf189c54914832a464ab",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-12-11T17:42:48.920Z",
        "name": "MTP-MOONALTAR-D-KEY",
        "sprite": "None",
        "updated_at": "2024-12-11T17:42:48.920Z"
    },
    {
        "_id": "6759cf149c54914832a4649e",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-12-11T17:42:44.961Z",
        "name": "MTP-MOONALTAR-C-KEY",
        "sprite": "None",
        "updated_at": "2024-12-11T17:42:44.961Z"
    },
    {
        "_id": "6759e22f9c54914832a4fc52",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-12-11T19:04:15.021Z",
        "name": "EVE-Selene-Key",
        "sprite": "None",
        "updated_at": "2024-12-11T19:04:15.021Z"
    },
    {
        "_id": "6759e4189c54914832a508b9",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-12-11T19:12:24.867Z",
        "name": "EVE-Diva-2-Key",
        "sprite": "None",
        "updated_at": "2024-12-11T19:12:24.867Z"
    },
    {
        "_id": "6759e4249c54914832a508c5",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-12-11T19:12:36.745Z",
        "name": "EVE-Diva-4-Key",
        "sprite": "None",
        "updated_at": "2024-12-11T19:12:36.745Z"
    },
    {
        "_id": "6759e4339c54914832a508d3",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-12-11T19:12:51.112Z",
        "name": "EVE-Tabernicus-2-Key",
        "sprite": "None",
        "updated_at": "2024-12-11T19:12:51.112Z"
    },
    {
        "_id": "6759e43e9c54914832a508e1",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-12-11T19:13:02.355Z",
        "name": "EVE-Tabernicus-4-Key",
        "sprite": "None",
        "updated_at": "2024-12-11T19:13:02.355Z"
    },
    {
        "_id": "6760584f01ea5543d61bb702",
        "__v": 0,
        "bag": 25,
        "created_at": "2024-12-16T16:41:51.372Z",
        "name": "MIR-Contract",
        "sprite": "6706e2b19703219822384aea",
        "updated_at": "2024-12-16T16:41:51.372Z"
    },
    {
        "_id": "6760890901ea5543d61cd30e",
        "__v": 0,
        "bag": 3,
        "burneable": false,
        "family": "",
        "icon": "675b4b119c54914832aaa1da",
        "minteable": false,
        "name": "Explorer Weapon Lvl 1",
        "rarity": 0,
        "type": "Weapon"
    },
    {
        "_id": "6760893e01ea5543d61cd364",
        "__v": 0,
        "bag": 3,
        "burneable": false,
        "family": "",
        "icon": "675b4ae29c54914832aaa16b",
        "minteable": false,
        "name": "Explorer Weapon Lvl 2",
        "rarity": 0,
        "type": "Weapon"
    },
    {
        "_id": "6760896501ea5543d61cd396",
        "__v": 0,
        "bag": 3,
        "burneable": false,
        "family": "",
        "icon": "675b4ac49c54914832aaa142",
        "minteable": false,
        "name": "Explorer Weapon Lvl 3",
        "rarity": 0,
        "type": "Weapon"
    },
    {
        "_id": "6760898d01ea5543d61cd3c8",
        "__v": 0,
        "bag": 3,
        "burneable": false,
        "family": "",
        "icon": "675b4aa69c54914832aaa119",
        "minteable": false,
        "name": "Explorer Weapon Lvl 4",
        "rarity": 0,
        "type": "Weapon"
    },
    {
        "_id": "676453d301ea5543d622b0a2",
        "__v": 0,
        "bag": 26,
        "created_at": "2024-12-19T17:11:47.179Z",
        "name": "D-HOL-FIREFLY-OVER",
        "sprite": "None",
        "updated_at": "2024-12-19T17:11:57.744Z"
    },
    {
        "_id": "67489efcdfd01309ab631192",
        "__v": 0,
        "bag": 32,
        "burneable": false,
        "family": "",
        "icon": "67477a18df4fd194bc1f4a26",
        "minteable": false,
        "name": "Exp Boost - Common",
        "rarity": 0,
        "type": "Boost"
    },
    {
        "_id": "67489f53dfd01309ab631193",
        "__v": 0,
        "bag": 32,
        "burneable": false,
        "family": "",
        "icon": "674779f0df4fd194bc1f49cc",
        "minteable": false,
        "name": "Exp Boost - Uncommon",
        "rarity": 1,
        "type": "Boost"
    },
    {
        "_id": "67489fb1dfd01309ab631195",
        "__v": 0,
        "bag": 32,
        "burneable": false,
        "family": "",
        "icon": "67477a05df4fd194bc1f49f9",
        "minteable": false,
        "name": "Exp Boost - Unique",
        "rarity": 3,
        "type": "Boost"
    },
    {
        "_id": "67489f94dfd01309ab631194",
        "__v": 0,
        "bag": 32,
        "burneable": false,
        "family": "",
        "icon": "674779dfdf4fd194bc1f499f",
        "minteable": false,
        "name": "Exp Boost - Rare",
        "rarity": 2,
        "type": "Boost"
    },
    {
        "_id": "67489ff8dfd01309ab631197",
        "__v": 0,
        "bag": 32,
        "burneable": false,
        "family": "",
        "icon": "674779a4df4fd194bc1f48fd",
        "minteable": false,
        "name": "Battle Drops Boost - Uncommon",
        "rarity": 1,
        "type": "Boost"
    },
    {
        "_id": "67489fdfdfd01309ab631196",
        "__v": 0,
        "bag": 32,
        "burneable": false,
        "family": "",
        "icon": "6747796bdf4fd194bc1f4802",
        "minteable": false,
        "name": "Battle Drops Boost - Common",
        "rarity": 0,
        "type": "Boost"
    },
    {
        "_id": "6748a02edfd01309ab631199",
        "__v": 0,
        "bag": 32,
        "burneable": false,
        "family": "",
        "icon": "674779bcdf4fd194bc1f4936",
        "minteable": false,
        "name": "Battle Drops Boost - Unique",
        "rarity": 3,
        "type": "Boost"
    },
    {
        "_id": "6748a01cdfd01309ab631198",
        "__v": 0,
        "bag": 32,
        "burneable": false,
        "family": "",
        "icon": "67477995df4fd194bc1f48d0",
        "minteable": false,
        "name": "Battle Drops Boost - Rare",
        "rarity": 2,
        "type": "Boost"
    },
    {
        "_id": "6748a04adfd01309ab63119a",
        "__v": 0,
        "bag": 32,
        "burneable": false,
        "family": "",
        "icon": "67477a18df4fd194bc1f4a26",
        "minteable": false,
        "name": "Gathering Drops Boost - Common",
        "rarity": 0,
        "type": "Boost"
    },
    {
        "_id": "6748a070dfd01309ab63119c",
        "__v": 0,
        "bag": 32,
        "burneable": false,
        "family": "",
        "icon": "67477a2bdf4fd194bc1f4a5c",
        "minteable": false,
        "name": "Gathering Drops Boost - Rare",
        "rarity": 2,
        "type": "Boost"
    },
    {
        "_id": "6748a05edfd01309ab63119b",
        "__v": 0,
        "bag": 32,
        "burneable": false,
        "family": "",
        "icon": "67477a40df4fd194bc1f4a89",
        "minteable": false,
        "name": "Gathering Drops Boost - Uncommon",
        "rarity": 1,
        "type": "Boost"
    },
    {
        "_id": "6748a085dfd01309ab63119d",
        "__v": 0,
        "bag": 32,
        "burneable": false,
        "family": "",
        "icon": "67477a4ddf4fd194bc1f4ac6",
        "minteable": false,
        "name": "Gathering Drops Boost - Unique",
        "rarity": 3,
        "type": "Boost"
    },
    {
        "_id": "6748a0a8dfd01309ab63119e",
        "__v": 0,
        "bag": 32,
        "burneable": false,
        "family": "",
        "icon": "67477a6adf4fd194bc1f4b1a",
        "minteable": false,
        "name": "Mana Offering Boost - Common",
        "rarity": 0,
        "type": "Boost"
    },
    {
        "_id": "6748a0bcdfd01309ab63119f",
        "__v": 0,
        "bag": 32,
        "burneable": false,
        "family": "",
        "icon": "67477a88df4fd194bc1f4b74",
        "minteable": false,
        "name": "Mana Offering Boost - Uncommon",
        "rarity": 1,
        "type": "Boost"
    },
    {
        "_id": "6748a0dfdfd01309ab6311a1",
        "__v": 0,
        "bag": 32,
        "burneable": false,
        "family": "",
        "icon": "67477a99df4fd194bc1f4ba1",
        "minteable": false,
        "name": "Mana Offering Boost - Unique",
        "rarity": 3,
        "type": "Boost"
    },
    {
        "_id": "6748a0cddfd01309ab6311a0",
        "__v": 0,
        "bag": 32,
        "burneable": false,
        "family": "",
        "icon": "67477a78df4fd194bc1f4b47",
        "minteable": false,
        "name": "Mana Offering Boost - Rare",
        "rarity": 2,
        "type": "Boost"
    },
    {
        "_id": "677e958c01ea5543d626bce5",
        "__v": 0,
        "bag": 26,
        "created_at": "2025-01-08T15:11:08.577Z",
        "name": "D-MTP-Gate-B",
        "sprite": "None",
        "updated_at": "2025-01-08T15:11:16.426Z"
    },
    {
        "_id": "677e958701ea5543d626bcd7",
        "__v": 0,
        "bag": 26,
        "created_at": "2025-01-08T15:11:03.841Z",
        "name": "D-MTP-Gate-A",
        "sprite": "None",
        "updated_at": "2025-01-08T15:11:12.534Z"
    },
    {
        "_id": "677e959801ea5543d626bd17",
        "__v": 0,
        "bag": 26,
        "created_at": "2025-01-08T15:11:20.497Z",
        "name": "D-MTP-Gate-C",
        "sprite": "None",
        "updated_at": "2025-01-08T15:11:20.497Z"
    },
    {
        "_id": "677e959c01ea5543d626bd26",
        "__v": 0,
        "bag": 26,
        "created_at": "2025-01-08T15:11:24.181Z",
        "name": "D-MTP-Gate-D",
        "sprite": "None",
        "updated_at": "2025-01-08T15:11:24.181Z"
    },
    {
        "_id": "6780273501ea5543d62a3e34",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "638665515c5c376fbbd4c5c5",
        "minteable": true,
        "name": "WHEEL TEST",
        "rarity": 0,
        "type": "Normal"
    },
    {
        "_id": "67851c9e01ea5543d62bd597",
        "__v": 0,
        "bag": 2,
        "burneable": false,
        "family": "",
        "icon": "65e6121631018cea1d5b1f6d",
        "minteable": false,
        "name": "Flower Petals",
        "rarity": 0,
        "type": "wood"
    },
    {
        "_id": "6789114c993403f087a80919",
        "__v": 0,
        "bag": 33,
        "color": "red",
        "created_at": "2025-01-16T14:01:48.549Z",
        "icon": "679a880488ed77a530361308",
        "image": "679a8ced88ed77a53036bd8c",
        "name": "Firewall Defender",
        "rarity": 1,
        "role": "tank",
        "updated_at": "2025-01-31T00:12:09.246Z"
    },
    {
        "_id": "678910fd993403f087a80908",
        "__v": 0,
        "bag": 33,
        "color": "red",
        "created_at": "2025-01-16T14:00:29.867Z",
        "icon": "679a880488ed77a530361308",
        "image": "679a882388ed77a5303619c7",
        "name": "Fire Fist",
        "rarity": 1,
        "role": "physical_dps",
        "updated_at": "2025-01-29T20:02:23.537Z"
    },
    {
        "_id": "678eb0fc353f07a47b561995",
        "__v": 0,
        "bag": 12,
        "family": "",
        "journal_name": "The Cockatrice Hunt",
        "name": "R-TheCockatriceHunt-TCH",
        "rarity": 0,
        "region": [
            {
                "value": "64baf15a2c5595e63d87f403",
                "label": "SouthernThicket"
            }
        ],
        "state": 0,
        "type": "rumor"
    },
    {
        "_id": "678f17ab353f07a47b56571a",
        "__v": 0,
        "bag": 33,
        "color": "blue",
        "created_at": "2025-01-21T03:42:35.238Z",
        "icon": "679a8ba488ed77a530369908",
        "image": "679a8d0b88ed77a53036bdcf",
        "name": "Scholar",
        "rarity": 1,
        "role": "magical_dps",
        "updated_at": "2025-01-31T00:23:51.437Z"
    },
    {
        "_id": "678f18b2353f07a47b565762",
        "__v": 0,
        "bag": 33,
        "color": "blue",
        "created_at": "2025-01-21T03:46:58.296Z",
        "icon": "679a8ba488ed77a530369908",
        "image": "679a8d1888ed77a53036bdf6",
        "name": "Arctic Warden",
        "rarity": 1,
        "role": "controller",
        "updated_at": "2025-01-31T01:48:10.874Z"
    },
    {
        "_id": "678f1aa2353f07a47b565807",
        "__v": 0,
        "bag": 33,
        "color": "green",
        "created_at": "2025-01-21T03:55:14.384Z",
        "icon": "679a8be988ed77a530369a45",
        "image": "679a8d2b88ed77a53036be0f",
        "name": "Beast Sage",
        "rarity": 1,
        "role": "tank",
        "updated_at": "2025-02-14T03:09:30.686Z"
    },
    {
        "_id": "678ff70e353f07a47b575c1f",
        "__v": 0,
        "bag": 25,
        "created_at": "2025-01-21T19:35:42.524Z",
        "name": "TCH-Bait",
        "sprite": "67537462be88b5e0330ad964",
        "updated_at": "2025-01-21T19:35:42.524Z"
    },
    {
        "_id": "678f1b62353f07a47b56581a",
        "__v": 0,
        "bag": 33,
        "color": "green",
        "created_at": "2025-01-21T03:58:26.880Z",
        "icon": "679a8be988ed77a530369a45",
        "image": "679a8d3988ed77a53036be40",
        "name": "Botanic Master",
        "rarity": 1,
        "role": "support",
        "updated_at": "2025-01-31T01:47:43.358Z"
    },
    {
        "_id": "678f1bbe353f07a47b56582d",
        "__v": 0,
        "bag": 33,
        "color": "yellow",
        "created_at": "2025-01-21T03:59:58.043Z",
        "icon": "679a8cb488ed77a53036bd3e",
        "image": "679a8d5488ed77a53036be8e",
        "name": "Rave Mage",
        "rarity": 1,
        "role": "hybrid_dps",
        "updated_at": "2025-01-31T02:18:04.326Z"
    },
    {
        "_id": "678f1bf0353f07a47b565840",
        "__v": 0,
        "bag": 33,
        "color": "yellow",
        "created_at": "2025-01-21T04:00:48.985Z",
        "icon": "679a8cb488ed77a53036bd3e",
        "image": "679a8d4788ed77a53036be67",
        "name": "Harmonic Guru",
        "rarity": 1,
        "role": "support",
        "updated_at": "2025-01-31T02:04:10.090Z"
    },
    {
        "_id": "6791049b353f07a47b5a6e71",
        "__v": 0,
        "bag": 25,
        "created_at": "2025-01-22T14:45:47.380Z",
        "name": "SOI-ChargedStone",
        "sprite": "67b8ad108bcb42fabbd467cc",
        "updated_at": "2025-02-25T14:39:01.551Z"
    },
    {
        "_id": "679104fb353f07a47b5a6f14",
        "__v": 0,
        "bag": 25,
        "created_at": "2025-01-22T14:47:23.885Z",
        "name": "SOI-Antenna",
        "sprite": "67b8acf68bcb42fabbd4673b",
        "updated_at": "2025-02-25T14:38:35.340Z"
    },
    {
        "_id": "6791055a353f07a47b5a6f53",
        "__v": 0,
        "bag": 25,
        "created_at": "2025-01-22T14:48:58.108Z",
        "name": "SOI-MagicCompass",
        "sprite": "6718a48123d403f3a8136fb7",
        "updated_at": "2025-01-22T14:48:58.108Z"
    },
    {
        "_id": "67912e84353f07a47b5b55a5",
        "__v": 0,
        "bag": 26,
        "created_at": "2025-01-22T17:44:36.977Z",
        "name": "MTP-JumpLedge-A-OVER",
        "sprite": "None",
        "updated_at": "2025-01-22T18:01:24.977Z"
    },
    {
        "_id": "6791327c353f07a47b5b706a",
        "__v": 0,
        "bag": 26,
        "created_at": "2025-01-22T18:01:32.087Z",
        "name": "MTP-JumpLedge-B-OVER",
        "sprite": "None",
        "updated_at": "2025-01-22T18:01:32.087Z"
    },
    {
        "_id": "67913283353f07a47b5b7077",
        "__v": 0,
        "bag": 26,
        "created_at": "2025-01-22T18:01:39.837Z",
        "name": "MTP-JumpLedge-C-OVER",
        "sprite": "None",
        "updated_at": "2025-01-22T18:01:39.837Z"
    },
    {
        "_id": "6791328a353f07a47b5b7084",
        "__v": 0,
        "bag": 26,
        "created_at": "2025-01-22T18:01:46.856Z",
        "name": "MTP-JumpLedge-D-OVER",
        "sprite": "None",
        "updated_at": "2025-01-22T18:01:46.856Z"
    },
    {
        "_id": "6791435d353f07a47b5c4bc3",
        "__v": 0,
        "bag": 28,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "6791429c353f07a47b5c4b63",
        "minteable": true,
        "name": "Scalebound Hat",
        "rarity": 3,
        "type": "Headgear"
    },
    {
        "_id": "679143a7353f07a47b5c4be3",
        "__v": 0,
        "bag": 28,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "679142ae353f07a47b5c4b7b",
        "minteable": true,
        "name": "Scalebound Armor",
        "rarity": 3,
        "type": "Suits"
    },
    {
        "_id": "679164dbeaefe9738f57ff6c",
        "__v": 0,
        "bag": 14,
        "burneable": false,
        "family": "",
        "icon": "67a28a1188ed77a5304eecf3",
        "minteable": true,
        "name": "Scalebound House",
        "rarity": 3,
        "type": "card"
    },
    {
        "_id": "679143e3353f07a47b5c4c03",
        "__v": 0,
        "bag": 28,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "679142be353f07a47b5c4b93",
        "minteable": true,
        "name": "Scalebound Staff",
        "rarity": 3,
        "type": "Weapon"
    },
    {
        "_id": "6792aa0325a5897bbdd9c86c",
        "__v": 0,
        "bag": 25,
        "created_at": "2025-01-23T20:43:47.995Z",
        "name": "TCH-FishermanTool",
        "sprite": "63644f11d22c16e85b82192d",
        "updated_at": "2025-01-23T20:44:19.025Z"
    },
    {
        "_id": "6793d8dc25a5897bbddb26c2",
        "__v": 0,
        "bag": 25,
        "created_at": "2025-01-24T18:15:56.014Z",
        "name": "TMF-Solution",
        "sprite": "6392ad69b385c89ccfd68f99",
        "updated_at": "2025-01-24T18:15:56.014Z"
    },
    {
        "_id": "6792ad4c25a5897bbdda0853",
        "__v": 0,
        "bag": 12,
        "family": "",
        "journal_name": "The Mirror Forest",
        "name": "R-TheMirrorForest",
        "rarity": 0,
        "region": [
            {
                "value": "64baf15a2c5595e63d87f403",
                "label": "SouthernThicket"
            }
        ],
        "state": 0,
        "type": "rumor"
    },
    {
        "_id": "6797b6d5e0bf4d85a99f54ef",
        "__v": 0,
        "bag": 3,
        "burneable": false,
        "family": "",
        "hidden": false,
        "icon": "67e6c4c51d59078818025558",
        "minteable": false,
        "name": "📜 Fae Light",
        "rarity": 0,
        "type": "Weapon"
    },
    {
        "_id": "679403485e1b93f9314b79be",
        "__v": 0,
        "bag": 12,
        "family": "",
        "journal_name": "XP You're Welcome",
        "name": "HWE-XP-DEBUG-LVL20",
        "rarity": 0,
        "region": [
            {
                "value": "64b01970d3d5ac314bfbbf17",
                "label": "HedgeWizardEncampment"
            }
        ],
        "state": 0,
        "type": "rumor"
    },
    {
        "_id": "6797b853e0bf4d85a99f5f46",
        "__v": 0,
        "bag": 3,
        "burneable": false,
        "family": "",
        "hidden": false,
        "icon": "636c0d16d22c16e85b821f3d",
        "minteable": false,
        "name": "📜Tactician's Helm",
        "rarity": 1,
        "type": "Headgear"
    },
    {
        "_id": "6797b8f1e0bf4d85a99f5fd7",
        "__v": 0,
        "bag": 3,
        "burneable": false,
        "family": "",
        "hidden": false,
        "icon": "636c0d2fd22c16e85b821f48",
        "minteable": false,
        "name": "📜Tactician's Armor",
        "rarity": 1,
        "type": "Suits"
    },
    {
        "_id": "6797ee37e0bf4d85a9a046b5",
        "__v": 0,
        "bag": 26,
        "created_at": "2025-01-27T20:36:07.247Z",
        "name": "HWE-EmissaryDone",
        "sprite": "None",
        "updated_at": "2025-01-27T20:36:07.247Z"
    },
    {
        "_id": "679901e1e0bf4d85a9a20f0a",
        "__v": 0,
        "bag": 12,
        "family": "",
        "journal_name": "Tester Prep: Level 5",
        "name": "Tester Prep: Level 5",
        "rarity": 0,
        "region": [
            {
                "value": "64b01970d3d5ac314bfbbf17",
                "label": "HedgeWizardEncampment"
            }
        ],
        "state": 0,
        "type": "rumor"
    },
    {
        "_id": "67990507e0bf4d85a9a22b58",
        "__v": 0,
        "bag": 12,
        "family": "",
        "journal_name": "Tester Prep: Level 10",
        "name": "Tester Prep: Level 10",
        "rarity": 0,
        "region": [
            {
                "value": "64b01970d3d5ac314bfbbf17",
                "label": "HedgeWizardEncampment"
            }
        ],
        "state": 0,
        "type": "rumor"
    },
    {
        "_id": "67990570e0bf4d85a9a22e60",
        "__v": 0,
        "bag": 12,
        "family": "",
        "journal_name": "Tester Prep: Level 20",
        "name": "Tester Prep: Level 20",
        "rarity": 0,
        "region": [
            {
                "value": "64b01970d3d5ac314bfbbf17",
                "label": "HedgeWizardEncampment"
            }
        ],
        "state": 0,
        "type": "rumor"
    },
    {
        "_id": "67990542e0bf4d85a9a22d5d",
        "__v": 0,
        "bag": 12,
        "family": "",
        "journal_name": "Tester Prep: Level 15",
        "name": "Tester Prep: Level 15",
        "rarity": 0,
        "region": [
            {
                "value": "64b01970d3d5ac314bfbbf17",
                "label": "HedgeWizardEncampment"
            }
        ],
        "state": 0,
        "type": "rumor"
    },
    {
        "_id": "679905a1e0bf4d85a9a22f63",
        "__v": 0,
        "bag": 12,
        "family": "",
        "journal_name": "Tester Prep: Level 25",
        "name": "Tester Prep: Level 25",
        "rarity": 0,
        "region": [
            {
                "value": "64b01970d3d5ac314bfbbf17",
                "label": "HedgeWizardEncampment"
            }
        ],
        "state": 0,
        "type": "rumor"
    },
    {
        "_id": "679a51a788ed77a53032899c",
        "__v": 0,
        "bag": 3,
        "burneable": false,
        "family": "",
        "icon": "636c0e2ed22c16e85b821f81",
        "minteable": false,
        "name": "Tester's Plated Helm",
        "rarity": 0,
        "type": "Headgear"
    },
    {
        "_id": "679a55d588ed77a53033027b",
        "__v": 0,
        "bag": 3,
        "burneable": false,
        "family": "",
        "icon": "63644a65d22c16e85b821780",
        "minteable": false,
        "name": "Tester's Jeweled Staff",
        "rarity": 1,
        "type": "Weapon"
    },
    {
        "_id": "679a50a488ed77a5303267cf",
        "__v": 0,
        "bag": 3,
        "burneable": false,
        "family": "",
        "icon": "636c0da0d22c16e85b821f5e",
        "minteable": false,
        "name": "Tester's Tactician Armor",
        "rarity": 1,
        "type": "Suits"
    },
    {
        "_id": "679a569c88ed77a530332933",
        "__v": 0,
        "bag": 3,
        "burneable": false,
        "family": "",
        "icon": "636c1304d22c16e85b8220e4",
        "minteable": false,
        "name": "Tester's Witchy Hat",
        "rarity": 1,
        "type": "Headgear"
    },
    {
        "_id": "679a57aa88ed77a530334e6b",
        "__v": 0,
        "bag": 3,
        "burneable": false,
        "family": "",
        "icon": "636c1314d22c16e85b8220ef",
        "minteable": false,
        "name": "Tester's Witchy Robes",
        "rarity": 1,
        "type": "Suits"
    },
    {
        "_id": "679aaa5088ed77a53038dd5d",
        "__v": 0,
        "bag": 2,
        "burneable": false,
        "family": "",
        "icon": "67ad2992de73c989d44bc716",
        "minteable": false,
        "name": "Lunar Shard",
        "rarity": 0,
        "type": "shard"
    },
    {
        "_id": "679a58e788ed77a5303363a0",
        "__v": 0,
        "bag": 3,
        "burneable": false,
        "family": "",
        "icon": "63644f94d22c16e85b821990",
        "minteable": false,
        "name": "Tester's Witchy Broom",
        "rarity": 1,
        "type": "Weapon"
    },
    {
        "_id": "679aaab088ed77a53038f181",
        "__v": 0,
        "bag": 2,
        "burneable": false,
        "family": "",
        "icon": "67ad2a6dde73c989d44bd4cd",
        "minteable": false,
        "name": "Lunar Essence",
        "rarity": 0,
        "type": "soul"
    },
    {
        "_id": "679aaa8988ed77a53038e691",
        "__v": 0,
        "bag": 2,
        "burneable": false,
        "family": "",
        "icon": "67ad29f7de73c989d44bd146",
        "minteable": false,
        "name": "Lunar Ember",
        "rarity": 0,
        "type": "ember"
    },
    {
        "_id": "679bf0ab88ed77a5303e6f28",
        "__v": 0,
        "bag": 12,
        "family": "",
        "journal_name": "Path of the Firewall Defender",
        "name": "R-PathOfTheFirewallDefender",
        "rarity": 0,
        "region": [
            {
                "value": "65f0b99513f8c2161b6fd7ba",
                "label": "AzureExpanse"
            }
        ],
        "state": 0,
        "type": "rumor"
    },
    {
        "_id": "679bd1be88ed77a5303cfd4c",
        "__v": 0,
        "bag": 3,
        "burneable": false,
        "family": "",
        "hidden": false,
        "icon": "636c12a2d22c16e85b8220c3",
        "minteable": false,
        "name": "📜Comfy Robes",
        "rarity": 0,
        "type": "Suits"
    },
    {
        "_id": "679bd26e88ed77a5303d0107",
        "__v": 0,
        "bag": 3,
        "burneable": false,
        "family": "",
        "hidden": false,
        "icon": "638665985c5c376fbbd4c5db",
        "minteable": false,
        "name": "📜Firebolt",
        "rarity": 0,
        "type": "Cantrip"
    },
    {
        "_id": "679b95c588ed77a53039f5d5",
        "__v": 0,
        "bag": 12,
        "family": "",
        "journal_name": "Secondary Measures",
        "name": "TEST-Secondary",
        "rarity": 0,
        "region": [
            {
                "value": "671293f0970321982243623b",
                "label": "CribOfTheMoon"
            }
        ],
        "state": 0,
        "type": "rumor"
    },
    {
        "_id": "679bee3888ed77a5303e51bd",
        "__v": 0,
        "bag": 12,
        "family": "",
        "journal_name": "Path of the Fire Fist",
        "name": "R-PathOfTheFireFist",
        "rarity": 0,
        "region": [
            {
                "value": "65f0b99513f8c2161b6fd7ba",
                "label": "AzureExpanse"
            }
        ],
        "state": 0,
        "type": "rumor"
    },
    {
        "_id": "679bf2b988ed77a5303e8876",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "63644e76d22c16e85b8218eb",
        "minteable": true,
        "name": "Red Candle",
        "rarity": 1,
        "type": "Weapon"
    },
    {
        "_id": "679bf70088ed77a5303e92a3",
        "__v": 0,
        "bag": 12,
        "family": "",
        "journal_name": "Path of the Arctic Warden",
        "name": "R-PathOfTheArcticWarden",
        "rarity": 0,
        "region": [
            {
                "value": "65f0b99513f8c2161b6fd7ba",
                "label": "AzureExpanse"
            }
        ],
        "state": 0,
        "type": "rumor"
    },
    {
        "_id": "679bf54b88ed77a5303e8caa",
        "__v": 0,
        "bag": 12,
        "family": "",
        "journal_name": "Path of the Scholar",
        "name": "R-PathOfTheScholar",
        "rarity": 0,
        "region": [
            {
                "value": "65f0b99513f8c2161b6fd7ba",
                "label": "AzureExpanse"
            }
        ],
        "state": 0,
        "type": "rumor"
    },
    {
        "_id": "679bf82988ed77a5303e9646",
        "__v": 0,
        "bag": 12,
        "family": "",
        "journal_name": "Path of the Beast Sage",
        "name": "R-PathOfTheBeastSage",
        "rarity": 0,
        "region": [
            {
                "value": "65f0b99513f8c2161b6fd7ba",
                "label": "AzureExpanse"
            }
        ],
        "state": 0,
        "type": "rumor"
    },
    {
        "_id": "679bf98388ed77a5303ea8d9",
        "__v": 0,
        "bag": 12,
        "family": "",
        "journal_name": "Path of the Botanic Master",
        "name": "R-PathOfTheBotanicMaster",
        "rarity": 0,
        "region": [
            {
                "value": "65f0b99513f8c2161b6fd7ba",
                "label": "AzureExpanse"
            }
        ],
        "state": 0,
        "type": "rumor"
    },
    {
        "_id": "679bfa9588ed77a5303eb693",
        "__v": 0,
        "bag": 12,
        "family": "",
        "journal_name": "Path of the Rave Mage",
        "name": "R-PathOfTheRaveMage",
        "rarity": 0,
        "region": [
            {
                "value": "65f0b99513f8c2161b6fd7ba",
                "label": "AzureExpanse"
            }
        ],
        "state": 0,
        "type": "rumor"
    },
    {
        "_id": "679bfb0d88ed77a5303eb96e",
        "__v": 0,
        "bag": 12,
        "family": "",
        "journal_name": "Path of the Harmonic Guru",
        "name": "R-PathOfTheHarmonicGuru",
        "rarity": 0,
        "region": [
            {
                "value": "65f0b99513f8c2161b6fd7ba",
                "label": "AzureExpanse"
            }
        ],
        "state": 0,
        "type": "rumor"
    },
    {
        "_id": "679c1b3e88ed77a530417635",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "67afc74f5c75aee0bc06eea1",
        "minteable": true,
        "name": "Mindfire Lance",
        "rarity": 1,
        "type": "High"
    },
    {
        "_id": "679c1ba088ed77a53041764d",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "67afc74f5c75aee0bc06eea1",
        "minteable": true,
        "name": "Mnemonic Echo",
        "rarity": 1,
        "type": "High"
    },
    {
        "_id": "679c1c7888ed77a5304177d2",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "67afc74f5c75aee0bc06eea1",
        "minteable": true,
        "name": "Cognitive Disonance",
        "rarity": 1,
        "type": "High"
    },
    {
        "_id": "679c279488ed77a530417f91",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "67afc6f25c75aee0bc06edb7",
        "minteable": true,
        "name": "Symbiotic Spores",
        "rarity": 1,
        "type": "HighCantrip"
    },
    {
        "_id": "679c1cce88ed77a53041781a",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "67afc6e75c75aee0bc06ed90",
        "minteable": true,
        "name": "Runic Barrage",
        "rarity": 1,
        "type": "HighCantrip"
    },
    {
        "_id": "679c27f588ed77a530417fa9",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "67afc7585c75aee0bc06eec8",
        "minteable": true,
        "name": "Order of the Eternal Rose",
        "rarity": 1,
        "type": "High"
    },
    {
        "_id": "679c284b88ed77a530417fcb",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "67afc7585c75aee0bc06eec8",
        "minteable": true,
        "name": "Healing Canopy",
        "rarity": 1,
        "type": "High"
    },
    {
        "_id": "679c289a88ed77a530417fe3",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "67afc7585c75aee0bc06eec8",
        "minteable": true,
        "name": "Sylvan Embrace",
        "rarity": 1,
        "type": "High"
    },
    {
        "_id": "679c2ae488ed77a530418121",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "67afc7585c75aee0bc06eec8",
        "minteable": true,
        "name": "Terrapin Shell",
        "rarity": 1,
        "type": "High"
    },
    {
        "_id": "679c2aa588ed77a5304180ff",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "67afc7585c75aee0bc06eec8",
        "minteable": true,
        "name": "Tooth and Claw",
        "rarity": 1,
        "type": "High"
    },
    {
        "_id": "679c31ea88ed77a53041841f",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "67afc7315c75aee0bc06ee7a",
        "minteable": true,
        "name": "Rave Wave",
        "rarity": 1,
        "type": "HighCantrip"
    },
    {
        "_id": "679c2b6e88ed77a530418151",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "67afc6f25c75aee0bc06edb7",
        "minteable": true,
        "name": "Law of the Jungle",
        "rarity": 1,
        "type": "HighCantrip"
    },
    {
        "_id": "679c2b2788ed77a530418139",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "67afc7585c75aee0bc06eec8",
        "minteable": true,
        "name": "Fury Bear",
        "rarity": 1,
        "type": "High"
    },
    {
        "_id": "679c322688ed77a530418437",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "67afc7945c75aee0bc06ef8b",
        "minteable": true,
        "name": "Neon Pulse",
        "rarity": 1,
        "type": "High"
    },
    {
        "_id": "679c327288ed77a53041844f",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "67afc7945c75aee0bc06ef8b",
        "minteable": true,
        "name": "Gwendolin's Groove",
        "rarity": 1,
        "type": "High"
    },
    {
        "_id": "679c32b788ed77a530418467",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "67afc7945c75aee0bc06ef8b",
        "minteable": true,
        "name": "Kundalini Bolt",
        "rarity": 1,
        "type": "High"
    },
    {
        "_id": "679c47e788ed77a530418fdc",
        "__v": 0,
        "bag": 3,
        "burneable": false,
        "family": "",
        "hidden": false,
        "icon": "6361612dc2284ba32e1bc367",
        "minteable": false,
        "name": "📜Heat Wave",
        "rarity": 0,
        "type": "Normal"
    },
    {
        "_id": "679c48c688ed77a530418ffe",
        "__v": 0,
        "bag": 3,
        "burneable": false,
        "family": "",
        "hidden": false,
        "icon": "63616121c2284ba32e1bc35c",
        "minteable": false,
        "name": "📜Wild Call",
        "rarity": 0,
        "type": "Normal"
    },
    {
        "_id": "679c494c88ed77a530419016",
        "__v": 0,
        "bag": 3,
        "burneable": false,
        "family": "",
        "hidden": false,
        "icon": "6386651e5c5c376fbbd4c5a4",
        "minteable": false,
        "name": "📜Chilling Breath",
        "rarity": 0,
        "type": "Normal"
    },
    {
        "_id": "679c499e88ed77a53041902e",
        "__v": 0,
        "bag": 3,
        "burneable": false,
        "family": "",
        "hidden": false,
        "icon": "638665a55c5c376fbbd4c5e6",
        "minteable": false,
        "name": "📜Sparkling Volley",
        "rarity": 0,
        "type": "Cantrip"
    },
    {
        "_id": "679c4d4488ed77a530419280",
        "__v": 0,
        "bag": 3,
        "burneable": false,
        "family": "",
        "hidden": false,
        "icon": "63644912d22c16e85b82171d",
        "minteable": false,
        "name": "📜Devouring Scythe",
        "rarity": 1,
        "type": "Weapon"
    },
    {
        "_id": "679cda8f88ed77a530419fa4",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "636c12e5d22c16e85b8220d9",
        "minteable": true,
        "name": "Arcanist Robes",
        "rarity": 0,
        "type": "Suits"
    },
    {
        "_id": "679ce06c88ed77a53041addc",
        "__v": 0,
        "bag": 3,
        "burneable": false,
        "family": "",
        "icon": "636c12a2d22c16e85b8220c3",
        "minteable": false,
        "name": "Tester's Comfy Robe",
        "rarity": 0,
        "type": "Suits"
    },
    {
        "_id": "679ce0cd88ed77a53041ae9d",
        "__v": 0,
        "bag": 3,
        "burneable": false,
        "family": "",
        "icon": "636c128bd22c16e85b8220b8",
        "minteable": false,
        "name": "Tester's Comfy Hood",
        "rarity": 0,
        "type": "Headgear"
    },
    {
        "_id": "679ce11c88ed77a53041af69",
        "__v": 0,
        "bag": 3,
        "burneable": false,
        "family": "",
        "icon": "63644d8ad22c16e85b8218b4",
        "minteable": false,
        "name": "Tester's Rusted Sickle",
        "rarity": 0,
        "type": "Weapon"
    },
    {
        "_id": "679ce19e88ed77a53041afb1",
        "__v": 0,
        "bag": 3,
        "burneable": false,
        "family": "",
        "icon": "638665985c5c376fbbd4c5db",
        "minteable": false,
        "name": "Tester's Firebolt",
        "rarity": 0,
        "type": "Cantrip"
    },
    {
        "_id": "679ce1ec88ed77a53041b1d9",
        "__v": 0,
        "bag": 3,
        "burneable": false,
        "family": "",
        "icon": "63616121c2284ba32e1bc35c",
        "minteable": false,
        "name": "Tester's Wild Call",
        "rarity": 0,
        "type": "Normal"
    },
    {
        "_id": "679cee5088ed77a53041c0e4",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "679d06b188ed77a530436bab",
        "minteable": true,
        "name": "Green Wizard Hat",
        "rarity": 1,
        "type": "Headgear"
    },
    {
        "_id": "679ce23b88ed77a53041b259",
        "__v": 0,
        "bag": 3,
        "burneable": false,
        "family": "",
        "icon": "6386651e5c5c376fbbd4c5a4",
        "minteable": false,
        "name": "Tester's Chilling Breath",
        "rarity": 0,
        "type": "Normal"
    },
    {
        "_id": "679ceee088ed77a53041c33f",
        "__v": 0,
        "bag": 3,
        "burneable": false,
        "family": "",
        "icon": "636c0e91d22c16e85b821fad",
        "minteable": false,
        "name": "Tester's Bold Straps",
        "rarity": 0,
        "type": "Suits"
    },
    {
        "_id": "679cef4888ed77a53041c3a9",
        "__v": 0,
        "bag": 3,
        "burneable": false,
        "family": "",
        "icon": "63644aeed22c16e85b8217cd",
        "minteable": false,
        "name": "Tester's Fearmonger",
        "rarity": 0,
        "type": "Weapon"
    },
    {
        "_id": "679cef0b88ed77a53041c361",
        "__v": 0,
        "bag": 3,
        "burneable": false,
        "family": "",
        "icon": "636c0e7ad22c16e85b821fa2",
        "minteable": false,
        "name": "Tester's Bold Circlet",
        "rarity": 0,
        "type": "Headgear"
    },
    {
        "_id": "679cefb588ed77a53041c420",
        "__v": 0,
        "bag": 3,
        "burneable": false,
        "family": "",
        "icon": "63616121c2284ba32e1bc35c",
        "minteable": false,
        "name": "Tester's Life Bloom",
        "rarity": 0,
        "type": "Normal"
    },
    {
        "_id": "679cf1b688ed77a53041e573",
        "__v": 0,
        "bag": 3,
        "burneable": false,
        "family": "",
        "icon": "6361612dc2284ba32e1bc367",
        "minteable": false,
        "name": "Tester's Heat Wave U",
        "rarity": 1,
        "type": "Normal"
    },
    {
        "_id": "679cf20288ed77a53041e75f",
        "__v": 0,
        "bag": 3,
        "burneable": false,
        "family": "",
        "icon": "6386651e5c5c376fbbd4c5a4",
        "minteable": false,
        "name": "Tester's Chilling Breath U",
        "rarity": 1,
        "type": "Normal"
    },
    {
        "_id": "679cf28a88ed77a53041efec",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "63644fe9d22c16e85b8219c7",
        "minteable": true,
        "name": "Fel Stone",
        "rarity": 1,
        "type": "Weapon"
    },
    {
        "_id": "679cf3ba88ed77a53041fb6e",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "63644d5dd22c16e85b82189e",
        "minteable": true,
        "name": "Plant",
        "rarity": 1,
        "type": "Weapon"
    },
    {
        "_id": "679d1b4e88ed77a5304722fd",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "636c1050d22c16e85b822080",
        "minteable": true,
        "name": "Kung Pow Robes",
        "rarity": 1,
        "type": "Suits"
    },
    {
        "_id": "679d1a8a88ed77a530470bda",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "663a82126e4bbca68f52e5b2",
        "minteable": true,
        "name": "Fisherman Garb",
        "rarity": 1,
        "type": "Suits"
    },
    {
        "_id": "679d182988ed77a53046d521",
        "__v": 0,
        "bag": 3,
        "burneable": false,
        "family": "",
        "icon": "638665985c5c376fbbd4c5db",
        "minteable": false,
        "name": "Tester's Firebolt U",
        "rarity": 1,
        "type": "Cantrip"
    },
    {
        "_id": "679d1bf288ed77a530472dc7",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "636c0fcad22c16e85b822031",
        "minteable": true,
        "name": "Assassin Garb",
        "rarity": 1,
        "type": "Suits"
    },
    {
        "_id": "679cf47788ed77a5304203ff",
        "__v": 0,
        "bag": 3,
        "burneable": false,
        "family": "",
        "hidden": false,
        "icon": "63616121c2284ba32e1bc35c",
        "minteable": false,
        "name": "📜Life Bloom",
        "rarity": 0,
        "type": "Normal"
    },
    {
        "_id": "679d1d2c88ed77a530473959",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "663a81d26e4bbca68f52e58a",
        "minteable": true,
        "name": "Dynasty Dress",
        "rarity": 1,
        "type": "Suits"
    },
    {
        "_id": "679d1dd288ed77a53047399f",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "636c0e66d22c16e85b821f97",
        "minteable": true,
        "name": "Spiked Plate",
        "rarity": 1,
        "type": "Suits"
    },
    {
        "_id": "679d228888ed77a5304799ac",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "663a81fe6e4bbca68f52e5a4",
        "minteable": true,
        "name": "Fishing Hat",
        "rarity": 1,
        "type": "Headgear"
    },
    {
        "_id": "679d246c88ed77a53048057d",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "636c1038d22c16e85b822075",
        "minteable": true,
        "name": "Kung Pow Band",
        "rarity": 1,
        "type": "Headgear"
    },
    {
        "_id": "679d251588ed77a5304819f5",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "636c0fb0d22c16e85b822026",
        "minteable": true,
        "name": "Assassin Cowl",
        "rarity": 1,
        "type": "Headgear"
    },
    {
        "_id": "679d265788ed77a530482036",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "663a81e46e4bbca68f52e597",
        "minteable": true,
        "name": "Dynasty Crown",
        "rarity": 1,
        "type": "Headgear"
    },
    {
        "_id": "679d275788ed77a5304829b2",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "636c0e4ed22c16e85b821f8c",
        "minteable": true,
        "name": "Spiked Helm",
        "rarity": 1,
        "type": "Headgear"
    },
    {
        "_id": "679d2ed488ed77a53048d410",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "679d072488ed77a530438717",
        "minteable": true,
        "name": "Moth's Eclipse",
        "rarity": 1,
        "type": "Weapon"
    },
    {
        "_id": "679d30bb88ed77a530490145",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "679d070488ed77a53043773f",
        "minteable": true,
        "name": "Moth Crown",
        "rarity": 1,
        "type": "Headgear"
    },
    {
        "_id": "679d2fef88ed77a53048ef43",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "679d06fe88ed77a530437591",
        "minteable": true,
        "name": "Moth Cloak",
        "rarity": 1,
        "type": "Suits"
    },
    {
        "_id": "679d341488ed77a530492039",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "679d068688ed77a53043635d",
        "minteable": true,
        "name": "Lunar Crown",
        "rarity": 1,
        "type": "Headgear"
    },
    {
        "_id": "679d321088ed77a530490ec6",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "679d069d88ed77a530436847",
        "minteable": true,
        "name": "Lunar Mirror",
        "rarity": 1,
        "type": "Weapon"
    },
    {
        "_id": "67a2626f88ed77a5304e6566",
        "__v": 0,
        "bag": 12,
        "family": "",
        "journal_name": "A Special Kind of Magic",
        "name": "R-SpecialKindOfMagic-SKM",
        "rarity": 0,
        "region": [
            {
                "value": "65f0b99513f8c2161b6fd7ba",
                "label": "AzureExpanse"
            }
        ],
        "state": 0,
        "type": "rumor"
    },
    {
        "_id": "679d334788ed77a530491720",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "679a97ea88ed77a53036c90d",
        "minteable": true,
        "name": "Lunar Regalia",
        "rarity": 1,
        "type": "Suits"
    },
    {
        "_id": "67a288e788ed77a5304eec7f",
        "__v": 0,
        "bag": 14,
        "burnable": false,
        "family": "",
        "icon": "67a28a7c88ed77a5304eedc7",
        "mintable": true,
        "name": "Large Scalebound House",
        "rarity": 3,
        "type": "card"
    },
    {
        "_id": "67a2925188ed77a5304f00b0",
        "__v": 0,
        "bag": 27,
        "burneable": false,
        "family": "Mount",
        "icon": "67d1f9317b8f1f9f24c8afe9",
        "minteable": true,
        "name": "[Template] Thopter",
        "rarity": 3,
        "type": "Mount"
    },
    {
        "_id": "67a2928388ed77a5304f00d4",
        "__v": 0,
        "bag": 27,
        "burneable": false,
        "family": "Mount",
        "icon": "67d1f9be7b8f1f9f24c8bcc9",
        "minteable": true,
        "name": "[Template] White Wolf",
        "rarity": 3,
        "type": "Mount"
    },
    {
        "_id": "67a2926e88ed77a5304f00c2",
        "__v": 0,
        "bag": 27,
        "burneable": false,
        "family": "Mount",
        "icon": "67d1f9197b8f1f9f24c8ad7e",
        "minteable": true,
        "name": "[Template] Boar",
        "rarity": 3,
        "type": "Mount"
    },
    {
        "_id": "67a4e1dfa4bc507f2cbd7f56",
        "__v": 0,
        "bag": 28,
        "burneable": true,
        "family": "",
        "hidden": true,
        "icon": "679d060b88ed77a5304358da",
        "minteable": true,
        "name": "[Template] Memory Stone",
        "rarity": 1,
        "type": "Weapon"
    },
    {
        "_id": "67a4e174a4bc507f2cbd7f36",
        "__v": 0,
        "bag": 28,
        "burneable": true,
        "family": "",
        "hidden": true,
        "icon": "679d080d88ed77a53043bc77",
        "minteable": true,
        "name": "[Template] Alberto's Coffe Cup",
        "rarity": 1,
        "type": "Weapon"
    },
    {
        "_id": "67a4e223a4bc507f2cbd7f76",
        "__v": 0,
        "bag": 28,
        "burneable": true,
        "family": "",
        "hidden": true,
        "icon": "679a964b88ed77a53036c828",
        "minteable": true,
        "name": "[Template] Rainbow Robe",
        "rarity": 3,
        "type": "Suits"
    },
    {
        "_id": "67a4e25ba4bc507f2cbd7f96",
        "__v": 0,
        "bag": 28,
        "burneable": true,
        "family": "",
        "hidden": true,
        "icon": "679a965188ed77a53036c840",
        "minteable": true,
        "name": "[Template] Rainbow Hat",
        "rarity": 3,
        "type": "Headgear"
    },
    {
        "_id": "67a4e2d4a4bc507f2cbd7fd6",
        "__v": 0,
        "bag": 28,
        "burneable": true,
        "family": "",
        "hidden": true,
        "icon": "679d061488ed77a5304358f2",
        "minteable": true,
        "name": "[Template] Game Buddy Suit",
        "rarity": 2,
        "type": "Suits"
    },
    {
        "_id": "67a4e295a4bc507f2cbd7fb6",
        "__v": 0,
        "bag": 28,
        "burneable": true,
        "family": "",
        "hidden": true,
        "icon": "679d064a88ed77a530435fcb",
        "minteable": true,
        "name": "[Template] Game Buddy Relic",
        "rarity": 2,
        "type": "Weapon"
    },
    {
        "_id": "67a4e3b5a4bc507f2cbd8062",
        "__v": 0,
        "bag": 28,
        "burneable": true,
        "family": "",
        "hidden": true,
        "icon": "679a96ff88ed77a53036c8bb",
        "minteable": true,
        "name": "[Template] Kitsune Headgear",
        "rarity": 1,
        "type": "Headgear"
    },
    {
        "_id": "67a4e388a4bc507f2cbd8042",
        "__v": 0,
        "bag": 28,
        "burneable": true,
        "family": "",
        "hidden": true,
        "icon": "679a96c488ed77a53036c892",
        "minteable": true,
        "name": "[Template] Kitsune Suit",
        "rarity": 1,
        "type": "Suits"
    },
    {
        "_id": "67a4e30da4bc507f2cbd8002",
        "__v": 0,
        "bag": 28,
        "burneable": true,
        "family": "",
        "hidden": true,
        "icon": "679d063188ed77a530435d16",
        "minteable": true,
        "name": "[Template] Game Buddy Headgear",
        "rarity": 2,
        "type": "Headgear"
    },
    {
        "_id": "67a4e353a4bc507f2cbd8022",
        "__v": 0,
        "bag": 28,
        "burneable": true,
        "family": "",
        "hidden": true,
        "icon": "679a97bc88ed77a53036c8e4",
        "minteable": true,
        "name": "[Template] Kitsune Relic",
        "rarity": 1,
        "type": "Weapon"
    },
    {
        "_id": "67a521dba4bc507f2cbf19b2",
        "__v": 0,
        "bag": 3,
        "burneable": false,
        "family": "",
        "hidden": false,
        "icon": "67afc71b5c75aee0bc06ee2c",
        "minteable": false,
        "name": "📜 Ignition Fist",
        "rarity": 1,
        "type": "HighCantrip"
    },
    {
        "_id": "67a52223a4bc507f2cbf19ca",
        "__v": 0,
        "bag": 3,
        "burneable": false,
        "family": "",
        "hidden": false,
        "icon": "67afc74f5c75aee0bc06eea1",
        "minteable": false,
        "name": "📜 Cognitive Dissonance",
        "rarity": 1,
        "type": "High"
    },
    {
        "_id": "67a5226ba4bc507f2cbf1a08",
        "__v": 0,
        "bag": 3,
        "burneable": false,
        "family": "",
        "hidden": false,
        "icon": "67afc6f25c75aee0bc06edb7",
        "minteable": false,
        "name": "📜 Law of the Jungle",
        "rarity": 1,
        "type": "HighCantrip"
    },
    {
        "_id": "67a522ada4bc507f2cbf1a20",
        "__v": 0,
        "bag": 3,
        "burneable": false,
        "family": "",
        "hidden": false,
        "icon": "67afc7945c75aee0bc06ef8b",
        "minteable": false,
        "name": "📜 Rejuvenating Aura",
        "rarity": 1,
        "type": "High"
    },
    {
        "_id": "67a52429a4bc507f2cbf2395",
        "__v": 0,
        "bag": 3,
        "burneable": false,
        "family": "",
        "hidden": false,
        "icon": "67afc7585c75aee0bc06eec8",
        "minteable": false,
        "name": "📜 Sylvan Embrace",
        "rarity": 1,
        "type": "High"
    },
    {
        "_id": "67a523f5a4bc507f2cbf237d",
        "__v": 0,
        "bag": 3,
        "burneable": false,
        "family": "",
        "hidden": false,
        "icon": "67afc74f5c75aee0bc06eea1",
        "minteable": false,
        "name": "📜 Fortunate Blizzard",
        "rarity": 1,
        "type": "High"
    },
    {
        "_id": "67a52362a4bc507f2cbf1a48",
        "__v": 0,
        "bag": 3,
        "burneable": false,
        "family": "",
        "hidden": false,
        "icon": "67afc71b5c75aee0bc06ee2c",
        "minteable": false,
        "name": "📜 Personal Heat Shield",
        "rarity": 1,
        "type": "HighCantrip"
    },
    {
        "_id": "67a5245fa4bc507f2cbf23ae",
        "__v": 0,
        "bag": 3,
        "burneable": false,
        "family": "",
        "hidden": false,
        "icon": "67afc7315c75aee0bc06ee7a",
        "minteable": false,
        "name": "📜 Rave Wave",
        "rarity": 1,
        "type": "HighCantrip"
    },
    {
        "_id": "67aa67a5db9efc46981ca72a",
        "__v": 0,
        "bag": 25,
        "created_at": "2025-02-10T20:55:01.758Z",
        "name": "WAS-Baozhai's Spell Book",
        "sprite": "6392ad69b385c89ccfd68f99",
        "updated_at": "2025-02-10T20:55:01.758Z"
    },
    {
        "_id": "67aa296c98dc32564c2273a6",
        "__v": 0,
        "bag": 3,
        "burneable": false,
        "family": "",
        "hidden": false,
        "icon": "6364496bd22c16e85b82173e",
        "minteable": false,
        "name": "📜 Old Pilgrim's Staff",
        "rarity": 0,
        "type": "Weapon"
    },
    {
        "_id": "67aa6149db9efc46981b948b",
        "__v": 0,
        "bag": 12,
        "family": "",
        "journal_name": "The Witch's Assistant",
        "name": "R-TheWitch'sAssistant-TWA",
        "rarity": 0,
        "region": [
            {
                "value": "64baf15a2c5595e63d87f403",
                "label": "SouthernThicket"
            }
        ],
        "state": 0,
        "type": "rumor"
    },
    {
        "_id": "67aa2e7298dc32564c22b47b",
        "__v": 0,
        "bag": 3,
        "burneable": false,
        "family": "",
        "hidden": false,
        "icon": "636c121dd22c16e85b8220a2",
        "minteable": false,
        "name": "📜Hip Shades",
        "rarity": 0,
        "type": "Headgear"
    },
    {
        "_id": "67aa6e1bdb9efc46981cf41c",
        "__v": 0,
        "bag": 3,
        "burneable": false,
        "family": "",
        "hidden": false,
        "icon": "638665515c5c376fbbd4c5c5",
        "minteable": false,
        "name": "Love Seeker???",
        "rarity": 0,
        "type": "Normal"
    },
    {
        "_id": "67abd4ffb4ee8b4c5f3da4f8",
        "__v": 0,
        "bag": 2,
        "burneable": false,
        "family": "",
        "icon": "635716beef066c46dfa173e4",
        "minteable": false,
        "name": "Feral Shard II",
        "rarity": 1,
        "type": "shard"
    },
    {
        "_id": "67abc752b4ee8b4c5f3cdbff",
        "__v": 0,
        "bag": 3,
        "burneable": false,
        "family": "",
        "hidden": false,
        "icon": "679d06d588ed77a530436e4b",
        "minteable": false,
        "name": "📜 Flower Hat",
        "rarity": 0,
        "type": "Headgear"
    },
    {
        "_id": "67abc464b4ee8b4c5f3cc232",
        "__v": 0,
        "bag": 3,
        "burneable": false,
        "family": "",
        "hidden": true,
        "icon": "636c13a5d22c16e85b822126",
        "minteable": false,
        "name": "DEV Glasses",
        "rarity": 3,
        "type": "Headgear"
    },
    {
        "_id": "67abc4ddb4ee8b4c5f3cc2cd",
        "__v": 0,
        "bag": 3,
        "burneable": false,
        "family": "",
        "hidden": false,
        "icon": "638665e85c5c376fbbd4c613",
        "minteable": false,
        "name": "📜 Frost Phaser II",
        "rarity": 1,
        "type": "Cantrip"
    },
    {
        "_id": "67abd621b4ee8b4c5f3dddde",
        "__v": 0,
        "bag": 2,
        "burneable": false,
        "family": "",
        "icon": "635716e1ef066c46dfa173ef",
        "minteable": false,
        "name": "Feral Ember II",
        "rarity": 1,
        "type": "ember"
    },
    {
        "_id": "67abd81fb4ee8b4c5f3e04f7",
        "__v": 0,
        "bag": 2,
        "burneable": false,
        "family": "",
        "icon": "67a6b0fe8e2bca692b53c5fe",
        "minteable": false,
        "name": "Feral Essence II",
        "rarity": 1,
        "type": "soul"
    },
    {
        "_id": "67ac056fb4ee8b4c5f3fa75f",
        "__v": 0,
        "bag": 2,
        "burneable": false,
        "family": "",
        "icon": "63571774ef066c46dfa17426",
        "minteable": false,
        "name": "Chittering Shard II",
        "rarity": 1,
        "type": "shard"
    },
    {
        "_id": "67ac0836b4ee8b4c5f3fa7d7",
        "__v": 0,
        "bag": 2,
        "burneable": false,
        "family": "",
        "icon": "635718bdef066c46dfa174bc",
        "minteable": false,
        "name": "Cunning Ember II",
        "rarity": 1,
        "type": "ember"
    },
    {
        "_id": "67ac05b9b4ee8b4c5f3fa77d",
        "__v": 0,
        "bag": 2,
        "burneable": false,
        "family": "",
        "icon": "63571787ef066c46dfa17432",
        "minteable": false,
        "name": "Chittering Ember II",
        "rarity": 1,
        "type": "ember"
    },
    {
        "_id": "67ac060db4ee8b4c5f3fa79b",
        "__v": 0,
        "bag": 2,
        "burneable": false,
        "family": "",
        "icon": "67a6b2b28e2bca692b53c96e",
        "minteable": false,
        "name": "Chittering Essence II",
        "rarity": 1,
        "type": "soul"
    },
    {
        "_id": "67ac080ab4ee8b4c5f3fa7b9",
        "__v": 0,
        "bag": 2,
        "burneable": false,
        "family": "",
        "icon": "635718a0ef066c46dfa174b1",
        "minteable": false,
        "name": "Cunning Shard II",
        "rarity": 1,
        "type": "shard"
    },
    {
        "_id": "67ac0e25b4ee8b4c5f3fa853",
        "__v": 0,
        "bag": 2,
        "burneable": false,
        "family": "",
        "icon": "67a6b4758e2bca692b53ccc0",
        "minteable": false,
        "name": "Disturbing Essence II",
        "rarity": 1,
        "type": "soul"
    },
    {
        "_id": "67ac0dc0b4ee8b4c5f3fa831",
        "__v": 0,
        "bag": 2,
        "burneable": false,
        "family": "",
        "icon": "6357181aef066c46dfa17476",
        "minteable": false,
        "name": "Disturbing Ember II",
        "rarity": 1,
        "type": "ember"
    },
    {
        "_id": "67ac0effb4ee8b4c5f3fa925",
        "__v": 0,
        "bag": 2,
        "burneable": false,
        "family": "",
        "icon": "67a6ace68e2bca692b53bf11",
        "minteable": false,
        "name": "Pulsing Essence II",
        "rarity": 1,
        "type": "soul"
    },
    {
        "_id": "67ac0876b4ee8b4c5f3fa7f5",
        "__v": 0,
        "bag": 2,
        "burneable": false,
        "family": "",
        "icon": "67a6b5e38e2bca692b53cfae",
        "minteable": false,
        "name": "Cunning Essence II",
        "rarity": 1,
        "type": "soul"
    },
    {
        "_id": "67ac0d89b4ee8b4c5f3fa813",
        "__v": 0,
        "bag": 2,
        "burneable": false,
        "family": "",
        "icon": "650a2f44d110673cefee70b6",
        "minteable": false,
        "name": "Disturbing Shard II",
        "rarity": 1,
        "type": "shard"
    },
    {
        "_id": "67ac0e85b4ee8b4c5f3fa8b7",
        "__v": 0,
        "bag": 2,
        "burneable": false,
        "family": "",
        "icon": "63571635ef066c46dfa173a1",
        "minteable": false,
        "name": "Pulsing Shard II",
        "rarity": 1,
        "type": "shard"
    },
    {
        "_id": "67ac0eb6b4ee8b4c5f3fa8d5",
        "__v": 0,
        "bag": 2,
        "burneable": false,
        "family": "",
        "icon": "6357164cef066c46dfa173ac",
        "minteable": false,
        "name": "Pulsing Ember II",
        "rarity": 1,
        "type": "ember"
    },
    {
        "_id": "67ac1008b4ee8b4c5f3fa97b",
        "__v": 0,
        "bag": 2,
        "burneable": false,
        "family": "",
        "icon": "67ad2a02de73c989d44bd16d",
        "minteable": false,
        "name": "Lunar Ember II",
        "rarity": 1,
        "type": "ember"
    },
    {
        "_id": "67ac107bb4ee8b4c5f3fa999",
        "__v": 0,
        "bag": 2,
        "burneable": false,
        "family": "",
        "icon": "67ad2a79de73c989d44bda94",
        "minteable": false,
        "name": "Lunar Essence II",
        "rarity": 1,
        "type": "soul"
    },
    {
        "_id": "67ac0f94b4ee8b4c5f3fa95d",
        "__v": 0,
        "bag": 2,
        "burneable": false,
        "family": "",
        "icon": "67ad299dde73c989d44bcab7",
        "minteable": false,
        "name": "Lunar Shard II",
        "rarity": 1,
        "type": "shard"
    },
    {
        "_id": "67ac1175b4ee8b4c5f3faa6a",
        "__v": 0,
        "bag": 2,
        "burneable": false,
        "family": "",
        "icon": "67aa6737db9efc46981ca5db",
        "minteable": false,
        "name": "Timeless Ember",
        "rarity": 0,
        "type": "ember"
    },
    {
        "_id": "67ac10deb4ee8b4c5f3faa3e",
        "__v": 0,
        "bag": 2,
        "burneable": false,
        "family": "",
        "icon": "66b29f9747fe62f0e089fe17",
        "minteable": false,
        "name": "Timeless Shard",
        "rarity": 0,
        "type": "shard"
    },
    {
        "_id": "67ac11ebb4ee8b4c5f3faae7",
        "__v": 0,
        "bag": 2,
        "burneable": false,
        "family": "",
        "icon": "67aa6759db9efc46981ca652",
        "minteable": false,
        "name": "Timeless Essence",
        "rarity": 0,
        "type": "soul"
    },
    {
        "_id": "67ac1373b4ee8b4c5f3fac08",
        "__v": 0,
        "bag": 2,
        "burneable": false,
        "family": "",
        "icon": "67aa685edb9efc46981ccaae",
        "minteable": false,
        "name": "Golden Essence",
        "rarity": 0,
        "type": "soul"
    },
    {
        "_id": "67b610a31889263e0938b3fa",
        "__v": 0,
        "bag": 3,
        "burneable": false,
        "family": "",
        "hidden": false,
        "icon": "63616114c2284ba32e1bc350",
        "minteable": false,
        "name": "📜 Zoom Attack",
        "rarity": 0,
        "type": "Normal"
    },
    {
        "_id": "67acb7dff9c16eea71fc534d",
        "__v": 0,
        "bag": 3,
        "burneable": false,
        "family": "",
        "hidden": false,
        "icon": "67d1b8677b8f1f9f24c6270d",
        "minteable": true,
        "name": "Scalebound Chest",
        "rarity": 3,
        "sub_type": "66a407b48678f3f706330770",
        "type": "Furniture"
    },
    {
        "_id": "67ac1277b4ee8b4c5f3fab96",
        "__v": 0,
        "bag": 2,
        "burneable": false,
        "family": "",
        "icon": "66ba977487375013b0349605",
        "minteable": false,
        "name": "Golden Shard",
        "rarity": 0,
        "type": "shard"
    },
    {
        "_id": "67b7e14e8bcb42fabbd1b95e",
        "__v": 0,
        "bag": 3,
        "burneable": false,
        "family": "",
        "hidden": false,
        "icon": "6386651e5c5c376fbbd4c5a4",
        "minteable": false,
        "name": "Restriction test C. recipe",
        "rarity": 0,
        "type": "Cantrip"
    },
    {
        "_id": "67ac12d7b4ee8b4c5f3fabc2",
        "__v": 0,
        "bag": 2,
        "burneable": false,
        "family": "",
        "icon": "67aa67f1db9efc46981cbfed",
        "minteable": false,
        "name": "Golden Ember",
        "rarity": 0,
        "type": "ember"
    },
    {
        "_id": "67b7e4f48bcb42fabbd1bc98",
        "__v": 0,
        "bag": 3,
        "burneable": false,
        "family": "",
        "hidden": false,
        "icon": "6386651e5c5c376fbbd4c5a4",
        "minteable": false,
        "name": "Restrict. TEST None-Yes",
        "rarity": 0,
        "type": "Cantrip"
    },
    {
        "_id": "67bdcc4dc8a44bc80bfc0bd9",
        "__v": 0,
        "bag": 3,
        "burneable": false,
        "family": "",
        "hidden": false,
        "icon": "66bcc6e387375013b038c5ee",
        "minteable": false,
        "name": "📜 Amber Guard Spear",
        "rarity": 1,
        "type": "Weapon"
    },
    {
        "_id": "67b7e5648bcb42fabbd1bdee",
        "__v": 0,
        "bag": 3,
        "burneable": false,
        "family": "",
        "hidden": false,
        "icon": "6386651e5c5c376fbbd4c5a4",
        "minteable": false,
        "name": "Restrict. TEST Blue-No",
        "rarity": 0,
        "type": "Cantrip"
    },
    {
        "_id": "67b7e3d18bcb42fabbd1bb42",
        "__v": 0,
        "bag": 3,
        "burneable": false,
        "family": "",
        "hidden": false,
        "icon": "6386651e5c5c376fbbd4c5a4",
        "minteable": false,
        "name": "Restrict. TEST Blue-Yes",
        "rarity": 0,
        "type": "Cantrip"
    },
    {
        "_id": "67bdcc8ac8a44bc80bfc0c27",
        "__v": 0,
        "bag": 3,
        "burneable": false,
        "family": "",
        "hidden": false,
        "icon": "66bcc6f887375013b038c633",
        "minteable": false,
        "name": "📜 Druid Crown",
        "rarity": 1,
        "type": "Headgear"
    },
    {
        "_id": "67b8a45a8bcb42fabbd400a9",
        "__v": 0,
        "bag": 12,
        "family": "",
        "journal_name": "YOU GET A MOUNT AND YOU GET A MOUNT!",
        "name": "TEST - Get a mount",
        "rarity": 0,
        "region": [
            {
                "value": "64b01970d3d5ac314bfbbf17",
                "label": "HedgeWizardEncampment"
            }
        ],
        "state": 0,
        "type": "rumor"
    },
    {
        "_id": "67bdccf7c8a44bc80bfc0c75",
        "__v": 0,
        "bag": 3,
        "burneable": false,
        "family": "",
        "hidden": false,
        "icon": "66bcc73687375013b038c6fe",
        "minteable": false,
        "name": "📜 Shadow Mask",
        "rarity": 0,
        "type": "Headgear"
    },
    {
        "_id": "67bdcd28c8a44bc80bfc0cc3",
        "__v": 0,
        "bag": 3,
        "burneable": false,
        "family": "",
        "hidden": false,
        "icon": "679d06fe88ed77a530437591",
        "minteable": false,
        "name": "📜 Moth Cloak",
        "rarity": 1,
        "type": "Suits"
    },
    {
        "_id": "67c5eca719bccbbdb0204eaf",
        "__v": 0,
        "bag": 26,
        "created_at": "2025-03-03T17:53:23.182Z",
        "name": "CRB-BAG-B-KEY",
        "sprite": "None",
        "updated_at": "2025-03-03T17:53:59.845Z"
    },
    {
        "_id": "67bdcd3fc8a44bc80bfc0d15",
        "__v": 0,
        "bag": 3,
        "burneable": false,
        "family": "",
        "hidden": false,
        "icon": "679d069d88ed77a530436847",
        "minteable": false,
        "name": "📜 Lunar Mirror",
        "rarity": 1,
        "type": "Weapon"
    },
    {
        "_id": "67c5ecbc19bccbbdb0204eca",
        "__v": 0,
        "bag": 26,
        "created_at": "2025-03-03T17:54:04.114Z",
        "name": "CRB-BAG-C-KEY",
        "sprite": "None",
        "updated_at": "2025-03-03T17:54:04.114Z"
    },
    {
        "_id": "67c5db6419bccbbdb01fbf8e",
        "__v": 0,
        "bag": 26,
        "created_at": "2025-03-03T16:40:04.821Z",
        "name": "HOL-CHEST-E-KEY",
        "sprite": "None",
        "updated_at": "2025-03-03T16:40:04.821Z"
    },
    {
        "_id": "67c5ec9319bccbbdb0204ea1",
        "__v": 0,
        "bag": 26,
        "created_at": "2025-03-03T17:53:23.182Z",
        "name": "CRB-BAG-A-KEY",
        "sprite": "None",
        "updated_at": "2025-03-03T17:53:23.182Z"
    },
    {
        "_id": "67c5ecc019bccbbdb0204ed8",
        "__v": 0,
        "bag": 26,
        "created_at": "2025-03-03T17:54:08.224Z",
        "name": "CRB-BAG-D-KEY",
        "sprite": "None",
        "updated_at": "2025-03-03T17:54:08.224Z"
    },
    {
        "_id": "67c5ecc419bccbbdb0204ee7",
        "__v": 0,
        "bag": 26,
        "created_at": "2025-03-03T17:54:12.723Z",
        "name": "CRB-BAG-E-KEY",
        "sprite": "None",
        "updated_at": "2025-03-03T17:54:12.723Z"
    },
    {
        "_id": "67c5ecc919bccbbdb0204ef5",
        "__v": 0,
        "bag": 26,
        "created_at": "2025-03-03T17:54:17.195Z",
        "name": "CRB-BAG-F-KEY",
        "sprite": "None",
        "updated_at": "2025-03-03T17:54:17.195Z"
    },
    {
        "_id": "67c5ecd319bccbbdb0204f10",
        "__v": 0,
        "bag": 26,
        "created_at": "2025-03-03T17:54:27.429Z",
        "name": "CRB-BAG-H-KEY",
        "sprite": "None",
        "updated_at": "2025-03-03T17:54:27.429Z"
    },
    {
        "_id": "67c5ecd819bccbbdb0204f1e",
        "__v": 0,
        "bag": 26,
        "created_at": "2025-03-03T17:54:32.384Z",
        "name": "CRB-BAG-I-KEY",
        "sprite": "None",
        "updated_at": "2025-03-03T17:54:32.384Z"
    },
    {
        "_id": "67c5ecdc19bccbbdb0204f2d",
        "__v": 0,
        "bag": 26,
        "created_at": "2025-03-03T17:54:36.660Z",
        "name": "CRB-BAG-J-KEY",
        "sprite": "None",
        "updated_at": "2025-03-03T17:54:36.660Z"
    },
    {
        "_id": "67c5ecce19bccbbdb0204f03",
        "__v": 0,
        "bag": 26,
        "created_at": "2025-03-03T17:54:22.228Z",
        "name": "CRB-BAG-G-KEY",
        "sprite": "None",
        "updated_at": "2025-03-03T17:54:22.228Z"
    },
    {
        "_id": "67c5ece019bccbbdb0204f3b",
        "__v": 0,
        "bag": 26,
        "created_at": "2025-03-03T17:54:40.953Z",
        "name": "CRB-BAG-K-KEY",
        "sprite": "None",
        "updated_at": "2025-03-03T17:54:40.953Z"
    },
    {
        "_id": "67c5ff6cec26e8bdac695f6e",
        "__v": 0,
        "bag": 26,
        "created_at": "2025-03-03T19:13:48.658Z",
        "name": "CBR-CHEST-D-KEY",
        "sprite": "None",
        "updated_at": "2025-03-03T19:13:48.658Z"
    },
    {
        "_id": "67c75b528aaa19ba55550339",
        "__v": 0,
        "bag": 26,
        "created_at": "2025-03-04T19:58:10.798Z",
        "name": "MTP-SUN-KEY-2",
        "sprite": "None",
        "updated_at": "2025-03-04T19:58:10.798Z"
    },
    {
        "_id": "67c5ff79ec26e8bdac695f89",
        "__v": 0,
        "bag": 26,
        "created_at": "2025-03-03T19:14:01.400Z",
        "name": "CBR-CHEST-F-KEY",
        "sprite": "None",
        "updated_at": "2025-03-03T19:14:01.400Z"
    },
    {
        "_id": "67c5ff72ec26e8bdac695f7c",
        "__v": 0,
        "bag": 26,
        "created_at": "2025-03-03T19:13:54.411Z",
        "name": "CBR-CHEST-E-KEY",
        "sprite": "None",
        "updated_at": "2025-03-03T19:13:54.411Z"
    },
    {
        "_id": "67c75b578aaa19ba55550347",
        "__v": 0,
        "bag": 26,
        "created_at": "2025-03-04T19:58:15.536Z",
        "name": "MTP-SUN-KEY-3",
        "sprite": "None",
        "updated_at": "2025-03-04T19:58:15.536Z"
    },
    {
        "_id": "67c5ff7eec26e8bdac695f98",
        "__v": 0,
        "bag": 26,
        "created_at": "2025-03-03T19:14:06.368Z",
        "name": "CBR-CHEST-G-KEY",
        "sprite": "None",
        "updated_at": "2025-03-03T19:14:06.368Z"
    },
    {
        "_id": "67c861c157449ab8d7813765",
        "__v": 0,
        "bag": 26,
        "created_at": "2025-03-05T14:37:53.852Z",
        "name": "MTP-CHEST-C-KEY",
        "sprite": "None",
        "updated_at": "2025-03-05T17:49:14.536Z"
    },
    {
        "_id": "67c861b257449ab8d7813749",
        "__v": 0,
        "bag": 26,
        "created_at": "2025-03-05T14:37:38.640Z",
        "name": "MTP-CHEST-A-KEY",
        "sprite": "None",
        "updated_at": "2025-03-05T17:49:08.315Z"
    },
    {
        "_id": "67c861b757449ab8d7813758",
        "__v": 0,
        "bag": 26,
        "created_at": "2025-03-05T14:37:43.139Z",
        "name": "MTP-CHEST-B-KEY",
        "sprite": "None",
        "updated_at": "2025-03-05T17:49:11.464Z"
    },
    {
        "_id": "67c75b678aaa19ba555503a1",
        "__v": 0,
        "bag": 26,
        "created_at": "2025-03-04T19:58:31.244Z",
        "name": "MTP-MOON-KEY-2",
        "sprite": "None",
        "updated_at": "2025-03-04T19:58:31.244Z"
    },
    {
        "_id": "67c75b6f8aaa19ba555503c7",
        "__v": 0,
        "bag": 26,
        "created_at": "2025-03-04T19:58:39.741Z",
        "name": "MTP-MOON-KEY-4",
        "sprite": "None",
        "updated_at": "2025-03-04T19:58:39.741Z"
    },
    {
        "_id": "67c75b5b8aaa19ba55550355",
        "__v": 0,
        "bag": 26,
        "created_at": "2025-03-04T19:58:19.606Z",
        "name": "MTP-SUN-KEY-4",
        "sprite": "None",
        "updated_at": "2025-03-04T19:58:19.606Z"
    },
    {
        "_id": "67c75b6b8aaa19ba555503b9",
        "__v": 0,
        "bag": 26,
        "created_at": "2025-03-04T19:58:35.741Z",
        "name": "MTP-MOON-KEY-3",
        "sprite": "None",
        "updated_at": "2025-03-04T19:58:35.741Z"
    },
    {
        "_id": "67c861c557449ab8d7813773",
        "__v": 0,
        "bag": 26,
        "created_at": "2025-03-05T14:37:57.613Z",
        "name": "MTP-CHEST-D-KEY",
        "sprite": "None",
        "updated_at": "2025-03-05T17:49:18.241Z"
    },
    {
        "_id": "67c861c957449ab8d7813781",
        "__v": 0,
        "bag": 26,
        "created_at": "2025-03-05T14:38:01.388Z",
        "name": "MTP-CHEST-E-KEY",
        "sprite": "None",
        "updated_at": "2025-03-05T17:49:21.481Z"
    },
    {
        "_id": "67c861d157449ab8d781379e",
        "__v": 0,
        "bag": 26,
        "created_at": "2025-03-05T14:38:09.550Z",
        "name": "MTP-CHEST-G-KEY",
        "sprite": "None",
        "updated_at": "2025-03-05T17:49:27.655Z"
    },
    {
        "_id": "67c861cd57449ab8d781378f",
        "__v": 0,
        "bag": 26,
        "created_at": "2025-03-05T14:38:05.853Z",
        "name": "MTP-CHEST-F-KEY",
        "sprite": "None",
        "updated_at": "2025-03-05T17:49:24.445Z"
    },
    {
        "_id": "67cf0c56ece370104d2f1ad3",
        "__v": 0,
        "bag": 12,
        "family": "",
        "journal_name": "The Big Bad Wolf",
        "name": "RUMOR TEST - INTERACTIONS",
        "rarity": 0,
        "region": [
            {
                "value": "64baf17d2c5595e63d87f412",
                "label": "NorthernThicket"
            }
        ],
        "state": 0,
        "type": "rumor"
    },
    {
        "_id": "67c861d957449ab8d78137ab",
        "__v": 0,
        "bag": 26,
        "created_at": "2025-03-05T14:38:17.089Z",
        "name": "MTP-CHEST-H-KEY",
        "sprite": "None",
        "updated_at": "2025-03-05T17:49:31.524Z"
    },
    {
        "_id": "67cf43e6ece370104d30e657",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "6361612dc2284ba32e1bc367",
        "minteable": true,
        "name": "Red - No",
        "rarity": 0,
        "type": "Normal"
    },
    {
        "_id": "67d06db7ece370104d340725",
        "__v": 0,
        "bag": 28,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "67c748321d5bd786edf21cc6",
        "minteable": true,
        "name": "Novice Scientist Goggles",
        "rarity": 0,
        "type": "Headgear"
    },
    {
        "_id": "67d06e80ece370104d3417c0",
        "__v": 0,
        "bag": 28,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "67c7418a1d5bd786edf0f60d",
        "minteable": true,
        "name": "Novice Scientist Suit",
        "rarity": 0,
        "type": "Suits"
    },
    {
        "_id": "67d06f2bece370104d3428aa",
        "__v": 0,
        "bag": 28,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "67d077b7ece370104d3496da",
        "minteable": true,
        "name": "Adept Scientist Goggles",
        "rarity": 1,
        "type": "Headgear"
    },
    {
        "_id": "67d06f63ece370104d3428ca",
        "__v": 0,
        "bag": 28,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "67c7424d1d5bd786edf0f877",
        "minteable": true,
        "name": "Adept Scientist Suit",
        "rarity": 1,
        "type": "Suits"
    },
    {
        "_id": "67d06eccece370104d342132",
        "__v": 0,
        "bag": 28,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "67c7498b1d5bd786edf226cc",
        "minteable": true,
        "name": "Novice Scientist Rod",
        "rarity": 0,
        "type": "Weapon"
    },
    {
        "_id": "67cf43eaece370104d30e666",
        "__v": 0,
        "bag": 3,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "6361612dc2284ba32e1bc367",
        "minteable": true,
        "name": "Red - Yes",
        "rarity": 0,
        "type": "Normal"
    },
    {
        "_id": "67d06f91ece370104d342fb9",
        "__v": 0,
        "bag": 28,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "67c749931d5bd786edf22952",
        "minteable": true,
        "name": "Adept Scientist Rod",
        "rarity": 1,
        "type": "Weapon"
    },
    {
        "_id": "67d06fcbece370104d343485",
        "__v": 0,
        "bag": 28,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "67c748a41d5bd786edf22625",
        "minteable": true,
        "name": "Expert Scientist Goggles",
        "rarity": 2,
        "type": "Headgear"
    },
    {
        "_id": "67d070c9ece370104d343e42",
        "__v": 0,
        "bag": 28,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "67c743c21d5bd786edf1422c",
        "minteable": true,
        "name": "Master Scientist Suit",
        "rarity": 3,
        "type": "Suits"
    },
    {
        "_id": "67d06ff4ece370104d343938",
        "__v": 0,
        "bag": 28,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "67c743001d5bd786edf0f8c9",
        "minteable": true,
        "name": "Expert Scientist Suit",
        "rarity": 2,
        "type": "Suits"
    },
    {
        "_id": "67d07019ece370104d343958",
        "__v": 0,
        "bag": 28,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "67c7499e1d5bd786edf2310d",
        "minteable": true,
        "name": "Expert Scientist Rod",
        "rarity": 2,
        "type": "Weapon"
    },
    {
        "_id": "67d19e5a7b8f1f9f24c47b37",
        "__v": 0,
        "bag": 3,
        "burneable": false,
        "family": "",
        "hidden": false,
        "icon": "6386651e5c5c376fbbd4c5a4",
        "minteable": false,
        "name": "📜 Ice Spear",
        "rarity": 0,
        "type": "Normal"
    },
    {
        "_id": "67d07073ece370104d343978",
        "__v": 0,
        "bag": 28,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "67c749281d5bd786edf22677",
        "minteable": true,
        "name": "Master Scientist Goggles",
        "rarity": 3,
        "type": "Headgear"
    },
    {
        "_id": "67d070f1ece370104d343e62",
        "__v": 0,
        "bag": 28,
        "burneable": true,
        "family": "",
        "hidden": false,
        "icon": "67c749a21d5bd786edf23236",
        "minteable": true,
        "name": "Master Scientist Rod",
        "rarity": 3,
        "type": "Weapon"
    },
    {
        "_id": "67d19ee97b8f1f9f24c47c05",
        "__v": 0,
        "bag": 3,
        "burneable": false,
        "family": "",
        "hidden": false,
        "icon": "636c0e7ad22c16e85b821fa2",
        "minteable": false,
        "name": "📜 Bold Circlet",
        "rarity": 0,
        "type": "Headgear"
    },
    {
        "_id": "67d19f907b8f1f9f24c497c4",
        "__v": 0,
        "bag": 3,
        "burneable": false,
        "family": "",
        "hidden": false,
        "icon": "636c128bd22c16e85b8220b8",
        "minteable": false,
        "name": "📜 Comfy Hood",
        "rarity": 0,
        "type": "Headgear"
    },
    {
        "_id": "67d996bc285f4f44c2a4e97a",
        "__v": 0,
        "bag": 28,
        "burneable": false,
        "family": "",
        "hidden": false,
        "icon": "67d99842285f4f44c2a53666",
        "minteable": false,
        "name": "Bear Patch",
        "rarity": 1,
        "type": "Headgear"
    },
    {
        "_id": "67dc429f30aa3b5c3d806d03",
        "__v": 0,
        "bag": 26,
        "created_at": "2025-03-20T16:30:23.167Z",
        "name": "HOL-HEDGERESCUE-1",
        "sprite": "None",
        "updated_at": "2025-03-20T16:30:23.167Z"
    },
    {
        "_id": "6791c3d025a5897bbdd4ff4e",
        "__v": 0,
        "bag": 3,
        "burneable": false,
        "description": null,
        "family": "",
        "hidden": false,
        "icon": "671e560ac1f51821d5198006",
        "minteable": true,
        "name": "[Template] Druidic Chair",
        "rarity": 1,
        "sub_type": "66a407b48678f3f706330770",
        "type": "Furniture"
    },
    {
        "_id": "67d19ea27b8f1f9f24c47b6b",
        "__v": 0,
        "bag": 3,
        "burneable": false,
        "family": "",
        "hidden": false,
        "icon": "638665435c5c376fbbd4c5ba",
        "minteable": false,
        "name": "📜 Decoy",
        "rarity": 0,
        "type": "Normal"
    },
    {
        "_id": "67d19ec57b8f1f9f24c47bbb",
        "__v": 0,
        "bag": 3,
        "burneable": false,
        "family": "",
        "hidden": false,
        "icon": "636c0e91d22c16e85b821fad",
        "minteable": false,
        "name": "📜 Bold Straps",
        "rarity": 0,
        "type": "Suits"
    },
    {
        "_id": "6791c45825a5897bbdd50118",
        "__v": 0,
        "bag": 3,
        "burneable": false,
        "description": null,
        "family": "",
        "hidden": false,
        "icon": "671e56acc1f51821d5198081",
        "minteable": true,
        "name": "[Template] Druidic Table",
        "rarity": 1,
        "sub_type": "66a4077e8678f3f706330620",
        "type": "Furniture"
    },
    {
        "_id": "6791c67325a5897bbdd50c66",
        "__v": 0,
        "bag": 3,
        "burneable": false,
        "description": null,
        "family": "",
        "hidden": false,
        "icon": "66ba63a6707a46ffb5bd46bf",
        "minteable": true,
        "name": "[Template] Crystalcore Chair",
        "rarity": 2,
        "sub_type": "66a407b48678f3f706330770",
        "type": "Furniture"
    },
    {
        "_id": "6791c51125a5897bbdd504d1",
        "__v": 0,
        "bag": 3,
        "burneable": false,
        "description": null,
        "family": "",
        "hidden": false,
        "icon": "671e56ccc1f51821d51980ba",
        "minteable": true,
        "name": "[Template] Druidic Wardrobe",
        "rarity": 1,
        "sub_type": "66a407b48678f3f706330770",
        "type": "Furniture"
    },
    {
        "_id": "6791c5f325a5897bbdd506a4",
        "__v": 0,
        "bag": 3,
        "burneable": false,
        "description": null,
        "family": "",
        "hidden": false,
        "icon": "671e5674c1f51821d519802f",
        "minteable": true,
        "name": "[Template] Druidic Shelves",
        "rarity": 1,
        "sub_type": "66a407b48678f3f706330770",
        "type": "Furniture"
    },
    {
        "_id": "6791c4d225a5897bbdd50301",
        "__v": 0,
        "bag": 3,
        "burneable": false,
        "description": null,
        "family": "",
        "hidden": false,
        "icon": "671e5696c1f51821d5198058",
        "minteable": true,
        "name": "[Template] Druidic Small Table",
        "rarity": 1,
        "sub_type": "66a4077e8678f3f706330620",
        "type": "Furniture"
    },
    {
        "_id": "6791c6d625a5897bbdd50e3f",
        "__v": 0,
        "bag": 3,
        "burneable": false,
        "description": null,
        "family": "",
        "hidden": false,
        "icon": "67381d0ea71472a5d75f75a1",
        "minteable": true,
        "name": "[Template] Crystalcore Table",
        "rarity": 2,
        "sub_type": "66a407b48678f3f706330770",
        "type": "Furniture"
    },
    {
        "_id": "6791c72825a5897bbdd5101b",
        "__v": 0,
        "bag": 3,
        "burneable": false,
        "description": null,
        "family": "",
        "hidden": false,
        "icon": "671e55a3c1f51821d5197f94",
        "minteable": true,
        "name": "[Template] Crystalcore Small Table",
        "rarity": 2,
        "sub_type": "66a407b48678f3f706330770",
        "type": "Furniture"
    },
    {
        "_id": "6791c78925a5897bbdd513eb",
        "__v": 0,
        "bag": 3,
        "burneable": false,
        "description": null,
        "family": "",
        "hidden": false,
        "icon": "669fe8933175d6ddb6cd962d",
        "minteable": true,
        "name": "[Template] Crystalcore Wardrobe",
        "rarity": 3,
        "sub_type": "66a407b48678f3f706330770",
        "type": "Furniture"
    },
    {
        "_id": "6791c98225a5897bbdd52170",
        "__v": 0,
        "bag": 3,
        "burneable": false,
        "description": null,
        "family": "",
        "hidden": false,
        "icon": "672f9f99c1f51821d529ba05",
        "minteable": true,
        "name": "[Template] \"Roar of the Cockatrice\"",
        "rarity": 1,
        "sub_type": "66a407b48678f3f706330770",
        "type": "Art"
    },
    {
        "_id": "6791c85025a5897bbdd515cd",
        "__v": 0,
        "bag": 3,
        "burneable": false,
        "description": null,
        "family": "",
        "hidden": false,
        "icon": "67381d40a71472a5d75f75ca",
        "minteable": true,
        "name": "[Template] Crystalcore Shelves",
        "rarity": 3,
        "sub_type": "66a407b48678f3f706330770",
        "type": "Furniture"
    },
    {
        "_id": "6791c8c725a5897bbdd519a9",
        "__v": 0,
        "bag": 3,
        "burneable": false,
        "description": null,
        "family": "",
        "hidden": false,
        "icon": "669fe78b3175d6ddb6cd95a2",
        "minteable": true,
        "name": "[Template] \"Encampment Sunset\"",
        "rarity": 1,
        "sub_type": "66a407b48678f3f706330770",
        "type": "Art"
    },
    {
        "_id": "6791c92725a5897bbdd51f85",
        "__v": 0,
        "bag": 3,
        "burneable": false,
        "description": null,
        "family": "",
        "hidden": false,
        "icon": "672f9f7bc1f51821d529b9b3",
        "minteable": true,
        "name": "[Template] \"Coming Through\"",
        "rarity": 1,
        "sub_type": "66a407b48678f3f706330770",
        "type": "Art"
    },
    {
        "_id": "6791c9d825a5897bbdd5235e",
        "__v": 0,
        "bag": 3,
        "burneable": false,
        "description": null,
        "family": "",
        "hidden": false,
        "icon": "672f9fb8c1f51821d529ba57",
        "minteable": true,
        "name": "[Template] Small Mage Statue",
        "rarity": 1,
        "sub_type": "66a407b48678f3f706330770",
        "type": "Art"
    },
    {
        "_id": "6791caf525a5897bbdd53def",
        "__v": 0,
        "bag": 3,
        "burneable": false,
        "description": null,
        "family": "",
        "hidden": false,
        "icon": "672f9fa8c1f51821d529ba2e",
        "minteable": true,
        "name": "[Template] Small Frog Statue",
        "rarity": 1,
        "sub_type": "66a407b48678f3f706330770",
        "type": "Art"
    },
    {
        "_id": "6791cb4725a5897bbdd53fe3",
        "__v": 0,
        "bag": 3,
        "burneable": false,
        "description": null,
        "family": "",
        "hidden": false,
        "icon": "669fe8493175d6ddb6cd95fe",
        "minteable": true,
        "name": "[Template] \"The Four\"",
        "rarity": 2,
        "sub_type": "66a407b48678f3f706330770",
        "type": "Art"
    },
    {
        "_id": "6791cb8b25a5897bbdd541da",
        "__v": 0,
        "bag": 3,
        "burneable": false,
        "description": null,
        "family": "",
        "hidden": false,
        "icon": "672f9ff5c1f51821d529bae2",
        "minteable": true,
        "name": "[Template] \"Cuckoo's Land\"",
        "rarity": 2,
        "sub_type": "66a407b48678f3f706330770",
        "type": "Art"
    },
    {
        "_id": "6791cbd425a5897bbdd543d4",
        "__v": 0,
        "bag": 3,
        "burneable": false,
        "description": null,
        "family": "",
        "hidden": false,
        "icon": "672f9fd9c1f51821d529baa9",
        "minteable": true,
        "name": "[Template] City Stone Replica",
        "rarity": 2,
        "sub_type": "66a407b48678f3f706330770",
        "type": "Art"
    },
    {
        "_id": "6791cc2b25a5897bbdd545d1",
        "__v": 0,
        "bag": 3,
        "burneable": false,
        "description": null,
        "family": "",
        "hidden": false,
        "icon": "669fe8a83175d6ddb6cd964d",
        "minteable": true,
        "name": "[Template] Cockatrice Statue",
        "rarity": 3,
        "sub_type": "66a407b48678f3f706330770",
        "type": "Art"
    },
    {
        "_id": "6791ccfb25a5897bbdd549d4",
        "__v": 0,
        "bag": 3,
        "burneable": false,
        "description": null,
        "family": "",
        "hidden": false,
        "icon": "66ba5e7b707a46ffb5bd4307",
        "minteable": true,
        "name": "[Template] Floating Chair",
        "rarity": 1,
        "sub_type": "66a407b48678f3f706330770",
        "type": "Furniture"
    },
    {
        "_id": "6791cc7825a5897bbdd547d1",
        "__v": 0,
        "bag": 3,
        "burneable": false,
        "description": null,
        "family": "",
        "hidden": false,
        "icon": "672f9fc8c1f51821d529ba80",
        "minteable": true,
        "name": "[Template] Portal Replica",
        "rarity": 3,
        "sub_type": "66a407658678f3f706330615",
        "type": "Art"
    },
    {
        "_id": "6791cdbb25a5897bbdd54de3",
        "__v": 0,
        "bag": 3,
        "burneable": false,
        "description": null,
        "family": "",
        "hidden": false,
        "icon": "67381d9aa71472a5d75f769d",
        "minteable": true,
        "name": "[Template] Floating Wizard Figurine",
        "rarity": 1,
        "sub_type": "66a407658678f3f706330615",
        "type": "Art"
    },
    {
        "_id": "6791cd5125a5897bbdd54bda",
        "__v": 0,
        "bag": 3,
        "burneable": false,
        "description": null,
        "family": "",
        "hidden": false,
        "icon": "67381d86a71472a5d75f7674",
        "minteable": true,
        "name": "[Template] Floating Small Table",
        "rarity": 1,
        "sub_type": "66a407b48678f3f706330770",
        "type": "Furniture"
    },
    {
        "_id": "6791ce5125a5897bbdd55229",
        "__v": 0,
        "bag": 3,
        "burneable": false,
        "description": null,
        "family": "",
        "hidden": false,
        "icon": "67381dd4a71472a5d75f76d6",
        "minteable": true,
        "name": "[Template] Holographic Sunset",
        "rarity": 1,
        "sub_type": "66a407b48678f3f706330770",
        "type": "Art"
    },
    {
        "_id": "6791ceb025a5897bbdd55438",
        "__v": 0,
        "bag": 3,
        "burneable": false,
        "description": null,
        "family": "",
        "hidden": false,
        "icon": "672f9f14c1f51821d529b8e8",
        "minteable": true,
        "name": "[Template] Wizard Plushie",
        "rarity": 1,
        "sub_type": "66a407658678f3f706330615",
        "type": "Miscelaneous"
    },
    {
        "_id": "6791cf6b25a5897bbdd5585f",
        "__v": 0,
        "bag": 3,
        "burneable": false,
        "description": null,
        "family": "",
        "hidden": false,
        "icon": "67381d6ba71472a5d75f762b",
        "minteable": true,
        "name": "[Template] Floating Table",
        "rarity": 2,
        "sub_type": "66a407b48678f3f706330770",
        "type": "Furniture"
    },
    {
        "_id": "6791cef725a5897bbdd5564a",
        "__v": 0,
        "bag": 3,
        "burneable": false,
        "description": null,
        "family": "",
        "hidden": false,
        "icon": "66ba63d3707a46ffb5bd46f7",
        "minteable": true,
        "name": "[Template] Floating Sofa",
        "rarity": 2,
        "sub_type": "66a407b48678f3f706330770",
        "type": "Furniture"
    },
    {
        "_id": "6791cfda25a5897bbdd55a77",
        "__v": 0,
        "bag": 3,
        "burneable": false,
        "description": null,
        "family": "",
        "hidden": false,
        "icon": "672f9f3dc1f51821d529b938",
        "minteable": true,
        "name": "[Template] Premium Wizard Plushie",
        "rarity": 2,
        "sub_type": "66a407658678f3f706330615",
        "type": "Miscelaneous"
    },
    {
        "_id": "6791d0ab25a5897bbdd560fc",
        "__v": 0,
        "bag": 3,
        "burneable": false,
        "description": null,
        "family": "",
        "hidden": false,
        "icon": "672f9f28c1f51821d529b90f",
        "minteable": true,
        "name": "[Template] Floor Portal",
        "rarity": 3,
        "sub_type": "66a407b48678f3f706330770",
        "type": "Art"
    },
    {
        "_id": "6791d04225a5897bbdd55c92",
        "__v": 0,
        "bag": 3,
        "burneable": false,
        "description": null,
        "family": "",
        "hidden": false,
        "icon": "66ba61fb707a46ffb5bd447e",
        "minteable": true,
        "name": "[Template] Holographic Cockatrice",
        "rarity": 3,
        "sub_type": "66a407b48678f3f706330770",
        "type": "Art"
    },
    {
        "_id": "6791d1c625a5897bbdd567f0",
        "__v": 0,
        "bag": 3,
        "burneable": false,
        "description": null,
        "family": "",
        "hidden": false,
        "icon": "672f9de2c1f51821d529b780",
        "minteable": true,
        "name": "[Template] Bat Plushie",
        "rarity": 1,
        "sub_type": "66a407658678f3f706330615",
        "type": "Miscelaneous"
    },
    {
        "_id": "6791d2f625a5897bbdd570b4",
        "__v": 0,
        "bag": 3,
        "burneable": false,
        "description": null,
        "family": "",
        "hidden": false,
        "icon": "669fe7de3175d6ddb6cd95ce",
        "minteable": true,
        "name": "[Template] Dire Wolf Plushie",
        "rarity": 2,
        "sub_type": "66a407658678f3f706330615",
        "type": "Miscelaneous"
    },
    {
        "_id": "6791d22c25a5897bbdd56a2d",
        "__v": 0,
        "bag": 3,
        "burneable": false,
        "description": null,
        "family": "",
        "hidden": false,
        "icon": "672f9e01c1f51821d529b7a9",
        "minteable": true,
        "name": "[Template] Rat Plushie",
        "rarity": 1,
        "sub_type": "66a407658678f3f706330615",
        "type": "Miscelaneous"
    },
    {
        "_id": "6791d32e25a5897bbdd572e7",
        "__v": 0,
        "bag": 3,
        "burneable": false,
        "description": null,
        "family": "",
        "hidden": false,
        "icon": "672f9e5ac1f51821d529b834",
        "minteable": true,
        "name": "[Template] Dire Bat Plushie",
        "rarity": 2,
        "sub_type": "66a407658678f3f706330615",
        "type": "Miscelaneous"
    },
    {
        "_id": "6791d14525a5897bbdd56550",
        "__v": 0,
        "bag": 3,
        "burneable": false,
        "description": null,
        "family": "",
        "hidden": false,
        "icon": "669fe7623175d6ddb6cd9590",
        "minteable": true,
        "name": "[Template] Wolf Plushie",
        "rarity": 1,
        "sub_type": "66a407658678f3f706330615",
        "type": "Miscelaneous"
    },
    {
        "_id": "6791d26e25a5897bbdd56c57",
        "__v": 0,
        "bag": 3,
        "burneable": false,
        "description": null,
        "family": "",
        "hidden": false,
        "icon": "672f9e3ac1f51821d529b7e2",
        "minteable": true,
        "name": "[Template] Wizard Tankard",
        "rarity": 1,
        "sub_type": "66a407658678f3f706330615",
        "type": "Miscelaneous"
    },
    {
        "_id": "6791d2b525a5897bbdd56e84",
        "__v": 0,
        "bag": 3,
        "burneable": false,
        "description": null,
        "family": "",
        "hidden": false,
        "icon": "672f9dd1c1f51821d529b747",
        "minteable": true,
        "name": "[Template] Ball",
        "rarity": 1,
        "sub_type": "66a407658678f3f706330615",
        "type": "Miscelaneous"
    },
    {
        "_id": "6791d37925a5897bbdd5751d",
        "__v": 0,
        "bag": 3,
        "burneable": false,
        "description": null,
        "family": "",
        "hidden": false,
        "icon": "672f9e79c1f51821d529b86d",
        "minteable": true,
        "name": "[Template] Dire Rat Plushie",
        "rarity": 2,
        "sub_type": "66a407658678f3f706330615",
        "type": "Miscelaneous"
    },
    {
        "_id": "6791d3be25a5897bbdd57756",
        "__v": 0,
        "bag": 3,
        "burneable": false,
        "description": null,
        "family": "",
        "hidden": false,
        "icon": "669fe8893175d6ddb6cd961e",
        "minteable": true,
        "name": "[Template] Cockatrice Plushie",
        "rarity": 3,
        "sub_type": "66a407658678f3f706330615",
        "type": "Miscelaneous"
    },
    {
        "_id": "67e2dae1c65c3d1bf39d8afd",
        "__v": 0,
        "bag": 3,
        "burneable": false,
        "family": "",
        "hidden": false,
        "icon": "66dfc334c9d961ccfbbfc1d7",
        "minteable": true,
        "name": "Golden Bear Statue",
        "rarity": 3,
        "sub_type": "66a407b48678f3f706330770",
        "type": "Art"
    },
    {
        "_id": "67e2da50c65c3d1bf39d56bb",
        "__v": 0,
        "bag": 3,
        "burneable": false,
        "family": "",
        "hidden": false,
        "icon": "66dfc31bc9d961ccfbbfc1ae",
        "minteable": true,
        "name": "Stone Bear Statue",
        "rarity": 2,
        "sub_type": "66a407b48678f3f706330770",
        "type": "Art"
    },
    {
        "_id": "6791d3f825a5897bbdd57992",
        "__v": 0,
        "bag": 3,
        "burneable": false,
        "description": null,
        "family": "",
        "hidden": false,
        "icon": "672f9e47c1f51821d529b80b",
        "minteable": true,
        "name": "[Template] Premium Ball",
        "rarity": 3,
        "sub_type": "66a407658678f3f706330615",
        "type": "Miscelaneous"
    },
    {
        "_id": "67e1d3055ad3404b9eccbe81",
        "__v": 0,
        "bag": 27,
        "burneable": false,
        "family": "Mount",
        "icon": "63f7a79655b8cb87f3417b24",
        "minteable": false,
        "name": "Test Audio Mount # DONT USE! #",
        "rarity": 0,
        "type": "Mount"
    },
    {
        "_id": "67e474271d59078818fef9c1",
        "__v": 0,
        "bag": 12,
        "family": "",
        "journal_name": "Bigger Bad Wolf",
        "name": "TestQuest-Wolf",
        "rarity": 0,
        "region": [
            {
                "value": "64b01970d3d5ac314bfbbf17",
                "label": "HedgeWizardEncampment"
            }
        ],
        "state": 0,
        "type": "rumor"
    },
    {
        "_id": "67ec6daa748b78210fa66de3",
        "__v": 0,
        "bag": 26,
        "created_at": "2025-04-01T22:50:18.594Z",
        "name": "Boss-Interaction-Started",
        "sprite": "None",
        "updated_at": "2025-04-01T22:50:18.594Z"
    },
    {
        "_id": "67e6ea8c1d590788180275fd",
        "__v": 0,
        "bag": 12,
        "family": "",
        "journal_name": "Out of the Woods",
        "name": "Out of the Woods - OTW",
        "rarity": 0,
        "region": [
            {
                "value": "64b01970d3d5ac314bfbbf17",
                "label": "HedgeWizardEncampment"
            }
        ],
        "state": 0,
        "type": "rumor"
    },
    {
        "_id": "67ed6de4f544d3571055c0b9",
        "__v": 0,
        "bag": 3,
        "burneable": false,
        "family": "",
        "hidden": false,
        "icon": "63644900d22c16e85b821712",
        "minteable": false,
        "name": "NEGATIVE TEST",
        "rarity": 0,
        "type": "Weapon"
    }
]
];

export const idAffix = {
  "6807a96bade0fec677ab68a7": "Thick Darkness - Increase your Defenses but lose Speed.",
  "67d45e15b2102728065eb882": "Lucky III - Increase LCK.",
  "6807a245ade0fec677ab5d9b": "Yellow Flash - Increase your Might, Brilliance, and Speed.",
  "6807a29dade0fec677ab5dc3": "Critical Speed - While Hasted gain Critical DMG and Critical Chance.",
  "6807a9baade0fec677ab6f67": "Blood Moon - Increase your Might and Brilliance, but lose Max HP.",
  "6807a458ade0fec677ab5e74": "Paragold - Increase all your Stats, favoring CON and WIS.",
  "6807a56eade0fec677ab5ea6": "Golden Example - While you are Buffed increase your team's defenses and LCK.",
  "6807aa55ade0fec677ab8adc": "Swift Shade - Gain Speed but lose CON.",
  "6807aa13ade0fec677ab7f65": "Night Mind - Gain Critical Chance and DMG. but lose WIS.",
  "679a53b788ed77a53032c44b": "Strong II - Increase STR.",
  "679a554d88ed77a53032f5d9": "Intelligent II - Increase INT.",
  "679a563988ed77a5303311c3": "Dexterous II - Increase DEX.",
  "679a578588ed77a530334afe": "Swole II - Increase CON.",
  "679a587988ed77a530335896": "Wise II - Increase WIS.",
  "679a5aa288ed77a53033832b": "Lucky II - Increase LCK.",
  "679a5b8c88ed77a5303383ea": "Streetsmart - Increase STR and INT.",
  "679a5bd788ed77a530338412": "Athletic - Increase STR and DEX.",
  "679a5c1d88ed77a530338428": "Bulky - Increase STR and CON.",
  "679a5ccd88ed77a530338454": "Quick Witted - Increase INT and DEX.",
  "679a5d3988ed77a530338480": "Prodigious - Increase INT and WIS.",
  "679a5d7088ed77a530338496": "Scrappy - Increase DEX and CON.",
  "679a5db588ed77a5303384ac": "Observant - Increase DEX and WIS.",
  "679a5df188ed77a5303384c2": "Seasoned - Increase CON and WIS.",
  "679a5e6488ed77a5303384d8": "Paragon - Increase all Basic Stats.",
  "679a611088ed77a53033851c": "Mighty II - Increase Might.",
  "679a618c88ed77a530338554": "Brilliant I - Increase Brilliance.",
  "679a61b588ed77a53033856a": "Brilliant II - Increase Brilliance.",
  "679a63ba88ed77a5303392fd": "Quick II - Increase Speed.",
  "679a6a1988ed77a53033dec4": "Healthy II - Increase HP.",
  "679a6ba888ed77a5303421d7": "Protective II - Increase Mettle.",
  "679a6c3088ed77a530342548": "Gracious II - Increase Grace.",
  "679a810e88ed77a53035cb09": "Accurate II - Increase Crit Chance.",
  "679a816d88ed77a53035da08": "Deadly II - Increase Crit DMG.",
  "679a831588ed77a53035dad8": "Reflective II - Increase Insight.",
  "679a838c88ed77a53035db04": "Hardened II - Increase Durability.",
  "679a83f888ed77a53035db52": "Protected - Increase Durability and Insight.",
  "679a846888ed77a53035db68": "Aggresive - Increase Might and Brilliance.",
  "679a84f888ed77a53035eaa8": "Critical - Increase Crit Chance and Crit DMG.",
  "67b89ede8bcb42fabbd3c31f": "Phalanx - While you have Shield gain Empower.",
  "67b89f568bcb42fabbd3c603": "Gold Plated - Increase Defenses and LCK.",
  "67b8a11a8bcb42fabbd3dad9": "Throne Gaze - While an ally is wounded gain Speed and Mettle.",
  "67b8a1d68bcb42fabbd3e029": "Cyclic Power - Increase Grace, Might and Brilliance.",
  "67b8a2f78bcb42fabbd3e2f0": "Nurturing Flow - While an ally is at 100% HP gain Regen.",
  "67b8a39d8bcb42fabbd3f80e": "Mind Bloom - Increase WIS, CON and LCK.",
  "67b8a4db8bcb42fabbd408a1": "Night Mirror - Increase Brilliance and Speed.",
  "67b8a63b8bcb42fabbd4206d": "Lunar Runes - While Debuffed gain Durability, Insight and Brilliance.",
  "67b8a7a48bcb42fabbd42f12": "Phase Change - Increase Crit Chance while wounded, and increase Crit DMG while under 25% HP.",
  "67b8a7f28bcb42fabbd43893": "Eclipse - Gain LCK and Crit DMG.",
  "67b8a8758bcb42fabbd43b89": "Mother's Dust - While Debuffed gain Regen and Empower.",
  "67b8a90a8bcb42fabbd43baf": "Night Sense - Gain Speed and Might."
};

