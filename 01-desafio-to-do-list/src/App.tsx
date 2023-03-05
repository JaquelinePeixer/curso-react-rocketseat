import { useState } from 'react';
import styles from './App.module.css';
import { Header } from './components/Header';
import { PlusCircle } from "phosphor-react";
import { Tasks } from './components/Tasks';

function App() {

  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <div className={styles.searchContainer}>
          <input type="text" placeholder='Adicione uma nova tarefa' />

          <button type="submit">
            <span>Criar</span>
            <PlusCircle size={16} weight="bold" />
          </button>
        </div>

        <Tasks  />
      </div>


    </>
  )
}

export default App
