"use client";

import Link from "next/link";
import React from "react";
import styles from "../form.module.css";
import { BsPerson } from "react-icons/bs";
import { HiOutlineLockClosed } from "react-icons/hi2";
import { HiOutlineMail } from "react-icons/hi";
import Lottie from "lottie-react";
import signupimg from "@/public/signupimg.json";
import { useRouter } from "next/navigation";
import axios from "axios";

const signup = () => {
  const router = useRouter();

  const [user, setUser] = React.useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // const [buttonDisabled, setButtonDisabled] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const onSingup = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/signup", user);
      console.log("Signup successful", response.data);
      router.push("/login");
    } catch (error: any) {
      console.log("Signup failed", error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className=" flex flex-col lg:flex-row justify-evenly items-center h-screen w-screen text-white sm:bg-cyan-950 md:bg-cyan-950 bg-imgbck ">
      <div className={styles.mainContainer}>
        <div className=" flex justify-center items-center  w-1/3 ">
          {/* <img className=" object-contain h-full w-96 "  src="img2.png" alt="loginimage" /> */}
          <Lottie
            animationData={signupimg}
            className="flex justify-center items-center "
            loop={true}
          />
        </div>
        {/* <MyForm /> */}
        <form className={styles.inputGroup}>
          <h1 className=" text-4xl font-bold">
            {loading ? "Processing" : "Create Account"}
          </h1>
          <p className=" text-lg m-2 pl-5">
            Please enter username email & password to signup
          </p>
          <input
            className={styles.inputText}
            type="text"
            placeholder="Username"
            id="username"
            required
            value={user.username}
            onChange={(e) => setUser({ ...user, username: e.target.value })}
          />
          <div className=" absolute right-5 top-[148px]">
            <BsPerson />
          </div>
          <input
            className={styles.inputText}
            type="email"
            placeholder="Email"
            id="email"
            required
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
          <div className=" absolute right-5 top-[223px]">
            <HiOutlineMail />
          </div>
          <input
            className={styles.inputText}
            type="password"
            placeholder="Password"
            id="password"
            required
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
          <div className=" absolute right-5 top-[300px]">
            <HiOutlineLockClosed />
          </div>
          <input
            className={styles.inputText}
            type="password"
            placeholder="Confirm Password"
            id="confirmPassword"
            required
            value={user.confirmPassword}
            onChange={(e) =>
              setUser({ ...user, confirmPassword: e.target.value })
            }
          />
          <div className=" absolute right-5 top-[375px]">
            <HiOutlineLockClosed />
          </div>
          <button onClick={onSingup} className={styles.button}>
            SIGNUP
          </button>
          <p className=" flex justify-center">
            Don't have and account? &nbsp;
            <Link className=" text-blue-400" href="/login">
              Login
            </Link>
          </p>
        </form>
      </div>
    </main>
  );
};

export default signup;
