import { Button } from "@/components/ui/button";
import course1 from "@/assets/course1.svg";
import course2 from "@/assets/course2.svg";
import CourseCard from "../CourseCard/CourseCard";
export default function AllCourses() {
  const courses = [
    {
      title: "Graffiti Mastery",
      instructor: "Kaleash",
      rating: 4.7,
      duration: "5h 30mins",
      image: course1,
    },
    {
      title: "Graffiti Mastery",
      instructor: "Kaleash",
      rating: 4.7,
      duration: "5h 30mins",
      image: course2,
    },
  ];
  return (
    <div className='mb-8'>
      <div className='flex items-center justify-between mb-6'>
        <h2 className='text-xl font-bold text-gray-900'>All Courses</h2>
        <Button variant='ghost' className='text-purple-600'>
          View all
        </Button>
      </div>

      <div className='grid grid-cols-2 gap-6'>
        {courses.map((course, index) => (
          <CourseCard {...course} key={index}></CourseCard>
        ))}
      </div>
    </div>
  );
}
