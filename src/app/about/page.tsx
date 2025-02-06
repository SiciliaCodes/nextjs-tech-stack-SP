import { motion } from "framer-motion";
import { Beaker, BookOpen, Database, Microscope } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function About() {
  const experiences = [
    {
      icon: <Database className="w-6 h-6" />,
      title: "Technology Integration",
      organization: "KPMG Australia",
      period: "2024 - Present",
      description: "Leading database integration solutions using Oracle Middleware"
    },
    {
      icon: <Beaker className="w-6 h-6" />,
      title: "Research Assistant",
      organization: "Liquim® Ltd",
      period: "2021 - 2022",
      description: "Developed plant-based viral barrier solutions"
    },
    {
      icon: <Microscope className="w-6 h-6" />,
      title: "Laboratory Assistant",
      organization: "PathWest & Western Diagnostic",
      period: "2017 - 2021",
      description: "Processed clinical and environmental samples"
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "University Educator",
      organization: "Multiple Universities",
      period: "2017 - 2024",
      description: "Taught biomedical sciences across four universities"
    }
  ];

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeInUp}
            className="text-center"
          >
            <h1 className="text-4xl font-bold mb-6">About Me</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A multidisciplinary professional bridging the worlds of technology,
              healthcare, and education with a passion for innovative solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Experience Tabs */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="experience" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-12">
              <TabsTrigger value="experience">Experience</TabsTrigger>
              <TabsTrigger value="education">Education</TabsTrigger>
              <TabsTrigger value="skills">Skills</TabsTrigger>
            </TabsList>

            <TabsContent value="experience">
              <motion.div
                variants={staggerChildren}
                initial="initial"
                animate="animate"
                className="grid md:grid-cols-2 gap-6"
              >
                {experiences.map((exp, index) => (
                  <motion.div key={index} variants={fadeInUp}>
                    <Card>
                      <CardHeader>
                        <div className="flex items-center gap-4">
                          {exp.icon}
                          <div>
                            <CardTitle>{exp.title}</CardTitle>
                            <CardDescription>{exp.organization}</CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground mb-2">
                          {exp.period}
                        </p>
                        <p>{exp.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>

            <TabsContent value="education">
              <motion.div
                variants={fadeInUp}
                initial="initial"
                animate="animate"
              >
                <Card>
                  <CardHeader>
                    <CardTitle>PhD in Paediatric Infectious Diseases</CardTitle>
                    <CardDescription>
                      University of Western Australia (2019-2024)
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>Research focus on Clostridioides difficile infections in paediatric oncology</p>
                  </CardContent>
                </Card>
                {/* Add more education cards */}
              </motion.div>
            </TabsContent>

            <TabsContent value="skills">
              <div className="grid md:grid-cols-3 gap-6">
                {/* Technical Skills */}
                <motion.div variants={fadeInUp} initial="initial" animate="animate">
                  <Card>
                    <CardHeader>
                      <CardTitle>Technical Skills</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc list-inside space-y-2">
                        <li>Oracle Middleware</li>
                        <li>Database Integration</li>
                        <li>R, Python, SQL</li>
                        <li>Data Analysis</li>
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
                {/* Research Skills */}
                <motion.div variants={fadeInUp} initial="initial" animate="animate">
                  <Card>
                    <CardHeader>
                      <CardTitle>Research Skills</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc list-inside space-y-2">
                        <li>Study Design</li>
                        <li>Data Collection</li>
                        <li>Statistical Analysis</li>
                        <li>Scientific Writing</li>
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
                {/* Soft Skills */}
                <motion.div variants={fadeInUp} initial="initial" animate="animate">
                  <Card>
                    <CardHeader>
                      <CardTitle>Soft Skills</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc list-inside space-y-2">
                        <li>Project Management</li>
                        <li>Team Leadership</li>
                        <li>Communication</li>
                        <li>Problem Solving</li>
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </main>
  );
}