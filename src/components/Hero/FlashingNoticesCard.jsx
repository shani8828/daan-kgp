"use client";

import React from "react";
import { VscDiffIgnored } from "react-icons/vsc";

export default function FlashingNoticesCard() {
  return (
    <>
      <style jsx>{`
        @property --border-angle {
          syntax: "<angle>";
          inherits: true;
          initial-value: 0deg;
        }

        @keyframes border-spin {
          100% {
            --border-angle: 360deg;
          }
        }

        .animate-border {
          animation: border-spin 6s linear infinite;
        }
      `}</style>

      <div className="w-full flex items-center justify-center p-4">
        <div className="w-full max-w-[600px] mx-auto [background:linear-gradient(45deg,#080b11,theme(colors.slate.800)_50%,#172033)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.slate.600/.48)_80%,theme(colors.teal.500)_86%,theme(colors.cyan.300)_90%,theme(colors.teal.500)_94%,theme(colors.slate.600/.48))_border-box] rounded-2xl border border-transparent animate-border">
          <div className="relative z-10 p-2 md:p-3 lg:p-4 rounded-2xl bg-gray-500 dark:bg-gray-900 text-gray-950 dark:text-gray-400 shadow-lg">
            
            {/* Flashing Notices Content */}
            <div
              id="flashing-notices"
              data-aos="fade-right"
              data-aos-delay="900"
              className="scroll-mt-[100px] text-left"
            >
              <h1 className="text-left underline font-semibold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-500">
                Flashing Notices
              </h1>

              <div className="space-y-3">
                <div className="flex items-start gap-2 text-sm md:text-md">
                  <VscDiffIgnored className="mt-[3px]" />
                  <div>Mid-Semester Exams : Sep 18-26, 2025.</div>
                </div>

                <div className="flex items-start gap-2 text-sm md:text-md">
                  <VscDiffIgnored className="mt-[3px]" />
                  <div>Autumn Break : Sep 27-Oct 05, 2025.</div>
                </div>

                <div className="flex items-start gap-2 text-sm md:text-md">
                  <VscDiffIgnored className="mt-[3px]" />
                  <div>Dakshana Day Celebration : Oct 15, 2025.</div>
                </div>

                <div className="flex items-start gap-2 text-sm md:text-md">
                  <VscDiffIgnored className="mt-[3px]" />
                  <div>
                    Income Certificate
                    <a
                      href="https://drive.google.com/file/d/1d7_OxbrHCOzuzNQ8rVCCqui9lsEoEdUT/view?usp=sharing"
                      target="_blank"
                      className="text-blue-500 hover:text-blue-700 transition-all duration-300"
                    >
                      {" "}Format{" "}
                    </a>
                    for current session.
                  </div>
                </div>
              </div>
            </div>
            {/* End Flashing Notices Content */}

          </div>
        </div>
      </div>
    </>
  );
}
