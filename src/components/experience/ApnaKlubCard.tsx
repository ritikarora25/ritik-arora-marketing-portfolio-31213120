
import React, { useState } from "react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "../ui/collapsible";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "../ui/button";

const ApnaKlubCard = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-lg bg-white shadow-sm border border-gray-200 hover:shadow-md transition-all flex flex-col p-0">
      {/* Card Top: Logo & Company/Period */}
      <div className="flex items-center gap-4 px-6 pt-6 pb-3">
        <img src="/lovable-uploads/5aa112b4-58a4-450b-8778-44fde9a2f81e.png" alt="ApnaKlub" className="w-12 h-12 object-contain" />
        <div className="flex flex-col flex-1">
          <div className="font-semibold text-foreground text-lg">ApnaKlub</div>
          <div className="text-xs text-muted-foreground bg-accent px-2 py-1 rounded w-fit mt-1 border border-gray-200">Feb 2024 - Dec 2024</div>
        </div>
      </div>
      
      {/* Card Content: Role & Key Metrics */}
      <div className="px-6 pb-4 pt-2 flex flex-col">
        <div className="text-foreground font-semibold text-base mb-3">Product Marketing Specialist</div>
        <div className="flex flex-wrap gap-2 mb-3">
          <div className="text-xs rounded bg-accent px-3 py-1 font-medium text-foreground whitespace-nowrap border border-gray-200">
            <span className="font-mono text-sm font-semibold mr-1 text-primary">200K+</span>
            Users Impacted
          </div>
          <div className="text-xs rounded bg-accent px-3 py-1 font-medium text-foreground whitespace-nowrap border border-gray-200">
            <span className="font-mono text-sm font-semibold mr-1 text-primary">5%</span>
            Revenue Lift
          </div>
          <div className="text-xs rounded bg-accent px-3 py-1 font-medium text-foreground whitespace-nowrap border border-gray-200">
            <span className="font-mono text-sm font-semibold mr-1 text-primary">5-7%</span>
            Order Rate ↑
          </div>
        </div>
        <div className="text-sm text-muted-foreground italic">Enabled 5% revenue lift, improved order rates by 5-7%, deepened cross-team collaboration.</div>
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
              <span className="text-foreground">Drive engagement and monetization for 200K+ B2B users in fragmented FMCG market.</span>
            </div>
            <div>
              <span className="font-bold text-primary block mb-2">Action</span>
              <span className="text-foreground">Led CRM initiatives, built behavioral segments & multilingual journeys, launched WhatsApp engagement.</span>
            </div>
            <div>
              <span className="font-bold text-primary block mb-2">Impact</span>
              <span className="text-foreground">Enabled 5% revenue lift, improved order rates by 5-7%, deepened cross-team collaboration.</span>
            </div>
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};

export default ApnaKlubCard;
