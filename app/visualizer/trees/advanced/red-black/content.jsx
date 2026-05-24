"use client";
import ComplexityGraph from "@/app/components/ui/graph";
import { useEffect, useState } from "react";

const RedBlackContent = () => {
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
            What is a Red-Black Tree?
          </h2>
          <div className="prose dark:prose-invert max-w-none text-[#374151] dark:text-[#d1d5db] leading-relaxed space-y-4">
            <p>
              A **Red-Black Tree** is a specialized self-balancing binary search tree (BST) where each node contains an extra bit representing the node's color, which can be either **Red** or **Black**.
            </p>
            <p>
              These colors are utilized to ensure the tree remains approximately balanced during insertions and deletions, guaranteeing that operations like search, insertion, and deletion can be completed in $O(\log N)$ time, even in the worst case.
            </p>
          </div>
        </section>

        <section className="p-6 border-b border-[#f3f4f6] dark:border-[#1e1e1e]">
          <h2 className="text-2xl font-bold text-[#1a1a1a] dark:text-white mb-4 flex items-center">
            <span className="w-1 h-6 bg-[#a435f0] mr-3 rounded-full"></span>
            Properties of Red-Black Trees
          </h2>
          <div className="prose dark:prose-invert max-w-none text-[#374151] dark:text-[#d1d5db] leading-relaxed">
            <ul className="space-y-3 list-disc pl-5 marker:text-gray-500">
              <li><strong>Node Color:</strong> Every node is either Red or Black.</li>
              <li><strong>Root Property:</strong> The root of the tree is always Black.</li>
              <li><strong>Leaf Property:</strong> Every leaf (NULL node) is Black.</li>
              <li><strong>Red Node Property:</strong> If a node is Red, both of its children must be Black. (No two consecutive Red nodes are allowed on any path).</li>
              <li><strong>Black Height Property:</strong> For each node, all simple paths from that node to descendant leaves contain the same number of Black nodes.</li>
            </ul>
          </div>
        </section>

        <section className="p-6 border-b border-[#f3f4f6] dark:border-[#1e1e1e]">
          <h2 className="text-2xl font-bold text-[#1a1a1a] dark:text-white mb-4 flex items-center">
            <span className="w-1 h-6 bg-[#a435f0] mr-3 rounded-full"></span>
            Balancing Operations
          </h2>
          <div className="prose dark:prose-invert max-w-none text-[#374151] dark:text-[#d1d5db] space-y-4 leading-relaxed">
            <p>
              When a new node is inserted (always initially colored Red), it may violate the Red-Black properties. To restore balance, we perform two primary operations:
            </p>
            <ol className="space-y-3 list-decimal pl-5">
              <li><strong>Rotations (Left or Right):</strong> Structural changes that adjust the tree height without affecting the inorder BST order.</li>
              <li><strong>Recoloring / Color Flips:</strong> Toggling node colors between Red and Black to distribute path heights correctly.</li>
            </ol>
          </div>
        </section>

        <section className="p-6">
          <h2 className="text-2xl font-bold text-[#1a1a1a] dark:text-white mb-4 flex items-center">
            <span className="w-1 h-6 bg-[#a435f0] mr-3 rounded-full"></span>
            Complexity Analysis
          </h2>
          <div className="prose dark:prose-invert max-w-none text-[#374151] dark:text-[#d1d5db]">
            <ul className="space-y-2 font-mono text-sm bg-gray-50 dark:bg-[#1b1b1b] p-4 rounded-xl border border-gray-200 dark:border-gray-800">
              <li>Insertion Time: O(log N)</li>
              <li>Deletion Time: O(log N)</li>
              <li>Search Time: O(log N)</li>
              <li>Space Complexity: O(N)</li>
            </ul>
            <div className="mt-8">
              <ComplexityGraph
                bestCase={(n) => Math.log2(n + 1)}
                averageCase={(n) => Math.log2(n + 1)}
                worstCase={(n) => Math.log2(n + 1) * 2}
                maxN={50}
              />
            </div>
          </div>
        </section>
      </article>
    </main>
  );
};

export default RedBlackContent;
