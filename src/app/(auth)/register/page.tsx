import Form from "./Form";
import Link from "next/link";
export default function page() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-200">
      <div className="px-5 md:w-1/2 lg:w-1/3 w-full md:px-0">
        <h1 className="text-3xl font-bold">Daftar</h1>
        <p className="mb-3 text-slate-600">
          Lorem ipsum dolor sit adipisicing elit. Veniam, assumenda?
        </p>
        <Form />
        <section className="flex mt-3">
          <p>Udah punya akun?</p>
          <Link href={"/login"} className="underline">
            login
          </Link>
        </section>
      </div>
    </div>
  );
}
