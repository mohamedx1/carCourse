import { AppSidebar } from "@/components/ui/AppSidebar";
import Header from "@/components/ui/Header";
import { SidebarProvider } from "@/components/ui/sidebar";

import { Outlet } from "react-router";

export default function MainLayout() {
  return (
    <SidebarProvider>
      <div className='flex h-screen w-screen overflow-hidden bg-background '>
        <AppSidebar />

        <div className='flex flex-col flex-1 overflow-hidden container'>
          <Header />
          <main className='flex-1 overflow-y-auto p-4'>
            <Outlet />
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
