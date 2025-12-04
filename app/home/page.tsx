import React, { Suspense } from "react";
import HomePageClient from "./components/HomePageClient";

export default function Page() {
  return (
    <Suspense fallback={<div className="text-white p-8">Loading your spiritual dashboard...</div>}>
      <HomePageClient />
    </Suspense>
  );
}
