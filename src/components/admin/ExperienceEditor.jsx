import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Plus, Trash2 } from "lucide-react";

const ExperienceEditor = ({ experience, setLocalData, updateItem, addItem, removeItem, onSave }) => {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Work Experience Overview</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Main Title</Label>
              <Input 
                value={experience.title} 
                onChange={(e) => setLocalData(prev => ({ ...prev, experience: { ...prev.experience, title: e.target.value }}))}
              />
            </div>
            <div className="space-y-2">
              <Label>Sector / Duration</Label>
              <Input 
                value={experience.sector} 
                onChange={(e) => setLocalData(prev => ({ ...prev, experience: { ...prev.experience, sector: e.target.value }}))}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Responsibilities</CardTitle>
          </div>
          <Button onClick={() => addItem('experience', 'responsibilities', { title: "", description: "", icon: "Package" })} size="sm" variant="outline">
            <Plus className="mr-2 h-4 w-4" /> Add
          </Button>
        </CardHeader>
        <CardContent className="space-y-4">
          {experience.responsibilities.map((item, index) => (
            <div key={index} className="p-4 border rounded-lg space-y-4 relative group">
              <Button 
                variant="ghost" 
                size="icon" 
                className="absolute top-2 right-2 text-destructive opacity-0 group-hover:opacity-100 transition-opacity"
                onClick={() => removeItem('experience', 'responsibilities', index)}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="space-y-2">
                  <Label>Title</Label>
                  <Input 
                    value={item.title} 
                    onChange={(e) => updateItem('experience', 'responsibilities', index, 'title', e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Icon (Package, BarChart3, TrendingUp)</Label>
                  <Input 
                    value={item.icon} 
                    onChange={(e) => updateItem('experience', 'responsibilities', index, 'icon', e.target.value)}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label>Description</Label>
                <Textarea 
                  value={item.description} 
                  onChange={(e) => updateItem('experience', 'responsibilities', index, 'description', e.target.value)}
                />
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Key Achievements</CardTitle>
          <CardDescription>One per line.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Textarea 
            rows={6}
            value={experience.keyAchievements.join('\n')} 
            onChange={(e) => setLocalData(prev => ({ ...prev, experience: { ...prev.experience, keyAchievements: e.target.value.split('\n') }}))}
          />
          <Button onClick={onSave} className="w-full">Save Experience Changes</Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default ExperienceEditor;
