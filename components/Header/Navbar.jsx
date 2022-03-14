import Image from "next/image";
import Link from "next/link";

const Navbar = () => {



    return (
        <div className="h-[80px] px-[50px] w-full bg-rose-600 flex justify-between items-center sticky top-0 z-50">
            <div className=" text-white">

                <div className=" cursor-pointer">
                    <Link href="/" passHref>
                        <Image src="/img/pizzeria-Logo.png" width="172" height="41" alt="" />
                    </Link>

                </div>
            </div>
            <div className="hidden lg:block">
                <ul className="flex text-white">
                    <li className="px-5">
                        <Link href="/">
                            <a>Home</a>
                        </Link>
                    </li>

                </ul>
            </div>
            <div className="cursor-pointer">
                <Link href="/cart" passHref>
                    <div>

                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;