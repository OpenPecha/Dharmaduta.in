const VisionSection = () => {
    return (
        <section className="py-8 sm:py-20 lg:py-24 bg-background font-inter">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="max-w-4xl mx-auto space-y-16 sm:space-y-24">

                    {/* Deep Roots & Proven Expertise */}
                    <div>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-foreground text-center">
                            Deep Roots & Proven Expertise
                        </h2>
                        <div className="space-y-6 text-base sm:text-lg text-muted-foreground leading-relaxed">
                            <p>
                                While Dharmaduta is a new entity, the expertise we bring is the culmination of decades of professional dedication. Before uniting under this banner, our founders were the architects, engineers, managers, and educators behind some of the most significant digital Buddhist initiatives of the last decade.
                            </p>
                            <p>
                                We bring a rare combination of skills, honed through hands-on leadership in major projects:
                            </p>

                            <div className="grid gap-6 mt-8">
                                <div className="bg-muted/30 p-6 rounded-xl border border-border/50">
                                    <h3 className="text-lg sm:text-xl font-semibold text-primary mb-3">Operational Scale & Management</h3>
                                    <p className="text-sm sm:text-base">
                                        Beyond technical execution, we possess deep expertise in planning and delivering large-scale projects. We have successfully built management structures and workflows to coordinate more than 300 developers, administrators, and data labelers, ensuring operational excellence at every stage of growth.
                                    </p>
                                </div>

                                <div className="bg-muted/30 p-6 rounded-xl border border-border/50">
                                    <h3 className="text-lg sm:text-xl font-semibold text-primary mb-3">Large-Scale Text Preservation</h3>
                                    <p className="text-sm sm:text-base">
                                        Through leadership roles in the Tibetan Digital Kangyur for 84000, the Digital Tengyur for the Barom Shedra, the Nalanda Corpus project, and cataloging initiatives for BDRC, we mastered the complexities of digitizing and structuring sacred texts at scale.
                                    </p>
                                </div>

                                <div className="bg-muted/30 p-6 rounded-xl border border-border/50">
                                    <h3 className="text-lg sm:text-xl font-semibold text-primary mb-3">AI & Cutting-Edge Tech</h3>
                                    <p className="text-sm sm:text-base">
                                        Our tech specialists pioneered NLP for Buddhist languages via the Monlam AI project, the Botok library, and the Dharmamitra translation dataset. They also engineered custom annotation tools for AI training and a suite of tools to semi-automate the preparation of critical editions of Buddhist texts.
                                    </p>
                                </div>

                                <div className="bg-muted/30 p-6 rounded-xl border border-border/50">
                                    <h3 className="text-lg sm:text-xl font-semibold text-primary mb-3">Education & Pedagogy</h3>
                                    <p className="text-sm sm:text-base">
                                        Through the Esukhia online immersion school and the Kumarajiva translation training program, our education experts developed deep expertise in teacher training, course material development, and educator training, mastering how people learn and how to transmit Dharma effectively in modern contexts.
                                    </p>
                                </div>
                            </div>

                            <p className="mt-6 font-medium text-foreground">
                                Uniting these individual strengths into a single entity allows us to serve the Buddhist world with a capability far greater than the sum of its parts.
                            </p>
                        </div>
                    </div>



                </div>
            </div>
        </section>
    );
};

export default VisionSection;
