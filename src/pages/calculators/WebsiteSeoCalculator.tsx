import React from 'react';
import { useForm } from 'react-hook-form';
import CalculatorLayout from '../../components/CalculatorLayout';

interface WebsiteSeoInputs {
  websiteType: string;
  pageCount: number;
  targetKeywords: number;
  competitionLevel: string;
  currentTraffic: number;
  targetGrowth: number;
}

const WebsiteSeoCalculator = () => {
  const { register, watch } = useForm<WebsiteSeoInputs>({
    defaultValues: {
      websiteType: 'ecommerce',
      pageCount: 100,
      targetKeywords: 50,
      competitionLevel: 'medium',
      currentTraffic: 1000,
      targetGrowth: 200
    }
  });

  const values = watch();

  // Calculate base effort score
  const baseEffortScore = {
    blog: 1,
    ecommerce: 1.5,
    saas: 1.3,
    local: 0.8,
    enterprise: 2
  }[values.websiteType] || 1;

  // Calculate competition multiplier
  const competitionMultiplier = {
    low: 1,
    medium: 1.5,
    high: 2.5
  }[values.competitionLevel] || 1;

  // Calculate estimated implementation time (in months)
  const implementationTime = Math.ceil(
    (values.pageCount * 0.1 + values.targetKeywords * 0.2) * 
    baseEffortScore * 
    competitionMultiplier / 20
  );

  // Calculate potential traffic increase
  const trafficIncrease = Math.round(
    values.currentTraffic * (values.targetGrowth / 100)
  );

  // Calculate resource requirements
  const calculateResourceNeeds = () => {
    const baseHours = values.pageCount * 2 + values.targetKeywords * 3;
    return Math.ceil(baseHours * baseEffortScore * competitionMultiplier);
  };

  return (
    <CalculatorLayout
      title="Website SEO Calculator: Plan Your Website's SEO Strategy"
      description="Calculate your website's SEO requirements with our comprehensive website SEO calculator. Get insights into implementation time and resource needs."
    >
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Website SEO Calculator: Plan Your SEO Implementation</h1>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Enter Your Website Details</h2>
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Website Type
              </label>
              <select
                {...register('websiteType')}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              >
                <option value="blog">Blog</option>
                <option value="ecommerce">E-commerce</option>
                <option value="saas">SaaS</option>
                <option value="local">Local Business</option>
                <option value="enterprise">Enterprise</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Number of Pages
              </label>
              <input
                type="number"
                {...register('pageCount')}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Target Keywords
              </label>
              <input
                type="number"
                {...register('targetKeywords')}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Competition Level
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

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Current Monthly Traffic
              </label>
              <input
                type="number"
                {...register('currentTraffic')}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Target Growth Percentage
              </label>
              <input
                type="number"
                {...register('targetGrowth')}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
          </form>
        </div>

        <div className="bg-blue-50 p-6 rounded-lg">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Your Website SEO Requirements</h2>
          <div className="space-y-6">
            <div>
              <p className="text-sm text-gray-600">Implementation Timeline</p>
              <p className="text-4xl font-bold text-blue-600">
                {implementationTime} months
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-600">Resource Requirements</p>
              <p className="text-4xl font-bold text-green-600">
                {calculateResourceNeeds()} hours
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-600">Potential Traffic Increase</p>
              <p className="text-4xl font-bold text-purple-600">
                +{trafficIncrease.toLocaleString()} visitors
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 prose max-w-none">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Understanding Your Website SEO Requirements</h2>
        
        <p>
          Our website SEO calculator helps you plan and estimate the resources needed for a successful SEO implementation. This tool considers various factors specific to your website to provide accurate timeline and resource estimates.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-3">Website SEO Planning Factors</h3>
        
        <ul className="list-disc pl-6 mb-6">
          <li><strong>Website Type Impact:</strong> Different types of websites require varying SEO approaches.</li>
          <li><strong>Page Count Considerations:</strong> More pages require more optimization time and resources.</li>
          <li><strong>Keyword Strategy:</strong> Target keyword volume affects implementation complexity.</li>
          <li><strong>Competition Analysis:</strong> Higher competition requires more intensive SEO efforts.</li>
          <li><strong>Traffic Growth Goals:</strong> Ambitious growth targets need more comprehensive strategies.</li>
        </ul>

        <div className="bg-blue-50 p-6 rounded-lg mt-8">
          <h3 className="text-xl font-semibold mb-3">Get Your Custom Website SEO Plan</h3>
          <p>
            Ready to implement SEO for your website? Let's create a detailed SEO implementation plan tailored to your specific needs. 
            <a href="https://go.juliangoldie.com/strategy-session" className="text-blue-600 hover:text-blue-800 font-medium ml-2">
              Book your free website SEO consultation
            </a>
          </p>
        </div>
      </div>
    </CalculatorLayout>
  );
};

export default WebsiteSeoCalculator;