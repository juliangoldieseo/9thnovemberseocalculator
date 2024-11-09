import React from 'react';
import { useForm } from 'react-hook-form';
import CalculatorLayout from '../../components/CalculatorLayout';

interface SeoScoreInputs {
  titleOptimization: number;
  contentQuality: number;
  backlinks: number;
  loadingSpeed: number;
  mobileOptimization: number;
  userExperience: number;
  technicalSeo: number;
}

const SeoScoreCalculator = () => {
  const { register, watch } = useForm<SeoScoreInputs>({
    defaultValues: {
      titleOptimization: 7,
      contentQuality: 7,
      backlinks: 5,
      loadingSpeed: 8,
      mobileOptimization: 8,
      userExperience: 7,
      technicalSeo: 6
    }
  });

  const values = watch();
  
  // Calculate weighted scores
  const weights = {
    titleOptimization: 0.15,
    contentQuality: 0.25,
    backlinks: 0.2,
    loadingSpeed: 0.1,
    mobileOptimization: 0.1,
    userExperience: 0.1,
    technicalSeo: 0.1
  };

  const totalScore = Object.entries(values).reduce((total, [key, value]) => {
    return total + (value * weights[key as keyof typeof weights]);
  }, 0) * 10;

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <CalculatorLayout
      title="SEO Score Calculator: Check Your Website's SEO Health"
      description="Calculate your website's SEO score with our comprehensive SEO score calculator. Get instant insights into your SEO performance."
    >
      <h1 className="text-3xl font-bold text-gray-900 mb-6">SEO Score Calculator: Rate Your Website's SEO Performance</h1>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Rate Your SEO Factors (1-10)</h2>
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Title & Meta Optimization
              </label>
              <input
                type="range"
                min="1"
                max="10"
                step="1"
                {...register('titleOptimization')}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-gray-500">
                <span>Poor</span>
                <span>Excellent</span>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Content Quality & Relevance
              </label>
              <input
                type="range"
                min="1"
                max="10"
                step="1"
                {...register('contentQuality')}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-gray-500">
                <span>Poor</span>
                <span>Excellent</span>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Backlink Profile
              </label>
              <input
                type="range"
                min="1"
                max="10"
                step="1"
                {...register('backlinks')}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-gray-500">
                <span>Poor</span>
                <span>Excellent</span>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Page Loading Speed
              </label>
              <input
                type="range"
                min="1"
                max="10"
                step="1"
                {...register('loadingSpeed')}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-gray-500">
                <span>Slow</span>
                <span>Fast</span>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Mobile Optimization
              </label>
              <input
                type="range"
                min="1"
                max="10"
                step="1"
                {...register('mobileOptimization')}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-gray-500">
                <span>Poor</span>
                <span>Excellent</span>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                User Experience
              </label>
              <input
                type="range"
                min="1"
                max="10"
                step="1"
                {...register('userExperience')}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-gray-500">
                <span>Poor</span>
                <span>Excellent</span>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Technical SEO
              </label>
              <input
                type="range"
                min="1"
                max="10"
                step="1"
                {...register('technicalSeo')}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-gray-500">
                <span>Poor</span>
                <span>Excellent</span>
              </div>
            </div>
          </form>
        </div>

        <div className="bg-blue-50 p-6 rounded-lg">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Your SEO Score Results</h2>
          <div className="space-y-6">
            <div>
              <p className="text-sm text-gray-600">Overall SEO Score</p>
              <p className={`text-5xl font-bold ${getScoreColor(totalScore)}`}>
                {Math.round(totalScore)}/100
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="font-semibold">Score Breakdown</h3>
              {Object.entries(values).map(([key, value]) => (
                <div key={key} className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">
                    {key.replace(/([A-Z])/g, ' $1').trim()}
                  </span>
                  <span className="font-semibold">
                    {value}/10
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 prose max-w-none">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Understanding Your SEO Score</h2>
        
        <p>
          Our SEO score calculator provides a comprehensive analysis of your website's search engine optimization performance. The score is calculated based on seven critical SEO factors, each weighted according to its importance in modern SEO practices.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-3">SEO Score Factors Explained</h3>
        
        <ul className="list-disc pl-6 mb-6">
          <li><strong>Title & Meta Optimization (15%):</strong> Quality of your page titles, meta descriptions, and header tags.</li>
          <li><strong>Content Quality & Relevance (25%):</strong> The value and relevance of your content to target keywords.</li>
          <li><strong>Backlink Profile (20%):</strong> Quality and quantity of websites linking to yours.</li>
          <li><strong>Page Loading Speed (10%):</strong> How quickly your pages load for users.</li>
          <li><strong>Mobile Optimization (10%):</strong> How well your site performs on mobile devices.</li>
          <li><strong>User Experience (10%):</strong> Overall usability and navigation of your website.</li>
          <li><strong>Technical SEO (10%):</strong> Implementation of technical SEO best practices.</li>
        </ul>

        <div className="bg-blue-50 p-6 rounded-lg mt-8">
          <h3 className="text-xl font-semibold mb-3">Improve Your SEO Score</h3>
          <p>
            Want to improve your SEO score and boost your search rankings? Let's analyze your website together and create a customized SEO improvement plan. 
            <a href="https://go.juliangoldie.com/strategy-session" className="text-blue-600 hover:text-blue-800 font-medium ml-2">
              Book your free SEO consultation
            </a>
          </p>
        </div>
      </div>
    </CalculatorLayout>
  );
};

export default SeoScoreCalculator;