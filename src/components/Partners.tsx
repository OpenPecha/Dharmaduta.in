const partners = [
  { name: 'OpenPecha Charitable Trust', a: 'https://www.openpecha.org/' },
  { name: 'BDRC', a: 'https://www.bdrc.io/' },
  { name: 'EPHC', a: 'https://www.ephc.org/' },
];

const Partners = () => {
  return (
    <div className="bg-background py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center text-sm font-semibold text-muted-foreground tracking-wider uppercase">
            Trusted by
          </h2>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-8">
            {partners.map((partner) => (
              <a 
                key={partner.name} 
                href={partner.a} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex justify-center items-center grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
              >
                <p className="text-2xl font-semibold text-foreground">{partner.name}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
