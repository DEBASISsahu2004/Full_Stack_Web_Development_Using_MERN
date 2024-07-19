import React, { useEffect, useState } from 'react';
import styles from "./notes.module.scss";
import Wrapper from '../../components/hoc/wrapper';
import Greeting from '../../components/atoms/greeting';
import Note from '../../components/cards/note';
import notesData from "../../data/notes.json";
import utils from "../../utils/localstorage";
import types from "../../config/types";

function Notes() {

  const [notesColl, setNotesColl] = useState([]);
  const data = utils.getFromLocalStorage(types.NOTES_DATA);

  useEffect(()=>{
    if(data && data.length) {
      setNotesColl(data);
      return;
    };
    utils.addToLocalStorage('notes-data', notesData);
    setNotesColl(notesData);
  }, [data]);

  return (
    <section className={styles.container}>
      <Greeting />
      <main>
        {notesColl.map((note)=>{
          return (
          <Note key={note.id} color={note.color} text={note.text} date={note.createdAt} />
          );
        })}
      </main>
    </section>
  )
}

export default Wrapper(Notes);