"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { asynLoginUser } from "@/states/authUser/action";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/hooks";

type Inputs = {
  email: string;
  password: string;
};

export default function Form() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const { email, password } = data;
    try {
      dispatch(asynLoginUser({ email, password }));
      const res = await signIn("credentials", {
        redirect: false,
        ...data,
        callbackUrl,
      });
      console.log({res})
      router.push("/");
    } catch (error) {
      console.log(error);
    }
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
