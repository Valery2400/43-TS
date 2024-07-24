import { useState } from "react";
import { TaskRemoveButton, TaskItem, TasksContainer, InputButton, InputForm, InputFormContainer, Title, ToDoListContainer } from "./styles";
import { useFormik } from "formik";
import { v4 } from "uuid";

interface IFormValues{
    inputData: string
}

export default function ToDoList() {

    const [taskList, setTaslList] = useState<string[]>([]);
        
    const formik = useFormik( {
        initialValuses:{
            inputData: ''
        } as IFormValues,
        onSubmit : (values: IFormValues, {resetForm}) => {
            console.log(values);
            setTaslList((preValue) => [...preValue, values.inputData])
            resetForm ()
        }
        })
        console.log(formik);
        

        const taskListOutput = taskList.map((task) => {
            return (
                <TasksContainer>
                <TaskItem>{task}</TaskItem>
                <TaskRemoveButton>✖️</TaskRemoveButton>
            </TasksContainer>
            )
        })

  
    return (
    <ToDoListContainer>
        <Title>ToDo list from consultation 5</Title>
        <InputFormContainer onSubmit={formik.handleSubmit}>
            <InputForm  onChange={formik.handleChange} name='inputData' value={formik.values.inputData} placeholder="input task"></InputForm>
            <InputButton type="submit"> add task</InputButton>
        </InputFormContainer>
        {taskListOutput}
    </ToDoListContainer>
  )
}