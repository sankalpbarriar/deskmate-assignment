import { Inter } from "next/font/google";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import "../app/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Book-rooms",
  description: "internship assignment",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppRouterCacheProvider>{children}+ </AppRouterCacheProvider>
      </body>
    </html>
  );
}
