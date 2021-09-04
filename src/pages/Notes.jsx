import { Container } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import NoteCard from '../components/NoteCard';
import Masonry from 'react-masonry-css';


export default function Notes() {

  const [ notes, setNotes ] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/notes?_sort=createdAt&_order=desc')
      .then(res => res.json())
      .then(data => setNotes(data))
  }, [])

  const handleDelete = async (id) => {
    await fetch('http://localhost:8000/notes/' + id, {
      method: 'DELETE'
    });

    const newNotes = notes.filter(note => note.id !== id);
    setNotes(newNotes);
  };

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
  };

  return (
    
    <Container>
      <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
      >
        {notes.map(note => (
          <div key={note.id} xm={12} md={6} lg={4}>
            <NoteCard note={note} handleDelete={handleDelete} />
          </div>
        ))}
      </Masonry>
    </Container>
  )
}
