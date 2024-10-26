import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Activity, Database, Cloud } from 'lucide-react';

const AlphaView = () => {
  const modules = [
    { icon: <Zap className="w-6 h-6" />, title: 'Power Systems', metric: '1.21 GW' },
    { icon: <Activity className="w-6 h-6" />, title: 'Neural Network', metric: '98.2%' },
    { icon: <Database className="w-6 h-6" />, title: 'Data Storage', metric: '1.8 PB' },
    { icon: <Cloud className="w-6 h-6" />, title: 'Cloud Sync', metric: '42 ms' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6"
    >
      {modules.map((module, i) => (
        <div
          key={i}
          className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-indigo-500/50 transition-colors"
        >
          <div className="flex items-start justify-between">
            <div className="text-indigo-400">{module.icon}</div>
            <div className="text-2xl font-bold text-indigo-400">{module.metric}</div>
          </div>
          <h3 className="text-xl font-semibold mt-4">{module.title}</h3>
        </div>
      ))}
    </motion.div>
  );
};

export default AlphaView;