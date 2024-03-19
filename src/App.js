import "./App.css";

// Assets
import faceIcon from "./assets/icon-facebook.svg";
import twitterIcon from "./assets/icon-twitter.svg";
import instagramIcon from "./assets/icon-instagram.svg";
import youtubeIcon from "./assets/icon-youtube.svg";
import arrowupIcon from "./assets/icon-up.svg";
import arrowDown from "./assets/icon-down.svg";

// Components
import Navbar from "./components/Navbar";
import CardFollows from "./components/CardFollows";
import PercentCard from "./components/PercentCard";

function App() {
  return (
    <div className="App dark:bg-backPageColor min-h-screen">
      {/* Header */}
      <Navbar />
      {/* followers */}
      <div className="px-4 md:px-12">
        <div className="relative top-[-30px] flex flex-col md:flex-row justify-between items-center">
          <CardFollows
            appIcon={faceIcon}
            arrow={arrowupIcon}
            name="@nathanf"
            number="1987"
            folow="followers"
            statsitical="12 Today"
            increase={true}
          />
          <CardFollows
            appIcon={twitterIcon}
            arrow={arrowupIcon}
            name="@nathanf"
            number="1044"
            folow="followers"
            statsitical="99 Today"
            increase={true}
          />
          <CardFollows
            appIcon={instagramIcon}
            arrow={arrowupIcon}
            name="@realnathanf"
            number="11k"
            folow="followers"
            statsitical="1099 Today"
            increase={true}
          />
          <CardFollows
            appIcon={youtubeIcon}
            arrow={arrowDown}
            name="@Nathan F."
            number="8239"
            folow="subscriber"
            statsitical="144 Today"
            increase={false}
          />
        </div>
      </div>
      {/* overview */}
      <div className="px-4 md:px-12">
        <h1 className="text-xl md:text-2xl font-bold mb-6 dark:text-white text-lightParagraph">
          Overview - Today
        </h1>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 pb-8">
          <PercentCard
            text="Page Views"
            appIcon={faceIcon}
            number={87}
            arrow={arrowupIcon}
            percent="3%"
            increase={true}
          />
          <PercentCard
            text="Likes"
            appIcon={faceIcon}
            number={52}
            arrow={arrowDown}
            percent="2%"
            increase={false}
          />
          <PercentCard
            text="Likes"
            appIcon={instagramIcon}
            number={5462}
            arrow={arrowupIcon}
            percent="2267%"
            increase={true}
          />
          <PercentCard
            text="Profile Views"
            appIcon={instagramIcon}
            number={"52k"}
            arrow={arrowupIcon}
            percent="1375%"
            increase={true}
          />
          <PercentCard
            text="Retweets"
            appIcon={twitterIcon}
            number={117}
            arrow={arrowupIcon}
            percent="303%"
            increase={true}
          />
          <PercentCard
            text="Likes"
            appIcon={twitterIcon}
            number={507}
            arrow={arrowupIcon}
            percent="553%"
            increase={true}
          />
          <PercentCard
            text="Likes"
            appIcon={youtubeIcon}
            number={107}
            arrow={arrowDown}
            percent="19%"
            increase={false}
          />
          <PercentCard
            text="Toltal Views"
            appIcon={youtubeIcon}
            number={1407}
            arrow={arrowDown}
            percent="12%"
            increase={false}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
