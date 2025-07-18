import ChromaGrid, { type ChromaItem } from "../components/chromaGrid";

const Articles = () => 
{

    const articles: ChromaItem[] = [
            {
              image: "/images/webpushArticle.png",
              title: "Web Push Notifications",
              subtitle: "A deep dive into this technology and how to use it",
              handle: " ",
              borderColor: "#10B981",
              gradient: "linear-gradient(210deg,#10B981,#000)",
              url: "https://www.linkedin.com/pulse/implementing-web-push-notifications-your-website-browaldh-carracedo-3rmkf/?trackingId=vxrtknugTw2SJ2y85uN9Eg%3D%3D",
            },
            {
              image: "/images/videoConferenceArticle.png",
              title: "Video Conference Applications",
              subtitle: "How to build a video conference application with WebRTC",
              handle: " ",
              borderColor: "#4F46E5",
              gradient: "linear-gradient(145deg,#4F46E5,#000)",
              url: "https://www.linkedin.com/pulse/how-build-webrtc-video-conference-application-dying-process-browaldh-2eymf/?trackingId=vxrtknugTw2SJ2y85uN9Eg%3D%3D",
            },
            // {
            //   image: "https://i.pravatar.cc/300?img=3",
            //   title: "Morgan Blake",
            //   subtitle: "UI/UX Designer",
            //   handle: "@morganblake",
            //   borderColor: "#F59E0B",
            //   gradient: "linear-gradient(165deg,#F59E0B,#000)",
            //   url: "https://dribbble.com/",
            // },
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

    return(
        <ChromaGrid items={articles}/>
    );
}

export default Articles;