import Image from "next/image";
import hero from "../../../public/hero.png"
export default function WorkHero(){


    return(
        <div>
            <Image src={hero} width={40} height={40}></Image>
        </div>
    )}