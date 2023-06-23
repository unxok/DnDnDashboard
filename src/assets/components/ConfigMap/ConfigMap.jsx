import { AbilityScore } from "../AbilityScore/AbilityScore";

export const ConfigMap = {
  AbilityScore: {
    element: AbilityScore,
    required: [
      {
        value: "scoreType",
        show: "Ability type",
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
        type: "input",
        inputType: "color",
      },
      {
        value: "textColor",
        show: "text",
        type: "input",
        inputType: "color",
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
