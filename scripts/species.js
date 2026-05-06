Hooks.on("setup", () => {
    const WFRP4E = game.wfrp4e.config

    // SPECIES
    WFRP4E.species = {
        "human": "Human",
        "halfblood": "Halfblood",
        "goblin": "Goblin",
        "guzik": "Guzik",
    };

    WFRP4E.speciesCharacteristics = {
        "human": {
            "ws": "2d10+20",
            "bs": "2d10+20",
            "s": "2d10+20",
            "t": "2d10+20",
            "i": "2d10+20",
            "ag": "2d10+20",
            "dex": "2d10+20",
            "int": "2d10+20",
            "wp": "2d10+20",
            "fel": "2d10+20"
        },
        "halfblood": {
            "ws": "2d10+20",
            "bs": "2d10+20",
            "s": "2d10+30",
            "t": "2d10+30",
            "i": "2d10+15",
            "ag": "2d10+20",
            "dex": "2d10+20",
            "int": "2d10+15",
            "wp": "2d10+20",
            "fel": "2d10+10"
        },
        "goblin": {
            "ws": "2d10+15",
            "bs": "2d10+30",
            "s": "2d10+10",
            "t": "2d10+20",
            "i": "2d10+20",
            "ag": "2d10+30",
            "dex": "2d10+30",
            "int": "2d10+20",
            "wp": "2d10+15",
            "fel": "2d10+15"
        },
        "guzik": {
            "ws": "2d10+20",
            "bs": "2d10+10",
            "s": "2d10+10",
            "t": "2d10+15",
            "i": "2d10+30",
            "ag": "2d10+30",
            "dex": "2d10+30",
            "int": "2d10+30",
            "wp": "2d10+30",
            "fel": "2d10+15"
        },
    }
    
    WFRP4E.speciesSkills = {
        "human": [
            "Animal Care",
            "Charm",
            "Consume Alcohol",
            "Cool",
            "Endurance",
            "Gossip",
            "Haggle",
            "Language (Any)",
            "Leadership",
            "Lore (Local)",
            "Melee (Basic)",
            "Ranged (Throwing)"
        ],
        "halfblood": [
            "Athletics",
            "Cool",
            "Endurance",
            "Gossip",
            "Haggle",
            "Intimidate",
            "Language (Any)",
            "Lore (Local)",
            "Melee (Basic)",
            "Outdoor Survival",
            "Ranged (Throwing)",
            "Track"
        ],
        "goblin": [
            "Endurance",
            "Evaluate",
            "Haggle",
            "Intuition",
            "Language (Any)",
            "Lore (Folklore or Theology)",
            "Lore (Grisha)",
            "Melee (Basic)",
            "Outdoor Survival",
            "Perception",
            "Ranged (Bow or Throwing)",
            "Stealth (Rural or Urban)"
        ],
        "guzik": [
            "Channelling",
            "Climb",
            "Dodge",
            "Entertain (Any)",
            "Intuition",
            "Language (Guzik)",
            "Lore (Herbs)",
            "Navigation",
            "Outdoor Survival",
            "Perception",
            "Stealth (Rural)",
            "Trade (Cook)"
        ],
    }
    
    WFRP4E.speciesTalents = {
        "human": [
            "Doomed, random[1]",
            "Savvy, Suave",
            3
        ],
        "halfblood": [
            "Hardy, Relentless",
            "Resistance (Poison (Ingested)), Very Resilient",
            "Strong-Minded",
            2
        ],
        "goblin": [
            "Acute Sense (Hearing)",
            "Flee!, Relentless",
            "Lightning Reflexes, Sharp",
            "Night Vision",
            "Resistance (Disease)",
            0
        ],
        "guzik": [
            "Acute Sense (Sight), Second Sight",
            "Animal Affinity",
            "Night Vision",
            "One With The Wood, Rover",
            "Small",
            1
        ]
    }
    
    WFRP4E.speciesMovement = {
        "human": 4,
        "halfblood": 5,
        "goblin": 4,
        "guzik": 3
    }
    
    WFRP4E.speciesFate = {
        "human": 2,
        "halfblood": 1,
        "goblin": 0,
        "guzik": 2
    }
    
    WFRP4E.speciesRes = {
        "human": 1,
        "halfblood": 2,
        "goblin": 2,
        "guzik": 0
    }
    
    WFRP4E.speciesExtra = {
        "human": 3,
        "halfblood": 1,
        "goblin": 2,
        "guzik": 2
    }
    
    WFRP4E.speciesAge = {
        "human": "16+2d10",
        "halfblood": "15+3d10",
        "goblin": "12+1d10",
        "guzik": "30+10d10"
    }
    
    WFRP4E.speciesHeight = {
        "human": {
            feet: 4,
            inches: 9,
            die: "2d10"
        },
        "halfblood": {
            feet: 5,
            inches: 0,
            die: "2d10"
        },
        "goblin": {
            feet: 4,
            inches: 5,
            die: "1d10"
        },
        "guzik": {
            feet: 2,
            inches: 4,
            die: "1d10"
        }
    }
    
    // SUBSPECIES
    WFRP4E.subspecies = {
        human: {
            anoi: {
                name: "Anoi",
                skills: [
                    "Animal Care",
                    "Cool",
                    "Haggle",
                    "Intimidate",
                    "Language (Krati)",
                    "Language (Vuli)",
                    "Leadership",
                    "Lore (Local)",
                    "Melee (Cavalry or Two-Handed)",
                    "Outdoor Survival",
                    "Ranged (Bow)",
                    "Ride (Yak)"
                ],
                talents: [
                    "Resistance (Daemonic)",
                    "Roughrider, Sturdy",
                    "Sharp, Marksman",
                    2
                ]
            },
            arnicr: {
                name: "Arnic Rodinan",
                skills: [
                    "Entertain (Storytelling)",
                    "Evaluate",
                    "Gossip",
                    "Haggle",
                    "Language (Rodinan)",
                    "Language (Trostani)",
                    "Leadership",
                    "Lore (North Coast)",
                    "Melee (Basic)",
                    "Ranged (Throwing)",
                    "Sail (Any)",
                    "Swim"
                ],
                talents: [
                    "Doomed, random[1]",
                    "Fisherman, Rover",
                    "Stout-hearted, Very Resilient",
                    2
                ]
            },
            arnict: {
                name: "Arnic Trostani",
                skills: [
                    "Art (Woodcarving)",
                    "Athletics",
                    "Consume Alcohol",
                    "Endurance",
                    "Entertain (Sing)",
                    "Haggle",
                    "Language (Rodinan)",
                    "Language (Trostani)",
                    "Lore (Ishtaden)",
                    "Melee (Polearm)",
                    "Outdoor Survival",
                    "Trade (choose one)"
                ],
                talents: [
                    "Doomed",
                    "Savvy, Nimble Fingered",
                    3
                ]
            },
            enkratan: {
                name: "Enkratan",
                skills: [
                    "Cool",
                    "Endurance",
                    "Evaluate",
                    "Intimidate",
                    "Language (Enkrati)",
                    "Language (Virossi)",
                    "Leadership",
                    "Lore (Enkrata)",
                    "Lore (Theology)",
                    "Melee (Basic or Polearm)",
                    "Ranged (Bow or Throwing)",
                    "Trade (choose one)"
                ],
                talents: [
                    "Etiquette (choose group)", "Stone Soup",
                    "Nimble Fingered, Very Resilient",
                    "Resistance (Disease), Tenacious",
                    2
                ]
            },
            expeditionarii: {
                name: "Expeditionarii",
                skills: [
                    "Bribery",
                    "Endurance",
                    "Gossip",
                    "Haggle",
                    "Language (Kosarin)",
                    "Language (Vuli)",
                    "Leadership",
                    "Lore (Bay of Silver)",
                    "Melee (Basic)",
                    "Ranged (Crossbow)",
                    "Sail (Galley)",
                    "Swim"
                ],
                talents: [
                    "Doomed, random[1]",
                    "Read/Write, Warrior Born",
                    "Sharp, Suave",
                    2
                ]
            },
            pavise: {
                name: "Pavise",
                skills: [
                    "Animal Care",
                    "Charm",
                    "Cool",
                    "Entertain (Any)",
                    "Gossip",
                    "Haggle",
                    "Language (Any)",
                    "Language (Kosarin)",
                    "Lore (Any)",
                    "Melee (Basic)",
                    "Ranged (Crossbow)",
                    "Sail (Any)"
                ],
                talents: [
                    "Argumentative, Rover",
                    "Coolheaded, Suave",
                    3
                ]
            },
            vulian: {
                name: "Vulian",
                skills: [
                    "Bribery",
                    "Charm",
                    "Evaluate",
                    "Gossip",
                    "Haggle",
                    "Language (Docian Vulgar)",
                    "Language (Vuli)",
                    "Leadership",
                    "Lore (Eastern Lands)",
                    "Lore (Theology)",
                    "Melee (Basic)",
                    "Ranged (Sling)"
                ],
                talents: [
                    "Doomed",
                    "Read/Write, Very Resilient",
                    "Savvy, Suave",
                    2
                ]
            },
        },
        
        // HALFBLOODS
        halfblood: {
            shalic: {
                name: "Shalic",
                skills: [
                    "Athletics",
                    "Climb",
                    "Cool",
                    "Endurance",
                    "Evaluate",
                    "Intimidate",
                    "Language (Shale Tongue)",
                    "Language (Roga)",
                    "Lore (Rogatyy)",
                    "Lore (Geology)",
                    "Lore (Shales)",
                    "Melee (Brawling)"
                ],
                talents: [
                    "Hardy, Tireless",
                    "Night Vision",
                    "Stout-hearted, Strong-minded",
                    2
                ]
            }
        },

        // GOBLINS
        goblin: {
            hgrisha: {
                name: "High Grisha",
                skills: [
                    "Consume Alchohol",
                    "Endurance",
                    "Evaluate",
                    "Intuition",
                    "Language (Grisha)",
                    "Language (Any)",
                    "Leadership",
                    "Lore (Giants or Theology)",
                    "Melee (Basic)",
                    "Ranged (Bow or Crossbow)",
                    "Sail",
                    "Trade (choose one)"
                ],
                talents: [
                    "Acute Sense (Hearing)",
                    "Etiquette (choose group)",
                    "Hardy, Read/Write",
                    "Savvy, Sharp",
                    "Night Vision",
                    "Resistance (Disease)",
                    0
                ]
            },
            lgrisha: {
                name: "Low Grisha",
                skills: [
                    "Athletics",
                    "Endurance",
                    "Language (Giant)",
                    "Language (Grisha)",
                    "Lore (Giants)",
                    "Melee (Basic)",
                    "Outdoor Survival",
                    "Perception",
                    "Ranged (Blowpipe or Throwing)",
                    "Set Trap",
                    "Stealth (Rural)",
                    "Track"
                ],
                talents: [
                    "Acute Sense (Hearing)",
                    "Etiquette (choose group)",
                    "Flee!, Rover",
                    "Lightning Reflexes, Sharp",
                    "Night Vision",
                    "Resistance (Disease)",
                    0
                ]
            }
        },

        // Guzik
        guzik: {
            bereen: {
                name: "Bereen",
                skills: [
                    "Channelling",
                    "Climb",
                    "Dodge",
                    "Language (Guzik)",
                    "Lore (Riverways)",
                    "Navigation",
                    "Outdoor Survival",
                    "Perception",
                    "Ranged (Bow)",
                    "Sleight of Hand",
                    "Stealth (Rural)",
                    "Swim"
                ],
                talents: [
                    "Acute Sense (Sight), Second Sight",
                    "Fisherman",
                    "Night Vision",
                    "One With The Wood, Rover",
                    "Small",
                    1
                ]
            },
            domovoy: {
                name: "Domovoy",
                skills: [
                    "Channelling",
                    "Charm",
                    "Climb",
                    "Language (Guzik)",
                    "Lore (Herbs)",
                    "Lore (Wormwoods)",
                    "Navigation",
                    "Outdoor Survival",
                    "Perception",
                    "Sleight of Hand",
                    "Stealth (Rural)",
                    "Trade (Cook)"
                ],
                talents: [
                    "Acute Sense (Sight), Second Sight",
                    "Hardy, Stone Soup",
                    "Night Vision",
                    "One With The Wood, Rover",
                    "Small",
                    1
                ]
            },
            vilenjak: {
                name: "Vilenjak",
                skills: [
                    "Channelling",
                    "Climb",
                    "Dodge",
                    "Language (Vilun)",
                    "Lore (Wormwoods)",
                    "Melee (Basic)",
                    "Navigation",
                    "Outdoor Survival",
                    "Perception",
                    "Ranged (Bow)",
                    "Sleight of Hand",
                    "Stealth (Rural)"
                ],
                talents: [
                    "Acute Sense (Sight), Second Sight",
                    "Marksman, Warrior Born",
                    "Night Vision",
                    "One With The Wood, Rover",
                    "Small",
                    1
                ]
            }
        }
    }
})