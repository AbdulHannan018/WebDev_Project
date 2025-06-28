# Notes App Backend

This is a simple CRUD API backend for a Notes application built with Node.js, Express, and MongoDB.

## Setup

1. Install dependencies:
   ```
   npm install
   ```

2. Create a `.env` file in the root directory with the following variables:
   ```
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/notes-app
   ```

3. Make sure MongoDB is running on your local machine or update the MONGODB_URI with your MongoDB connection string.

4. Start the server:
   ```
   npm start
   ```
   
   For development with auto-restart:
   ```
   npm run dev
   ```

## API Endpoints

### Notes

- `GET /api/notes` - Get all notes
- `GET /api/notes/:id` - Get a specific note by ID
- `GET /api/notes/tag/:tag` - Get notes by tag
- `POST /api/notes` - Create a new note
- `PUT /api/notes/:id` - Update a note
- `DELETE /api/notes/:id` - Delete a note

## Note Model

```javascript
{
  title: String,
  content: String,
  tags: [String],
  createdAt: Date,
  updatedAt: Date
}
```