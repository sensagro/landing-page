interface BackgroundImageProps {
  src: string;
  alt: string;
  opacity?: number;
  gradientOverlay?: "to-r" | "to-b" | "to-t" | "none";
  className?: string;
}

export const BackgroundImage = ({
  src,
  alt,
  opacity = 1,
  gradientOverlay = "to-r",
  className = "",
}: BackgroundImageProps) => {
  const gradientClasses = {
    "to-r": "bg-gradient-to-r from-background via-background/85 to-background/40",
    "to-b": "bg-gradient-to-b from-background via-background/95 to-background",
    "to-t": "bg-gradient-to-t from-background via-transparent to-background/30",
    "none": "",
  };

  return (
    <div className={`absolute inset-0 ${className}`}>
      <img src={src} alt={alt} className="w-full h-full object-cover" style={{ opacity }} />
      {gradientOverlay !== "none" && (
        <>
          <div className={`absolute inset-0 ${gradientClasses[gradientOverlay]}`} />
          {gradientOverlay === "to-r" && (
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30" />
          )}
        </>
      )}
    </div>
  );
};
