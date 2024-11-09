import React from 'react';
import { Link } from 'react-router-dom';
import { Calculator, TrendingUp, DollarSign, BarChart } from 'lucide-react';

const calculatorCategories = [
  {
    title: 'Core SEO Calculators',
    calculators: [
      { name: 'SEO Calculator', path: '/seo-calculator', icon: Calculator },
      { name: 'SEO ROI Calculator', path: '/seo-roi-calculator', icon: TrendingUp },
      { name: 'SEO Cost Calculator', path: '/seo-cost-calculator', icon: DollarSign },
      { name: 'SEO Budget Calculator', path: '/seo-budget-calculator', icon: BarChart },
    ],
  },
];

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Professional SEO Calculators
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Make data-driven SEO decisions with our comprehensive suite of calculators
            </p>
            <a
              href="https://go.juliangoldie.com/strategy-session"
              className="inline-block bg-green-500 hover:bg-green-600 px-8 py-4 rounded-lg text-lg font-semibold shadow-lg transform transition hover:scale-105"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book Your Free SEO Strategy Session
            </a>
          </div>
        </div>
      </section>

      {/* Featured Calculators */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Calculators</h2>
          
          {calculatorCategories.map((category, idx) => (
            <div key={idx} className="mb-16">
              <h3 className="text-2xl font-semibold mb-8">{category.title}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.calculators.map((calc, calcIdx) => (
                  <Link
                    key={calcIdx}
                    to={calc.path}
                    className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow"
                  >
                    <div className="flex items-center space-x-4">
                      <calc.icon className="h-8 w-8 text-blue-600" />
                      <span className="text-lg font-medium">{calc.name}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About Julian Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/julian-goldie.png"
                alt="Julian Goldie - SEO Expert"
                className="rounded-lg shadow-lg w-full max-w-md mx-auto"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Meet Julian Goldie</h2>
              <p className="text-lg text-gray-700 mb-6">
                As an SEO expert with years of experience, I've helped numerous businesses achieve their digital marketing goals. These calculators are built from my extensive experience in the field and are designed to help you make informed decisions about your SEO strategy.
              </p>
              <a
                href="https://go.juliangoldie.com/strategy-session"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book a Free Strategy Session
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;