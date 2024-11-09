import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import SeoCalculator from './pages/calculators/SeoCalculator';
import SeoRoiCalculator from './pages/calculators/SeoRoiCalculator';
import InternationalSeoRoiCalculator from './pages/calculators/InternationalSeoRoiCalculator';
import SeoCostCalculator from './pages/calculators/SeoCostCalculator';
import SeoBudgetCalculator from './pages/calculators/SeoBudgetCalculator';
import SeoScoreCalculator from './pages/calculators/SeoScoreCalculator';
import SeoRankCalculator from './pages/calculators/SeoRankCalculator';
import WebsiteSeoCalculator from './pages/calculators/WebsiteSeoCalculator';
import SeoToolCalculator from './pages/calculators/SeoToolCalculator';
import SeoValueCalculator from './pages/calculators/SeoValueCalculator';
import SpanishSeoBudgetCalculator from './pages/calculators/SpanishSeoBudgetCalculator';
import SeoGoalSettingCalculator from './pages/calculators/SeoGoalSettingCalculator';
import ShareOfVoiceSeoCalculator from './pages/calculators/ShareOfVoiceSeoCalculator';
import GoogleSeoCalculator from './pages/calculators/GoogleSeoCalculator';
import SeoConversionRateCalculator from './pages/calculators/SeoConversionRateCalculator';
import SeoKeywordProfitCalculator from './pages/calculators/SeoKeywordProfitCalculator';
import CalculatorSeo from './pages/calculators/CalculatorSeo';
import LsiSeoCalculator from './pages/calculators/LsiSeoCalculator';
import SaasSeoRoiCalculator from './pages/calculators/SaasSeoRoiCalculator';
import SeoTrafficCalculator from './pages/calculators/SeoTrafficCalculator';
import NotFound from './components/NotFound';

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/seo-calculator" element={<SeoCalculator />} />
              <Route path="/seo-roi-calculator" element={<SeoRoiCalculator />} />
              <Route path="/international-seo-roi-calculator" element={<InternationalSeoRoiCalculator />} />
              <Route path="/seo-cost-calculator" element={<SeoCostCalculator />} />
              <Route path="/seo-budget-calculator" element={<SeoBudgetCalculator />} />
              <Route path="/seo-score-calculator" element={<SeoScoreCalculator />} />
              <Route path="/seo-rank-calculator" element={<SeoRankCalculator />} />
              <Route path="/website-seo-calculator" element={<WebsiteSeoCalculator />} />
              <Route path="/seo-cost-calculator-tool" element={<SeoToolCalculator />} />
              <Route path="/seo-value-calculator" element={<SeoValueCalculator />} />
              <Route path="/spanish-seo-budget-calculator" element={<SpanishSeoBudgetCalculator />} />
              <Route path="/seo-goal-setting-calculator" element={<SeoGoalSettingCalculator />} />
              <Route path="/share-of-voice-seo-calculator" element={<ShareOfVoiceSeoCalculator />} />
              <Route path="/google-seo-calculator" element={<GoogleSeoCalculator />} />
              <Route path="/seo-conversion-rate-calculator" element={<SeoConversionRateCalculator />} />
              <Route path="/seo-keyword-profit-calculator" element={<SeoKeywordProfitCalculator />} />
              <Route path="/calculator-seo" element={<CalculatorSeo />} />
              <Route path="/lsi-seo-calculator" element={<LsiSeoCalculator />} />
              <Route path="/saas-seo-roi-calculator" element={<SaasSeoRoiCalculator />} />
              <Route path="/seo-traffic-calculator" element={<SeoTrafficCalculator />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
};

export default App;