import StageCard from "./StageCard";
import type { Persona } from "@/data/journey";

const StupaSportCard = ({ persona }: { persona: Persona }) => (
  <StageCard stage="acquire" persona={persona} />
);

export default StupaSportCard;
