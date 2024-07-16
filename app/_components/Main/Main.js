import Banner from "@/app/_components/Main/Banner"
import Equipments from "@/app/_components/Main/Equipments"
import Scheme from "@/app/_components/Main/Scheme"

export default function Main() {
  return (
    <div className="w-full bg-white pt-12 flex flex-col gap-32">
        <Banner />
        <Equipments />
        <Scheme />
    </div>
  )
}
