import { AbilityScore } from "../Cards/AbilityScore/AbilityScore";
import { PlayerName } from "../Cards/PlayerName/PlayerName";
import { PlayerDetails } from "../Cards/PlayerDetails/PlayerDetails";

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
          { value: "accent", show: "accent" },
          { value: "secondary", show: "secondary" },
          { value: "base", show: "base" },
        ],
      },
      {
        value: "textColor",
        show: "text",
        type: "select",
        options: [
          { value: "accent", show: "accent" },
          { value: "base", show: "base" },
          { value: "primary", show: "primary" },
          { value: "secondary", show: "secondary" },
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
        type: "select",
        options: [
          { value: null, show: "no" },
          { value: true, show: "yes" },
        ],
      },
    ],
  },
  PlayerName: {
    element: PlayerName,
    name: "PlayerName",
    required: [
      {
        value: "playerName",
        show: "Player Name",
        type: "input",
        inputType: "text",
      },
    ],
    optional: [
      {
        value: "preTagline",
        show: "tagline above name",
        type: "input",
        inputType: "text",
      },
      {
        value: "postTagline",
        show: "tagline below name",
        type: "input",
        inputType: "text",
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
        show: "Text",
        type: "select",
        options: [
          { value: "accent", show: "accent" },
          { value: "primary", show: "primary" },
          { value: "secondary", show: "secondary" },
          { value: "base", show: "base" },
        ],
      },
      {
        value: "showBottomLine",
        show: "Show line at the bottom",
        type: "select",
        options: [
          { value: true, show: "yes" },
          { value: null, show: "no" },
        ],
      },
    ],
  },
  PlayerDetails: {
    element: PlayerDetails,
    name: "PlayerDetails",
    required: [
      { value: "class", show: "Class", type: "input", inputType: "text" },
      {
        value: "background",
        show: "Background",
        type: "input",
        inputType: "text",
      },
      { value: "race", show: "Race", type: "input", inputType: "text" },
      {
        value: "alignment",
        show: "Alignment",
        type: "input",
        inputType: "text",
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
