"use client"

import { authClient } from "@/lib/auth-client";


export default function ProfilePage(){

    const { data: session, isPending } = authClient.useSession();
  
    const user = session?.user;

  return(
    <div>
      <h1>Profile Page</h1>
      <h2>User info</h2>
      <p>{user?.name}</p>
      <p>{user?.email}</p>
      <p>{user?.image}</p>
      
    </div>
  )
}