"use client"

import { authClient } from "@/lib/auth-client"
import AuthForm from "@/components/AuthForm/AuthForm"

export default function LoginPage(){

  // async function handleLogin(){
  //   const {data, error} = await authClient.signIn.email({
  //    
  //   })
  // } 


  return (
    <div>
      <AuthForm type="login"></AuthForm>
    </div>
  )
}