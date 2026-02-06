import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Palette,
  TreePine,
  Building2,
  HardHat,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Building2,
    title: "Architectural Design",
    description:
      "Complete residential and commercial architectural solutions from concept to construction documentation.",
    features: [
      "Floor Plans",
      "3D Visualization",
      "Working Drawings",
      "Client Collaboration",
    ],
    image:
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=2000&auto=format&fit=crop",
  },
  {
    icon: Palette,
    title: "Interior Design",
    description:
      "Concept development, space planning, material and lighting selection for residential and commercial interiors.",
    features: [
      "Space Planning",
      "Material Selection",
      "Lighting Design",
      "Online Consultation",
    ],
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop",
  },
  {
    icon: TreePine,
    title: "Landscape Design",
    description:
      "Outdoor space planning integrating natural elements with architecture for sustainable, climate-responsive design.",
    features: [
      "Garden Design",
      "Outdoor Planning",
      "Sustainable Solutions",
      "Property Enhancement",
    ],
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2000&auto=format&fit=crop",
  },
  {
    icon: HardHat,
    title: "Construction Services",
    description:
      "End-to-end construction services including grey structure, project management, and skilled labor execution.",
    features: [
      "Grey Structure",
      "Quality Control",
      "Project Management",
      "Site Supervision",
    ],
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2000&auto=format&fit=crop",
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-charcoal">
      <div className="container-narrow">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4">
            What We Offer
          </p>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-medium mb-6">
            Our Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Premium architectural services tailored to bring your vision to life
            through thoughtful design and meticulous execution.
          </p>
        </motion.div>

        {/* SERVICES : Mobile Slider / Desktop Grid */}
        <div
          className="
            flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4
            md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-8
            md:overflow-visible
          "
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="
                group relative overflow-hidden rounded-lg card-gradient gold-border
                min-w-[85%] snap-center
                md:min-w-0
              "
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>

                <h3 className="font-heading text-2xl mb-4">{service.title}</h3>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="text-sm text-muted-foreground flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <Link to="/details#services">
            <Button variant="outline" size="lg" className="group">
              Explore Services in Detail
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
