import React from 'react';
import { User, Bell } from 'lucide-react';

export const Navbar: React.FC = () => {
  return (
    <div className="h-16 bg-white shadow-sm border-b fixed top-0 left-64 right-0 z-10">
      <div className="h-full px-6 flex items-center justify-between">
        <h2 className="text-xl font-semibold">Welcome back!</h2>
        <div className="flex items-center space-x-4">
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <Bell className="w-5 h-5 text-gray-600" />
          </button>
          <button className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <User className="w-5 h-5 text-gray-600" />
            <span className="text-sm font-medium">John Doe</span>
          </button>
        </div>
      </div>
    </div>
  );
};
