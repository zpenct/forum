"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { login } from "@/service/auth";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";

type Inputs = {
  email: string;
  password: string;
};

export default function Form() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '/';
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const res = await signIn("Credentials", {
      redirect: false,
      ...data,
      callbackUrl,
    });
    console.log(res);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
      <Input
        placeholder="john@gmail.com"
        type="email"
        {...register("email", { required: true })}
      />
      <Input
        placeholder="*******"
        type="password"
        {...register("password", { required: true })}
      />
      {errors.email && errors.password && (
        <span className="text-red-500">Isi semua field</span>
      )}
      <Button>Masuk</Button>
    </form>
  );
}
