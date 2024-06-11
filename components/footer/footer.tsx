import DarkModeButton from "../button/darkModeButton";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkIcon from "@mui/icons-material/Link";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { ReactNode } from "react";
import YouTubeIcon from "@mui/icons-material/YouTube";

const FooterIcon = ({
  link,
  children,
}: {
  link: string;
  children: ReactNode;
}) => {
  return (
    <div>
      <a className="text-white px-1" href={link} target="_blank">
        {children}
      </a>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="w-full bg-active flex justify-center items-center z-10 mt-10">
      <FooterIcon link="https://linktr.ee/tmu_cscu">
        <LinkIcon fontSize="large" />
      </FooterIcon>
      <FooterIcon link="https://www.instagram.com/tmu_cscu/">
        <InstagramIcon fontSize="large" />
      </FooterIcon>
      <FooterIcon link="https://www.youtube.com/@tmu_cscu">
        <YouTubeIcon fontSize="large" />
      </FooterIcon>
      <FooterIcon link="https://www.linkedin.com/company/tmu-cscu/">
        <LinkedInIcon fontSize="large" />
      </FooterIcon>
      <FooterIcon link="https://www.twitch.tv/tmu_cscu">
        <img
          className="text-white h-10"
          src="https://img.icons8.com/?size=100&id=exHpmLpQEPmr&format=png&color=FFFFFF"
        />
      </FooterIcon>
      <div className="absolute right-0 md:right-6">
        <DarkModeButton />
      </div>
    </div>
  );
};

export default Footer;
