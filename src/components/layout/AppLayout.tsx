import React from 'react';
import { Sidebar } from './Sidebar';
import { Outlet } from 'react-router-dom';

export function AppLayout() {
  return (
    <div className="flex h-screen w-full bg-gray-50 dark:bg-[#0A0A0A] text-gray-900 dark:text-gray-100 font-sans transition-colors duration-200">
      <Sidebar />
      <main className="flex-1 overflow-auto">
        <div className="h-20 border-b border-gray-100 dark:border-[#2A2A2A] bg-white dark:bg-[#141414] flex items-center px-8 sticky top-0 z-10 transition-colors duration-200 shadow-sm">
          <h1 className="font-semibold text-xl text-gray-900 dark:text-white tracking-tight">Admin Dashboard</h1>
          <div className="ml-auto flex items-center gap-4">
            <div className="text-sm text-gray-500 dark:text-gray-400 font-medium">
              Letzter Login: Heute, 08:30
            </div>
            <div className="h-10 w-10 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800 flex items-center justify-center text-blue-700 dark:text-blue-400 font-bold shadow-sm">
              AD
            </div>
          </div>
        </div>
        <div className="p-8 max-w-[1600px] mx-auto">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
