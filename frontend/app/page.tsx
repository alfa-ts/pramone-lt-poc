export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Landing Page */}
      <section className="relative bg-gradient-to-br from-blue-50 via-gray-100 to-blue-100 py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-accent/10"></div>
        <div className="absolute inset-0 dotted-pattern opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
            Sveiki atvykę
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Čia bus pagrindinis puslapis
          </p>
        </div>
      </section>
    </div>
  );
}
