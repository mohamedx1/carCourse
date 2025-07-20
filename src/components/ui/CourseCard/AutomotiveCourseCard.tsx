import { Card } from "@/components/ui/card"; // Adjust path if needed
import { Button } from "@/components/ui/button"; // Adjust path if needed
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Clock9 } from "lucide-react";
import userImg from "@/assets/userImage.jpg";
import car from "@/assets/car.svg";
const AutomotiveCourseCard = () => {
  return (
    <Card className='p-6 rounded-2xl shadow-lg'>
      <section className='    grid grid-cols-2'>
        <div className='flex flex-col space-y-4 '>
          <div className='flex items-center text-green-600 font-semibold'>
            <span className='h-2 w-2 bg-green-600 rounded-full mr-2'></span>
            Start your Learning Now
          </div>
          <h2 className='text-2xl font-bold text-gray-800'>Automotive Cars</h2>
          <div className='flex items-center text-gray-600 text-base'>
            <Avatar className='w-5 h-5 mr-2'>
              <AvatarImage className='rounded-full' src={userImg} />
              <AvatarFallback>SA</AvatarFallback>
            </Avatar>
            By Maria
          </div>
          <div className='flex items-center text-gray-500 text-sm'>
            <Clock9 className='w-4 h-4 mr-2' />
            4h,30mins
          </div>
        </div>
        <div className=''>
          <img src={car} alt='Automotive Car' className='object-contain' />
        </div>
      </section>

      <div className='flex items-center mt-4'>
        <Button className='bg-blue-600 hover:bg-blue-700 text-white font-bold py-6 px-6 rounded-xl text-lg'>
          Start Course
        </Button>
        <span className='ml-4 text-gray-600 text-lg'>
          Next lesson :advanced automation
        </span>
      </div>
    </Card>
  );
};

export default AutomotiveCourseCard;
