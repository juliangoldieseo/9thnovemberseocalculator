import React from 'react';
import { useForm } from 'react-hook-form';
import CalculatorLayout from '../../components/CalculatorLayout';

interface SeoGoalInputs {
  currentTraffic: number;
  currentConversionRate: number;
  currentRevenue: number;
  timeframe: number;
  growthTarget: number;
  industryType: string;
}

const SeoGoalSettingCalculator = () => {
  const { register, watch } = useForm<SeoGoalInputs>({
    defaultValues: {
      currentTraffic: 10000,
      currentConversionRate: 2,
      currentRevenue: 50000,
      timeframe: 12,
      growthTarget: 100,
      industryType: 'ecommerce'
    }
  });

  const values = watch();

  // Calculate industry-specific benchmarks
  const industryBenchmarks = {
    ecommerce: { conversionRate: 2.5, trafficGrowth: 1.8 },
    saas: { conversionRate: 3.0, trafficGrowth: 2.0 },
    local: { conversionRate: 4.0, trafficGrowth: 1.5 },
    finance: { conversionRate: 2.0, trafficGrowth: 1.6 },
    healthcare: { conversionRate: 2.8, trafficGrowth: 1.7 }
  }[values.industryType] || { conversionRate: 2.5, trafficGrowth: 1.8 };

  // Calculate monthly goals
  const monthlyTrafficIncrease = (values.currentTraffic * (values.growthTarget / 100)) / values.timeframe;
  const targetMonthlyTraffic = values.currentTraffic + monthlyTrafficIncrease;

  // Calculate conversion goals
  const improvedConversionRate = Math.min(
    values.currentConversionRate * 1.2,
    industryBenchmarks.conversionRate
  );
  const targetMonthlyConversions = (targetMonthlyTraffic * improvedConversionRate) / 100;

  // Calculate revenue goals
  const averageOrderValue = values.currentRevenue / ((values.currentTraffic * values.currentConversionRate) / 100);
  const targetMonthlyRevenue = targetMonthlyConversions * averageOrderValue;

  return (
    <CalculatorLayout
      title="SEO Goal Setting Calculator | Set Strategic SEO Goals & Targets"
      description="Use our SEO Goal Setting Calculator to establish realistic and achievable SEO goals. Set data-driven SEO targets for traffic, conversions, and revenue."
    >
      <h1 className="text-3xl font-bold text-gray-900 mb-6">SEO Goal Setting Calculator: Define Your Strategic SEO Targets</h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Enter Your Current SEO Metrics</h2>
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Current Monthly Organic Traffic
              </label>
              <input
                type="number"
                {...register('currentTraffic')}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Current Conversion Rate (%)
              </label>
              <input
                type="number"
                step="0.1"
                {...register('currentConversionRate')}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Current Monthly Revenue ($)
              </label>
              <input
                type="number"
                {...register('currentRevenue')}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Goal Timeframe (months)
              </label>
              <input
                type="number"
                {...register('timeframe')}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Growth Target (%)
              </label>
              <input
                type="number"
                {...register('growthTarget')}
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
                <option value="finance">Finance</option>
                <option value="healthcare">Healthcare</option>
              </select>
            </div>
          </form>
        </div>

        <div className="bg-blue-50 p-6 rounded-lg">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Your SEO Goals & Targets</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">Traffic Goals</h3>
              <div className="space-y-2">
                <div>
                  <p className="text-sm text-gray-600">Monthly Traffic Target</p>
                  <p className="text-2xl font-bold text-blue-600">
                    {Math.round(targetMonthlyTraffic).toLocaleString()} visitors
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Required Monthly Increase</p>
                  <p className="text-xl font-bold text-blue-500">
                    +{Math.round(monthlyTrafficIncrease).toLocaleString()} visitors
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Conversion Goals</h3>
              <div className="space-y-2">
                <div>
                  <p className="text-sm text-gray-600">Target Conversion Rate</p>
                  <p className="text-2xl font-bold text-green-600">
                    {improvedConversionRate.toFixed(1)}%
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Monthly Conversions Target</p>
                  <p className="text-xl font-bold text-green-500">
                    {Math.round(targetMonthlyConversions).toLocaleString()} conversions
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Revenue Goals</h3>
              <div className="space-y-2">
                <div>
                  <p className="text-sm text-gray-600">Monthly Revenue Target</p>
                  <p className="text-2xl font-bold text-purple-600">
                    ${Math.round(targetMonthlyRevenue).toLocaleString()}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Revenue Increase</p>
                  <p className="text-xl font-bold text-purple-500">
                    +${Math.round(targetMonthlyRevenue - values.currentRevenue).toLocaleString()}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 prose max-w-none">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Use the SEO Goal Setting Calculator</h2>
        
        <p>
          The SEO Goal Setting Calculator is a powerful tool designed to help businesses establish realistic and achievable SEO goals. By analyzing your current performance metrics and industry benchmarks, this calculator provides data-driven targets for traffic, conversions, and revenue growth through SEO.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-3">Understanding SEO Goal Setting Metrics</h3>
        
        <p>
          Effective SEO goal setting requires a comprehensive understanding of various performance metrics and how they interact. Here's what each metric means for your SEO strategy:
        </p>

        <ul className="list-disc pl-6 mb-6">
          <li><strong>Organic Traffic Goals:</strong> These targets represent the number of visitors you aim to attract through search engines. The calculator considers your current traffic and desired growth rate to set realistic monthly targets.</li>
          <li><strong>Conversion Rate Optimization:</strong> Based on industry benchmarks, the calculator suggests improved conversion rate targets that balance ambition with achievability.</li>
          <li><strong>Revenue Projections:</strong> By combining traffic and conversion goals with your average order value, the calculator provides realistic revenue targets for your SEO efforts.</li>
        </ul>

        <h3 className="text-xl font-semibold mb-3">Setting SMART SEO Goals</h3>

        <p>
          When using the SEO Goal Setting Calculator, follow these principles to set SMART (Specific, Measurable, Achievable, Relevant, Time-bound) goals:
        </p>

        <ul className="list-disc pl-6 mb-6">
          <li><strong>Specific:</strong> Focus on concrete metrics like organic traffic, conversion rates, and revenue</li>
          <li><strong>Measurable:</strong> Use the calculator's numerical targets to track progress</li>
          <li><strong>Achievable:</strong> Consider industry benchmarks and your current performance</li>
          <li><strong>Relevant:</strong> Align goals with your overall business objectives</li>
          <li><strong>Time-bound:</strong> Set clear timeframes for achieving your SEO goals</li>
        </ul>

        <h3 className="text-xl font-semibold mb-3">Implementing Your SEO Goals</h3>

        <p>
          Once you have your SEO goals set, consider these implementation strategies:
        </p>

        <ul className="list-disc pl-6 mb-6">
          <li>Break down monthly targets into weekly milestones</li>
          <li>Create a content calendar aligned with traffic goals</li>
          <li>Implement conversion rate optimization strategies</li>
          <li>Regular monitoring and adjustment of goals</li>
          <li>Focus on high-impact SEO activities</li>
        </ul>

        <div className="bg-blue-50 p-6 rounded-lg mt-8">
          <h3 className="text-xl font-semibold mb-3">Get Expert SEO Goal Setting Guidance</h3>
          <p>
            Need help setting and achieving your SEO goals? Let's create a customized SEO strategy aligned with your business objectives. 
            <a href="https://go.juliangoldie.com/strategy-session" className="text-blue-600 hover:text-blue-800 font-medium ml-2">
              Book your free SEO goal setting consultation
            </a>
          </p>
        </div>
      </div>
    </CalculatorLayout>
  );
};

export default SeoGoalSettingCalculator;