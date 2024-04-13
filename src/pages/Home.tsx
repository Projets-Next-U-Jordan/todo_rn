import { useContext, useEffect, useState } from "react";
import { Button, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { TodoItem } from "../data/TodoItem";

import { TodoListItemList } from "../components/_partials/TodoListItemList";
import { TodoListContext } from "../Store";
import { Header } from "../components/_partials/Header";
import { AddTodo } from "../components/_partials/AddTodo";
import { DeleteAllModal } from "../components/_partials/DeleteAllModal";
import { EditTodoModal } from "../components/_partials/EditTodoModal";

export const Home = () => {

    const {todos, setTodos} = useContext(TodoListContext);
    const [inputValue, setInputValue] = useState('');

    const [editTodo, setEditTodo] = useState<number | null>(null);
    const [editTodoModalOpen, setEditTodoModalOpen] = useState(false);
    
    const [deleteAllModalOpen, setDeleteAllModalOpen] = useState(false);

    const handleAddTodo = () => {
        setTodos([...todos, new TodoItem(inputValue, false)]);
        setInputValue('');
    };

    return (
        <View style={{flex: 1}}>
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <Header setDeleteAllModalOpen={setDeleteAllModalOpen} />
            </View>
            <View style={{flex: 1}}>
                <TodoListItemList 
                    todos={todos}
                    toggleTodoItem={(index) => {
                        const newTodos = [...todos];
                        newTodos[index].completed = !newTodos[index].completed;
                        setTodos(newTodos);
                    }}
                    editTodoItem={(index) => {
                        setEditTodo(index);
                        setEditTodoModalOpen(true);
                    }}
                />
            </View>
            <View style={{flexDirection: "row"}}>
                <AddTodo inputValue={inputValue} setInputValue={setInputValue} handleAddTodo={handleAddTodo} />
            </View>
            <DeleteAllModal isOpen={deleteAllModalOpen} setIsOpen={setDeleteAllModalOpen} />
            <EditTodoModal isOpen={editTodoModalOpen} setIsOpen={setEditTodoModalOpen} todoIndex={editTodo} />
        </View>
    );
};