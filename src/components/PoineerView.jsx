import { useParams } from 'react-router-dom';
import profile from '../data.json';

function PioneerView() {
    const { name } = useParams();
    const pioneer = profile.find(d => d.name === name);

    return (
        <>
            <div
                key={pioneer.id}
                className="p-4 m-8 transition duration-500 bg-black border border-gray-300 rounded-xl 
               flex flex-col lg:flex-row gap-6 items-center lg:items-start"
            >
                {/* Profile Image */}
                <img
                    src={pioneer.aimg}
                    alt="Pioneer-img"
                    className="w-full lg:w-1/2 object-cover rounded-2xl p-4"
                />

                {/* Text Content */}
                <div className="text-white p-4 leading-6 w-full lg:w-1/2">
                    <h1 className="text-2xl font-bold">{pioneer.name}</h1>
                    <h3 className="text-lg text-gray-400 py-1">{pioneer.designation}</h3>
                    <p className="text-sm">{pioneer.sdesc}</p>
                    <h3 className="text-lg font-semibold mt-4">About me</h3>
                    <p className="text-sm">{pioneer.desc}</p>
                </div>
            </div>

        </>
    )
}

export default PioneerView;