import React from 'react';
import { useForm } from 'react-hook-form';
import CalculatorLayout from '../../components/CalculatorLayout';

interface SeoCalculatorInputs {
  monthlyVisitors: number;
  conversionRate: number;
  averageOrderValue: number;
}

const SeoCalculator = () => {
  const { register, watch } = useForm<SeoCalculatorInputs>({
    defaultValues: {
      monthlyVisitors: 10000,
      conversionRate: 2,
      averageOrderValue: 100
    }
  });

  const values = watch();
  const monthlyRevenue = (values.monthlyVisitors * (values.conversionRate / 100) * values.averageOrderValue);

  return (
    <CalculatorLayout
      title="SEO Calculator - Calculate Your Potential SEO Revenue"
      description="Use our free SEO calculator to estimate potential revenue from your SEO efforts. Built by SEO expert Julian Goldie."
    >
      <h1 className="text-3xl font-bold text-gray-900 mb-6">SEO Calculator: Estimate Your SEO Revenue Potential</h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Monthly Visitors from SEO
              </label>
              <input
                type="number"
                {...register('monthlyVisitors')}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                SEO Traffic Conversion Rate (%)
              </label>
              <input
                type="number"
                step="0.1"
                {...register('conversionRate')}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Average Order Value from SEO Traffic ($)
              </label>
              <input
                type="number"
                {...register('averageOrderValue')}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </form>
        </div>

        <div className="bg-blue-50 p-6 rounded-lg">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">SEO Revenue Calculator Results</h2>
          <div className="space-y-4">
            <div>
              <p className="text-sm text-gray-600">Estimated Monthly SEO Revenue</p>
              <p className="text-3xl font-bold text-blue-600">
                ${monthlyRevenue.toLocaleString()}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Estimated Annual SEO Revenue</p>
              <p className="text-3xl font-bold text-blue-600">
                ${(monthlyRevenue * 12).toLocaleString()}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 prose max-w-none">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Use This SEO Calculator Tool</h2>
        
        <p>
          The SEO calculator is designed to help businesses understand the potential revenue impact of their SEO efforts. By inputting key metrics, you can calculate the expected return from your SEO investment and make data-driven decisions about your digital marketing strategy.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-3">Understanding SEO Calculator Metrics</h3>
        
        <ul className="list-disc pl-6 mb-6">
          <li><strong>Monthly SEO Visitors:</strong> Enter your expected monthly organic traffic from search engines. This number can be estimated based on keyword research and current search volumes.</li>
          <li><strong>SEO Conversion Rate:</strong> The percentage of SEO visitors who complete a desired action (purchase, signup, etc.). Industry averages range from 1-5%.</li>
          <li><strong>Average Order Value:</strong> The typical amount a customer spends when converting through your SEO traffic.</li>
        </ul>

        <h3 className="text-xl font-semibold mb-3">Why Use an SEO Calculator?</h3>
        
        <p>
          An SEO calculator is essential for businesses looking to quantify the potential impact of their SEO investments. By calculating potential SEO revenue, you can:
        </p>

        <ul className="list-disc pl-6 mb-6">
          <li>Justify SEO budget allocations to stakeholders</li>
          <li>Set realistic SEO revenue targets</li>
          <li>Compare SEO ROI with other marketing channels</li>
          <li>Make data-driven decisions about SEO investments</li>
        </ul>

        <h3 className="text-xl font-semibold mb-3">Maximizing Your SEO Calculator Results</h3>

        <p>
          To achieve the best results with your SEO calculator projections, consider these key factors:
        </p>

        <ul className="list-disc pl-6 mb-6">
          <li>Use conservative estimates for initial calculations</li>
          <li>Factor in seasonal variations in SEO traffic</li>
          <li>Consider the impact of long-tail keywords on conversion rates</li>
          <li>Account for different user intents in your SEO strategy</li>
        </ul>

        <div className="bg-blue-50 p-6 rounded-lg mt-8">
          <h3 className="text-xl font-semibold mb-3">Get Expert SEO Guidance</h3>
          <p>
            Want to turn these SEO calculator projections into reality? As an experienced SEO consultant, I can help you develop a strategy to achieve and exceed these numbers. 
            <a href="https://go.juliangoldie.com/strategy-session" className="text-blue-600 hover:text-blue-800 font-medium ml-2">
              Book a free SEO strategy session
            </a> 
            to discuss your specific goals and create a customized plan for your business.
          </p>
        </div>
      </div>
    </CalculatorLayout>
  );
};

export default SeoCalculator;