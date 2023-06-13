"use client";

import { useState, useEffect } from "react";
import { MapPin } from "@/assets/icons";
import { getLocation } from "@/utils/getLocation";

export function UserLocation() {
  const [location, setLocation] = useState<GeolocationPosition | null>(null);

  async function handleGetLocation() {
    try {
      const position = await getLocation();
      setLocation(position);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    handleGetLocation();
  }, []);

  console.log(location);

  return (
    <div className="flex items-center gap-1 bg-purple-400 p-2 rounded-md">
      <MapPin weight="fill" size={22} className="text-purple-500" />
      <span className="text-purple-600 text-sm">Porto Velho, RO</span>
    </div>
  );
}
