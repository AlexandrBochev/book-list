import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

type ShortenTextProps = {
  text: string;
  length: number;
};

const ShortenText = ({ text, length }: ShortenTextProps) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <span>
            {text?.length >= length ? `${text.slice(0, length)}...` : text}
          </span>
        </TooltipTrigger>
        {text?.length >= length && (
          <TooltipContent>
            <span>{text}</span>
          </TooltipContent>
        )}
      </Tooltip>
    </TooltipProvider>
  );
};

export { ShortenText };
