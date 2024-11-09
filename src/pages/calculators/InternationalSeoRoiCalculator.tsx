import React from 'react';
import { useForm } from 'react-hook-form';
import CalculatorLayout from '../../components/CalculatorLayout';

interface InternationalSeoRoiInputs {
  monthlyInvestment: number;
  targetMarkets: string[];
  expectedVisitors: number;
  conversionRate: number;
  averageOrderValue: number;
  timeframe: number;
  localizationCosts: number;
  marketingStrategy: string;
}

const InternationalSeoRoiCalculator = () => {
  const { register, watch } = useForm<InternationalSeoRoiInputs>({
    defaultValues: {
      monthlyInvestment: 5000,
      targetMarkets: ['europe'],
      expectedVisitors: 20000,
      conversionRate: 2,
      averageOrderValue: 150,
      timeframe: 12,
      localizationCosts: 2000,
      marketingStrategy: 'standard'
    }
  });

  const values = watch();

  // Market multipliers for different regions
  const marketMultipliers = {
    europe: 1.2,
    asia: 1.4,
    northAmerica: 1.0,
    latinAmerica: 0.9,
    oceania: 1.1,
    africa: 0.8
  };

  // Calculate average market multiplier
  const averageMarketMultiplier = values.targetMarkets.reduce((acc, market) => {
    return acc + (marketMultipliers[market as keyof typeof marketMultipliers] || 1);
  }, 0) / values.targetMarkets.length;

  // Strategy multiplier
  const strategyMultiplier = {
    basic: 0.8,
    standard: 1.0,
    premium: 1.3,
    enterprise: 1.6
  }[values.marketingStrategy] || 1;

  // Calculate monthly revenue
  const monthlyRevenue = values.expectedVisitors * (values.conversionRate / 100) * values.averageOrderValue;
  
  // Calculate monthly costs (including localization)
  const monthlyCosts = values.monthlyInvestment + (values.localizationCosts / values.timeframe);
  
  // Calculate monthly profit
  const monthlyProfit = (monthlyRevenue * averageMarketMultiplier * strategyMultiplier) - monthlyCosts;
  
  // Calculate ROI percentage
  const monthlyRoi = ((monthlyProfit / monthlyCosts) * 100);
  
  // Calculate annual metrics
  const annualProfit = monthlyProfit * values.timeframe;
  const annualInvestment = monthlyCosts * values.timeframe;
  const annualRoi = ((annualProfit / annualInvestment) * 100);

  return (
    <CalculatorLayout
      title="International SEO ROI Calculator | Calculate Global SEO Returns"
      description="Use our international SEO ROI calculator to measure your global SEO investment returns. Get accurate ROI projections for international SEO campaigns."
    >
      <h1 className="text-3xl font-bold text-gray-900 mb-6">International SEO ROI Calculator: Measure Your Global SEO Returns</h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Enter Your International SEO ROI Metrics</h2>
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Monthly International SEO Investment ($)
              </label>
              <input
                type="number"
                {...register('monthlyInvestment')}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Target Markets
              </label>
              <select
                multiple
                {...register('targetMarkets')}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              >
                <option value="europe">Europe</option>
                <option value="asia">Asia</option>
                <option value="northAmerica">North America</option>
                <option value="latinAmerica">Latin America</option>
                <option value="oceania">Oceania</option>
                <option value="africa">Africa</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Expected Monthly International Visitors
              </label>
              <input
                type="number"
                {...register('expectedVisitors')}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                International Conversion Rate (%)
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
                Average International Order Value ($)
              </label>
              <input
                type="number"
                {...register('averageOrderValue')}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                ROI Timeframe (months)
              </label>
              <input
                type="number"
                {...register('timeframe')}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Monthly Localization Costs ($)
              </label>
              <input
                type="number"
                {...register('localizationCosts')}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                International Marketing Strategy
              </label>
              <select
                {...register('marketingStrategy')}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              >
                <option value="basic">Basic Global SEO</option>
                <option value="standard">Standard International SEO</option>
                <option value="premium">Premium Global Strategy</option>
                <option value="enterprise">Enterprise International SEO</option>
              </select>
            </div>
          </form>
        </div>

        <div className="bg-blue-50 p-6 rounded-lg">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Your International SEO ROI Analysis</h2>
          <div className="space-y-6">
            <div>
              <p className="text-sm text-gray-600">Monthly International SEO ROI</p>
              <p className="text-4xl font-bold text-blue-600">
                {monthlyRoi.toFixed(2)}%
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-600">Monthly International Profit</p>
              <p className="text-3xl font-bold text-green-600">
                ${monthlyProfit.toLocaleString()}
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-600">{values.timeframe}-Month International ROI</p>
              <p className="text-3xl font-bold text-purple-600">
                {annualRoi.toFixed(2)}%
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-600">Total International Profit ({values.timeframe} months)</p>
              <p className="text-3xl font-bold text-indigo-600">
                ${annualProfit.toLocaleString()}
              </p>
            </div>

            <div className="pt-4 border-t border-gray-200">
              <p className="text-sm text-gray-600">Market Potential Multiplier</p>
              <p className="text-3xl font-bold text-emerald-600">
                {averageMarketMultiplier.toFixed(2)}x
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 prose max-w-none">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Use Our International SEO ROI Calculator</h2>
        
        <p>
          Our international SEO ROI calculator is specifically designed to help businesses measure and project returns from their global SEO investments. This comprehensive tool considers various factors unique to international SEO campaigns, including market-specific multipliers, localization costs, and regional conversion patterns.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-3">Understanding International SEO ROI Calculations</h3>
        
        <p>
          The international SEO ROI calculator uses several key metrics specific to global SEO campaigns:
        </p>

        <ul className="list-disc pl-6 mb-6">
          <li><strong>International SEO Investment:</strong> Your total spending on global SEO activities, including content creation, technical optimization, and international link building</li>
          <li><strong>Target Markets:</strong> Different regions have varying potential returns and competition levels</li>
          <li><strong>Localization Costs:</strong> Expenses for translating and adapting content for different markets</li>
          <li><strong>International Conversion Rates:</strong> Conversion patterns vary by region and culture</li>
        </ul>

        <h3 className="text-xl font-semibold mb-3">Maximizing International SEO ROI</h3>

        <p>
          To achieve the highest possible return on your international SEO investment:
        </p>

        <ul className="list-disc pl-6 mb-6">
          <li>Research and prioritize markets based on potential returns</li>
          <li>Invest in proper localization and cultural adaptation</li>
          <li>Consider regional search engine preferences</li>
          <li>Optimize for local search intent and behavior</li>
          <li>Build region-specific link profiles</li>
        </ul>

        <h3 className="text-xl font-semibold mb-3">Regional SEO Considerations</h3>

        <p>
          Different regions require varying approaches:
        </p>

        <ul className="list-disc pl-6 mb-6">
          <li><strong>Europe:</strong> Multiple languages, strong data privacy requirements</li>
          <li><strong>Asia:</strong> Different search engines, unique content preferences</li>
          <li><strong>North America:</strong> High competition, sophisticated market</li>
          <li><strong>Latin America:</strong> Growing market, language variations</li>
          <li><strong>Oceania:</strong> English-based, unique local terms</li>
        </ul>

        <h3 className="text-xl font-semibold mb-3">International SEO Strategy Levels</h3>

        <p>
          Choose the right strategy level for your goals:
        </p>

        <ul className="list-disc pl-6 mb-6">
          <li><strong>Basic Global SEO:</strong> Essential international optimization</li>
          <li><strong>Standard International SEO:</strong> Comprehensive multi-market approach</li>
          <li><strong>Premium Global Strategy:</strong> Advanced international optimization</li>
          <li><strong>Enterprise International SEO:</strong> Full-scale global domination</li>
        </ul>

        <div className="bg-blue-50 p-6 rounded-lg mt-8">
          <h3 className="text-xl font-semibold mb-3">Maximize Your International SEO ROI</h3>
          <p>
            Want to optimize your global SEO strategy and maximize returns? Let's create a customized international SEO plan. 
            <a href="https://go.juliangoldie.com/strategy-session" className="text-blue-600 hover:text-blue-800 font-medium ml-2">
              Book your free international SEO strategy session
            </a>
          </p>
        </div>
      </div>
    </CalculatorLayout>
  );
};

export default InternationalSeoRoiCalculator;