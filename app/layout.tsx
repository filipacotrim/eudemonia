import Header from "./sticky/header"; 
import CurrentPage from "./sticky/current-page";
import "./globals.css";



export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
