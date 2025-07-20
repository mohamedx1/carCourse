import { Calendar, Clock, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import bmw from "@/assets/bmw.svg";
import insatractor1 from "@/assets/instractor1.svg";
export default function UpcomingEvents() {
  return (
    <div className=''>
      <h3 className='text-lg font-semibold text-gray-900 mb-4'>
        Upcoming Events
      </h3>

      <Card className='overflow-hidden'>
        <CardContent className='p-2'>
          <div className='relative'>
            <img
              src={bmw}
              alt='BMW Dashboard'
              className='w-full h-36 rounded-lg object-cover'
            />
          </div>

          <div className='p-4'>
            <div className='flex items-center justify-between mb-3'>
              <span className='text-[10px] font-semibold text-gray-400 tracking-wide'>
                EVENT
              </span>
              <Badge className='text-[11px] px-2 py-[2px] bg-blue-100 text-blue-700 font-medium rounded-full flex items-center gap-1'>
                <span className='w-1.5 h-1.5 bg-blue-600 rounded-full'></span>
                Join Live
              </Badge>
            </div>

            <h4 className='font-semibold text-gray-900 text-sm mb-2 leading-snug'>
              Manual vs. Automatic Transmission
            </h4>

            <div className='flex items-center gap-1 mb-3'>
              <Avatar className='w-5 h-5'>
                <AvatarImage src={insatractor1} />
                <AvatarFallback className='text-xs'>M</AvatarFallback>
              </Avatar>
              <span className='text-xs text-gray-500'>
                By <span className='text-blue-600 font-medium'>Maria</span>
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
