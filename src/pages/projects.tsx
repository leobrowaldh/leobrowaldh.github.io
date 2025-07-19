import ChromaGrid, { type ChromaItem } from "../components/chromaGrid";

export default function Projects() {

    const projects: ChromaItem[] = [
        {
          image: "/images/FilmRecommendations.png",
          title: "Film Recommendations",
          subtitle: "Ai assisted film recommendations app",
          handle: " ",
          borderColor: "#10B981",
          gradient: "linear-gradient(210deg,#10B981,#000)",
          url: "https://kind-smoke-050d18e03.6.azurestaticapps.net/",
        },
        {
          image: "/images/chatmaster-48x48.png",
          title: "Chat Master",
          subtitle: "Chat app to test web push notifications",
          handle: " ",
          borderColor: "#4F46E5",
          gradient: "linear-gradient(145deg,#4F46E5,#000)",
          url: "https://chatmaster-b4d6g3fha7ggdzb8.northeurope-01.azurewebsites.net/",
        },
        {
          image: "/images/eventOrganizier.jpg",
          title: "Event Organizer",
          subtitle: "Organize events with your friends and family",
          handle: " ",
          borderColor: "#F59E0B",
          gradient: "linear-gradient(165deg,#F59E0B,#000)",
          url: "https://event-organizer-h0def3csceaxhqf0.swedencentral-01.azurewebsites.net",
        },
        // {
        //   image: "https://i.pravatar.cc/300?img=16",
        //   title: "Casey Park",
        //   subtitle: "Data Scientist",
        //   handle: "@caseypark",
        //   borderColor: "#EF4444",
        //   gradient: "linear-gradient(195deg,#EF4444,#000)",
        //   url: "https://kaggle.com/",
        // },
        // {
        //   image: "https://i.pravatar.cc/300?img=25",
        //   title: "Sam Kim",
        //   subtitle: "Mobile Developer",
        //   handle: "@thesamkim",
        //   borderColor: "#8B5CF6",
        //   gradient: "linear-gradient(225deg,#8B5CF6,#000)",
        //   url: "https://github.com/",
        // },
        // {
        //   image: "https://i.pravatar.cc/300?img=60",
        //   title: "Tyler Rodriguez",
        //   subtitle: "Cloud Architect",
        //   handle: "@tylerrod",
        //   borderColor: "#06B6D4",
        //   gradient: "linear-gradient(135deg,#06B6D4,#000)",
        //   url: "https://aws.amazon.com/",
        // },
      ];

    return (
        <div>
            <p className="m-10">Please be patient with the loading time and reolad the page on error (The applications are deployed on free tiers)</p>
            <ChromaGrid items={projects} />
        </div>
    )
}