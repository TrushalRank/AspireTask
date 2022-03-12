import colors from "../../common/style/color";

const styles = {
    scrollItem: {
        paddingTop: 250
    },
    TopView: {
        backgroundColor: "white",
        flex: 1,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        paddingHorizontal: 20
    },
    card: {
        backgroundColor: colors.primary,
        height: 200,
        borderRadius: 10,
        marginBottom: 10,
        width: '100%',
        marginTop: -20,
    },
    hidecardnumber: {
        backgroundColor: 'white',
        height: 50,
        width: '42%',
        alignSelf: 'flex-end',
        marginTop: -70,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        justifyContent: 'space-evenly',
        paddingTop: '2%',
        flexDirection: 'row'
    },
    eyeIcon: {
        height: 15,
        width: 15,
        tintColor: colors.primary
    },
    logo: {
        flex: 0.2,
        alignSelf: 'flex-end',
        flexDirection: 'row',
        alignItems: 'center',
        right: '12%',
        top: '5%'
    },
    image: {
        height: 30,
        width: 30,
        tintColor: 'white'
    },
    cardTitle: {
        flex: 0.6,
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: '10%'
    },
    cardNumber: {
        flex: 0.3,
        width: '90%',
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    cardDate: {
        flex: 0.25,
        width: '60%',
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    name: {
        flexDirection: 'row'
    },
    visalogo: {
        alignSelf: 'flex-end',
        flexDirection: 'row',
        alignItems: 'center',
        right: '7%',
        bottom: '5%'
    },
    limit: {
        flex: 0.5,
        width: '96%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: '4%',
    },
    bottomView: {
        backgroundColor: "white",
        height: 400,
        paddingHorizontal: 20
    },
    limitContainer: { flex: 1, flexDirection: 'column', marginBottom: 10 },
    hideCardInfoTextStyle: { color: colors.primary }
}
export default styles;