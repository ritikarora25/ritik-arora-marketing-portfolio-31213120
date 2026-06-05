
import React, { useState } from "react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "../ui/collapsible";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "../ui/button";

const Cars24Card = () => {
  const [open, setOpen] = useState(false);
  
  return (
    <div className="rounded-lg bg-white shadow-sm border border-gray-200 hover:shadow-md transition-all flex flex-col p-0 h-full">
      {/* Card Top: Logo & Company/Period */}
      <div className="flex items-center gap-4 px-6 pt-6 pb-3">
        <img 
          alt="CARS24 company logo" 
          className="w-12 h-12 object-contain rounded-full bg-white border-2 border-gray-200 shadow-sm" 
          src="/lovable-uploads/04ea1105-3c28-4412-bb00-10ab6de08841.png" 
        />
        <div className="flex flex-col flex-1">
          <div className="font-semibold text-foreground text-lg">CARS24</div>
          <div className="text-xs text-muted-foreground mt-1">Mar 2023 - Jan 2024</div>
        </div>
      </div>
      
      {/* Card Content: Role & Key Metrics */}
      <div className="px-6 pb-4 pt-2 flex flex-col flex-1">
        <div className="text-foreground font-semibold text-base mb-3 min-h-[1.5rem]">Marketing Team Lead / CRM Lead</div>
        <div className="flex flex-wrap gap-2 mb-3">
          <div className="text-xs font-medium text-foreground whitespace-nowrap">
            <span className="font-mono text-sm font-semibold mr-1 text-primary">₹8L</span>
            Monthly Savings
          </div>
          <div className="text-xs font-medium text-foreground whitespace-nowrap">
            <span className="font-mono text-sm font-semibold mr-1 text-primary">20%</span>
            Cost Reduction
          </div>
          <div className="text-xs font-medium text-foreground whitespace-nowrap">
            <span className="font-mono text-sm font-semibold mr-1 text-primary">5+</span>
            Channels Managed
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
                <span className="text-foreground">Scale CRM efficiency and reduce spend for high-volume car seller operations.</span>
              </div>
              <div>
                <span className="font-bold text-primary block mb-2">Action</span>
                <span className="text-foreground">Consolidated CRM systems, ran A/B tests, unified event schema, managed cross-channel execution.</span>
              </div>
              <div>
                <span className="font-bold text-primary block mb-2">Impact</span>
                <span className="text-foreground">Cut CXM spend by ₹8L/mo (~20%), boosted process speed, improved funnel reporting.</span>
              </div>
            </div>
          </CollapsibleContent>
        </Collapsible>
      </div>
    </div>
  );
};

export default Cars24Card;
