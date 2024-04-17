import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UpdateProfile = () => {
  const { user, updateUserProfile } = useContext(AuthContext);
  const [name, setName] = useState(user?.displayName || '');
  const [photoURL, setPhotoURL] = useState(user?.photoURL || '');

  const handleSubmit = (event) => {
    event.preventDefault();

    updateUserProfile(name, photoURL);
    toast.success('Profile Updated!')
  };

  return (
    <div>
      <Helmet>
        <title>Douglas | Update Profile</title>
      </Helmet>

      <div className="flex flex-col gap-5 lg:flex-row justify-center items-center min-h-screen">
        <div className="flex flex-col w-[400px] h-[300px] gap-5 justify-center items-center bg-white p-10 rounded-xl border-2 border-secondaryOlive">
          {
            user.photoURL ? (
              <img
                key={user.photoURL} // This forces React to re-render the image when the URL changes
                className="rounded-full border-2 w-[100px] shadow-xl border-primaryGreen"
                src={user.photoURL}
                alt="User profile"
              />
            ) : (
              <img
              className="rounded-full border-2 w-[100px] shadow-xl border-primaryGreen"
                src="https://i.ibb.co/nC23FQB/Screenshot-2024-04-15-at-15-53-08.png"
                alt="Default profile"
              />
            )
          }
          <h1 className="text-2xl text-primaryGreen font-bold ">  <span className="text-navy">{user.displayName}</span></h1>
          <h2>{user.email}</h2>


        </div>
        <div className="card shrink-0 w-[400px] h-[300px] border-2 border-secondaryOlive max-w-sm shadow-2xl bg-base-100">
          <form className="card-body" onSubmit={handleSubmit}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input type="text" placeholder="Photo URL" value={photoURL} onChange={e => setPhotoURL(e.target.value)} className="input input-bordered" required />
            </div>
            <div className="form-control mt-6 text-white">
              <button type="submit" className="btn text-white btn-primary">Update Details</button>
            </div>
          </form>
        </div>

      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default UpdateProfile;