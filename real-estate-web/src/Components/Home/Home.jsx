import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import Slider from "../Slider/Slider";
import SingleData from "../SingleData/SingleData";


const Home = () => {
    const data = useLoaderData()
    console.log(data)


    
    return (
        <div>
            <Helmet>
                <title>Douglas | Home</title>
            </Helmet>



            <div>
                <Slider ></Slider>
                
            </div >
            <div className="mt-20" data-aos="fade-in">
                <h1 className="text-2xl lg:text-5xl text-primaryOlive md:text-4xl font-bold">Our Top Houses</h1>
                <div className="h-[5px] w-[350px] mt-4 mb-4 bg-secondaryOlive"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 mb-10" data-aos="fade-up-right">
                {
                    data.slice(0,6).map(singleData => <SingleData key={singleData.id} singleData={singleData}></SingleData>)
                }
            </div>
            
        </div>
    );
};

export default Home;