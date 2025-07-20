import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import userImage from "@/assets/userImage.jpg";
import { Bell } from "lucide-react";
export default function Header() {
  let Fname = "Sarah";
  return (
    <>
      <header className='px-4 py-3 md:px-6 lg:px-8  '>
        <div className='flex flex-col gap-4 md:flex-row md:items-center md:justify-between container border-b'>
          <div>
            <h1 className='text-lg sm:text-2xl font-bold text-gray-900 mb-1'>
              Good morning {Fname},
            </h1>
            <p className='text-sm sm:text-base text-gray-600'>
              Ready for your Learning Today!
            </p>
          </div>

          <div className='flex items-center gap-3 sm:gap-4'>
            <button className='p-2 hover:bg-gray-100 rounded-lg transition'>
              <Bell className='w-5 h-5' />
            </button>

            <Avatar className='w-10 h-10'>
              <AvatarImage className='rounded-full' src={userImage} />
              <AvatarFallback>SA</AvatarFallback>
            </Avatar>

            <span className='text-sm sm:text-base font-medium text-gray-900'>
              Sara Ali
            </span>
          </div>
        </div>
      </header>
    </>
  );
}
