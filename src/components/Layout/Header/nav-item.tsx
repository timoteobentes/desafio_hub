import { cn } from '@/lib/utils';
import  Link from 'next/link';
import { usePathname } from 'next/navigation';
import { CubeIcon } from '@heroicons/react/20/solid';

type NavItemProps = {
    href: string
    label: string
}

export const NavItem = ({ label, href }: NavItemProps) => {
    const pathname = usePathname();

    const isActive = pathname === href;

    return (
        <Link
            href={ href }
            className={cn(
                'text-gray-400 flex items-center gap-2 font-medium font-mono',
                isActive && 'text-gray-50',
            )}
        >
            <span className='text-orange-400'><CubeIcon className='w-5 h-5' /></span>
            { label }
        </Link>
    );
}