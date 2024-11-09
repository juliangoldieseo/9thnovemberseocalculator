import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calculator, Menu, X, ChevronDown } from 'lucide-react';

const calculatorCategories = [
  {
    name: 'Cost & Budget',
    links: [
      { name: 'SEO Cost Calculator', path: '/seo-cost-calculator' },
      { name: 'SEO Budget Calculator', path: '/seo-budget-calculator' },
      { name: 'Spanish SEO Budget Calculator', path: '/spanish-seo-budget-calculator' },
      { name: 'SEO Price Calculator', path: '/seo-price-calculator' },
      { name: 'Online SEO Cost Calculator', path: '/online-seo-cost-calculator' },
      { name: 'SEO Cost Calculator Tool', path: '/seo-cost-calculator-tool' },
    ]
  },
  {
    name: 'Traffic & Analytics',
    links: [
      { name: 'SEO Traffic Calculator', path: '/seo-traffic-calculator' },
      { name: 'SEO Rank Calculator', path: '/seo-rank-calculator' },
      { name: 'SEO Score Calculator', path: '/seo-score-calculator' },
      { name: 'Website SEO Calculator', path: '/website-seo-calculator' },
      { name: 'SEO Conversion Rate Calculator', path: '/seo-conversion-rate-calculator' },
    ]
  },
  {
    name: 'ROI & Value',
    links: [
      { name: 'SEO ROI Calculator', path: '/seo-roi-calculator' },
      { name: 'SaaS SEO ROI Calculator', path: '/saas-seo-roi-calculator' },
      { name: 'International SEO ROI Calculator', path: '/international-seo-roi-calculator' },
      { name: 'Forrester SEO Calculator', path: '/forrester-seo-calculator' },
      { name: 'SEO Value Calculator', path: '/seo-value-calculator' },
      { name: 'Share of Voice SEO Calculator', path: '/share-of-voice-seo-calculator' },
    ]
  },
  {
    name: 'Performance & Analysis',
    links: [
      { name: 'Calculator SEO', path: '/calculator-seo' },
      { name: 'Google SEO Calculator', path: '/google-seo-calculator' },
      { name: 'SEO Keyword Profit Calculator', path: '/seo-keyword-profit-calculator' },
      { name: 'LSI SEO Calculator', path: '/lsi-seo-calculator' },
    ]
  },
  {
    name: 'Strategy & Goals',
    links: [
      { name: 'SEO Goal Setting Calculator', path: '/seo-goal-setting-calculator' },
      { name: 'Google SEO Calculator', path: '/google-seo-calculator' },
    ]
  }
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openCategory, setOpenCategory] = useState<string | null>(null);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleCategory = (category: string) => {
    setOpenCategory(openCategory === category ? null : category);
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex items-center">
              <Calculator className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">SEO Calculators</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center">
            {calculatorCategories.map((category) => (
              <div key={category.name} className="relative group ml-8">
                <button
                  className="flex items-center text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
                  onClick={() => toggleCategory(category.name)}
                >
                  {category.name}
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                <div className="absolute z-10 left-0 mt-2 w-56 opacity-0 transform scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 ease-out">
                  <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                    <div className="relative grid gap-2 bg-white p-4">
                      {category.links.map((link) => (
                        <Link
                          key={link.path}
                          to={link.path}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-600 rounded-md"
                        >
                          {link.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <a
              href="https://go.juliangoldie.com/strategy-session"
              className="ml-8 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              Book Free Strategy Call
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {calculatorCategories.map((category) => (
              <div key={category.name}>
                <button
                  className="w-full flex items-center justify-between px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-100"
                  onClick={() => toggleCategory(category.name)}
                >
                  {category.name}
                  <ChevronDown className={`ml-1 h-4 w-4 transform transition-transform duration-200 ${openCategory === category.name ? 'rotate-180' : ''}`} />
                </button>
                {openCategory === category.name && (
                  <div className="pl-4 space-y-1">
                    {category.links.map((link) => (
                      <Link
                        key={link.path}
                        to={link.path}
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-100"
                        onClick={() => setIsOpen(false)}
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <a
              href="https://go.juliangoldie.com/strategy-session"
              className="block w-full text-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              Book Free Strategy Call
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;