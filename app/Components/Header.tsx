import Link from "next/link";
import Image from "next/image";

export default function Header() {
    return(
            <header className="fixed left-1/2 top-0 z-50 h-16 w-full max-w-400 -translate-x-1/2 bg-black/40 text-white backdrop-blur-sm">
                <div className="relative flex h-full items-center px-6">                <Link href="/" className="flex items-center gap-3 font-semibold">
                    <Image
                        src="/next.svg"
                        alt=""
                        width={89}
                        height={18}
                        priority
                    />
                    </Link>

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
                    <p>shopping cart</p>
                    {/* Future login/cart */}
                </div>
            </div>        
    </header>
    );
}