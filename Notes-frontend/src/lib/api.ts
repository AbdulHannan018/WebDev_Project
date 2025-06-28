import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export interface Note {
  _id?: string;
  title: string;
  content: string;
  tags: string[];
  createdAt?: Date;
  updatedAt?: Date;
}

export const notesApi = {
  // Get all notes
  getAllNotes: async () => {
    const response = await api.get('/notes');
    return response.data;
  },

  // Get a single note by ID
  getNoteById: async (id: string) => {
    const response = await api.get(`/notes/${id}`);
    return response.data;
  },

  // Get notes by tag
  getNotesByTag: async (tag: string) => {
    const response = await api.get(`/notes/tag/${tag}`);
    return response.data;
  },

  // Create a new note
  createNote: async (note: Note) => {
    const response = await api.post('/notes', note);
    return response.data;
  },

  // Update a note
  updateNote: async (id: string, note: Partial<Note>) => {
    const response = await api.put(`/notes/${id}`, note);
    return response.data;
  },

  // Authentication
  signup: async (email: string, password: string) => {
    const response = await api.post('/signup', { email, password });
    return response.data;
  },

  login: async (email: string, password: string) => {
    const response = await api.post('/login', { email, password });
    return response.data;
  },
};

  // Delete a note
  deleteNote: async (id: string) => {
    const response = await api.delete(`/notes/${id}`);
    return response.data;
  },
};