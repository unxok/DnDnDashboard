import { AbilityScore } from "../AbilityScore/AbilityScore";

export const ConfigMap = {
  AbilityScore: {
    element: AbilityScore,
    name: "AbilityScore",
    required: [
      {
        value: "scoreType",
        show: "Ability Score",
        type: "select",
        options: [
          { value: "str", show: "Strength" },
          { value: "dex", show: "Dexterity" },
          { value: "con", show: "Constitution" },
          { value: "int", show: "Intelligence" },
          { value: "wis", show: "Wisdom" },
          { value: "cha", show: "Charisma" },
        ],
      },
      { value: "score", show: "Score", type: "input", inputType: "number" },
    ],
    optional: [
      {
        value: "isNameBottom",
        show: "Score name position",
        type: "select",
        options: [
          { value: null, show: "top" },
          { value: true, show: "bottom" },
        ],
      },
      {
        value: "isModAboveScore",
        show: "Modifier above or below score",
        type: "select",
        options: [
          { value: null, show: "below" },
          { value: true, show: "above" },
        ],
      },
      {
        value: "isModBig",
        show: "Score or modifier shown larger",
        type: "select",
        options: [
          { value: null, show: "score" },
          { value: true, show: "modifier" },
        ],
      },
      {
        value: "bgColor",
        show: "Background",
        type: "select",
        options: [
          { value: "primary", show: "primary" },
          { value: "secondary", show: "secondary" },
          { value: "accent", show: "accent" },
          { value: "base", show: "base" },
        ],
      },
      {
        value: "textColor",
        show: "text",
        type: "select",
        options: [
          { value: "primary", show: "primary" },
          { value: "secondary", show: "secondary" },
          { value: "accent", show: "accent" },
          { value: "base", show: "base" },
        ],
      },
      {
        value: "isShorthand",
        show: "Show full or short score name",
        type: "select",
        options: [
          { value: null, show: "full" },
          { value: true, show: "short" },
        ],
      },
      {
        value: "isCapital",
        show: "Show name in all caps",
        type: "input",
        inputType: "checkbox",
      },
    ],
  },
};

export const getElementByName = (elName) => {
  for (const key in ConfigMap) {
    if (ConfigMap[key].name === elName) {
      return ConfigMap[key].element;
    }
  }
};
