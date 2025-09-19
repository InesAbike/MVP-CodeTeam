'use client'
import { usePathname } from 'next/navigation';
import NavBar from '@/components/layouts/NavBar';

export default function ConditionalNavbar() {
  const pathname = usePathname();
  
  const hideNavbarRoutes = ['/'];
  const shouldHideNavbar = hideNavbarRoutes.includes(pathname);

  if (shouldHideNavbar) {
    return null;
  }

  return <NavBar />;
}
