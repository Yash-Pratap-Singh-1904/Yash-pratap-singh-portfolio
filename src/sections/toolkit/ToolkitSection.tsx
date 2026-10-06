import React, { useState, useMemo } from 'react';
import { TOOLKIT_CATEGORIES, TOOLKIT_ITEMS } from './toolkit.data';
import { ToolkitCategory } from '../../types/portfolio.types';
import { SectionHeading } from '../../components/ui/SectionHeading';
import { ToolkitCard } from './ToolkitCard';

export const ToolkitSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<ToolkitCategory>('All');

  const filteredItems = useMemo(() => {
    if (selectedCategory === 'All') return TOOLKIT_ITEMS;
    return TOOLKIT_ITEMS.filter((item) => item.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <section id="toolkit" className="py-16 lg:py-24 border-t border-[var(--border-color)]">
      <SectionHeading
        kicker="TECHNOLOGY TOOLKIT"
        number="05"
        title="Technologies I Work With"
        subtitle="A categorized inventory of programming languages, machine learning frameworks, databases, and developer environments."
      />

      {/* Filter Tabs (Horizontal scroll on mobile, wrap on tablet/desktop) */}
      <div className="flex items-center gap-1.5 p-1.5 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)] mb-8 overflow-x-auto no-scrollbar scroll-smooth">
        {TOOLKIT_CATEGORIES.map((cat) => {
          const isActive = selectedCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D9AA70] select-none ${
                isActive
                  ? 'bg-[var(--accent-primary)] text-[var(--bg-main)] font-semibold shadow-sm'
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-elevated)]'
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Results Count & Current Filter Info */}
      <div className="flex items-center justify-between text-xs font-mono text-[var(--text-muted)] mb-6">
        <span>
          Showing <span className="text-[var(--accent-primary)] font-bold">{filteredItems.length}</span> tools in{' '}
          <span className="text-[var(--text-primary)]">{selectedCategory}</span>
        </span>
        {selectedCategory !== 'All' && (
          <button
            onClick={() => setSelectedCategory('All')}
            className="text-[var(--accent-primary)] hover:underline cursor-pointer"
          >
            Reset to All
          </button>
        )}
      </div>

      {/* Grid of Tools */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filteredItems.map((item) => (
          <ToolkitCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};
