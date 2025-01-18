import Link from "next/link";
import React from "react";

interface Props {
  text: string;
  href: string;
}

const CartLink = ({ text, href }: Props) => {
  return (
    <div className="flex items-center justify-center gap-2 bg-[--grey700] hover:bg-[--Green] rounded-xl w-full p-2 cursor-pointer transition-colors duration-300">
      <Link
        href={href}
        className="text-[--foreground] hover:text-[--gray900] transition-colors duration-300"
      >
        {text}
      </Link>
    </div>
  );
};

export default CartLink;
