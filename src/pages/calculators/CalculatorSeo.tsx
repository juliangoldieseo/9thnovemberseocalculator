import React from 'react';
import { useForm } from 'react-hook-form';
import CalculatorLayout from '../../components/CalculatorLayout';

interface CalculatorSeoInputs {
  calculatorType: string;
  monthlyVisitors: number;
  conversionRate: number;
  competitionLevel: string;
  calculatorFeatures: string[];
  targetKeywords: number;
  industryType: string;
}

const CalculatorSeo = () => {
  const { register, watch } = useForm<CalculatorSeoInputs>({
    defaultValues: {
      calculatorType: 'basic',
      monthlyVisitors: 1000,
      conversionRate: 2,
      competitionLevel: 'medium',
      calculatorFeatures: ['results', 'sharing'],
      targetKeywords: 10,
      industryType: 'finance'
    }
  });

  const values = watch();

  // Calculate base score
  const baseScore = {
    basic: 60,
    interactive: 75,
    advanced: 90
  }[values.calculatorType] || 60;

  // Calculate feature score
  const featureScore = values.calculatorFeatures.length * 5;

  // Calculate competition multiplier
  const competitionMultiplier = {
    low: 1.2,
    medium: 1.0,
    high: 0.8
  }[values.competitionLevel] || 1;

  // Calculate industry multiplier
  const industryMultiplier = {
    finance: 1.3,
    health: 1.2,
    ecommerce: 1.1,
    education: 1.0,
    tech: 1.2
  }[values.industryType] || 1.0;

  // Calculate final SEO score
  const seoScore = Math.min(100, Math.round((baseScore + featureScore) * competitionMultiplier * industryMultiplier));

  // Calculate potential monthly traffic
  const potentialTraffic = Math.round(values.monthlyVisitors * (seoScore / 100));

  // Calculate potential conversions
  const potentialConversions = Math.round(potentialTraffic * (values.conversionRate / 100));

  return (
    <CalculatorLayout
      title="Calculator SEO | Optimize Your Calculator for Search Engines"
      description="Use our Calculator SEO tool to optimize your online calculators for search engines. Get insights to improve your calculator's SEO performance."
    >
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Calculator SEO: Optimize Your Online Calculator for Search Success</h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Enter Your Calculator SEO Details</h2>
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Calculator Type
              </label>
              <select
                {...register('calculatorType')}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              >
                <option value="basic">Basic Calculator</option>
                <option value="interactive">Interactive Calculator</option>
                <option value="advanced">Advanced Calculator</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Current Monthly Visitors
              </label>
              <input
                type="number"
                {...register('monthlyVisitors')}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Calculator Conversion Rate (%)
              </label>
              <input
                type="number"
                step="0.1"
                {...register('conversionRate')}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Competition Level
              </label>
              <select
                {...register('competitionLevel')}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              >
                <option value="low">Low Competition</option>
                <option value="medium">Medium Competition</option>
                <option value="high">High Competition</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Industry Type
              </label>
              <select
                {...register('industryType')}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              >
                <option value="finance">Finance</option>
                <option value="health">Health</option>
                <option value="ecommerce">E-commerce</option>
                <option value="education">Education</option>
                <option value="tech">Technology</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Target Keywords Count
              </label>
              <input
                type="number"
                {...register('targetKeywords')}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
          </form>
        </div>

        <div className="bg-blue-50 p-6 rounded-lg">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Your Calculator SEO Analysis</h2>
          <div className="space-y-6">
            <div>
              <p className="text-sm text-gray-600">Calculator SEO Score</p>
              <p className="text-4xl font-bold text-blue-600">
                {seoScore}/100
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-600">Potential Monthly Traffic</p>
              <p className="text-3xl font-bold text-green-600">
                {potentialTraffic.toLocaleString()} visitors
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-600">Potential Monthly Conversions</p>
              <p className="text-3xl font-bold text-purple-600">
                {potentialConversions.toLocaleString()} conversions
              </p>
            </div>

            <div className="pt-4 border-t border-gray-200">
              <p className="text-sm text-gray-600">Industry SEO Potential</p>
              <p className="text-3xl font-bold text-indigo-600">
                {(industryMultiplier * 100).toFixed(0)}%
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 prose max-w-none">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Use the Calculator SEO Tool</h2>
        
        <p>
          Our Calculator SEO tool helps you optimize your online calculators for maximum search engine visibility and user engagement. Whether you're creating a new calculator or improving an existing one, this tool provides valuable insights for calculator SEO success.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-3">Understanding Calculator SEO Fundamentals</h3>
        
        <p>
          Calculator SEO requires a unique approach compared to traditional content optimization. Online calculators serve a specific user intent and need to be optimized accordingly to achieve maximum search visibility and user engagement.
        </p>

        <h3 className="text-xl font-semibold mb-3">Key Calculator SEO Elements</h3>
        
        <ul className="list-disc pl-6 mb-6">
          <li><strong>Calculator Type Selection:</strong> Different calculator types require different SEO approaches</li>
          <li><strong>User Intent Optimization:</strong> Align your calculator with search intent</li>
          <li><strong>Technical SEO Requirements:</strong> Ensure proper indexing and functionality</li>
          <li><strong>Content Integration:</strong> Support your calculator with relevant content</li>
        </ul>

        <h3 className="text-xl font-semibold mb-3">Calculator SEO Best Practices</h3>

        <p>
          To maximize your calculator's search visibility:
        </p>

        <ul className="list-disc pl-6 mb-6">
          <li>Use clear, descriptive titles that include "calculator"</li>
          <li>Provide comprehensive instructions and explanations</li>
          <li>Implement proper schema markup for calculators</li>
          <li>Ensure mobile responsiveness and fast loading times</li>
          <li>Include relevant internal and external links</li>
        </ul>

        <h3 className="text-xl font-semibold mb-3">Industry-Specific Calculator SEO</h3>

        <p>
          Different industries require different calculator SEO approaches:
        </p>

        <ul className="list-disc pl-6 mb-6">
          <li><strong>Finance Calculators:</strong> Focus on accuracy and trust signals</li>
          <li><strong>Health Calculators:</strong> Emphasize medical accuracy and disclaimers</li>
          <li><strong>E-commerce Calculators:</strong> Integrate with product pages</li>
          <li><strong>Education Calculators:</strong> Include explanatory content</li>
          <li><strong>Tech Calculators:</strong> Highlight technical accuracy</li>
        </ul>

        <h3 className="text-xl font-semibold mb-3">Calculator SEO Success Metrics</h3>

        <p>
          Track these key performance indicators:
        </p>

        <ul className="list-disc pl-6 mb-6">
          <li>Calculator page organic traffic</li>
          <li>User engagement metrics</li>
          <li>Calculator usage rates</li>
          <li>Conversion rates from calculator users</li>
          <li>Calculator result sharing rates</li>
        </ul>

        <div className="bg-blue-50 p-6 rounded-lg mt-8">
          <h3 className="text-xl font-semibold mb-3">Optimize Your Calculator SEO</h3>
          <p>
            Want to maximize your calculator's search visibility? Let's create a customized Calculator SEO strategy. 
            <a href="https://go.juliangoldie.com/strategy-session" className="text-blue-600 hover:text-blue-800 font-medium ml-2">
              Book your free Calculator SEO consultation
            </a>
          </p>
        </div>
      </div>
    </CalculatorLayout>
  );
};

export default CalculatorSeo;