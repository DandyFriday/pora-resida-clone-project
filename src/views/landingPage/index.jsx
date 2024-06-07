import React from 'react'
//import "./landingPageStyle.css";
import Header from '../../shared/header';
import HeroSection from "../../components/heroSection/index";
import SubHeroSection from '../../components/subHeroSection';
import InfoCard from '../../components/infoCard';
import FeaturedProperties from '../../components/featuredProperties';
import Footer from '../../shared/footer';
import Discover from '../../components/discovery/index'
 import AppStores from '../../components/appStores';
// import FeaturedCard from '../../shared/featuredCard';
import OurExperience from '../../components/ourExperience';
import DreamHome from '../../components/dreamHome';
import Comprehensive from '../../components/comprehensive';
import OfficeSpace from '../../components/officeSpace';
import Property from '../../components/property';
import FindHome from "../../components/findHome";


const LandingPage = () => {
  return (
    <div>
      <Header /> 
      <HeroSection/> 
      <SubHeroSection />      
      <InfoCard/>
      {/* Our Experience */}
      <OurExperience />
      {/*Your Dream Home */}
      <DreamHome />
      {/* Comprehensive */}
      <Comprehensive />
      {/* Featured Properties and Card */}
      <FeaturedProperties /> 
      <Property />    
      <Discover /> 
      {/* Find Home */}
      <FindHome />
      <OfficeSpace />    
      <AppStores />                 
      
      <Footer />

    </div>
  )
}

export default LandingPage;