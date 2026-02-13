import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Palette,
  TreePine,
  Building2,
  Hammer,
  Users,
  ClipboardCheck,
  Award,
  Shield,
  Lightbulb,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ShieldCheck } from "lucide-react";
import img from "../assets/img.png";

const DetailedPage = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.replace("#", ""));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      Back Button
      <div className="pt-24 pb-8 container-narrow">
        <Link to="/">
          <Button variant="ghost" className="group">
            <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Button>
        </Link>
      </div>
      <div className="pt-28">
        {/* Architect Section */}

        <section id="architect" className="pb-24 container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            <div className="relative">
              <div className="aspect-[3/4] rounded-lg overflow-hidden">
                <img
                  src="https://drive.google.com/file/d/1cfjtkR9NSABh-CIxWA55pksoCCttzwdD/view?usp=drive_link"
                  alt="Architecture"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 border border-primary/30 rounded-lg -z-10" />
            </div>

            <div>
              <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4">
                Principal Architect
              </p>
              <h1 className="font-heading text-4xl md:text-5xl font-medium mb-6">
                Ahmad Hassan
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                With over two decades of experience in architectural design and
                construction, Ahmad Hassan has established himself as a
                visionary leader in Pakistan's architectural landscape. His
                philosophy centers on creating spaces that harmonize with their
                environment while pushing the boundaries of modern design.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                After graduating from NCA Lahore and completing his masters at
                the Architectural Association in London, Ahmad returned to
                Pakistan with a mission to redefine contemporary Pakistani
                architecture. His work seamlessly blends traditional
                craftsmanship with cutting-edge design principles.
              </p>
              <blockquote className="border-l-2 border-primary pl-6 my-8">
                <p className="text-lg italic text-foreground/90">
                  "Architecture is the thoughtful making of space. It is not
                  about buildings; it is about creating moments where concrete,
                  light, and shadow work in perfect harmony."
                </p>
                <footer className="mt-2 text-sm text-muted-foreground">
                  — Ahmad Hassan
                </footer>
              </blockquote>
              <div className="flex flex-wrap gap-4">
                <div className="px-4 py-2 bg-secondary/50 rounded-lg">
                  <p className="text-sm text-muted-foreground">Education</p>
                  <p className="font-medium">AA London, NCA Lahore</p>
                </div>
                <div className="px-4 py-2 bg-secondary/50 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    Specialization
                  </p>
                  <p className="font-medium">Modern Residential</p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Services Section */}
        <section id="services" className="section-padding bg-charcoal">
          <div className="container-narrow">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4">
                Our Expertise
              </p>
              <h2 className="font-heading text-4xl md:text-5xl font-medium mb-6">
                Detailed Services
              </h2>
            </motion.div>

            {/* Interior Design */}
            <div className="mb-20">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 mb-8"
              >
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Palette className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-heading text-3xl">Interior Design</h3>
              </motion.div>
              <div className="grid lg:grid-cols-2 gap-12">
                <div>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                    Our interior design services transform spaces into
                    functional, beautiful environments that reflect your
                    personality and lifestyle. From concept development to final
                    execution, we handle every aspect of the design process.
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Concept Development & Space Planning",
                      "Material & Texture Selection",
                      "Custom Furniture Design",
                      "Lighting Design & Integration",
                      "Color Scheme Development",
                      "Online Consultation Available",
                    ].map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-3 text-muted-foreground"
                      >
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="aspect-video rounded-lg overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop"
                    alt="Interior Design"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Landscape Design */}
            <div className="mb-20">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 mb-8"
              >
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center">
                  <TreePine className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-heading text-3xl">Landscape Design</h3>
              </motion.div>
              <div className="grid lg:grid-cols-2 gap-12">
                <div className="order-2 lg:order-1 aspect-video rounded-lg overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2000&auto=format&fit=crop"
                    alt="Landscape Design"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="order-1 lg:order-2">
                  <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                    We create outdoor spaces that extend your living environment
                    while respecting the natural landscape. Our designs
                    integrate sustainable practices with aesthetic excellence.
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Garden & Courtyard Design",
                      "Terrace & Rooftop Planning",
                      "Hardscape & Softscape Integration",
                      "Sustainable & Climate-Responsive Solutions",
                      "Water Feature Design",
                      "Outdoor Lighting Design",
                    ].map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-3 text-muted-foreground"
                      >
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Architectural Design */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 mb-8"
              >
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Building2 className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-heading text-3xl">Architectural Design</h3>
              </motion.div>
              <div className="grid lg:grid-cols-2 gap-12">
                <div>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                    Complete architectural solutions from initial concept to
                    construction documentation. We work closely with clients
                    throughout the design process to ensure their vision is
                    realized.
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Conceptual Design & Feasibility Studies",
                      "Detailed Floor Plans & Elevations",
                      "3D Visualization & Walkthrough",
                      "Construction Documentation",
                      "Building Permit Assistance",
                      "Client Collaboration Throughout",
                    ].map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-3 text-muted-foreground"
                      >
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="aspect-video rounded-lg overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=2000&auto=format&fit=crop"
                    alt="Architectural Design"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="section-padding">
          <div className="container-narrow">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4">
                Case Studies
              </p>
              <h2 className="font-heading text-4xl md:text-5xl font-medium mb-6">
                Project Details
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Each project represents a unique collaboration between our team
                and clients, resulting in spaces that exceed expectations.
              </p>
            </motion.div>

            {/* Project Case Studies */}
            {[
              {
                title: "The Glass Pavilion",
                location: "Lahore, Pakistan",
                type: "Residential",
                area: "12,000 sq ft",
                year: "2023",
                description:
                  "A stunning modern residence featuring floor-to-ceiling glass walls that blur the boundary between interior and exterior spaces. The design maximizes natural light while maintaining privacy through strategic landscaping.",
                image:
                  "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2000&auto=format&fit=crop",
              },
              {
                title: "Urban Heights Tower",
                location: "Islamabad, Pakistan",
                type: "Commercial",
                area: "85,000 sq ft",
                year: "2022",
                description:
                  "A 12-story commercial complex that redefines office architecture in the capital. The building features a double-skin facade for energy efficiency and a central atrium that brings natural light to all floors.",
                image:
                  "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2000&auto=format&fit=crop",
              },
            ].map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`grid lg:grid-cols-2 gap-12 mb-20 ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <span className="inline-block px-3 py-1 text-xs uppercase tracking-wider text-primary bg-primary/10 rounded-full mb-4">
                    {project.type}
                  </span>
                  <h3 className="font-heading text-3xl mb-4">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                    {project.description}
                  </p>
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Location</p>
                      <p className="font-medium">{project.location}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Area</p>
                      <p className="font-medium">{project.area}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Year</p>
                      <p className="font-medium">{project.year}</p>
                    </div>
                  </div>
                </div>
                <div
                  className={`aspect-video rounded-lg overflow-hidden ${
                    index % 2 === 1 ? "lg:order-1" : ""
                  }`}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            ))}

            <div className="p-8 rounded-lg bg-secondary/30 border border-border text-center">
              <p className="text-lg mb-2">
                <span className="text-primary font-medium">
                  Interested in pricing?
                </span>
              </p>
              <p className="text-muted-foreground">
                Contact us to inquire about project-related costs or housing
                price ranges. We provide personalized estimates based on your
                specific requirements.
              </p>
            </div>
          </div>
        </section>

        {/* Construction Services – Card Style */}
        <section id="construction" className="section-padding bg-charcoal">
          <div className="container-narrow max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4">
                Construction
              </p>
              <h2 className="font-heading text-4xl md:text-5xl font-medium">
                Construction Services
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto justify-center">
              {[
                {
                  icon: Hammer,
                  title: "Grey Structure",
                  // description:
                  //   "Strong foundations built to last — from excavation to roofing, executed with precision and premium materials.",
                  // points: [
                  //   "Foundation & Excavation",
                  //   "RCC Frame & Columns",
                  //   "Brickwork & Masonry",
                  //   "Roof Slab & Parapet",
                  // ],
                },
                {
                  icon: ClipboardCheck,
                  title: "Project Management",
                  // description:
                  //   "Seamless coordination ensuring timelines, budgets, and quality stay perfectly aligned from start to finish.",
                  // points: [
                  //   "Site Inspections",
                  //   "Contractor Coordination",
                  //   "Timeline Control",
                  //   "Quality Assurance",
                  // ],
                },
                // {
                //   icon: Users,
                //   title: "Labor & Execution",
                //   description:
                //     "Experienced craftsmen delivering reliable execution across every construction and finishing phase.",
                //   points: [
                //     "Masonry & Civil Works",
                //     "Electrical & Plumbing",
                //     "Carpentry & Woodwork",
                //     "Finishing Works",
                //   ],
                // },
                // {
                //   icon: ShieldCheck,
                //   title: "Quality Control",
                //   description:
                //     "Every detail monitored. Every standard met. Construction guided by precision and accountability.",
                //   points: [
                //     "Material Verification",
                //     "On-Site Supervision",
                //     "Compliance Checks",
                //     "Final Inspections",
                //   ],
                // },
              ].map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="card-gradient gold-border rounded-xl p-8 flex flex-col"
                >
                  <div className="w-14 h-14 mb-6 rounded-lg bg-primary/10 flex items-center justify-center">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>

                  <h3 className="font-heading text-2xl mb-4">
                    {service.title}
                  </h3>

                  {/* <p className="text-muted-foreground text-base leading-relaxed mb-6">
                  {service.description}
                </p> */}

                  {/* <ul className="space-y-2 mt-auto">
                  {service.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-center gap-3 text-muted-foreground text-sm"
                    >
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul> */}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="section-padding">
          <div className="container-narrow">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4">
                Who We Are
              </p>
              <h2 className="font-heading text-4xl md:text-5xl font-medium mb-6">
                Company Profile
              </h2>
            </motion.div>

            <div className="prose prose-invert max-w-none mb-16">
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Established in 2008, our architectural firm has grown from a
                small design studio to a comprehensive architecture and
                construction company serving clients across Pakistan. With
                headquarters in Lahore and operations in Islamabad, Karachi, and
                other major cities, we have completed over 200 projects ranging
                from intimate residential spaces to large-scale commercial
                developments.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Our team of 25+ professionals includes architects, interior
                designers, project managers, and construction specialists who
                work collaboratively to deliver exceptional results. We believe
                in maintaining direct communication with our clients, ensuring
                that every project reflects their unique vision and
                requirements.
              </p>
            </div>

            {/* Values */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {[
                {
                  icon: Award,
                  title: "Quality",
                  description:
                    "We never compromise on quality. From materials selection to construction techniques, every decision is made with long-term durability and aesthetic excellence in mind.",
                },
                {
                  icon: Shield,
                  title: "Transparency",
                  description:
                    "Clear communication and honest pricing are the foundations of our client relationships. We provide detailed cost breakdowns and regular progress updates throughout every project.",
                },
                {
                  icon: Lightbulb,
                  title: "Innovation",
                  description:
                    "We continuously explore new design approaches, sustainable materials, and construction technologies to deliver forward-thinking solutions that stand the test of time.",
                },
              ].map((value) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="p-8 rounded-lg card-gradient gold-border"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-heading text-xl mb-4">{value.title}</h4>
                  <p className="text-muted-foreground">{value.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 p-8 rounded-lg bg-secondary/30 border border-border">
              {[
                { number: "15+", label: "Years Experience" },
                { number: "200+", label: "Projects Completed" },
                { number: "25+", label: "Team Members" },
                { number: "50+", label: "Awards & Recognition" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-heading text-4xl text-primary mb-2">
                    {stat.number}
                  </p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>{" "}
      {/* end pt-28 wrapper */}
      <Footer />
    </div>
  );
};

export default DetailedPage;
