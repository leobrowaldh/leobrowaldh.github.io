import ChromaGrid, { type ChromaItem } from "../components/chromaGrid";

//PROJECTS TO ADD:
// 1. Spiritual guide
// 2. couple fair trade
// 3. csl gaming? mayb...
// 4. Secret Manager

export default function Projects() {

    const projects: ChromaItem[] = [
        {
          image: "/images/SpiritualGuide3.png",
          title: "Spiritual Guide",
          subtitle: "Vector embedding based Spiritual guide with Entra External Id",
          handle: " ",
          borderColor: "black",
          gradient: "linear-gradient(210deg,rgb(184, 242, 241),#000)",
          url: "https://zealous-water-0ccf68303.1.azurestaticapps.net/",
        },
        {
          image: "/images/FilmRecommendations.png",
          title: "Film Recommendations",
          subtitle: "Ai assisted film recommendations app",
          handle: " ",
          borderColor: "black",
          gradient: "linear-gradient(210deg,rgb(83, 145, 194),#000)",
          url: "https://kind-smoke-050d18e03.6.azurestaticapps.net/",
        },
        {
          image: "/images/Chatmaster.png",
          title: "Chat Master",
          subtitle: "Chat app to test web push notifications",
          handle: " ",
          borderColor: "black",
          gradient: "linear-gradient(145deg,rgb(184, 242, 241),#000)",
          url: "https://chatmaster-b4d6g3fha7ggdzb8.northeurope-01.azurewebsites.net/",
        },
        {
          image: "/images/EventOrganizer3.png",
          title: "Event Organizer",
          subtitle: "Organize events with your friends and family",
          handle: " ",
          borderColor: "black",
          gradient: "linear-gradient(165deg,rgb(83, 145, 194),#000)",
          url: "https://event-organizer-h0def3csceaxhqf0.swedencentral-01.azurewebsites.net",
        }
      ];

    return (
        <div>
            <p className="m-10">Please be patient with the loading time and reolad the page on error (Most applications are deployed on free tiers)</p>
            <ChromaGrid items={projects} />
        </div>
    )
}