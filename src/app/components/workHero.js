import Image from "next/image";
import hero from "../../../public/hero.png"

export default function WorkHero(){

    return(
        <div className="relative">
            <Image id="work-image-halo" alt="halo effect behind image related to the project" src={hero} className=" blur-3xl opacity-90 w-5/12 relative top-0 left-0"></Image>
            <Image id="work-image" alt="image related to the project" src={hero} className=" w-5/12 absolute top-0 left-0 "></Image>
        </div>
    )}