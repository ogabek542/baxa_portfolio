// "use client"
import Link from "next/link";
import { FaInstagram, FaTelegram, FaBehanceSquare } from "react-icons/fa";

const socials = [
  {
    icon: <FaBehanceSquare />,
    path: "https://www.behance.net/baxtiyorusmonov1996",
  },
  {
    icon: <FaInstagram />,
    path: "https://www.instagram.com/architecture_u14?utm_source=qr&igsh=b2NvZTZsd2ttODZm",
  },
  { icon: <FaTelegram />, path: "https://t.me/baxtiyoru" },
];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => (
        <Link key={index} href={item.path} className={iconStyles}>
          {item.icon}
        </Link>
      ))}
    </div>
  );
};

export default Socials;
