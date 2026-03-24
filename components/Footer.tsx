import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
          {/* Brand */}
          <div className="flex flex-col gap-3">
            <Link
              href="/"
              className="text-xl font-bold tracking-tight hover:text-indigo-400 transition-colors"
            >
              Discovrly
            </Link>
            <p className="text-[#94a3b8] text-[15px]">The system for product teams.</p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap gap-x-8 gap-y-3">
            <Link
              href="/features"
              className="text-[15px] text-[#94a3b8] hover:text-white transition-colors"
            >
              Features
            </Link>
            <Link
              href="/privacy"
              className="text-[15px] text-[#94a3b8] hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-[15px] text-[#94a3b8] hover:text-white transition-colors"
            >
              Terms of Service
            </Link>
          </nav>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-[#64748b] text-[14px]">
            &copy; 2026 Discovrly. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
