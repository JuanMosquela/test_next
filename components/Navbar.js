import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex w-full justify-between items-center   ">
      <h1 className="text-2xl">logo</h1>
      <nav>
        <ul className="flex gap-4 text-">
          <Link href="/">Home</Link>
          <Link href="/create-todo">Create todo</Link>
        </ul>
      </nav>
    </div>
  );
};
export default Navbar;
