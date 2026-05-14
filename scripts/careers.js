Hooks.once("setup", () => {
  game.wfrp4e.utility.mergeCareerReplacements({
    human: {
      "Bannerman": ["Archer"],
    },
    "human-arnesman": {
      "Bannerman": ["Shieldbreaker"],
    },
    "human-fjordling": {
      "Bannerman": ["Shieldbreaker"],
    },
    "human-isling": {
      "Bannerman": ["Reaver", "Shieldbreaker"],
    },
    "human-enkratan": {
      "Bannerman": ["Crossbowman", "Pikeman", "Zealot"],
    },
    "human-vulian": {
      "Bannerman": ["Crossbowman", "Pikeman"],
    },
    grishan: {
      "Bannerman": ["Greatsword", "Halberdier", "Hammerer"],
    },
  });
});
