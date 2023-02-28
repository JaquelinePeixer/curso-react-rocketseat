import styles from './ToDoItem.module.css';
import { Trash } from "phosphor-react";
import { useState } from 'react';

interface ToDoItem {
    id: number,
    content: string,
    isChecked: boolean,
    onDeleteComment: Function,
    onChangeChecked: Function
}

export function ToDoItem({ id, content, isChecked, onDeleteComment, onChangeChecked }: ToDoItem) {

    function handleDeleteItem() {
        onDeleteComment(id)
    }

    function handleChangeChecked() {
        onChangeChecked(id)
    }

    return (
        <div className={styles.toDo}>
            <label className={styles.container}>
                <input type="checkbox" onChange={handleChangeChecked} checked={isChecked} />
                <span className={styles.checkmark}></span>
            </label>


            <span className={isChecked ? `${styles.content}, ${styles.textLineThorugh}` : styles.content}>{content}</span>

            <button className={styles.delete} onClick={handleDeleteItem}>
                <Trash size={16} />
            </button>
        </div>
    )
}