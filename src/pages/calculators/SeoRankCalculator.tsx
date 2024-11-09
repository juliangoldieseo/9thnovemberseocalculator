import React from 'react';
import { useForm } from 'react-hook-form';
import CalculatorLayout from '../../components/CalculatorLayout';

interface SeoRankInputs {
  searchVolume: number;
  competitionScore: number;
  domainAuthority: number;
  contentQuality: number;
  onPageOptimization: number;
  backlinks: number;
}

const SeoRankCalculator = () => {
  const { register, watch } = useForm<SeoRankInputs>({
    defaultValues: {
      searchVolume: 1000,
      competitionScore: 50,
      domainAuthority: 30,
      contentQuality: 8,
      onPageOptimization: 7,
      backlinks: 100
    }
  });

  const values = watch();

  // Calculate ranking potential score
  const calculateRankingPotential = () => {
    const daScore = values.domainAuthority * 0.3;
    const contentScore = values.contentQuality * 10 * 0.25;
    const onPageScore = values.onPageOptimization * 10 * 0.25;
    const backlinkScore = Math.min((values.backlinks / 1000) * 100, 100) * 0.2;

    return Math.round((daScore + contentScore + onPageScore + backlinkScore) * 100) / 100;
  };

  // Calculate estimated ranking position
  const calculateEstimatedRanking = () => {
    const potential = calculateRankingPotential();
    const competition = values.competitionScore;
    
    if (potential >= competition * 1.5) return '1-3';
    if (potential >= competition * 1.2) return '4-6';
    if (potential >= competition) return '7-10';
    if (potential >= competition * 0.8) return '11-20';
    return '20+';
  };

  // Calculate monthly traffic potential
  const calculateTrafficPotential = () => {
    const rankingPosition = calculateEstimatedRanking();
    const clickThroughRates: { [key: string]: number } = {
      '1-3': 0.3,
      '4-6': 0.15,
      '7-10': 0.05,
      '11-20': 0.02,
      '20+': 0.01
    };

    return Math.round(values.searchVolume * clickThroughRates[rankingPosition]);
  };

  return (
    <CalculatorLayout
      title="SEO Rank Calculator: Estimate Your Search Engine Rankings"
      description="Calculate your potential search engine rankings with our SEO rank calculator. Get insights into your ranking potential and traffic estimates."
    >
      <h1 className="text-3xl font-bold text-gray-900 mb-6">SEO Rank Calculator: Predict Your Search Rankings</h1>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Enter Your SEO Ranking Factors</h2>
          <form className="space-y-6">
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
                Competition Score (0-100)
              </label>
              <input
                type="number"
                min="0"
                max="100"
                {...register('competitionScore')}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Domain Authority (0-100)
              </label>
              <input
                type="number"
                min="0"
                max="100"
                {...register('domainAuthority')}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Content Quality Score (1-10)
              </label>
              <input
                type="number"
                min="1"
                max="10"
                {...register('contentQuality')}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                On-Page Optimization Score (1-10)
              </label>
              <input
                type="number"
                min="1"
                max="10"
                {...register('onPageOptimization')}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Number of Quality Backlinks
              </label>
              <input
                type="number"
                {...register('backlinks')}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
          </form>
        </div>

        <div className="bg-blue-50 p-6 rounded-lg">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Your SEO Ranking Potential</h2>
          <div className="space-y-6">
            <div>
              <p className="text-sm text-gray-600">Ranking Potential Score</p>
              <p className="text-4xl font-bold text-blue-600">
                {calculateRankingPotential()}/100
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-600">Estimated Ranking Position</p>
              <p className="text-4xl font-bold text-green-600">
                {calculateEstimatedRanking()}
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-600">Monthly Traffic Potential</p>
              <p className="text-4xl font-bold text-purple-600">
                {calculateTrafficPotential().toLocaleString()} visits
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 prose max-w-none">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Understanding Your SEO Ranking Potential</h2>
        
        <p>
          Our SEO rank calculator helps you estimate your potential search engine rankings based on key SEO metrics and competitive factors. This tool provides insights into your ranking potential and expected organic traffic.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-3">SEO Ranking Factors Explained</h3>
        
        <ul className="list-disc pl-6 mb-6">
          <li><strong>Search Volume:</strong> Monthly searches for your target keyword.</li>
          <li><strong>Competition Score:</strong> Difficulty level of ranking for your keyword.</li>
          <li><strong>Domain Authority:</strong> Overall strength of your website.</li>
          <li><strong>Content Quality:</strong> Relevance and value of your content.</li>
          <li><strong>On-Page Optimization:</strong> Technical SEO implementation.</li>
          <li><strong>Backlinks:</strong> Number of quality websites linking to you.</li>
        </ul>

        <div className="bg-blue-50 p-6 rounded-lg mt-8">
          <h3 className="text-xl font-semibold mb-3">Improve Your SEO Rankings</h3>
          <p>
            Want to achieve better search engine rankings? Let's create a customized SEO strategy to improve your ranking potential. 
            <a href="https://go.juliangoldie.com/strategy-session" className="text-blue-600 hover:text-blue-800 font-medium ml-2">
              Book your free SEO ranking consultation
            </a>
          </p>
        </div>
      </div>
    </CalculatorLayout>
  );
};

export default SeoRankCalculator;