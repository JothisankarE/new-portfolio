import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Code, ShoppingCart, Database, Brain } from "lucide-react";
import { usePortfolio } from "../context/PortfolioContext";

const IconMap = {
  Database: Database,
  Brain: Brain,
  ShoppingCart: ShoppingCart,
  Code: Code,
};

const Projects = () => {
  const { data } = usePortfolio();
  const { projects } = data;

  return (
    <section id="projects" className="section-padding">
      <div className="container-responsive">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 sm:mb-20 fade-in-up">
          Featured Projects
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => {
            const Icon = IconMap[project.icon] || Code;
            return (
              <Card key={index} className="card-hover bg-card/50 backdrop-blur-sm border-primary/20 overflow-hidden group flex flex-col h-full">
                <CardHeader className="bg-gradient-to-r from-primary/10 to-accent/10">
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <div className="p-2 bg-primary/20 rounded-lg text-primary">
                      <Icon className="h-6 w-6" />
                    </div>
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-4 flex-grow flex flex-col">
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {project.description}
                  </p>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-primary">Key Features:</h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-xs">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-primary">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, idx) => (
                        <Badge
                          key={idx}
                          variant="outline"
                          className="bg-primary/10 text-primary border-primary/30 text-[10px]">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3 pt-4 mt-auto">
                    {project.link && (
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <Button size="sm" className="glow-hover text-xs">
                          {project.link.includes('github.com') ? (
                            <Github className="mr-2 h-3.5 w-3.5" />
                          ) : (
                            <ExternalLink className="mr-2 h-3.5 w-3.5" />
                          )}
                          Source Code
                        </Button>
                      </a>
                    )}
                    {project.demo && (
                      <a 
                        href={project.demo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <Button variant="outline" size="sm" className="glow-hover text-xs">
                          <ExternalLink className="mr-2 h-3.5 w-3.5" />
                          Live Demo
                        </Button>
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;