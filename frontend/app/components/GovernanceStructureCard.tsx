import { ReactNode } from "react";

interface GovernanceStructureCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  variant?: "blue" | "orange";
}

export function GovernanceStructureCard({
  title,
  description,
  icon,
  variant = "blue",
}: GovernanceStructureCardProps) {
  const gradientClass =
    variant === "orange"
      ? "from-orange-50 to-white border-orange-100"
      : "from-blue-50 to-white border-blue-100";

  return (
    <div
      className={`bg-gradient-to-br ${gradientClass} border rounded-2xl p-8`}
    >
      <div className="flex items-start gap-4 mb-4">
        <div className="bg-gradient-to-b from-[#fe9a00] to-[#e17100] rounded-xl p-3 flex-shrink-0">
          {icon}
        </div>
        <div className="flex-1">
          <h2 className="text-xl text-gray-900 mb-2">{title}</h2>
          <p className="text-gray-700 leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
}

