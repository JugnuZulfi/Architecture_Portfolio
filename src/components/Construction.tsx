import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Hammer, Users, ClipboardCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const constructionServices = [
  {
    icon: Hammer,
    title: "Grey Structure & Materials",
    description:
      "Complete structural construction including foundation, RCC work, brickwork, and roofing with quality materials.",
    note: "Example: 5 Marla grey structure — estimated PKR 25-35 Lac (varies by design & materials)",
  },
  {
    icon: ClipboardCheck,
    title: "Project Management",
    description:
      "End-to-end supervision including site visits, contractor coordination, timeline management, and quality control.",
    note: "Direct and indirect communication options with the management team",
  },
  {
    icon: Users,
    title: "Labor & Execution",
    description:
      "Skilled labor for construction and finishing works with transparent scope and cost discussions.",
    note: "All labor arrangements discussed through direct consultation",
  },
];

const Construction = () => {
  return (
    <section id="construction" className="section-padding bg-charcoal">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4">
            Build With Us
          </p>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-medium mb-6">
            Construction Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            From foundation to finishing, we provide comprehensive construction
            services with transparent communication and quality assurance.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {constructionServices.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative p-8 rounded-lg card-gradient gold-border group hover:border-primary/40 transition-colors duration-500"
            >
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-500">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading text-2xl mb-4">{service.title}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>
              <p className="text-sm text-primary/80 italic">{service.note}</p>
            </motion.div>
          ))}
        </div>

        {/* Pricing Note */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="p-8 rounded-lg bg-secondary/30 border border-border text-center"
        >
          <p className="text-lg mb-2">
            <span className="text-primary font-medium">Note:</span> All pricing
            and project discussions are handled through direct communication.
          </p>
          <p className="text-muted-foreground">
            Costs vary based on design complexity, material choices, and site
            conditions. Contact us for a personalized consultation.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link to="/details#construction">
            <Button variant="outline" size="lg" className="group">
              Learn More About Construction
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Construction;
