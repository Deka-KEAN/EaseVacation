import { useNavigate } from "react-router-dom";


export function Card(data){
    console.log(data);
    const navigate=useNavigate();
    return (
        <div className="w-full bg-white shadow-md rounded-md overflow-hidden mx-auto mb-4 text-black flex">
            <div className="flex items-center p-4 mr-10">
                <img src={data.data.logoUrl} alt={`${data.data.airline} logo`} className="h-12 w-12 mr-4" />
                <div>
                <h3 className="text-lg font-semibold">{data.data.airline}</h3>
                <p className="text-gray-500">{data.data.flightNumber}</p>
                </div>
            </div>
            <div className="flex items-center p-4">
                <p>
                    <span className="font-semibold"></span> {data.data.departureAirport} to {data.data.arrivalAirport}
                </p>
            </div>
            <div className="items-center p-4">
                <p>
                <span className="font-semibold">Departure:</span> {data.data.departureAirport} at {data.data.departureTime}
                </p>
                <p>
                <span className="font-semibold">Arrival:</span> {data.data.arrivalAirport} at {data.data.arrivalTime}
                </p>
            </div>
            <div className="flex items-center p-4">
                <p>
                <span className="font-semibold">Price:</span> {data.data.price}
                </p>
            </div>
            <div className=" flex items-center">
                <button onClick={()=>{
                            window.sessionStorage.setItem("FlightPrice",data.data.price);
                            navigate("/book-flight");
                        }}
                    className="bg-blue-500 right-0 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Book Flight
                </button>
            </div>
    </div>
    );
}