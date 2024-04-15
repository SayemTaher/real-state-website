import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { AiOutlineLogin } from "react-icons/ai";
const Register = () => {
  return (
    <div className="hero min-h-screen bg-secondaryWhite">
      <Helmet>
        <title>Douglas | Sign Up</title>
      </Helmet>
      <div className="hero-content flex-col lg:flex-row gap-10 ">
        <div className="-mt-72 hidden lg:flex flex-col " data-aos="flip-up">
          <h1 className="text-6xl font-bold w-[350px] text-primaryOlive border-b-4 pb-6 border-white">Douglas Penthouse</h1>
          <img
            className="w-[800px] shadow-xl mt-10"
            src="https://i.ibb.co/D9RWXzq/infinite-views-79-Njp-XDOJU8-unsplash.jpg"
            alt="img"
          />
        </div>

        <div data-aos="fade-up-right" className="card lg:w-[450px] md:w-[400px] border-2 border-primaryOlive w-[400px] shadow-2xl bg-primaryWhite">
          <div className="m-5 flex lg:flex-row gap-2 items-center justify-center">
            <AiOutlineLogin className="text-4xl"></AiOutlineLogin>
            <h1 className="text-center pt-10 text-primaryOlive font-bold text-3xl border-b-2 pb-4 ">
              Register Now
            </h1>
          </div>
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Full Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Image URL</span>
              </label>
              <input
                type="text"
                name="image"
                placeholder="Your image url"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <Link to="/login">
                  Already have an account? <span className="text-primaryGreen font-bold hover:border-b-2 border-primaryOlive">Login</span>
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button
                className="btn bg-primaryOlive rounded-full text-white text-lg"
                type="submit"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
