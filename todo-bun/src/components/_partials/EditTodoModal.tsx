import { Button, Modal, Pressable, Text, TextInput, View } from "react-native";
import { TodoItem } from "../../data/TodoItem";
import { useContext, useEffect, useState } from "react";
import { TodoListContext } from "../../Store";

type EditTodoModalProps = {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
    todoIndex: number;
}

export const EditTodoModal = ({isOpen, setIsOpen, todoIndex}:EditTodoModalProps) => {

    const {todos, setTodos} = useContext(TodoListContext);

    const [title, setTitle] = useState('');
    const [completed, setCompleted] = useState(false);

    useEffect(() => {
        const todo = todos[todoIndex];
        if (!todo) return;
        setTitle(todo.title);
        setCompleted(todo.completed);
    }, [todoIndex]);

    return (
        <Modal visible={isOpen} animationType="slide" transparent={true} >
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center',backgroundColor: 'rgba(0, 0, 0, 0.5)'}}>
                <Pressable style={{position: 'absolute', top: 0, bottom: 0, left: 0, right: 0}} onPress={() => setIsOpen(false)} />
                <View style={{backgroundColor: 'white', padding: 20, borderRadius: 10, width:"90%"}}>
                    <Text style={{fontSize: 24, textAlign:"center", marginBottom: 10}}>Modifier l'objectif</Text>
                    <TextInput
                        style={{borderWidth: 1, borderColor: "#ccc", padding: 10, marginBottom: 10}}
                        value={title}
                        onChangeText={setTitle}
                    />
                    <View style={{flexDirection: 'column', justifyContent: 'space-around', marginTop: 20, gap: 10}}>
                        <Button title="Enregistrer" onPress={() => {
                            const newTodos = [...todos];
                            newTodos[todoIndex] = new TodoItem(title, completed);
                            setTodos(newTodos);
                            setIsOpen(false);
                        }} />
                        <Button title="Annuler" onPress={() => setIsOpen(false)} />
                    </View>
                </View>
            </View>
        </Modal>
    );
}