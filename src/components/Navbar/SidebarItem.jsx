import { Link, useLocation } from 'react-router-dom'
import { cn } from '../../lib/utils'

export const SidebarItem = ({ icon: Icon, solidIcon: SolidIcon, text, expanded, href }) => {

   const location = useLocation();
   const path = location.pathname;
   const isActive = path === href;

   return (
      <Link to={href}>
         <li
            className={
               cn(`group relative flex items-center py-2 px-3 my-1 text-muted font-medium rounded-md cursor-pointer`,
                  isActive ? 'text-primary' : 'hover:bg-primary/20'
               )}
         >
            {
               isActive ? <SolidIcon /> : <Icon />
            }
            <span className={cn(`overflow-hidden transition-all`, expanded ? 'w-52 ml-3' : 'w-0')}>
               {text}
            </span>
            {/* Tooltip */}
            {!expanded &&
               <div
                  className='absolute z-[5000000px] invisible px-2 py-1 ml-6 text-sm transition-all -translate-x-3 rounded-md w-max left-full bg-brand-100 text-brand-800 opacity-20 group-hover:visible group-hover:opacity-100 group-hover:translate-x-0'
               >
                  {text}
               </div>
            }
         </li>
      </Link>
   );
};