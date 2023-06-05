import React, {Suspense} from "react";
import { Routes, Route } from 'react-router-dom';

import Header from './components/header/Header.component';
import Footer from './components/footer/Footer.component'
import HomePageComponent from "./pages/homePage/HomePage.component";
import CareerComponent from "./pages/career/Career.component";
import ContactUsComponent from "./pages/contactUs/ContactUs.component";
import TechnologyComponent from "./pages/tecnhologies/Technology.component";
import CasesStudyComponent from "./pages/casesStudy/CasesStudy.component";
import CasesComponent from "./pages/cases/Cases.component";

import ErrorBoundary from "./components/errorBoundary/ErrorBoundary.component";
import {GlobalStyle} from "./global.styles";
import Spinner from "./components/spinner/spinner.component";

function App() {
  return (
    <div className="app-wrapper">
      <GlobalStyle />
      <ErrorBoundary>
        <Suspense fallback={<Spinner top="true" />}>
          <Header />
          <Routes>
            <Route path='/' element={<HomePageComponent />} />
            <Route path='/career' element={<CareerComponent/>} />
            <Route path='/cases-study' element={<CasesStudyComponent />} />
            <Route path="/contact-us" element={<ContactUsComponent />} />
            <Route path="/technology" element={<TechnologyComponent />} />
            <Route path="/cases" element={<CasesComponent />} />
          </Routes>
          <Footer />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

export default App;
