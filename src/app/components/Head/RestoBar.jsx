import Image from "next/image";
import Banner from "../../../data/image/banner/banner.jpg";

const RestoBar = () => {
    return (
        <>
            <div className="relative w-full h-[500px] bg-black flex items-center shadow-lg">

                <div className="w-full h-[400px]  absolute">
                    <Image src={Banner} alt="banner" layout="fill" objectFit="cover" />
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-[1px]"></div>
            </div>
        </>
    );
};

export default RestoBar;
