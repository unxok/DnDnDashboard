import * as Tooltip from "@radix-ui/react-tooltip";
import { useRef } from "react";

type ToolTipProps = {
  children: React.JSX.Element;
  text: string;
};

export const TooltipProvider = (props: ToolTipProps) => {
  const { children, text } = props;

  return (
    <Tooltip.Provider>
      <Tooltip.Root delayDuration={300}>
        <Tooltip.Trigger asChild>{children}</Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content
            side="right"
            className="rounded-md bg-black bg-opacity-75 p-2 text-white"
          >
            {text}
            <Tooltip.Arrow />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
};
