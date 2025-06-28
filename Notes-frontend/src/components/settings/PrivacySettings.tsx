
import { Shield } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import ToggleSwitch from "./ToggleSwitch";

interface PrivacySettingsProps {
  settings: {
    profileVisible: boolean;
    shareAnalytics: boolean;
  };
  onToggle: (setting: string) => void;
}

const PrivacySettings = ({ settings, onToggle }: PrivacySettingsProps) => {
  return (
    <Card className="glass-effect border-white/30">
      <CardHeader>
        <div className="flex items-center">
          <Shield className="h-5 w-5 text-[hsl(var(--accent-teal))] mr-2" />
          <h2 className="text-xl font-semibold text-[hsl(var(--sage-text))]">Privacy & Security</h2>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-medium text-[hsl(var(--sage-text))]">Public Profile</h3>
            <p className="text-sm text-[hsl(var(--sage-light))]">Make your profile visible to other users</p>
          </div>
          <ToggleSwitch
            checked={settings.profileVisible}
            onChange={() => onToggle('profileVisible')}
          />
        </div>

        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-medium text-[hsl(var(--sage-text))]">Share Analytics</h3>
            <p className="text-sm text-[hsl(var(--sage-light))]">Help improve our service with usage data</p>
          </div>
          <ToggleSwitch
            checked={settings.shareAnalytics}
            onChange={() => onToggle('shareAnalytics')}
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default PrivacySettings;
