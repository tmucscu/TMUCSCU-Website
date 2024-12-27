import { WidthContext } from "../../app/context/WidthContext.tsx";
import clsx from "clsx";
import { useContext } from "react";

export type MemberType = {
  name: string;
  position: string;
  email: string;
  imageId?: string;
};

const TeamCard = ({ member }: { member: MemberType }) => {
  const width = useContext(WidthContext);

  const getTextWidth = () => {
    if (
      !member.position.includes("Deputy") &&
      !member.position.includes("Associate") &&
      member.position !== "Systems Administrator"
    ) {
      return "text-3xl";
    }
    if (width <= 1024) {
      return "text-2xl";
    }

    return "text-xl xl:text-2xl";
  };

  const getMemberImgSrc = (id?: string) => {
    return id
      ? `https://drive.google.com/thumbnail?id=${id}&sz=w1000`
      : "https://www.fluidsecure.com/wp-content/uploads/2023/02/Blank-Headshot.jpg";
  };
  return (
    <div className="grid justify-items-center text-center">
      <h1 className={clsx("mb-4", getTextWidth())}>
        {member.position === "President" ? "" : member.position}
      </h1>
      <img
        className="w-36 rounded-full"
        src={getMemberImgSrc(member.imageId)}
      />
      <p className="mt-4">{member.name}</p>
      <p className="mb-10 hover:text-active dark:hover:text-activeDark">
        <a href={`mailto:${member.email}`}>{member.email}</a>
      </p>
    </div>
  );
};

export default TeamCard;
