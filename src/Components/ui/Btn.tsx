import { cn } from "@/Lib/UtilsAcernity";

interface Props {
  className?: string;
  text?: string;
  onClick?: () => void;
  type?: string;
}

export const BtnDecorationWithoutFuntion = ({
  className,
  onClick,
  text,
  type = "button",
}: Props) => {
  const buttonType = type === "button" || type === "submit" || type === "reset" ? type : "button";
  return (
    
      <button onClick={onClick} type={buttonType} className={cn(className)}>
        {text}
      </button>
    
  );
};
