import { TaskRemoveButton, TaskItem, TasksContainer, InputButton, InputForm, InputFormContainer, Title, ToDoListContainer } from "./styles";


export default function ToDoList() {
  
  
    return (
    <ToDoListContainer>
        <Title>ToDo list from consultation 5</Title>
        <InputFormContainer>
            <InputForm placeholder="input task"></InputForm>
            <InputButton>add task</InputButton>
        </InputFormContainer>
        <TasksContainer>
            <TaskItem></TaskItem>
            <TaskRemoveButton>✖️</TaskRemoveButton>
        </TasksContainer>
    </ToDoListContainer>
  )
}