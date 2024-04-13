import { useContext, useState } from "react";
import { Button, Modal, Pressable, Text, View } from "react-native";
import { TodoItem } from "../../data/TodoItem";
import { TodoListContext } from "../../Store";


type DeleteAllModalProps = {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}

export const DeleteAllModal = ({isOpen, setIsOpen}:DeleteAllModalProps) => {

    const {todos, setTodos} = useContext(TodoListContext);

    return (
        <Modal visible={isOpen} animationType="slide" transparent={true} >
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center',backgroundColor: 'rgba(0, 0, 0, 0.5)'}}>
                <Pressable style={{position: 'absolute', top: 0, bottom: 0, left: 0, right: 0}} onPress={() => setIsOpen(false)} />
                <View style={{backgroundColor: 'white', padding: 20, borderRadius: 10}}>
                    <Text style={{fontSize: 24, textAlign:"center"}}>Voulez-vous supprimer tous les objectifs?</Text>
                    <View style={{flexDirection: 'row', justifyContent: 'space-around', marginTop: 20}}>
                        <Button title="Oui" onPress={() => {
                            setTodos([]);
                            setIsOpen(false);
                        }} />
                        <Button title="Non" onPress={() => setIsOpen(false)} />
                    </View>
                </View>
            </View>
        </Modal>
    );
}