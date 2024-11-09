import React from 'react';
import { Helmet } from 'react-helmet-async';

interface CalculatorLayoutProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

const CalculatorLayout: React.FC<CalculatorLayoutProps> = ({
  title,
  description,
  children,
}) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">{title}</h1>
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          {children}
        </div>
      </div>
    </>
  );
};

export default CalculatorLayout;