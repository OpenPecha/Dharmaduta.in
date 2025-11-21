const MissionSection = () => {
    return (
        <section className="py-8 sm:py-20 lg:py-24 bg-background font-inter">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-foreground">
                        Our Mission & The Virtuous Cycle
                    </h2>
                    <div className="space-y-6 text-base sm:text-lg text-muted-foreground leading-relaxed text-left">
                        <p>
                            Empowered by strategic partnerships with the OpenPecha Charitable Trust and BDRC, we have embarked on this journey with a global mindset. By combining deep technical pedigree with education science, we focus on two core areas: Developing Buddhist Technology and Nurturing the Buddhist Online Community.
                        </p>
                        <p>
                            Our ambition is concrete and measurable. Within five years, we aim to serve <span className="text-primary font-bold">1 million daily active users</span> through our Buddhist technology products and ensure that Buddhist wisdom reaches <span className="text-primary font-bold">100 million people</span> through our community growth activities.
                        </p>
                        <p>
                            To achieve this, we operate on a "Virtuous Cycle" principle. Dharmaduta Services reinvests 70% of all profits from our technology and data services back into community growth, while retaining a 30% sustainability margin. This funding directly supports initiatives like the Buddhist Creators Convention, ensuring that our technical success fuels the human connections at the heart of the Dharma.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MissionSection;
