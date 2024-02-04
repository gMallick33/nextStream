import React from "react";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import Action from "./Action";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full h-20 shadow-lg bg-slate-800 px-2 lg:px-4 flex justify-between items-center">
      <Logo />
      <SearchBar />
      <Action />
    </nav>
  );
};

export default Navbar;
