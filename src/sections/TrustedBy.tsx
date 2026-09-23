export function TrustedBy() {
  const clients = [
    "Government Organizations",
    "Govt. & Private Educational Institutions",
    "Corporate Brands",
    "Private Clients",
  ];

  // Duplicate for seamless marquee effect
  const marqueeItems = [...clients, ...clients, ...clients, ...clients];

  return (
    <section className="py-8 bg-bg-secondary border-y border-border-subtle overflow-hidden relative flex items-center">
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-bg-secondary to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-bg-secondary to-transparent z-10 pointer-events-none"></div>
      
      <div className="flex w-[200%] sm:w-auto animate-marquee hover:[animation-play-state:paused] whitespace-nowrap">
        {marqueeItems.map((client, i) => (
          <div key={i} className="flex items-center">
            <span className="text-text-muted font-headline text-xl md:text-2xl italic px-8">
              {client}
            </span>
            <span className="w-2 h-2 rounded-full bg-accent-orange/50 mx-4"></span>
          </div>
        ))}
      </div>
    </section>
  );
}
