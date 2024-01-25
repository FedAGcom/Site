import React, {lazy, Suspense} from "react";
import { Routes, Route } from 'react-router-dom';

import Header from './components/header/Header.component';
import Footer from './components/footer/Footer.component'
import Spinner from "./components/spinner/spinner.component";

import ErrorBoundary from "./components/errorBoundary/ErrorBoundary.component";
import {GlobalStyle} from "./global.styles";
import ScrollToTop from "./ScrollToTop";

const HomePage = lazy(() => import('./pages/homePage/HomePage.component'));
const CareerPage = lazy(() => import('./pages/career/Career.component'));
const CasesPage = lazy(() => import('./pages/cases/Cases.component'));
const ContactUsPage = lazy(() => import('./pages/contactUs/ContactUs.component'));

function App() {
  return (
    <div>
      <GlobalStyle />
      <ErrorBoundary>
        <Suspense fallback={<Spinner top="true" />}>
          <Header />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/career' element={<CareerPage />} />
            <Route path="/contact-us" element={<ContactUsPage />} />
            <Route path="/cases/*" element={<CasesPage />} />
          </Routes>
          <Footer />
        </Suspense>
      </ErrorBoundary>
      <ScrollToTop />
    </div>
  );
}

export default App;
