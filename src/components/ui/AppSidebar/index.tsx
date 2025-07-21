"use client";

import {
  Home,
  BookOpen,
  Bookmark,
  User,
  Settings,
  HelpCircle,
  LogOut,
  Briefcase,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import userImage from "@/assets/userImage.jpg";
import logo from "@/assets/logo.png";

const navigationItems = [
  { label: "Home", icon: Home, url: "#home", isActive: true }, // Set isActive for Home
  { label: "Course", icon: BookOpen, url: "#course" },
  { label: "Premium", icon: Briefcase, url: "#premium" },
  { label: "Bookmark", icon: Bookmark, url: "#bookmark" },
  { label: "Profile", icon: User, url: "#profile" },
];

const helpAndSettingsItems = [
  { label: "Settings", icon: Settings, url: "#settings" },
  { label: "Help Center", icon: HelpCircle, url: "#help" },
];

export function AppSidebar() {
  return (
    <Sidebar className='border-r bg-white h-screen flex flex-col'>
      <SidebarHeader className='p-6'>
        <div className='flex items-center gap-2'>
          <div className='w-6 h-6 flex'>
            <img
              src={logo}
              alt='Logo'
              className='w-full h-full object-contain'
            />
          </div>
          <span className='font-semibold text-lg text-gray-900'>
            Untitled UI
          </span>
        </div>
      </SidebarHeader>
      <SidebarContent className='px-3 flex-grow mt-8'>
        <SidebarMenu>
          {navigationItems.map((item) => (
            <SidebarMenuItem key={item.label}>
              <SidebarMenuButton
                asChild
                isActive={item.isActive}
                className={`w-full justify-start gap-3 px-3 py-2 h-10 rounded-md mb-2 ${
                  item.isActive
                    ? "bg-primary-50 text-primary-700 hover:bg-primary-100"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <a href={item.url} className='flex items-center gap-3'>
                  <span className='w-8 h-8 flex items-center'>
                    <item.icon />
                  </span>
                  <span className='font-semibold text-xl'>{item.label}</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
        <SidebarSeparator className='my-4 bg-transparent' />

        <SidebarMenu>
          {helpAndSettingsItems.map((item) => (
            <SidebarMenuItem key={item.label}>
              <SidebarMenuButton
                asChild
                className='w-full justify-start gap-3 px-3 py-2 h-10 rounded-md text-gray-700 hover:bg-gray-100 mb-2'
              >
                <a href={item.url} className='flex items-center gap-3'>
                  <span className='w-7 h-7 flex items-center'>
                    <item.icon />
                  </span>
                  <span className='font-medium text-xl'>{item.label}</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
        <SidebarSeparator className='my-6 bg-transparent ' />

        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className='w-full justify-start gap-3 px-3 py-2 h-10 text-red-600 hover:text-red-600 hover:bg-red-50 rounded-md'
            >
              <button className='flex items-center gap-3'>
                <LogOut className='w-5 h-5' />
                <span className='font-medium text-base'>Logout</span>
              </button>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter className='p-6  '>
        <div className='flex items-center gap-3'>
          <Avatar className='w-10 h-10 '>
            <AvatarImage className='rounded-full' src={userImage} />
            <AvatarFallback>SA</AvatarFallback>
          </Avatar>
          <div className='flex-1 min-w-0'>
            <div className='font-medium text-gray-900 truncate'>Sara Ali</div>
            <div className='text-sm text-gray-500 truncate'>
              Sara.Ali88@gmail.com
            </div>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
