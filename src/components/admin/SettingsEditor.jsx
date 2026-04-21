import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RotateCcw } from "lucide-react";

const SettingsEditor = ({ footer, setLocalData, handleReset, onSave }) => {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Footer Settings</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
           <div className="space-y-2">
            <Label>Copyright Text</Label>
            <Input 
              value={footer.copyright} 
              onChange={(e) => setLocalData(prev => ({ ...prev, footer: { ...prev.footer, copyright: e.target.value }}))}
            />
          </div>
          <Button onClick={onSave} className="w-full">Save Footer Changes</Button>
        </CardContent>
      </Card>

      <Card className="border-destructive/20 bg-destructive/5">
        <CardHeader>
          <CardTitle className="text-destructive">Danger Zone</CardTitle>
          <CardDescription>Careful with these actions.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between p-4 border border-destructive/20 rounded-lg">
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
    </div>
  );
};

export default SettingsEditor;
