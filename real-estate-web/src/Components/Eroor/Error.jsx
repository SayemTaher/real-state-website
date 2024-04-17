import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";


const Error = () => {
    return (
        <div>
            <Helmet>
                <title>Douglas | 404</title>
            </Helmet>
            <div className="flex items-center justify-center min-h-screen bg-gray-200 text-center">
            <div className="flex flex-col justify-center items-center gap-5">
                <img src="https://i.ibb.co/PwDRNmr/error-404.jpg" alt="Error" className="mx-auto shadow-lg rounded-xl h-64 w-auto"/>
                <h1 className="text-4xl font-bold text-red-600">404 Error</h1>
                <p className="text-gray-700 mt-2">Sorry, the page you are looking for cannot be found!</p>
                <Link to='/'><button className="mt-4 px-6 py-3 bg-primaryOlive text-white rounded-full w-[150px] text-center shadow-lg  ">
                    Go Back
                </button></Link>
            </div>
        </div>
            
        </div>
    );
};

export default Error;