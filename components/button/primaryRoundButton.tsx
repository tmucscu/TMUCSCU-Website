import { ButtonType } from "./types";

const PrimaryRoundButton = ({ text, onClick }: ButtonType) => {
  return (
    <button
      className="px-[25px] py-[14px] bg-white text-black font-kulim tracking-normal rounded-2xl text-xl"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default PrimaryRoundButton;
