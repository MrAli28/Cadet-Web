import { useState } from "react";
import { Search, Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import { navPrimaryLinks, navDropdownGroups, navMegaMenus } from "@/data/siteContent";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <>
      <nav className="bg-background shadow-md sticky top-0 z-50">
        <div className="bcs-container flex items-center justify-between py-3">
          <a href="/" className="flex items-center gap-0">
            <img src="/images/logo1.png" alt="BCS Cadet School" className="h-20 w-36 sm:w-40 md:w-44 object-contain" />
            <div className="hidden sm:block -ml-5">
              <div className="text-sm font-bold text-bcs-green font-lufga leading-tight">BCS</div>
              <div className="text-sm font-bold text-bcs-green font-lufga leading-tight">CADET SCHOOL</div>
              <div className="text-[10px] text-bcs-gray italic">Loyalty - Discipline - Leadership</div>
            </div>
          </a>

          <div className="hidden lg:flex items-center gap-5">
            {navPrimaryLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-xs font-semibold text-foreground tracking-wide hover:text-bcs-green transition-colors uppercase"
              >
                {item.label}
              </a>
            ))}

            {navMegaMenus.map((menu) => (
              <div 
                key={menu.label} 
                className="relative group"
                onMouseEnter={() => setActiveDropdown(menu.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="inline-flex items-center gap-1 text-xs font-semibold text-foreground tracking-wide hover:text-bcs-green transition-colors uppercase">
                  {menu.label}
                  <ChevronDown className="w-3.5 h-3.5" />
                </button>
                
                {activeDropdown === menu.label && (
                  <div className="absolute left-0 top-full pt-2 opacity-100 pointer-events-auto">
                    <div className="bg-white border shadow-xl rounded-sm min-w-[220px] py-2">
                      {menu.links.map((link) => (
                        <div 
                          key={link.label} 
                          className="relative group/submenu"
                        >
                          <a
                            href={link.href}
                            className="block px-4 py-2 text-xs font-semibold uppercase tracking-wide text-foreground hover:text-bcs-green hover:bg-gray-50 flex items-center justify-between"
                          >
                            {link.label}
                            {link.children && <ChevronRight className="w-3 h-3" />}
                          </a>
                          
                          {link.children && (
                            <div className="absolute left-full top-0 ml-1 opacity-0 pointer-events-none group-hover/submenu:opacity-100 group-hover/submenu:pointer-events-auto transition-opacity">
                              <div className="bg-white border shadow-xl rounded-sm min-w-[200px] py-2">
                                {link.children.map((child) => (
                                  <a
                                    key={child.label}
                                    href={child.href}
                                    className="block px-4 py-2 text-xs font-semibold uppercase tracking-wide text-foreground hover:text-bcs-green hover:bg-gray-50"
                                  >
                                    {child.label}
                                  </a>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}

            <button title="Search" className="text-foreground hover:text-bcs-green transition-colors">
              <Search className="w-4 h-4" />
            </button>
            <button title="Menu" className="text-foreground hover:text-bcs-green transition-colors">
              <Menu className="w-5 h-5" />
            </button>
          </div>

          <button className="lg:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileOpen && (
          <div className="lg:hidden bg-background border-t border-border px-4 pb-4 space-y-2">
            {navPrimaryLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block py-2.5 text-sm font-semibold text-foreground hover:text-bcs-green transition-colors uppercase"
              >
                {item.label}
              </a>
            ))}

            {navMegaMenus.map((menu) => (
              <div key={menu.label}>
                <button
                  className="w-full py-2.5 text-sm font-semibold text-foreground hover:text-bcs-green transition-colors uppercase flex items-center justify-between"
                  onClick={() => setActiveDropdown(activeDropdown === menu.label ? null : menu.label)}
                >
                  {menu.label}
                  <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === menu.label ? 'rotate-180' : ''}`} />
                </button>
                
                {activeDropdown === menu.label && (
                  <div className="pl-4 space-y-1">
                    {menu.links.map((link) => (
                      <div key={link.label}>
                        <a
                          href={link.href}
                          className="block py-2 text-sm font-semibold text-foreground hover:text-bcs-green transition-colors uppercase"
                        >
                          {link.label}
                        </a>
                        {link.children && (
                          <div className="pl-4 space-y-1">
                            {link.children.map((child) => (
                              <a
                                key={child.label}
                                href={child.href}
                                className="block py-2 text-sm font-semibold text-foreground hover:text-bcs-green transition-colors uppercase"
                              >
                                {child.label}
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {navDropdownGroups.map((group) => (
              <div key={group.title} className="pt-2 border-t border-border/70">
                <p className="text-[11px] uppercase tracking-wider font-bold text-bcs-gray py-2">{group.title}</p>
                {group.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="block py-2 text-sm font-semibold text-foreground hover:text-bcs-green transition-colors uppercase"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            ))}
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
