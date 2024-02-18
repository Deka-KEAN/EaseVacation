import { useEffect, useState } from "react";
import { Card } from "./Card";
import flightDetails from "./flightDetails";

export function Dashboard(){
    const [name,setName]=useState("");
    const [filter,setFilter]=useState("");
    useEffect(()=>{
        if (window.sessionStorage.getItem('User Name')) 
            setName(window.sessionStorage.getItem('User Name'));
    },[]);
    return (
        <div className="w-screen mt-5 p-5">
            <h2 className="mb-5 font-bold text-3xl mb-10">Welcome {name ? name:" to EaseMyVacation"}!</h2>
            <div className="flex items-center mb-10">
                <p className="font-bold text-2xl ">Filter --</p><input type="date" onChange={(e)=>{setFilter(e.target.value)}} placeholder="Select Date" className="w-3/2 px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"></input>
                {filter ? 
                        <button onClick={()=>{
                                setFilter("");
                                window.location.reload(false);
                            }}
                    className="bg-blue-500 m-2 right-0 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Clear Filter
                </button> : <></>}
            </div>
            {flightDetails.map((data)=>{
                if(data.departureTime.includes(filter) || data.arrivalTime.includes(filter))
                    return <Card data={data}/>
            })}
            
        </div>
    );
}