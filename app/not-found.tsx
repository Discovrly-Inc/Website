import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <p className="text-[80px] font-bold text-indigo-100 leading-none mb-4">404</p>
        <h1 className="text-[28px] font-semibold text-[#0f172a] mb-3">Page not found</h1>
        <p className="text-[16px] text-[#64748b] mb-8 leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-indigo-600 text-white font-semibold rounded-lg px-6 py-3 hover:bg-indigo-700 transition-colors"
        >
          <ArrowLeft size={16} />
          Back to home
        </Link>
      </div>
    </div>
  );
}
