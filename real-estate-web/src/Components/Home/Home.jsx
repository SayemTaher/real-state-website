import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import Slider from "../Slider/Slider";


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
                
            </div>
            
        </div>
    );
};

export default Home;