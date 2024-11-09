import React from 'react';
import { useForm } from 'react-hook-form';
import CalculatorLayout from '../../components/CalculatorLayout';

interface GoogleSeoInputs {
  searchVolume: number;
  clickThroughRate: number;
  averagePosition: number;
  competitionScore: number;
  pageSpeed: number;
  mobileOptimization: number;
}

const GoogleSeoCalculator = () => {
  const { register, watch } = useForm<GoogleSeoInputs>({
    defaultValues: {
      searchVolume: 10000,
      clickThroughRate: 3.5,
      averagePosition: 4,
      competitionScore: 65,
      pageSpeed: 85,
      mobileOptimization: 90
    }
  });

  const values = watch();

  // Calculate potential monthly clicks
  const potentialClicks = Math.round(values.searchVolume * (values.clickThroughRate / 100));

  // Calculate position-based multiplier
  const positionMultiplier = Math.max(0, 1 - ((values.averagePosition - 1) * 0.1));

  // Calculate competition score (inverse)
  const competitionFactor = 1 - (values.competitionScore / 100);

  // Calculate technical score
  const technicalScore = (values.pageSpeed + values.mobileOptimization) / 2;

  // Calculate overall Google SEO score
  const googleSeoScore = Math.round(
    (positionMultiplier * 0.3 + 
    competitionFactor * 0.3 + 
    (technicalScore / 100) * 0.4) * 100
  );

  return (
    <CalculatorLayout
      title="Google SEO Calculator | Calculate Your Google Search Performance"
      description="Use our Google SEO Calculator to measure and improve your Google search performance. Get insights into your Google SEO potential with our free calculator."
    >
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Google SEO Calculator: Measure Your Google Search Success</h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Enter Your Google SEO Metrics</h2>
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Monthly Google Search Volume
              </label>
              <input
                type="number"
                {...register('searchVolume')}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Google Click-Through Rate (%)
              </label>
              <input
                type="number"
                step="0.1"
                {...register('clickThroughRate')}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Average Google Position
              </label>
              <input
                type="number"
                step="0.1"
                {...register('averagePosition')}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Google Competition Score (0-100)
              </label>
              <input
                type="number"
                {...register('competitionScore')}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Google PageSpeed Score (0-100)
              </label>
              <input
                type="number"
                {...register('pageSpeed')}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Google Mobile Score (0-100)
              </label>
              <input
                type="number"
                {...register('mobileOptimization')}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
          </form>
        </div>

        <div className="bg-blue-50 p-6 rounded-lg">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Your Google SEO Performance Results</h2>
          <div className="space-y-6">
            <div>
              <p className="text-sm text-gray-600">Google SEO Score</p>
              <p className="text-4xl font-bold text-blue-600">
                {googleSeoScore}/100
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-600">Potential Monthly Google Clicks</p>
              <p className="text-3xl font-bold text-green-600">
                {potentialClicks.toLocaleString()}
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-600">Position Performance</p>
              <p className="text-3xl font-bold text-purple-600">
                {(positionMultiplier * 100).toFixed(1)}%
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-600">Technical Google Score</p>
              <p className="text-3xl font-bold text-indigo-600">
                {technicalScore.toFixed(1)}%
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 prose max-w-none">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Use the Google SEO Calculator</h2>
        
        <p>
          Our Google SEO Calculator is designed to help you measure and improve your performance in Google search results. This comprehensive tool analyzes key metrics that Google uses to rank websites and provides actionable insights for optimization.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-3">Understanding Google SEO Calculator Metrics</h3>
        
        <p>
          The Google SEO Calculator uses several critical metrics that directly impact your Google search performance:
        </p>

        <ul className="list-disc pl-6 mb-6">
          <li><strong>Google Search Volume:</strong> The number of monthly searches for your target keywords on Google</li>
          <li><strong>Google Click-Through Rate:</strong> The percentage of Google searchers who click on your results</li>
          <li><strong>Google Position:</strong> Your average ranking position in Google search results</li>
          <li><strong>Google Competition Score:</strong> The difficulty level of ranking in Google for your keywords</li>
          <li><strong>Google PageSpeed Score:</strong> Your website's performance score from Google PageSpeed Insights</li>
          <li><strong>Google Mobile Score:</strong> Your site's mobile optimization score from Google</li>
        </ul>

        <h3 className="text-xl font-semibold mb-3">Improving Your Google SEO Score</h3>

        <p>
          To enhance your Google SEO performance, focus on these key areas:
        </p>

        <ul className="list-disc pl-6 mb-6">
          <li><strong>Google Search Optimization:</strong> Target relevant keywords with good search volume</li>
          <li><strong>Google Click-Through Optimization:</strong> Improve your meta titles and descriptions</li>
          <li><strong>Google Position Improvement:</strong> Create high-quality content that matches search intent</li>
          <li><strong>Technical Google Optimization:</strong> Enhance page speed and mobile responsiveness</li>
          <li><strong>Google Competition Strategy:</strong> Focus on keywords with manageable competition levels</li>
        </ul>

        <h3 className="text-xl font-semibold mb-3">Maximizing Your Google SEO Results</h3>

        <p>
          Follow these best practices to maximize your Google SEO performance:
        </p>

        <ul className="list-disc pl-6 mb-6">
          <li>Regularly monitor your Google Search Console data</li>
          <li>Optimize for Google's mobile-first indexing</li>
          <li>Implement structured data for better Google visibility</li>
          <li>Focus on user experience signals that Google values</li>
          <li>Build high-quality backlinks from relevant websites</li>
        </ul>

        <div className="bg-blue-50 p-6 rounded-lg mt-8">
          <h3 className="text-xl font-semibold mb-3">Improve Your Google SEO Performance</h3>
          <p>
            Want to enhance your Google search rankings? Let's create a customized Google SEO strategy for your website. 
            <a href="https://go.juliangoldie.com/strategy-session" className="text-blue-600 hover:text-blue-800 font-medium ml-2">
              Book your free Google SEO consultation
            </a>
          </p>
        </div>
      </div>
    </CalculatorLayout>
  );
};

export default GoogleSeoCalculator;