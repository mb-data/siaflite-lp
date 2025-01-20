import { ChakraProvider } from "@chakra-ui/react"
import lpTheme from '../styles/theme';
import Navbar from "@/componets/NavBar";
import HeroSection from "@/componets/Hero";
import AboutUs from "@/componets/AboutUs";
import ExtraInfos from "@/componets/ExtraInfos";
import Footer from "@/componets/Footer";

function Home() {
  return (
    <ChakraProvider theme={lpTheme} cssVarsRoot={undefined}>
      <Navbar />
      <HeroSection />
      <AboutUs />
      <ExtraInfos />
      <Footer />
    </ChakraProvider>
  )
}

export default Home