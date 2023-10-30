'use client'
import React from "react";
import styles from "../form.module.css";
import { BsPerson } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import { HiOutlineLockClosed } from "react-icons/hi2";
import { HiOutlineMail } from "react-icons/hi";
import { useRef,useState } from "react"
import { blob } from "stream/consumers";


const userProfile = () => {

  const inputRef = useRef(null)
  const [image,setImage] = useState("")

  const handelImageClick = () => {
    inputRef.current.click();
  }
  const handelImageChange = (event) => {
    const file = event.target.files[0]
    console.log(file)
    setImage(event.target.files[0])
  }

  return (
    <main className="  flex flex-col justify-center items-center w-screen h-screen">
      {/* <div className="bg-darkgrey h-full p-10 w-auto lg:w-1/5 flex flex-col items-center justify-between">
        <img src="" alt="logo" />
        <a className=" mt-10" href="/profile">
          Profile
        </a>
        <a href="/login">Logout</a>
      </div> */}
      <div className=" flex self-end w-auto drawer m-2">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex justify-end ">
          {/* Page content here */}
          <label
            htmlFor="my-drawer"
            className="btn btn-neutral drawer-button border-none text-white bg-transparent"
          >
            <FaBars />
          </label>
        </div>
        <div className="drawer-side z-10">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content ">
            {/* Sidebar content here */}
            <li>
              <a className=" text-base text-center" href="/profile">
                Profile
              </a>
            </li>
            <li>
              <a className=" text-base text-center" href="/login">
                Logout
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className=" flex flex-col justify-center items-center w-full h-full ">
        <div className=" lg:w-2/4 w-full h-full lg:rounded-3xl rounded-t-3xl flex flex-col justify-center items-center lg:m-5 bg-white rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10  ">
          {/* <p className=" p-4 flex justify-start">Edit your profile</p> */}
          <div className=" w-full h-full flex flex-col items-center justify-evenly">
            <div onClick={handelImageClick} className="avatar flex flex-col items-center">
              <div className="w-32 rounded-full ring ring-success  ring-offset-base-100 ring-offset-2 m-5">
                {image ? <img src={URL.createObjectURL(image)} alt="" /> : <img src="dp.avif" alt=""  />}
              </div>
              <input
                type="file"
                ref={inputRef}
                onChange={handelImageChange} 
                className=" hidden"
              />
            </div>
            <div className=" flex flex-col w-full h-full justify-around items-center">
              <div className={styles.profileInput}>
                <h1>Username</h1>
                <input
                  className={styles.profileText}
                  type="text"
                  name=""
                  id=""
                  placeholder="Username"
                />
              </div>
              <div className={styles.profileInput}>
                <h1>Email</h1>
                <input
                  className={styles.profileText}
                  type="text"
                  name=""
                  id=""
                  placeholder="Email"
                />
              </div>
              <div className={styles.profileInput}>
                <h1>Current Password</h1>
                <input
                  className={styles.profileText}
                  type="text"
                  name=""
                  id=""
                  placeholder="Current Password"
                />
              </div>
              <div className={styles.profileInput}>
                <h1>New Password</h1>
                <input
                  className={styles.profileText}
                  type="text"
                  name=""
                  id=""
                  placeholder="New Password"
                />
              </div>
              <div className={styles.profileInput}>
                <h1>Confirm Password</h1>
                <input
                  className={styles.profileText}
                  type="text"
                  name=""
                  id=""
                  placeholder="Confirm Password"
                />
              </div>
              <div className=" flex flex-row lg:justify-around items-center lg:w-2/6 ">
                <button className="btn btn-outline btn-success rounded-full m-2">
                  cancel
                </button>
                <button className="btn btn-active btn-success rounded-full m-2">
                  save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default userProfile;
