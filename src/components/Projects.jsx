import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Code, ShoppingCart, Database, Brain } from "lucide-react";
const Projects = () => {
  const projects = [
    {
      title: "Full-Stack Food Ordering Platform",
      description: "A comprehensive, high-performance food ordering system featuring a user-friendly frontend and a robust backend. Designed with a focus on seamless user experience, performance optimization, and secure transaction handling.",
      tech: ["MERN Stack", "MongoDB", "Express.js", "React", "Node.js", "JavaScript"],
      icon: <Database className="h-6 w-6" />,
      link: "https://github.com/JothisankarE/Food-order-PLATFORM",
      features: [
        "Dynamic Shopping Cart with real-time performance optimization",
        "Secure Payment Gateway integration for safe transactions",
        "Real-time Order Tracking & Status updates",
        "User-friendly UI/UX with responsive design across all devices"
      ]
    },
    {
      title: "Alzheimer’s Disease Detection Research",
      description: "Research project focusing on a comparative study of deep learning architectures to detect Alzheimer’s disease. Evaluated various models using medical imaging and clinical data to support early diagnosis.",
      tech: ["Deep Learning", "Python", "TensorFlow", "Medical Imaging", "Neural Networks"],
      icon: <Brain className="h-6 w-6" />,
      link: "https://colab.research.google.com/drive/18tlAMX7k2VJQJ93CM2xARCh95iuNkZ9I?usp=chrome_ntp#scrollTo=CvP2Uj8A-yxE",
      features: [
        "Comparative analysis of Deep Learning architectures",
        "Integration of medical imaging and clinical data",
        "Performance evaluation for accurate diagnosis",
        "Research into efficient architectures for early detection"
      ]
    },
    {
      title: "E-Commerce for Textile Hub",
      description: "A full-stack textile business digitizer allowing customers to browse, cart, and order online. Features real-time inventory, admin dashboard, and secure multi-method payment processing.",
      tech: ["React.js", "Node.js", "MongoDB", "Stripe", "JWT", "Vercel"],
      icon: <ShoppingCart className="h-6 w-6" />,
      link: "https://github.com/JothisankarE/MAT-Textile-Hub",
      demo: "https://mat-textile-hub.vercel.app/",
      features: [
        "Real-time inventory & order management",
        "Secure Stripe & UPI payment integration",
        "Admin dashboard for business analytics",
        "Advanced authentication (JWT & Google Auth)"
      ]
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 fade-in-up">
          My Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card key={index} className="card-hover bg-card/50 backdrop-blur-sm border-primary/20 overflow-hidden group flex flex-col h-full">
              <CardHeader className="bg-gradient-to-r from-primary/10 to-accent/10">
                <CardTitle className="flex items-center gap-3 text-xl">
                  <div className="p-2 bg-primary/20 rounded-lg text-primary">
                    {project.icon}
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
          ))}
        </div>
      </div>
    </section>
  );

};

export default Projects;