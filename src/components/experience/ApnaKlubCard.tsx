import StageCard from "./StageCard";
import type { Persona } from "@/data/journey";

const ApnaKlubCard = ({ persona }: { persona: Persona }) => (
  <StageCard stage="retain" persona={persona} />
);

export default ApnaKlubCard;
