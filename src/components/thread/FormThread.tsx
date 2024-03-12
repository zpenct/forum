"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

type Inputs = {
  content: string;
  title: string;
  category: string;
};
export default function NewThreadForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
      <Input
        placeholder="Belajar Redux"
        {...register("title", { required: true })}
      />
      <Input {...register("category", { required: true })} />
      <Textarea
        placeholder="john@gmail.com"
        {...register("content", { required: true })}
      />
      {errors.content && (
        <span className="text-red-500">Yakin gak Komentar apa-apa?</span>
      )}
      <Button className="w-full">Tambahkan</Button>
    </form>
  );
}
