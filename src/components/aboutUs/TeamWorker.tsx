import type { TeamMember } from "../../model/TeamMember";
import Container from "../Container"
import TeamCard from "./TeamCard";

const teamMembers: TeamMember[] = [
  { id: "1", name: "Climber", imageUrl: "../src/assets/images/profile-1.png" },
  { id: "2", name: "Manager", imageUrl: "../src/assets/images/profile-2.png" },
  { id: "3", name: "Developer", imageUrl: "../src/assets/images/profile-3.png" },
  {
    id: "4",
    name: "Selby Stuart",
    role: "Support Assist",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros.",
    imageUrl: "../src/assets/images/profile-4.png",
    hasOverlay: true,
  },
];

function TeamWorker() {
  return (
    <Container>
        <div className="mb-30">
            <div>
                <h1 className="text-h1">
                    Teamwork is the only<br /> way we work
                </h1>
                <p className="text-paragraph text-[#5B5B5B] mt-6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros<br/>blandit, hendrerit elit et, mattis purus. Vivamus commodo suscipit tellus et<br/>pellentesque.
                </p>
            </div>

            <div className="mt-5 xl:mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {teamMembers.map((member) => (
                    <TeamCard key={member.id} member={member} />
                ))}
            </div>
        </div>
    </Container>
  )
}

export default TeamWorker
