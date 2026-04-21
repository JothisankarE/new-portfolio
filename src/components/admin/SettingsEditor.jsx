import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RotateCcw, History as HistoryIcon, Layout, Palette, Code2, Quote } from "lucide-react";
import { usePortfolio } from '../../context/PortfolioContext';

const SettingsEditor = ({ localData, setLocalData, handleReset, onSave }) => {
  const { history, restoreVersion } = usePortfolio();
  const [showAdvanced, setShowAdvanced] = useState(false);

  return (
    <div className="space-y-6">
      {/* UI Settings */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Palette className="h-5 w-5 text-primary" />
            UI Style & Theme
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label>Visual Style</Label>
            <div className="grid grid-cols-2 gap-2">
              <Button 
                variant={localData.uiSettings?.theme === 'gradient' ? 'default' : 'outline'}
                onClick={() => setLocalData(prev => ({ ...prev, uiSettings: { ...prev.uiSettings, theme: 'gradient' }}))}
                className="w-full"
              >
                Gradient Look
              </Button>
              <Button 
                variant={localData.uiSettings?.theme === 'solid' ? 'default' : 'outline'}
                onClick={() => setLocalData(prev => ({ ...prev, uiSettings: { ...prev.uiSettings, theme: 'solid' }}))}
                className="w-full"
              >
                Solid Look
              </Button>
            </div>
          </div>
          <div className="space-y-2">
            <Label>Primary Brand Color</Label>
            <div className="flex gap-2">
              <Input 
                type="color" 
                className="w-12 h-10 p-1" 
                value={localData.uiSettings?.primaryColor || '#0ea5e9'}
                onChange={(e) => setLocalData(prev => ({ ...prev, uiSettings: { ...prev.uiSettings, primaryColor: e.target.value }}))}
              />
              <Input 
                value={localData.uiSettings?.primaryColor || '#0ea5e9'}
                onChange={(e) => setLocalData(prev => ({ ...prev, uiSettings: { ...prev.uiSettings, primaryColor: e.target.value }}))}
              />
            </div>
          </div>
          <Button onClick={() => onSave('uiSettings')} className="w-full">Apply UI Theme</Button>
        </CardContent>
      </Card>

      {/* LeetCode Settings */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Code2 className="h-5 w-5 text-orange-500" />
            LeetCode Profile
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label>Profile URL</Label>
            <Input 
              placeholder="https://leetcode.com/u/username/"
              value={localData.leetcode?.profileUrl || ""}
              onChange={(e) => setLocalData(prev => ({ ...prev, leetcode: { ...prev.leetcode, profileUrl: e.target.value }}))}
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Username</Label>
              <Input 
                value={localData.leetcode?.username || ""}
                onChange={(e) => setLocalData(prev => ({ ...prev, leetcode: { ...prev.leetcode, username: e.target.value }}))}
              />
            </div>
            <div className="space-y-2">
              <Label>Total Solved</Label>
              <Input 
                type="number"
                value={localData.leetcode?.solved || 0}
                onChange={(e) => setLocalData(prev => ({ ...prev, leetcode: { ...prev.leetcode, solved: parseInt(e.target.value) || 0 }}))}
              />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label className="text-green-500">Easy</Label>
              <Input 
                type="number"
                value={localData.leetcode?.easy || 0}
                onChange={(e) => setLocalData(prev => ({ ...prev, leetcode: { ...prev.leetcode, easy: parseInt(e.target.value) || 0 }}))}
              />
            </div>
            <div className="space-y-2">
              <Label className="text-yellow-500">Medium</Label>
              <Input 
                type="number"
                value={localData.leetcode?.medium || 0}
                onChange={(e) => setLocalData(prev => ({ ...prev, leetcode: { ...prev.leetcode, medium: parseInt(e.target.value) || 0 }}))}
              />
            </div>
            <div className="space-y-2">
              <Label className="text-red-500">Hard</Label>
              <Input 
                type="number"
                value={localData.leetcode?.hard || 0}
                onChange={(e) => setLocalData(prev => ({ ...prev, leetcode: { ...prev.leetcode, hard: parseInt(e.target.value) || 0 }}))}
              />
            </div>
          </div>
          <Button onClick={() => onSave('leetcode')} className="w-full">Sync LeetCode Data</Button>
        </CardContent>
      </Card>

      {/* History management */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <HistoryIcon className="h-5 w-5 text-primary" />
            Previous Changes History
          </CardTitle>
          <CardDescription>Retrieve and restore previous versions of your portfolio.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {history.length === 0 ? (
            <p className="text-sm text-muted-foreground italic">No history available yet.</p>
          ) : (
            <div className="space-y-2">
              {history.map((version, i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded-lg border bg-muted/20">
                  <div>
                    <p className="text-sm font-medium">Modified: {version.section}</p>
                    <p className="text-xs text-muted-foreground">{new Date(version.timestamp).toLocaleString()}</p>
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => {
                      if(window.confirm("Restore this version? Unsaved current changes will be lost.")) {
                        restoreVersion(version.data);
                        window.location.reload();
                      }
                    }}
                  >
                    Restore
                  </Button>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Quote className="h-5 w-5 text-primary" />
            Future Inspiration Quote
          </CardTitle>
          <CardDescription>This quote will be displayed at the top of your admin dashboard.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
           <div className="space-y-2">
            <Label>Inspiration Quote</Label>
            <Textarea 
              placeholder="Enter a thought that inspires you..."
              value={localData.motivation || ""} 
              onChange={(e) => setLocalData(prev => ({ ...prev, motivation: e.target.value }))}
              className="min-h-[100px]"
            />
          </div>
          <Button onClick={() => onSave('motivation')} className="w-full">Save Inspiration</Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Footer Settings</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
           <div className="space-y-2">
            <Label>Copyright Text</Label>
            <Input 
              value={localData.footer?.copyright || ""} 
              onChange={(e) => setLocalData(prev => ({ ...prev, footer: { ...prev.footer, copyright: e.target.value }}))}
            />
          </div>
          <Button onClick={() => onSave('footer')} className="w-full">Save Footer Changes</Button>
        </CardContent>
      </Card>

      <div className="pt-4 border-t border-primary/5 flex justify-center">
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={() => setShowAdvanced(!showAdvanced)}
          className="text-muted-foreground hover:text-primary"
        >
          {showAdvanced ? "Hide Advanced Settings" : "Show Advanced Settings"}
        </Button>
      </div>

      {showAdvanced && (
        <Card className="border-destructive/20 bg-destructive/5 animate-in fade-in slide-in-from-top-4 duration-300">
          <CardHeader>
            <CardTitle className="text-destructive flex items-center gap-2">
              <RotateCcw className="h-5 w-5" />
              Danger Zone
            </CardTitle>
            <CardDescription>Careful with these actions. Resetting will erase all your custom data.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between p-4 border border-destructive/20 rounded-lg bg-background/50">
              <div>
                <p className="font-semibold">Reset to Defaults</p>
                <p className="text-sm text-muted-foreground">Discard all changes and restore original portfolio data.</p>
              </div>
              <Button variant="destructive" onClick={handleReset}>
                <RotateCcw className="mr-2 h-4 w-4" />
                Reset Now
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default SettingsEditor;
