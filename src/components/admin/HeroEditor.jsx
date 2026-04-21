import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const HeroEditor = ({ hero, updateHero, onSave }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Hero Section</CardTitle>
        <CardDescription>Main identity and introduction.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label>Full Name</Label>
            <Input 
              value={hero.name} 
              onChange={(e) => updateHero('name', e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label>Professional Role</Label>
            <Input 
              value={hero.role} 
              onChange={(e) => updateHero('role', e.target.value)}
            />
          </div>
        </div>
        <div className="space-y-2">
          <Label>Tagline / Intro</Label>
          <Textarea 
            rows={4}
            value={hero.tagline} 
            onChange={(e) => updateHero('tagline', e.target.value)}
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label>Email</Label>
            <Input 
              value={hero.email} 
              onChange={(e) => updateHero('email', e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label>Phone</Label>
            <Input 
              value={hero.phone} 
              onChange={(e) => updateHero('phone', e.target.value)}
            />
          </div>
        </div>
        <div className="space-y-2">
          <Label>Resume Link</Label>
          <Input 
            value={hero.resumeLink} 
            onChange={(e) => updateHero('resumeLink', e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <Label>Profile Image Path</Label>
          <Input 
            value={hero.profileImage} 
            onChange={(e) => updateHero('profileImage', e.target.value)}
          />
          <p className="text-[10px] text-muted-foreground">Path relative to public folder (e.g., /profile.jpg)</p>
        </div>
        <Button onClick={onSave} className="w-full">Save Hero Changes</Button>
      </CardContent>
    </Card>
  );
};

export default HeroEditor;
