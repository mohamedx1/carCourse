import { Calendar, Clock, Radio, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

// import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import bmw from "@/assets/bmw.svg";
import insatractor1 from "@/assets/instractor1.svg";
import { cardContainerClass } from "@/styles";
import { Button } from "../button";
export default function UpcomingEvents() {
  return (
    <div className=''>
      <h3 className='text-2xl font-semibold text-gray-900 mb-4'>
        Upcoming Events
      </h3>

      <Card className={cardContainerClass}>
        <CardContent className='p-4'>
          <div className='relative'>
            <img
              src={bmw}
              alt='BMW Dashboard'
              className='w-full h-36 rounded-lg object-cover'
            />
          </div>

          <div className='p-4 w-4/5'>
            <div className='flex items-center justify-between mb-3'>
              <span className='text-xl font-semibold text-gray-400 tracking-wide'>
                EVENT
              </span>
              <Button
                variant={"default"}
                className='px-4 py-2 bg-primary  font-medium rounded-full flex items-center gap-1 '
              >
                <Radio />
                <span>Join Live</span>
              </Button>
            </div>

            <h4 className='font-semibold text-base text-gray-900  mb-2 leading-snug'>
              Manual vs. Automatic Transmission
            </h4>

            <div className='flex items-center gap-1 mb-3'>
              <Avatar className='w-5 h-5'>
                <AvatarImage src={insatractor1} />
                <AvatarFallback className='text-xs'>M</AvatarFallback>
              </Avatar>
              <span className='text-xs text-gray-500'>
                By <span className='text-primary font-medium'>Maria</span>
              </span>
            </div>

            <div className='flex items-center gap-4 text-[11px] text-gray-500'>
              <div className='flex items-center gap-1'>
                <Calendar className='w-3 h-3' />
                <span>Feb 9</span>
              </div>
              <div className='flex items-center gap-1'>
                <Clock className='w-3 h-3' />
                <span>7 pm</span>
              </div>
              <div className='flex items-center gap-1'>
                <Users className='w-3 h-3' />
                <span>182 Going</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
