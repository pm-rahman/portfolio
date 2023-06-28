import Carousel from "../../../Components/Carousel/Carousel"
import img1 from "../../../assets/Little-JoyFull/little-joyfull-1.jpg"
import img2 from "../../../assets/Little-JoyFull/little-joyfull-2.jpg"
import img3 from "../../../assets/Little-JoyFull/little-joyfull-3.jpg"
import img4 from "../../../assets/Little-JoyFull/little-joyfull-4.jpg"
import img5 from "../../../assets/Little-JoyFull/little-joyfull-5.jpg"
import SingleProject from "../SingleProject/SingleProject"
const LittleJoyful = () => {
    return (
        <div>
            <Carousel
                img1={img1}
                img2={img2}
                img3={img3}
                img4={img4}
                img5={img5}
            />
            <SingleProject
                title="Little Joyful Land"
                description="There is cars, truck, and Regular car toy available. Built with ReactJS, ExpressJS, and MongoDB, With seamless integration of Firebase and JWT, It ensures a secure and exciting shopping experience for young car lovers."
                liveLink="https://little-joyful-land.web.app/"
                clientRepo="https://github.com/pm-rahman/little-joyful-land-client"
                serverRepo="https://github.com/pm-rahman/little-joyfull-land-server"
            />
        </div>
    );
};

export default LittleJoyful;