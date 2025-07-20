import { Card, CardContent } from "../card";
import { Clock, Eye, Star } from "lucide-react";
import { Button } from "../button";

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
    <Card className='overflow-hidden'>
      <CardContent className='p-0'>
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className='w-full h-32 object-cover'
        />
        <div className='p-4'>
          <h3 className='font-semibold text-gray-900 mb-1'>{title}</h3>
          <p className='text-sm text-gray-600 mb-2'>By {instructor}</p>
          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-4 text-sm text-gray-500'>
              <div className='flex items-center gap-1'>
                <Star className='w-4 h-4 fill-yellow-400 text-yellow-400' />
                <span>{rating}</span>
              </div>
              <div className='flex items-center gap-1'>
                <Clock className='w-4 h-4' />
                <span>{duration}</span>
              </div>
            </div>
            <Button
              variant='ghost'
              size='sm'
              className='text-purple-600'
              title='View Course'
            >
              <Eye className='w-4 h-4 mr-1' />
              View Course
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
