"use client";

import { getIconForLabel } from "@/features/projects/utils/overview-icons";

type OverviewItem = {
  label: string;
  content: string;
};

type ProjectOverviewProps = {
  overview?: string;
  overviewItems?: OverviewItem[];
};

export function ProjectOverview({
  overview,
  overviewItems,
}: ProjectOverviewProps) {
  if (!overview && (!overviewItems || overviewItems.length === 0)) {
    return null;
  }

  return (
    <section aria-labelledby="overview-heading">
      <h2
        id="overview-heading"
        className="text-2xl font-semibold text-slate-900 mb-4 "
      >
        Overview
      </h2>
      {overview && (
        <p className="text-slate-700 leading-relaxed whitespace-pre-wrap">
          {overview}
        </p>
      )}
      {overviewItems && overviewItems.length > 0 && (
        <div className="rounded-lg border border-slate-200 bg-slate-50 p-6 mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-start">
            {overviewItems.map((item, index) => {
              const IconComponent = getIconForLabel(item.label);
              const isLastItem = index === overviewItems.length - 1;
              const hasEmptyThirdColumnOnLastRow =
                overviewItems.length % 3 === 2;

              return (
                <div
                  key={`overview-item-${index}`}
                  className={`flex items-start gap-3 ${
                    isLastItem && hasEmptyThirdColumnOnLastRow
                      ? "lg:col-span-2"
                      : ""
                  }`}
                >
                  {IconComponent && (
                    <IconComponent className="w-5 h-5 flex-shrink-0 text-slate-700 mt-0.5" />
                  )}
                  <div className="min-w-0">
                    <h3 className="text-sm font-semibold text-slate-900">
                      {item.label}
                    </h3>
                    <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                      {item.content}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
}
