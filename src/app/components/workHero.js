import Image from "next/image";
import hero from "../../../public/hero.png"

export default function WorkHero(){


    return(
        <div className="">
            <div className="justify-center align-middle">
                <Image id="image-halo" alt="halo effect behind image related to the project" src={hero} className=" blur-3xl opacity-60 absolute w-6/12 px-12 "></Image>
                <Image id="work-image" alt="image related to the project" src={hero} className=" absolute w-5/12 px-12" ></Image>
            </div>
        </div>
    )}