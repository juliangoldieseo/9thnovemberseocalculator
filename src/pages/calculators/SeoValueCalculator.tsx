import React from 'react';
import { useForm } from 'react-hook-form';
import CalculatorLayout from '../../components/CalculatorLayout';

interface SeoValueInputs {
  organicTraffic: number;
  averageCpc: number;
  conversionRate: number;
  customerValue: number;
  brandValue: number;
  timeframe: number;
}

const SeoValueCalculator = () => {
  const { register, watch } = useForm<SeoValueInputs>({
    defaultValues: {
      organicTraffic: 10000,
      averageCpc: 2.5,
      conversionRate: 2,
      customerValue: 100,
      brandValue: 20,
      timeframe: 12
    }
  });

  const values = watch();

  // Calculate PPC equivalent value
  const ppcValue = values.organicTraffic * values.averageCpc;

  // Calculate conversion value
  const monthlyConversions = values.organicTraffic * (values.conversionRate / 100);
  const conversionValue = monthlyConversions * values.customerValue;

  // Calculate brand visibility value
  const brandVisibilityValue = values.organicTraffic * (values.brandValue / 100);

  // Calculate total monthly value
  const monthlyValue = ppcValue + conversionValue + brandVisibilityValue;

  // Calculate long-term value
  const longTermValue = monthlyValue * values.timeframe;

  return (
    <CalculatorLayout
      title="SEO Value Calculator - Calculate Your SEO's True Worth"
      description="Calculate the true value of your SEO efforts with our comprehensive SEO value calculator. Understand your SEO ROI across multiple metrics."
    >
      <h1 className="text-3xl font-bold text-gray-900 mb-6">SEO Value Calculator: Measure Your SEO's True Worth</h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Enter Your SEO Metrics</h2>
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Monthly Organic Traffic
              </label>
              <input
                type="number"
                {...register('organicTraffic')}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
              <p className="mt-1 text-sm text-gray-500">Number of visitors from search engines</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Average CPC Value ($)
              </label>
              <input
                type="number"
                step="0.01"
                {...register('averageCpc')}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
              <p className="mt-1 text-sm text-gray-500">Average cost per click if you were using PPC</p>
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
              <p className="mt-1 text-sm text-gray-500">Percentage of visitors who convert</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Average Customer Value ($)
              </label>
              <input
                type="number"
                {...register('customerValue')}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
              <p className="mt-1 text-sm text-gray-500">Average value per customer conversion</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Brand Value Factor (%)
              </label>
              <input
                type="number"
                {...register('brandValue')}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
              <p className="mt-1 text-sm text-gray-500">Estimated brand awareness value per visitor</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Value Timeframe (months)
              </label>
              <input
                type="number"
                {...register('timeframe')}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
              <p className="mt-1 text-sm text-gray-500">Period to calculate total SEO value</p>
            </div>
          </form>
        </div>

        <div className="bg-blue-50 p-6 rounded-lg">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Your SEO Value Analysis</h2>
          <div className="space-y-6">
            <div>
              <p className="text-sm text-gray-600">Monthly PPC Equivalent Value</p>
              <p className="text-3xl font-bold text-blue-600">
                ${ppcValue.toLocaleString()}
              </p>
              <p className="text-sm text-gray-500">Value compared to paid search</p>
            </div>

            <div>
              <p className="text-sm text-gray-600">Monthly Conversion Value</p>
              <p className="text-3xl font-bold text-green-600">
                ${conversionValue.toLocaleString()}
              </p>
              <p className="text-sm text-gray-500">Value from customer conversions</p>
            </div>

            <div>
              <p className="text-sm text-gray-600">Monthly Brand Value</p>
              <p className="text-3xl font-bold text-purple-600">
                ${brandVisibilityValue.toLocaleString()}
              </p>
              <p className="text-sm text-gray-500">Value from brand awareness</p>
            </div>

            <div className="pt-4 border-t border-gray-200">
              <p className="text-sm text-gray-600">Total Monthly SEO Value</p>
              <p className="text-4xl font-bold text-indigo-600">
                ${monthlyValue.toLocaleString()}
              </p>
            </div>

            <div className="pt-4 border-t border-gray-200">
              <p className="text-sm text-gray-600">{values.timeframe}-Month SEO Value</p>
              <p className="text-4xl font-bold text-indigo-800">
                ${longTermValue.toLocaleString()}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 prose max-w-none">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Understanding Your SEO Value Calculation</h2>
        
        <p>
          The SEO value calculator helps you understand the true worth of your organic search traffic by considering multiple value factors. This comprehensive approach provides a more accurate picture of your SEO's impact on your business.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-3">SEO Value Components Explained</h3>
        
        <ul className="list-disc pl-6 mb-6">
          <li><strong>PPC Equivalent Value:</strong> The cost you would pay for the same traffic through paid search advertising.</li>
          <li><strong>Conversion Value:</strong> The direct revenue generated from organic traffic conversions.</li>
          <li><strong>Brand Value:</strong> The indirect value of increased brand awareness and recognition.</li>
          <li><strong>Long-term Value:</strong> The cumulative value of your SEO efforts over time.</li>
        </ul>

        <h3 className="text-xl font-semibold mb-3">Maximizing Your SEO Value</h3>

        <p>
          To maximize your SEO value:
        </p>

        <ul className="list-disc pl-6 mb-6">
          <li>Focus on high-value keywords with strong conversion intent</li>
          <li>Optimize your conversion funnel for organic traffic</li>
          <li>Build brand authority through quality content</li>
          <li>Track and improve your SEO metrics regularly</li>
          <li>Invest in long-term SEO strategies</li>
        </ul>

        <div className="bg-blue-50 p-6 rounded-lg mt-8">
          <h3 className="text-xl font-semibold mb-3">Maximize Your SEO Value</h3>
          <p>
            Want to increase your SEO value and get better returns from your organic traffic? Let's create a strategy to maximize your SEO investment. 
            <a href="https://go.juliangoldie.com/strategy-session" className="text-blue-600 hover:text-blue-800 font-medium ml-2">
              Book your free SEO value optimization session
            </a>
          </p>
        </div>
      </div>
    </CalculatorLayout>
  );
};

export default SeoValueCalculator;