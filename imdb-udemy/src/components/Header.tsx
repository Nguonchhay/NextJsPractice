import Link from "next/link";
import MenuItem from "./MenuItem";
import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";

const Header = () : JSX.Element => {
    return (
      <div className="flex justify-between mx-2 max-w-6xl sm:mx-auto items-center py-6">
            <div className="flex">
                <MenuItem title="Home" link="/" Icon={AiFillHome} />
                <MenuItem title="About" link="/about" Icon={BsFillInfoCircleFill} />
            </div>

            <div className="">
                <Link href="">
                    <h2 className="text-2xl">
                        <span className="font-bold bg-amber-500 px-2 rounded-lg mr-1">IMDb</span>
                        <span className="text-xl hidden sm:inline">Clone</span>
                    </h2>
                </Link>
            </div>
      </div>
    )
}

export default Header; 
