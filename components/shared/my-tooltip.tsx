import React, { Children } from "react";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface MyTooltipProps {
  children: React.ReactElement;
  tooltipString: string;
}

const MyTooltip: React.FC<MyTooltipProps> = ({ children, tooltipString }) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent>
          <p>{tooltipString}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default MyTooltip;
