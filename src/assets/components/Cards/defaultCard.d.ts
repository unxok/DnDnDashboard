declare module "Cards" {
  export type defaultCardProps<R, O> = {
    isoverlay: boolean;
    configs: {
      required: R;
      optional?: O;
    };
    children: ReactNode;
    defaultClassName: string;
    updateFormShow?: (formType: string, bool: boolean) => void;
  };
}
