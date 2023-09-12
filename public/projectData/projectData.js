import kutirGhor from "/src/assets/kutir-ghor.jpg"
import freshFood from "/src/assets/FreashFood.jpg"
import travel from "/src/assets/Travel-community.jpg"
import littleJoyFull from "/src/assets/Little-JoyFull/little-joyfull-1.jpg"
import footballDen from "/src/assets/Football-Den/Football-Den-1.jpg"
const projectData = [
  
  {
    id: 1,
    thumbnail: kutirGhor,
    title: "Kutir Ghor",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam explicabo libero ab, eum quam vel adipisci quia quod, accusantium nobis, ullam maxime! Possimus et facilis aperiam? Iure sint eaque iste sed vel fuga optio rem reiciendis illo cum ad eius aperiam, a, excepturi quod quae. Magnam, suscipit atque. Quisquam ipsum magnam eos atque nam, quo molestiae sit natus dignissimos omnis ipsam commodi, porro voluptatibus ad iste harum expedita sed. Eaque facere in inventore impedit iusto aut laboriosam, possimus quo dignissimos.",
    liveLink: "https://kutir-shilpo.vercel.app/",
    github: [
      {
        id:1,
        title:"github",
        link:"https://github.com/kutir-shilpo/kutir-shilpo"
      }
    ]
  },
  {
    id: 2,
    thumbnail: freshFood,
    title: "Fresh Food",
    description:
      "Explore the taste of Bangladesh through a React-based website. Discover a wide variety of recipes from talented Bangladeshi chefs. With ExpressJS handling the server side and the convenience of Firebase authentication.",
    liveLink: "https://favourite-food-recipes.web.app/",
    github:[
      {id:1,title:"client",link: "https://github.com/pm-rahman/frash-food-recipe-client"},
      {id:2,title:"server",link: "https://github.com/pm-rahman/frash-food-recipe-server"}
    ]
  },
  {
    id: 3,
    thumbnail: travel,
    title: "Travel Community",
    description:
      "This is a Travel system application. There is a feature which will try to make a community among all travelers who will use the application. Any traveler can create his/her own community, where they can manage members from Dashboard. ",
    liveLink: "https://travel-community-dd955.web.app/",
    github:[
      {id:1,title:"client",link: "https://github.com/pm-rahman/Travel-community-client"},
      {id:2,title:"server",link: "https://github.com/pm-rahman/Travel-community-server"}
    ]
  },
  {
    id: 4,
    thumbnail: littleJoyFull,
    title: "Little Joyful Land",
    description:
      "There is cars, truck, and Regular car toy available. Built with ReactJS, ExpressJS, and MongoDB, With seamless integration of Firebase and JWT, It ensures a secure and exciting shopping experience for young car lovers.",
    liveLink: "https://little-joyful-land.web.app/",
    github:[
      {id:1,title:"client",link: "https://github.com/pm-rahman/little-joyful-land-client"},
      {id:2,title:"server",link: "https://github.com/pm-rahman/little-joyfull-land-server"}
    ]
  },
  {
    id: 5,
    thumbnail: footballDen,
    title: "Football coach Den",
    description:
      "This website is based on kids. Here they can do multiple courses during their summer vacation. Built with ReactJS, ExpressJS, and MongoDB, it provides a seamless user experience and integrates features like Firebase and React Stripe for secure payments.",
    liveLink: "https://the-football-coach-den.web.app/",
    github:[
      {id:1,title:"client",link: "https://github.com/pm-rahman/Football-coatch-den-client"},
      {id:2,title:"server",link: "https://github.com/pm-rahman/Football-Coach-Den-Server"}
    ]
  },
];
export default projectData;
