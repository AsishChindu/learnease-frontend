import HeaderNav from "@/components/navigation/header-nav/header-nav";
import MobileFooterNav from "@/components/navigation/mobile-bottom-nav/mobile-footer-nav";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = async ({ children }) => {
  return (
    <>
      <header>
        <HeaderNav />
      </header>

      <main className="mt-14 bg-stone-100">
        {children}
      </main>

      <footer>
        <MobileFooterNav />
      </footer>
    </>
  );
};

export default Layout;