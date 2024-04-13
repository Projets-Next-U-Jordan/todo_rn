import { ScrollView, StyleSheet, View } from "react-native";
import { TodoItem } from "../../data/TodoItem";
import { TodoListItem } from "./TodoListItem";

type TodoListItemListProps = {
    todos: TodoItem[];
    toggleTodoItem: (index: number) => void;
    editTodoItem: (index: number) => void;
}

export const TodoListItemList = (props: TodoListItemListProps) => {
    return (
        <ScrollView style={styles.todoListList}>
        {props.todos.map((todo, index) => (
            <TodoListItem 
                key={index}
                index={index}
                title={todo.title}
                completed={todo.completed}
                toggleTodoItem={()=>props.toggleTodoItem(index)}
                editTodoItem={()=>props.editTodoItem(index)}
            />
        ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    todoListList: {
        flex: 1,
        height: "100%",
        width: "100%",
        paddingVertical: 20,
        paddingHorizontal: 10,
        gap: 20,
    },
});