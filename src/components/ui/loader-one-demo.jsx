import React from "react";
import { LoaderThree } from "@/components/ui/loader";

export default function LoaderOneDemo() {
  return (
    <div 
      className="flex min-h-screen items-center justify-center" 
      style={{ backgroundColor: '#041737' }}
    >
      <LoaderThree />
    </div>
  );
}
