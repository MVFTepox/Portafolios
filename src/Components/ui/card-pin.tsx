import { PinContainer } from "@/Components";

type CardPinProps = {
  title?: string;
  href?: string;
  className?: string;
  containerClassName?: string;
  text?: string;
  src?: string;
  alt?: string;
};

export const CardPin = ({
  title = "Título por defecto",
  href = "#",
  className = "",
  containerClassName = "",
  text = "Descripción por defecto.",
  src = "https://via.placeholder.com/150",
  alt = "Imagen del proyecto"
}: CardPinProps) => {
  return (
    <PinContainer
      title={title}
      href={href}
      className={className}
      containerClassName={containerClassName}
    >
      <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[15rem] h-[20rem]">
        <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
        <p className="text-sm text-slate-400">{text}</p>
        <div className="flex justify-center items-center flex-1 mt-4">
          <img
            src={src.trim()}
            alt={alt}
            className=" object-contain rounded-lg shadow-md w-auto h-auto"
          />
        </div>
      </div>
    </PinContainer>
  );
};
