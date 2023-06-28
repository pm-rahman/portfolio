import SingleProject from "../SingleProject/SingleProject";

import img1 from "../../../assets/Football-Den/Football-Den-1.jpg"
import img2 from "../../../assets/Football-Den/Football-Den-2.jpg"
import img3 from "../../../assets/Football-Den/Football-Den-3.jpg"
import img4 from "../../../assets/Football-Den/Football-Den-4.jpg"
import img5 from "../../../assets/Football-Den/Football-Den-5.jpg"
import Carousel from "../../../Components/Carousel/Carousel";

const FootballDen = () => {
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
                title="Football coach Den"
                description="This website is based on kids. Here they can do multiple courses during their summer vacation. Built with ReactJS, ExpressJS, and MongoDB, it provides a seamless user experience and integrates features like Firebase and React Stripe for secure payments."
                liveLink="https://the-football-coach-den.web.app/"
                clientRepo="https://github.com/pm-rahman/Football-coatch-den-client"
                serverRepo="https://github.com/pm-rahman/Football-Coach-Den-Server"
            />
        </div>
    );
};

export default FootballDen;