import Brand from "./Brand";
import Navigation from "./Navigation";
import ListTrending from "./Trending";

export default function Sidebar() {
  return (
    <div className="bg-slate-50 rounded-md p-5 md:min-h-[100dvh] sticky top-0 overflow-hidden">
      <Brand />
      <div className="md:mt-10">
        <Navigation />
      </div>
      <div className="md:mt-10">
        <ListTrending />
      </div>
    </div>
  );
}
