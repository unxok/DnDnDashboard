import { AbilityScore } from "../Cards/AbilityScore/AbilityScore";
import { ArmorClass } from "../Cards/ArmorClass/ArmorClass";
import { HealthPoints } from "../Cards/HealthPoints/HealthPoints";
import { Initiative } from "../Cards/Initiative/Initiative";
import { Notepad } from "../Cards/Notepad/Notepad";
import { PlayerDetails } from "../Cards/PlayerDetails/PlayerDetails";
import { PlayerName } from "../Cards/PlayerName/PlayerName";
import { SpellPoints } from "../Cards/SpellPoints/SpellPoints";
import React, { ElementType } from "react";

type InputType = {
  type: "input";
  inputType: "text" | "number";
};

type SelectType = {
  type: "select";
  options: Array<{
    value: string | boolean | number;
    show: string;
  }>;
};

export type ConfigItemObj = {
  value: string;
  show: string;
} & (InputType | SelectType);

type ElementConfig = {
  element: React.ElementType;
  name: string;
  show: string;
  required: ConfigItemObj[];
  optional?: ConfigItemObj[];
};

type ConfigMapType = {
  [key: string]: ElementConfig;
};

const AbilityScoreConfig: ElementConfig = {
  element: AbilityScore,
  name: "AbilityScore",
  show: "Ability Score",
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
        { value: "", show: "top" },
        { value: true, show: "bottom" },
      ],
    },
    {
      value: "isModAboveScore",
      show: "Modifier above or below score",
      type: "select",
      options: [
        { value: "", show: "below" },
        { value: true, show: "above" },
      ],
    },
    {
      value: "isModBig",
      show: "Score or modifier shown larger",
      type: "select",
      options: [
        { value: "", show: "score" },
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
        { value: "", show: "full" },
        { value: true, show: "short" },
      ],
    },
    {
      value: "textCase",
      show: "Show name as",
      type: "select",
      options: [
        { value: "regular", show: "Regular" },
        { value: "lower", show: "lowercase" },
        { value: "upper", show: "UPPERCASE" },
      ],
    },
  ],
};

const ArmorClassConfig: ElementConfig = {
  element: ArmorClass,
  name: "ArmorClass",
  show: "Armor Class",
  required: [
    { value: "score", show: "Score", type: "input", inputType: "number" },
  ],
  optional: [
    {
      value: "isShorthand",
      show: "Display Name",
      type: "select",
      options: [
        { value: "", show: "full" },
        { value: true, show: "short" },
      ],
    },
    {
      value: "isNameTop",
      show: "Name Above Score?",
      type: "select",
      options: [
        { value: "", show: "yes" },
        { value: true, show: "no" },
      ],
    },
    {
      value: "bgColor",
      show: "Card Background",
      type: "select",
      options: [
        { value: "bg-primary", show: "primary" },
        { value: "bg-accent", show: "accent" },
        { value: "bg-base", show: "base" },
        { value: "bg-secondary", show: "secondary" },
      ],
    },
    {
      value: "textColor",
      show: "Text Color",
      type: "select",
      options: [
        { value: "text-accent", show: "accent" },
        { value: "text-base", show: "base" },
        { value: "text-primary", show: "primary" },
        { value: "text-secondary", show: "secondary" },
      ],
    },
    {
      value: "textCase",
      show: "Text Case",
      type: "select",
      options: [
        { value: "regular", show: "Regular" },
        { value: "upper", show: "Upper" },
        { value: "lower", show: "Lower" },
      ],
    },
  ],
};

const HealthPointsConfig: ElementConfig = {
  element: HealthPoints,
  name: "HealthPoints",
  show: "Health Points",
  required: [
    {
      value: "maxPoints",
      show: "Max Points",
      type: "input",
      inputType: "number",
    },
    {
      value: "currentPoints",
      show: "Current Points",
      type: "input",
      inputType: "number",
    },
  ],
  optional: [
    {
      value: "isShorthand",
      show: "Display Name",
      type: "select",
      options: [
        { value: "", show: "full" },
        { value: true, show: "short" },
      ],
    },
    {
      value: "isNameTop",
      show: "Name Above Score?",
      type: "select",
      options: [
        { value: "", show: "yes" },
        { value: true, show: "no" },
      ],
    },
    {
      value: "bgColor",
      show: "Card Background",
      type: "select",
      options: [
        { value: "bg-primary", show: "primary" },
        { value: "bg-accent", show: "accent" },
        { value: "bg-base", show: "base" },
        { value: "bg-secondary", show: "secondary" },
      ],
    },
    {
      value: "textColor",
      show: "Text Color",
      type: "select",
      options: [
        { value: "text-accent", show: "accent" },
        { value: "text-base", show: "base" },
        { value: "text-primary", show: "primary" },
        { value: "text-secondary", show: "secondary" },
      ],
    },
    {
      value: "hideSlash",
      show: "Hide slash (/) ?",
      type: "select",
      options: [
        { value: true, show: "no" },
        { value: "", show: "Yes" },
      ],
    },
    {
      value: "pointsFlex",
      show: "Points Position",
      type: "select",
      options: [
        { value: "", show: "Side-by-side" },
        { value: true, show: "Stacked" },
      ],
    },
    {
      value: "textCase",
      show: "Text Case",
      type: "select",
      options: [
        { value: "regular", show: "Regular" },
        { value: "upper", show: "Upper" },
        { value: "lower", show: "Lower" },
      ],
    },
  ],
};

const InitiativeConfig: ElementConfig = {
  element: Initiative,
  name: "Initiative",
  show: "Initiative",
  required: [
    { value: "score", show: "Score", type: "input", inputType: "number" },
  ],
  optional: [
    {
      value: "isShorthand",
      show: "Display Name",
      type: "select",
      options: [
        { value: "", show: "full" },
        { value: true, show: "short" },
      ],
    },
    {
      value: "isNameTop",
      show: "Name Above Score?",
      type: "select",
      options: [
        { value: "", show: "yes" },
        { value: true, show: "no" },
      ],
    },
    {
      value: "bgColor",
      show: "Card Background",
      type: "select",
      options: [
        { value: "primary", show: "primary" },
        { value: "accent", show: "accent" },
        { value: "base", show: "base" },
        { value: "secondary", show: "secondary" },
      ],
    },
    {
      value: "textColor",
      show: "Text Color",
      type: "select",
      options: [
        { value: "accent", show: "accent" },
        { value: "base", show: "base" },
        { value: "primary", show: "primary" },
        { value: "secondary", show: "secondary" },
      ],
    },
    {
      value: "textCase",
      show: "Text Case",
      type: "select",
      options: [
        { value: "regular", show: "Regular" },
        { value: "upper", show: "Upper" },
        { value: "lower", show: "Lower" },
      ],
    },
  ],
};

const PlayerDetailsConfig: ElementConfig = {
  element: PlayerDetails,
  name: "PlayerDetails",
  show: "Player Details",
  required: [
    { value: "classs", show: "Class", type: "input", inputType: "text" },
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
  optional: [
    {
      value: "cardShape",
      show: "Card Shape",
      type: "select",
      options: [
        { value: "square", show: "square" },
        { value: "wide", show: "wide" },
        { value: "tall", show: "tall" },
      ],
    },
    {
      value: "textPos",
      show: "Text Alignment",
      type: "select",
      options: [
        { value: "text-center", show: "center" },
        { value: "text-start", show: "left" },
        { value: "text-end", show: "right" },
      ],
    },
    {
      value: "parentBg",
      show: "Card Background",
      type: "select",
      options: [
        { value: "primary", show: "primary" },
        { value: "accent", show: "accent" },
        { value: "base", show: "base" },
        { value: "secondary", show: "secondary" },
      ],
    },
    {
      value: "grandChildBg",
      show: "Container Background",
      type: "select",
      options: [
        { value: "base", show: "base" },
        { value: "primary", show: "primary" },
        { value: "accent", show: "accent" },
        { value: "secondary", show: "secondary" },
      ],
    },
    {
      value: "textColor",
      show: "Text Color",
      type: "select",
      options: [
        { value: "accent", show: "accent" },
        { value: "base", show: "base" },
        { value: "primary", show: "primary" },
        { value: "secondary", show: "secondary" },
      ],
    },
  ],
};

const PlayerNameConfig: ElementConfig = {
  element: PlayerName,
  name: "PlayerName",
  show: "Player Name",
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
        { value: "", show: "no" },
      ],
    },
  ],
};

const SpellPointsConfig: ElementConfig = {
  element: SpellPoints,
  name: "SpellPoints",
  show: "Spell Points",
  required: [
    {
      value: "spellLevel",
      show: "Level of Points",
      type: "select",
      options: [
        { value: "cantrip", show: "Cantrip" },
        { value: "one", show: "One" },
        { value: "two", show: "Two" },
        { value: "three", show: "Three" },
        { value: "four", show: "Four" },
        { value: "five", show: "Five" },
        { value: "six", show: "Six" },
        { value: "seven", show: "Seven" },
        { value: "eight", show: "Eight" },
        { value: "nine", show: "Nine" },
      ],
    },
    {
      value: "maxPoints",
      show: "Max Number of Points",
      type: "input",
      inputType: "number",
    },
    {
      value: "currentPoints",
      show: "Current Number of Points",
      type: "input",
      inputType: "number",
    },
  ],
  optional: [
    {
      value: "isNameTop",
      show: "Name Above Score?",
      type: "select",
      options: [
        { value: "", show: "yes" },
        { value: true, show: "no" },
      ],
    },
    {
      value: "bgColor",
      show: "Card Background",
      type: "select",
      options: [
        { value: "bg-primary", show: "primary" },
        { value: "bg-accent", show: "accent" },
        { value: "bg-base", show: "base" },
        { value: "bg-secondary", show: "secondary" },
      ],
    },
    {
      value: "textColor",
      show: "Text Color",
      type: "select",
      options: [
        { value: "text-accent", show: "accent" },
        { value: "text-base", show: "base" },
        { value: "text-primary", show: "primary" },
        { value: "text-secondary", show: "secondary" },
      ],
    },
  ],
};

const NotepadConfig: ElementConfig = {
  element: Notepad,
  show: "Notepad",
  name: "Notepad",
  required: [
    {
      inputType: "text",
      type: "input",
      show: "Text",
      value: "text",
    },
  ],
};

export const ConfigMap: ConfigMapType = {
  AbilityScore: AbilityScoreConfig,
  ArmorClass: ArmorClassConfig,
  HealthPoints: HealthPointsConfig,
  Initiative: InitiativeConfig,
  PlayerDetails: PlayerDetailsConfig,
  PlayerName: PlayerNameConfig,
  SpellPoints: SpellPointsConfig,
  Notepad: NotepadConfig,
};

export const getElementByName = (elName: string): ElementType | undefined => {
  for (const key in ConfigMap) {
    if (ConfigMap[key].name === elName) {
      return ConfigMap[key].element;
    }
  }
};
