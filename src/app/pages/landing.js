import WorkHero from "../components/workHero";
import WorkRolodex from "../components/workRolodex";

export default function LandingPage (){



    return (
        <div className=" flex space-x-60 ">
            <WorkRolodex/>
            <WorkHero/>
        </div>
    );
}