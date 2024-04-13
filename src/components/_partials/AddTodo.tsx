import { Pressable, TextInput } from "react-native";
import { IconPlus } from "../Icons";

type AddTodoProps = {
    inputValue: string;
    setInputValue: (text: string) => void;
    handleAddTodo: () => void;
}

export const AddTodo = ({inputValue,setInputValue,handleAddTodo}:AddTodoProps) => {
    return (
        <>
            <TextInput
                multiline={true}
                placeholder="Add a new todo"
                value={inputValue}
                style={{flex: 1, height: 40, borderColor: 'gray', borderWidth: 1, paddingHorizontal: 10}}
                onChangeText={text => setInputValue(text)}
            />
            <Pressable
                onPress={handleAddTodo}
                style={{height: 40, width: 40, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f0f0f0'}}
                disabled={inputValue.length === 0}
            >
                <IconPlus size={40} color={inputValue.length === 0 ? "#707175" : "#000"} />
            </Pressable>
        </>
    );
}