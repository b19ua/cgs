
import React, { ReactNode } from 'react';

interface ServiceProps {
  title: string;
  icon: ReactNode;
  children: ReactNode;
}

const Service = ({ title, icon, children }: ServiceProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center mb-4">
        <div className="mr-4 text-cgs-red">{icon}</div>
        <h3 className="text-xl font-bold text-cgs-dark-gray">{title}</h3>
      </div>
      <div className="text-cgs-dark-gray">{children}</div>
    </div>
  );
};

export default Service;
