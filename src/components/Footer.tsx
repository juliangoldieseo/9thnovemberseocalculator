import React from 'react';
import { Link } from 'react-router-dom';
import { Calculator, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Calculator className="h-6 w-6" />
              <span className="font-bold text-xl">SEO Calculators</span>
            </div>
            <p className="text-gray-400">
              Professional SEO calculators by Julian Goldie to help you make data-driven decisions.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Popular Calculators</h3>
            <ul className="space-y-2">
              <li><Link to="/seo-calculator" className="text-gray-400 hover:text-white">SEO Calculator</Link></li>
              <li><Link to="/seo-roi-calculator" className="text-gray-400 hover:text-white">SEO ROI Calculator</Link></li>
              <li><Link to="/seo-cost-calculator" className="text-gray-400 hover:text-white">SEO Cost Calculator</Link></li>
              <li><Link to="/seo-budget-calculator" className="text-gray-400 hover:text-white">SEO Budget Calculator</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">More Tools</h3>
            <ul className="space-y-2">
              <li><Link to="/seo-score-calculator" className="text-gray-400 hover:text-white">SEO Score Calculator</Link></li>
              <li><Link to="/seo-rank-calculator" className="text-gray-400 hover:text-white">SEO Rank Calculator</Link></li>
              <li><Link to="/website-seo-calculator" className="text-gray-400 hover:text-white">Website SEO Calculator</Link></li>
              <li><Link to="/seo-value-calculator" className="text-gray-400 hover:text-white">SEO Value Calculator</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Connect</h3>
            <div className="space-y-4">
              <a
                href="https://go.juliangoldie.com/strategy-session"
                className="inline-block bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md font-semibold"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book Free Strategy Call
              </a>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <Twitter className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <Linkedin className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <Mail className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Julian Goldie SEO Calculators. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;