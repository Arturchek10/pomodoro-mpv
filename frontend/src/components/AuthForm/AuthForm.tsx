"use client";
import styles from "./AuthForm.module.css";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useState } from "react";

type AuthFormProps = {
  type: "login" | "register";
};

export default function AuthForm({ type }: AuthFormProps) {
  const isRegister = type === "register";

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // SIGN UP
  async function handleRegister() {
    const { data, error } = await authClient.signUp.email({
      email: login,
      password: password,
      name: login, // потом отрубить name или добавить поле
      callbackURL: "/",
    });

    if (error) {
      console.error("sign up ", error);
      return;
    }

    console.log(data);
  }

  // SIGN IN
  async function handleAuth() {
    const { data, error } = await authClient.signIn.email({
      email: login,
      password: password,
      callbackURL: "/",
    });

    if (error) {
      console.error("sign in error: ", error);
      return;
    }

    console.log(data);
  }

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
          <input
            type="email"
            placeholder="Enter your email"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {isRegister && (
            <input
              type="password"
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          )}
          <button
            className={styles["reg-btn"]}
            onClick={isRegister ? handleRegister : handleAuth}
          >
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
