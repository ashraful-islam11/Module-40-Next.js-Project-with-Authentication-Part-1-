
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4">
      <h1 className="text-4xl font-bold">404</h1>
      <p>দুঃখিত, এই সংবাদটি খুঁজে পাওয়া যায়নি।</p>
      <Link href="/" className="text-blue-600 underline">
        হোম পেজে ফিরে যান
      </Link>
    </div>
  );
}