import { NavLink } from "react-router-dom";
import data from "../data.json"

function PioneerCard() {
    return (
        <>
            <div className="flex flex-wrap gap-8 pl-7">
                {data.map((d) => (
                    <div
                        key={d.id}
                        className="p-4 transition duration-500 min-w-[350px] bg-black border border-gray-300 rounded-xl 
                 w-full sm:w-[90%] md:w-[45%] lg:w-[30%]"
                    >
                        <img
                            src={d.img}
                            alt="Pioneer-img"
                            className="w-full aspect-[16/9] object-cover rounded-2xl mb-4"
                        />
                        <div className="text-white leading-6 mb-2 overflow-hidden text-ellipsis line-clamp-11">
                            <h1 className="text-xl font-bold">{d.name}</h1>
                            <h3 className="text-lg text-gray-400 py-1">{d.designation}</h3>
                            <p className="text-sm">{d.sdesc}</p>
                        </div>
                        <NavLink to={`/pioneer/${d.name}`} className="block mt-4">
                            <button className="bg-white text-gray-800 px-6 py-2 rounded-full shadow-md transition-all 
                           hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-black cursor-pointer">
                                Read more
                            </button>
                        </NavLink>
                    </div>
                ))}
            </div>

        </>
    )
}

export default PioneerCard;