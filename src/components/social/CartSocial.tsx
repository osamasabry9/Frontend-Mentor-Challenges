import Image from "next/image";
import React from "react";
import CartLink from "./CartLink";

const LinkData = [
  {
    text: "Linkedin",
    href: "https://www.linkedin.com/in/jessicarandall/",
  },
  {
    text: "Twitter",
    href: "https://twitter.com/jessicarandall",
  },
  {
    text: "Github",
    href: "https://github.com/jessicarandall",
  },
];

const CartSocial = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-4 bg-[--grey800] p-8 m-auto rounded-xl max-w-sm md:max-w-lg  ">
      {/* cart Image */}
      <Image
        src="/images/avatar-jessica.jpeg"
        alt="jessica"
        width={80}
        height={80}
        className="rounded-full"
      />
      {/* cart name */}
      <h2 className="text-2xl font-bold text-[--foreground] ">
        Jessica Randall
      </h2>
      {/* cart location  */}
      <p className="text-[--Green] ">London, United Kingdom</p>
      {/* cart experience */}
      <p className="text-gray-300">
        {'"Front-end developer and avid reader."'}
      </p>
      {/* cart links social */}
      {LinkData.map((link) => (
        <CartLink key={link.text} text={link.text} href={link.href} />
      ))}
    </section>
  );
};

export default CartSocial;
