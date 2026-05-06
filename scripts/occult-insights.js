
Hooks.on("init", () => {

    const WFRP4E = {}

        WFRP4E.loreEffectDescriptions = {
            "bleed": " <p>Whenever a witch successfully invokes an insight from the Lore of Bleed, the concepts they subsume may restore their own health. Roll [[/r 1d10]]. If the result is a 10, or if it is equal to or higher than the CN of the insight invoked, unmodified by Channeling or the use of a Grimoire, the Witch recovers Wounds equal to the unmodified CN of the spell.</p>",
            "call": "",
            "cant": "",
            "depth": "",
            "rose": "",
            "soot": "<p>Soot Spells inflicting Damage cause the target to become <em>Chilled</em> for one minute, reducing their Agility by 10 and their Movement by 1 (down to minimum of 3). Target can suffer from only one <em>Chilled</em> Effect at a time.</p>",
            "silt": "",
            "winter": "",
            "wood": "",

            "weaving": "",
        };  


        // EDGE KNOWLEDGE
        WFRP4E.loreEffects = {
            "Bleed": {
                name: "Lore of Bleed",
                img: "",
                flags: {
                    wfrp4e: {
                        lore: true,
                    }
                },

                system: {
                    transferData: {
                        type: "target"
                    },
                    scriptData: [
                        {
                            trigger: "immediate",
                            label: "@effect.name",
                            script: `
                                if (args.test.result.castOutcome == "success" && !args.test.context.loreApplied)
                                {
                                    args.test.context.loreApplied = true
                
                                    let roll = Math.ceil(CONFIG.Dice.randomUniform() * 10)
                                    let cn = args.test.spell._source.system.cn.value;
                                    let msg = "Bleed Roll: " + roll
                
                                    if (roll == 10 || roll >= cn)
                                    {
                                        msg += " (Heals " + cn + ")"
                                        args.test.actor.modifyWounds(cn)
                                    }
                                    args.test.result.other.push(msg)
                                }
                                `
                        }
                    ]
                }
            },
            "Call": {
                name: "Lore of Call",
                img: "",
                flags: {
                    wfrp4e: {
                        lore: true,
                    }
                },

                system: {
                    transferData: {
                        type: "other"
                    }
                },

            },
            "Cant": {
                name: "Lore of Cant",
                img: "",
                flags: {
                    wfrp4e: {
                        lore: true,
                    }
                },

                system: {
                    transferData: {
                        type: "other"
                    }
                },

            },
            "Depth": {
                name: "Lore of Depth",
                img: "",
                flags: {
                    wfrp4e: {
                        lore: true,
                    }
                },

                system: {
                    transferData: {
                        type: "target"
                    },
                    scriptData: [
                        {
                            trigger: "immediate",
                            label: "@effect.name",
                            script: `this.actor.addCondition("fatigued")`,
                            options: {
                                    deleteEffect: true
                            }
                        }
                    ]
                }
            },
            "Rose": {
                name: "Lore of Rose",
                img: "",
                flags: {
                    wfrp4e: {
                        lore: true,
                    }
                },

                system: {
                    transferData: {
                        type: "other"
                    }
                },
            },
            "Soot": {
                name: "Lore of Soot",
                img: "",
                flags: {
                    wfrp4e: {
                        lore: true,
                    }
                },

                system: {
                    transferData: {
                        type: "target"
                    },
                    scriptData: [
                        {
                            trigger: "prePrepareData",
                            label: "@effect.name",
                            script: `
                                args.actor.system.characteristics.ag.modifier -= 10;
                                
                                if (args.actor.system.details.move.value > 3)
                                args.actor.system.details.move.value -= 1;
                            `
                        }
                    ]
                }
            },
            "Silt": {
                name: "Lore of Silt",
                img: "modules/wfrp4e-core/icons/spells/witchcraft.png",
                flags: {
                    wfrp4e: {
                        lore: true,
                    }
                },

                system: {
                    transferData: {
                        type: "other"
                    }
                },
            },
            "Winter": {
                name: "Lore of Winter",
                img: "modules/wfrp4e-core/icons/spells/witchcraft.png",
                flags: {
                    wfrp4e: {
                        lore: true,
                    }
                },

                system: {
                    transferData: {
                        type: "other"
                    }
                },
            },
            "Wood": {
                name: "Lore of Wood",
                img: "modules/wfrp4e-core/icons/spells/witchcraft.png",
                flags: {
                    wfrp4e: {
                        lore: true,
                    }
                },

                system: {
                    transferData: {
                        type: "other"
                    }
                },
            }

        }


    foundry.utils.mergeObject(game.wfrp4e.config, WFRP4E)
})

