import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Project {
  id: number;
  title: string;
  location: string;
  type: string;
  frontImage: string;
  interiorImages: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "The Glass Pavilion",
    location: "Lahore, Pakistan",
    type: "Residential",
    frontImage:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2000&auto=format&fit=crop",
    interiorImages: [
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600573472591-ee6981cf35b6?q=80&w=800&auto=format&fit=crop",
    ],
  },
  {
    id: 2,
    title: "Urban Heights Tower",
    location: "Islamabad, Pakistan",
    type: "Commercial",
    frontImage:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2000&auto=format&fit=crop",
    interiorImages: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?q=80&w=800&auto=format&fit=crop",
    ],
  },
  {
    id: 3,
    title: "Serenity Villa",
    location: "Karachi, Pakistan",
    type: "Residential",
    frontImage:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2000&auto=format&fit=crop",
    interiorImages: [
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1616137466211-f939a420be84?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1617806118233-18e1de247200?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1615529328331-f8917597711f?q=80&w=800&auto=format&fit=crop",
    ],
  },
  {
    id: 4,
    title: "The Modern Courtyard",
    location: "Faisalabad, Pakistan",
    type: "Residential",
    frontImage:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop",
    interiorImages: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=800&auto=format&fit=crop",
    ],
  },
  {
    id: 5,
    title: "Horizon Business Center",
    location: "Lahore, Pakistan",
    type: "Commercial",
    frontImage:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop",
    interiorImages: [
      "https://images.unsplash.com/photo-1497215842964-222b430dc094?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519974719765-e6559eac2575?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1564069114553-7215e1ff1890?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1497366412874-3415097a27e7?q=80&w=800&auto=format&fit=crop",
    ],
  },
  {
    id: 6,
    title: "Minimalist Retreat",
    location: "Murree, Pakistan",
    type: "Residential",
    frontImage:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2000&auto=format&fit=crop",
    interiorImages: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1560448075-cbc16bb4af8e?q=80&w=800&auto=format&fit=crop",
    ],
  },
];

const Projects = () => {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const [selectedInteriorIndex, setSelectedInteriorIndex] = useState<
    number | null
  >(null);
  const [isPaused, setIsPaused] = useState(false);
  const [interiorScrollPosition, setInteriorScrollPosition] = useState(0);
  const thumbnailContainerRef = useRef<HTMLDivElement>(null);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);
  const interiorAnimationRef = useRef<number | null>(null);

  const activeProject = projects[activeProjectIndex];

  const goToNextProject = useCallback(() => {
    setActiveProjectIndex((prev) => (prev + 1) % projects.length);
    setSelectedInteriorIndex(null);
    setInteriorScrollPosition(0);
  }, []);

  const goToPrevProject = useCallback(() => {
    setActiveProjectIndex(
      (prev) => (prev - 1 + projects.length) % projects.length
    );
    setSelectedInteriorIndex(null);
    setInteriorScrollPosition(0);
  }, []);

  // Auto-advance main image every 10 seconds
  useEffect(() => {
    if (isPaused) {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
        autoPlayRef.current = null;
      }
      return;
    }

    autoPlayRef.current = setInterval(() => {
      goToNextProject();
    }, 10000);

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isPaused, goToNextProject]);

  // Interior thumbnails infinite scroll animation
  useEffect(() => {
    if (isPaused || !thumbnailContainerRef.current) {
      if (interiorAnimationRef.current) {
        cancelAnimationFrame(interiorAnimationRef.current);
      }
      return;
    }

    const thumbnailWidth = 160 + 16; // width + gap
    const totalWidth = activeProject.interiorImages.length * thumbnailWidth;
    let position = interiorScrollPosition;

    const animate = () => {
      position += 0.5; // Speed of scroll
      if (position >= totalWidth) {
        position = 0;
      }
      setInteriorScrollPosition(position);
      interiorAnimationRef.current = requestAnimationFrame(animate);
    };

    interiorAnimationRef.current = requestAnimationFrame(animate);

    return () => {
      if (interiorAnimationRef.current) {
        cancelAnimationFrame(interiorAnimationRef.current);
      }
    };
  }, [isPaused, activeProject.interiorImages.length, activeProjectIndex]);

  const handleInteriorClick = (index: number) => {
    setSelectedInteriorIndex(index);
    setIsPaused(true);
  };

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
    setSelectedInteriorIndex(null);
  };

  const displayedImage =
    selectedInteriorIndex !== null
      ? activeProject.interiorImages[selectedInteriorIndex]
      : activeProject.frontImage;

  // Duplicate images for seamless infinite scroll
  const duplicatedInteriors = [
    ...activeProject.interiorImages,
    ...activeProject.interiorImages,
    ...activeProject.interiorImages,
  ];

  return (
    <section id="projects" className="section-padding bg-background">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4">
            Portfolio
          </p>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-medium mb-6">
            Featured Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A selection of our finest work showcasing the breadth of our
            architectural vision and commitment to excellence.
          </p>
        </motion.div>

        {/* Main Display Container */}
        <div
          className="relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Large Box - Front House Display */}
          <div className="relative aspect-[16/9] rounded-lg overflow-hidden mb-6">
            <AnimatePresence mode="wait">
              <motion.img
                key={`${activeProjectIndex}-${selectedInteriorIndex}`}
                src={displayedImage}
                alt={activeProject.title}
                className="w-full h-full object-cover"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              />
            </AnimatePresence>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />

            {/* Project Info */}
            <motion.div
              className="absolute bottom-0 left-0 right-0 p-6 md:p-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <span className="inline-block px-3 py-1 text-xs uppercase tracking-wider text-primary bg-primary/10 backdrop-blur-sm rounded-full mb-3 border border-primary/20">
                {activeProject.type}
              </span>
              <h3 className="font-heading text-2xl md:text-3xl lg:text-4xl text-foreground mb-2">
                {activeProject.title}
              </h3>
              <p className="text-muted-foreground">{activeProject.location}</p>
            </motion.div>

            {/* Navigation Arrows */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToPrevProject();
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-background/20 backdrop-blur-sm border border-border/30 flex items-center justify-center text-foreground hover:bg-background/40 transition-all duration-300 hover:scale-110"
              aria-label="Previous project"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToNextProject();
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-background/20 backdrop-blur-sm border border-border/30 flex items-center justify-center text-foreground hover:bg-background/40 transition-all duration-300 hover:scale-110"
              aria-label="Next project"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Progress Indicator */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-border/20">
              <motion.div
                className="h-full bg-primary"
                initial={{ width: "0%" }}
                animate={{
                  width: isPaused
                    ? `${((activeProjectIndex + 1) / projects.length) * 100}%`
                    : "100%",
                }}
                transition={{
                  duration: isPaused ? 0 : 10,
                  ease: "linear",
                  repeat: isPaused ? 0 : Infinity,
                  repeatType: "loop",
                }}
                key={`progress-${activeProjectIndex}-${isPaused}`}
              />
            </div>
          </div>

          {/* Small Boxes - Interior Thumbnails */}
          <div className="relative overflow-hidden rounded-lg">
            <div
              ref={thumbnailContainerRef}
              className="flex gap-4 py-2"
              style={{
                transform: `translateX(-${interiorScrollPosition}px)`,
                transition: isPaused ? "transform 0.3s ease-out" : "none",
              }}
            >
              {duplicatedInteriors.map((image, index) => {
                const actualIndex = index % activeProject.interiorImages.length;
                const isSelected = selectedInteriorIndex === actualIndex;

                return (
                  <motion.button
                    key={`${activeProjectIndex}-${index}`}
                    onClick={() => handleInteriorClick(actualIndex)}
                    className={`relative flex-shrink-0 w-40 h-24 rounded-lg overflow-hidden transition-all duration-300 ${
                      isSelected
                        ? "ring-2 ring-primary scale-105"
                        : "ring-1 ring-border/30 hover:ring-primary/50"
                    }`}
                    whileHover={{ scale: 1.05, y: -4 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <img
                      src={image}
                      alt={`${activeProject.title} interior ${actualIndex + 1}`}
                      className="w-full h-full object-cover"
                    />
                    <div
                      className={`absolute inset-0 transition-opacity duration-300 ${
                        isSelected
                          ? "bg-primary/20"
                          : "bg-background/0 hover:bg-background/20"
                      }`}
                    />
                  </motion.button>
                );
              })}
            </div>

            {/* Fade edges for infinite scroll effect */}
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-background to-transparent pointer-events-none z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-background to-transparent pointer-events-none z-10" />
          </div>

          {/* Project Counter */}
          <div className="flex justify-center gap-2 mt-6">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setActiveProjectIndex(index);
                  setSelectedInteriorIndex(null);
                  setInteriorScrollPosition(0);
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === activeProjectIndex
                    ? "bg-primary w-8"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
