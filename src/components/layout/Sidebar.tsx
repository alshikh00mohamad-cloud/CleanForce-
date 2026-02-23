import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Users, 
  Building2, 
  Calculator, 
  FileText, 
  Workflow, 
  UserCircle, 
  Receipt, 
  CreditCard, 
  BookOpen, 
  MapPin,
  Settings,
  LogOut,
  Sparkles,
  Moon,
  Sun
} from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { name: 'Dashboard', path: '/', icon: LayoutDashboard },
  { name: 'Kunden (CRM)', path: '/kunden', icon: Users },
  { name: 'Objekte', path: '/objekte', icon: Building2 },
  { name: 'Kalkulation', path: '/kalkulation', icon: Calculator },
  { name: 'Angebote', path: '/angebote', icon: FileText },
  { name: 'Automation', path: '/automation', icon: Workflow },
  { name: 'Personal', path: '/personal', icon: UserCircle },
  { name: 'Rechnungen', path: '/rechnungen', icon: Receipt },
  { name: 'Mahnwesen', path: '/mahnwesen', icon: CreditCard },
  { name: 'Buchhaltung', path: '/buchhaltung', icon: BookOpen },
  { name: 'GPS & Live', path: '/gps', icon: MapPin },
];

export function Sidebar() {
  const location = useLocation();
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (document.documentElement.classList.contains('dark')) {
      setIsDark(true);
    }
  }, []);

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark');
    setIsDark(!isDark);
  };

  return (
    <div className="flex h-screen w-72 flex-col bg-white dark:bg-[#141414] border-r border-gray-100 dark:border-[#2A2A2A] shadow-sm transition-colors duration-200">
      <div className="flex h-20 items-center px-6">
        <div className="flex items-center gap-3 font-bold text-2xl text-gray-900 dark:text-white tracking-tight">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-md">
            <Sparkles size={20} className="text-white" />
          </div>
          CleanForce
        </div>
      </div>
      
      <div className="px-6 py-4 flex-1 overflow-y-auto">
        <div className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-4">Hauptmenü</div>
        <nav className="grid gap-1.5">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path || (item.path !== '/' && location.pathname.startsWith(item.path));
            return (
              <Link
                key={item.name}
                to={item.path}
                className={cn(
                  "flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all duration-200 group",
                  isActive 
                    ? "bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400" 
                    : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-[#1A1A1A] hover:text-gray-900 dark:hover:text-gray-200"
                )}
              >
                <item.icon className={cn(
                  "h-5 w-5 transition-colors", 
                  isActive ? "text-blue-600 dark:text-blue-400" : "text-gray-400 dark:text-gray-500 group-hover:text-gray-600 dark:group-hover:text-gray-300"
                )} />
                {item.name}
              </Link>
            )
          })}
        </nav>
      </div>

      <div className="mt-auto p-6 border-t border-gray-100 dark:border-[#2A2A2A]">
        <div className="space-y-1.5">
          <div 
            onClick={toggleDarkMode}
            className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-[#1A1A1A] hover:text-gray-900 dark:hover:text-gray-200 cursor-pointer transition-colors group"
          >
            {isDark ? (
              <Sun className="h-5 w-5 text-gray-400 dark:text-gray-500 group-hover:text-gray-600 dark:group-hover:text-gray-300" />
            ) : (
              <Moon className="h-5 w-5 text-gray-400 dark:text-gray-500 group-hover:text-gray-600 dark:group-hover:text-gray-300" />
            )}
            {isDark ? 'Light Mode' : 'Dark Mode'}
          </div>
          <div className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-[#1A1A1A] hover:text-gray-900 dark:hover:text-gray-200 cursor-pointer transition-colors group">
            <Settings className="h-5 w-5 text-gray-400 dark:text-gray-500 group-hover:text-gray-600 dark:group-hover:text-gray-300" />
            Einstellungen
          </div>
          <div className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-[#1A1A1A] hover:text-gray-900 dark:hover:text-gray-200 cursor-pointer transition-colors group">
            <LogOut className="h-5 w-5 text-gray-400 dark:text-gray-500 group-hover:text-gray-600 dark:group-hover:text-gray-300" />
            Abmelden
          </div>
        </div>
      </div>
    </div>
  );
}
