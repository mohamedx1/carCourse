import { Card, CardContent } from "../card";
import { Bookmark, Clock, Star } from "lucide-react";
import { Button } from "../button";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import instructorImage from "@/assets/instractor1.svg";
import { cardContainerClass } from "@/styles";
type TCourse = {
  title: string;
  instructor: string;
  rating: number;
  duration: string;
  image: string;
};

export default function CourseCard({
  title,
  instructor,
  rating,
  duration,
  image,
}: TCourse) {
  return (
    <Card className={cardContainerClass}>
      <CardContent className='p-4'>
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className='w-full h-36 object-cover'
        />
        <div className='p-4'>
          <figure className='flex justify-between items-center'>
            <h3 className='font-semibold text-xl text-gray-950  mb-1'>
              {title}
            </h3>
            <Avatar className='w-8 h-8 mr-2'>
              <AvatarImage className='rounded-full' src={instructorImage} />
              <AvatarFallback>SA</AvatarFallback>
            </Avatar>
          </figure>
          <p className='text-sm text-gray-600 mb-2'>
            By <span className='text-primary font-semibold'>{instructor}</span>
          </p>
          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-4 text-sm text-gray-500'>
              <div className='flex items-center gap-2 text-gray-500'>
                <Star className='w-4 h-4 fill-yellow-400 text-yellow-400' />
                <span>{rating}</span>
              </div>
              <div className='flex items-center gap-1 text-gray-500'>
                <Clock className='w-4 h-4' />
                <span>{duration}</span>
              </div>
            </div>
            <Bookmark className='text-gray-500 ' />
          </div>
          <div className='w-full flex justify-end mt-2'>
            <Button
              variant='outline'
              size='sm'
              className='h-auto rounded-3xl border-primary-200 py-2   text-primary shadow-lg hover:text-primary-300 text-base'
            >
              View Course
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
