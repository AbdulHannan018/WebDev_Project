
import { useState } from "react";
import { UserPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const SignUp = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen warm-gradient flex items-center justify-center px-4">
      <Card className="w-full max-w-md glass-effect border-white/20">
        <CardHeader className="text-center pb-6">
          <div className="flex items-center justify-center mb-4">
            <UserPlus className="h-8 w-8 text-[hsl(var(--accent-coral))] mr-2" />
            <h1 className="text-3xl font-bold text-[hsl(var(--sage-text))]">Sign Up</h1>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Input
              type="text"
              placeholder="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="bg-white/80 border-white/30 text-[hsl(var(--sage-text))] placeholder:text-[hsl(var(--sage-light))]"
            />
          </div>
          <div className="space-y-2">
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-white/80 border-white/30 text-[hsl(var(--sage-text))] placeholder:text-[hsl(var(--sage-light))]"
            />
          </div>
          <div className="space-y-2">
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-white/80 border-white/30 text-[hsl(var(--sage-text))] placeholder:text-[hsl(var(--sage-light))]"
            />
          </div>
          <Button className="w-full bg-[hsl(var(--accent-coral))] hover:bg-[hsl(var(--accent-coral))]/90 text-white font-medium py-3">
            Create Account
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignUp;
