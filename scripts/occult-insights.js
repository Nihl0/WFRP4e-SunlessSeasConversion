Hooks.once("init", () => {
  const config = {
    magicLores: {},
    magicWind: {},
    loreEffectDescriptions: {},
    loreEffects: {},
  };

    config.magicWind = {
    bleed: "Bleed",
    call: "Call",
    cant: "Cant",
    depth: "Depth",
    rose: "Rose",
    scripture: ["Soot", "Cant"],
    soot: "Soot",
    silt: "Silt",
    winter: "Winter",
    wood: "Wood"
  }

  config.magicLores = {
    bleed: "Bleed",
    call: "Call",
    cant: "Cant",
    depth: "Depth",
    rose: "Rose",
    scripture: "Scripture",
    soot: "Soot",
    silt: "Silt",
    winter: "Winter",
    wood: "Wood"
  }

  
  config.loreEffectDescriptions = {
    bleed: "<p></p>",
    call: "<p></p>",
    cant: "<p></p>",
    depth: "<p></p>",
    rose: "<p></p>",
    soot: "<p>Insights of Soot inflicting Damage cause the target to become <em>Slowed</em> for one minute, reducing their Agility by 10 and their Movement by 1 (down to minimum of 3). Target can suffer from only one <em>Slowed</em> Effect at a time.</p>",
    silt: "<p></p>",
    winter: "<p></p>",
    wood: "<p></p>",
    scripture: "<p></p>",
  }

  config.loreEffects = {
        "soot": {
            name: "Slowed",
            img: "icons/insights/soot-icon.webp",
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
