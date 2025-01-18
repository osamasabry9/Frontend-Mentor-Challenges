import Link from "next/link";
import React from "react";

type props = {
  title: string;
  linkPage: string;
};

const CartItem = ({ title, linkPage }: props) => {
  return (
    <section className="flex flex-col items-center justify-center bg-[--grey800] p-8 rounded-xl max-w-sm min-h-min ">
      <Link
        href={linkPage}
        className="text-[--foreground]
        bg-[--grey900] hover:bg-[--Green] rounded-xl p-4 
        hover:text-[--gray900] transition-colors duration-300 "
      >
        {title}
      </Link>
    </section>
  );
};

export default CartItem;
