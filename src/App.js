import AnimationRevealPage from "./components/AnimationRevealPage.js";
import Hero from "./components/FullWidthWithImage.js";
import Features from "./components/ThreeColSimple.js";
import MainFeature from "./components/TwoColSingleFeatureWithStats.js";
import SliderCard from "./components/ThreeColSlider.js";
import Testimonial from "./components/TwoColumnWithImageAndProfilePictureReview.js";
import FAQ from "./components/SimpleWithSideImage.js";
import SubscribeNewsLetterForm from "./components/SimpleSubscribeNewsletter.js";
import Footer from "./components/MiniCenteredFooter.js";

function App() {
  return (
    <AnimationRevealPage>
      <Hero />
      <Features />
      <SliderCard />
      <MainFeature />
      <Testimonial textOnLeft={true} />
      <FAQ />
      <SubscribeNewsLetterForm />
      <Footer />
    </AnimationRevealPage>
  );
}

export default App;
