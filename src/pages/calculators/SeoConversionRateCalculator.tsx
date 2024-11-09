import React from 'react';
import { useForm } from 'react-hook-form';
import CalculatorLayout from '../../components/CalculatorLayout';

interface SeoConversionRateInputs {
  organicVisitors: number;
  totalConversions: number;
  timeframe: 'daily' | 'weekly' | 'monthly';
  goalType: string;
  industryType: string;
  deviceType: string;
}

const SeoConversionRateCalculator = () => {
  const { register, watch } = useForm<SeoConversionRateInputs>({
    defaultValues: {
      organicVisitors: 1000,
      totalConversions: 20,
      timeframe: 'monthly',
      goalType: 'sales',
      industryType: 'ecommerce',
      deviceType: 'all'
    }
  });

  const values = watch();

  // Calculate base conversion rate
  const baseConversionRate = (values.totalConversions / values.organicVisitors) * 100;

  // Industry benchmarks
  const industryBenchmarks = {
    ecommerce: 2.5,
    saas: 3.0,
    finance: 4.5,
    healthcare: 3.2,
    education: 2.8,
    b2b: 2.2
  }[values.industryType] || 2.5;

  // Device type multiplier
  const deviceMultiplier = {
    desktop: 1.2,
    mobile: 0.8,
    tablet: 1.0,
    all: 1.0
  }[values.deviceType];

  // Goal type multiplier
  const goalMultiplier = {
    sales: 1.0,
    leads: 1.2,
    signups: 1.4,
    downloads: 1.3,
    contact: 1.1
  }[values.goalType] || 1.0;

  // Calculate performance metrics
  const industryComparison = (baseConversionRate / industryBenchmarks) * 100;
  const adjustedRate = baseConversionRate * deviceMultiplier * goalMultiplier;
  const potentialImprovement = Math.max(0, industryBenchmarks - baseConversionRate);

  return (
    <CalculatorLayout
      title="SEO Conversion Rate Calculator | Calculate Your SEO Conversion Success"
      description="Use our SEO conversion rate calculator to measure and optimize your organic search conversion performance. Get insights to improve your SEO conversion rates."
    >
      <h1 className="text-3xl font-bold text-gray-900 mb-6">SEO Conversion Rate Calculator: Measure Your Search Traffic Success</h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Enter Your SEO Conversion Metrics</h2>
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Organic Search Visitors
              </label>
              <input
                type="number"
                {...register('organicVisitors')}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Total Conversions
              </label>
              <input
                type="number"
                {...register('totalConversions')}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Timeframe
              </label>
              <select
                {...register('timeframe')}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              >
                <option value="daily">Daily</option>
                <option value="weekly">Weekly</option>
                <option value="monthly">Monthly</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Conversion Goal Type
              </label>
              <select
                {...register('goalType')}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              >
                <option value="sales">Sales</option>
                <option value="leads">Lead Generation</option>
                <option value="signups">Sign-ups</option>
                <option value="downloads">Downloads</option>
                <option value="contact">Contact Forms</option>
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
                <option value="ecommerce">E-commerce</option>
                <option value="saas">SaaS</option>
                <option value="finance">Finance</option>
                <option value="healthcare">Healthcare</option>
                <option value="education">Education</option>
                <option value="b2b">B2B</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Device Type
              </label>
              <select
                {...register('deviceType')}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              >
                <option value="all">All Devices</option>
                <option value="desktop">Desktop</option>
                <option value="mobile">Mobile</option>
                <option value="tablet">Tablet</option>
              </select>
            </div>
          </form>
        </div>

        <div className="bg-blue-50 p-6 rounded-lg">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Your SEO Conversion Rate Analysis</h2>
          <div className="space-y-6">
            <div>
              <p className="text-sm text-gray-600">Current SEO Conversion Rate</p>
              <p className="text-4xl font-bold text-blue-600">
                {baseConversionRate.toFixed(2)}%
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-600">Industry Benchmark Performance</p>
              <p className="text-3xl font-bold text-green-600">
                {industryComparison.toFixed(1)}%
              </p>
              <p className="text-sm text-gray-500">of industry average</p>
            </div>

            <div>
              <p className="text-sm text-gray-600">Adjusted Conversion Rate</p>
              <p className="text-3xl font-bold text-purple-600">
                {adjustedRate.toFixed(2)}%
              </p>
              <p className="text-sm text-gray-500">based on goal and device type</p>
            </div>

            <div>
              <p className="text-sm text-gray-600">Potential Improvement</p>
              <p className="text-3xl font-bold text-indigo-600">
                +{potentialImprovement.toFixed(2)}%
              </p>
              <p className="text-sm text-gray-500">to reach industry benchmark</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 prose max-w-none">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Understanding Your SEO Conversion Rate Calculator Results</h2>
        
        <p>
          The SEO conversion rate calculator is a powerful tool designed to help you measure and optimize the effectiveness of your organic search traffic. By analyzing your conversion performance against industry benchmarks, this calculator provides valuable insights for improving your SEO conversion rates.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-3">What is SEO Conversion Rate?</h3>
        
        <p>
          SEO conversion rate measures the percentage of organic search visitors who complete a desired action on your website. This metric is crucial for understanding how effectively your SEO traffic converts into meaningful business results.
        </p>

        <h3 className="text-xl font-semibold mb-3">Key SEO Conversion Rate Metrics</h3>
        
        <ul className="list-disc pl-6 mb-6">
          <li><strong>Base Conversion Rate:</strong> Your current conversion performance from organic search traffic</li>
          <li><strong>Industry Benchmark:</strong> Standard conversion rates for your specific industry</li>
          <li><strong>Device Performance:</strong> How conversion rates vary across different devices</li>
          <li><strong>Goal-Specific Rates:</strong> Conversion rates adjusted for different types of goals</li>
        </ul>

        <h3 className="text-xl font-semibold mb-3">Improving Your SEO Conversion Rate</h3>

        <p>
          To enhance your SEO conversion performance:
        </p>

        <ul className="list-disc pl-6 mb-6">
          <li>Optimize landing pages for search intent</li>
          <li>Improve page load speed and mobile responsiveness</li>
          <li>Create compelling calls-to-action</li>
          <li>Implement A/B testing for key conversion elements</li>
          <li>Focus on user experience optimization</li>
        </ul>

        <h3 className="text-xl font-semibold mb-3">Device-Specific Optimization</h3>

        <p>
          Different devices often show varying conversion patterns:
        </p>

        <ul className="list-disc pl-6 mb-6">
          <li><strong>Desktop:</strong> Often shows higher conversion rates for complex purchases</li>
          <li><strong>Mobile:</strong> Typically better for local and immediate conversions</li>
          <li><strong>Tablet:</strong> Can show mixed patterns depending on user behavior</li>
        </ul>

        <h3 className="text-xl font-semibold mb-3">Industry-Specific Considerations</h3>

        <p>
          Conversion rates vary significantly by industry:
        </p>

        <ul className="list-disc pl-6 mb-6">
          <li><strong>E-commerce:</strong> Focus on product page and checkout optimization</li>
          <li><strong>SaaS:</strong> Emphasize free trial and demo conversions</li>
          <li><strong>B2B:</strong> Optimize for lead generation and contact forms</li>
          <li><strong>Finance:</strong> Build trust and security elements</li>
          <li><strong>Healthcare:</strong> Focus on appointment bookings and information requests</li>
        </ul>

        <div className="bg-blue-50 p-6 rounded-lg mt-8">
          <h3 className="text-xl font-semibold mb-3">Optimize Your SEO Conversion Rate</h3>
          <p>
            Want to improve your SEO conversion performance? Let's create a customized strategy to optimize your conversion rates. 
            <a href="https://go.juliangoldie.com/strategy-session" className="text-blue-600 hover:text-blue-800 font-medium ml-2">
              Book your free SEO conversion optimization session
            </a>
          </p>
        </div>
      </div>
    </CalculatorLayout>
  );
};

export default SeoConversionRateCalculator;