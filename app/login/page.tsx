'use client'

import Link from "next/link";
import React from "react";
import styles from "../form.module.css";
import { BsPerson } from "react-icons/bs";
import { HiOutlineLockClosed } from "react-icons/hi2";
import Lottie from "lottie-react";
import loginimg from "@/public/loginimg.json";
import { useRouter } from "next/navigation";
import axios from "axios";

const login = () => {
 
  const router = useRouter();
  const [user, setUser] = React.useState( {
    email: "",
    password: "",
  } );
  const [loading, setLoading] = React.useState(false);

  const onLogin =async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/login", user);
      console.log("Login successful", response.data);
      router.push("/profile")

    } catch (error: any) {
      console.log("Login failed", error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className=" flex flex-col lg:flex-row justify-evenly items-center h-screen w-screen text-white  sm:bg-cyan-950 md:bg-cyan-950 bg-imgbck ">
      <div className={styles.mainContainer}>
        <div className=" flex justify-center items-center  w-1/3 ">
          {/* <img className=" object-contain h-full w-96" src="profileimg.gif"  alt="loginimage" /> */}
          <Lottie
            animationData={loginimg}
            className="flex justify-center items-center"
            loop={true}
          />
        </div>
        <form className={styles.inputGroup}>
          <h1 className=" text-4xl font-bold">{loading ? "processing" : "Welcome back"}</h1>
          <p className=" text-lg pl-5 m-2">
            Please enter your email number & password to login
          </p>

          <input
            className={styles.inputText}
            type="email"
            placeholder="Email "
            required
            value={user.email}
            onChange={(e) => setUser({...user, email: e.target.value})}
          />
          <div className=" absolute right-5 top-[148px]">
            <BsPerson />
          </div>

          <input
            className={styles.inputText}
            type="password"
            placeholder="Password"
            required
            value={user.password}
            onChange={(e) => setUser({...user, password: e.target.value})}
          />
          <div className=" absolute right-5 top-[223px]">
            <HiOutlineLockClosed />
          </div>

          {/* <HidePassBtn showPassword={showPassword} setShow={setShowPassword} /> */}
          <p className=" m-1">Forgot Password?</p>
          <button onClick={onLogin} className={styles.button}>LOGIN</button>
          <p className=" flex justify-center">
            Don't have and account? &nbsp;
            <Link className=" text-blue-400" href="/signup">
              Signup
            </Link>
          </p>
        </form>
      </div>
    </main>
  );
};

export default login;
