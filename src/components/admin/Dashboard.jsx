import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LayoutDashboard, FolderRoot, Sparkles } from "lucide-react";

const Dashboard = ({ localData, onTabChange }) => {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="bg-primary/5 border-primary/20">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Projects</CardTitle>
            <FolderRoot className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{localData.projects.length}</div>
          </CardContent>
        </Card>
        <Card className="bg-accent/5 border-accent/20">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Skills</CardTitle>
            <Sparkles className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{localData.about.skills.length}</div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Welcome to your Portfolio CMS</CardTitle>
          <CardDescription>
            Easily manage all your website content from this dashboard. Changes are saved locally and will be reflected immediately on your live site.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="p-4 rounded-lg bg-muted/50 border italic text-sm">
            "This admin panel allows you to edit your profile, education, experience, and projects without touching the code."
          </div>
          <div className="flex gap-4">
            <Button onClick={() => onTabChange("hero")} variant="outline">Edit Profile</Button>
            <Button onClick={() => onTabChange("projects")}>Add New Project</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
