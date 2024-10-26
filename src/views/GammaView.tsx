import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Send } from 'lucide-react';

const GammaView = () => {
  const [inputValue, setInputValue] = useState('');
  const [history, setHistory] = useState(['System initialized', 'Ready for input']);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    
    setHistory(prev => [...prev, `> ${inputValue}`]);
    setInputValue('');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-2xl mx-auto"
    >
      <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
        <div className="flex items-center space-x-2 mb-4">
          <Terminal className="w-5 h-5 text-indigo-400" />
          <h2 className="text-xl font-semibold">Command Terminal</h2>
        </div>

        <form onSubmit={handleSubmit} className="mb-4">
          <div className="relative">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="w-full bg-gray-900/50 border-2 border-indigo-500/50 rounded-xl px-6 py-4 text-xl focus:outline-none focus:border-indigo-400 transition-colors pr-12"
              placeholder="Enter command..."
            />
            <button
              type="submit"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-indigo-400 hover:text-indigo-300 transition-colors"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </form>

        <div className="space-y-2">
          {history.map((text, i) => (
            <div key={i} className="flex items-center space-x-3 text-gray-400">
              <span className="text-indigo-400 font-mono">❯</span>
              <span className="font-mono">{text}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default GammaView;