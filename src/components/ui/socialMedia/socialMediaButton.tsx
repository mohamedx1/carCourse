type SocialLink = {
  name: string;
  icon: string;
  color?: string;
};

export default function SocialMediaButton({ name, icon }: SocialLink) {
  return (
    <button className='flex w-32 items-center gap-3 px-4 py-2 rounded-full bg-primary-50 text-sm font-medium shadow-sm hover:bg-primary-100 transition'>
      <img src={icon} alt={name} className='w-5 h-5 ' />
      <span>{name}</span>
    </button>
  );
}
