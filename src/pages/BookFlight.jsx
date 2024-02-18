import { useState } from "react";


export function BookFlight(){
    const [click,setClick]=useState(false);
    return (
        <div className="text-black w-1/2 pt-10 text-center rounded-md">
            <div className="bg-white p-5">
                <h1 className="font-bold">Book Flight</h1>  
                {click ? 
                <div>
                    <h1>Transfer Sucessful</h1>
                    <h2>Check your mail for E-Ticket</h2>
                </div> : 
                <div className="text-left w-96 pt-10 inline-block">
                    <div className="mb-5">
                        <p>Seat Auto Selected</p>
                        <label className="block mb-2 text-m font-medium text-gray-900 dark:text-black">Amount in INR</label>
                        <p className="text-2xl font-bold">{localStorage.getItem("FlightPrice")}</p>
                    </div>
                    <div className="text-center pb-2">
                        <button type="button" onClick={(e)=>{
                                alert("Initiating Transfer")
                                setClick(true);
                            }} 
                            className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-10 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Initiate Transfer</button>
                    </div>
                </div> }
            </div>
        </div>
    );
}