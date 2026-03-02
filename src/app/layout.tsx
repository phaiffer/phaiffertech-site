import "./globals.css";
import { getLocale } from "next-intl/server";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();

  return (
    <html lang={locale}>
      <body className="min-h-screen bg-brand-navy text-ui-fg antialiased">
        {children}
      </body>
    </html>
  );
}
