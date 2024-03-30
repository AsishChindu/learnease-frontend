import Link from "next/link"

interface FooterLinkProps {
  href: string;
  icon: React.ElementType;
  iconName: string;
}

export default function MobileFooterNavItem({ href, icon: Icon, iconName }: FooterLinkProps) {
  return (
      <Link className="flex justify-center items-center" href={href}>
        <div className="flex flex-col items-center transition ease-in duration-200 text-gray-500 hover:text-gray-900 cursor-pointer">
          <div className="mb-1 text-2xl">{<Icon />}</div>
          <p className="text-xs font-light text-center">{iconName}</p>
        </div>
      </Link>
  );
}