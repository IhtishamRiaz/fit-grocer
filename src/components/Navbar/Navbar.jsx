import React, { useState } from 'react'
import { cn } from '../../lib/utils'
import { ChevronFirst, MoreVertical, ChevronLast } from 'lucide-react'
import { SidebarItem } from './SidebarItem'
import { MobileNavItem } from './MobileNavItem'
import { useGlobalStore } from '../../stores/globalStore'
import NavItems from '../../Data/NavData'
import {
   DropdownMenu,
   DropdownMenuContent,
   DropdownMenuLabel,
   DropdownMenuSeparator,
   DropdownMenuTrigger,
   DropdownMenuItem
} from "../ui/dropdown-menu"

const Navbar = () => {
   const [expanded, setExpanded] = useState(true)
   const isMobile = useGlobalStore((state) => state.isMobile)

   return (
      <>
         {!isMobile ?
            (
               <aside className='sticky top-0 h-screen'>
                  <nav className='flex flex-col h-full bg-white border-r shadow-md'>
                     {/* Logo */}
                     <div className='flex items-center justify-between p-4 pb-2'>
                        <img
                           src="https://img.logoipsum.com/262.svg"
                           alt=""
                           className={cn(`overflow-hidden transition-all`, expanded ? 'w-32' : 'w-0')}
                        />
                        <button
                           className='p-1.5 rounded-lg bg-brand-50 hover:bg-brand-100'
                           onClick={() => setExpanded(curr => !curr)}
                        >
                           {expanded ? <ChevronFirst /> : <ChevronLast />}
                        </button>
                     </div>
                     {/* Ul */}
                     <ul className='flex-1 px-3 mt-5'>
                        {NavItems?.map(({ text, icon, href }, index) => {
                           return (
                              <React.Fragment key={text}>
                                 {(index === 7) ? <hr className='my-3' /> : null}
                                 <SidebarItem text={text} icon={icon} expanded={expanded} href={href} />
                              </React.Fragment>
                           );
                        })}
                     </ul>
                     {/* User Avatar */}
                     <div className='flex p-3 border-t'>
                        <img
                           src="https://ui-avatars.com/api/?background=D8B4FE&color=6B21A8&bold=true"
                           alt=""
                           className='w-10 h-10 rounded-md'
                        />
                        <div className={cn(`flex justify-between overflow-hidden transition-all items-center`, expanded ? 'w-52 ml-3' : 'w-0')}>
                           <div className='leading-4'>
                              <h4 className='font-bold'>John Doe</h4>
                              <span className='text-sm text-gray-600'>johndow@gmail.com</span>
                           </div>
                           {/* DropDownMenu */}
                           <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                 <MoreVertical size={20} className='cursor-pointer' />
                              </DropdownMenuTrigger>
                              <DropdownMenuContent className="w-56">
                                 <DropdownMenuLabel>Settings</DropdownMenuLabel>
                                 <DropdownMenuSeparator />
                                 <DropdownMenuItem>
                                    Profile
                                 </DropdownMenuItem>
                                 <DropdownMenuItem>
                                    Logout
                                 </DropdownMenuItem>
                              </DropdownMenuContent>
                           </DropdownMenu>
                        </div>
                     </div>
                  </nav>
               </aside>
            )
            :
            (
               <nav className='fixed bottom-0 left-0 w-screen py-4 bg-foreground px-7 '>
                  <div className='flex items-center justify-between'>
                     {
                        NavItems?.map(({ icon, solidIcon, href }, index) => {
                           return (
                              <React.Fragment key={index}>
                                 <MobileNavItem icon={icon} solidIcon={solidIcon} href={href} />
                              </React.Fragment>
                           );
                        })
                     }
                  </div>
               </nav>
            )
         }

      </>
   )
}

export default Navbar;