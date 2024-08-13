import Map from "@/app/_components/Contacts/Map";
import Representatives from "@/app/_components/Contacts/Representatives";
import Application from "../_components/Main/Application";

export default function page() {
    return (
        <div className="w-full bg-white flex flex-col gap-23 pb-24 ">
            <Map />
            <Representatives />
            <Application />
        </div>
    );
}