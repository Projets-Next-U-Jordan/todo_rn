import { StyleProp, ViewStyle } from "react-native";
import { Line, Path, Polyline, Svg } from "react-native-svg";

const DEFAULT_SIZE = 30;
const DEFAULT_COLOR = "#000000";

type IconProps = {
    size?: number;
    color?: string;
    style?: StyleProp<ViewStyle>;
    onClick?: () => void;
}

export const IconEdit = (props: IconProps) => {
    const color = props.color || DEFAULT_COLOR;
    const size = props.size || DEFAULT_SIZE;
    return (
        <Svg onPress={props.onClick} style={props.style} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <Path stroke={color} d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></Path>
            <Path stroke={color} d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></Path>
        </Svg>
    )
}

export const IconPlus = (props: IconProps) => {
    const color = props.color || DEFAULT_COLOR;
    const size = props.size || DEFAULT_SIZE;
    return (
        <Svg onPress={props.onClick} style={props.style} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <Line stroke={color} x1="12" y1="5" x2="12" y2="19"></Line>
            <Line stroke={color} x1="5" y1="12" x2="19" y2="12"></Line>
        </Svg>
    )
}

export const IconDelete = (props: IconProps) => {
    const color = props.color || DEFAULT_COLOR;
    const size = props.size || DEFAULT_SIZE;
    return (
        <Svg onPress={props.onClick} style={props.style} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <Polyline stroke={color} points="3 6 5 6 21 6"></Polyline>
            <Path stroke={color} d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></Path>
            <Line stroke={color} x1="10" y1="11" x2="10" y2="17"></Line>
            <Line stroke={color} x1="14" y1="11" x2="14" y2="17"></Line>
        </Svg>
    )
}

