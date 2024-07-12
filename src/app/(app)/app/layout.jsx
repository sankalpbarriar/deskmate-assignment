import BackgroundPattern from "@/app/components/baground";

export default function RootLayout({ children }) {
  return (
    <>
      <BackgroundPattern />
      <div className=" flex flex-col max-w-[1100px] mx-auto px-3 min-h-screen">
        {children}
      </div>
    </>
  );
}
