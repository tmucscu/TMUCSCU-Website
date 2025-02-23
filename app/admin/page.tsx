"use client";

import "../../styles/globals.css";

import AdminInput from "./AdminInput";
import React from "react";
import SecondaryRoundButton from "../../components/button/secondaryRoundButton";
import TextPage from "../../components/pages/textPage";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

const AdminLogin = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const submitLogin = handleSubmit(async (data) => {
    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);
      router.push("/admin/dashboard");
    } catch (err) {
      alert(`Incorrect email and/or password`);
      reset({ email: data.email, password: "" });
    }
  });

  return (
    <div className="h-screen overflow-y-auto px-[20%] pt-[20px] animate-slide-in-fade-in bg-dark font-roboto text-white">
      <TextPage.Header>TMU CSCU Admin</TextPage.Header>
      <form onSubmit={submitLogin}>
        <AdminInput
          label="email"
          error={errors.email ? "Required" : ""}
          {...register("email", { required: true })}
        />
        <AdminInput
          label="password"
          error={errors.password ? "Required" : ""}
          {...register("password", { required: true })}
          type="password"
        />

        <SecondaryRoundButton text="LOGIN" />
      </form>
    </div>
  );
};

export default AdminLogin;
