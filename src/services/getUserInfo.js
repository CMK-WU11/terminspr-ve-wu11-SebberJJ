"use server"

import { cookies } from "next/headers";

export default async function getUserInfo() {
  const cookieStore = await cookies();
  const userId = cookieStore.get("userId")?.value;
  const token = cookieStore.get("token")?.value;

  try {
    const response = await fetch(`http://localhost:4000/api/v1/users/${userId}`, {
      method: "GET",
      headers: {
        Authorization:
          "Bearer " + token,
      },
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching user info, with ID:" + userId, error);
  }
}
