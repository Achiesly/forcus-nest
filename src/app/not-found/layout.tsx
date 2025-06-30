
import Navbar from '@/components/navbar';

export default function SubscribeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex flex-col">
      <Navbar className="text-blue-600 border-b border-gray-200" />
      {children}
    </main>
  );
}