import Banner from "@/app/_components/Main/Banner";
import Equipments from "@/app/_components/Main/Equipments";
import Scheme from "@/app/_components/Main/Scheme";
import ProfessionalEquipments from "@/app/_components/Main/ProfessionalEquipments";
import AboutUs from "@/app/_components/Main/AboutUs";
import Application from "./Application";
import Partners from "../About/Partners";

export default function Main() {
  return (
    <div className="w-full bg-white pt-12 flex flex-col gap-32">
      <Banner />
      <Equipments />
      <Scheme />
      <ProfessionalEquipments />
      <AboutUs />
      <Application />
      <div className="w-full max-w-[1440px] mx-auto px-2">
        <Partners />
      </div>
    </div>
  );
}
