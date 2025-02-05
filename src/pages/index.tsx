import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="flex-1 flex flex-col justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl sm:text-6xl font-bold mb-6">
            Sicilia Perumalsamy
          </h1>
          <h2 className="text-2xl sm:text-3xl text-muted-foreground mb-8">
            Technology Integration Consultant | PhD Researcher{" "}
            <span className="text-primary">bridging tech and healthcare</span>
          </h2>
          <p className="text-lg mb-8 max-w-2xl">
            Specializing in system integration and database solutions at KPMG while completing
            research in infectious diseases epidemiology. Former biotech researcher and 
            university educator passionate about innovative solutions.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild>
              <Link href="/projects">
                View My Work <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Featured Section */}
      <section className="bg-muted/50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-12">Featured Work</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Database Integration</CardTitle>
                  <CardDescription>KPMG Australia</CardDescription>
                </CardHeader>
                <CardContent>
                  Leading system integration between SAPOL and NCIS using Oracle Middleware,
                  optimizing database communication and enhancing law enforcement capabilities.
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Biotech Innovation</CardTitle>
                  <CardDescription>Liquim® Ltd</CardDescription>
                </CardHeader>
                <CardContent>
                  Developed plant-based nasal and oral barrier solutions against respiratory
                  viruses, combining research expertise with practical applications.
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Latest Publications */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-12">Latest Publications</h2>
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>
                    Clostridioides difficile infection in children with haematological
                    malignancies
                  </CardTitle>
                  <CardDescription>Anaerobe Journal, 2024</CardDescription>
                </CardHeader>
              </Card>
              <Button variant="outline" asChild className="w-full">
                <Link href="/publications">View All Publications</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-muted/50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold mb-8">Let's Connect</h2>
            <div className="flex justify-center gap-6">
              <Button variant="ghost" size="icon" asChild>
                <a href="https://github.com/SiciliaCodes" target="_blank">
                  <Github className="h-6 w-6" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://www.linkedin.com/in/sicilia-perumalsamy-b71949138/" target="_blank">
                  <Linkedin className="h-6 w-6" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="mailto:sicilia.perumalsamy@research.uwa.edu.au">
                  <Mail className="h-6 w-6" />
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}