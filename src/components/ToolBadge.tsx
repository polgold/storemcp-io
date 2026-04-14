import { Badge } from './ui/Badge';

type Tier = 'free' | 'pro' | 'agency';

export function ToolBadge({ tier }: { tier: Tier }) {
  if (tier === 'pro') return <Badge variant="pro">Pro</Badge>;
  if (tier === 'agency') return <Badge variant="agency">Agency</Badge>;
  return <Badge variant="free">Free</Badge>;
}
