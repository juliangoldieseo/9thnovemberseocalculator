import React from 'react';
import { useForm } from 'react-hook-form';
import CalculatorLayout from '../../components/CalculatorLayout';

interface SeoKeywordProfitInputs {
  keyword: string;
  searchVolume: number;
  averagePosition: number;
  clickThroughRate: number;
  conversionRate: number;
  averageOrderValue: number;
  competitionLevel: string;
  costPerClick: number;
}

const SeoKeywordProfitCalculator = () => {
  const { register, watch } = useForm<SeoKeywordProfitInputs>({
    defaultValues: {
      keyword: '',
      searchVolume: 1000,
      averagePosition: 5,
      clickThroughRate: 3.5,
      conversionRate: 2,
      averageOrderValue: 100,
      competitionLevel: 'medium',
      costPerClick: 2.5
    }
  });

  const values = watch();

  // Calculate monthly organic clicks
  const monthlyClicks = Math.round(values.searchVolume * (values.clickThroughRate / 100));

  // Calculate monthly conversions
  const monthlyConversions = Math.round(monthlyClicks * (values.conversionRate / 100));

  // Calculate monthly revenue
  const monthlyRevenue = monthlyConversions * values.averageOrderValue;

  // Calculate PPC equivalent savings
  const ppcSavings = monthlyClicks * values.costPerClick;

  // Calculate competition factor
  const competitionMultiplier = {
    low: 0.8,
    medium: 1,
    high: 1.2
  }[values.competitionLevel] || 1;

  // Calculate ROI potential
  const roiPotential = ((monthlyRevenue + ppcSavings) * competitionMultiplier);

  return (
    <CalculatorLayout
      title="SEO Keyword Profit Calculator | Calculate Keyword ROI & Revenue"
      description="Use our SEO keyword profit calculator to estimate potential revenue and ROI from your target keywords. Make data-driven keyword decisions."
    >
      <h1 className="text-3xl font-bold text-gray-900 mb-6">SEO Keyword Profit Calculator: Measure Your Keyword Revenue Potential</h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Enter Your SEO Keyword Metrics</h2>
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Target Keyword
              </label>
              <input
                type="text"
                {...register('keyword')}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="Enter your target keyword"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Monthly Search Volume
              </label>
              <input
                type="number"
                {...register('searchVolume')}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Average Position
              </label>
              <input
                type="number"
                {...register('averagePosition')}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Click-Through Rate (%)
              </label>
              <input
                type="number"
                step="0.1"
                {...register('clickThroughRate')}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Conversion Rate (%)
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
                Average Order Value ($)
              </label>
              <input
                type="number"
                {...register('averageOrderValue')}
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
                Average Cost Per Click ($)
              </label>
              <input
                type="number"
                step="0.01"
                {...register('costPerClick')}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
          </form>
        </div>

        <div className="bg-blue-50 p-6 rounded-lg">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Your SEO Keyword Profit Analysis</h2>
          <div className="space-y-6">
            <div>
              <p className="text-sm text-gray-600">Monthly Organic Clicks</p>
              <p className="text-3xl font-bold text-blue-600">
                {monthlyClicks.toLocaleString()}
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-600">Monthly Conversions</p>
              <p className="text-3xl font-bold text-green-600">
                {monthlyConversions.toLocaleString()}
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-600">Monthly Revenue Potential</p>
              <p className="text-3xl font-bold text-purple-600">
                ${monthlyRevenue.toLocaleString()}
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-600">PPC Cost Savings</p>
              <p className="text-3xl font-bold text-indigo-600">
                ${ppcSavings.toLocaleString()}
              </p>
            </div>

            <div className="pt-4 border-t border-gray-200">
              <p className="text-sm text-gray-600">Total Monthly Profit Potential</p>
              <p className="text-4xl font-bold text-emerald-600">
                ${roiPotential.toLocaleString()}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 prose max-w-none">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Use the SEO Keyword Profit Calculator</h2>
        
        <p>
          The SEO keyword profit calculator is an essential tool for measuring the potential revenue and ROI of your target keywords. By analyzing key metrics like search volume, conversion rates, and competition levels, this calculator helps you identify the most profitable keywords for your SEO strategy.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-3">Understanding SEO Keyword Profit Metrics</h3>
        
        <p>
          To maximize your keyword profitability, it's crucial to understand the key metrics that influence your SEO keyword ROI:
        </p>

        <ul className="list-disc pl-6 mb-6">
          <li><strong>Search Volume:</strong> The number of monthly searches for your target keyword</li>
          <li><strong>Click-Through Rate:</strong> The percentage of searchers who click on your result</li>
          <li><strong>Conversion Rate:</strong> The percentage of visitors who complete a desired action</li>
          <li><strong>Average Order Value:</strong> The typical purchase amount from converting visitors</li>
          <li><strong>Competition Level:</strong> The difficulty of ranking for the keyword</li>
        </ul>

        <h3 className="text-xl font-semibold mb-3">Maximizing Your Keyword ROI</h3>

        <p>
          To optimize your keyword profitability:
        </p>

        <ul className="list-disc pl-6 mb-6">
          <li>Focus on keywords with clear commercial intent</li>
          <li>Balance search volume with competition level</li>
          <li>Optimize your content for higher click-through rates</li>
          <li>Improve your conversion funnel for better ROI</li>
          <li>Monitor and adjust your keyword strategy based on performance</li>
        </ul>

        <h3 className="text-xl font-semibold mb-3">Interpreting Calculator Results</h3>

        <p>
          The calculator provides several key insights:
        </p>

        <ul className="list-disc pl-6 mb-6">
          <li><strong>Monthly Organic Clicks:</strong> Expected traffic from ranking for the keyword</li>
          <li><strong>Monthly Conversions:</strong> Projected number of converting visitors</li>
          <li><strong>Revenue Potential:</strong> Estimated monthly revenue from the keyword</li>
          <li><strong>PPC Savings:</strong> Cost equivalent if using paid search</li>
          <li><strong>Total Profit Potential:</strong> Combined value of revenue and PPC savings</li>
        </ul>

        <h3 className="text-xl font-semibold mb-3">Long-term Keyword Profitability</h3>

        <p>
          Consider these factors for sustainable keyword profitability:
        </p>

        <ul className="list-disc pl-6 mb-6">
          <li>Seasonal search volume variations</li>
          <li>Market trends and keyword relevance</li>
          <li>Competition level changes</li>
          <li>Industry-specific conversion patterns</li>
          <li>Customer lifetime value impact</li>
        </ul>

        <div className="bg-blue-50 p-6 rounded-lg mt-8">
          <h3 className="text-xl font-semibold mb-3">Optimize Your Keyword Profitability</h3>
          <p>
            Want to maximize your keyword ROI? Let's create a strategy to target the most profitable keywords for your business. 
            <a href="https://go.juliangoldie.com/strategy-session" className="text-blue-600 hover:text-blue-800 font-medium ml-2">
              Book your free keyword profit optimization session
            </a>
          </p>
        </div>
      </div>
    </CalculatorLayout>
  );
};

export default SeoKeywordProfitCalculator;