import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-cream px-6 text-center">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-saffron-600">404</p>
        <h1 className="mt-3 text-3xl font-bold text-river-900">Page not found</h1>
        <p className="mt-3 max-w-md text-gray-600">
          The page you are looking for may have moved.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex rounded-full bg-saffron-600 px-6 py-3 text-sm font-semibold text-white shadow-glow"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}
