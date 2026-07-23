import StageCard from "./StageCard";
import type { Persona } from "@/data/journey";

const KiranaBazaarCard = ({ persona }: { persona: Persona }) => (
  <StageCard stage="monetize" persona={persona} />
);

export default KiranaBazaarCard;
