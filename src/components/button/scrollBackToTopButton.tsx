import ArrowDropDownCircleIcon from "@mui/icons-material/ArrowDropDownCircle";
const ScrollBackToTopButton = () => {
  return (
    <div className="sticky rotate-180 opacity-90 bottom-6 mr-6 drop-shadow-lg text-active text-7xl">
      <button
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        <ArrowDropDownCircleIcon fontSize="inherit" />
      </button>
    </div>
  );
};

export default ScrollBackToTopButton;
