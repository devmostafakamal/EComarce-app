import React from "react";
import { Outlet } from "react-router-dom";

function AuthLayout() {
  return (
    <div className="flex min-h-screen w-full">
      <div className="hidden lg:flex items-center justify-center w-1/2  bg-black px-12">
        <div className="text-center max-w-md space-y-6 text-primary-foreground">
          <h2 className="text-4xl font-extrabold tracking-tight">
            Welcome to Ecommerce shopping
          </h2>
        </div>
      </div>
      <div className="flex flex-1 items-center justify-center bg-background px-4 py-12 ">
        <Outlet />
      </div>
    </div>
  );
}

export default AuthLayout;
