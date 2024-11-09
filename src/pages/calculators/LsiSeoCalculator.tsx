import React from 'react';
import { useForm } from 'react-hook-form';
import CalculatorLayout from '../../components/CalculatorLayout';

interface LsiSeoInputs {
  mainKeyword: string;
  contentLength: number;
  keywordDensity: number;
  relatedTerms: number;
  contentType: string;
  topicRelevance: number;
}

const LsiSeoCalculator = () => {
  const { register, watch } = useForm<LsiSeoInputs>({
    defaultValues: {
      mainKeyword: '',
      contentLength: 1500,
      keywordDensity: 2,
      relatedTerms: 10,
      contentType: 'article',
      topicRelevance: 8
    }
  });

  const values = watch();

  // Calculate recommended LSI keyword count
  const recommendedLsiCount = Math.round((values.contentLength / 100) * 1.5);

  // Calculate LSI density score
  const lsiDensityScore = Math.min(100, (values.relatedTerms / recommendedLsiCount) * 100);

  // Calculate content relevance score
  const relevanceScore = values.topicRelevance * 10;

  // Calculate overall LSI optimization score
  const lsiScore = Math.round(
    (lsiDensityScore * 0.4) +
    (relevanceScore * 0.4) +
    (Math.min(100, values.contentLength / 20) * 0.2)
  );

  // Calculate potential ranking improvement
  const rankingImprovement = Math.round(lsiScore / 20);

  return (
    <CalculatorLayout
      title="LSI SEO Calculator | Optimize Your Content with LSI Keywords"
      description="Use our LSI SEO calculator to optimize your content with Latent Semantic Indexing keywords. Improve your SEO with semantic search optimization."
    >
      <h1 className="text-3xl font-bold text-gray-900 mb-6">LSI SEO Calculator: Optimize Your Content with Semantic Keywords</h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Enter Your LSI SEO Details</h2>
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Main Target Keyword
              </label>
              <input
                type="text"
                {...register('mainKeyword')}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="Enter your main keyword"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Content Length (words)
              </label>
              <input
                type="number"
                {...register('contentLength')}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Main Keyword Density (%)
              </label>
              <input
                type="number"
                step="0.1"
                {...register('keywordDensity')}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Number of LSI Keywords Used
              </label>
              <input
                type="number"
                {...register('relatedTerms')}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Content Type
              </label>
              <select
                {...register('contentType')}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              >
                <option value="article">Blog Article</option>
                <option value="product">Product Page</option>
                <option value="service">Service Page</option>
                <option value="landing">Landing Page</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Topic Relevance Score (1-10)
              </label>
              <input
                type="number"
                min="1"
                max="10"
                {...register('topicRelevance')}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
          </form>
        </div>

        <div className="bg-blue-50 p-6 rounded-lg">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Your LSI SEO Analysis</h2>
          <div className="space-y-6">
            <div>
              <p className="text-sm text-gray-600">LSI SEO Score</p>
              <p className="text-4xl font-bold text-blue-600">
                {lsiScore}/100
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-600">Recommended LSI Keywords</p>
              <p className="text-3xl font-bold text-green-600">
                {recommendedLsiCount}
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-600">LSI Density Score</p>
              <p className="text-3xl font-bold text-purple-600">
                {lsiDensityScore.toFixed(1)}%
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-600">Potential Ranking Improvement</p>
              <p className="text-3xl font-bold text-indigo-600">
                +{rankingImprovement} positions
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 prose max-w-none">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Use the LSI SEO Calculator</h2>
        
        <p>
          Our LSI SEO calculator helps you optimize your content using Latent Semantic Indexing (LSI) keywords to improve your search engine rankings. LSI keywords are semantically related terms that help search engines better understand your content's context and relevance.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-3">Understanding LSI SEO Optimization</h3>
        
        <p>
          LSI SEO goes beyond traditional keyword optimization by focusing on semantic relationships between terms. This approach helps create more natural, context-rich content that performs better in modern search algorithms.
        </p>

        <h3 className="text-xl font-semibold mb-3">Key LSI SEO Metrics</h3>
        
        <ul className="list-disc pl-6 mb-6">
          <li><strong>LSI Keyword Count:</strong> The optimal number of semantically related terms to include</li>
          <li><strong>Content Length:</strong> Recommended word count for comprehensive topic coverage</li>
          <li><strong>Topic Relevance:</strong> How well your content aligns with search intent</li>
          <li><strong>LSI Density:</strong> The optimal distribution of semantic keywords</li>
        </ul>

        <h3 className="text-xl font-semibold mb-3">Implementing LSI SEO Strategy</h3>

        <p>
          To effectively use LSI keywords in your content:
        </p>

        <ul className="list-disc pl-6 mb-6">
          <li>Research related terms and synonyms for your main keyword</li>
          <li>Incorporate LSI keywords naturally throughout your content</li>
          <li>Maintain appropriate keyword density without overstuffing</li>
          <li>Focus on comprehensive topic coverage</li>
          <li>Use LSI keywords in headings and meta descriptions</li>
        </ul>

        <h3 className="text-xl font-semibold mb-3">Content Type Considerations</h3>

        <p>
          Different content types require different LSI approaches:
        </p>

        <ul className="list-disc pl-6 mb-6">
          <li><strong>Blog Articles:</strong> Use a wider range of LSI terms for comprehensive coverage</li>
          <li><strong>Product Pages:</strong> Focus on product-specific semantic terms</li>
          <li><strong>Service Pages:</strong> Include industry and service-related LSI keywords</li>
          <li><strong>Landing Pages:</strong> Balance conversion focus with semantic optimization</li>
        </ul>

        <h3 className="text-xl font-semibold mb-3">Measuring LSI SEO Success</h3>

        <p>
          Track these metrics to measure your LSI optimization success:
        </p>

        <ul className="list-disc pl-6 mb-6">
          <li>Search ranking improvements</li>
          <li>Topic relevance scores</li>
          <li>Content comprehensiveness</li>
          <li>User engagement metrics</li>
          <li>Semantic search visibility</li>
        </ul>

        <div className="bg-blue-50 p-6 rounded-lg mt-8">
          <h3 className="text-xl font-semibold mb-3">Optimize Your LSI SEO Strategy</h3>
          <p>
            Want to improve your semantic search optimization? Let's create a customized LSI SEO strategy for your content. 
            <a href="https://go.juliangoldie.com/strategy-session" className="text-blue-600 hover:text-blue-800 font-medium ml-2">
              Book your free LSI SEO consultation
            </a>
          </p>
        </div>
      </div>
    </CalculatorLayout>
  );
};

export default LsiSeoCalculator;