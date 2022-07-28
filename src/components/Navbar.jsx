import React from "react";

const Navbar = () => {
  return (
    <div>
      <h1 className="text-red-600 text-4xl font-bold cursor-pointer">
        NETFLIX
      </h1>
      <div>
        <button>Sign In</button>
        <button className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Navbar;
