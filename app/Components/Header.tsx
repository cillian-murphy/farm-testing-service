import Link from "next/link";
import Image from "next/image";

export default function Header() {
    return(
        <header className="sticky top-0 z-50 bg-zinc-600 flex h-14 items-center justify-between border-b border-zinc-200 px-4 sm:px-6">
            <div>
                <Link href="/" className="flex items-center gap-3 font-semibold">
                <Image
                    src="/next.svg"
                    alt=""
                    width={89}
                    height={18}
                    priority
                />
                </Link>
            </div>

            <nav className="absolute left-1/2 -translate-x-1/2 flex items-center gap-4 text-sm font-medium text-zinc-100">
                <Link href="/" className="hover:text-zinc-950">
                    Home
                </Link>
                <Link href="/posts" className="hover:text-zinc-950">
                    About
                </Link>
                <Link href="/posts" className="hover:text-zinc-950">
                    FAQ
                </Link>
                <Link href="/posts" className="hover:text-zinc-950">
                    Services
                </Link>                
                <Link href="/posts" className="hover:text-zinc-950">
                    Testing
                </Link>
            </nav>

            <div className="ml-auto">
                shopping cart
                {/* Future login/cart */}
            </div>        
    </header>
    );
}