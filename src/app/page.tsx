import CartItem from "@/components/Cart";

export default function Home() {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 items-center justify-center min-h-screen min-w-screen m-auto">
      <CartItem title="Day 1 - Social Challenge" linkPage="/social" />
    </main>
  );
}
