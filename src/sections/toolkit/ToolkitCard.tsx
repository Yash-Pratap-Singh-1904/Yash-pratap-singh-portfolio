import React from 'react';
import {
  Code,
  Coffee,
  Database,
  Terminal,
  Binary,
  Layers,
  Table2,
  Calculator,
  LineChart,
  Zap,
  Server,
  FileCode,
  Layout,
  GitBranch,
  Github,
  BookOpen,
  Network,
  Box,
  Radio,
  BrainCircuit,
  Activity,
  Trees,
} from 'lucide-react';
import { ToolkitItem } from '../../types/portfolio.types';
import { Spotlight } from '../../components/effects/Spotlight';

interface ToolkitCardProps {
  item: ToolkitItem;
}

export const ToolkitCard: React.FC<ToolkitCardProps> = ({ item }) => {
  const getToolIcon = (iconName: string) => {
    switch (iconName) {
      case 'python':
      case 'binary':
        return <Binary className="w-5 h-5 text-[#D9AA70]" />;
      case 'coffee':
        return <Coffee className="w-5 h-5 text-[#D9AA70]" />;
      case 'code-2':
        return <Code className="w-5 h-5 text-[#D9AA70]" />;
      case 'database':
        return <Database className="w-5 h-5 text-[#A9B69B]" />;
      case 'brain-circuit':
        return <BrainCircuit className="w-5 h-5 text-[#D9AA70]" />;
      case 'activity':
        return <Activity className="w-5 h-5 text-[#D9AA70]" />;
      case 'trees':
        return <Trees className="w-5 h-5 text-[#A9B69B]" />;
      case 'table-2':
        return <Table2 className="w-5 h-5 text-[#A9B69B]" />;
      case 'calculator':
        return <Calculator className="w-5 h-5 text-[#A9B69B]" />;
      case 'line-chart':
        return <LineChart className="w-5 h-5 text-[#A9B69B]" />;
      case 'zap':
        return <Zap className="w-5 h-5 text-[#D9AA70]" />;
      case 'server':
        return <Server className="w-5 h-5 text-[#D9AA70]" />;
      case 'file-code':
        return <FileCode className="w-5 h-5 text-[#D9AA70]" />;
      case 'layout':
        return <Layout className="w-5 h-5 text-[#D9AA70]" />;
      case 'git-branch':
        return <GitBranch className="w-5 h-5 text-[#D9AA70]" />;
      case 'github':
        return <Github className="w-5 h-5 text-[#D9AA70]" />;
      case 'terminal':
      case 'terminal-square':
        return <Terminal className="w-5 h-5 text-[#D9AA70]" />;
      case 'book-open':
        return <BookOpen className="w-5 h-5 text-[#A9B69B]" />;
      case 'network':
        return <Network className="w-5 h-5 text-[#D9AA70]" />;
      case 'box':
        return <Box className="w-5 h-5 text-[#D9AA70]" />;
      case 'radio':
        return <Radio className="w-5 h-5 text-[#A9B69B]" />;
      default:
        return <Layers className="w-5 h-5 text-[#D9AA70]" />;
    }
  };

  return (
    <Spotlight className="rounded-xl h-full">
      <div className="surface-card rounded-xl p-5 h-full flex flex-col justify-between group">
        <div>
          {/* Card Top: Icon & Category */}
          <div className="flex items-center justify-between gap-3 mb-3">
            <div className="w-10 h-10 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-color)] flex items-center justify-center shrink-0 group-hover:border-[var(--accent-primary)]/50 transition-colors">
              {getToolIcon(item.icon)}
            </div>
            {item.proficiencyLevel && (
              <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--accent-secondary)]">
                {item.proficiencyLevel}
              </span>
            )}
          </div>

          {/* Name */}
          <h4 className="text-base font-serif font-bold text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] transition-colors">
            {item.name}
          </h4>

          {/* Category */}
          <div className="text-[11px] font-mono text-[var(--text-muted)] mt-0.5">
            {item.category}
          </div>

          {/* Purpose */}
          <p className="text-xs text-[var(--text-secondary)] mt-2.5 leading-relaxed">
            {item.purpose}
          </p>
        </div>
      </div>
    </Spotlight>
  );
};
