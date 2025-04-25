'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

// Define the MenuItem interface
interface MenuItem {
  path: string;
  icon: string;
  label: string;
  activeRoutes: string[];
}

// Define menu items as a constant
const menuItems: MenuItem[] = [
  {
    path: '/',
    icon: 'uil-apps',
    label: 'Dashboard',
    activeRoutes: ['/']
  },
  {
    path: '/form',
    icon: 'uil-apps',
    label: 'Form',
    activeRoutes: ['/form', '/form/[id]']
  },
  {
    path: '/rfq',
    icon: 'uil-file-alt',
    label: 'RFQ Listing',
    activeRoutes: ['/rfq', '/rfq/[id]']
  },
  {
    path: '/quotes',
    icon: 'uil-receipt',
    label: 'Quotes',
    activeRoutes: ['/quotes']
  }
];

export default function Sidebar() {
  const pathname = usePathname();
  
  // Function to check if a menu item should be active
  const isActive = (item: MenuItem): boolean => {
    return item.activeRoutes.some((route: string) => {
      // Handle dynamic routes by replacing [id] with any value
      if (route.includes('[id]')) {
        const baseRoute = route.split('/[')[0];
        return pathname.startsWith(baseRoute);
      }
      return pathname === route;
    });
  };

  return (
    <>
      <input type="checkbox" id="layout-sidebar-toggle-trigger" className="hidden" aria-label="Toggle layout sidebar" />
      
      <div id="layout-sidebar">
        {/* User Menu */}
        <div className="h-18 shrink-0 p-3 flex items-center gap-2 w-full">
          <div className="dropdown dropdown-bottom w-full">
            <label tabIndex={0}
              className="!h-auto w-full justify-between btn btn-ghost border-none rounded-box p-1.5 bg-base-200/40 hover:bg-base-200">
              <div className="flex items-center gap-1">
                <div aria-label="Avatar photo" className="avatar">
                  <div className="mask mask-squircle w-9 h-9 bg-primary text-white !flex justify-center items-center">
                    <span className="text-sm font-semibold w-full text-center">HG</span> 
                  </div>
                </div>
                <div className="ml-1 flex flex-col items-start text-left">
                  <p className="text-sm/tight font-semibold truncate max-w-[15ch] text-base-content">H. Granger</p>
                  <p className="text-xs/none font-medium text-base-content/60">Admin</p>
                </div>
              </div>
              <i className="uil uil-angle-down text-xl/none opacity-50"></i>
            </label>
            <ul
                role="menu"
                tabIndex={0}
                className="dropdown-content menu">
                <li>
                    <div>
                        <i className="uil uil-user"></i>
                        <span>My Profile</span>
                    </div>
                </li>
                <li>
                    <div>
                        <i className="uil uil-cog"></i>
                        <span>Settings</span>
                    </div>
                </li>
                <li>
                    <div>
                        <i className="uil uil-arrow-right"></i>
                        <span>Notification</span>
                    </div>
                </li>
                <li>
                    <div>
                        <i className="uil uil-arrow-right"></i>
                        <span>Switch Account</span>
                    </div>
                </li>
                <li>
                    <div>
                        <i className="uil uil-arrow-right"></i>
                        <span>Help</span>
                    </div>
                </li>
            </ul>
          </div>
          
          <div className="">
            {/* Notifications would go here */}
          </div>
        </div>
        
        {/* MENU */}
        <div className="relative min-h-0 grow">
          <div className="size-full">
            <div id="sidebar-menu">
              {menuItems.map((item, index) => (
                <Link 
                  key={index} 
                  className={`sidebar-menu-item ${isActive(item) ? 'active' : ''}`} 
                  href={item.path}
                >
                  <i className={`uil ${item.icon}`}></i>
                  {item.label}
                </Link>
              ))}

              {/* <hr className="!my-2" /> */}
              
              {/* <p className="sidebar-menu-title">Nexus</p>
              <div className="group collapse">
                <input aria-label="Sidemenu item trigger" className="peer" type="checkbox" name="sidebar-menu-parent-item" />
                <div className="collapse-title">
                    <i className="uil uil-arrow-right"></i>
                    <span className="grow">Other</span>
                    <i className="uil uil-angle-down opacity-50"></i>
                </div>
                <div className="collapse-content">
                   Submenu items here
                </div>
              </div> */}
            </div>
          </div>
          <div className="from-base-100/60 absolute start-0 end-0 bottom-0 h-7 bg-linear-to-t to-transparent"></div>
        </div>
        
        <Link className="flex min-h-16 items-center justify-center" href="/">
          <img alt="logo-dark" className="hidden h-5 dark:inline" src="/images/logo/logo-dark.png" />
          <img alt="logo-light" className="h-5 dark:hidden" src="/images/logo/logo-light.png" />
        </Link>
      </div>

      <label htmlFor="layout-sidebar-toggle-trigger" id="layout-sidebar-backdrop"></label>
    </>
  );
} 