import { ReactNode } from 'react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface ActionButton {
  label: string;
  icon?: string;
  onClick?: () => void;
  href?: string;
  variant?: 'default' | 'primary' | 'success';
  dropdown?: {
    items: {
      label: string;
      onClick?: () => void;
      href?: string;
    }[];
  };
}

interface TopbarProps {
  title: string;
  breadcrumbs?: BreadcrumbItem[];
  actions?: ActionButton[];
}

export default function Topbar({ title, breadcrumbs = [], actions = [] }: TopbarProps) {
  
  return (
    <header className="sticky top-0 bg-base-100 z-10">
      <div className="flex items-center justify-between gap-4 p-4 border-b border-base-300">
        <div className="flex justify-center items-center gap-4">
          {/* Menu Toggle Button */}
          <label className="btn btn-square lg:hidden" aria-label="Leftmenu toggle" htmlFor="layout-sidebar-toggle-trigger">
            <i className="uil uil-bars"></i>
          </label>
          
          <div className="flex flex-col gap-1">
            {/* Breadcrumbs */}
            <div aria-label="Breadcrumbs" className="breadcrumbs text-sm p-0 text-base-content/60">
              <ul>
                {breadcrumbs.map((crumb, index) => (
                  <li key={index}>
                    {crumb.href ? (
                      <a href={crumb.href}>{crumb.label}</a>
                    ) : (
                      crumb.label
                    )}
                  </li>
                ))}
              </ul>
            </div>
            {/* Page Title */}
            <h3 className="text-2xl font-medium">{title}</h3>
          </div>
        </div>
        
        <div aria-label="Actions" className="flex flex-row-reverse gap-2 items-center">
          {actions.map((action, index) => (
            action.dropdown ? (
              <div key={index} className="dropdown dropdown-end">
                <div tabIndex={0} role="button"
                  className={`
                    btn 
                    ${action.variant === 'primary' && 'btn-primary'} 
                    ${action.variant === 'success' && 'btn-success'}
                  `}>
                  {action.icon && <i className={`uil ${action.icon}`}></i>}
                  {action.label}
                  <i className="uil uil-angle-down"></i>
                </div>
                <ul tabIndex={0} className="dropdown-content menu">
                  {action.dropdown.items.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      {item.href ? (
                        <a href={item.href}>{item.label}</a>
                      ) : (
                        <a onClick={item.onClick}>{item.label}</a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              action.href ? (
                <a 
                  key={index} 
                  className={`
                    btn 
                    ${action.variant === 'primary' && 'btn-primary'} 
                    ${action.variant === 'success' && 'btn-success'}
                  `}
                  href={action.href}
                >
                  {action.icon && <i className={`uil ${action.icon}`}></i>}
                  {action.label}
                </a>
              ) : (
                <button 
                  key={index} 
                  className={`
                    btn 
                    ${action.variant === 'primary' && 'btn-primary'} 
                    ${action.variant === 'success' && 'btn-success'}
                  `}
                  onClick={action?.onClick}
                >
                  {action.icon && <i className={`uil ${action.icon}`}></i>}
                  {action.label}
                </button>
              )
            )
          ))}
        </div>
      </div>
    </header>
  );
} 