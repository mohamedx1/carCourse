import YouTube from "@/assets/logos_youtube-icon.svg";
import TikTok from "@/assets/logos_tiktok-icon.svg";
import Facebook from "@/assets/logos_facebook.svg";
import Instagram from "@/assets/skill-icons_instagram.svg";
import SocialMediaButton from "./socialMediaButton";

export default function SocialMediaList() {
  const socialLinks = [
    { name: "YouTube", icon: YouTube, color: "bg-red-500" },
    { name: "TikTok", icon: TikTok, color: "bg-black" },
    { name: "Facebook", icon: Facebook, color: "bg-blue-600" },
    { name: "Instagram", icon: Instagram, color: "bg-pink-500" },
  ];
  return (
    <div className='text-gray-900'>
      <h3 className='font-semibold text-lg mb-4'>Follow us on social media</h3>
      <div className='grid grid-cols-2 gap-4 max-w-sm'>
        {socialLinks.map((social, index) => (
          <SocialMediaButton {...social} key={index} />
        ))}
      </div>
    </div>
  );
}
