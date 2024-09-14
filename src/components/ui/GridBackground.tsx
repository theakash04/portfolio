"use client";
export default function GridBg({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="h-screen w-screen bg-background bg-dot-white/[0.1] relative flex items-start justify-center sm:items-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)]" />
      <div className="w-full h-full flex items-start md:items-center justify-center">
        {children}
      </div>
    </div>
  );
}
