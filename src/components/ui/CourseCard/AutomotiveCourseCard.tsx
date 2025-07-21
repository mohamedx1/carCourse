import { Card } from "@/components/ui/card"; // Adjust path if needed
import { Button } from "@/components/ui/button"; // Adjust path if needed
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Clock9 } from "lucide-react";
import userImg from "@/assets/userImage.jpg";
import car from "@/assets/course2.svg";
const AutomotiveCourseCard = () => {
  return (
    <Card className='p-6 rounded-3xl border-primary-100 border-2'>
      <section className=' lg:grid grid-cols-2 '>
        <div className='flex flex-col space-y-4 '>
          <div className='flex items-center text-[#6DC070] font-semibold text-base'>
            <span className='h-4 w-4 bg-[#6DC070] rounded-full mr-2'></span>
            Start your Learning Now
          </div>
          <h2 className='text-2xl font-bold text-gray-800'>Automotive Cars</h2>
          <div className='flex items-center text-gray-600 text-base'>
            <Avatar className='w-5 h-5 mr-2'>
              <AvatarImage className='rounded-full' src={userImg} />
              <AvatarFallback>SA</AvatarFallback>
            </Avatar>
            By <span className='ms-1 text-primary'>Maria</span>
          </div>
          <div className='flex items-center text-gray-500 text-sm'>
            <Clock9 className='w-4 h-4 mr-2' />
            4h,30mins
          </div>
        </div>
        <div className=' flex justify-end '>
          <img
            src={car}
            alt='Automotive Car'
            className='w-full h-full object-cover rounded-lg'
          />
        </div>
      </section>

      <div className='lg:flex items-center mt-6'>
        <Button className='bg-primary hover:bg-primary-500 text-white font-bold py-6  rounded-3xl text-lg'>
          Start Course
        </Button>
        <span className='ml-4 text-gray-500 text-sm font-medium'>
          Next lesson :advanced automation
        </span>
      </div>
    </Card>
  );
};

export default AutomotiveCourseCard;
