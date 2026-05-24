"use client";
import ComplexityGraph from "@/app/components/ui/graph";
import { useEffect, useState } from "react";

const SegmentContent = () => {
  const [theme, setTheme] = useState("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const updateTheme = () => {
      const savedTheme = localStorage.getItem("theme") || "light";
      setTheme(savedTheme);
    };
    updateTheme();
    setMounted(true);
    window.addEventListener("storage", updateTheme);
    window.addEventListener("themeChange", updateTheme);
    return () => {
      window.removeEventListener("storage", updateTheme);
      window.removeEventListener("themeChange", updateTheme);
    };
  }, []);

  return (
    <main className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 md:gap-6 mt-8">
      <div className="col-span-1">
        <div className="hidden md:block">
          {mounted && (
            <iframe
              key={theme}
              src={
                theme === "dark"
                  ? "https://hw.glich.co/resources/embed/daily/dsa?theme=dark"
                  : "https://hw.glich.co/resources/embed/daily/dsa?theme=light"
              }
              width="105%"
              height="400"
              title="Daily DSA Challenge"
            ></iframe>
          )}
        </div>
      </div>

      <article className="col-span-4 max-w-4xl bg-white dark:bg-[#111] rounded-2xl border border-[#e5e7eb] dark:border-[#222] overflow-hidden mb-8 shadow-sm">
        <section className="p-6 border-b border-[#f3f4f6] dark:border-[#1e1e1e]">
          <h2 className="text-2xl font-bold text-[#1a1a1a] dark:text-white mb-4 flex items-center">
            <span className="w-1 h-6 bg-[#a435f0] mr-3 rounded-full"></span>
            What is a Segment Tree?
          </h2>
          <div className="prose dark:prose-invert max-w-none text-[#374151] dark:text-[#d1d5db] leading-relaxed space-y-4">
            <p>
              A **Segment Tree** is a binary tree data structure used for storing intervals or segments. It allows querying which of the stored segments contain a given point, or performing aggregate queries over subsegments (such as finding sum, minimum, or maximum in a range).
            </p>
            <p>
              While standard prefix sum arrays allow $O(1)$ range queries, they require $O(N)$ time to perform updates. A Segment Tree solves this by supporting **both** Range Queries and Point Updates in extremely efficient $O(\log N)$ time.
            </p>
          </div>
        </section>

        <section className="p-6 border-b border-[#f3f4f6] dark:border-[#1e1e1e]">
          <h2 className="text-2xl font-bold text-[#1a1a1a] dark:text-white mb-4 flex items-center">
            <span className="w-1 h-6 bg-[#a435f0] mr-3 rounded-full"></span>
            Segment Tree Structure
          </h2>
          <div className="prose dark:prose-invert max-w-none text-[#374151] dark:text-[#d1d5db] leading-relaxed">
            <ul className="space-y-3 list-disc pl-5 marker:text-gray-500">
              <li><strong>Leaf Nodes:</strong> Represent the individual elements of the base 1D array.</li>
              <li><strong>Internal Nodes:</strong> Represent the merged aggregation of their left and right children segments.</li>
              <li><strong>Tree Size:</strong> For a base array of size $N$, a Segment Tree is usually represented as a 1D array of size $4N$ to accommodate all leaf and padding branches.</li>
            </ul>
          </div>
        </section>

        <section className="p-6">
          <h2 className="text-2xl font-bold text-[#1a1a1a] dark:text-white mb-4 flex items-center">
            <span className="w-1 h-6 bg-[#a435f0] mr-3 rounded-full"></span>
            Performance Complexity
          </h2>
          <div className="prose dark:prose-invert max-w-none text-[#374151] dark:text-[#d1d5db]">
            <ul className="space-y-2 font-mono text-sm bg-gray-50 dark:bg-[#1b1b1b] p-4 rounded-xl border border-gray-200 dark:border-gray-800">
              <li>Tree Construction: O(N)</li>
              <li>Range Query Time: O(log N)</li>
              <li>Point Update Time: O(log N)</li>
              <li>Space Complexity: O(N)</li>
            </ul>
            <div className="mt-8">
              <ComplexityGraph
                bestCase={(n) => Math.log2(n)}
                averageCase={(n) => Math.log2(n)}
                worstCase={(n) => Math.log2(n)}
                maxN={50}
              />
            </div>
          </div>
        </section>
      </article>
    </main>
  );
};

export default SegmentContent;
