Hooks.once("init", () => {
  game.wfrp4e.utility.mergeCareerReplacements({
    human: {
      "Soldier": ["Wizard"],
    },
    "human-salzenmunder": {
      "Engineer": ["Charlatan", "Thief"],
    },
  });
});