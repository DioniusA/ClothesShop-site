import { Outlet } from "react-router-dom";
import AdminSideBar from "./sidebar";
import AdminHeader from "./header";
import { useState } from "react";

function AdminLayout() {
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <div className="flex min-h-screen w-full bg-gradient-to-r from-indigo-900 via-purple-800 to-pink-600">
      {/* admin sidebar */}
      <AdminSideBar open={openSidebar} setOpen={setOpenSidebar} />
      <div className="flex flex-1 flex-col bg-gray-100 rounded-l-xl shadow-xl">
        {/* admin header */}
        <AdminHeader setOpen={setOpenSidebar} />
        <main className="flex-1 flex-col flex bg-gray-200 p-4 md:p-6 text-gray-800">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AdminLayout;
