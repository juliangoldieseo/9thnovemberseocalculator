import React from 'react';
import { useForm } from 'react-hook-form';
import CalculatorLayout from '../../components/CalculatorLayout';

interface SeoCostInputs {
  websitePages: number;
  competitionLevel: string;
  targetKeywords: number;
  contentCreation: boolean;
  technicalSeo: boolean;
  linkBuilding: boolean;
}

const SeoCostCalculator = () => {
  const { register, watch } = useForm<SeoCostInputs>({
    defaultValues: {
      websitePages: 10,
      competitionLevel: 'medium',
      targetKeywords: 20,
      contentCreation: true,
      technicalSeo: true,
      linkBuilding: true
    }
  });

  const formValues = watch();

  // Calculate base cost based on website pages
  const basePageCost = formValues.websitePages * 50;

  // Calculate competition multiplier
  const competitionMultiplier = {
    low: 1,
    medium: 1.5,
    high: 2
  }[formValues.competitionLevel] || 1;

  // Calculate keyword cost
  const keywordCost = formValues.targetKeywords * 25;

  // Calculate additional service costs
  const contentCost = formValues.contentCreation ? formValues.websitePages * 100 : 0;
  const technicalCost = formValues.technicalSeo ? 500 : 0;
  const linkBuildingCost = formValues.linkBuilding ? formValues.targetKeywords * 75 : 0;

  // Calculate total monthly cost
  const totalMonthlyCost = Math.round(
    (basePageCost + keywordCost + contentCost + technicalCost + linkBuildingCost) * 
    competitionMultiplier
  );

  return (
    <CalculatorLayout
      title="SEO Cost Calculator: Calculate Your SEO Service Costs & Pricing"
      description="Use our professional SEO cost calculator to estimate your SEO service costs. Get accurate SEO pricing based on your website needs and competition level."
    >
      <h1 className="text-3xl font-bold text-gray-900 mb-6">SEO Cost Calculator: Calculate Your SEO Service Pricing</h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Enter Your SEO Cost Details</h2>
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Number of Website Pages
              </label>
              <input
                type="number"
                {...register('websitePages')}
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
                Target Keywords
              </label>
              <input
                type="number"
                {...register('targetKeywords')}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div className="space-y-4">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  {...register('contentCreation')}
                  className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <label className="ml-2 block text-sm text-gray-700">
                  Content Creation
                </label>
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  {...register('technicalSeo')}
                  className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <label className="ml-2 block text-sm text-gray-700">
                  Technical SEO
                </label>
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  {...register('linkBuilding')}
                  className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <label className="ml-2 block text-sm text-gray-700">
                  Link Building
                </label>
              </div>
            </div>
          </form>
        </div>

        <div className="bg-blue-50 p-6 rounded-lg">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Your SEO Cost Calculation Results</h2>
          <div className="space-y-4">
            <div>
              <p className="text-sm text-gray-600">Monthly SEO Cost Estimate</p>
              <p className="text-3xl font-bold text-blue-600">
                ${totalMonthlyCost.toLocaleString()}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-600">6-Month SEO Cost Investment</p>
              <p className="text-3xl font-bold text-green-600">
                ${(totalMonthlyCost * 6).toLocaleString()}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Annual SEO Cost Projection</p>
              <p className="text-3xl font-bold text-purple-600">
                ${(totalMonthlyCost * 12).toLocaleString()}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 prose max-w-none">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Understanding Your SEO Cost Calculator Results</h2>
        
        <p>
          Our SEO cost calculator helps businesses accurately estimate their SEO service costs based on various pricing factors that influence the complexity and scope of an SEO campaign. Understanding these SEO costs is crucial for budgeting and planning your SEO investment effectively.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-3">SEO Cost Factors That Impact Your Pricing</h3>
        
        <ul className="list-disc pl-6 mb-6">
          <li><strong>Website Size SEO Costs:</strong> Larger websites require more SEO resources and higher costs for optimization.</li>
          <li><strong>SEO Competition Level Costs:</strong> Higher competition markets demand more intensive SEO efforts and increased pricing.</li>
          <li><strong>SEO Content Creation Costs:</strong> Quality content is essential for SEO success and impacts your total costs.</li>
          <li><strong>Technical SEO Service Costs:</strong> Ensuring your website meets search engine requirements affects pricing.</li>
          <li><strong>SEO Link Building Costs:</strong> Building authority through links is a crucial cost factor in SEO pricing.</li>
        </ul>

        <div className="bg-blue-50 p-6 rounded-lg mt-8">
          <h3 className="text-xl font-semibold mb-3">Get Your Custom SEO Cost Quote</h3>
          <p>
            Want a detailed breakdown of your SEO costs? Let's discuss your specific needs and create a customized SEO pricing plan that fits your budget. 
            <a href="https://go.juliangoldie.com/strategy-session" className="text-blue-600 hover:text-blue-800 font-medium ml-2">
              Get your free SEO cost consultation
            </a>
          </p>
        </div>
      </div>
    </CalculatorLayout>
  );
};

export default SeoCostCalculator;