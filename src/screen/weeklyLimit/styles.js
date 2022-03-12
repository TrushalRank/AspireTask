import { StyleSheet } from "react-native";
import colors from "../../common/style/color";

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    TopView: {
        backgroundColor: colors.secondry,
        flex: 0.3,
        width: '100%',
        paddingHorizontal: 20
    },
    innerTopView: {
        flex: 0.3,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginTop: '12%'
    },
    backIcon: {
        height: 20,
        width: 20,
    },
    logoIcon: {
        height: 45,
        width: 45
    },
    bottom: {
        flex: 1,
        backgroundColor: 'white',
        borderTopRightRadius: 22,
        borderTopLeftRadius: 22,
        top: -50,
        paddingHorizontal: 20
    },
    bottomTop: {
        marginTop: '10%',
        flexDirection: 'row',

    },
    innerBottomview: {
        marginTop: '8%',
        flexDirection: 'row',
        alignItems: 'center'
    },
    Amount: {
        backgroundColor: colors.primary,
        height: 22,
        width: 40,
        borderRadius: 3,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 15,
    },
    line: {
        borderBottomWidth: 0.5,
        marginTop: '2%',
        borderBottomColor: colors.brown,
    },
    amountbtn: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: '12%'
    },
    button: {
        height: '35%',
        width: '30%',
        backgroundColor: colors.lightGreen,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5
    },
    buttonSave: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    save: {
        height: '15%',
        width: '80%',
        backgroundColor: colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
        bottom: '5%',
        borderRadius: 30,
    }

})
export default styles