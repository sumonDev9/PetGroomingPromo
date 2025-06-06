import React from 'react';
import PetGroomingPromo from '../components/PetGroomingPromo';
import WelcomeBanner from '../components/WelcomeBanner';
import GroomingCourseInfo from '../components/GroomingCourseInfo';
import OurProcesse from '../components/OurProcesse';
import CourseModules from '../components/CourseModules';
import CourseMethodology from '../components/CourseMethodology';
import Happygraduates from '../components/Happygraduates';
import FaqPetWelcome from '../components/FaqPetWelcome';
import EarningOpportunityBanner from '../components/EarningOpportunityBanner';

const Home = () => {
    return (
        <div>
          <PetGroomingPromo />
          <WelcomeBanner />
          <GroomingCourseInfo />
          <OurProcesse />
          <CourseModules />
          <CourseMethodology />
          <Happygraduates />
          <FaqPetWelcome />
          <EarningOpportunityBanner />
        </div>
    );
};

export default Home;