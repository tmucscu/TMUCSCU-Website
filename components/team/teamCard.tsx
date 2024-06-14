import { WidthContext } from "../../app/context/WidthContext.tsx";
import clsx from "clsx";
import { useContext } from "react";

export type MemberType = {
  name: string;
  position: string;
  email: string;
  imageUrl: string;
};

const TeamCard = ({ member }: { member: MemberType }) => {
  const width = useContext(WidthContext);

  const getTextWidth = () => {
    if (
      !member.position.includes("Deputy") &&
      member.position !== "Careers & Co-op Associate"
    ) {
      return "text-3xl";
    }
    if (width <= 1024) {
      return "text-2xl";
    }

    return "text-xl xl:text-2xl";
  };
  return (
    <div className="grid justify-items-center text-center">
      <h1 className={clsx("mb-4", getTextWidth())}>
        {member.position === "President" ? "" : member.position}
      </h1>
      <img
        className="w-36 rounded-full border-2 border-black"
        src={member.imageUrl}
      />
      <p className="mt-4">{member.name}</p>
      <p className="mb-10 hover:text-active dark:hover:text-activeDark">
        <a href={`mailto:${member.email}`}>{member.email}</a>
      </p>
    </div>
  );
};

export default TeamCard;
