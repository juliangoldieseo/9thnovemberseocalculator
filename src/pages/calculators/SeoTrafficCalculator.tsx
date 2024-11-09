import React from 'react';
import { useForm } from 'react-hook-form';
import CalculatorLayout from '../../components/CalculatorLayout';

interface SeoTrafficInputs {
  keyword: string;
  searchVolume: number;
  rankingPosition: number;
  seasonalityFactor: number;
  deviceType: string;
  searchIntent: string;
  competitionLevel: string;
}

const SeoTrafficCalculator = () => {
  const { register, watch } = useForm<SeoTrafficInputs>({
    defaultValues: {
      keyword: '',
      searchVolume: 1000,
      rankingPosition: 3,
      seasonalityFactor: 1,
      deviceType: 'all',
      searchIntent: 'informational',
      competitionLevel: 'medium'
    }
  });

  const values = watch();

  // CTR based on ranking position
  const getPositionCTR = (position: number) => {
    const ctrRates: { [key: number]: number } = {
      1: 31.7,
      2: 24.7,
      3: 18.7,
      4: 13.6,
      5: 9.5,
      6: 6.1,
      7: 4.2,
      8: 3.1,
      9: 2.8,
      10: 2.4
    };
    return ctrRates[position] || 1;
  };

  // Device type multiplier
  const deviceMultiplier = {
    desktop: 1.2,
    mobile: 0.9,
    tablet: 0.8,
    all: 1.0
  }[values.deviceType] || 1;

  // Search intent multiplier
  const intentMultiplier = {
    transactional: 1.3,
    commercial: 1.2,
    informational: 1.0,
    navigational: 0.8
  }[values.searchIntent] || 1;

  // Calculate estimated monthly traffic
  const clickThroughRate = getPositionCTR(values.rankingPosition);
  const baseTraffic = (values.searchVolume * (clickThroughRate / 100));
  const adjustedTraffic = Math.round(
    baseTraffic * 
    deviceMultiplier * 
    intentMultiplier * 
    values.seasonalityFactor
  );

  // Calculate yearly traffic
  const yearlyTraffic = adjustedTraffic * 12;

  return (
    <CalculatorLayout
      title="SEO Traffic Calculator | Calculate Your Organic Search Traffic"
      description="Use our SEO traffic calculator to estimate your potential organic search traffic. Get accurate traffic predictions based on rankings and search volume."
    >
      <h1 className="text-3xl font-bold text-gray-900 mb-6">SEO Traffic Calculator: Predict Your Organic Search Traffic</h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Enter Your SEO Traffic Metrics</h2>
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
                Ranking Position (1-10)
              </label>
              <input
                type="number"
                min="1"
                max="10"
                {...register('rankingPosition')}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Seasonality Factor (0.1-2.0)
              </label>
              <input
                type="number"
                step="0.1"
                min="0.1"
                max="2"
                {...register('seasonalityFactor')}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
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

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Search Intent
              </label>
              <select
                {...register('searchIntent')}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              >
                <option value="informational">Informational</option>
                <option value="transactional">Transactional</option>
                <option value="commercial">Commercial</option>
                <option value="navigational">Navigational</option>
              </select>
            </div>
          </form>
        </div>

        <div className="bg-blue-50 p-6 rounded-lg">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Your SEO Traffic Predictions</h2>
          <div className="space-y-6">
            <div>
              <p className="text-sm text-gray-600">Expected Click-Through Rate</p>
              <p className="text-4xl font-bold text-blue-600">
                {clickThroughRate.toFixed(1)}%
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-600">Estimated Monthly Traffic</p>
              <p className="text-3xl font-bold text-green-600">
                {adjustedTraffic.toLocaleString()} visitors
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-600">Projected Annual Traffic</p>
              <p className="text-3xl font-bold text-purple-600">
                {yearlyTraffic.toLocaleString()} visitors
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 prose max-w-none">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Use the SEO Traffic Calculator</h2>
        
        <p>
          Our SEO traffic calculator helps you accurately predict potential organic search traffic based on various ranking factors and search metrics. Understanding your potential traffic is crucial for setting realistic SEO goals and measuring success.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-3">Understanding SEO Traffic Calculations</h3>
        
        <p>
          The SEO traffic calculator uses several key metrics to provide accurate traffic predictions:
        </p>

        <ul className="list-disc pl-6 mb-6">
          <li><strong>Search Volume:</strong> Monthly searches for your target keyword</li>
          <li><strong>Ranking Position:</strong> Your page's position in search results</li>
          <li><strong>Click-Through Rate:</strong> Expected percentage of clicks based on position</li>
          <li><strong>Seasonality:</strong> Traffic fluctuations throughout the year</li>
          <li><strong>Device Distribution:</strong> Traffic patterns across different devices</li>
        </ul>

        <h3 className="text-xl font-semibold mb-3">Maximizing Your SEO Traffic</h3>

        <p>
          To optimize your organic search traffic potential:
        </p>

        <ul className="list-disc pl-6 mb-6">
          <li>Target keywords with appropriate search volume</li>
          <li>Optimize for higher search positions</li>
          <li>Consider search intent in your content</li>
          <li>Account for seasonal traffic patterns</li>
          <li>Optimize for multiple devices</li>
        </ul>

        <h3 className="text-xl font-semibold mb-3">Search Intent Impact on Traffic</h3>

        <p>
          Different search intents affect traffic patterns:
        </p>

        <ul className="list-disc pl-6 mb-6">
          <li><strong>Informational:</strong> Higher volume, lower conversion</li>
          <li><strong>Transactional:</strong> Lower volume, higher conversion</li>
          <li><strong>Commercial:</strong> Balanced volume and conversion</li>
          <li><strong>Navigational:</strong> Specific brand-focused traffic</li>
        </ul>

        <h3 className="text-xl font-semibold mb-3">Device-Specific Traffic Patterns</h3>

        <p>
          Understanding device-specific traffic helps optimize for:
        </p>

        <ul className="list-disc pl-6 mb-6">
          <li>Mobile-first indexing requirements</li>
          <li>Device-specific user behavior</li>
          <li>Responsive design optimization</li>
          <li>Local search considerations</li>
          <li>Speed optimization across devices</li>
        </ul>

        <div className="bg-blue-50 p-6 rounded-lg mt-8">
          <h3 className="text-xl font-semibold mb-3">Improve Your SEO Traffic</h3>
          <p>
            Want to increase your organic search traffic? Let's create a strategy to improve your search visibility and rankings. 
            <a href="https://go.juliangoldie.com/strategy-session" className="text-blue-600 hover:text-blue-800 font-medium ml-2">
              Book your free SEO traffic consultation
            </a>
          </p>
        </div>
      </div>
    </CalculatorLayout>
  );
};

export default SeoTrafficCalculator;