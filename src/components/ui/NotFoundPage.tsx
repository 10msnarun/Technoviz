import React from 'react';
import { TechnovinzLogo } from './TechnovinzLogo';

interface NotFoundPageProps {
  onReturnHome: () => void;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({ onReturnHome }) => {
  return (
    <div className="min-h-screen bg-[#F8F5EF] text-[#272722] flex flex-col justify-between p-6">
      <header className="max-w-7xl mx-auto w-full py-4 flex items-center justify-between border-b border-[#E4DACE]">
        <TechnovinzLogo size="sm" theme="dark" />
        <button
          onClick={onReturnHome}
          className="text-xs font-mono text-[#777269] hover:text-[#272722] underline"
        >
          Return to Overview →
        </button>
      </header>

      <main className="max-w-xl mx-auto my-auto text-center space-y-6 py-16">
        <div className="w-16 h-16 rounded-2xl bg-[#FFFCF7] border border-[#E4DACE] mx-auto flex items-center justify-center font-mono text-xl font-bold text-[#A38B70] shadow-sm">
          404
        </div>

        <div className="space-y-3">
          <span className="text-xs font-mono tracking-widest text-[#777269] uppercase">
            PAGE NOT LOCATED
          </span>
          <h1 className="text-3xl sm:text-4xl font-editorial font-bold text-[#272722]">
            The Requested Resource Does Not Exist.
          </h1>
          <p className="text-sm text-[#777269] leading-relaxed">
            The page or document route you navigated to is not available in our registry. Please return to the homepage or select an area of expertise from the primary navigation.
          </p>
        </div>

        <div className="pt-4">
          <button
            onClick={onReturnHome}
            className="px-6 py-3 text-xs font-semibold text-[#F8F5EF] bg-[#282923] rounded-lg hover:bg-[#3d3f37] transition-all cursor-pointer shadow-sm"
          >
            Return to Homepage
          </button>
        </div>
      </main>

      <footer className="max-w-7xl mx-auto w-full py-4 border-t border-[#E4DACE] text-center text-xs font-mono text-[#777269]">
        HTTP 404 // VELORA DIGITAL SPA ROUTER
      </footer>
    </div>
  );
};
