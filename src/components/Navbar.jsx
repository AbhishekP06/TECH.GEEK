import { Link, NavLink } from "react-router-dom";

function Navbar() {
    return (
        <>
            <div className="font-alata p-[25px] overflow-hidden text-white bg-black h-[90px] no-underline text-4xl font-bold">
                <NavLink to={`/`}>
                    <h1>
                        <span>#TECH.GEEKS</span>
                    </h1>
                </NavLink>
            </div>

        </>
    )
}

export default Navbar; 