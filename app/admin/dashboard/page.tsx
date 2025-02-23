"use client";

import "../../../styles/globals.css";

import React, { useState } from "react";

import AdminInput from "../AdminInput";
import AdminTextArea from "../AdminTextArea";
import SecondaryRoundButton from "../../../components/button/secondaryRoundButton";
import { auth } from "../../../firebase";
import { doesWindowExist } from "../../utils";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { validateDate } from "../utils";

const AdminDashboard = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const defaultState = {
    name: "",
    date: "",
    startTime: "",
    endTime: "",
    location: "",
    imageId: "",
    details: "",
    signUpLink: "",
  };

  const user = auth.currentUser;
  const [uploading, setUploading] = useState(false);

  if (!user) {
    if (doesWindowExist) router.push("/admin");

    return null;
  }

  const submitEvent = handleSubmit(async (data) => {
    if (uploading) return;
    setUploading(true);

    if (!user) {
      alert("User is not authenticated. Please sign in!");
      setUploading(false);
      if (doesWindowExist) router.push("/admin");

      return;
    }

    try {
      const idToken = await user.getIdToken();

      const res = await fetch("/api/admin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${idToken}`,
        },

        body: JSON.stringify(data),
      });

      setUploading(false);

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || `HTTP error! Status: ${res.status}`);
      }

      const responseData = await res.json();
      reset(defaultState);

      alert(`Uploaded document ID: ${responseData.id}`);
    } catch (err) {
      setUploading(false);
      alert(`Error: ${err}`);
    }
  });

  return (
    <div className="h-screen overflow-y-auto px-[20%] pt-[20px] animate-slide-in-fade-in bg-dark font-roboto text-white">
      <form onSubmit={submitEvent}>
        <AdminInput
          label="name"
          error={errors.name ? "Required" : ""}
          {...register("name", { required: true })}
        />

        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <AdminInput
              label="date"
              error={errors.date ? "Incorrect format (September 23, 2002)" : ""}
              {...register("date", {
                required: true,
                validate: validateDate,
              })}
            />
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <AdminInput
              label="Start Time (Optional)"
              error={errors.startTime ? "Incorrect format (6PM or 6:30PM)" : ""}
              {...register("startTime", {
                pattern: /^(0?[1-9]|1[0-2])(?::[0-5]\d)?(AM|PM)$/,
              })}
            />
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <AdminInput
              label="End Time"
              error={errors.endTime ? "Incorrect format (6PM or 6:30PM)" : ""}
              {...register("endTime", {
                required: true,
                pattern: /^(0?[1-9]|1[0-2])(?::[0-5]\d)?(AM|PM)$/,
              })}
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <AdminInput label="Location (Optional)" {...register("location")} />
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <AdminInput
              label="Image ID"
              error={errors.imageId ? "Required" : ""}
              {...register("imageId", { required: true })}
            />
          </div>
        </div>
        <AdminTextArea
          label="Details"
          error={errors.details ? "Required" : ""}
          {...register("details", { required: true })}
        />
        <AdminInput
          label="Sign Up Link (Optional)"
          {...register("signUpLink")}
        />

        <SecondaryRoundButton text="SUBMIT" />
      </form>
    </div>
  );
};

export default AdminDashboard;
