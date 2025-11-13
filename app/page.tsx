import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FactoryStatus from "@/components/FactoryStatus";
import MonthlyPerformance from "@/components/MonthlyPerformance";
import Footer from "@/components/Footer";
import factoryData from "@/data/factories.json";

<<<<<<< HEAD
export default function Home() {
  const factories = factoryData.factory_data;
=======
import React, { useEffect, useRef, useState } from "react";
// We don't need the Image component from next/image for this page anymore
// import Image from "next/image";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// --- FULL DATASET FROM USER ---
const amanaData = {
  company_info: {
    name: "Amana Industries",
    founded: "2016",
    headquarters: "Amman, Jordan",
  },
  factory_data: [
    {
      id: 1,
      name: "Amana Textiles Amman",
      location: { city: "Amman", country: "Jordan", latitude: 31.9454, longitude: 35.9284, address: "Industrial City, Sahab, Amman 11512, Jordan" },
      status: "operational",
      established: "2018",
      employees: 450,
      specialization: ["Cotton Fabrics", "Denim", "Casual Wear"],
      production_capacity_monthly: 850,
      production_level_2024: [
        { month: "January", value: 818 }, { month: "February", value: 938 }, { month: "March", value: 798 }, { month: "April", value: 817 }, { month: "May", value: 936 }, { month: "June", value: 835 }, { month: "July", value: 839 }, { month: "August", value: 729 }, { month: "September", value: 935 }, { month: "October", value: 930 }, { month: "November", value: 933 }, { month: "December", value: 1030 }
      ],
      inventory_level_2024: [
        { month: "January", value: 702 }, { month: "February", value: 804 }, { month: "March", value: 1039 }, { month: "April", value: 1153 }, { month: "May", value: 1147 }, { month: "June", value: 1321 }, { month: "July", value: 1331 }, { month: "August", value: 1350 }, { month: "September", value: 1590 }, { month: "October", value: 1868 }, { month: "November", value: 1965 }, { month: "December", value: 1891 }
      ],
      contact: { manager: "Omar Al-Rashid", phone: "+962-6-4291847", email: "omar.rashid@amana-textiles.com" }
    },
    {
      id: 2,
      name: "Amana Spinning Irbid",
      location: { city: "Irbid", country: "Jordan", latitude: 32.5556, longitude: 35.85, address: "King Abdullah II Industrial Estate, Irbid, Jordan" },
      status: "operational",
      established: "2020",
      employees: 320,
      specialization: ["Cotton Spinning", "Yarn Production", "Blended Fibers"],
      production_capacity_monthly: 650,
      production_level_2024: [
        { month: "January", value: 691 }, { month: "February", value: 685 }, { month: "March", value: 597 }, { month: "April", value: 555 }, { month: "May", value: 585 }, { month: "June", value: 544 }, { month: "July", value: 548 }, { month: "August", value: 501 }, { month: "September", value: 787 }, { month: "October", value: 667 }, { month: "November", value: 793 }, { month: "December", value: 674 }
      ],
      inventory_level_2024: [
        { month: "January", value: 510 }, { month: "February", value: 633 }, { month: "March", value: 775 }, { month: "April", value: 886 }, { month: "May", value: 1050 }, { month: "June", value: 1090 }, { month: "July", value: 1118 }, { month: "August", value: 1070 }, { month: "September", value: 1072 }, { month: "October", value: 1019 }, { month: "November", value: 1243 }, { month: "December", value: 1290 }
      ],
      contact: { manager: "Fatima Qasemi", phone: "+962-2-7201945", email: "fatima.qasemi@amana-textiles.com" }
    },
    {
      id: 3,
      name: "Amana Weaving Zarqa",
      location: { city: "Zarqa", country: "Jordan", latitude: 32.0728, longitude: 36.0876, address: "Zarqa Industrial Estate, Zarqa 13110, Jordan" },
      status: "maintenance",
      established: "2017",
      employees: 280,
      specialization: ["Technical Textiles", "Industrial Fabrics", "Home Textiles"],
      production_capacity_monthly: 420,
      production_level_2024: [
        { month: "January", value: 333 }, { month: "February", value: 336 }, { month: "March", value: 346 }, { month: "April", value: 270 }, { month: "May", value: 355 }, { month: "June", value: 307 }, { month: "July", value: 247 }, { month: "August", value: 258 }, { month: "September", value: 284 }, { month: "October", value: 352 }, { month: "November", value: 367 }, { month: "December", value: 380 }
      ],
      inventory_level_2024: [
        { month: "January", value: 510 }, { month: "February", value: 580 }, { month: "March", value: 642 }, { month: "April", value: 618 }, { month: "May", value: 616 }, { month: "June", value: 622 }, { month: "July", value: 643 }, { month: "August", value: 648 }, { month: "September", value: 672 }, { month: "October", value: 690 }, { month: "November", value: 772 }, { month: "December", value: 808 }
      ],
      contact: { manager: "Ahmad Mansour", phone: "+962-5-3982746", email: "ahmad.mansour@amana-textiles.com" }
    },
    {
      id: 4,
      name: "Amana Premium Aqaba",
      location: { city: "Aqaba", country: "Jordan", latitude: 29.532, longitude: 35.0063, address: "Aqaba Special Economic Zone, Aqaba 77110, Jordan" },
      status: "operational",
      established: "2021",
      employees: 380,
      specialization: ["Luxury Fabrics", "Export Quality", "Organic Cotton"],
      production_capacity_monthly: 720,
      production_level_2024: [
        { month: "January", value: 760 }, { month: "February", value: 720 }, { month: "March", value: 714 }, { month: "April", value: 736 }, { month: "May", value: 745 }, { month: "June", value: 574 }, { month: "July", value: 680 }, { month: "August", value: 647 }, { month: "September", value: 713 }, { month: "October", value: 818 }, { month: "November", value: 734 }, { month: "December", value: 767 }
      ],
      inventory_level_2024: [
        { month: "January", value: 545 }, { month: "February", value: 746 }, { month: "March", value: 874 }, { month: "April", value: 847 }, { month: "May", value: 871 }, { month: "June", value: 850 }, { month: "July", value: 1034 }, { month: "August", value: 1183 }, { month: "September", value: 1360 }, { month: "October", value: 1441 }, { month: "November", value: 1408 }, { month: "December", value: 1436 }
      ],
      contact: { manager: "Layla Hijazi", phone: "+962-3-2014682", email: "layla.hijazi@amana-textiles.com" }
    },
    {
      id: 5,
      name: "Amana Industries Cairo",
      location: { city: "Cairo", country: "Egypt", latitude: 30.0444, longitude: 31.2357, address: "10th of Ramadan Industrial City, Cairo, Egypt" },
      status: "operational",
      established: "2016",
      employees: 620,
      specialization: ["Mass Production", "Basic Textiles", "Polyester Blends"],
      production_capacity_monthly: 1200,
      production_level_2024: [
        { month: "January", value: 1372 }, { month: "February", value: 1071 }, { month: "March", value: 1351 }, { month: "April", value: 1253 }, { month: "May", value: 1222 }, { month: "June", value: 1029 }, { month: "July", value: 1166 }, { month: "August", value: 969 }, { month: "September", value: 1308 }, { month: "October", value: 1443 }, { month: "November", value: 1341 }, { month: "December", value: 1126 }
      ],
      inventory_level_2024: [
        { month: "January", value: 486 }, { month: "February", value: 717 }, { month: "March", value: 922 }, { month: "April", value: 1007 }, { month: "May", value: 1028 }, { month: "June", value: 1110 }, { month: "July", value: 1331 }, { month: "August", value: 1337 }, { month: "September", value: 1339 }, { month: "October", value: 1549 }, { month: "November", value: 1702 }, { month: "December", value: 1706 }
      ],
      contact: { manager: "Mohamed Hassan", phone: "+20-2-26851439", email: "mohamed.hassan@amana-textiles.com" }
    },
    {
      id: 6,
      name: "Amana Cotton Alexandria",
      location: { city: "Alexandria", country: "Egypt", latitude: 31.2001, longitude: 29.9187, address: "Borg El Arab Industrial Zone, Alexandria, Egypt" },
      status: "maintenance",
      established: "2019",
      employees: 290,
      specialization: ["Egyptian Cotton", "Premium Yarns", "Luxury Textiles"],
      production_capacity_monthly: 480,
      production_level_2024: [
        { month: "January", value: 340 }, { month: "February", value: 350 }, { month: "March", value: 398 }, { month: "April", value: 362 }, { month: "May", value: 396 }, { month: "June", value: 307 }, { month: "July", value: 360 }, { month: "August", value: 312 }, { month: "September", value: 371 }, { month: "October", value: 332 }, { month: "November", value: 408 }, { month: "December", value: 372 }
      ],
      inventory_level_2024: [
        { month: "January", value: 589 }, { month: "February", value: 650 }, { month: "March", value: 730 }, { month: "April", value: 758 }, { month: "May", value: 751 }, { month: "June", value: 777 }, { month: "July", value: 842 }, { month: "August", value: 879 }, { month: "September", value: 961 }, { month: "October", value: 1006 }, { month: "November", value: 1052 }, { month: "December", value: 1143 }
      ],
      contact: { manager: "Nour El-Din Farouk", phone: "+20-3-4592817", email: "nour.farouk@amana-textiles.com" }
    },
    {
      id: 7,
      name: "Amana Synthetic Giza",
      location: { city: "Giza", country: "Egypt", latitude: 30.0131, longitude: 31.2089, address: "6th of October Industrial City, Giza, Egypt" },
      status: "operational",
      established: "2022",
      employees: 510,
      specialization: ["Synthetic Fibers", "Performance Fabrics", "Athletic Wear"],
      production_capacity_monthly: 890,
      production_level_2024: [
        { month: "January", value: 1008 }, { month: "February", value: 1009 }, { month: "March", value: 1014 }, { month: "April", value: 757 }, { month: "May", value: 920 }, { month: "June", value: 741 }, { month: "July", value: 730 }, { month: "August", value: 891 }, { month: "September", value: 911 }, { month: "October", value: 987 }, { month: "November", value: 1105 }, { month: "December", value: 986 }
      ],
      inventory_level_2024: [
        { month: "January", value: 440 }, { month: "February", value: 413 }, { month: "March", value: 447 }, { month: "April", value: 651 }, { month: "May", value: 894 }, { month: "June", value: 859 }, { month: "July", value: 911 }, { month: "August", value: 1086 }, { month: "September", value: 1067 }, { month: "October", value: 1229 }, { month: "November", value: 1370 }, { month: "December", value: 1506 }
      ],
      contact: { manager: "Amira Soliman", phone: "+20-2-38461725", email: "amira.soliman@amana-textiles.com" }
    },
    {
      id: 8,
      name: "Amana Finishing Suez",
      location: { city: "Suez", country: "Egypt", latitude: 29.9668, longitude: 32.5498, address: "Suez Industrial Zone, Suez Governorate, Egypt" },
      status: "operational",
      established: "2020",
      employees: 340,
      specialization: ["Fabric Finishing", "Dyeing", "Quality Control"],
      production_capacity_monthly: 560,
      production_level_2024: [
        { month: "January", value: 620 }, { month: "February", value: 516 }, { month: "March", value: 523 }, { month: "April", value: 595 }, { month: "May", value: 606 }, { month: "June", value: 533 }, { month: "July", value: 460 }, { month: "August", value: 472 }, { month: "September", value: 530 }, { month: "October", value: 545 }, { month: "November", value: 594 }, { month: "December", value: 530 }
      ],
      inventory_level_2024: [
        { month: "January", value: 629 }, { month: "February", value: 734 }, { month: "March", value: 843 }, { month: "April", value: 866 }, { month: "May", value: 982 }, { month: "June", value: 1028 }, { month: "July", value: 1013 }, { month: "August", value: 1022 }, { month: "September", value: 990 }, { month: "October", value: 1115 }, { month: "November", value: 1176 }, { month: "December", value: 1283 }
      ],
      contact: { manager: "Youssef Abdel Rahman", phone: "+20-62-3194856", email: "youssef.rahman@amana-textiles.com" }
    },
    {
      id: 9,
      name: "Amana Export Damietta",
      location: { city: "Damietta", country: "Egypt", latitude: 31.4165, longitude: 31.8133, address: "New Damietta Industrial Zone, Damietta, Egypt" },
      status: "operational",
      established: "2018",
      employees: 410,
      specialization: ["Export Processing", "International Standards", "Packaging"],
      production_capacity_monthly: 750,
      production_level_2024: [
        { month: "January", value: 661 }, { month: "February", value: 743 }, { month: "March", value: 790 }, { month: "April", value: 711 }, { month: "May", value: 824 }, { month: "June", value: 760 }, { month: "July", value: 733 }, { month: "August", value: 678 }, { month: "September", value: 747 }, { month: "October", value: 750 }, { month: "November", value: 791 }, { month: "December", value: 850 }
      ],
      inventory_level_2024: [
        { month: "January", value: 566 }, { month: "February", value: 678 }, { month: "March", value: 812 }, { month: "April", value: 956 }, { month: "May", value: 947 }, { month: "June", value: 895 }, { month: "July", value: 863 }, { month: "August", value: 861 }, { month: "September", value: 1033 }, { month: "October", value: 1049 }, { month: "November", value: 1044 }, { month: "December", value: 1052 }
      ],
      contact: { manager: "Maha Zaki", phone: "+20-57-2836149", email: "maha.zaki@amana-textiles.com" }
    },
    {
      id: 10,
      name: "Amana Research Aswan",
      location: { city: "Aswan", country: "Egypt", latitude: 24.0889, longitude: 32.8998, address: "Aswan Industrial Development Zone, Aswan, Egypt" },
      status: "maintenance",
      established: "2023",
      employees: 180,
      specialization: ["R&D", "Sustainable Textiles", "Innovation Lab"],
      production_capacity_monthly: 220,
      production_level_2024: [
        { month: "January", value: 183 }, { month: "February", value: 149 }, { month: "March", value: 137 }, { month: "April", value: 164 }, { month: "May", value: 169 }, { month: "June", value: 165 }, { month: "July", value: 147 }, { month: "August", value: 126 }, { month: "September", value: 180 }, { month: "October", value: 191 }, { month: "November", value: 179 }, { month: "December", value: 158 }
      ],
      inventory_level_2024: [
        { month: "January", value: 505 }, { month: "February", value: 527 }, { month: "March", value: 561 }, { month: "April", value: 574 }, { month: "May", value: 568 }, { month: "June", value: 559 }, { month: "July", value: 558 }, { month: "August", value: 576 }, { month: "September", value: 595 }, { month: "October", value: 610 }, { month: "November", value: 619 }, { month: "December", value: 649 }
      ],
      contact: { manager: "Dr. Salma Nasser", phone: "+20-97-2461837", email: "salma.nasser@amana-textiles.com" }
    }
  ]
};
// --- END OF DATASET ---

// Define type for a single factory (based on the data)
type Factory = typeof amanaData.factory_data[0];

// Define the global Leaflet object type to avoid TypeScript errors
declare const L: any;

// --- CHART DATA PREPARATION ---

const MONTH_ABBREVIATIONS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const CHART_COLORS = ['#3b82f6', '#10b981', '#ef4444', '#f97316', '#8b5cf6'];

/**
 * Transforms factory data into a format usable by Recharts for a grouped bar chart.
 * [
 * { month: 'Jan', 'Factory A': 400, 'Factory B': 300, ... },
 * { month: 'Feb', 'Factory A': 500, 'Factory B': 350, ... },
 * ...
 * ]
 */
const transformProductionData = (factories: Factory[]) => {
  const monthlyData: { month: string; [key: string]: any }[] = [];

  for (let i = 0; i < 12; i++) {
    const monthData: { month: string; [key: string]: any } = {
      month: MONTH_ABBREVIATIONS[i],
    };

    // Only chart the first 3-5 factories for readability, as in the screenshot
    const factoriesToChart = factories.slice(0, 3);

    factoriesToChart.forEach((factory) => {
      monthData[factory.name] = factory.production_level_2024[i].value;
    });

    monthlyData.push(monthData);
  }
  return monthlyData;
};

// --- CHART COMPONENTS ---

// Custom Tooltip for the new chart structure
const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="p-3 bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 rounded-lg shadow-xl text-xs">
        <p className="font-bold text-base text-zinc-900 dark:text-white mb-2">{label} 2024</p>
        <div className="space-y-1">
          {payload.map((entry: any, index: number) => (
            <p key={`item-${index}`} style={{ color: entry.color }}>
              <strong>{entry.name}:</strong> {entry.value.toLocaleString()} units
            </p>
          ))}
        </div>
      </div>
    );
  }
  return null;
};

// --- SIDEBAR COMPONENT ---

const FactoryDetailsSidebar = ({ factory }: { factory: Factory | null }) => {
  if (!factory) {
    return (
      <div className="bg-white dark:bg-zinc-800 p-6 rounded-lg shadow-lg border border-zinc-200 dark:border-zinc-700 h-full">
        <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">Factory Details</h3>
        <p className="text-zinc-500 dark:text-zinc-400 mt-4 text-center py-10">
          Click a factory marker on the map to see its details.
        </p>
      </div>
    );
  }

  // Get the latest inventory value (December 2024)
  const latestInventory = factory.inventory_level_2024[11].value;

  return (
    <div className="bg-white dark:bg-zinc-800 p-6 rounded-lg shadow-lg border border-zinc-200 dark:border-zinc-700 h-full">
      <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-4 border-b border-zinc-100 dark:border-zinc-700 pb-2">
        {factory.name}
      </h3>
      <div className="space-y-3 text-sm">
        <div className="flex justify-between">
          <span className="text-zinc-500 dark:text-zinc-400">Factory ID:</span>
          <span className="font-medium text-zinc-900 dark:text-white">{`AI-${factory.id.toString().padStart(3, '0')}`}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-zinc-500 dark:text-zinc-400">Status:</span>
          <span className={`font-medium capitalize px-2 py-0.5 rounded ${factory.status === 'operational' ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300' : 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300'}`}>
            {factory.status}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-zinc-500 dark:text-zinc-400">Monthly Capacity:</span>
          <span className="font-medium text-zinc-900 dark:text-white">{factory.production_capacity_monthly.toLocaleString()} units</span>
        </div>
        <div className="flex justify-between">
          <span className="text-zinc-500 dark:text-zinc-400">Latest Inventory:</span>
          <span className="font-medium text-zinc-900 dark:text-white">{latestInventory.toLocaleString()} units</span>
        </div>
        <div className="flex justify-between">
          <span className="text-zinc-500 dark:text-zinc-400">Employees:</span>
          <span className="font-medium text-zinc-900 dark:text-white">{factory.employees}</span>
        </div>
        <div className="pt-2 border-t border-zinc-100 dark:border-zinc-700 mt-3">
          <span className="text-zinc-500 dark:text-zinc-400">Manager:</span>
          <span className="font-medium text-zinc-900 dark:text-white float-right">{factory.contact.manager}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-zinc-500 dark:text-zinc-400">Phone:</span>
          <span className="font-medium text-zinc-900 dark:text-white">{factory.contact.phone}</span>
        </div>
      </div>
    </div>
  );
};


// --- MAIN PAGE COMPONENT ---

export default function DashboardPage() {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null); // Ref to store the map instance
  const [selectedFactory, setSelectedFactory] = useState<Factory | null>(null);

  // Prepare data for the chart
  const factoriesToChart = amanaData.factory_data.slice(0, 3); // Matching screenshot
  const monthlyProductionData = transformProductionData(factoriesToChart);

  useEffect(() => {
    // Prevent re-initialization if map already exists
    if (typeof L === "undefined" || mapInstanceRef.current) {
      return;
    }

    // --- LEAFLET FIXES ---
    // 1. Icon Path Fix
    if (L.Icon && L.Icon.Default) {
      delete L.Icon.Default.prototype._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
        iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
        shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
      });
    }

    // --- MAP INITIALIZATION ---
    const initialCenter: [number, number] = [30.5, 33]; // Center between Jordan/Egypt
    const initialZoom = 6;
    const map = L.map(mapRef.current).setView(initialCenter, initialZoom);
    mapInstanceRef.current = map; // Store map instance

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '© <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 18,
    }).addTo(map);

    // --- CUSTOM ICONS ---
    const operationalIcon = L.divIcon({
        className: "custom-div-icon",
        html: `<div class="w-5 h-5 rounded-full bg-green-500 border-2 border-white shadow-md"></div>`,
        iconSize: [20, 20],
        iconAnchor: [10, 10],
    });

    const maintenanceIcon = L.divIcon({
        className: "custom-div-icon",
        html: `<div class="w-5 h-5 rounded-full bg-red-500 border-2 border-white shadow-md"></div>`,
        iconSize: [20, 20],
        iconAnchor: [10, 10],
    });

    // --- ADD MARKERS ---
    amanaData.factory_data.forEach((factory) => {
      const { latitude, longitude } = factory.location;
      const icon = factory.status === "operational" ? operationalIcon : maintenanceIcon;

      const marker = L.marker([latitude, longitude], { icon: icon }).addTo(map);

      // Set up click event to update the sidebar
      marker.on('click', () => {
        setSelectedFactory(factory);
      });
    });

    // 2. Invalidate Size Fix
    setTimeout(() => {
      map.invalidateSize();
    }, 100);

    // Cleanup function
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current = null;
      }
    };
  }, []); // Empty dependency array ensures this runs only once
>>>>>>> 45672da (fix type error)

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Hero />
      <main className="flex-1">
        <FactoryStatus factories={factories} />
        <MonthlyPerformance factories={factories} />
      </main>
      <Footer />
    </div>
  );
}
