import React from 'react';
import { motion } from 'framer-motion';
import { LineChart, ArrowUp, ArrowDown } from 'lucide-react';

const BetaView = () => {
  const stats = [
    { label: 'Revenue', value: '$12,875', change: '+12%', up: true },
    { label: 'Active Users', value: '1,234', change: '+25%', up: true },
    { label: 'Conversion', value: '3.2%', change: '-2%', up: false },
    { label: 'Growth', value: '15.4%', change: '+5%', up: true },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
    >
      {stats.map((stat, i) => (
        <div
          key={i}
          className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-indigo-500/50 transition-colors"
        >
          <div className="flex items-center justify-between">
            <LineChart className="w-6 h-6 text-indigo-400" />
            <div className={`flex items-center space-x-1 ${stat.up ? 'text-green-400' : 'text-red-400'}`}>
              {stat.up ? <ArrowUp className="w-4 h-4" /> : <ArrowDown className="w-4 h-4" />}
              <span>{stat.change}</span>
            </div>
          </div>
          <h3 className="text-2xl font-bold mt-4">{stat.value}</h3>
          <p className="text-gray-400 mt-1">{stat.label}</p>
        </div>
      ))}
    </motion.div>
  );
};

export default BetaView;