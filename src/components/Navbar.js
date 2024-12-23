import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <header className="md:pl-7">
      <div className="md:pl-36">
        <Image src="/images/logo.png" alt="Logo" width={250} height={64} />
      </div>
    </header>
  );
};

export default Navbar;
