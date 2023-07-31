import React from "react";
import * as Dialog from "@radix-ui/react-dialog";

type FormProviderProps = {
  children: React.JSX.Element;
  form: React.JSX.Element;
};

export const FormProvider = (props: FormProviderProps) => {
  const { children, form } = props;

  console.log("form Provider rendered");

  return (
    <Dialog.Root>
      <Dialog.Trigger>{children}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black opacity-80" />
        {form}
      </Dialog.Portal>
    </Dialog.Root>
  );
};
