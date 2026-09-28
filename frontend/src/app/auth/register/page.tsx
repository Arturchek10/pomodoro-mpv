"use client";
import styles from "./Register.module.css"
import { authClient } from "@/lib/auth-client";
import AuthForm from "@/components/AuthForm/AuthForm";

export default function RegisterPage() {
  async function handleRegister() {
    const { data, error } = await authClient.signUp.email({
      email: "test@test.com",
      password: "password",
      name: "Artur",
    });

    if (error) {
      console.error(error);
      return;
    }

    console.log(data);
  }

  return (
    // <div className={styles["main-reg-div"]}>
    //   <div className={styles["register-container"]}>
    //     <div className={styles["left-side"]}>
    //       <img src="\images\reg-form-img.jpg" alt="image" />
    //     </div>
    //     <div className={styles["right-side"]}>
    //       <p className={styles["title"]}>Create an account</p>
    //       <input type="email" placeholder="Enter your email" />
    //       <input type="password" placeholder="Password" />
    //       <input type="password" placeholder="Confirm password" />
    //       <button className={styles["reg-btn"]} onClick={handleRegister}>Create an account</button>
    //       <p>or</p>
    //       {/* иконки соцсетей гугл, facebook и тд */}
    //       <div className={styles["sosial-apps-items"]}>
    //         {/* google */}
    //         {/* github */}
    //         {/* telegram */}
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <>
      <AuthForm type="register"></AuthForm>
    </>
  );
}
