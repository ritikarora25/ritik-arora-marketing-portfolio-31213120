
import React from "react";

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
  return (
    <div className="rounded-xl overflow-hidden bg-white shadow-md hover:shadow-xl border hover:border-accent transition-all group flex flex-col p-0 md:flex-row">
      <div className="flex flex-col items-center justify-center md:min-w-44 bg-accent/10 px-6 py-8 md:py-0 md:px-6">
        <img src={logo} alt={company} className="w-16 h-16 object-contain rounded-full bg-white border shadow mb-3" />
        <div className="font-semibold text-primary text-lg text-center">{company}</div>
        <div className="text-xs text-accent bg-accent/20 px-2 py-1 rounded mt-1">{period}</div>
      </div>
      <div className="flex-1 px-6 py-5 flex flex-col justify-between">
        <div>
          <div className="text-gray-700 font-semibold text-base mb-1">{role}</div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mb-2 text-sm">
            <div>
              <span className="font-bold text-primary block mb-1">Challenge</span>
              <span>{challenge}</span>
            </div>
            <div>
              <span className="font-bold text-primary block mb-1">Action</span>
              <span>{action}</span>
            </div>
            <div>
              <span className="font-bold text-primary block mb-1">Impact</span>
              <span>{impact}</span>
            </div>
          </div>
          {metrics && metrics.length > 0 && (
            <div className="flex flex-wrap gap-3 mt-2">
              {metrics.map((m, i) => (
                <div
                  key={i}
                  className={`text-base rounded bg-accent/20 px-3 py-2 font-medium ${
                    m.highlight ? "text-accent bg-accent/10 border-accent border" : "text-primary"
                  }`}
                >
                  <span className="font-mono text-lg">{m.value}</span>&nbsp;{m.label}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CaseStudyCard;
