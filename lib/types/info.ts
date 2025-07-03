export interface CampusContact {
  email: string;
  phone: string;
  address: string;
  mapsUrl?: string;
}

export interface CampusInfo {
  name: string;
  faculty: string;
  abbreviation: string;
  description: string;
  contact: CampusContact;
}

export interface HeroStats {
  members: string;
  programs: string;
  events: string;
  impact: string;
}

export interface CTAButtonProps {
  variant: 'primary' | 'secondary';
  onClick: () => void;
  children: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
}

export interface HeroStatsProps {
  stats: Array<{
    label: string;
    value: string;
    icon: React.ComponentType<{ className?: string }>;
  }>;
  layout?: 'grid' | 'inline' | 'card';
  className?: string;
}

export interface FloatingElementsProps {
  density?: 'low' | 'medium' | 'high';
}