import React from 'react';


export type TaskProps = {
    taskId: number
    title: string
    isDone: boolean
}

export type TasksProps = {
    title: string
    tasks: TaskProps[]
    students: Array<string>
}

export const Tasks = ({title, tasks, students} : TasksProps) => {

    const mappedTasks = tasks.map((task:TaskProps) => {
        const isDone = task.isDone ? 'Done' : 'Not Done'
        return (
            <div key={task.taskId}>
                <span>{task.taskId} </span>
                <span>{task.title} - </span>
                <span>{isDone}</span>
            </div>
        )
    })

    const mappedStudents = students.map((student: string) => {
        return (
            <li>{student}</li>
        )
    })

    return (
        <div>
            <h3>{title}</h3>
            {mappedTasks}
            <ul>
                {mappedStudents}
            </ul>
        </div>
    );
};
