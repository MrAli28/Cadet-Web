type QuickLink = {
  label: string;
  href: string;
};

type PageQuickLinksProps = {
  links: QuickLink[];
};

const PageQuickLinks = ({ links }: PageQuickLinksProps) => {
  return (
    <div className="page-surface p-5 md:p-6">
      <h2 className="text-lg font-bold text-bcs-dark-text mb-4">Quick Links</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="block text-sm font-semibold text-bcs-dark-text bg-bcs-light-gray hover:bg-bcs-green hover:text-white px-4 py-3 rounded-sm transition-colors"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PageQuickLinks;
