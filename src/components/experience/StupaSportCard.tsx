
import React, { useState } from "react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "../ui/collapsible";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "../ui/button";
import CountUp from "../CountUp";

const StupaSportCard = () => {
  const [open, setOpen] = useState(false);
  
  return (
    <div className="rounded-lg bg-white shadow-sm border border-gray-200 hover:shadow-md transition-all flex flex-col p-0 h-full">
      {/* Card Top: Logo & Company/Period */}
      <div className="flex items-center gap-4 px-6 pt-6 pb-3">
        <img 
          alt="Stupa Sport Analytics company logo" 
          className="w-12 h-12 object-contain rounded-full bg-white border-2 border-gray-200 shadow-sm" 
          src="/lovable-uploads/c30a59bf-ac74-4f15-97cf-b5cff06438cb.png" 
        />
        <div className="flex flex-col flex-1">
          <div className="font-semibold text-foreground text-lg">Stupa Sport Analytics</div>
          <div className="text-xs text-muted-foreground mt-1">Mar 2021 - Nov 2021</div>
        </div>
      </div>
      
      {/* Card Content: Role & Key Metrics */}
      <div className="px-6 pb-4 pt-2 flex flex-col flex-1">
        <div className="text-foreground font-semibold text-base mb-3 min-h-[1.5rem]">Marketing Analyst</div>
        <div className="flex flex-wrap gap-2 mb-3">
          <div className="text-xs font-medium text-foreground whitespace-nowrap">
            <span className="font-mono text-sm font-semibold mr-1 text-primary">13K+</span>
            Social Growth
          </div>
          <div className="text-xs font-medium text-foreground whitespace-nowrap">
            <span className="font-mono text-sm font-semibold mr-1 text-primary">3</span>
            Markets Entered
          </div>
          <div className="text-xs font-medium text-foreground whitespace-nowrap">
            <span className="font-mono text-sm font-semibold mr-1 text-primary">25+</span>
            Campaigns Run
          </div>
        </div>
      </div>
      
      {/* Collapsible for Challenge, Action, Impact */}
      <div className="mt-auto">
        <Collapsible open={open} onOpenChange={setOpen}>
          <CollapsibleTrigger asChild>
            <Button 
              type="button" 
              variant="ghost" 
              size="sm" 
              aria-expanded={open} 
              className="rounded-b-lg w-full flex items-center justify-center gap-2 font-medium py-3 text-foreground border-t border-gray-200"
            >
              <span>{open ? "Hide details" : "View details"}</span>
              {open ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <div className="px-6 pb-6 pt-4 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm border-t border-gray-200">
              <div>
                <span className="font-bold text-primary block mb-2">Challenge</span>
                <span className="text-foreground">Build brand presence and drive social growth in competitive sports analytics niche.</span>
              </div>
              <div>
                <span className="font-bold text-primary block mb-2">Action</span>
                <span className="text-foreground">Grew social media presence, conducted global market research, and managed targeted digital campaigns.</span>
              </div>
              <div>
                <span className="font-bold text-primary block mb-2">Impact</span>
                <span className="text-foreground">Achieved 13K+ followers, expanded to 3 international markets, delivered real-time dashboards.</span>
              </div>
            </div>
          </CollapsibleContent>
        </Collapsible>
      </div>
    </div>
  );
};

export default StupaSportCard;
