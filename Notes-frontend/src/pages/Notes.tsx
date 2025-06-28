import { useState, useEffect } from "react";
import { Search, Plus, Tag, Moon, StickyNote, Trash2, Edit, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { notesApi, Note } from "@/lib/api";
import { useToast } from "@/hooks/use-toast";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const Notes = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [newTag, setNewTag] = useState("");
  const [selectedNote, setSelectedNote] = useState<Note | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [noteTitle, setNoteTitle] = useState("");
  const [noteContent, setNoteContent] = useState("");
  const [noteTags, setNoteTags] = useState<string[]>([]);
  
  const { toast } = useToast();
  const queryClient = useQueryClient();
  
  // Fetch all notes
  const { data: notes = [], isLoading, isError } = useQuery<Note[]>({
    queryKey: ["notes"],
    queryFn: notesApi.getAllNotes,
  });
  
  // Get unique tags from all notes
  const allTags = Array.from(new Set(notes.flatMap(note => note.tags || [])));
  
  // Filter notes based on search query
  const filteredNotes = notes.filter(note => {
    if (!searchQuery) return true;
    return (
      note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      note.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
      note.tags?.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  });

  // Create note mutation
  const createNoteMutation = useMutation({
    mutationFn: notesApi.createNote,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["notes"] });
      resetForm();
      toast({
        title: "Success",
        description: "Note created successfully",
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to create note",
        variant: "destructive",
      });
    },
  });

  // Update note mutation
  const updateNoteMutation = useMutation({
    mutationFn: ({ id, note }: { id: string; note: Partial<Note> }) =>
      notesApi.updateNote(id, note),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["notes"] });
      resetForm();
      toast({
        title: "Success",
        description: "Note updated successfully",
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to update note",
        variant: "destructive",
      });
    },
  });

  // Delete note mutation
  const deleteNoteMutation = useMutation({
    mutationFn: notesApi.deleteNote,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["notes"] });
      setSelectedNote(null);
      toast({
        title: "Success",
        description: "Note deleted successfully",
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to delete note",
        variant: "destructive",
      });
    },
  });

  // Handle creating or updating a note
  const handleSaveNote = () => {
    if (!noteTitle.trim()) {
      toast({
        title: "Error",
        description: "Title is required",
        variant: "destructive",
      });
      return;
    }

    const noteData: Note = {
      title: noteTitle,
      content: noteContent,
      tags: noteTags,
    };

    if (isEditing && selectedNote?._id) {
      updateNoteMutation.mutate({
        id: selectedNote._id,
        note: noteData,
      });
    } else {
      createNoteMutation.mutate(noteData);
    }
  };

  // Handle adding a new tag
  const handleAddTag = () => {
    if (!newTag.trim()) return;
    
    // Add # if not present
    const formattedTag = newTag.startsWith('#') ? newTag : `#${newTag}`;
    
    if (!noteTags.includes(formattedTag)) {
      setNoteTags([...noteTags, formattedTag]);
    }
    setNewTag("");
  };

  // Handle removing a tag
  const handleRemoveTag = (tagToRemove: string) => {
    setNoteTags(noteTags.filter(tag => tag !== tagToRemove));
  };

  // Handle selecting a note for editing
  const handleSelectNote = (note: Note) => {
    setSelectedNote(note);
    setNoteTitle(note.title);
    setNoteContent(note.content);
    setNoteTags(note.tags || []);
    setIsEditing(true);
  };

  // Reset form
  const resetForm = () => {
    setSelectedNote(null);
    setNoteTitle("");
    setNoteContent("");
    setNoteTags([]);
    setIsEditing(false);
  };

  // Handle creating a new note
  const handleNewNote = () => {
    resetForm();
    setIsEditing(true);
  };

  return (
    <div className="min-h-screen warm-gradient">
      <div className="flex h-screen">
        {/* Sidebar */}
        <div className="w-80 bg-white/70 backdrop-blur-sm border-r border-white/30 p-6 overflow-y-auto">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-[hsl(var(--sage-text))] flex items-center">
              <StickyNote className="h-5 w-5 mr-2 text-[hsl(var(--accent-coral))]" />
              Notes
            </h2>
            <Moon className="h-5 w-5 text-[hsl(var(--sage-light))]" />
          </div>

          {/* Search */}
          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-[hsl(var(--sage-light))]" />
            <Input
              placeholder="Search notes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-white/80 border-white/30 text-[hsl(var(--sage-text))] placeholder:text-[hsl(var(--sage-light))]"
            />
          </div>

          {/* New Note Button */}
          <Button 
            className="w-full mb-6 bg-[hsl(var(--accent-coral))] hover:bg-[hsl(var(--accent-coral))]/90 text-white"
            onClick={handleNewNote}
          >
            <Plus className="h-4 w-4 mr-2" />
            New Note
          </Button>

          {/* Add Tag */}
          <div className="flex mb-4">
            <Input
              placeholder="Add tag"
              value={newTag}
              onChange={(e) => setNewTag(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleAddTag()}
              className="flex-1 bg-white/80 border-white/30 text-[hsl(var(--sage-text))] placeholder:text-[hsl(var(--sage-light))]"
            />
            <Button 
              size="sm" 
              className="ml-2 bg-[hsl(var(--accent-teal))] hover:bg-[hsl(var(--accent-teal))]/90"
              onClick={handleAddTag}
            >
              <Tag className="h-4 w-4" />
            </Button>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {allTags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-[hsl(var(--warm-medium))] text-[hsl(var(--sage-text))] rounded-full text-sm cursor-pointer hover:bg-[hsl(var(--warm-dark))]"
                onClick={() => setSearchQuery(tag)}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Notes List */}
          <div className="space-y-2">
            {isLoading ? (
              <div className="text-[hsl(var(--sage-light))] text-sm">Loading notes...</div>
            ) : isError ? (
              <div className="text-[hsl(var(--accent-coral))] text-sm">Error loading notes</div>
            ) : filteredNotes.length === 0 ? (
              <div className="text-[hsl(var(--sage-light))] text-sm">No notes found</div>
            ) : (
              filteredNotes.map((note) => (
                <div 
                  key={note._id} 
                  className={`p-3 rounded-lg cursor-pointer transition-colors ${selectedNote?._id === note._id ? 'bg-[hsl(var(--warm-dark))]' : 'bg-[hsl(var(--warm-medium))] hover:bg-[hsl(var(--warm-dark))]'}`}
                  onClick={() => handleSelectNote(note)}
                >
                  <h3 className="font-medium text-[hsl(var(--sage-text))] truncate">{note.title}</h3>
                  <p className="text-sm text-[hsl(var(--sage-light))] truncate">{note.content}</p>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {note.tags?.map((tag) => (
                      <span key={`${note._id}-${tag}`} className="text-xs text-[hsl(var(--sage-light))]">{tag}</span>
                    ))}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6 overflow-y-auto">
          {isEditing ? (
            <div className="glass-effect rounded-2xl p-6 max-w-3xl mx-auto">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold text-[hsl(var(--sage-text))]">
                  {selectedNote?._id ? 'Edit Note' : 'New Note'}
                </h2>
                <div className="flex gap-2">
                  {selectedNote?._id && (
                    <Button 
                      variant="destructive" 
                      size="sm"
                      onClick={() => selectedNote?._id && deleteNoteMutation.mutate(selectedNote._id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  )}
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={resetForm}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <Input
                    placeholder="Title"
                    value={noteTitle}
                    onChange={(e) => setNoteTitle(e.target.value)}
                    className="bg-white/80 border-white/30 text-[hsl(var(--sage-text))] placeholder:text-[hsl(var(--sage-light))]"
                  />
                </div>
                
                <div>
                  <Textarea
                    placeholder="Write your note here..."
                    value={noteContent}
                    onChange={(e) => setNoteContent(e.target.value)}
                    className="min-h-[200px] bg-white/80 border-white/30 text-[hsl(var(--sage-text))] placeholder:text-[hsl(var(--sage-light))]"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-[hsl(var(--sage-text))] mb-2">Tags</label>
                  <div className="flex flex-wrap gap-2">
                    {noteTags.map((tag) => (
                      <div 
                        key={tag} 
                        className="flex items-center gap-1 px-3 py-1 bg-[hsl(var(--warm-medium))] text-[hsl(var(--sage-text))] rounded-full text-sm"
                      >
                        {tag}
                        <button 
                          onClick={() => handleRemoveTag(tag)}
                          className="text-[hsl(var(--sage-light))] hover:text-[hsl(var(--accent-coral))]"
                        >
                          <X className="h-3 w-3" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
                
                <Button 
                  className="w-full bg-[hsl(var(--accent-teal))] hover:bg-[hsl(var(--accent-teal))]/90 text-white"
                  onClick={handleSaveNote}
                  disabled={createNoteMutation.isPending || updateNoteMutation.isPending}
                >
                  {createNoteMutation.isPending || updateNoteMutation.isPending ? 'Saving...' : 'Save Note'}
                </Button>
              </div>
            </div>
          ) : (
            <div className="flex-1 flex items-center justify-center">
              <div className="text-center glass-effect rounded-2xl p-12 max-w-md">
                <h3 className="text-2xl font-semibold text-[hsl(var(--sage-text))] mb-4">
                  Select a note or create a new one
                </h3>
                <p className="text-[hsl(var(--sage-light))]">
                  Start by clicking "New Note" or select an existing note from the sidebar
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Notes;