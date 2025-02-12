"use client"

import handleLogin from "@/services/handleLogin";
import { redirect } from "next/navigation";
import { useState } from "react";


export default function login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


    async function handleSubmit(e) {
        e.preventDefault();
        try {
            await handleLogin(username, password);
            console.log("login virker");
            
            window.location.href = "/activities"; //Redirect isn't working so this is a quick fix i found.
        } catch (error) {
            console.error("error with logging in", error);
        }
    }
    return (
        <div className="bg-[url('/background.png')] min-h-screen w-full bg-cover bg-center flex flex-col justify-center items-center">
            <div className="relative w-[225%] p-72 bg-[#5E2E53] opacity-50 rounded-xl shadow-lg transform rotate-[-25deg] mb-16"></div>
            <form onSubmit={handleSubmit} className="flex flex-col gap-2 absolute w-full px-8">
                <h1 className="text-white">Log Ind</h1>
                <input type="text" name="username" placeholder="brugernavn" className="p-2" onChange={(e) => setUsername(e.target.value)} />
                <input type="password" name="password" placeholder="adgangskode" className="p-2" onChange={(e) => setPassword(e.target.value)} />
                <button className="rounded-md bg-[#5E2E53] py-3 shadow-sm shadow-[#2e1a29] text-white mx-10 mt-5" type="submit">Log ind</button>
            </form>
        </div>
    );
}