export type ProjectsType = typeof projects;
export type ProjectType = (typeof projects)[0];

export const projects = [
  {
    title: "Booking Galaxy",
    description:
      "Hotel Booking System with admin panel using MERN stack",
    deployLink: "https://melodious-pithivier-1f1e1a.netlify.app/",
    codeLink: "https://melodious-pithivier-1f1e1a.netlify.app/",
    image: "/images/BookingGalaxy.png",
  },
  {
    title: "IMDB clone",
    description:
      "Imdb clone with moviedb apis to show movie details and rating",
    deployLink: "https://imdb-clone-seven-ruby.vercel.app/",
    codeLink: "https://github.com/DeepanshuHanda7/imdb-clone",
    image: "/images/IMDB.png",
  },
  {
    title: "Zomato clone",
    description: "Zomato clone with static json to show cusines",
    deployLink: "https://zomato-clone-dun-omega.vercel.app/",
    codeLink: "https://github.com/DeepanshuHanda7/Zomato-Clone",
    image: "/images/Zomato.png",
  },
];
