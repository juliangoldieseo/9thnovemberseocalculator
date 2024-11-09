import React from 'react';
import { useForm } from 'react-hook-form';
import CalculatorLayout from '../../components/CalculatorLayout';

interface SeoBudgetInputs {
  monthlyRevenue: number;
  profitMargin: number;
  growthTarget: number;
  industryType: string;
}

const SeoBudgetCalculator = () => {
  const { register, watch } = useForm<SeoBudgetInputs>({
    defaultValues: {
      monthlyRevenue: 50000,
      profitMargin: 20,
      growthTarget: 25,
      industryType: 'ecommerce'
    }
  });

  const formValues = watch();

  // Calculate industry multiplier
  const industryMultiplier = {
    ecommerce: 1.2,
    saas: 1.5,
    local: 0.8,
    enterprise: 2.0
  }[formValues.industryType] || 1;

  // Calculate base budget (% of revenue)
  const basePercentage = Math.min(
    Math.max(5, formValues.profitMargin * 0.2),
    15
  );

  // Adjust for growth target
  const growthMultiplier = 1 + (formValues.growthTarget / 100);

  // Calculate recommended monthly budget
  const recommendedBudget = Math.round(
    (formValues.monthlyRevenue * (basePercentage / 100)) *
    industryMultiplier *
    growthMultiplier
  );

  return (
    <CalculatorLayout
      title="SEO Budget Calculator: Plan Your SEO Investment Budget"
      description="Use our professional SEO budget calculator to determine your optimal SEO investment. Get data-driven SEO budget recommendations based on your business metrics."
    >
      <h1 className="text-3xl font-bold text-gray-900 mb-6">SEO Budget Calculator: Determine Your Optimal SEO Investment</h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Enter Your SEO Budget Details</h2>
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
                Profit Margin (%)
              </label>
              <input
                type="number"
                {...register('profitMargin')}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Growth Target (%)
              </label>
              <input
                type="number"
                {...register('growthTarget')}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
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
              </select>
            </div>
          </form>
        </div>

        <div className="bg-blue-50 p-6 rounded-lg">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Your SEO Budget Recommendations</h2>
          <div className="space-y-4">
            <div>
              <p className="text-sm text-gray-600">Recommended Monthly SEO Budget</p>
              <p className="text-3xl font-bold text-blue-600">
                ${recommendedBudget.toLocaleString()}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Quarterly SEO Budget Plan</p>
              <p className="text-3xl font-bold text-green-600">
                ${(recommendedBudget * 3).toLocaleString()}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Annual SEO Budget Strategy</p>
              <p className="text-3xl font-bold text-purple-600">
                ${(recommendedBudget * 12).toLocaleString()}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 prose max-w-none">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Use Our SEO Budget Calculator Tool</h2>
        
        <p>
          Our SEO budget calculator helps businesses determine the right SEO investment level based on revenue, profit margins, growth targets, and industry-specific factors. This data-driven SEO budgeting approach ensures your investment aligns with your business goals.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-3">SEO Budget Planning Factors to Consider</h3>
        
        <ul className="list-disc pl-6 mb-6">
          <li><strong>SEO Budget Revenue Impact:</strong> Your current monthly revenue helps scale the SEO budget appropriately.</li>
          <li><strong>SEO Budget Profit Considerations:</strong> Higher margins often allow for more aggressive SEO investment.</li>
          <li><strong>SEO Budget Growth Targets:</strong> Ambitious growth goals typically require larger SEO budgets.</li>
          <li><strong>Industry-Specific SEO Budgets:</strong> Different industries have varying SEO investment requirements.</li>
        </ul>

        <div className="bg-blue-50 p-6 rounded-lg mt-8">
          <h3 className="text-xl font-semibold mb-3">Get Expert SEO Budget Guidance</h3>
          <p>
            Need help planning your SEO budget effectively? Let's discuss your business goals and create a customized SEO budget strategy that maximizes your ROI. 
            <a href="https://go.juliangoldie.com/strategy-session" className="text-blue-600 hover:text-blue-800 font-medium ml-2">
              Book your free SEO budget consultation
            </a>
          </p>
        </div>
      </div>
    </CalculatorLayout>
  );
};

export default SeoBudgetCalculator;