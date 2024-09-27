export type ProjectsType = typeof projects;
export type ProjectType = (typeof projects)[0];

export const projects = [
  {
    title: "IMDB clone",
    description:
      "Imdb clone with moviedb apis to show movie details and rating",
    deployLink: "https://imdb-clone-tan.vercel.app/",
    codeLink: "https://github.com/priyaaanshh/Movie-Web-App",
    image: "/images/IMDB.png",
  },
  {
    title: "Zomato clone",
    description: "Zomato clone with static json to show cusines",
    deployLink: "https://zomato-clone-dun-omega.vercel.app/",
    codeLink: "https://github.com/DeepanshuHanda7/Zomato-Clone",
    image: "/images/Zomato.png",
  }
];
