import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, BookOpen, ArrowUpRight, Calendar, Download } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Badge } from "@/components/ui/badge";

const publications = [
  {
    id: 1,
    title: "Clostridioides difficile infection in children with haematological malignancies",
    journal: "Anaerobe",
    year: 2024,
    type: "journal",
    doi: "10.1016/j.example",
    citations: 3,
    abstract: "A comprehensive study of C. difficile infections in paediatric patients...",
    status: "Published"
  },
  {
    id: 2,
    title: "High prevalence of Clostridium difficile in soil, mulch and lawn samples",
    journal: "Anaerobe",
    year: 2019,
    type: "journal",
    doi: "10.1016/j.anaerobe.2019.06.018",
    citations: 8,
    abstract: "Analysis of C. difficile prevalence in environmental samples...",
    status: "Published"
  },
  // Add more publications...
];

export default function Publications() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState("all");
  const [selectedYear, setSelectedYear] = useState<number | null>(null);

  const years = [...new Set(publications.map(pub => pub.year))].sort((a, b) => b - a);
  const types = ["all", "journal", "conference", "poster"];

  const filteredPublications = publications.filter(pub => {
    const matchesSearch = pub.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         pub.journal.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = selectedType === "all" || pub.type === selectedType;
    const matchesYear = !selectedYear || pub.year === selectedYear;
    return matchesSearch && matchesType && matchesYear;
  });

  return (
    <main className="min-h-screen pt-20">
      {/* Header with Citation Metrics */}
      <section className="py-20 bg-gradient-to-b from-background to-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <BookOpen className="w-12 h-12 mx-auto mb-6" />
            <h1 className="text-4xl font-bold mb-6">Publications</h1>
            <div className="flex justify-center gap-8 mt-8">
              <div className="text-center">
                <p className="text-3xl font-bold">{publications.length}</p>
                <p className="text-muted-foreground">Publications</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold">
                  {publications.reduce((acc, pub) => acc + pub.citations, 0)}
                </p>
                <p className="text-muted-foreground">Citations</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8">
            <div className="flex gap-2 flex-wrap">
              <div className="flex gap-2">
                {types.map((type) => (
                  <Button
                    key={type}
                    variant={selectedType === type ? "default" : "outline"}
                    onClick={() => setSelectedType(type)}
                    className="capitalize"
                  >
                    {type}
                  </Button>
                ))}
              </div>
              <select
                className="px-3 py-2 border rounded-md bg-background"
                onChange={(e) => setSelectedYear(e.target.value ? parseInt(e.target.value) : null)}
              >
                <option value="">All Years</option>
                {years.map((year) => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
            </div>
            <div className="relative w-full md:w-64">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search publications..."
                className="pl-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Publications List */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div layout className="space-y-6">
            <AnimatePresence>
              {filteredPublications.map((pub) => (
                <motion.div
                  key={pub.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-xl mb-2">
                            {pub.title}
                          </CardTitle>
                          <CardDescription>
                            <div className="flex items-center gap-2">
                              <Calendar className="w-4 h-4" />
                              {pub.year}
                              <span>•</span>
                              {pub.journal}
                              <Badge variant="secondary">{pub.status}</Badge>
                            </div>
                          </CardDescription>
                        </div>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Button variant="ghost" size="icon" asChild>
                                <a href={`https://doi.org/${pub.doi}`} target="_blank">
                                  <ArrowUpRight className="w-4 h-4" />
                                </a>
                              </Button>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>View Publication</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">{pub.abstract}</p>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <Badge variant="outline">{pub.citations} citations</Badge>
                        </div>
                        <Button variant="outline" size="sm">
                          <Download className="w-4 h-4 mr-2" />
                          PDF
                        </Button>
                      </div>
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