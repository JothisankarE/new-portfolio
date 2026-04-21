import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Plus, Trash2, Save } from "lucide-react";

const ProjectsEditor = ({ projects, addProject, updateProject, removeProject, onSave }) => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium">Project List</h3>
        <Button onClick={addProject}>
          <Plus className="mr-2 h-4 w-4" /> Add Project
        </Button>
      </div>

      {projects.map((project, index) => (
        <Card key={index} className="relative overflow-hidden group">
          <div className="absolute top-4 right-4 flex gap-2">
            <Button 
              variant="destructive" 
              size="icon" 
              className="h-8 w-8"
              onClick={() => removeProject(index)}
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
          <CardHeader>
            <CardTitle className="text-xl">Project #{index + 1}: {project.title}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Title</Label>
                <Input 
                  value={project.title} 
                  onChange={(e) => updateProject(index, 'title', e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label>Icon (Lucide Name)</Label>
                <Input 
                  value={project.icon} 
                  onChange={(e) => updateProject(index, 'icon', e.target.value)}
                />
                <p className="text-[10px] text-muted-foreground">Database, Brain, ShoppingCart, Code</p>
              </div>
            </div>
            <div className="space-y-2">
              <Label>Description</Label>
              <Textarea 
                value={project.description} 
                onChange={(e) => updateProject(index, 'description', e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label>Technologies (Comma separated)</Label>
              <Input 
                value={project.tech.join(', ')} 
                onChange={(e) => updateProject(index, 'tech', e.target.value.split(',').map(s => s.trim()))}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>GitHub Link</Label>
                <Input 
                  value={project.link} 
                  onChange={(e) => updateProject(index, 'link', e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label>Demo Link</Label>
                <Input 
                  value={project.demo || ""} 
                  onChange={(e) => updateProject(index, 'demo', e.target.value)}
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label>Key Features (One per line)</Label>
              <Textarea 
                rows={4}
                value={project.features.join('\n')} 
                onChange={(e) => updateProject(index, 'features', e.target.value.split('\n'))}
              />
            </div>
          </CardContent>
        </Card>
      ))}
      
      <Button onClick={onSave} className="w-full h-12 text-lg glow-hover">
        <Save className="mr-2 h-5 w-5" /> Save All Project Changes
      </Button>
    </div>
  );
};

export default ProjectsEditor;
