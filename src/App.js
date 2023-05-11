import React from "react";
import { Routes, Route } from 'react-router-dom';

import Header from './components/header/Header.component';
import ErrorBoundary from "./components/errorBoundary/ErrorBoundary.component";

import HomePageComponent from "./pages/homePage/HomePage.component";
import CareerComponent from "./pages/career/Career.component";
import ContactUsComponent from "./pages/contactUs/ContactUs.component";
import TechnologyComponent from "./pages/tecnhology/Technology.component";
import CasesStudyComponent from "./pages/casesStudy/CasesStudy.component";
import CasesComponent from "./pages/cases/Cases.component";

import './App.css';

function App() {
  return (
    <div>
      <ErrorBoundary>
        <Header />
        <Routes>
          <Route path='/' element={<HomePageComponent />} />
          <Route path='/career' element={<CareerComponent/>} />
          <Route path='/cases-study' element={<CasesStudyComponent />} />
          <Route path="/contact-us" element={<ContactUsComponent />} />
          <Route path="/technology" element={<TechnologyComponent />} />
          <Route path="/cases" element={<CasesComponent />} />
        </Routes>
      </ErrorBoundary>
    </div>
  );
}

export default App;
