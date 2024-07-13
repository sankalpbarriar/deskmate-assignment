import BackgroundPattern from "@/app/components/baground";

export default function RootLayout({ children }) {
  return (
    <>
      <BackgroundPattern />
      <div className="bg-[#eaecec] flex flex-col w-full mx-auto px-3 min-h-screen">
        {children}
      </div>
    </>
  );
}
