import React from 'react';
import PetGroomingPromo from '../components/PetGroomingPromo';
import WelcomeBanner from '../components/WelcomeBanner';
import GroomingCourseInfo from '../components/GroomingCourseInfo';
import OurProcesse from '../components/OurProcesse';
import CourseModules from '../components/CourseModules';
import CourseMethodology from '../components/CourseMethodology';
import CourseOfferings from '../components/CourseOfferings';
import Happygraduates from '../components/Happygraduates';
import FaqPetWelcome from '../components/FaqPetWelcome';
import EarningOpportunityBanner from '../components/EarningOpportunityBanner';
import CertificatePerson from '../components/CertificatePerson';
import CareerOpportunitySection from '../components/CareerOpportunitySection';

const Home = () => {
    return (
        <div>
          <PetGroomingPromo />
          <WelcomeBanner />
          <GroomingCourseInfo />
          <OurProcesse />
          <CourseModules />
          <CourseMethodology />
          <CourseOfferings />
          <CareerOpportunitySection />
          <Happygraduates />
          <FaqPetWelcome />
          <CertificatePerson />
          <EarningOpportunityBanner />
        </div>
    );
};

export default Home;