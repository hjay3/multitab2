import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Star } from 'lucide-react';

const EpsilonView = () => {
  const images = [
    {
      url: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
      title: 'Deep Space Nebula',
      description: 'A stunning view of cosmic clouds',
    },
    {
      url: 'https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?auto=format&fit=crop&w=800&q=80',
      title: 'Galaxy Formation',
      description: 'Spiral arms of a distant galaxy',
    },
    {
      url: 'https://images.unsplash.com/photo-1462332420958-a05d1e002413?auto=format&fit=crop&w=800&q=80',
      title: 'Star Cluster',
      description: 'Ancient stellar nursery',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-8"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {images.map((img, i) => (
          <div
            key={i}
            className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 overflow-hidden"
          >
            <div className="relative">
              <img
                src={img.url}
                alt={img.title}
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-xl font-bold">{img.title}</h3>
                <p className="text-sm text-gray-200">{img.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
        <div className="flex items-center space-x-3 mb-4">
          <Rocket className="w-6 h-6 text-indigo-400" />
          <h2 className="text-xl font-bold">Mission Status</h2>
        </div>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <Star className="w-5 h-5 text-yellow-400" />
            <div className="flex-1 mx-4">
              <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '85%' }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className="h-full bg-gradient-to-r from-indigo-500 to-purple-500"
                />
              </div>
            </div>
            <span className="text-indigo-400 font-mono">85%</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default EpsilonView;