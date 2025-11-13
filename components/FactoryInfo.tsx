import { Factory } from "@/types/factory";

interface FactoryInfoProps {
  factory: Factory | null;
}

export default function FactoryInfo({ factory }: FactoryInfoProps) {
  if (!factory) {
    return (
      <div className="bg-purple-200 p-6 rounded-lg shadow-lg">
        <p className="text-gray-600 text-center">Select a factory on the map</p>
      </div>
    );
  }

  // Get the latest production and inventory values
  const latestProduction = factory.production_level_2024[factory.production_level_2024.length - 1]?.value || 0;
  const latestInventory = factory.inventory_level_2024[factory.inventory_level_2024.length - 1]?.value || 0;

  return (
    <div className="bg-purple-200 p-6 rounded-lg shadow-lg space-y-4">
      <div>
        <p className="text-sm text-gray-700 font-medium">Factory ID:</p>
        <p className="text-lg font-bold text-black">{factory.name}</p>
      </div>

      <div>
        <p className="text-sm text-gray-700 font-medium">Status:</p>
        <p className={`text-lg font-bold ${factory.status === 'operational' ? 'text-green-700' : 'text-red-700'}`}>
          {factory.status === 'operational' ? 'Good' : 'Maintenance'}
        </p>
      </div>

      <div>
        <p className="text-sm text-gray-700 font-medium">Production:</p>
        <p className="text-lg font-bold text-black">{latestProduction}kg per month</p>
      </div>

      <div>
        <p className="text-sm text-gray-700 font-medium">Inventory:</p>
        <p className="text-lg font-bold text-black">{latestInventory}kg</p>
      </div>
    </div>
  );
}
