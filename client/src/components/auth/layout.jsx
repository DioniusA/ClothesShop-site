import { Outlet } from "react-router-dom";

function AuthLayout() {
  return (
    <div className="flex min-h-screen w-full bg-gray-100">
      <div className="hidden lg:flex items-center justify-center bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 w-1/2 px-16">
        <div className="max-w-md space-y-6 text-center text-white">
          <h1 className="text-5xl font-bold tracking-tight">
            Start Your Shopping Journey
          </h1>
        </div>
      </div>
      <div className="flex flex-1 items-center justify-center bg-white px-8 py-16 sm:px-10 lg:px-20">
        <Outlet />
      </div>
    </div>
  );
}

export default AuthLayout;
