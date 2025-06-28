
import { StickyNote, Sparkles, FileText, Users, Settings } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen warm-gradient">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <div className="glass-effect rounded-3xl p-12 max-w-2xl mx-auto card-hover">
            <div className="flex items-center justify-center mb-6">
              <StickyNote className="h-12 w-12 text-[hsl(var(--accent-coral))] mr-3" />
              <h1 className="text-5xl font-bold text-[hsl(var(--sage-text))]">
                Welcome to{" "}
                <span className="text-[hsl(var(--accent-coral))]">Warm Notes</span>!
              </h1>
            </div>
            
            <div className="space-y-6 text-lg text-[hsl(var(--sage-light))]">
              <div className="flex items-center justify-center space-x-2">
                <Sparkles className="h-5 w-5 text-[hsl(var(--accent-teal))]" />
                <p>Your personal productivity companion with a warm, inviting design.</p>
              </div>
              
              <div className="flex items-center justify-center space-x-2">
                <FileText className="h-5 w-5 text-[hsl(var(--accent-coral))]" />
                <p>Organize your thoughts, tasks, and digital life in one beautiful place.</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Link to="/notes" className="glass-effect rounded-2xl p-8 card-hover block">
            <div className="text-center">
              <StickyNote className="h-12 w-12 text-[hsl(var(--accent-coral))] mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-[hsl(var(--sage-text))] mb-2">Notes</h3>
              <p className="text-[hsl(var(--sage-light))]">Capture and organize your thoughts with style</p>
            </div>
          </Link>
          
          <Link to="/todo" className="glass-effect rounded-2xl p-8 card-hover block">
            <div className="text-center">
              <Sparkles className="h-12 w-12 text-[hsl(var(--accent-teal))] mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-[hsl(var(--sage-text))] mb-2">To-Do Lists</h3>
              <p className="text-[hsl(var(--sage-light))]">Turn chaos into calm, one task at a time</p>
            </div>
          </Link>
        </div>
        
        {/* Bear illustration */}
        <div className="flex justify-center">
          <div className="glass-effect rounded-2xl p-8 w-64 h-64 flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl mb-4">🐻</div>
              <p className="text-[hsl(var(--sage-light))] text-sm">Your friendly productivity companion</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
