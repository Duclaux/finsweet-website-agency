export interface TeamMember {
  id: string;
  name: string;
  role?: string;
  description?: string;
  imageUrl: string;
  hasOverlay?: boolean;
}