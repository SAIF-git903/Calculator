import MyColors from './Colors';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    btnBlue: {
        width: 72,
        height: 72,
        borderRadius: 24,
        backgroundColor: MyColors.blue,
        justifyContent: "center",
        alignItems: "center",
        margin: 8,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.39,
        shadowRadius: 8.30,

        elevation: 13,
    },
    btnGrey: {
        width: 72,
        height: 72,
        borderRadius: 24,
        backgroundColor: MyColors.grey,
        justifyContent: "center",
        alignItems: "center",
        margin: 8,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.39,
        shadowRadius: 8.30,

        elevation: 13,
    },
    btnLight: {
        width: 72,
        height: 72,
        borderRadius: 24,
        backgroundColor: MyColors.white,
        justifyContent: "center",
        alignItems: "center",
        margin: 8,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.39,
        shadowRadius: 8.30,

        elevation: 13,
    },
    btnDark: {
        width: 72,
        height: 72,
        borderRadius: 24,
        backgroundColor: "#36454F",
        justifyContent: "center",
        alignItems: "center",
        margin: 8,
    },
    lightText: {
        color: "white",
        fontSize: 25
    },
    darkText: {
        color: "black",
        fontSize: 25
    },
    row: {
        maxWidth: "100%",
        flexDirection: "row"
    },
    switchStyle: {
        position: "absolute",
        top: 0,
        left: 10
    },
    calculatorStyle: {
        position: "absolute",
        bottom: 0,
        padding: 10
    },
    screenFirstNumber: {
        fontSize: 96,
        color: MyColors.gray,
        fontWeight: '200',
        alignSelf: "flex-end",
    },
    globalFont: {
        fontSize: 40,
    },
    greaterThanEleven: {
        fontSize: 30
    }
});

export default styles;
