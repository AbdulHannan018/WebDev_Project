
import { useState } from "react";
import { User, Edit, Camera, MapPin, Calendar, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: "Alex Johnson",
    email: "alex.johnson@email.com",
    location: "San Francisco, CA",
    joinDate: "January 2024",
    bio: "Passionate note-taker and productivity enthusiast. Love organizing thoughts and turning ideas into action."
  });

  const stats = [
    { label: "Notes Created", value: "47" },
    { label: "Tasks Completed", value: "128" },
    { label: "Days Active", value: "23" },
    { label: "Words Written", value: "12.5K" }
  ];

  return (
    <div className="min-h-screen warm-gradient">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="glass-effect rounded-3xl p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <User className="h-8 w-8 text-[hsl(var(--accent-coral))] mr-3" />
              <h1 className="text-4xl font-bold text-[hsl(var(--sage-text))]">Profile</h1>
            </div>
            <p className="text-[hsl(var(--sage-light))] text-lg">
              Manage your personal information and preferences
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Profile Card */}
            <div className="md:col-span-2">
              <Card className="glass-effect border-white/30">
                <CardHeader className="flex flex-row items-center justify-between">
                  <h2 className="text-xl font-semibold text-[hsl(var(--sage-text))]">Personal Information</h2>
                  <Button
                    onClick={() => setIsEditing(!isEditing)}
                    variant="outline"
                    size="sm"
                    className="border-[hsl(var(--accent-coral))] text-[hsl(var(--accent-coral))] hover:bg-[hsl(var(--accent-coral))] hover:text-white"
                  >
                    <Edit className="h-4 w-4 mr-2" />
                    {isEditing ? "Save" : "Edit"}
                  </Button>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Avatar */}
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <div className="w-20 h-20 bg-[hsl(var(--warm-medium))] rounded-full flex items-center justify-center">
                        <User className="h-10 w-10 text-[hsl(var(--sage-text))]" />
                      </div>
                      {isEditing && (
                        <button className="absolute bottom-0 right-0 w-6 h-6 bg-[hsl(var(--accent-coral))] rounded-full flex items-center justify-center">
                          <Camera className="h-3 w-3 text-white" />
                        </button>
                      )}
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-[hsl(var(--sage-text))]">{profile.name}</h3>
                      <p className="text-[hsl(var(--sage-light))]">Productivity Enthusiast</p>
                    </div>
                  </div>

                  {/* Form Fields */}
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-[hsl(var(--sage-text))] mb-2">
                        <User className="h-4 w-4 inline mr-2" />
                        Full Name
                      </label>
                      <Input
                        value={profile.name}
                        onChange={(e) => setProfile({...profile, name: e.target.value})}
                        disabled={!isEditing}
                        className="bg-white/80 border-white/30 text-[hsl(var(--sage-text))]"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-[hsl(var(--sage-text))] mb-2">
                        <Mail className="h-4 w-4 inline mr-2" />
                        Email
                      </label>
                      <Input
                        value={profile.email}
                        onChange={(e) => setProfile({...profile, email: e.target.value})}
                        disabled={!isEditing}
                        className="bg-white/80 border-white/30 text-[hsl(var(--sage-text))]"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-[hsl(var(--sage-text))] mb-2">
                        <MapPin className="h-4 w-4 inline mr-2" />
                        Location
                      </label>
                      <Input
                        value={profile.location}
                        onChange={(e) => setProfile({...profile, location: e.target.value})}
                        disabled={!isEditing}
                        className="bg-white/80 border-white/30 text-[hsl(var(--sage-text))]"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-[hsl(var(--sage-text))] mb-2">
                        Bio
                      </label>
                      <textarea
                        value={profile.bio}
                        onChange={(e) => setProfile({...profile, bio: e.target.value})}
                        disabled={!isEditing}
                        rows={3}
                        className="w-full px-3 py-2 rounded-md bg-white/80 border border-white/30 text-[hsl(var(--sage-text))] disabled:opacity-70"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Stats Card */}
            <div>
              <Card className="glass-effect border-white/30">
                <CardHeader>
                  <h2 className="text-lg font-semibold text-[hsl(var(--sage-text))]">Activity Stats</h2>
                </CardHeader>
                <CardContent className="space-y-4">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center p-3 bg-white/50 rounded-lg">
                      <div className="text-2xl font-bold text-[hsl(var(--accent-coral))]">{stat.value}</div>
                      <div className="text-sm text-[hsl(var(--sage-light))]">{stat.label}</div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <div className="mt-6 p-4 bg-white/50 rounded-lg">
                <div className="flex items-center text-[hsl(var(--sage-light))] text-sm">
                  <Calendar className="h-4 w-4 mr-2" />
                  Member since {profile.joinDate}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
