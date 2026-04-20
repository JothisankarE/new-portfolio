import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, TrendingUp, Package, BarChart3 } from "lucide-react";

const Experience = () => {
  const responsibilities = [
  {
    title: "Daily Operations Management",
    description: "Generated daily labels for customer orders, ensuring timely processing and accurate delivery.",
    icon: <Package className="h-5 w-5" />
  },
  {
    title: "Data Analysis & Optimization",
    description: "Analyzed daily order volumes and calculated data to optimize order flow and increase day-to-day sales.",
    icon: <BarChart3 className="h-5 w-5" />
  },
  {
    title: "Inventory Management",
    description: "Managed inventory, updating stock levels, and ensuring availability for customer orders.",
    icon: <TrendingUp className="h-5 w-5" />
  }];


  return (
    <section className="py-20 section-bg">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 fade-in-up">
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
                  <h3>Business Administrator</h3>
                  <p className="text-lg text-muted-foreground font-normal">E-Commerce Sector</p>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="mb-6">
                <Badge variant="outline" className="bg-accent/10 text-accent border-accent/30">
                  Current Position
                </Badge>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                {responsibilities.map((item, index) =>
                <div key={index} className="space-y-3 p-4 rounded-lg bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/10">
                    <div className="flex items-center gap-2 text-primary">
                      {item.icon}
                      <h4 className="font-semibold">{item.title}</h4>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                )}
              </div>

              <div className="mt-8 p-6 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-lg border border-primary/20">
                <h4 className="font-semibold text-lg mb-3 text-primary">Key Achievements</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <span>Streamlined order processing workflows, improving efficiency by managing daily operations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <span>Enhanced inventory management systems leading to better stock availability</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <span>Contributed to sales growth through data-driven order flow optimization</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>);

};

export default Experience;