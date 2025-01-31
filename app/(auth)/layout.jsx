import React from "react";
import Image from "next/image";
import ill from "../../public/authIllustration.avif"; // Update path if needed

const AuthLayout = ({ children }) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 via-blue-200 to-white p-6">
      <div className="flex bg-white rounded-3xl shadow-xl w-full max-w-4xl overflow-hidden">
        <div className="w-1/2 relative">
          <Image
            src={ill}
            alt="Login Illustration"
            layout="responsive"
            width={600}
            height={600}
            className="object-cover shadow-xl rounded-l-3xl"
          />
        </div>
        <div className="w-1/2 bg-white p-8 flex flex-col justify-center">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
