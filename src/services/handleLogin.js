"use server"

import { cookies } from "next/headers";

export default async function handleLogin(username, password) {
    const cookieStore = await cookies();
    try {
        const response = await fetch("http://localhost:4000/auth/token", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ username, password })
        })

        const data = await response.json();

        if (cookieStore.get("role")?.value !== "" && cookieStore.get("token")?.value !== "" && cookieStore.get("userId")?.value !== "") {
            cookieStore.delete("token");
            cookieStore.delete("userId");
            cookieStore.delete("role");
        }
        
        cookieStore.set("token", data.token);
        cookieStore.set("userId", data.userId);
        cookieStore.set("role", data.role);

        return data
    } catch (error) {
        console.error("error with logging in", error);
    }
}