import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex flex-col items-center justify-center h-screen bg-secondary text-center px-4">
      <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-blue-500 via-green-500 to-teal-500 bg-clip-text text-transparent">
        Oops!
      </h1>
      <h2 className="text-2xl font-semibold text-primary mb-4">
        404 - Page Not Found
      </h2>
      <p className="text-lg text-muted-foreground mb-8 max-w-md">
        The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </p>
      <div className="flex gap-4">
        <Link
          href="/"
          className="px-6 py-3 bg-accent text-white rounded-lg text-lg hover:bg-accent-hover transition"
        >
          Go to Homepage
        </Link>
        <Link
          href="/contact"
          className="px-6 py-3 bg-primary text-white rounded-lg text-lg hover:bg-primary-hover transition"
        >
          Contact Support
        </Link>
      </div>
    </section>
  );
}