import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Plus, Trash2 } from "lucide-react";

const AboutEditor = ({ about, updateAbout, updateItem, addItem, removeItem, onSave }) => {
  return (
    <div className="space-y-6">
      {/* Education */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Education</CardTitle>
            <CardDescription>Manage your academic background.</CardDescription>
          </div>
          <Button onClick={() => addItem('about', 'education', { degree: "", institution: "", score: "" })} size="sm" variant="outline">
            <Plus className="mr-2 h-4 w-4" /> Add
          </Button>
        </CardHeader>
        <CardContent className="space-y-6">
          {about.education.map((edu, index) => (
            <div key={index} className="p-4 border rounded-lg space-y-4 relative group">
              <Button 
                variant="ghost" 
                size="icon" 
                className="absolute top-2 right-2 text-destructive opacity-0 group-hover:opacity-100 transition-opacity"
                onClick={() => removeItem('about', 'education', index)}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="space-y-2">
                  <Label>Degree</Label>
                  <Input 
                    value={edu.degree} 
                    onChange={(e) => updateItem('about', 'education', index, 'degree', e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Institution</Label>
                  <Input 
                    value={edu.institution} 
                    onChange={(e) => updateItem('about', 'education', index, 'institution', e.target.value)}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label>Score / Year</Label>
                <Input 
                  value={edu.score} 
                  onChange={(e) => updateItem('about', 'education', index, 'score', e.target.value)}
                />
              </div>
            </div>
          ))}
          <Button onClick={onSave} className="w-full">Save About Changes</Button>
        </CardContent>
      </Card>

      {/* Skills */}
      <Card>
        <CardHeader>
          <CardTitle>Skills & Interests</CardTitle>
          <CardDescription>Comma-separated values.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label>Technical Skills</Label>
            <Input 
              value={about.skills.join(', ')} 
              onChange={(e) => updateAbout('skills', e.target.value.split(',').map(s => s.trim()))}
            />
          </div>
          <div className="space-y-2">
            <Label>Areas of Interest</Label>
            <Input 
              value={about.interests.join(', ')} 
              onChange={(e) => updateAbout('interests', e.target.value.split(',').map(s => s.trim()))}
            />
          </div>
          <Button onClick={onSave} className="w-full">Save Skills Changes</Button>
        </CardContent>
      </Card>

      {/* Achievements */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Achievements & Certifications</CardTitle>
            <CardDescription>Manage your milestones.</CardDescription>
          </div>
          <Button onClick={() => addItem('about', 'achievements', { title: "", description: "", link: "" })} size="sm" variant="outline">
            <Plus className="mr-2 h-4 w-4" /> Add
          </Button>
        </CardHeader>
        <CardContent className="space-y-6">
          {about.achievements.map((ach, index) => (
            <div key={index} className="p-4 border rounded-lg space-y-4 relative group">
              <Button 
                variant="ghost" 
                size="icon" 
                className="absolute top-2 right-2 text-destructive opacity-0 group-hover:opacity-100 transition-opacity"
                onClick={() => removeItem('about', 'achievements', index)}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
              <div className="space-y-2 pt-2">
                <Label>Title</Label>
                <Input 
                  value={ach.title} 
                  onChange={(e) => updateItem('about', 'achievements', index, 'title', e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label>Description</Label>
                <Textarea 
                  value={ach.description} 
                  onChange={(e) => updateItem('about', 'achievements', index, 'description', e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label>Link (Optional)</Label>
                <Input 
                  value={ach.link || ""} 
                  onChange={(e) => updateItem('about', 'achievements', index, 'link', e.target.value)}
                />
              </div>
            </div>
          ))}
          <Button onClick={onSave} className="w-full">Save Achievements Changes</Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default AboutEditor;
