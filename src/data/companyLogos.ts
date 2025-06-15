
export const companyLogos: Record<string, string> = {
  "ApnaKlub": "/lovable-uploads/5aa112b4-58a4-450b-8778-44fde9a2f81e.png",
  "CARS24": "/lovable-uploads/a517b5d5-75d9-4571-b44a-457509f77441.png",
  "1K Kirana Bazaar": "/lovable-uploads/76cb2b52-5979-4197-ad4c-b277558937f3.png",
  "Stupa Sport Analytics": "/lovable-uploads/919858fd-80d2-4b1c-89d5-1f1009a787f9.png"
};

export const getCompanyLogo = (companyName: string): string => {
  return companyLogos[companyName] || "/placeholder.svg";
};
