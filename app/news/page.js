import Events from "@/app/_components/News/Events";
import NewsComp from "@/app/_components/News/NewsComp";
import Map from "../_components/About/Map";

export default function News() {
  return (
    <div className="pt-24">
      {/* <Events /> */}
      <NewsComp />
      <Map />
    </div>
  );
}