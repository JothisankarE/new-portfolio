import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Code, ShoppingCart, Database } from "lucide-react";
const Projects = () => {
  const projects = [
  {
    title: "Food Ordering Platform",
    description: "Designed and implemented a user-friendly web application using MongoDB, Express.js, React, and Node.js. Integrated secure payment gateways and real-time order tracking features for a seamless customer experience.",
    tech: ["MongoDB", "Express.js", "React", "Node.js"],
    icon: <Database className="h-6 w-6" />,
    features: [
    "User-friendly web application design",
    "Secure payment gateway integration",
    "Real-time order tracking",
    "Seamless customer experience"]

  },
  {
    title: "Food Ordering Cart",
    description: "Developed a fully functional shopping cart using HTML for structure, CSS for styling, and JavaScript for dynamic functionality. Optimized the cart's performance, reducing load times and improving the overall speed and user experience.",
    tech: ["HTML", "CSS", "JavaScript"],
    icon: <ShoppingCart className="h-6 w-6" />,
    features: [
    "Fully functional shopping cart",
    "Dynamic JavaScript functionality",
    "Performance optimization",
    "Improved load times and user experience"]

  }];


  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 fade-in-up">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) =>
          <Card key={index} className="card-hover bg-card/50 backdrop-blur-sm border-primary/20 overflow-hidden group">
              <CardHeader className="bg-gradient-to-r from-primary/10 to-accent/10">
                <CardTitle className="flex items-center gap-3 text-xl">
                  <div className="p-2 bg-primary/20 rounded-lg text-primary">
                    {project.icon}
                  </div>
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                <div className="space-y-3">
                  <h4 className="font-semibold text-primary">Key Features:</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, idx) =>
                  <li key={idx} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm">{feature}</span>
                      </li>
                  )}
                  </ul>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-primary">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, idx) =>
                  <Badge
                    key={idx}
                    variant="outline"
                    className="bg-primary/10 text-primary border-primary/30">
                    
                        {tech}
                      </Badge>
                  )}
                  </div>
                </div>

                <div className="flex gap-3 pt-4">
                  <Button size="sm" className="glow-hover">
                    <Github className="mr-2 h-4 w-4" />
                    Source Code
                  </Button>
                  <Button variant="outline" size="sm" className="glow-hover">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="glow-hover">
            <Code className="mr-2 h-4 w-4" />
            View All Projects
          </Button>
        </div>
      </div>
    </section>);

};

export default Projects;