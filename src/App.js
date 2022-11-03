import React, { useEffect } from "react";
import { animateScroll } from "react-scroll";
import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Preloader from "./components/Preloader/Preloader";
import Footer from "./components/Footer";

//importing react slick slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NotFound from "./components/404/NotFound";

// AllLazy imports

//Lazy Routing for Home
const LazyHome = React.lazy(() => import("./components/Home/Home"));
//Lazy Routing for latest details
const LazyLatestD = React.lazy(() =>
  import("./components/Latest/LatestDetails")
);
//Lazy Routing for trending details
const LazyTrending = React.lazy(() =>
  import("./components/Trending/TrendingDetail")
);

//Lazy Routing for General Mega dropdown
const LazyGeneral = React.lazy(() => import("./components/General/General"));
const LazyGeneralD = React.lazy(() =>
  import("./components/General/GeneralDetail")
);
const LazyGambling = React.lazy(() => import("./components/General/Gambling"));
const LazyGamblingD = React.lazy(() =>
  import("./components/General/GamblingDetail")
);
const LazyReligion = React.lazy(() => import("./components/General/Religion"));
const LazyReligionD = React.lazy(() =>
  import("./components/General/ReligionDetail")
);
const LazyPollDebate = React.lazy(() =>
  import("./components/General/PollDebate")
);
const LazyPollDebateD = React.lazy(() =>
  import("./components/General/PollDebateDetail")
);
const LazyJobs = React.lazy(() => import("./components/General/Jobs"));
const LazyJobsD = React.lazy(() => import("./components/General/JobDetail"));

//Lazy Routing for News Mega Dropdown
const LazyBBNaija = React.lazy(() => import("./components/News/BBNaija"));
const LazyBBNaijaD = React.lazy(() =>
  import("./components/News/BBNaijaDetail")
);
const LazyCrime = React.lazy(() => import("./components/News/Crime"));
const LazyCrimeD = React.lazy(() => import("./components/News/CrimeDetail"));
const LazyEduca = React.lazy(() => import("./components/News/Education"));
const LazyEducaD = React.lazy(() =>
  import("./components/News/EducationDetail")
);
const LazyPolitics = React.lazy(() => import("./components/News/Politics"));
const LazyPoliticsD = React.lazy(() =>
  import("./components/News/PoliticsDetail")
);
const LazyCelebrity = React.lazy(() => import("./components/News/Celebrity"));
const LazyCelebrityD = React.lazy(() =>
  import("./components/News/CelebrityDetail")
);
const LazySports = React.lazy(() => import("./components/News/Sports"));
const LazySportsD = React.lazy(() => import("./components/News/SportsDetail"));
const LazySocialMedia = React.lazy(() =>
  import("./components/News/SocialMedia")
);
const LazySocialMediaD = React.lazy(() =>
  import("./components/News/SocialMediaDetail")
);
const LazyGovernance = React.lazy(() => import("./components/News/Governance"));
const LazyGovernanceD = React.lazy(() =>
  import("./components/News/GovernanceDetail")
);
const LazyTech = React.lazy(() => import("./components/News/Technology"));
const LazyTechD = React.lazy(() =>
  import("./components/News/TechnologyDetail")
);
const LazyWorld = React.lazy(() => import("./components/News/World"));
const LazyWorldD = React.lazy(() => import("./components/News/WorldDetail"));

//Lazy Routing for technology Mega Dropdown
const LazyGeneralFBT = React.lazy(() =>
  import("./components/Technology/GeneralFBT")
);
const LazyGeneralFBTD = React.lazy(() =>
  import("./components/Technology/GeneralFBTDetail")
);
const LazyComputer = React.lazy(() =>
  import("./components/Technology/Computer")
);
const LazyComputerD = React.lazy(() =>
  import("./components/Technology/ComputerDetail")
);
const LazyMobile = React.lazy(() => import("./components/Technology/Mobile"));
const LazyMobileD = React.lazy(() =>
  import("./components/Technology/MobileDetail")
);

//Lazy Routing for Life Mega Dropdown
const LazyHealth = React.lazy(() => import("./components/Life/Health"));
const LazyHealthD = React.lazy(() => import("./components/Life/HealthDetail"));
const LazyRomance = React.lazy(() => import("./components/Life/Romance"));
const LazyRomanceD = React.lazy(() =>
  import("./components/Life/RomanceDetail")
);
const LazyLifestyle = React.lazy(() => import("./components/Life/Lifestyle"));
const LazyLifestyleD = React.lazy(() =>
  import("./components/Life/LifestyleDetail")
);
const LazyFashion = React.lazy(() => import("./components/Life/Fashion"));
const LazyFashionD = React.lazy(() =>
  import("./components/Life/FashionDetail")
);
const LazySexuality = React.lazy(() => import("./components/Life/Sexuality"));
const LazySexualityD = React.lazy(() =>
  import("./components/Life/SexualityDetail")
);

//Lazy Routing for Education Mega Dropdown
const LazyExamination = React.lazy(() =>
  import("./components/Education/Examination")
);
const LazyExaminationD = React.lazy(() =>
  import("./components/Education/ExamiantionDetail")
);
const LazyUTME = React.lazy(() => import("./components/Education/UTME"));
const LazyUTMED = React.lazy(() => import("./components/Education/UTMEDetail"));

//Lazy Routing for Finance Mega Dropdown
const LazyBusiness = React.lazy(() => import("./components/Finance/Business"));
const LazyBusinessD = React.lazy(() =>
  import("./components/Finance/BusinessDetail")
);
const LazyLoan = React.lazy(() => import("./components/Finance/Loan"));
const LazyLoanD = React.lazy(() => import("./components/Finance/LoanDetail"));

//Lazy Routing for Music Mega Dropdown
const LazyAfroMusic = React.lazy(() => import("./components/Music/AfroMusic"));
const LazyAfroMusicD = React.lazy(() =>
  import("./components/Music/AfroMusicDetail")
);
const LazyGospel = React.lazy(() => import("./components/Music/Gospel"));
const LazyGospelD = React.lazy(() => import("./components/Music/GospelDetail"));
const LazyBlues = React.lazy(() => import("./components/Music/Blues"));
const LazyBluesD = React.lazy(() => import("./components/Music/BluesDetail"));
const LazyForeignMusic = React.lazy(() =>
  import("./components/Music/ForeignMusic")
);
const LazyForeignMusicD = React.lazy(() =>
  import("./components/Music/ForeignMusicDetail")
);
const LazyHighlife = React.lazy(() => import("./components/Music/Highlife"));
const LazyHighlifeD = React.lazy(() =>
  import("./components/Music/HighlifeDetail")
);
const LazyMixtape = React.lazy(() => import("./components/Music/Mixtape"));
const LazyMixtapeD = React.lazy(() =>
  import("./components/Music/MixtapeDetail")
);

//Lazy Routing for Video Mega Dropdown
const LazyMusicVideo = React.lazy(() =>
  import("./components/Videos/MusicVideo")
);
const LazyMusicVideoD = React.lazy(() =>
  import("./components/Videos/MusicVideoDetail")
);
const LazyComedyVideo = React.lazy(() =>
  import("./components/Videos/ComedyVideo")
);
const LazyComedyVideoD = React.lazy(() =>
  import("./components/Videos/ComedyVideoDetail")
);
const LazyMovies = React.lazy(() => import("./components/Videos/Movies"));
const LazyMoviesD = React.lazy(() => import("./components/Videos/MovieDetail"));
const LazySeries = React.lazy(() => import("./components/Videos/Series"));
const LazySeriesD = React.lazy(() =>
  import("./components/Videos/SeriesDetail")
);
const LazyKDrama = React.lazy(() => import("./components/Videos/KDrama"));
const LazyKDramaD = React.lazy(() =>
  import("./components/Videos/KDramaDetail")
);
const LazyWrestling = React.lazy(() => import("./components/Videos/Wrestling"));
const LazyWrestlingD = React.lazy(() =>
  import("./components/Videos/WrestlingDetail")
);
const LazyForeignMusicVideo = React.lazy(() =>
  import("./components/Videos/ForeignMusicVideo")
);
const LazyForeignMusicVideoD = React.lazy(() =>
  import("./components/Videos/ForeignMusicVideoDetail")
);

function App() {
  //for starting at the top when route changes
  const location = useLocation();
  useEffect(() => {
    animateScroll.scrollToTop({
      duration: 0,
    });
  }, [location.pathname]);

  return (
    <div className="bg-slate-900">
      {/* <Preloader /> */}
      <Navbar />
      <Routes>
        {/* Home Route  */}
        <Route
          path="/"
          element={
            <React.Suspense fallback={<Preloader />}>
              <LazyHome />
            </React.Suspense>
          }
        />
        {/* Routes for General Section  */}
        <Route
          path="/general"
          element={
            <React.Suspense fallback={<Preloader />}>
              <LazyGeneral />
            </React.Suspense>
          }
        />
        <Route
          path="/general/:id"
          element={
            <React.Suspense fallback={<Preloader />}>
              <LazyGeneralD />
            </React.Suspense>
          }
        />
        <Route
          path="/gambling"
          element={
            <React.Suspense fallback={<Preloader />}>
              <LazyGambling />
            </React.Suspense>
          }
        />
        <Route
          path="/gambling/:id"
          element={
            <React.Suspense fallback={<Preloader />}>
              <LazyGamblingD />
            </React.Suspense>
          }
        />
        <Route
          path="/religion"
          element={
            <React.Suspense fallback={<Preloader />}>
              <LazyReligion />
            </React.Suspense>
          }
        />
        <Route
          path="/religion/:id"
          element={
            <React.Suspense fallback={<Preloader />}>
              <LazyReligionD />
            </React.Suspense>
          }
        />
        <Route
          path="/poll-debate"
          element={
            <React.Suspense fallback={<Preloader />}>
              <LazyPollDebate />
            </React.Suspense>
          }
        />
        <Route
          path="/poll-debate/:id"
          element={
            <React.Suspense fallback={<Preloader />}>
              <LazyPollDebateD />
            </React.Suspense>
          }
        />
        <Route
          path="/jobs"
          element={
            <React.Suspense fallback={<Preloader />}>
              <LazyJobs />
            </React.Suspense>
          }
        />
        <Route
          path="/jobs/:id"
          element={
            <React.Suspense fallback={<Preloader />}>
              <LazyJobsD />
            </React.Suspense>
          }
        />

        {/*End of Routes for General Section  */}

        {/* Routes for News Section  */}
        <Route
          path="/bbnaija"
          element={
            <React.Suspense fallback={<Preloader />}>
              <LazyBBNaija />
            </React.Suspense>
          }
        />
        <Route
          path="/bbnaija/:id"
          element={
            <React.Suspense fallback={<Preloader />}>
              <LazyBBNaijaD />
            </React.Suspense>
          }
        />
        <Route
          path="/crime"
          element={
            <React.Suspense fallback={<Preloader />}>
              <LazyCrime />
            </React.Suspense>
          }
        />
        <Route
          path="/crime/:id"
          element={
            <React.Suspense fallback={<Preloader />}>
              <LazyCrimeD />
            </React.Suspense>
          }
        />
        <Route
          path="/education"
          element={
            <React.Suspense fallback={<Preloader />}>
              <LazyEduca />
            </React.Suspense>
          }
        />
        <Route
          path="/education/:id"
          element={
            <React.Suspense fallback={<Preloader />}>
              <LazyEducaD />
            </React.Suspense>
          }
        />
        <Route
          path="/politics"
          element={
            <React.Suspense fallback={<Preloader />}>
              <LazyPolitics />
            </React.Suspense>
          }
        />
        <Route
          path="/politics/:id"
          element={
            <React.Suspense fallback={<Preloader />}>
              <LazyPoliticsD />
            </React.Suspense>
          }
        />
        <Route
          path="/celebrity"
          element={
            <React.Suspense fallback={<Preloader />}>
              <LazyCelebrity />
            </React.Suspense>
          }
        />
        <Route
          path="/celebrity/:id"
          element={
            <React.Suspense fallback={<Preloader />}>
              <LazyCelebrityD />
            </React.Suspense>
          }
        />
        <Route
          path="/sports"
          element={
            <React.Suspense fallback={<Preloader />}>
              <LazySports />
            </React.Suspense>
          }
        />
        <Route
          path="/sports/:id"
          element={
            <React.Suspense fallback={<Preloader />}>
              <LazySportsD />
            </React.Suspense>
          }
        />
        <Route
          path="/social-media"
          element={
            <React.Suspense fallback={<Preloader />}>
              <LazySocialMedia />
            </React.Suspense>
          }
        />
        <Route
          path="/social-media/:id"
          element={
            <React.Suspense fallback={<Preloader />}>
              <LazySocialMediaD />
            </React.Suspense>
          }
        />
        <Route
          path="/governance"
          element={
            <React.Suspense fallback={<Preloader />}>
              <LazyGovernance />
            </React.Suspense>
          }
        />
        <Route
          path="/governance/:id"
          element={
            <React.Suspense fallback={<Preloader />}>
              <LazyGovernanceD />
            </React.Suspense>
          }
        />
        <Route
          path="/technology"
          element={
            <React.Suspense fallback={<Preloader />}>
              <LazyTech />
            </React.Suspense>
          }
        />
        <Route
          path="/technology/:id"
          element={
            <React.Suspense fallback={<Preloader />}>
              <LazyTechD />
            </React.Suspense>
          }
        />
        <Route
          path="/world"
          element={
            <React.Suspense fallback={<Preloader />}>
              <LazyWorld />
            </React.Suspense>
          }
        />
        <Route
          path="/world/:id"
          element={
            <React.Suspense fallback={<Preloader />}>
              <LazyWorldD />
            </React.Suspense>
          }
        />
        {/*End of Routes for News Section  */}

        {/*Routes for Technology Section  */}
        <Route
          path="/generalfbt"
          element={
            <React.Suspense fallback={<Preloader />}>
              <LazyGeneralFBT />
            </React.Suspense>
          }
        />
        <Route
          path="/generalfbt/:id"
          element={
            <React.Suspense fallback={<Preloader />}>
              <LazyGeneralFBTD />
            </React.Suspense>
          }
        />
        <Route
          path="/computer"
          element={
            <React.Suspense fallback={<Preloader />}>
              <LazyComputer />
            </React.Suspense>
          }
        />
        <Route
          path="/computer/:id"
          element={
            <React.Suspense fallback={<Preloader />}>
              <LazyComputerD />
            </React.Suspense>
          }
        />
        <Route
          path="/mobile"
          element={
            <React.Suspense fallback={<Preloader />}>
              <LazyMobile />
            </React.Suspense>
          }
        />
        <Route
          path="/mobile/:id"
          element={
            <React.Suspense fallback={<Preloader />}>
              <LazyMobileD />
            </React.Suspense>
          }
        />
        {/*End of Routes for Technology Section  */}

        {/* Routes for Life Section  */}
        <Route
          path="/health"
          element={
            <React.Suspense fallback={<Preloader />}>
              <LazyHealth />
            </React.Suspense>
          }
        />
        <Route
          path="/health/:id"
          element={
            <React.Suspense fallback={<Preloader />}>
              <LazyHealthD />
            </React.Suspense>
          }
        />
        <Route
          path="/romance"
          element={
            <React.Suspense fallback={<Preloader />}>
              <LazyRomance />
            </React.Suspense>
          }
        />
        <Route
          path="/romance/:id"
          element={
            <React.Suspense fallback={<Preloader />}>
              <LazyRomanceD />
            </React.Suspense>
          }
        />
        <Route
          path="/lifestyle"
          element={
            <React.Suspense fallback={<Preloader />}>
              <LazyLifestyle />
            </React.Suspense>
          }
        />
        <Route
          path="/lifestyle/:id"
          element={
            <React.Suspense fallback={<Preloader />}>
              <LazyLifestyleD />
            </React.Suspense>
          }
        />
        <Route
          path="/fashion"
          element={
            <React.Suspense fallback={<Preloader />}>
              <LazyFashion />
            </React.Suspense>
          }
        />
        <Route
          path="/fashion/:id"
          element={
            <React.Suspense fallback={<Preloader />}>
              <LazyFashionD />
            </React.Suspense>
          }
        />
        <Route
          path="/sexuality"
          element={
            <React.Suspense fallback={<Preloader />}>
              <LazySexuality />
            </React.Suspense>
          }
        />
        <Route
          path="/sexuality/:id"
          element={
            <React.Suspense fallback={<Preloader />}>
              <LazySexualityD />
            </React.Suspense>
          }
        />
        {/*End of Routes for Life Section  */}

        {/* Routes for Education Section  */}
        <Route
          path="/examination"
          element={
            <React.Suspense fallback={<Preloader />}>
              <LazyExamination />
            </React.Suspense>
          }
        />
        <Route
          path="/examination/:id"
          element={
            <React.Suspense fallback={<Preloader />}>
              <LazyExaminationD />
            </React.Suspense>
          }
        />
        <Route
          path="/utme"
          element={
            <React.Suspense fallback={<Preloader />}>
              <LazyUTME />
            </React.Suspense>
          }
        />
        <Route
          path="/utme/:id"
          element={
            <React.Suspense fallback={<Preloader />}>
              <LazyUTMED />
            </React.Suspense>
          }
        />
        {/*End of Routes for Eduaction Section  */}

        {/* Routes for Finance Section  */}
        <Route
          path="/business"
          element={
            <React.Suspense fallback={<Preloader />}>
              <LazyBusiness />
            </React.Suspense>
          }
        />
        <Route
          path="/business/:id"
          element={
            <React.Suspense fallback={<Preloader />}>
              <LazyBusinessD />
            </React.Suspense>
          }
        />
        <Route
          path="/loan"
          element={
            <React.Suspense fallback={<Preloader />}>
              <LazyLoan />
            </React.Suspense>
          }
        />
        <Route
          path="/loan/:id"
          element={
            <React.Suspense fallback={<Preloader />}>
              <LazyLoanD />
            </React.Suspense>
          }
        />
        {/*End of Routes for Finance Section  */}

        {/* Routes for Music Section  */}
        <Route
          path="/afromusic"
          element={
            <React.Suspense fallback={<Preloader />}>
              <LazyAfroMusic />
            </React.Suspense>
          }
        />
        <Route
          path="/afromusic/:id"
          element={
            <React.Suspense fallback={<Preloader />}>
              <LazyAfroMusicD />
            </React.Suspense>
          }
        />
        <Route
          path="/gospel"
          element={
            <React.Suspense fallback={<Preloader />}>
              <LazyGospel />
            </React.Suspense>
          }
        />
        <Route
          path="/gospel/:id"
          element={
            <React.Suspense fallback={<Preloader />}>
              <LazyGospelD />
            </React.Suspense>
          }
        />
        <Route
          path="/blues"
          element={
            <React.Suspense fallback={<Preloader />}>
              <LazyBlues />
            </React.Suspense>
          }
        />
        <Route
          path="/blues/:id"
          element={
            <React.Suspense fallback={<Preloader />}>
              <LazyBluesD />
            </React.Suspense>
          }
        />
        <Route
          path="/foreignmusic"
          element={
            <React.Suspense fallback={<Preloader />}>
              <LazyForeignMusic />
            </React.Suspense>
          }
        />
        <Route
          path="/foreignmusic/:id"
          element={
            <React.Suspense fallback={<Preloader />}>
              <LazyForeignMusicD />
            </React.Suspense>
          }
        />
        <Route
          path="/highlife"
          element={
            <React.Suspense fallback={<Preloader />}>
              <LazyHighlife />
            </React.Suspense>
          }
        />
        <Route
          path="/highlife/:id"
          element={
            <React.Suspense fallback={<Preloader />}>
              <LazyHighlifeD />
            </React.Suspense>
          }
        />
        <Route
          path="/mixtape"
          element={
            <React.Suspense fallback={<Preloader />}>
              <LazyMixtape />
            </React.Suspense>
          }
        />
        <Route
          path="/mixtape/:id"
          element={
            <React.Suspense fallback={<Preloader />}>
              <LazyMixtapeD />
            </React.Suspense>
          }
        />
        {/*End of Routes for Music Section  */}

        {/*Routes for Video Section  */}
        <Route
          path="/musicvideos"
          element={
            <React.Suspense fallback={<Preloader />}>
              <LazyMusicVideo />
            </React.Suspense>
          }
        />
        <Route
          path="/musicvideos/:id"
          element={
            <React.Suspense fallback={<Preloader />}>
              <LazyMusicVideoD />
            </React.Suspense>
          }
        />
        <Route
          path="/comedyvideos"
          element={
            <React.Suspense fallback={<Preloader />}>
              <LazyComedyVideo />
            </React.Suspense>
          }
        />
        <Route
          path="/comedyvideos/:id"
          element={
            <React.Suspense fallback={<Preloader />}>
              <LazyComedyVideoD />
            </React.Suspense>
          }
        />
        <Route
          path="/movies"
          element={
            <React.Suspense fallback={<Preloader />}>
              <LazyMovies />
            </React.Suspense>
          }
        />
        <Route
          path="/movies/:id"
          element={
            <React.Suspense fallback={<Preloader />}>
              <LazyMoviesD />
            </React.Suspense>
          }
        />
        <Route
          path="/series"
          element={
            <React.Suspense fallback={<Preloader />}>
              <LazySeries />
            </React.Suspense>
          }
        />
        <Route
          path="/series/:id"
          element={
            <React.Suspense fallback={<Preloader />}>
              <LazySeriesD />
            </React.Suspense>
          }
        />
        <Route
          path="/kdrama"
          element={
            <React.Suspense fallback={<Preloader />}>
              <LazyKDrama />
            </React.Suspense>
          }
        />
        <Route
          path="/kdrama/:id"
          element={
            <React.Suspense fallback={<Preloader />}>
              <LazyKDramaD />
            </React.Suspense>
          }
        />
        <Route
          path="/wrestling"
          element={
            <React.Suspense fallback={<Preloader />}>
              <LazyWrestling />
            </React.Suspense>
          }
        />
        <Route
          path="/wrestling/:id"
          element={
            <React.Suspense fallback={<Preloader />}>
              <LazyWrestlingD />
            </React.Suspense>
          }
        />
        <Route
          path="/foreignmusic-videos"
          element={
            <React.Suspense fallback={<Preloader />}>
              <LazyForeignMusicVideo />
            </React.Suspense>
          }
        />
        <Route
          path="/foreignmusic-videos/:id"
          element={
            <React.Suspense fallback={<Preloader />}>
              <LazyForeignMusicVideoD />
            </React.Suspense>
          }
        />
        {/*End of Routes for Video Section  */}

        {/* Route for latest news  */}
        <Route
          path="/latest/:id"
          element={
            <React.Suspense fallback={<Preloader />}>
              <LazyLatestD />
            </React.Suspense>
          }
        />
        {/* Route for trending news  */}
        <Route
          path="/trending/:id"
          element={
            <React.Suspense fallback={<Preloader />}>
              <LazyTrending />
            </React.Suspense>
          }
        />
        {/* Route for unfound page  */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
