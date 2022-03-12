import { StyleSheet } from "react-native";
import colors from "../../common/style/color";

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    TopView: {
        backgroundColor: colors.secondry,
        height: '50%',
        width: '100%',
        position: 'absolute'
    },
    innerTopView: {
        flex: 0.2,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 25,
        flexDirection: 'row',
        marginTop: 20
    },
    Icon: {
        height: 40,
        width: 40,
    },
    innerMiddleView: {
        paddingHorizontal: 25,
    },
    innerBottomview: {
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    Amount: {
        backgroundColor: colors.primary,
        height: 22,
        width: 40,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 15,
    }
})
export default styles