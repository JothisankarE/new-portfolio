import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, TrendingUp, Package, BarChart3 } from "lucide-react";
import { usePortfolio } from "../context/PortfolioContext";

const IconMap = {
  Package: Package,
  BarChart3: BarChart3,
  TrendingUp: TrendingUp,
};

const Experience = () => {
  const { data } = usePortfolio();
  const { experience } = data;

  return (
    <section className="section-padding section-bg">
      <div className="container-responsive">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 sm:mb-20 fade-in-up">
          Work Experience
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <Card className="card-hover bg-card/50 backdrop-blur-sm border-primary/20">
            <CardHeader className="bg-gradient-to-r from-primary/10 to-accent/10">
              <CardTitle className="flex items-center gap-3 text-2xl">
                <div className="p-3 bg-primary/20 rounded-lg text-primary">
                  <Briefcase className="h-6 w-6" />
                </div>
                <div>
                  <h3>{experience.title}</h3>
                  <p className="text-lg text-muted-foreground font-normal">{experience.sector}</p>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 sm:p-8">
              <div className="mb-6">
                <Badge variant="outline" className="bg-accent/10 text-accent border-accent/30">
                  Current Position
                </Badge>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                {experience.responsibilities.map((item, index) => {
                  const Icon = IconMap[item.icon] || Briefcase;
                  return (
                    <div key={index} className="space-y-3 p-5 rounded-xl bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-md group">
                      <div className="flex items-center gap-3 text-primary group-hover:scale-105 transition-transform">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <Icon className="h-5 w-5" />
                        </div>
                        <h4 className="font-semibold">{item.title}</h4>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  );
                })}
              </div>

              <div className="mt-8 p-6 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-lg border border-primary/20">
                <h4 className="font-semibold text-lg mb-3 text-primary">Key Achievements</h4>
                <ul className="space-y-2">
                  {experience.keyAchievements.map((achievement, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;
