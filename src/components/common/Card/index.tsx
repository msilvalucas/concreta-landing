import type { ReactNode } from "react";


interface CardProps {
  title: string;
  description: string;
  showButton?: boolean;
  children?: ReactNode;
}

export const Card = ({ title, description, showButton = false, children }: CardProps) => {
  return (
    <div className="flex flex-col max-h-[479px] rounded-[28px] border border-[#A8CDEE] p-6 items-center justify-between bg-white shadow-sm transition hover:shadow-md">
      <div className="mb-4">{children}</div>

      <h4 className="text-center text-[20px] sm:text-[24px] font-bold font-answeone text-[#0E1022] mb-2">
        {title}
      </h4>

      <p className="text-center text-[16px] text-[#0E1022] mb-4">
        {description}
      </p>

      {showButton && (
        <button className="w-full py-2 px-4 bg-[#A8CDEE] text-[#0E1022] font-medium rounded-full transition hover:brightness-105">
          Saiba mais
        </button>
      )}
    </div>
  );
};
