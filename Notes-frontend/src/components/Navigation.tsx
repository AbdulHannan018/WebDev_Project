
import { Link, useLocation } from "react-router-dom";
import { Home, StickyNote, LogIn, UserPlus, CheckSquare, User, Settings } from "lucide-react";

const Navigation = () => {
  const location = useLocation();
  
  const navItems = [
    { path: "/", label: "Home", icon: Home },
    { path: "/notes", label: "Notes", icon: StickyNote },
    { path: "/todo", label: "To-Do", icon: CheckSquare },
    { path: "/profile", label: "Profile", icon: User },
    { path: "/settings", label: "Settings", icon: Settings },
    { path: "/login", label: "Login", icon: LogIn },
    { path: "/signup", label: "Sign Up", icon: UserPlus },
  ];

  return (
    <nav className="bg-white/85 backdrop-blur-sm shadow-lg border-b border-white/30">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2 text-xl font-bold text-[hsl(var(--sage-text))]">
            <StickyNote className="h-6 w-6 text-[hsl(var(--accent-coral))]" />
            <span>Warm Notes</span>
          </Link>
          
          <div className="flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center space-x-1 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-[hsl(var(--accent-coral))] text-white shadow-md"
                      : "text-[hsl(var(--sage-light))] hover:bg-white/60 hover:text-[hsl(var(--sage-text))]"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
