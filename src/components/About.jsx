import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GraduationCap, Award, Code, Palette, Trophy, Flame, Code2, ExternalLink } from "lucide-react";
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

          {/* LeetCode Activity */}
          <div className="md:col-span-2 lg:col-span-3">
            <Card className="card-hover bg-card/50 backdrop-blur-sm border-primary/20 overflow-hidden relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 rounded-full -mr-16 -mt-16 blur-3xl"></div>
              <CardHeader className="flex flex-row items-center justify-between border-b border-primary/5 pb-4">
                <CardTitle className="flex items-center gap-3 text-primary text-2xl font-bold">
                  <div className="p-2 bg-orange-500/10 rounded-lg">
                    <Code2 className="h-6 w-6 text-orange-500" />
                  </div>
                  LeetCode Profile
                </CardTitle>
                <a 
                  href={data.leetcode?.profileUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-all"
                >
                  View Profile 
                  <ExternalLink className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </CardHeader>
              <CardContent className="pt-8">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-center">
                  <div className="lg:col-span-1 text-center lg:text-left border-b lg:border-b-0 lg:border-r border-primary/5 pb-8 lg:pb-0 lg:pr-8">
                    <span className="text-sm text-muted-foreground font-semibold uppercase tracking-widest">Total Solved</span>
                    <p className="text-5xl sm:text-6xl font-black text-primary mt-2">{data.leetcode?.solved || 0}</p>
                    <p className="text-xs text-muted-foreground mt-2 font-medium">Problems across all levels</p>
                  </div>

                  <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-6">
                    <div className="space-y-3 p-4 rounded-2xl bg-primary/5 border border-primary/10 hover:border-green-500/30 transition-colors">
                      <div className="flex justify-between items-center">
                        <span className="text-green-500 font-bold tracking-tighter text-sm uppercase">Easy</span>
                        <span className="text-lg font-bold">{data.leetcode?.easy || 0}</span>
                      </div>
                      <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.4)]" 
                          style={{ width: `${((data.leetcode?.easy || 0) / (data.leetcode?.solved || 1)) * 100}%` }}
                        ></div>
                      </div>
                    </div>

                    <div className="space-y-3 p-4 rounded-2xl bg-primary/5 border border-primary/10 hover:border-yellow-500/30 transition-colors">
                      <div className="flex justify-between items-center">
                        <span className="text-yellow-500 font-bold tracking-tighter text-sm uppercase">Medium</span>
                        <span className="text-lg font-bold">{data.leetcode?.medium || 0}</span>
                      </div>
                      <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-yellow-500 shadow-[0_0_8px_rgba(234,179,8,0.4)]" 
                          style={{ width: `${((data.leetcode?.medium || 0) / (data.leetcode?.solved || 1)) * 100}%` }}
                        ></div>
                      </div>
                    </div>

                    <div className="space-y-3 p-4 rounded-2xl bg-primary/5 border border-primary/10 hover:border-red-500/30 transition-colors">
                      <div className="flex justify-between items-center">
                        <span className="text-red-500 font-bold tracking-tighter text-sm uppercase">Hard</span>
                        <span className="text-lg font-bold">{data.leetcode?.hard || 0}</span>
                      </div>
                      <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.4)]" 
                          style={{ width: `${((data.leetcode?.hard || 0) / (data.leetcode?.solved || 1)) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

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
