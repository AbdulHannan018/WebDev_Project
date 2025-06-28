
import { useState } from "react";
import { Settings as SettingsIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import NotificationSettings from "@/components/settings/NotificationSettings";
import PrivacySettings from "@/components/settings/PrivacySettings";
import AppearanceSettings from "@/components/settings/AppearanceSettings";

const Settings = () => {
  const [settings, setSettings] = useState({
    notifications: {
      email: true,
      push: false,
      reminders: true
    },
    privacy: {
      profileVisible: true,
      shareAnalytics: false
    },
    appearance: {
      theme: "light",
      fontSize: "medium"
    }
  });

  const handleNotificationToggle = (setting: string) => {
    setSettings(prev => ({
      ...prev,
      notifications: {
        ...prev.notifications,
        [setting]: !(prev.notifications as any)[setting]
      }
    }));
  };

  const handlePrivacyToggle = (setting: string) => {
    setSettings(prev => ({
      ...prev,
      privacy: {
        ...prev.privacy,
        [setting]: !(prev.privacy as any)[setting]
      }
    }));
  };

  const handleThemeChange = (theme: string) => {
    setSettings(prev => ({
      ...prev,
      appearance: {
        ...prev.appearance,
        theme
      }
    }));
  };

  const handleFontSizeChange = (fontSize: string) => {
    setSettings(prev => ({
      ...prev,
      appearance: {
        ...prev.appearance,
        fontSize
      }
    }));
  };

  return (
    <div className="min-h-screen warm-gradient">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="glass-effect rounded-3xl p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <SettingsIcon className="h-8 w-8 text-[hsl(var(--accent-coral))] mr-3" />
              <h1 className="text-4xl font-bold text-[hsl(var(--sage-text))]">Settings</h1>
            </div>
            <p className="text-[hsl(var(--sage-light))] text-lg">
              Customize your experience and manage your preferences
            </p>
          </div>

          <div className="space-y-6">
            <NotificationSettings
              settings={settings.notifications}
              onToggle={handleNotificationToggle}
            />

            <PrivacySettings
              settings={settings.privacy}
              onToggle={handlePrivacyToggle}
            />

            <AppearanceSettings
              settings={settings.appearance}
              onThemeChange={handleThemeChange}
              onFontSizeChange={handleFontSizeChange}
            />

            {/* Action Buttons */}
            <div className="flex space-x-4 pt-6">
              <Button className="bg-[hsl(var(--accent-coral))] hover:bg-[hsl(var(--accent-coral))]/90 text-white">
                Save Changes
              </Button>
              <Button variant="outline" className="border-[hsl(var(--sage-light))] text-[hsl(var(--sage-text))]">
                Reset to Default
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
