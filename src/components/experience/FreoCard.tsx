import StageCard from "./StageCard";
import type { Persona } from "@/data/journey";

const FreoCard = ({ persona }: { persona: Persona }) => (
  <StageCard stage="activate" persona={persona} />
);

export default FreoCard;
