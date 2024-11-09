import React from 'react';
import { useForm } from 'react-hook-form';
import CalculatorLayout from '../../components/CalculatorLayout';

interface ShareOfVoiceInputs {
  totalSearchVolume: number;
  organicTraffic: number;
  competitors: {
    name: string;
    traffic: number;
  }[];
  rankingKeywords: number;
  totalKeywords: number;
  averagePosition: number;
}

const ShareOfVoiceSeoCalculator = () => {
  const { register, watch } = useForm<ShareOfVoiceInputs>({
    defaultValues: {
      totalSearchVolume: 100000,
      organicTraffic: 20000,
      competitors: [
        { name: 'Competitor 1', traffic: 30000 },
        { name: 'Competitor 2', traffic: 25000 },
        { name: 'Competitor 3', traffic: 15000 }
      ],
      rankingKeywords: 500,
      totalKeywords: 1000,
      averagePosition: 4.5
    }
  });

  const values = watch();

  // Calculate total market traffic
  const totalMarketTraffic = values.organicTraffic + 
    values.competitors.reduce((sum, comp) => sum + comp.traffic, 0);

  // Calculate Share of Voice percentage
  const shareOfVoice = (values.organicTraffic / totalMarketTraffic) * 100;

  // Calculate keyword coverage
  const keywordCoverage = (values.rankingKeywords / values.totalKeywords) * 100;

  // Calculate visibility score (based on average position)
  const visibilityScore = Math.max(0, 100 - (values.averagePosition * 10));

  // Calculate overall SEO market share
  const overallMarketShare = (shareOfVoice + keywordCoverage + visibilityScore) / 3;

  return (
    <CalculatorLayout
      title="Share of Voice SEO Calculator | Calculate Your SEO Market Share"
      description="Use our Share of Voice SEO Calculator to measure your SEO market share and visibility compared to competitors. Get insights into your SEO performance."
    >
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Share of Voice SEO Calculator: Measure Your SEO Market Share</h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Enter Your Share of Voice SEO Metrics</h2>
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Total Monthly Search Volume
              </label>
              <input
                type="number"
                {...register('totalSearchVolume')}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Your Monthly Organic Traffic
              </label>
              <input
                type="number"
                {...register('organicTraffic')}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Number of Ranking Keywords
              </label>
              <input
                type="number"
                {...register('rankingKeywords')}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Total Target Keywords
              </label>
              <input
                type="number"
                {...register('totalKeywords')}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Average Keyword Position
              </label>
              <input
                type="number"
                step="0.1"
                {...register('averagePosition')}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
          </form>
        </div>

        <div className="bg-blue-50 p-6 rounded-lg">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Your Share of Voice SEO Analysis</h2>
          <div className="space-y-6">
            <div>
              <p className="text-sm text-gray-600">SEO Share of Voice</p>
              <p className="text-4xl font-bold text-blue-600">
                {shareOfVoice.toFixed(1)}%
              </p>
              <p className="text-sm text-gray-500">Your share of total organic traffic</p>
            </div>

            <div>
              <p className="text-sm text-gray-600">Keyword Coverage</p>
              <p className="text-4xl font-bold text-green-600">
                {keywordCoverage.toFixed(1)}%
              </p>
              <p className="text-sm text-gray-500">Percentage of target keywords ranked</p>
            </div>

            <div>
              <p className="text-sm text-gray-600">SEO Visibility Score</p>
              <p className="text-4xl font-bold text-purple-600">
                {visibilityScore.toFixed(1)}%
              </p>
              <p className="text-sm text-gray-500">Based on average ranking position</p>
            </div>

            <div className="pt-4 border-t border-gray-200">
              <p className="text-sm text-gray-600">Overall SEO Market Share</p>
              <p className="text-4xl font-bold text-indigo-600">
                {overallMarketShare.toFixed(1)}%
              </p>
              <p className="text-sm text-gray-500">Combined SEO performance score</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 prose max-w-none">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Understanding Share of Voice SEO Calculator Results</h2>
        
        <p>
          The Share of Voice SEO Calculator is an essential tool for measuring your website's visibility and market share in search engine results. This comprehensive calculator helps you understand your SEO performance relative to competitors and identify opportunities for improvement.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-3">What is SEO Share of Voice?</h3>
        
        <p>
          SEO Share of Voice represents your brand's visibility and dominance in organic search results compared to your competitors. It's a crucial metric that helps you understand your market position and track SEO progress over time.
        </p>

        <h3 className="text-xl font-semibold mb-3">Key Share of Voice SEO Metrics</h3>
        
        <ul className="list-disc pl-6 mb-6">
          <li><strong>SEO Share of Voice:</strong> Your percentage of total organic traffic in your market</li>
          <li><strong>Keyword Coverage:</strong> The proportion of target keywords where you have rankings</li>
          <li><strong>Visibility Score:</strong> Overall visibility based on ranking positions</li>
          <li><strong>Market Share:</strong> Combined measure of your SEO presence</li>
        </ul>

        <h3 className="text-xl font-semibold mb-3">How to Improve Your SEO Share of Voice</h3>

        <p>
          To increase your Share of Voice in SEO:
        </p>

        <ul className="list-disc pl-6 mb-6">
          <li>Target high-value keywords with significant search volume</li>
          <li>Improve rankings for existing keywords</li>
          <li>Expand your keyword coverage</li>
          <li>Create high-quality, authoritative content</li>
          <li>Build strong backlink profiles</li>
          <li>Monitor and outperform competitor strategies</li>
        </ul>

        <h3 className="text-xl font-semibold mb-3">Measuring SEO Share of Voice Success</h3>

        <p>
          Track these metrics to measure improvement in your SEO Share of Voice:
        </p>

        <ul className="list-disc pl-6 mb-6">
          <li>Monthly organic traffic growth</li>
          <li>Keyword ranking improvements</li>
          <li>Competitor position changes</li>
          <li>Market share percentage increases</li>
          <li>Overall visibility score trends</li>
        </ul>

        <div className="bg-blue-50 p-6 rounded-lg mt-8">
          <h3 className="text-xl font-semibold mb-3">Maximize Your SEO Share of Voice</h3>
          <p>
            Want to increase your Share of Voice in SEO? Let's create a strategy to improve your market share and visibility. 
            <a href="https://go.juliangoldie.com/strategy-session" className="text-blue-600 hover:text-blue-800 font-medium ml-2">
              Book your free Share of Voice SEO consultation
            </a>
          </p>
        </div>
      </div>
    </CalculatorLayout>
  );
};

export default ShareOfVoiceSeoCalculator;