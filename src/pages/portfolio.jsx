import { Avatar, Typography, Button } from "@material-tailwind/react";
import {
  MapPinIcon,
  BriefcaseIcon,
  BuildingLibraryIcon,
} from "@heroicons/react/24/solid";
import { Footer } from "@/widgets/layout";
import PortfolioCard from "@/utils/PortfolioCard.jsx";
import React from "react";
import "@/asset/css/portfolio.css"

export function Portfolio() {
    let uTowerImgPath = "../../public/img/portfolio/utower.jpg";
  return (
    <>
        <section className="relative block h-[50vh]">
            <div className="bg-profile-background absolute top-0 h-full w-full bg-[url('/img/main-back-img.webp')] bg-cover bg-center scale-105" />
            <div className="absolute top-0 h-full w-full bg-black/60 bg-cover bg-center" />
        </section>


        {/* TODO:: 해당 card들 DB에서 call */}
        <section className="relative bg-white py-10">
            <div className="relative dd-flex pb-32">
                <PortfolioCard numbering={1} headerName={"유타워 인테리어"} imgPath={uTowerImgPath} subHeader={"유타워"}
                               linkPath={"http://www.risker.shop/board"}
                               githubPath={"https://github.com/qnffnrl/phpBoard"}/>

                <PortfolioCard numbering={1} headerName={"유타워 인테리어"} imgPath={uTowerImgPath} subHeader={"유타워"}
                               linkPath={"http://www.risker.shop/board"}
                               githubPath={"https://github.com/qnffnrl/phpBoard"}/>

                <PortfolioCard numbering={1} headerName={"유타워 인테리어"} imgPath={uTowerImgPath} subHeader={"유타워"}
                               linkPath={"http://www.risker.shop/board"}
                               githubPath={"https://github.com/qnffnrl/phpBoard"}/>
            </div>

            <div className="relative flex content-center items-center justify-center pb-32">
                <PortfolioCard numbering={1} headerName={"유타워 인테리어"} imgPath={uTowerImgPath} subHeader={"유타워"}
                               linkPath={"http://www.risker.shop/board"}
                               githubPath={"https://github.com/qnffnrl/phpBoard"}/>

                <PortfolioCard numbering={1} headerName={"유타워 인테리어"} imgPath={uTowerImgPath} subHeader={"유타워"}
                               linkPath={"http://www.risker.shop/board"}
                               githubPath={"https://github.com/qnffnrl/phpBoard"}/>

                <PortfolioCard numbering={1} headerName={"유타워 인테리어"} imgPath={uTowerImgPath} subHeader={"유타워"}
                               linkPath={"http://www.risker.shop/board"}
                               githubPath={"https://github.com/qnffnrl/phpBoard"}/>
            </div>
        </section>

        <div className="bg-white">
            <Footer/>
        </div>

    </>
  );
}

export default Portfolio;
