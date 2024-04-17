import { Link, useLoaderData, useParams } from "react-router-dom";
import { MdArrowBackIosNew } from "react-icons/md";
import { FaRegBuilding } from "react-icons/fa";
import { TbBuildingSkyscraper } from "react-icons/tb";
import { FaMapLocation } from "react-icons/fa6";
const Details = () => {

    const detailData = useLoaderData()

    const { id } = useParams()

    const intId = parseInt(id, 10)

    const data = detailData.find(info => info.id == intId)


    return (
        <div className="flex flex-col justify-center mt-10 mb-10">
            <div className="flex items-center justify-center gap-2 mb-5 text-sm text-white bg-primaryOlive p-2 rounded-full w-[100px] text-center">
                <MdArrowBackIosNew></MdArrowBackIosNew>

                <Link to='/'><button>Go Back</button> </Link>

            </div>

            <div className="flex items-center mt-5 justify-between">
                <h1 className=" tracking-wider text-2xl lg:text-5xl md:text-3xl font-bold text-primaryOlive">{data.estate_title}</h1>
                <p className="text-2xl bg-secondaryWhite rounded-full p-2 font-bold text-primaryGreen lg:text-4xl md:text-3xl">{data.price}</p>
            </div>

            <div className=" flex flex-col bg-secondaryOlive p-5 rounded-xl shadow-xl mt-10 mb-10" data-aos="fade-up-left">
                <div className="flex flex-col items-center md:flex-row lg:flex-row gap-5">
                    <div data-aos="fade-up">
                        <img className=" rounded-xl shadow-lg lg:max-w-[1000px] w-[600px]  lg:h-[300px] object-cover" src={data.image} alt="" />
                    </div>
                    <div className="flex flex-col gap-2 justify-center items-center md:justify-start md:items-start lg:justify-start lg:items-start ">
                        <div className="flex flex-wrap  gap-5 items-center text-2xl   font-bold text-primaryOlive"> Facilities :  
                            {
                                data.facilities.map(facility =>
                                    <span className="bg-primaryWhite text-sm  lg:text-lg min-w-[100px] shadow-white text-primaryOlive text-center font-bold p-2 rounded-full" key={facility.id}>{facility}</span>
                                )
                            }
                        </div>
                        <div className="flex justify-between mt-2 w-full items-center ">
                            
                            <div className="flex gap-5 items-center">
                                <span className="text-2xl font-bold text-primaryOlive">Status:</span>
                                <p className="bg-primaryOlive text-white p-2 w-[120px] text-center rounded-full">{data.status}</p>
                            </div>
                        </div>

                        <div className="flex gap-5 items-center mt-5">
                            <div className="flex items-center gap-2 text-xl bg-primaryWhite p-3 rounded-2xl">
                               <TbBuildingSkyscraper></TbBuildingSkyscraper>
                                <p>{data.area}</p>
                            </div>
                            <div className="flex items-center gap-2 text-xl bg-primaryWhite p-3 rounded-2xl">
                                <FaMapLocation></FaMapLocation>
                                <span>{data.location}</span>

                            </div>
                        </div>



                    </div>

                </div>
                <div className="mt-5" data-aos="fade-up">
                <div className="flex gap-2 items-center text-3xl bg-primaryOlive text-white w-[250px] rounded-2xl p-3">
                                <FaRegBuilding className="text-2xl"></FaRegBuilding>
                                <p className="  font-bold ">{data.segment_name}</p>
                            </div>
                </div>
                <div className="mt-10" data-aos="fade-up-right">
                    <h1 className=" font-bold text-primaryOlive border-b-4 border-primaryWhite pb-2 w-[220px] text-2xl lg:text-4xl md:text-3xl">Description: </h1>
                    <p className="mt-5 tracking-wide text-sm lg:text-lg text-gray-700">{data.description}</p>
                </div>

            </div>


        </div>
    );
};

export default Details;