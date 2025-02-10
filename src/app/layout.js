import "./globals.css";

export const metadata = {
  title: "Landrup Dans",
  description: "Landrup danse skole",
};

export default function RootLayout({ children }) {
  return (
    <html lang="da">
      <body
        className={`antialiased relative`}>
          <main>
            {children}
          </main>
      </body>
    </html>
  );
}
