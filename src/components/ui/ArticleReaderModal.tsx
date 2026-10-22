import React from 'react';
import { InsightArticle } from '../../data/config';

interface ArticleReaderModalProps {
  article: InsightArticle | null;
  onClose: () => void;
  onDiscussTopic: (topic: string) => void;
}

export const ArticleReaderModal: React.FC<ArticleReaderModalProps> = ({
  article,
  onClose,
  onDiscussTopic,
}) => {
  if (!article) return null;

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl bg-[#FFFCF7] border border-[#E4DACE] rounded-2xl shadow-2xl p-6 sm:p-10 my-8 text-[#272722] animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar with back / close */}
        <div className="flex items-center justify-between pb-6 mb-6 border-b border-[#E4DACE]">
          <div className="flex items-center gap-2 text-xs font-mono text-[#777269]">
            <span>{article.category}</span>
            <span>·</span>
            <span>{article.date}</span>
            <span>·</span>
            <span>{article.readingTime}</span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#777269] hover:text-[#272722] hover:bg-[#F1E9DC] transition-colors cursor-pointer"
            aria-label="Close article"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Article Headline */}
        <h2 className="text-2xl sm:text-4xl font-editorial font-bold text-[#272722] leading-tight mb-4">
          {article.title}
        </h2>

        {/* Lead Summary */}
        <p className="text-base sm:text-lg text-[#777269] font-medium leading-relaxed mb-8 pb-6 border-b border-[#E4DACE]">
          {article.summary}
        </p>

        {/* Body Sections */}
        <div className="space-y-6 text-[#272722]/90 leading-relaxed text-sm sm:text-base">
          {article.body.map((sec, idx) => (
            <div key={idx} className="space-y-3">
              <h3 className="text-lg sm:text-xl font-editorial font-bold text-[#272722]">
                {sec.sectionHeading}
              </h3>
              {sec.paragraphs.map((p, pIdx) => (
                <p key={pIdx} className="text-[#272722]/85">
                  {p}
                </p>
              ))}
            </div>
          ))}
        </div>

        {/* Bottom CTA block */}
        <div className="mt-10 pt-6 border-t border-[#E4DACE] flex flex-col sm:flex-row items-center justify-between gap-4 bg-[#F8F5EF] p-5 rounded-xl">
          <div>
            <div className="text-xs font-mono text-[#A38B70] uppercase">ENGINEERING PERSPECTIVE</div>
            <div className="text-sm font-semibold text-[#272722]">Interested in applying this architecture?</div>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => {
                onClose();
                onDiscussTopic(article.title);
              }}
              className="px-4 py-2 text-xs font-semibold text-[#F8F5EF] bg-[#282923] rounded-lg hover:bg-[#3d3f37] transition-colors cursor-pointer"
            >
              Discuss With Our Engineers
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-[#777269] hover:text-[#272722] rounded-lg border border-[#E4DACE] bg-white transition-colors cursor-pointer"
            >
              Done Reading
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
