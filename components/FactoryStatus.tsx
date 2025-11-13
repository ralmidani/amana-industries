"use client";

import { useState } from "react";
import { Factory } from "@/types/factory";
import FactoryMap from "./FactoryMap";
import FactoryInfo from "./FactoryInfo";

interface FactoryStatusProps {
  factories: Factory[];
}

export default function FactoryStatus({ factories }: FactoryStatusProps) {
  const [selectedFactory, setSelectedFactory] = useState<Factory | null>(null);

  return (
    <div className="bg-orange-50 border-4 border-black p-6">
      <h2 className="text-2xl font-bold text-center mb-6 bg-yellow-600 py-3 border-2 border-black">
        Factory Statuses
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[500px]">
        <div className="lg:col-span-2 border-4 border-black rounded overflow-hidden">
          <FactoryMap factories={factories} onFactorySelect={setSelectedFactory} />
        </div>

        <div className="flex items-start">
          <FactoryInfo factory={selectedFactory} />
        </div>
      </div>
    </div>
  );
}
