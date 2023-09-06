import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";

function Navbar() {
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    // Check if this code is running on the client side (browser)
    if (typeof window !== "undefined") {
      setShouldRender(true);
    }
  }, []);

  if (!shouldRender) {
    return null; // Don't render on the server side
  }

  // Check if userToken is present in local storage
  const userToken = localStorage.getItem("userToken");

  return (
    <div className="fixed top-0 w-full h-16 flex items-center justify-between px-8 md:px-16 z-50 bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100/10">
      <Link href={"/"}>
        <Image className="object-cover" src={"https://aroosand.sirv.com/Soltaire/Solitaire%20Putih.jpg"} alt="solitaire logo" width={100} height={100} style={{ mixBlendMode: "multiply" }} />
      </Link>
      <div className="flex gap-x-5">
        {userToken ? (
          <button
            onClick={() => {
              // Handle logout logic here, e.g., remove the user token from local storage
              localStorage.removeItem("userToken");
              window.location.reload();
              // You can also redirect the user to the login page or any other desired action
            }}
            className="bg-white shadow-md text-pink-700 font-bold px-5 py-1 rounded-lg"
          >
            Logout
          </button>
        ) : (
          <Link className="bg-white shadow-md text-pink-700 font-bold px-5 py-1 rounded-lg" href={"/register"}>
            Register
          </Link>
        )}
      </div>
    </div>
  );
}

export default Navbar;
