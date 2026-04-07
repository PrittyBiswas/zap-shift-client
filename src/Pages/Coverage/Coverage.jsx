import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useLoaderData } from 'react-router';
import { useRef } from 'react';

const Coverage = () => {

    const position = [23.8103, 90.4125]
    const servicesCenter = useLoaderData();
    const mapRef = useRef(null);

    const handleSearch = e => {
        e.preventDefault();
        const location = e.target.location.value;
        const district = servicesCenter.find(c =>
            c.district.toLowerCase().includes(location.toLowerCase())
        );

        if (district) {
            const coord = [district.latitude, district.longitude];
            console.log(district, coord);
            mapRef.current.flyTo(coord, 14); 
        }
    }

    return (
        <div className='p-10 my-10 rounded-2xl bg-white '>

            <div className="">
                <h1 className='font-bold text-5xl '>We are available in 64 districts </h1>

                <form onSubmit={handleSearch} className="join">
                    <label className="input validator rounded-4xl pr-0 join-item my-5">
                        <svg className="h-[2em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor">
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.3-4.3"></path>
                            </g>
                        </svg>

                        <input name='location' type="search" required placeholder="Search" />
                        <button className="btn bg-primary rounded-4xl join-item">Search</button>
                    </label>
                </form>

                <h3 className='font-bold text-2xl'>We deliver almost all over Bangladesh</h3>
            </div>

            <div className="h-[40rem] w-full  mt-3">
                <MapContainer
                    center={position}
                    zoom={7}
                    scrollWheelZoom={false}
                    className='h-[40rem]'
                    ref={mapRef}   
                >
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />

                    {servicesCenter.map((center, index) => (
                        <Marker
                            key={index}
                            position={[center.latitude, center.longitude]}
                        >
                            <Popup>
                                <strong>{center.district}</strong> <br />
                                Service Area : {center.covered_area.join(" ")}
                            </Popup>
                        </Marker>
                    ))}
                </MapContainer>
            </div>

        </div>
    );
};

export default Coverage;
