import { Poppins, Inter } from "next/font/google";
import SideNav from "../components/rechtlich/SideNav";

// export const metadata = {
//   title: "Cetirc",
//   description: "Cetirc meta description",
// };

export default function RootLayout({ children }) {
  return (
    <div className="container mt-[150px] flex gap-5 md:gap-0 flex-col md:flex-row">
      <div className="w-full md:w-[30%] overflow-auto">
        <SideNav />
      </div>
      <div className="border rounded-lg w-full md:w-[70%] ml-0 md:ml-4 p-8">
        {children}
      </div>
    </div>
  );
}
