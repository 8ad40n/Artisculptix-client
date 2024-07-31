import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import CraftCard from "../components/CraftCard";

export default function Home() {
  const crafts = useLoaderData();
  const [craft, setCraft] = useState(crafts);

  return (
    <div className="grid grid-cols-3 gap-6 mt-8">
      {craft.map(c => (
        <CraftCard key={c._id} craft={c} setCraft={setCraft} crafts={crafts} />
      ))}
    </div>
  );
}
