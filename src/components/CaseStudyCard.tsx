
import React, { useState } from "react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./ui/collapsible";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "./ui/button";
import { getCompanyLogo } from "../data/companyLogos";

interface Metric {
  label: string;
  value: string | number;
  highlight?: boolean;
}

interface CaseStudyCardProps {
  company: string;
  role: string;
  period: string;
  challenge: string;
  action: string;
  impact: string;
  metrics?: Metric[];
  primaryColor?: string;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({
  company,
  role,
  period,
  challenge,
  action,
  impact,
  metrics = [],
  primaryColor = "#2B2E83"
}) => {
  const [open, setOpen] = useState(false);

  const summary = metrics && metrics.length > 0 ? metrics.filter(m => m.highlight).map(m => `${m.value} ${m.label}`).join(", ") : impact;
  const logo = getCompanyLogo(company);

  return (
    <div className="rounded-lg bg-white shadow-sm border border-gray-200 hover:shadow-md transition-all flex flex-col p-0">
      {/* Card Top: Logo & Company/Period */}
      <div className="flex items-center gap-4 px-6 pt-6 pb-3">
        <img src={logo} alt={company} className="w-12 h-12 object-contain rounded-full bg-white border-2 border-gray-200 shadow-sm" />
        <div className="flex flex-col flex-1">
          <div className="font-semibold text-foreground text-lg">{company}</div>
          <div className="text-xs text-muted-foreground bg-accent px-2 py-1 rounded w-fit mt-1 border border-gray-200">{period}</div>
        </div>
      </div>
      
      {/* Card Content: Role & Key Metrics */}
      <div className="px-6 pb-4 pt-2 flex flex-col">
        <div className="text-foreground font-semibold text-base mb-3">{role}</div>
        {metrics && metrics.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-3">
            {metrics.map((m, i) => (
              <div
                key={i}
                className="text-xs rounded bg-accent px-3 py-1 font-medium text-foreground whitespace-nowrap border border-gray-200"
              >
                <span className="font-mono text-sm font-semibold mr-1 text-primary">
                  {m.value}
                </span>
                {m.label}
              </div>
            ))}
          </div>
        )}
        <div className="text-sm text-muted-foreground italic">{summary}</div>
      </div>
      
      {/* Collapsible for Challenge, Action, Impact */}
      <Collapsible open={open} onOpenChange={setOpen}>
        <CollapsibleTrigger asChild>
          <Button 
            type="button" 
            variant="secondary" 
            size="sm" 
            aria-expanded={open} 
            className="rounded-b-lg w-full flex items-center justify-center gap-2 font-medium py-3 bg-accent hover:bg-gray-100 text-foreground border-t border-gray-200"
          >
            <span>{open ? "Hide details" : "View details"}</span>
            {open ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </Button>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <div className="px-6 pb-6 pt-4 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm border-t border-gray-200">
            <div>
              <span className="font-bold text-primary block mb-2">Challenge</span>
              <span className="text-foreground">{challenge}</span>
            </div>
            <div>
              <span className="font-bold text-primary block mb-2">Action</span>
              <span className="text-foreground">{action}</span>
            </div>
            <div>
              <span className="font-bold text-primary block mb-2">Impact</span>
              <span className="text-foreground">{impact}</span>
            </div>
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};

export default CaseStudyCard;
