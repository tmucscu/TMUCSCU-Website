import { ButtonType } from "./types";

const SecondaryRoundButton = ({ text, onClick }: ButtonType) => {
  return (
    <button
      className="px-[25px] py-[14px] bg-active bg-opacity-90 font-kulim tracking-normal text-white rounded-2xl text-xl dark:bg-activeDark"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default SecondaryRoundButton;
