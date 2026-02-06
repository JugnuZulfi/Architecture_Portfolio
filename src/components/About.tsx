import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Award, Shield, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";

const values = [
  {
    icon: Award,
    title: "Quality",
    description:
      "Uncompromising standards in every detail of design and construction.",
  },
  {
    icon: Shield,
    title: "Transparency",
    description:
      "Clear communication and honest pricing throughout every project phase.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Pushing boundaries with modern techniques and sustainable solutions.",
  },
];

const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container-narrow">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop"
                alt="Architecture Studio"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            </div>
            {/* Stats Overlay */}
            <div className="absolute bottom-8 left-8 right-8 grid grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-card/90 backdrop-blur-md border border-border">
                <p className="font-heading text-3xl text-primary">15+</p>
                <p className="text-sm text-muted-foreground">
                  Years Experience
                </p>
              </div>
              <div className="p-4 rounded-lg bg-card/90 backdrop-blur-md border border-border">
                <p className="font-heading text-3xl text-primary">200+</p>
                <p className="text-sm text-muted-foreground">
                  Projects Completed
                </p>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4">
              About Us
            </p>
            <h2 className="font-heading text-4xl md:text-5xl font-medium mb-6">
              Building Dreams Into Reality
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              With over 15 years of experience in architecture and construction,
              we have established ourselves as a trusted name in creating spaces
              that inspire. Our team combines technical expertise with creative
              vision to deliver exceptional results for both residential and
              commercial projects.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Operating across major cities in Pakistan, we specialize in modern
              architectural design, interior solutions, and comprehensive
              construction services. Every project is a collaboration, ensuring
              your vision is realized with precision and care.
            </p>

            {/* Values */}
            <div className="space-y-4 mb-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <value.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">{value.title}</h4>
                    <p className="text-sm text-muted-foreground">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <Link to="/details#about">
              <Button variant="outline" size="lg" className="group">
                Read Full Company Profile
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
