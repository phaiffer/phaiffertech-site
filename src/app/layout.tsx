import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className="min-h-screen bg-brand-navy text-ui-fg antialiased">
        {children}
      </body>
    </html>
  );
}
