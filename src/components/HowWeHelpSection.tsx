
import { useEffect, useRef } from "react";

const HowWeHelpSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (titleRef.current) observer.observe(titleRef.current);
    if (textRef.current) observer.observe(textRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 bg-gradient-to-br from-teal-500 to-teal-600 font-inter" id="why-choose">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h3 
            ref={titleRef}
            className="text-sm font-semibold bg-gradient-to-r from-purple-500 to-purple-700 bg-clip-text text-transparent mb-6 tracking-wide uppercase opacity-0 translate-y-10"
          >
            HOW WE HELP
          </h3>
          <p 
            ref={textRef}
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-relaxed opacity-0 translate-y-10"
          >
            We bridge ancient wisdom and modern technology by uniting our Buddhist tech 
            specialists, extensive scholarly network, and expert marketing coaches to help you multiply 
            your impact.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowWeHelpSection;
