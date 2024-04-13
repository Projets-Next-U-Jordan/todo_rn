import { Text, View } from "react-native";
import { IconDelete, IconPlus } from "../Icons";
import { TodoItem } from "../../data/TodoItem";

type HeaderProps = {
    setDeleteAllModalOpen: (isOpen: boolean) => void;
}

export const Header = ({setDeleteAllModalOpen}:HeaderProps) => {
    return (
        <>
            <Text style={{textAlign: "center", fontSize: 46}}>TODO</Text>
            <IconDelete onClick={()=>setDeleteAllModalOpen(true)} style={{position: 'absolute', right: 20}} size={40} color="#000" />
        </>
    );
}