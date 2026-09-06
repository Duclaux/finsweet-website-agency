import type { TeamMember } from "../../model/TeamMember";

// TeamCard.tsx
interface TeamCardProps {
  member: TeamMember;
}

function TeamCard({ member }: TeamCardProps) {
  return (
    <div className="relative rounded-2xl overflow-hidden aspect-3/4 group cursor-pointer">
      <img
        src={member.imageUrl}
        alt={member.name}
        className="w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-300"
      />

      {/* Overlay caché par défaut, apparaît au survol */}
      <div
        className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black via-black/80 to-transparent p-4 pt-16 text-white
                   opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0
                   transition-all duration-300 ease-out"
      >
        {member.role && (
          <p className="text-xs text-gray-300 mb-1">{member.role}</p>
        )}
        <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
        {member.description && (
          <p className="text-sm text-gray-300 leading-snug">
            {member.description}
          </p>
        )}
      </div>
    </div>
  );
}

export default TeamCard;
