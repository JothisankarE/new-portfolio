import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LayoutDashboard, FolderRoot, Sparkles, Activity, Trophy, Flame, Code2, ExternalLink, Quote } from "lucide-react";
import { usePortfolio } from '../../context/PortfolioContext';

const Dashboard = ({ localData, onTabChange }) => {
  const { activity } = usePortfolio();
  
  // Prepare activity data (last 7 days)
  const last7Days = [...Array(7)].map((_, i) => {
    const d = new Date();
    d.setDate(d.getDate() - i);
    const dateStr = d.toISOString().split('T')[0];
    return {
      date: dateStr,
      count: activity[dateStr] || 0,
      label: d.toLocaleDateString('en-US', { weekday: 'short' })
    };
  }).reverse();

  const maxActivity = Math.max(...last7Days.map(d => d.count), 5);

  return (
    <div className="space-y-6">
      {/* Motivation Header */}
      <div className="relative group overflow-hidden rounded-2xl p-px bg-gradient-to-r from-primary/50 via-primary/20 to-accent/50 shadow-xl shadow-primary/10">
        <div className="relative bg-slate-950/80 backdrop-blur-xl rounded-[15px] p-6 md:p-8 overflow-hidden">
          {/* Decorative Quote Icon */}
          <div className="absolute -top-4 -right-4 opacity-[0.08] group-hover:opacity-15 transition-opacity duration-500 transform group-hover:scale-110">
            <Quote className="h-32 w-32 text-primary" />
          </div>

          <div className="relative z-10 space-y-4">
            <div className="flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              <span className="text-[10px] uppercase tracking-[0.2em] text-primary font-black">Future Inspiration</span>
            </div>
            
            <blockquote className="text-2xl md:text-3xl font-medium tracking-tight text-white leading-snug max-w-4xl">
              <span className="text-primary/40 mr-1">"</span>
              {localData.motivation || "The only way to do great work is to love what you do."}
              <span className="text-primary/40 ml-1">"</span>
            </blockquote>

            <div className="flex items-center gap-3 pt-2">
              <div className="h-px w-8 bg-white/20" />
              <p className="text-sm text-white/50 font-light flex items-center gap-2">
                <Sparkles className="h-3.5 w-3.5 text-primary/60" />
                Keep moving forward towards your goals.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Top Stats */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card className="bg-gradient-to-br from-primary/10 via-background to-background border-primary/20 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:scale-110 transition-transform">
            <FolderRoot className="h-12 w-12 text-primary" />
          </div>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Projects</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{localData.projects.length}</div>
            <p className="text-[10px] text-muted-foreground mt-1">Total completed works</p>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-br from-accent/10 via-background to-background border-accent/20 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:scale-110 transition-transform">
            <Sparkles className="h-12 w-12 text-accent" />
          </div>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Skills</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{localData.about.skills.length}</div>
            <p className="text-[10px] text-muted-foreground mt-1">Specialized technologies</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-green-500/10 via-background to-background border-green-500/20 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:scale-110 transition-transform">
            <Activity className="h-12 w-12 text-green-500" />
          </div>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Daily Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">+{activity[new Date().toISOString().split('T')[0]] || 0}</div>
            <p className="text-[10px] text-muted-foreground mt-1">Updates tracked today</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Activity Chart */}
        <Card className="bg-gradient-to-b from-primary/5 via-background to-background border-primary/10">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5 text-primary" />
              Activity Points
            </CardTitle>
            <CardDescription>Update frequency over the last 7 days</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-end justify-between h-32 gap-2 pt-4">
              {last7Days.map((day, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-2 group">
                  <div className="relative w-full bg-muted/30 rounded-t-lg overflow-hidden flex items-end" style={{ height: '100px' }}>
                    <div 
                      className="w-full bg-gradient-to-t from-primary to-primary/40 group-hover:from-primary group-hover:to-accent transition-all duration-500 rounded-t-lg"
                      style={{ height: `${(day.count / maxActivity) * 100}%` }}
                    >
                      {day.count > 0 && (
                        <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                          {day.count}
                        </span>
                      )}
                    </div>
                  </div>
                  <span className="text-[10px] text-muted-foreground uppercase">{day.label}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* LeetCode Status */}
        <Card className="bg-gradient-to-br from-orange-500/5 via-background to-background border-orange-500/10">
          <CardHeader className="flex flex-row items-center justify-between">
            <div className="space-y-1">
              <CardTitle className="flex items-center gap-2">
                <Code2 className="h-5 w-5 text-orange-500" />
                LeetCode Stats
              </CardTitle>
              <CardDescription>Problems solved by difficulty</CardDescription>
            </div>
            <Button variant="ghost" size="icon" asChild>
              <a href={localData.leetcode?.profileUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4 text-muted-foreground" />
              </a>
            </Button>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between text-sm">
              <span>Total Problems Solved</span>
              <span className="font-bold text-orange-500">{localData.leetcode?.solved || 0}</span>
            </div>
            <div className="h-2 bg-muted/50 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-orange-500 to-yellow-500"
                style={{ width: `${((localData.leetcode?.solved || 0) / 1000) * 100}%` }}
              ></div>
            </div>

            {/* Difficulty Breakdown */}
            <div className="grid grid-cols-1 gap-4 pt-2">
              <div className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span className="text-green-500 font-bold">Easy</span>
                  <span className="text-muted-foreground">{localData.leetcode?.easy || 0}</span>
                </div>
                <div className="h-1.5 bg-muted/50 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-green-600 to-green-400" style={{ width: `${((localData.leetcode?.easy || 0) / (localData.leetcode?.solved || 1)) * 100}%` }}></div>
                </div>
              </div>
              <div className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span className="text-yellow-500 font-bold">Medium</span>
                  <span className="text-muted-foreground">{localData.leetcode?.medium || 0}</span>
                </div>
                <div className="h-1.5 bg-muted/50 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-yellow-600 to-yellow-400" style={{ width: `${((localData.leetcode?.medium || 0) / (localData.leetcode?.solved || 1)) * 100}%` }}></div>
                </div>
              </div>
              <div className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span className="text-red-500 font-bold">Hard</span>
                  <span className="text-muted-foreground">{localData.leetcode?.hard || 0}</span>
                </div>
                <div className="h-1.5 bg-muted/50 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-red-600 to-red-400" style={{ width: `${((localData.leetcode?.hard || 0) / (localData.leetcode?.solved || 1)) * 100}%` }}></div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Quick Management</CardTitle>
          <CardDescription>
            Use these shortcuts to jump to different sections of your portfolio.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-wrap gap-4">
            <Button onClick={() => onTabChange("hero")} variant="outline">Edit Profile</Button>
            <Button onClick={() => onTabChange("projects")} variant="outline">Manage Projects</Button>
            <Button onClick={() => onTabChange("experience")} variant="outline">Update Work</Button>
            <Button onClick={() => onTabChange("settings")} className="glow-hover">UI Settings</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
