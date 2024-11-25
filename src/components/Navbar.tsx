import Image from "next/image";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4">
      {/* Search Bar */}
      <div className="hidden md:flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2">
        <Image src="/search.png" alt="" width={14} height={14} />
        <input className="p-2 w-[200px] bg-transparent outline-none" type="text" placeholder="Search..../" />
      </div>
      {/* Icon and User */}
      <div className="flex items-center gap-6 justify-end w-full">
        <div className="bg-white rounded-full w-7 h-7 flex justify-center cursor-pointer">
             <Image src="/message.png" alt="" width={20} height={20}/>
        </div>
        <div className="bg-white rounded-full w-7 h-7 flex justify-center cursor-pointer relative">
           <Image src="/announcement.png" alt="" width={20} height={20}/>
           <div className="absolute -top-3 -right-3 w-5 h-5 bg-purple-500 flex items-center justify-center rounded-full text-white text-xs">1</div>
        </div>
        <div className="flex flex-col">
          <span className="text-xs leading-3 font-medium">John Doe</span>
          <span className="text-[10px] text-gray-500 text-right">Admin</span>
        </div>
        <Image src="/avatar.png" alt="" width={36} height={36} className="rounded-full" />

      </div>
    </div>
  );
};

export default Navbar;