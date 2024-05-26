import { ButtonType } from "./types";

const SecondaryRoundButton = ({ text, onClick }: ButtonType) => {
  return (
    <button
      className="px-[25px] py-[14px] bg-active bg-opacity-90 font-kulim text-white rounded-2xl text-xl"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default SecondaryRoundButton;
