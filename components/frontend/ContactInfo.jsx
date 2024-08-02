import React from "react";
import { PhoneCall } from "lucide-react";

export default function ContactInfo() {
  return (
    <div className="flex gap-3">
        <div>
            <PhoneCall className="mt-3"/>
        </div>
        <div>
            <h4><b> 24/7 Support :</b></h4>
            <p>01511- 309 309</p>
        </div>
    </div>
  );
}
