import SideNav from "@/components/sideNav";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen">
      <section>
        <SideNav />
      </section>
      <section className="w-full h-screen">{children}</section>
    </div>
  );
}
