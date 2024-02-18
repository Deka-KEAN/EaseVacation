

// import { Link } from "react-router-dom";
// import { Dashboard } from "./Dashboard";
// import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function Login(){
    const [userName,setUserName]=useState("");
    const [password,setPassword]=useState("");
    const navigate=useNavigate();
    return (
        <div className="h-fit p-4 w-[400px]">
            <h1 className="text-center p-2 font-bold">Sign In</h1>
            <p className="p-2 text-xl text-center opacity-40 font-medium">Enter your credentials to access your account</p>
            <form className="max-w-sm mx-auto">
                <div className="mb-3">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                    <input type="text" onChange={(e)=>{setUserName(e.target.value)}} placeholder="johndoe@example.com" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"></input>
                </div>
                <div className="mb-3">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                    <input type="password" onChange={(e)=>{setPassword(e.target.value)}} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"></input>
                </div>
                <div className="text-center p-2">
                    <button onClick={(e)=>{
                            navigate("/dashboard");
                            if(userName!=""){
                                localStorage.setItem("User Name",userName);
                                window.sessionStorage.setItem('User Name',userName);
                            }
                        }} type="submit"
                        className="text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Login
                    </button>
                </div>
            </form>
        </div>
    );
}
