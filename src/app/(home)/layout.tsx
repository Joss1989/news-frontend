import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <>
      <Navbar />
      <main className="max-w-[1000px] mx-auto grid grid-cols-4 gap-x-5 py-20 px-5 ms:px-0">
        {children}
      </main>
      <Footer />
      </>
  );
}