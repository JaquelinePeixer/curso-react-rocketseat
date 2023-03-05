import styles from './Tasks.module.css';
import clipboard from '../assets/Clipboard.svg';
import { ToDoItem } from './ToDoItem';

import dbToDo from '../dbToDo.json';
import { useState } from 'react';

export function Tasks() {
    const badgeCreatedTasks = dbToDo.length;
    const [newTasks, setNewTasks] = useState(dbToDo);

    const completedTasksCounter = newTasks.filter(item => {
        if (item.isChecked) {
            return item
        }
    })
    const totalReduce = completedTasksCounter.reduce((prevValue, elem) => prevValue + 1, 0)
    const badgeCompletedTasks = `${totalReduce} de ${badgeCreatedTasks}`;

    function changeChecked(taskID: number) {
        const newTasksListChecked = newTasks.map((item) => {
            if (item.id === taskID) {
                item.isChecked = !item.isChecked
            }
            return item
        })
        setNewTasks(newTasksListChecked)
    }

    function deleteComment(taskID: number) {
        const newTasksList = newTasks.filter(item => {
            return item.id !== taskID
        })
        setNewTasks(newTasksList)
    }

    return (
        <div className={styles.tasks}>

            <header>
                <div className={styles.createdTasks}>
                    <strong>Tarefas criadas</strong>
                    <span className={styles.badge}>{badgeCreatedTasks}</span>
                </div>

                <div className={styles.completedTasks}>
                    <strong>Concluídas</strong>
                    <span className={styles.badge}>{badgeCompletedTasks}</span>
                </div>
            </header>

            <div className={styles.tasksEmpty}>
                <img src={clipboard} />
                <strong>Você ainda não tem tarefas cadastradas</strong>
                <p>Crie tarefas e organize seus itens a fazer</p>
            </div>

            <div className={styles.tasksList}>
                {newTasks.map(item => {
                    return (<ToDoItem
                        key={item.id}
                        id={item.id}
                        content={item.content}
                        isChecked={item.isChecked}
                        onDeleteComment={deleteComment}
                        onChangeChecked={changeChecked}
                    />
                    )
                })}
            </div>

        </div>
    )
}