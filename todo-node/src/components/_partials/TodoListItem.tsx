import { Pressable, StyleSheet, Text, View } from "react-native";
import { IconDelete, IconEdit } from "../Icons";
import { useContext } from "react";
import { TodoListContext } from "../../Store";

type TodoListItemProps = {
    index: number;
    title: string;
    completed: boolean;
    toggleTodoItem: () => void;
    editTodoItem: () => void;
};

export const TodoListItem = (props: TodoListItemProps) => {

    const {todos, setTodos} = useContext(TodoListContext);

    return (
        <View style={styles.todoListItem}>
            <Pressable 
                onPress={props.toggleTodoItem}
                style={{flexDirection: "row", gap: 20, flex: 1, paddingVertical: 20, alignItems:'center'}}
                onLongPress={props.editTodoItem}
            >
                <Text>{props.completed ? "✅" : "❌"}</Text>
                <Text style={{flex: 1}}>{props.title}</Text>
            </Pressable>
            <Pressable style={{width: "auto", padding: 10, alignItems:'center'}}>
                <IconDelete size={30} color="#000" onClick={
                    () => {
                        setTodos(todos.filter(todo => todo.title !== props.title));
                    }
                }/>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    todoListItem: {
        flexDirection: "row",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
    },
});