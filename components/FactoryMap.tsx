"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { Factory } from "@/types/factory";
import { useEffect } from "react";

interface FactoryMapProps {
  factories: Factory[];
  onFactorySelect: (factory: Factory) => void;
}

// Create custom icons for operational and maintenance status
const createCustomIcon = (status: "operational" | "maintenance") => {
  const color = status === "operational" ? "#22c55e" : "#ef4444"; // green for operational, red for maintenance

  return L.divIcon({
    className: "custom-marker",
    html: `
      <div style="position: relative;">
        <svg width="32" height="42" viewBox="0 0 32 42" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 0C7.163 0 0 7.163 0 16c0 12 16 26 16 26s16-14 16-26c0-8.837-7.163-16-16-16z"
                fill="${color}"
                stroke="#000"
                stroke-width="2"/>
          <circle cx="16" cy="16" r="6" fill="#fff"/>
        </svg>
      </div>
    `,
    iconSize: [32, 42],
    iconAnchor: [16, 42],
    popupAnchor: [0, -42],
  });
};

export default function FactoryMap({ factories, onFactorySelect }: FactoryMapProps) {
  // Fix for default marker icon in production
  useEffect(() => {
    delete (L.Icon.Default.prototype as any)._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: "/marker-icon-2x.png",
      iconUrl: "/marker-icon.png",
      shadowUrl: "/marker-shadow.png",
    });
  }, []);

  // Calculate the center of all factories for initial map view
  // Focus on Jordan region as shown in wireframe (around Amman)
  const center: [number, number] = [31.5, 36.0];

  return (
    <div className="h-full w-full">
      <MapContainer
        center={center}
        zoom={7}
        style={{ height: "100%", width: "100%" }}
        className="z-0"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {factories.map((factory) => (
          <Marker
            key={factory.id}
            position={[factory.location.latitude, factory.location.longitude]}
            icon={createCustomIcon(factory.status)}
            eventHandlers={{
              click: () => onFactorySelect(factory),
            }}
          >
            <Popup>
              <div className="text-sm">
                <h3 className="font-bold">{factory.name}</h3>
                <p className="text-xs">{factory.location.city}, {factory.location.country}</p>
                <p className="text-xs capitalize">Status: {factory.status}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
