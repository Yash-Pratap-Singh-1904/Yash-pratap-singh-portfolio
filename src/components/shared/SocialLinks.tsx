import React from 'react';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import { SOCIAL_LINKS } from '../../data/site.data';
import { IconButton } from '../ui/IconButton';

interface SocialLinksProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'secondary' | 'ghost' | 'outline' | 'primary';
  showLabels?: boolean;
}

export const SocialLinks: React.FC<SocialLinksProps> = ({
  className = '',
  size = 'md',
  variant = 'secondary',
}) => {
  const getIcon = (platform: string) => {
    switch (platform) {
      case 'github':
        return <Github className="w-4 h-4" />;
      case 'linkedin':
        return <Linkedin className="w-4 h-4" />;
      case 'email':
        return <Mail className="w-4 h-4" />;
      case 'phone':
        return <Phone className="w-4 h-4" />;
      default:
        return <Mail className="w-4 h-4" />;
    }
  };

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {SOCIAL_LINKS.map((link) => (
        <IconButton
          key={link.platform}
          icon={getIcon(link.platform)}
          label={link.label}
          size={size}
          variant={variant}
          asLink
          href={link.url}
          external={link.platform !== 'email'}
        />
      ))}
    </div>
  );
};
