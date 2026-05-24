"use client";
import ComplexityGraph from "@/app/components/ui/graph";
import { useEffect, useState } from "react";

const BTreeContent = () => {
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
            What is a B-Tree?
          </h2>
          <div className="prose dark:prose-invert max-w-none text-[#374151] dark:text-[#d1d5db] leading-relaxed space-y-4">
            <p>
              A **B-Tree** is a self-balancing search tree data structure that maintains sorted data and allows searches, sequential access, insertions, and deletions in logarithmic time. 
            </p>
            <p>
              Unlike standard binary search trees, a B-Tree is optimized for systems that read and write large blocks of data. It is widely used in **databases** and **file systems** (such as MySQL, PostgreSQL, and NTFS) because it minimizes expensive disk access operations by grouping multiple keys inside a single broad node.
            </p>
          </div>
        </section>

        <section className="p-6 border-b border-[#f3f4f6] dark:border-[#1e1e1e]">
          <h2 className="text-2xl font-bold text-[#1a1a1a] dark:text-white mb-4 flex items-center">
            <span className="w-1 h-6 bg-[#a435f0] mr-3 rounded-full"></span>
            B-Tree Properties (of Order M)
          </h2>
          <div className="prose dark:prose-invert max-w-none text-[#374151] dark:text-[#d1d5db] leading-relaxed">
            <ul className="space-y-3 list-disc pl-5 marker:text-gray-500">
              <li><strong>Node capacity:</strong> Every node contains at most $M-1$ keys.</li>
              <li><strong>Child limits:</strong> Every internal node (except root) has at least $\lceil M/2 \rceil$ children.</li>
              <li><strong>Root condition:</strong> The root has at least 2 children if it is not a leaf node.</li>
              <li><strong>Leaf leveling:</strong> All leaf nodes appear on the exact same level, ensuring uniform path depths.</li>
              <li><strong>Keys and splits:</strong> An internal node with $k$ children contains exactly $k-1$ keys.</li>
            </ul>
          </div>
        </section>

        <section className="p-6">
          <h2 className="text-2xl font-bold text-[#1a1a1a] dark:text-white mb-4 flex items-center">
            <span className="w-1 h-6 bg-[#a435f0] mr-3 rounded-full"></span>
            Complexity and Performance
          </h2>
          <div className="prose dark:prose-invert max-w-none text-[#374151] dark:text-[#d1d5db]">
            <ul className="space-y-2 font-mono text-sm bg-gray-50 dark:bg-[#1b1b1b] p-4 rounded-xl border border-gray-200 dark:border-gray-800">
              <li>Search Complexity: O(log N)</li>
              <li>Insertion Complexity: O(log N)</li>
              <li>Deletion Complexity: O(log N)</li>
              <li>Disk Access Cost: O(log_M N) - Extremely low!</li>
            </ul>
            <div className="mt-8">
              <ComplexityGraph
                bestCase={(n) => Math.log(n) / Math.log(5)}
                averageCase={(n) => Math.log(n) / Math.log(4)}
                worstCase={(n) => Math.log(n) / Math.log(2)}
                maxN={50}
              />
            </div>
          </div>
        </section>
      </article>
    </main>
  );
};

export default BTreeContent;
