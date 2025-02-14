"use server"

import { cookies } from "next/headers";

export default async function cookieStore() {
      const cookieStore = await cookies();

      const role = cookieStore.get("role")?.value;
      const token = cookieStore.get("token")?.value;
      const userId = cookieStore.get("userId")?.value;

      return {userId, role, token}
}