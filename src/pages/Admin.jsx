import React, { useState } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { 
  LayoutDashboard, 
  User, 
  Briefcase, 
  FolderRoot, 
  Settings, 
  Save, 
  ExternalLink,
  GraduationCap,
  Sparkles
} from "lucide-react";
import { Link } from 'react-router-dom';

// Sub-components
import Dashboard from '../components/admin/Dashboard';
import HeroEditor from '../components/admin/HeroEditor';
import AboutEditor from '../components/admin/AboutEditor';
import ExperienceEditor from '../components/admin/ExperienceEditor';
import ProjectsEditor from '../components/admin/ProjectsEditor';
import SettingsEditor from '../components/admin/SettingsEditor';

const Admin = () => {
  const { data, updateSection, resetData } = usePortfolio();
  const [localData, setLocalData] = useState(data);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [activeTab, setActiveTab] = useState("dashboard");

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === "jothi@2026") {
      setIsAuthenticated(true);
      toast.success("Welcome back, Admin!");
    } else {
      toast.error("Invalid password. Try 'smart@123'");
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background p-4">
        <Card className="w-full max-w-md border-primary/20 shadow-2xl">
          <CardHeader className="text-center space-y-1">
            <div className="mx-auto bg-primary/10 p-3 rounded-full w-fit mb-4">
              <Sparkles className="h-8 w-8 text-primary" />
            </div>
            <CardTitle className="text-2xl font-bold">Admin Access</CardTitle>
            <CardDescription>Enter your credentials to manage your portfolio.</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input 
                  id="password" 
                  type="password" 
                  placeholder="••••••••" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-muted/50"
                />
              </div>
              <Button type="submit" className="w-full h-11 text-lg glow-hover">
                Unlock Dashboard
              </Button>
              <p className="text-center text-xs text-muted-foreground pt-2">
                Hint: Use <code className="bg-muted px-1 rounded">00000</code> for this demo.
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  const handleSave = (section) => {
    updateSection(section, localData[section]);
    toast.success(`${section.charAt(0).toUpperCase() + section.slice(1)} updated successfully!`);
  };

  const handleGlobalSave = () => {
    Object.keys(localData).forEach(section => {
      updateSection(section, localData[section]);
    });
    toast.success("All changes saved successfully!");
  };

  const handleReset = () => {
    if (window.confirm("Are you sure you want to reset all data to initial values?")) {
      resetData();
      window.location.reload();
    }
  };

  // Generic List Handlers
  const addItem = (section, field, template) => {
    setLocalData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: [...prev[section][field], template]
      }
    }));
  };

  const removeItem = (section, field, index) => {
    setLocalData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: prev[section][field].filter((_, i) => i !== index)
      }
    }));
  };

  const updateItem = (section, field, index, subfield, value) => {
    const newList = [...localData[section][field]];
    if (subfield) {
      newList[index] = { ...newList[index], [subfield]: value };
    } else {
      newList[index] = value;
    }
    setLocalData(prev => ({
      ...prev,
      [section]: { ...prev[section], [field]: newList }
    }));
  };

  const updateHero = (field, value) => {
    setLocalData(prev => ({
      ...prev,
      hero: { ...prev.hero, [field]: value }
    }));
  };

  const updateAbout = (field, value) => {
    setLocalData(prev => ({
      ...prev,
      about: { ...prev.about, [field]: value }
    }));
  };

  const addProject = () => {
    const newProject = {
      title: "New Project",
      description: "",
      tech: [],
      icon: "Code",
      link: "",
      features: []
    };
    setLocalData(prev => ({
      ...prev,
      projects: [...prev.projects, newProject]
    }));
  };

  const updateProject = (index, field, value) => {
    const newProjects = [...localData.projects];
    newProjects[index] = { ...newProjects[index], [field]: value };
    setLocalData(prev => ({ ...prev, projects: newProjects }));
  };

  const removeProject = (index) => {
    const newProjects = localData.projects.filter((_, i) => i !== index);
    setLocalData(prev => ({ ...prev, projects: newProjects }));
  };

  return (
    <div className="min-h-screen bg-background text-foreground pb-20">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-primary p-1.5 rounded-lg">
              <Sparkles className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold tracking-tight">Admin Panel</span>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/">
              <Button variant="ghost" size="sm">
                <ExternalLink className="mr-2 h-4 w-4" />
                View Site
              </Button>
            </Link>
            <Button onClick={handleGlobalSave} size="sm" className="glow-hover">
              <Save className="mr-2 h-4 w-4" />
              Save All Changes
            </Button>
          </div>
        </div>
      </header>

      <div className="container pt-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="flex flex-col md:flex-row gap-8">
          <TabsList className="flex flex-row md:flex-col h-auto bg-transparent border-b md:border-b-0 md:border-r rounded-none p-0 items-start justify-start gap-1 min-w-[200px]">
            <TabsTrigger value="dashboard" className="w-full justify-start py-3 px-4 data-[state=active]:bg-primary/10 data-[state=active]:text-primary">
              <LayoutDashboard className="mr-2 h-4 w-4" />
              Dashboard
            </TabsTrigger>
            <TabsTrigger value="hero" className="w-full justify-start py-3 px-4 data-[state=active]:bg-primary/10 data-[state=active]:text-primary">
              <User className="mr-2 h-4 w-4" />
              Hero Section
            </TabsTrigger>
            <TabsTrigger value="about" className="w-full justify-start py-3 px-4 data-[state=active]:bg-primary/10 data-[state=active]:text-primary">
              <GraduationCap className="mr-2 h-4 w-4" />
              About Me
            </TabsTrigger>
            <TabsTrigger value="experience" className="w-full justify-start py-3 px-4 data-[state=active]:bg-primary/10 data-[state=active]:text-primary">
              <Briefcase className="mr-2 h-4 w-4" />
              Experience
            </TabsTrigger>
            <TabsTrigger value="projects" className="w-full justify-start py-3 px-4 data-[state=active]:bg-primary/10 data-[state=active]:text-primary">
              <FolderRoot className="mr-2 h-4 w-4" />
              Projects
            </TabsTrigger>
            <TabsTrigger value="settings" className="w-full justify-start py-3 px-4 data-[state=active]:bg-primary/10 data-[state=active]:text-primary mt-auto">
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </TabsTrigger>
          </TabsList>

          <div className="flex-grow">
            <TabsContent value="dashboard" className="m-0">
              <Dashboard localData={localData} onTabChange={setActiveTab} />
            </TabsContent>

            <TabsContent value="hero" className="m-0">
              <HeroEditor 
                hero={localData.hero} 
                updateHero={updateHero} 
                onSave={() => handleSave('hero')} 
              />
            </TabsContent>

            <TabsContent value="about" className="m-0">
              <AboutEditor 
                about={localData.about}
                updateAbout={updateAbout}
                updateItem={updateItem}
                addItem={addItem}
                removeItem={removeItem}
                onSave={() => handleSave('about')}
              />
            </TabsContent>

            <TabsContent value="experience" className="m-0">
              <ExperienceEditor 
                experience={localData.experience}
                setLocalData={setLocalData}
                updateItem={updateItem}
                addItem={addItem}
                removeItem={removeItem}
                onSave={() => handleSave('experience')}
              />
            </TabsContent>

            <TabsContent value="projects" className="m-0">
              <ProjectsEditor 
                projects={localData.projects}
                addProject={addProject}
                updateProject={updateProject}
                removeProject={removeProject}
                onSave={() => handleSave('projects')}
              />
            </TabsContent>

            <TabsContent value="settings" className="m-0">
              <SettingsEditor 
                footer={localData.footer}
                setLocalData={setLocalData}
                handleReset={handleReset}
                onSave={() => handleSave('footer')}
              />
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default Admin;
