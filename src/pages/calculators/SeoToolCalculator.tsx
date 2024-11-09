import React from 'react';
import { useForm } from 'react-hook-form';
import CalculatorLayout from '../../components/CalculatorLayout';

interface SeoToolInputs {
  websiteSize: string;
  industryType: string;
  monthlyBudget: number;
  serviceLevel: string;
  contentNeeds: number;
  technicalOptimization: boolean;
  linkBuilding: boolean;
  monthlyReporting: boolean;
}

const SeoToolCalculator = () => {
  const { register, watch } = useForm<SeoToolInputs>({
    defaultValues: {
      websiteSize: 'medium',
      industryType: 'ecommerce',
      monthlyBudget: 2000,
      serviceLevel: 'professional',
      contentNeeds: 4,
      technicalOptimization: true,
      linkBuilding: true,
      monthlyReporting: true
    }
  });

  const values = watch();

  // Calculate base cost
  const baseCosts = {
    small: 500,
    medium: 1000,
    large: 2000,
    enterprise: 5000
  }[values.websiteSize] || 1000;

  // Industry multiplier
  const industryMultiplier = {
    ecommerce: 1.2,
    saas: 1.5,
    local: 0.8,
    enterprise: 2.0,
    healthcare: 1.3,
    finance: 1.6
  }[values.industryType] || 1;

  // Service level multiplier
  const serviceLevelMultiplier = {
    basic: 0.7,
    professional: 1,
    premium: 1.5,
    enterprise: 2
  }[values.serviceLevel] || 1;

  // Calculate additional service costs
  const contentCost = values.contentNeeds * 200;
  const technicalCost = values.technicalOptimization ? 500 : 0;
  const linkBuildingCost = values.linkBuilding ? 800 : 0;
  const reportingCost = values.monthlyReporting ? 300 : 0;

  // Calculate total monthly cost
  const totalMonthlyCost = Math.round(
    (baseCosts + contentCost + technicalCost + linkBuildingCost + reportingCost) *
    industryMultiplier *
    serviceLevelMultiplier
  );

  return (
    <CalculatorLayout
      title="SEO Cost Calculator Tool - Professional SEO Pricing Calculator"
      description="Calculate your SEO service costs with our professional SEO cost calculator tool. Get accurate SEO pricing based on your specific needs."
    >
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Professional SEO Cost Calculator Tool</h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Website Size
              </label>
              <select
                {...register('websiteSize')}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              >
                <option value="small">Small (1-10 pages)</option>
                <option value="medium">Medium (11-50 pages)</option>
                <option value="large">Large (51-200 pages)</option>
                <option value="enterprise">Enterprise (200+ pages)</option>
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
                <option value="local">Local Business</option>
                <option value="enterprise">Enterprise</option>
                <option value="healthcare">Healthcare</option>
                <option value="finance">Finance</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Service Level
              </label>
              <select
                {...register('serviceLevel')}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              >
                <option value="basic">Basic SEO</option>
                <option value="professional">Professional SEO</option>
                <option value="premium">Premium SEO</option>
                <option value="enterprise">Enterprise SEO</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Monthly Content Pieces Needed
              </label>
              <input
                type="number"
                {...register('contentNeeds')}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div className="space-y-4">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  {...register('technicalOptimization')}
                  className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <label className="ml-2 block text-sm text-gray-700">
                  Technical SEO Optimization
                </label>
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  {...register('linkBuilding')}
                  className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <label className="ml-2 block text-sm text-gray-700">
                  Link Building Services
                </label>
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  {...register('monthlyReporting')}
                  className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <label className="ml-2 block text-sm text-gray-700">
                  Monthly Performance Reporting
                </label>
              </div>
            </div>
          </form>
        </div>

        <div className="bg-blue-50 p-6 rounded-lg">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Your SEO Cost Breakdown</h2>
          <div className="space-y-4">
            <div>
              <p className="text-sm text-gray-600">Monthly SEO Investment</p>
              <p className="text-3xl font-bold text-blue-600">
                ${totalMonthlyCost.toLocaleString()}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Quarterly Investment</p>
              <p className="text-2xl font-bold text-green-600">
                ${(totalMonthlyCost * 3).toLocaleString()}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Annual Investment</p>
              <p className="text-2xl font-bold text-purple-600">
                ${(totalMonthlyCost * 12).toLocaleString()}
              </p>
            </div>
          </div>

          <div className="mt-6 border-t border-gray-200 pt-4">
            <h3 className="font-semibold mb-2">Included Services:</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Keyword Research & Strategy</li>
              <li>• On-Page SEO Optimization</li>
              {values.technicalOptimization && <li>• Technical SEO Audit & Fixes</li>}
              {values.linkBuilding && <li>• Link Building Campaign</li>}
              {values.monthlyReporting && <li>• Monthly Performance Reports</li>}
              <li>• {values.contentNeeds} Content Pieces/Month</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-12 prose max-w-none">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Understanding Your SEO Investment</h2>
        
        <p>
          This professional SEO cost calculator tool helps you understand the investment required for a comprehensive SEO campaign. The pricing is based on industry standards and considers various factors that influence SEO success.
        </p>

        <div className="bg-blue-50 p-6 rounded-lg mt-8">
          <h3 className="text-xl font-semibold mb-3">Get a Customized SEO Quote</h3>
          <p>
            Want a detailed SEO proposal tailored to your specific needs? Let's discuss your goals and create a custom SEO strategy that fits your budget.
            <a href="https://go.juliangoldie.com/strategy-session" className="text-blue-600 hover:text-blue-800 font-medium ml-2">
              Book your free SEO consultation
            </a>
          </p>
        </div>
      </div>
    </CalculatorLayout>
  );
};

export default SeoToolCalculator;