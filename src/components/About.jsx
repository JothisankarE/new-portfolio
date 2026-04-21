import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GraduationCap, Award, Code, Palette } from "lucide-react";
import { usePortfolio } from "../context/PortfolioContext";

const About = () => {
  const { data } = usePortfolio();
  const { about } = data;

  return (
    <section id="about" className="section-padding section-bg">
      <div className="container-responsive">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 sm:mb-20 fade-in-up">
          About Me
        </h2>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Education */}
          <Card className="card-hover bg-card/50 backdrop-blur-sm border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-primary">
                <GraduationCap className="h-5 w-5" />
                Education
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {about.education.map((edu, index) => (
                <div key={index}>
                  <h3 className="font-semibold">{edu.degree}</h3>
                  <p className="text-sm text-muted-foreground">{edu.institution}</p>
                  <p className="text-sm text-accent">{edu.score}</p>
                </div>
              ))}
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
                {about.skills.map((skill, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 p-3 rounded-lg border border-primary/20 bg-primary/5 hover:bg-primary/10 transition-colors shadow-sm">
                    <div className="w-2.5 h-2.5 bg-green-500 rounded-full"></div>
                    <span className="font-medium">{skill}</span>
                  </li>
                ))}
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
                {about.interests.map((interest, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span>{interest}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Achievements */}
          <Card className="card-hover bg-card/50 backdrop-blur-sm border-primary/20 md:col-span-2 lg:col-span-3">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-primary">
                <Award className="h-5 w-5" />
                Achievements & Certifications
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                {about.achievements.map((achievement, index) => (
                  <div key={index} className="bg-gradient-to-r from-primary/5 to-accent/5 p-5 rounded-xl border border-primary/10 h-full flex flex-col hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                    <h3 className="font-semibold text-lg text-primary">{achievement.title}</h3>
                    <p className="text-sm text-muted-foreground mt-3 flex-grow leading-relaxed">{achievement.description}</p>
                    {achievement.link && (
                      <div className="mt-5">
                        <a 
                          href={achievement.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          <Button size="sm" variant="outline" className="glow-hover w-full sm:w-auto text-xs py-2 h-9 rounded-lg border-primary/20 hover:bg-primary/10">
                            View Certificate Badge
                          </Button>
                        </a>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
