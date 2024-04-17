/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

// import { IoKeySharp } from "react-icons/io5";
import { FaHouseChimney } from "react-icons/fa6";
import { FaMapLocationDot } from "react-icons/fa6";
import { MdOutlineApartment } from "react-icons/md";
import { Link } from "react-router-dom";
const SingleData = ({ singleData }) => {
    const {id, segment_name, estate_title, description, price, status, area, location, facilities, image } = singleData

    const handleDetails = () =>{

    }

    return (
        <div className="flex flex-col justify-between h-[600px] shadow-md border-2 border-secondaryOlive  p-5 bg-secondaryWhite rounded-xl " data-aos="fade-up-right">
            <div>
                <img className="lg:w-[full] w-[600px]  shadow-xl h-[300px] object-cover" src={image} alt="img" />
            </div>
            <div className="flex justify-between items-center mt-4">
                <h2 className="text-2xl tracking-wider font-bold text-primaryOlive">{estate_title}</h2>
                <div className="flex gap-2 items-center bg-primaryWhite text-primaryOlive rounded-full text-lg p-2">
                    <FaHouseChimney></FaHouseChimney>
                    <span> {status}</span>
                </div>

            </div>
            <div className="mt-4 flex justify-between items-center text-lg">
                <div className="flex gap-2 items-center ">
                    <MdOutlineApartment></MdOutlineApartment>
                    <span className="">{area}</span>
                </div>
                <div className="flex gap-2 items-center text-gray-600  text-lg">
                    <FaMapLocationDot></FaMapLocationDot>
                    <p className="font-bold">{location}</p>
                </div>


            </div>
            <div className="flex justify-between items-center mt-4">
                <Link to= {`/details/${id}`}> <button onClick={handleDetails} className="btn bg-primaryOlive text-white text-center  w-[150px] rounded-full" >View Facilities</button></Link>
                <span className="font-bold text-3xl text-primaryGreen">{price}</span>
            </div>

        </div>
    );
};

export default SingleData;