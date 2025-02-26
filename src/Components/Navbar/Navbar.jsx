import { Link } from "react-router"

const Navbar = () => {
    return (
        <div className="bg-[#FFFFFF] shadow-xl">
            <div className="navbar max-w-screen-2xl mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li><Link to={"/"}>Home</Link></li>
                            <li><Link to={"/services"}>Servises</Link></li>
                            <li><Link to={"/blog"}>Blog</Link></li>
                            <li>
                                <details>
                                    <summary>Cetagory</summary>
                                    <ul className="p-2">
                                        <li><Link to={"/"}>Web Design</Link></li>
                                        <li><Link to={"/"}>Web Development</Link></li>
                                        <li><Link to={"/"}>App Development</Link></li>
                                        <li><Link to={"/"}>Wordpress Development</Link></li>
                                        <li><Link to={"/"}>UIXI Design</Link></li>
                                    </ul>
                                </details>
                            </li>
                        </ul>
                    </div>
                    <div className="flex items-center gap-3">
                        <img className="w-[28px] h-[29px]" src="/public/logo.png" alt="" />
                        <Link to={"/"} className="font-bold text-2xl text-[#697077] hidden sm:block" >WebCode</Link>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-4 font-roboto font-bold">
                        <li><Link to={"/"} >Home</Link></li>
                        <li><Link to={"/services"} >Servises</Link></li>
                        <li><Link to={"/blog"}>Blog</Link></li>
                        <li className="z-50">
                            <details>
                                <summary>Cetagory</summary>
                                <ul className="p-2">
                                    <li><Link to={"/"}>Web Design</Link></li>
                                    <li><Link to={"/"}>Web Development</Link></li>
                                    <li><Link to={"/"}>App Development</Link></li>
                                    <li><Link to={"/"}>Wordpress Development</Link></li>
                                    <li><Link to={"/"}>UIXI Design</Link></li>
                                </ul>
                            </details>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end gap-4">
                    <Link to={"singIn"} className="btn btn-outline btn-primary px-5 text-[#0F62FE] hidden sm:flex text-[18px] font-bold">Log In</Link>
                    <Link className="btn btn-primary bg-praimary px-5 text-[18px] font-bold">Start Free Trail</Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar