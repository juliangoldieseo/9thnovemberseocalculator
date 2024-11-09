import React from 'react';
import { useForm } from 'react-hook-form';
import CalculatorLayout from '../../components/CalculatorLayout';

interface SpanishSeoBudgetInputs {
  monthlyRevenue: number;
  marketRegion: string;
  websiteType: string;
  competitionLevel: string;
  targetCountries: string[];
  contentLanguages: string[];
}

const SpanishSeoBudgetCalculator = () => {
  const { register, watch } = useForm<SpanishSeoBudgetInputs>({
    defaultValues: {
      monthlyRevenue: 50000,
      marketRegion: 'spain',
      websiteType: 'ecommerce',
      competitionLevel: 'medium',
      targetCountries: ['spain'],
      contentLanguages: ['spanish']
    }
  });

  const values = watch();

  // Calculate region multiplier
  const regionMultiplier = {
    spain: 1.0,
    latam: 0.8,
    usa_hispanic: 1.2,
    global_spanish: 1.5
  }[values.marketRegion] || 1;

  // Calculate website type multiplier
  const websiteMultiplier = {
    ecommerce: 1.2,
    local: 0.8,
    corporate: 1.0,
    blog: 0.9
  }[values.websiteType] || 1;

  // Calculate competition multiplier
  const competitionMultiplier = {
    low: 0.8,
    medium: 1.0,
    high: 1.3
  }[values.competitionLevel] || 1;

  // Calculate base budget (% of revenue)
  const basePercentage = 5;
  const baseMonthlyBudget = values.monthlyRevenue * (basePercentage / 100);

  // Calculate final budget with multipliers
  const recommendedBudget = Math.round(
    baseMonthlyBudget * regionMultiplier * websiteMultiplier * competitionMultiplier
  );

  return (
    <CalculatorLayout
      title="Spanish SEO Budget Calculator | Calculate Your Spanish SEO Investment"
      description="Use our Spanish SEO Budget Calculator to determine the optimal SEO investment for Spanish-language markets. Get customized Spanish SEO budget recommendations."
    >
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Spanish SEO Budget Calculator: Plan Your Spanish Market SEO Investment</h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Enter Your Spanish SEO Budget Details</h2>
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Monthly Revenue ($)
              </label>
              <input
                type="number"
                {...register('monthlyRevenue')}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Spanish Market Region
              </label>
              <select
                {...register('marketRegion')}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              >
                <option value="spain">Spain</option>
                <option value="latam">Latin America</option>
                <option value="usa_hispanic">US Hispanic Market</option>
                <option value="global_spanish">Global Spanish Markets</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Website Type
              </label>
              <select
                {...register('websiteType')}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              >
                <option value="ecommerce">E-commerce</option>
                <option value="local">Local Business</option>
                <option value="corporate">Corporate Site</option>
                <option value="blog">Blog/Content Site</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Competition Level in Spanish Market
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
          </form>
        </div>

        <div className="bg-blue-50 p-6 rounded-lg">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Your Spanish SEO Budget Recommendations</h2>
          <div className="space-y-4">
            <div>
              <p className="text-sm text-gray-600">Recommended Monthly Spanish SEO Budget</p>
              <p className="text-3xl font-bold text-blue-600">
                ${recommendedBudget.toLocaleString()}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Quarterly Spanish SEO Investment</p>
              <p className="text-2xl font-bold text-green-600">
                ${(recommendedBudget * 3).toLocaleString()}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Annual Spanish SEO Strategy Budget</p>
              <p className="text-2xl font-bold text-purple-600">
                ${(recommendedBudget * 12).toLocaleString()}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 prose max-w-none">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Use the Spanish SEO Budget Calculator</h2>
        
        <p>
          Our Spanish SEO Budget Calculator is specifically designed to help businesses determine the optimal investment for Spanish-language SEO campaigns. Whether you're targeting Spain, Latin America, or the US Hispanic market, this calculator provides customized budget recommendations based on your specific market needs.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-3">Understanding Spanish SEO Budget Factors</h3>
        
        <p>
          When calculating your Spanish SEO budget, several key factors specific to Spanish-language markets must be considered:
        </p>

        <ul className="list-disc pl-6 mb-6">
          <li><strong>Market Region Impact:</strong> Different Spanish-speaking regions require varying levels of investment. Spain, Latin America, and the US Hispanic market each have unique characteristics that affect SEO costs.</li>
          <li><strong>Spanish Content Requirements:</strong> Creating high-quality, culturally relevant content in Spanish requires specialized resources and native speakers.</li>
          <li><strong>Regional Competition Levels:</strong> Competition varies significantly across Spanish-speaking markets, affecting the required investment.</li>
          <li><strong>Local Search Dynamics:</strong> Spanish SEO requires understanding local search behaviors and preferences in different regions.</li>
        </ul>

        <h3 className="text-xl font-semibold mb-3">Spanish SEO Budget Components</h3>

        <p>
          A comprehensive Spanish SEO budget typically includes:
        </p>

        <ul className="list-disc pl-6 mb-6">
          <li><strong>Spanish Content Creation:</strong> Native Spanish content writers and editors</li>
          <li><strong>Regional Keyword Research:</strong> Market-specific keyword analysis and targeting</li>
          <li><strong>Local Link Building:</strong> Building relationships with Spanish-language websites</li>
          <li><strong>Technical SEO:</strong> Implementing proper hreflang tags and regional targeting</li>
          <li><strong>Cultural Optimization:</strong> Adapting content for regional Spanish variations</li>
        </ul>

        <h3 className="text-xl font-semibold mb-3">Maximizing Your Spanish SEO Budget</h3>

        <p>
          To get the most from your Spanish SEO investment:
        </p>

        <ul className="list-disc pl-6 mb-6">
          <li>Focus on region-specific keyword opportunities</li>
          <li>Invest in native Spanish content creation</li>
          <li>Consider regional search engine preferences</li>
          <li>Adapt your strategy for local market conditions</li>
          <li>Monitor performance with region-specific metrics</li>
        </ul>

        <div className="bg-blue-50 p-6 rounded-lg mt-8">
          <h3 className="text-xl font-semibold mb-3">Get Expert Spanish SEO Guidance</h3>
          <p>
            Need help planning your Spanish SEO strategy? Let's discuss your Spanish market goals and create a customized SEO plan that maximizes your investment. 
            <a href="https://go.juliangoldie.com/strategy-session" className="text-blue-600 hover:text-blue-800 font-medium ml-2">
              Book your free Spanish SEO consultation
            </a>
          </p>
        </div>
      </div>
    </CalculatorLayout>
  );
};

export default SpanishSeoBudgetCalculator;