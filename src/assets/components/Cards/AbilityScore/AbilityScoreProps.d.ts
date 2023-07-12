type required = Array<{ show: string; value: string }>;

declare module "AbilityScore" {
  export interface AbilityScoreProps {
    element: React.ComponentType;
    name: "AbilityScore";
    show: "Ability Score";
    required: required;
  }
}
