"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import UserInformation from "./UserInformation";
// import NavLinks from "./NavLinks";

const Header = () => {
const [date, setDate] = useState("");

useEffect(() => {
const today = new Date().toLocaleDateString("bn-BD", {
dateStyle: "full",
});


setDate(today);


}, []);

return ( 

<header className="container mx-auto">
    <div className="relative mx-auto flex max-w-7xl items-center justify-end px-4 py-4">

{/* Logo and Website Info - Center */}

<div className="flex flex-col items-center gap-2 sm:flex-row sm:gap-3 sm:absolute sm:left-1/2 sm:-translate-x-1/2"> <Image src="/logo.webp" alt="logo" className="h-10 w-10 shrink-0" width={50} height={50} />

    <div className="text-center sm:text-left">
    <h2 className="text-2xl font-bold text-[#c10007]">
        Bangla new 24
    </h2>
    <p className="text-sm text-[#737373]">{date}</p>
    </div>

</div>

{/* Buttons - Right */}

  <UserInformation></UserInformation>

</div>
{/* <NavLinks></NavLinks> */}
</header>


);
};

export default Header;
