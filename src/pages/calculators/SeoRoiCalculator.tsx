import React from 'react';
import { useForm } from 'react-hook-form';
import CalculatorLayout from '../../components/CalculatorLayout';

interface SeoRoiInputs {
  monthlyInvestment: number;
  expectedVisitors: number;
  conversionRate: number;
  averageOrderValue: number;
  timeframe: number;
  industryType: string;
}

const SeoRoiCalculator = () => {
  const { register, watch } = useForm<SeoRoiInputs>({
    defaultValues: {
      monthlyInvestment: 2000,
      expectedVisitors: 10000,
      conversionRate: 2,
      averageOrderValue: 100,
      timeframe: 12,
      industryType: 'ecommerce'
    }
  });

  const values = watch();

  // Calculate monthly revenue
  const monthlyRevenue = values.expectedVisitors * (values.conversionRate / 100) * values.averageOrderValue;
  
  // Calculate monthly profit
  const monthlyProfit = monthlyRevenue - values.monthlyInvestment;
  
  // Calculate ROI percentage
  const monthlyRoi = ((monthlyProfit / values.monthlyInvestment) * 100);
  
  // Calculate annual metrics
  const annualProfit = monthlyProfit * values.timeframe;
  const annualInvestment = values.monthlyInvestment * values.timeframe;
  const annualRoi = ((annualProfit / annualInvestment) * 100);

  // Industry multiplier for potential ROI
  const industryMultiplier = {
    ecommerce: 1.2,
    saas: 1.5,
    local: 0.8,
    b2b: 1.3,
    finance: 1.4,
    healthcare: 1.1
  }[values.industryType] || 1;

  // Calculate potential ROI with industry optimization
  const potentialRoi = annualRoi * industryMultiplier;

  return (
    <CalculatorLayout
      title="ROI Calculator SEO | Calculate Your SEO Return on Investment"
      description="Use our ROI calculator SEO tool to measure your SEO investment returns. Get accurate ROI projections for your SEO campaigns."
    >
      <h1 className="text-3xl font-bold text-gray-900 mb-6">ROI Calculator SEO: Measure Your Search Engine Optimization Returns</h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Enter Your SEO ROI Metrics</h2>
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Monthly SEO Investment ($)
              </label>
              <input
                type="number"
                {...register('monthlyInvestment')}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Expected Monthly SEO Visitors
              </label>
              <input
                type="number"
                {...register('expectedVisitors')}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                SEO Conversion Rate (%)
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
                Industry Type
              </label>
              <select
                {...register('industryType')}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              >
                <option value="ecommerce">E-commerce</option>
                <option value="saas">SaaS</option>
                <option value="local">Local Business</option>
                <option value="b2b">B2B</option>
                <option value="finance">Finance</option>
                <option value="healthcare">Healthcare</option>
              </select>
            </div>
          </form>
        </div>

        <div className="bg-blue-50 p-6 rounded-lg">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Your SEO ROI Analysis</h2>
          <div className="space-y-6">
            <div>
              <p className="text-sm text-gray-600">Monthly SEO ROI</p>
              <p className="text-4xl font-bold text-blue-600">
                {monthlyRoi.toFixed(2)}%
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-600">Monthly SEO Profit</p>
              <p className="text-3xl font-bold text-green-600">
                ${monthlyProfit.toLocaleString()}
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-600">{values.timeframe}-Month SEO ROI</p>
              <p className="text-3xl font-bold text-purple-600">
                {annualRoi.toFixed(2)}%
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-600">Total SEO Profit ({values.timeframe} months)</p>
              <p className="text-3xl font-bold text-indigo-600">
                ${annualProfit.toLocaleString()}
              </p>
            </div>

            <div className="pt-4 border-t border-gray-200">
              <p className="text-sm text-gray-600">Industry-Optimized ROI Potential</p>
              <p className="text-4xl font-bold text-emerald-600">
                {potentialRoi.toFixed(2)}%
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 prose max-w-none">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Use Our ROI Calculator SEO Tool</h2>
        
        <p>
          Our ROI calculator SEO tool helps businesses accurately measure and project the return on investment from their SEO campaigns. Understanding your SEO ROI is crucial for making informed decisions about your digital marketing investments and optimizing your search engine optimization strategy.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-3">Understanding SEO ROI Calculations</h3>
        
        <p>
          The ROI calculator SEO tool uses several key metrics to determine your return on investment:
        </p>

        <ul className="list-disc pl-6 mb-6">
          <li><strong>Monthly SEO Investment:</strong> Your total spending on SEO activities, including content creation, technical optimization, and link building</li>
          <li><strong>Expected SEO Traffic:</strong> Projected monthly visitors from organic search results</li>
          <li><strong>SEO Conversion Rate:</strong> Percentage of visitors who complete desired actions</li>
          <li><strong>Average Order Value:</strong> Typical revenue per conversion from SEO traffic</li>
        </ul>

        <h3 className="text-xl font-semibold mb-3">Maximizing Your SEO ROI</h3>

        <p>
          To achieve the highest possible return on your SEO investment:
        </p>

        <ul className="list-disc pl-6 mb-6">
          <li>Focus on high-value keywords with clear commercial intent</li>
          <li>Optimize your conversion funnel for SEO traffic</li>
          <li>Invest in quality content that drives organic visibility</li>
          <li>Monitor and adjust your SEO strategy based on ROI data</li>
          <li>Consider industry-specific optimization opportunities</li>
        </ul>

        <h3 className="text-xl font-semibold mb-3">Industry-Specific SEO ROI Factors</h3>

        <p>
          Different industries can expect varying levels of SEO ROI:
        </p>

        <ul className="list-disc pl-6 mb-6">
          <li><strong>E-commerce:</strong> Focus on product page optimization and shopping intent keywords</li>
          <li><strong>SaaS:</strong> Emphasize long-form content and educational resources</li>
          <li><strong>Local Business:</strong> Prioritize local SEO and location-based keywords</li>
          <li><strong>B2B:</strong> Focus on industry-specific terms and thought leadership</li>
          <li><strong>Finance:</strong> Emphasize trust signals and authoritative content</li>
        </ul>

        <h3 className="text-xl font-semibold mb-3">Long-term SEO ROI Considerations</h3>

        <p>
          When calculating your SEO ROI, consider these long-term factors:
        </p>

        <ul className="list-disc pl-6 mb-6">
          <li>Compound growth of organic traffic over time</li>
          <li>Brand value and authority building</li>
          <li>Reduced dependency on paid advertising</li>
          <li>Customer lifetime value from SEO traffic</li>
          <li>Market share gains through organic visibility</li>
        </ul>

        <h3 className="text-xl font-semibold mb-3">Tracking and Improving SEO ROI</h3>

        <p>
          To continuously improve your SEO return on investment:
        </p>

        <ul className="list-disc pl-6 mb-6">
          <li>Set clear ROI goals and benchmarks</li>
          <li>Track key performance indicators regularly</li>
          <li>Test and optimize conversion elements</li>
          <li>Focus on high-ROI SEO activities</li>
          <li>Adjust strategy based on ROI data</li>
        </ul>

        <div className="bg-blue-50 p-6 rounded-lg mt-8">
          <h3 className="text-xl font-semibold mb-3">Maximize Your SEO ROI</h3>
          <p>
            Want to achieve higher returns from your SEO investments? Let's create a customized strategy to maximize your SEO ROI. 
            <a href="https://go.juliangoldie.com/strategy-session" className="text-blue-600 hover:text-blue-800 font-medium ml-2">
              Book your free SEO ROI strategy session
            </a>
          </p>
        </div>
      </div>
    </CalculatorLayout>
  );
};

export default SeoRoiCalculator;