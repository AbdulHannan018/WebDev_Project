
import { Palette, Sun, Moon } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface AppearanceSettingsProps {
  settings: {
    theme: string;
    fontSize: string;
  };
  onThemeChange: (theme: string) => void;
  onFontSizeChange: (fontSize: string) => void;
}

const AppearanceSettings = ({ settings, onThemeChange, onFontSizeChange }: AppearanceSettingsProps) => {
  return (
    <Card className="glass-effect border-white/30">
      <CardHeader>
        <div className="flex items-center">
          <Palette className="h-5 w-5 text-[hsl(var(--accent-coral))] mr-2" />
          <h2 className="text-xl font-semibold text-[hsl(var(--sage-text))]">Appearance</h2>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h3 className="font-medium text-[hsl(var(--sage-text))] mb-3">Theme</h3>
          <div className="flex space-x-4">
            <button
              onClick={() => onThemeChange('light')}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg border-2 transition-all ${
                settings.theme === 'light'
                  ? 'border-[hsl(var(--accent-coral))] bg-[hsl(var(--accent-coral))]/10'
                  : 'border-white/30 bg-white/20'
              }`}
            >
              <Sun className="h-4 w-4" />
              <span className="text-[hsl(var(--sage-text))]">Light</span>
            </button>
            <button
              onClick={() => onThemeChange('dark')}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg border-2 transition-all ${
                settings.theme === 'dark'
                  ? 'border-[hsl(var(--accent-coral))] bg-[hsl(var(--accent-coral))]/10'
                  : 'border-white/30 bg-white/20'
              }`}
            >
              <Moon className="h-4 w-4" />
              <span className="text-[hsl(var(--sage-text))]">Dark</span>
            </button>
          </div>
        </div>

        <div>
          <h3 className="font-medium text-[hsl(var(--sage-text))] mb-3">Font Size</h3>
          <select
            value={settings.fontSize}
            onChange={(e) => onFontSizeChange(e.target.value)}
            className="px-3 py-2 rounded-md bg-white/80 border border-white/30 text-[hsl(var(--sage-text))]"
          >
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
        </div>
      </CardContent>
    </Card>
  );
};

export default AppearanceSettings;
