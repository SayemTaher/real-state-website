
import{Outlet} from 'react-router-dom'
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
 import { ToastContainer, toast } from "react-toastify";
 import "react-toastify/dist/ReactToastify.css";
// ..
AOS.init({
  offset: 200, // Offset (in pixels) from the original trigger point
  delay: 0, // Delay (in milliseconds) before animations start
  duration: 800, // Duration (in milliseconds) of animations
  easing: "ease", // Easing type ('ease', 'linear', 'ease-in', 'ease-out', 'ease-in-out')
  once: true, // Whether animations should only happen once
  mirror: false, // Whether elements should animate out as they scroll out of view
  anchorPlacement: "top-bottom", // How elements are positioned relative to the scrollable area
  useClassNames: true, // Whether to add class names to elements
  initClassName: "aos-init", // Class name to be applied initially
  animatedClassName: "aos-animate", // Class name to be applied on animation
});

const Root = () => {
    return (
      <div className='bg-primaryWhite'>
        <div className='container mx-auto '> 
          <Header></Header>
          <Outlet ></Outlet>
        </div>
        <Footer></Footer>
      </div>
    );
};

export default Root;