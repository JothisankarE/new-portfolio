import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { GraduationCap, Award, Code, Palette } from "lucide-react";

const About = () => {
  const skills = ["HTML", "CSS", "Java", "Figma"];
  const interests = ["UI/UX Design (Figma)", "Web Development", "E-Commerce Solutions"];

  return (
    <section id="about" className="py-20 section-bg">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 fade-in-up">
          About Me
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Education */}
          <Card className="card-hover bg-card/50 backdrop-blur-sm border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-primary">
                <GraduationCap className="h-5 w-5" />
                Education
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                <div>
                <h3 className="font-semibold">MCA (Master of Computer Application)</h3>
                <p className="text-sm text-muted-foreground">Kongu Engineering College, Erode</p>
                <p className="text-sm text-accent">7.26-CGPA - 2025</p>
              </div>
              <div>
                <h3 className="font-semibold">Bachelor of Science in Computer Systems And Design</h3>
                <p className="text-sm text-muted-foreground">Kongu Engineering College, Erode</p>
                <p className="text-sm text-accent">72% - 2023</p>
              </div>
              <div>
                <h3 className="font-semibold">HSC - Bharathi Matriculation Higher Secondary School</h3>
                <p className="text-sm text-muted-foreground">Vijayamangalam, Erode</p>
                <p className="text-sm text-accent">68.83% - 2020</p>
              </div>
              <div>
                <h3 className="font-semibold">SSLC - Bharathi Matriculation Higher Secondary School</h3>
                <p className="text-sm text-muted-foreground">Vijayamangalam, Erode</p>
                <p className="text-sm text-accent">66.8% - 2018</p>
              </div>
            </CardContent>
          </Card>
{/* Skills */}
          <Card className="card-hover bg-card/50 backdrop-blur-sm border-primary/20">
  <CardHeader>
    <CardTitle className="flex items-center gap-2 text-primary">
      <Code className="h-5 w-5" />
      Technical Skills
    </CardTitle>
  </CardHeader>
  <CardContent>
    <ul className="space-y-3">
      {skills.map((skill, index) =>
                <li
                  key={index}
                  className="flex items-center gap-3 p-3 rounded-lg border border-primary/20 bg-primary/5 hover:bg-primary/10 transition-colors shadow-sm">
                  
          <div className="w-2.5 h-2.5 bg-green-500 rounded-full"></div>
          <span className="font-medium">{skill}</span>
        </li>
                )}
    </ul>
  </CardContent>
</Card>
          {/* Areas of Interest */}
          <Card className="card-hover bg-card/50 backdrop-blur-sm border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-primary">
                <Palette className="h-5 w-5" />
                Areas of Interest
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {interests.map((interest, index) =>
                <li key={index} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span>{interest}</span>
                  </li>
                )}
              </ul>
            </CardContent>
          </Card>

          {/* Achievements */}
          <Card className="card-hover bg-card/50 backdrop-blur-sm border-primary/20 md:col-span-2 lg:col-span-3">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-primary">
                <Award className="h-5 w-5" />
                Achievements
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-4 rounded-lg border border-primary/20">
                <h3 className="font-semibold text-lg">Infosys Springboard - Certification in Design Patterns in Software</h3>
                <p className="text-muted-foreground">Completed advanced certification program focusing on software design patterns and best practices.</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>);

};

export default About;