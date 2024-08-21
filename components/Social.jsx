import Link from "next/link";

import { FaGithub, FaLinkedinIn, FaYoutube, FaTwitter, FaInstagram, FaWhatsapp } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/jackson51472" },
  { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/jackson-faria-5bb362252/" },
  { icon: <FaWhatsapp />, path: "https://wa.me/5532985108911" },
  { icon: <FaInstagram />, path: "" },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
