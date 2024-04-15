import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { VscSignIn } from "react-icons/vsc";
import { FcGoogle } from "react-icons/fc";
import { SiGithub } from "react-icons/si";

const Login = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-secondaryWhite">
      <Helmet>
        <title>Douglas | Login</title>
      </Helmet>

      <div className="hero-content flex-col items-center  justify-center lg:flex-row gap-10  ">
        <div className=" hidden lg:flex flex-col -mt-48 " data-aos="flip-up">
          <h1 className="text-6xl font-bold w-[350px] text-primaryOlive border-b-4 pb-6 border-white">
            Douglas Penthouse
          </h1>
          <img
            className="w-[800px] shadow-xl mt-10 border-2 border-white"
            src="https://i.ibb.co/X8Ljrxw/lotus-design-n-print-jt2-I98bh53-A-unsplash.jpg"
            alt="img"
          />
        </div>

        <div
          data-aos="fade-up-right"
          className="card lg:w-[450px] md:w-[400px] border-2 border-primaryOlive w-[400px] shadow-2xl bg-primaryWhite"
        >
          <div className="m-5 flex lg:flex-row gap-2 items-center justify-center">
            <VscSignIn className="text-4xl"></VscSignIn>
            <h1 className="text-center pt-10 text-primaryOlive font-bold text-3xl border-b-2 pb-4 ">
              Sign In
            </h1>
          </div>
          <form className="card-body">
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
                <Link to="/register">
                  Don't have an account ?
                  <span className="text-primaryGreen font-bold hover:border-b-2 border-primaryOlive">
                    Register
                  </span>
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button
                className="btn bg-primaryOlive rounded-full text-white text-lg"
                type="submit"
              >
                Login
              </button>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex btn bg-primaryWhite border-2 hover:scale-95 hover:bg-primaryWhite border-secondaryOlive shadow-xl rounded-full  items-center gap-3 text center justify-center">
                <FcGoogle className="text-2xl"></FcGoogle>
                <button> Sign In with Google</button>
              </div>
              <div className="flex btn bg-primaryWhite border-2 hover:scale-95 hover:bg-primaryWhite border-secondaryOlive  shadow-xl rounded-full  items-center gap-3 text center justify-center">
                <SiGithub className="text-2xl"></SiGithub>
                <button>Sign In with Github</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
