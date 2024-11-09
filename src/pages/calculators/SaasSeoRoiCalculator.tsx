import React from 'react';
import { useForm } from 'react-hook-form';
import CalculatorLayout from '../../components/CalculatorLayout';

interface SaasSeoRoiInputs {
  monthlyVisitors: number;
  trialConversionRate: number;
  trialToCustomerRate: number;
  monthlySubscriptionValue: number;
  customerLifetimeMonths: number;
  monthlyInvestment: number;
  timeframe: number;
}

const SaasSeoRoiCalculator = () => {
  const { register, watch } = useForm<SaasSeoRoiInputs>({
    defaultValues: {
      monthlyVisitors: 10000,
      trialConversionRate: 2,
      trialToCustomerRate: 30,
      monthlySubscriptionValue: 99,
      customerLifetimeMonths: 24,
      monthlyInvestment: 5000,
      timeframe: 12
    }
  });

  const values = watch();

  // Calculate monthly trials
  const monthlyTrials = Math.round(values.monthlyVisitors * (values.trialConversionRate / 100));

  // Calculate monthly customers
  const monthlyCustomers = Math.round(monthlyTrials * (values.trialToCustomerRate / 100));

  // Calculate customer lifetime value (LTV)
  const customerLtv = values.monthlySubscriptionValue * values.customerLifetimeMonths;

  // Calculate monthly revenue
  const monthlyRevenue = monthlyCustomers * values.monthlySubscriptionValue;

  // Calculate monthly profit
  const monthlyProfit = monthlyRevenue - values.monthlyInvestment;

  // Calculate ROI percentage
  const monthlyRoi = ((monthlyProfit / values.monthlyInvestment) * 100);

  // Calculate annual metrics
  const annualProfit = monthlyProfit * values.timeframe;
  const annualInvestment = values.monthlyInvestment * values.timeframe;
  const annualRoi = ((annualProfit / annualInvestment) * 100);

  // Calculate lifetime value of acquired customers
  const totalCustomerValue = monthlyCustomers * customerLtv;

  return (
    <CalculatorLayout
      title="SaaS SEO ROI Calculator | Calculate Your SaaS SEO Returns"
      description="Use our SaaS SEO ROI calculator to measure and project returns from your SaaS SEO investments. Get accurate ROI calculations for your SaaS business."
    >
      <h1 className="text-3xl font-bold text-gray-900 mb-6">SaaS SEO ROI Calculator: Measure Your Software Company's SEO Returns</h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Enter Your SaaS SEO Metrics</h2>
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Monthly SEO Visitors
              </label>
              <input
                type="number"
                {...register('monthlyVisitors')}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Trial Conversion Rate (%)
              </label>
              <input
                type="number"
                step="0.1"
                {...register('trialConversionRate')}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Trial to Customer Rate (%)
              </label>
              <input
                type="number"
                step="0.1"
                {...register('trialToCustomerRate')}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Monthly Subscription Value ($)
              </label>
              <input
                type="number"
                {...register('monthlySubscriptionValue')}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Average Customer Lifetime (months)
              </label>
              <input
                type="number"
                {...register('customerLifetimeMonths')}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

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
                ROI Timeframe (months)
              </label>
              <input
                type="number"
                {...register('timeframe')}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
          </form>
        </div>

        <div className="bg-blue-50 p-6 rounded-lg">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Your SaaS SEO ROI Analysis</h2>
          <div className="space-y-6">
            <div>
              <p className="text-sm text-gray-600">Monthly SaaS SEO ROI</p>
              <p className="text-4xl font-bold text-blue-600">
                {monthlyRoi.toFixed(2)}%
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-600">Monthly Customer Acquisition</p>
              <p className="text-3xl font-bold text-green-600">
                {monthlyCustomers} customers
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-600">Monthly Revenue</p>
              <p className="text-3xl font-bold text-purple-600">
                ${monthlyRevenue.toLocaleString()}
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-600">{values.timeframe}-Month ROI</p>
              <p className="text-3xl font-bold text-indigo-600">
                {annualRoi.toFixed(2)}%
              </p>
            </div>

            <div className="pt-4 border-t border-gray-200">
              <p className="text-sm text-gray-600">Total Customer Lifetime Value</p>
              <p className="text-3xl font-bold text-emerald-600">
                ${totalCustomerValue.toLocaleString()}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 prose max-w-none">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Use Our SaaS SEO ROI Calculator</h2>
        
        <p>
          Our SaaS SEO ROI calculator is specifically designed to help software companies measure and project the return on investment from their SEO efforts. Unlike traditional ROI calculators, this tool takes into account the unique metrics and conversion patterns of the SaaS business model.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-3">Understanding SaaS SEO ROI Calculations</h3>
        
        <p>
          The SaaS SEO ROI calculator uses several key metrics specific to software companies:
        </p>

        <ul className="list-disc pl-6 mb-6">
          <li><strong>Trial Conversion Rate:</strong> The percentage of SEO visitors who sign up for a trial</li>
          <li><strong>Trial to Customer Rate:</strong> The percentage of trial users who become paying customers</li>
          <li><strong>Monthly Subscription Value:</strong> Average revenue per user (ARPU)</li>
          <li><strong>Customer Lifetime:</strong> Average duration of customer subscriptions</li>
        </ul>

        <h3 className="text-xl font-semibold mb-3">Maximizing Your SaaS SEO ROI</h3>

        <p>
          To achieve the highest possible return on your SaaS SEO investment:
        </p>

        <ul className="list-disc pl-6 mb-6">
          <li>Focus on high-intent keywords that drive trial signups</li>
          <li>Optimize your trial-to-paid conversion funnel</li>
          <li>Create content that addresses different stages of the buyer's journey</li>
          <li>Invest in technical SEO for better user experience</li>
          <li>Build authority in your software category</li>
        </ul>

        <h3 className="text-xl font-semibold mb-3">SaaS-Specific SEO Considerations</h3>

        <p>
          When planning your SaaS SEO strategy, consider these factors:
        </p>

        <ul className="list-disc pl-6 mb-6">
          <li><strong>Product Keywords:</strong> Target terms specific to your software category</li>
          <li><strong>Feature Keywords:</strong> Optimize for specific feature-related searches</li>
          <li><strong>Integration Keywords:</strong> Target searches about software integrations</li>
          <li><strong>Alternative Keywords:</strong> Capture traffic from competitor comparisons</li>
          <li><strong>Problem Keywords:</strong> Target pain points your software solves</li>
        </ul>

        <h3 className="text-xl font-semibold mb-3">Long-term SaaS SEO Value</h3>

        <p>
          Consider these long-term benefits when calculating your SaaS SEO ROI:
        </p>

        <ul className="list-disc pl-6 mb-6">
          <li>Compound growth of organic traffic</li>
          <li>Increasing domain authority</li>
          <li>Reduced customer acquisition costs</li>
          <li>Brand awareness and trust building</li>
          <li>Market share gains through organic visibility</li>
        </ul>

        <div className="bg-blue-50 p-6 rounded-lg mt-8">
          <h3 className="text-xl font-semibold mb-3">Maximize Your SaaS SEO Returns</h3>
          <p>
            Want to optimize your SaaS SEO strategy for better ROI? Let's create a customized plan for your software company. 
            <a href="https://go.juliangoldie.com/strategy-session" className="text-blue-600 hover:text-blue-800 font-medium ml-2">
              Book your free SaaS SEO consultation
            </a>
          </p>
        </div>
      </div>
    </CalculatorLayout>
  );
};

export default SaasSeoRoiCalculator;