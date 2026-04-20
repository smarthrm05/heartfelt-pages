import eyebrowIcon from "@/assets/eyebrow-icon.png";

interface EyebrowProps {
  label: string;
  align?: "left" | "center";
  className?: string;
}

export const Eyebrow = ({ label, align = "left", className = "" }: EyebrowProps) => (
  <div
    className={`flex items-center gap-2 ${
      align === "center" ? "justify-center" : "justify-start"
    } ${className}`}
  >
    <img
      src={eyebrowIcon}
      alt=""
      aria-hidden="true"
      className="h-5 w-5 object-contain"
      loading="lazy"
    />
    <span className="text-sm font-semibold italic text-primary">
      {label}
    </span>
  </div>
);
