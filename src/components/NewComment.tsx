"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";

type Inputs = {
  content: string;
};
export default function NewComment() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
      <Textarea
        placeholder="john@gmail.com"
        {...register("content", { required: true })}
      />
      {errors.content && (
        <span className="text-red-500">Yakin gak Komentar apa-apa?</span>
      )}
      <Button>Tambahkan</Button>
    </form>
  );
}
