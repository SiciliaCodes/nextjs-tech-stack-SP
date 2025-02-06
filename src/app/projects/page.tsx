import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Tag } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    id: 1,
    title: "SAPOL-NCIS Integration",
    category: "tech",
    tags: ["Oracle", "Database", "Integration"],
    description: "Database integration project between law enforcement systems",
    image: "/api/placeholder/600/400"
  },
  {
    id: 2,
    title: "Respiratory Virus Protection",
    category: "research",
    tags: ["Biotech", "Healthcare", "R&D"],
    description: "Development of plant-based barrier solutions",
    image: "/api/placeholder/600/400"
  },
  {
    id: 3,
    title: "Paediatric Infections Research",
    category: "research",
    tags: ["Healthcare", "Data Analysis", "Epidemiology"],
    description: "Study of C. difficile infections in paediatric patients",
    image: "/api/placeholder/600/400"
  },
  // Add more projects...
];

const categories = ["all", "tech", "research", "education"];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = projects.filter(project => {
    const matchesCategory = selectedCategory === "all" || project.category === selectedCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold mb-6">My Projects</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Exploring the intersection of technology, healthcare, and research
              through innovative projects and solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8">
            <div className="flex gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className="capitalize"
                >
                  {category}
                </Button>
              ))}
            </div>
            <div className="relative w-full md:w-64">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search projects..."
                className="pl-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="h-full flex flex-col">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <CardHeader>
                      <CardTitle>{project.title}</CardTitle>
                      <CardDescription>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {project.tags.map((tag) => (
                            <Badge key={tag} variant="secondary">
                              <Tag className="w-3 h-3 mr-1" />
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p>{project.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </main>
  );
}