export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <div className="h-full flex items-center justify-center">{children}</div>
    </main>
  );
}
