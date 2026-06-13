export default function Nav() {
    return (
        <div className="w-full bg-black h-20">
            <div className="flex items-center justify-between px-4 h-full">

                <img src="/logo.png" alt="Logo" className="h-28 w-36" />

                <nav>
                    <ul className="flex gap-6 items-center">

                        {[
                            "Business&Products",
                            "About Sony Group",
                            "Technology",
                            "Sustainability",
                            "Design",
                            "Employees/Careers",
                            "Investor Relations"
                        ].map((item) => (
                            <li
                                key={item}
                                className="relative text-white cursor-pointer group"
                            >
                                <span className="hover:text-blue-500 transition-colors duration-200">
                                    {item}
                                </span>

                                {/* underline */}
                                <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-blue-500 
                                    scale-x-0 origin-left 
                                    transition-transform duration-300 ease-out 
                                    group-hover:scale-x-100" />
                            </li>
                        ))}

                    </ul>
                </nav>

                <div className="flex items-center gap-4">
                    <p className="text-white hover:text-blue-500 cursor-pointer">
                        Contact Us
                    </p>
                    <img src="/search.png" alt="Search" className="h-6 w-6" />
                </div>

            </div>
        </div>
    );
}