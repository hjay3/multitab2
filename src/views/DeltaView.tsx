import React from 'react';
import { motion } from 'framer-motion';

const DeltaView = () => {
  const tasks = [
    { title: 'System Update', progress: 75, status: 'In Progress' },
    { title: 'Data Migration', progress: 90, status: 'Almost Done' },
    { title: 'Security Audit', progress: 30, status: 'Started' },
    { title: 'Backup Process', progress: 100, status: 'Completed' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      {tasks.map((task, i) => (
        <div
          key={i}
          className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700"
        >
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-semibold">{task.title}</h3>
            <span className="px-3 py-1 rounded-full text-sm bg-indigo-500/20 text-indigo-400">
              {task.status}
            </span>
          </div>
          
          <div className="relative pt-1">
            <div className="overflow-hidden h-2 mb-4 text-xs flex rounded-full bg-gray-700">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${task.progress}%` }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-indigo-500"
              />
            </div>
          </div>
        </div>
      ))}
    </motion.div>
  );
};

export default DeltaView;