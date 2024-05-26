import { ButtonType } from "./types";

const TextButton = ({ text, onClick }: ButtonType) => {
  return (
    <button
      className="text-active font-kulim font-semibold text-lg"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default TextButton;
