"use client";
import styles from "./AuthForm.module.css";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";

type AuthFormProps = {
  type: "login" | "register";
};

export default function AuthForm({ type }: AuthFormProps) {
  const isRegister = type === "register";

  // async function handleRegister() {
  //   const { data, error } = await authClient.signUp.email({
  //     email: "test@test.com",
  //     password: "password",
  //     name: "Artur",
  //   });

  //   if (error) {
  //     console.error(error);
  //     return;
  //   }

  //   console.log(data);
  // }

  return (
    <div className={styles["main-reg-div"]}>
      <div className={styles["register-container"]}>
        <div className={styles["left-side"]}>
          <Link href="/" className={styles["back-home-container"]}>
            <img
              className={styles["arrow-left-svg"]}
              src="/svg/arrow-left.svg"
              alt=""
            />
            <span>Back to Home</span>
          </Link>
          <img src="\images\reg-form-img.jpg" alt="image" />
        </div>
        <div className={styles["right-side"]}>
          {/* login | reg switcher */}
          <div className={styles["auth-switcher-div"]}>
            <Link
              href={"./register"}
              className={`${styles["btn-switch"]} ${isRegister ? styles.active : ""}`}
            >
              Sign Up
            </Link>
            <Link
              href={"./login"}
              className={`${styles["btn-switch"]} ${!isRegister ? styles.active : ""}`}
            >
              Log In
            </Link>
          </div>
          {/*  */}
          <p className={styles["title"]}>
            {isRegister ? "Create an account" : "Log in to your account"}
          </p>
          <input type="email" placeholder="Enter your email" />
          <input type="password" placeholder="Password" />
          {isRegister && (
            <input type="password" placeholder="Confirm password" />
          )}
          <button className={styles["reg-btn"]}>
            {isRegister ? "Create an account" : "Log in"}
          </button>
          <p>or</p>
          {/* иконки соцсетей гугл, facebook и тд */}
          <div className={styles["sosial-apps-items"]}>
            {/* google */}
            {/* github */}
            {/* telegram */}
          </div>
        </div>
      </div>
    </div>
  );
}
