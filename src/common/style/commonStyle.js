import colors from "./color";
/** List of common font text style **/
const commonStyles = {
    BoldText: {
        fontSize: 23,
        fontWeight: '800'
    },
    semiBoldText: {
        fontSize: 15,
        fontWeight: '600'
    },
    semiBoldText17: {
        fontSize: 17,
        fontWeight: '600'
    },
    SmallText: {
        fontSize: 10
    },
    SmallText12: {
        fontSize: 12
    },
    SmallText14: {
        fontSize: 14
    },
    largeText: {
        fontSize: 25
    },
    WhiteText: {
        color: colors.white
    },
    row: {
        flexDirection: 'row'
    },
    flex: {
        flex: 1
    },
    bold: {
        fontWeight: 'bold'
    },
    italic: {
        fontStyle: 'italic'
    }

}
export const priceFormat = (amount) => {
    return Number(amount)
        .toFixed(0)
        .replace(/\d(?=(\d{3})+$)/g, "$&,");
};
export default commonStyles
