import AllCourses from "@/components/ui/AllCourses/AllCourses";

import AutomotiveCourseCard from "@/components/ui/CourseCard/AutomotiveCourseCard";
import SocialMediaList from "@/components/ui/socialMedia/socialMediaList";
import SubscripePlan from "@/components/ui/SubscripePlan/subscripeplan";
import UpcomingEvents from "@/components/ui/UpcomingEvents/UpcomingEvents";

export default function HomePage() {
  return (
    <div className=' flex gap-6 justify-between flex-col lg:flex-row'>
      <div className=' space-y-6 lg:w-3/5 '>
        <AutomotiveCourseCard />
        <AllCourses />
        <SocialMediaList />
      </div>

      <div className=' space-y-6'>
        <UpcomingEvents />
        <SubscripePlan />
      </div>
    </div>
  );
}
