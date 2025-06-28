
import { useState } from "react";
import { Plus, Sparkles, Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const ToDo = () => {
  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState<Array<{id: number, text: string, completed: boolean}>>([]);

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { id: Date.now(), text: newTask.trim(), completed: false }]);
      setNewTask("");
    }
  };

  const toggleTask = (id: number) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="min-h-screen warm-gradient">
      <div className="max-w-2xl mx-auto px-4 py-16">
        <div className="glass-effect rounded-3xl p-12">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <Sparkles className="h-8 w-8 text-[hsl(var(--accent-coral))] mr-3" />
              <h1 className="text-4xl font-bold text-[hsl(var(--sage-text))]">
                Magical To-Do List
              </h1>
            </div>
            <p className="text-[hsl(var(--sage-light))] text-lg">
              Turn chaos into calm with one{" "}
              <span className="text-[hsl(var(--accent-teal))]">✨ task ✨</span>{" "}
              at a time.
            </p>
          </div>

          {/* Add Task Input */}
          <div className="flex space-x-3 mb-8">
            <Input
              placeholder="Add a delightful task..."
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && addTask()}
              className="flex-1 bg-white/80 border-white/30 text-[hsl(var(--sage-text))] placeholder:text-[hsl(var(--sage-light))]"
            />
            <Button
              onClick={addTask}
              className="bg-[hsl(var(--accent-coral))] hover:bg-[hsl(var(--accent-coral))]/90 text-white px-6"
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>

          {/* Empty State */}
          {tasks.length === 0 && (
            <div className="text-center py-12">
              <p className="text-[hsl(var(--sage-light))] italic text-lg">
                Your enchanted task garden is empty 🌱
              </p>
            </div>
          )}

          {/* Tasks List */}
          {tasks.length > 0 && (
            <div className="space-y-3">
              {tasks.map((task) => (
                <div
                  key={task.id}
                  className={`bg-white/60 rounded-lg p-4 border border-white/30 flex items-center justify-between transition-all ${
                    task.completed ? 'opacity-60' : ''
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <button
                      onClick={() => toggleTask(task.id)}
                      className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${
                        task.completed 
                          ? 'bg-[hsl(var(--accent-teal))] border-[hsl(var(--accent-teal))] text-white'
                          : 'border-[hsl(var(--sage-light))]'
                      }`}
                    >
                      {task.completed && <Check className="h-3 w-3" />}
                    </button>
                    <span className={`text-[hsl(var(--sage-text))] ${task.completed ? 'line-through' : ''}`}>
                      {task.text}
                    </span>
                  </div>
                  <button
                    onClick={() => deleteTask(task.id)}
                    className="text-red-500 hover:text-red-700 transition-colors"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ToDo;
