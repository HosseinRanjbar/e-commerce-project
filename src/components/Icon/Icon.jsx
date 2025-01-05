import React from 'react';
import { BiDollar, BiMenuAltRight } from 'react-icons/bi';
import { FaFacebookF, FaInstagram, FaPhoneAlt, FaPinterest } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { GoArrowSwitch } from 'react-icons/go';
import { IoIosCart, IoIosHeartEmpty } from 'react-icons/io';
import { IoLocationSharp, IoPersonSharp } from 'react-icons/io5';
import { MdEmail, MdOutlineEmail } from 'react-icons/md';

const iconComponent = {
  email: MdOutlineEmail,
  emailSubmit: MdEmail,
  Facebook: FaFacebookF,
  Twitter: FaXTwitter,
  Instagram: FaInstagram,
  Pinterest: FaPinterest,
  Location: IoLocationSharp,
  Phone: FaPhoneAlt,
  Heart: IoIosHeartEmpty,
  Arrow: GoArrowSwitch,
  Dollar: BiDollar,
  Person: IoPersonSharp,
  Cart: IoIosCart,
  Menu: BiMenuAltRight
}

const Icon = ({
  type,
  size,
  className,
  color,
  ...res
}) => {

  const SelectedIcon = iconComponent[type]

  return (
    <SelectedIcon
      size={size}
      className={className}
      color={color}
      {...res}
    />
  )
}

export default Icon