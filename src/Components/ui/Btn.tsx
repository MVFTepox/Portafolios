import { cn } from "@/Lib/UtilsAcernity";

interface Props {
  className?: string;
  text?: string;
  onClick?: () => void;
}

export const BtnDecorationWithoutFuntion = ({
  className,
  onClick,
  text
}: Props) => {
  return (
    <>
      <button onClick={onClick} className={cn(className)}>
        {text}
      </button>
    </>
  );
};
