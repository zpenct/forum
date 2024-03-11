"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
// import { register as registerFn } from "@/service/auth";

type Inputs = {
  name: string;
  email: string;
  password: string;
};

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async(data) => {
    // const res = await registerFn(data);
    // console.log(res)

  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
      <Input
        placeholder="Joko"
        type="text"
        {...register("name", { required: true })}
      />
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
      <Button>Daftar</Button>
    </form>
  );
}
