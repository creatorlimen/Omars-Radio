import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function AppNotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-[#F5F5F5]">App Not Found</h1>
        <p className="text-[#AAAAAA] max-w-md mx-auto">
          The app you&apos;re looking for doesn&apos;t exist or may have been removed.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center mt-6 px-6 py-2 bg-[#D4AF37] text-[#121212] rounded-full hover:bg-[#FFD700] transition"
        >
          <ArrowLeft size={16} className="mr-2" />
          <span>Back to Directory</span>
        </Link>
      </div>
    </div>
  );
}