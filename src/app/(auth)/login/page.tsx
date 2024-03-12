import FormLogin from "./Form";
import Link from "next/link";
export default function page() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="px-5 md:w-1/2 lg:w-1/3 w-full md:px-0">
        <h1 className="text-3xl font-bold">Login</h1>
        <p className="mb-3 text-slate-600">
          Lorem ipsum dolor sit adipisicing elit. Veniam, assumenda?
        </p>
        <FormLogin />
        <section className="flex mt-3">
          <p>Belum punya akun?</p>
          <Link href={"/register"} className="underline">
            Daftar
          </Link>
        </section>
      </div>
    </div>
  );
}
