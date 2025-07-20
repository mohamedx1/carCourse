type SocialLink = {
  name: string;
  icon: string;
  color?: string;
};

export default function SocialMediaButton({ name, icon }: SocialLink) {
  return (
    <button className='flex items-center gap-3 px-4 py-2 rounded-full bg-[#f4f4ff] text-sm font-medium shadow-sm hover:bg-[#e6e6ff] transition'>
      <img src={icon} alt={name} className='w-5 h-5 object-contain' />
      <span>{name}</span>
    </button>
  );
}
