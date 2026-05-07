Hooks.once("init", () => {
    const config = {
        magicLores: {},
        magicWind: {},
        loreEffectDescriptions: {},
        loreEffects: {},
    };

    config.magicLores = {
        thirst: "Thirst",
        spirits: "Spirits",
        shape: "Shape",
        fathoms: "Fathoms",
        hues: "Hues",
        scars: "Scars",
        ways: "Ways",
        snow: "Snow",
        wood: "The Wood"
    }

    config.magicWind = {
        thirst: "Bleed",
        spirits: "Call",
        shape: "Cant",
        fathoms: "Depth",
        hues: "Rose",
        scars: "Soot",
        ways: "Silt",
        snow: "Winter",
        wood: "Wood",
    }

    config.loreEffectDescriptions = {
        thirst: "<p>All insights invoked from the Lore of Thirst inﬂicting Damage ignore all non-magical Armor Points, and will bleed to all other targets within 2 yards, except those with the Arcane Magic (Thirst) Talent, inﬂicting hits with a Damage equal to your Willpower Bonus, handled like a magical missile.</p>",
        spirits: "<p></p>",
        shape: "<p></p>",
        fathoms: "<p>Whenever you successfully invoke an insight from the Lore of Fathoms, you may also gain the Fear (1) Creature Trait for the next 1d10 Rounds.</p>",
        hues: "<p></p>",
        scars: "<p>All insights invoked from the Lore of Scars inflicting Damage cause the target to become <em>Stained</em> for one minute, reducing their Agility by 10 and their Movement by 1 (down to minimum of 3). Target can suffer from only one <em>Stained</em> Effect at a time.</p>",
        ways: "<p></p>",
        snow: "<p></p>",
        wood: "<p></p>",
    }

    config.loreEffects = {
        "thirst": {
            name: "Lore of Thirst",
            img: "modules/WFRP4e-SunlessSeasConversion/icons/insights/bleed-icon.webp",
            system: {
                transferData: {
                    type: "document",
                    documentType: "Item"
                },
                scriptData: [
                    {
                    label: "@effect.name",
                    trigger: "computeApplyDamageModifiers",
                    script: `
                            let nonmagical = args.modifiers.ap.value - args.modifiers.ap.magical
                            if (args.applyAP && nonmagical) 
                            {
                                args.modifiers.ap.ignored += nonmagical
                                args.modifiers.ap.details.push("<strong>" + this.effect.name + "</strong>: Ignore Non-Magical AP (" + nonmagical + ")");
                            }
                            `
                    }
                ]
            }
        },
        "fathoms": {
            name: "Lore of Fathoms",
            img: "modules/WFRP4e-SunlessSeasConversion/icons/insights/depth-icon.webp",
            system: {
                transferData: {
                    type: "document",
                    documentType: "Item"
                },
                scriptData: [
                    {
                    label: "Add Fear",
                    trigger: "castSpellPrayer",
                    script: "args.testData.other.push(`<strong>${this.effect.name}</strong>: @Fear[1,${this.actor.prototypeToken.name}]`)\n\tif (!this.actor.has(game.i18n.localize(\"NAME.Fear\")))\n\t{\n\t\tlet item = await fromUuid(\"Compendium.wfrp4e-core.items.Item.pTorrE0l3VybAbtn\");\n\t\tlet data = item.toObject();\n\t\tdata.system.specification.value = 1\n\t\tthis.actor.createEmbeddedDocuments(\"Item\", [data])\n\t\tthis.script.scriptNotification(\"Fear Trait added\");\n\t}"
                    }
                ]
            }
        },
        "hues": {
            name: "Lore of Hues",
            img: "modules/WFRP4e-SunlessSeasConversion/icons/insights/rose-icon.webp",
            duration: {
            seconds: 60
            },
            system: {
                transferData: {
                    type: "target"
                },
                scriptData: [
                    {
                    label: "Add Distracting",
                    trigger: "castSpellPrayer",
                    script: "args.testData.other.push(`<strong>${this.effect.name}</strong>: @Distracting[1,${this.actor.prototypeToken.name}]`)\n\tif (!this.actor.has(game.i18n.localize(\"NAME.Distracting\")))\n\t{\n\t\tlet item = await fromUuid(\"Compendium.wfrp4e-core.items.Item.MVI0lXcg6vvtooAF\");\n\t\tlet data = item.toObject();\n\t\tdata.system.specification.value = 1\n\t\tthis.actor.createEmbeddedDocuments(\"Item\", [data])\n\t\tthis.script.scriptNotification(\"Distracting Trait added\");\n\t}"
                    }
                ]
            }
        },
        "scars": {
            name: "Stained",
            img: "modules/WFRP4e-SunlessSeasConversion/icons/insights/soot-icon.webp",
            duration: {
            seconds: 60
            },
            system: {
                transferData: {
                    type: "target"
                },
                scriptData: [
                    {
                    label: "@effect.name",
                    trigger: "prePrepareData",
                    script: `
                        args.actor.system.characteristics.ag.modifier -= 10;
                        
                        if (args.actor.system.details.move.value > 3)
                        args.actor.system.details.move.value -= 1;
                    `
                    }
                ]
            }
        },
    };

  foundry.utils.mergeObject(game.wfrp4e.config, config);
});
