import SecondaryRoundButton from "./secondaryRoundButton";

const ScrollBackToTopButton = () => {
  return (
    <div className="sticky flex justify-end bottom-4 mr-4">
      <SecondaryRoundButton
        text={"▲"}
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      />
    </div>
  );
};

export default ScrollBackToTopButton;
