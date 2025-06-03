"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export default function RouterLoader() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);

  // Every time pathname changes, show loader briefly
  useEffect(() => {
    // Show loader on path change
    setLoading(true);

    // Simulate loading duration, e.g. 500ms or until next render
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 700);

    return () => clearTimeout(timeout);
  }, [pathname]);

  return (
    <div
      className={clsx(
        "fixed inset-0 bg-[#001e80] z-50 flex items-center justify-center text-white text-2xl font-semibold transform transition-transform duration-700 ease-in-out",
        loading ? "translate-y-0" : "translate-y-full"
      )}
    >
      Loading...
    </div>
  );
}
