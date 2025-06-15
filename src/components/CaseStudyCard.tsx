
import React, { useState } from "react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./ui/collapsible";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "./ui/button";

interface Metric {
  label: string;
  value: string | number;
  highlight?: boolean;
}

interface CaseStudyCardProps {
  company: string;
  logo: string;
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
  logo,
  role,
  period,
  challenge,
  action,
  impact,
  metrics = [],
  primaryColor = "#2155CD",
}) => {
  const [open, setOpen] = useState(false);

  // Compose summary - prioritize showing a primary impact metric
  const summary =
    metrics && metrics.length > 0
      ? metrics
          .filter((m) => m.highlight)
          .map((m) => `${m.value} ${m.label}`)
          .join(", ")
      : impact;

  return (
    <div className="rounded-xl bg-white shadow-md border hover:shadow-lg transition-all flex flex-col p-0">
      {/* Card Top: Logo & Company/Period */}
      <div className="flex items-center gap-4 px-6 pt-5 pb-2">
        <img
          src={logo}
          alt={company}
          className="w-12 h-12 object-contain rounded-full bg-white border shadow"
          style={{ borderColor: primaryColor }}
        />
        <div className="flex flex-col flex-1">
          <div className="font-semibold text-primary text-lg">{company}</div>
          <div className="text-xs text-accent bg-accent/20 px-2 py-0.5 rounded w-fit mt-1">{period}</div>
        </div>
      </div>
      {/* Card Content: Role & Key Metrics */}
      <div className="px-6 pb-4 pt-2 flex flex-col">
        <div className="text-gray-700 font-semibold text-base">{role}</div>
        {metrics && metrics.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-2 mb-1">
            {metrics.map((m, i) => (
              <div
                key={i}
                className={`text-xs rounded bg-accent/10 px-3 py-1 font-medium whitespace-nowrap ${
                  m.highlight ? "text-accent bg-accent/20 border-accent border" : "text-primary"
                }`}
              >
                <span className="font-mono text-lg">{m.value}</span>&nbsp;{m.label}
              </div>
            ))}
          </div>
        )}
        {/* One-line summary */}
        <div className="mt-1 text-sm text-gray-600 italic">{summary}</div>
      </div>
      {/* Collapsible for Challenge, Action, Impact */}
      <Collapsible open={open} onOpenChange={setOpen}>
        <CollapsibleTrigger asChild>
          <Button
            type="button"
            variant="secondary"
            size="sm"
            className="rounded-b-xl w-full flex items-center justify-center gap-2 font-medium py-2"
            aria-expanded={open}
          >
            <span>{open ? "Hide details" : "View details"}</span>
            {open ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </Button>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <div className="px-6 pb-5 pt-2 grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
            <div>
              <span className="font-bold text-primary block mb-1">Challenge</span>
              <span className="text-gray-700">{challenge}</span>
            </div>
            <div>
              <span className="font-bold text-primary block mb-1">Action</span>
              <span className="text-gray-700">{action}</span>
            </div>
            <div>
              <span className="font-bold text-primary block mb-1">Impact</span>
              <span className="text-gray-700">{impact}</span>
            </div>
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};

export default CaseStudyCard;

