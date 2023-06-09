import NavBar from "../components/navBar";
import WorkHero from "../components/workHero";
import WorkRolodex from "../components/workRolodex";

export default function LandingPage (){



    return (
        <div id="landing-page" className=" align-top">
            <NavBar/>
            <div className=" flex content-evenly align-top relative top-80">
                <WorkRolodex/>
                <WorkHero/>
            </div>
        </div>
    );
}