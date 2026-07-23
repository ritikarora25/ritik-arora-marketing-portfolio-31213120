import StageCard from "./StageCard";
import type { Persona } from "@/data/journey";

const Cars24Card = ({ persona }: { persona: Persona }) => (
  <StageCard stage="engage" persona={persona} />
);

export default Cars24Card;
