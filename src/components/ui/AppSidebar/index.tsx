"use client";

import {
  Home,
  BookOpen,
  Crown,
  Bookmark,
  User,
  Settings,
  HelpCircle,
  LogOut,
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
// Navigation items data
const navigationItems = [
  { icon: Home, label: "Home", url: "#", isActive: true },
  { icon: BookOpen, label: "Course", url: "#" },
  { icon: Crown, label: "Premium", url: "#" },
  { icon: Bookmark, label: "Bookmark", url: "#" },
  { icon: User, label: "Profile", url: "#" },
  { icon: Settings, label: "Settings", url: "#" },
  { icon: HelpCircle, label: "Help Center", url: "#" },
];

export function AppSidebar() {
  return (
    <Sidebar className='border-r'>
      <SidebarHeader className='p-6'>
        <div className='flex items-center gap-2'>
          <div className='w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center'>
            <span className='text-white font-bold text-sm'>UI</span>
          </div>
          <span className='font-semibold text-gray-800'>Untitled UI</span>
        </div>
      </SidebarHeader>

      <SidebarContent className='px-3'>
        <SidebarMenu>
          {navigationItems.map((item) => (
            <SidebarMenuItem key={item.label}>
              <SidebarMenuButton
                asChild
                isActive={item.isActive}
                className='w-full justify-start gap-3 px-3 py-2 h-10'
              >
                <a href={item.url}>
                  <item.icon className='w-5 h-5' />
                  <span className='font-medium'>{item.label}</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>

        <SidebarSeparator className='my-4' />

        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className='w-full justify-start gap-3 px-3 py-2 h-10 text-red-600 hover:text-red-600 hover:bg-red-50'
            >
              <button>
                <LogOut className='w-5 h-5' />
                <span className='font-medium'>Logout</span>
              </button>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarContent>

      <SidebarFooter className='p-6'>
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
