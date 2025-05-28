import { Text } from "@/components/common";
import classes from "./SocialMedia.module.css";
import Marquee from "react-fast-marquee";
import {
  discordLogo,
  fbLogo,
  telegramLogo,
  twitterLogo,
  youtubeLogo,
} from "@/images";
const socialItems = [
  { logo: youtubeLogo, link: "https://youtube.com", name: "YouTube" },
  { logo: telegramLogo, link: "https://t.me", name: "Telegram" },
  { logo: twitterLogo, link: "https://x.com", name: "Twitter" },
  { logo: discordLogo, link: "https://discord.gg", name: "Discord" },
  {
    logo: fbLogo,
    link: "https://facebook.com",
    name: "Facebook",
  },
];

const SocialMedia = () => {
  return (
    <div className={classes.wrapper}>
      <Marquee autoFill={true} speed={30} pauseOnHover={true}>
        <div className={classes.socialContainer}>
          {socialItems?.map((item, i) => (
            <a
              href={item.link}
              target="_blank"
              className={classes.logoContainer}
              key={i}
              rel="noreferrer"
            >
              <img src={item?.logo} alt="#" className={classes.logo} />
            </a>
          ))}
        </div>
      </Marquee>
    </div>
  );
};
export default SocialMedia;
