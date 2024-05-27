import ArrowDropDownCircleIcon from "@mui/icons-material/ArrowDropDownCircle";
const ScrollBackToTopButton = () => {
  return (
    <div className="fixed rotate-180 opacity-90 right-10 bottom-24 text-active text-7xl dark:bg-dark dark:text-activeDark">
      <button
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        <ArrowDropDownCircleIcon
          className="drop-shadow-[0_0px_5px_rgba(100,100,100,0.3)]"
          fontSize="inherit"
        />
      </button>
    </div>
  );
};

export default ScrollBackToTopButton;
