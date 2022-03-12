/** import statement **/
import { Text, View, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import styles from './styles'
import colors from '../../common/style/color'
import Images from '../../assets/images'
import commonStyles, { priceFormat } from '../../common/style/commonStyle'
import ProgressbarComponent from '../progressbarComponent'
import CardSettingComponent from '../cardSettingComponent'

/** constant values **/
const cardName = "Mark Henry";
const cardNumber = "5647 3411 2413 2020";
const cardExpDate = "12/20";
const cardCVV = "456";
const cardSpendLimit = 345;

class DebitcardComponent extends Component {
  /** class constructor **/
  constructor(props) {
    super(props);
    this.state = {
      isHidden: true,
      cardLimit: 5000,
      cardLimitSwitch: false
    }
  }
  /** Lifecycle Methods **/

  /** Custom Functions **/
  cardComponent = () => {
    const { isHidden } = this.state;
    return <View style={styles.card}>
      <View style={styles.logo}>
        <Image source={Images.aspireLogoGray} style={styles.image} />
        <Text style={[commonStyles.semiBoldText17, commonStyles.WhiteText]}>aspire</Text>
      </View>
      <View style={styles.cardTitle}>
        <Text style={[commonStyles.BoldText, commonStyles.WhiteText, commonStyles.bold]}>{cardName}</Text>
      </View>
      <View style={styles.cardNumber}>
        {
          this.renderCardNumber()
        }
      </View>
      <View style={styles.cardDate}>
        <View style={styles.name}>
          <Text style={[commonStyles.SmallText12, commonStyles.WhiteText]}>Thru: </Text>
          <Text style={[isHidden ? commonStyles.SmallText14 : commonStyles.SmallText12, commonStyles.WhiteText, { letterSpacing: 2 }]}>
            {isHidden ? this.renderHiddenNumber(cardExpDate) : cardExpDate}
          </Text>
        </View>
        <View style={styles.name}>
          <Text style={[commonStyles.SmallText12, commonStyles.WhiteText]}>CVV: </Text>
          <Text style={[isHidden ? commonStyles.SmallText14 : commonStyles.SmallText12, commonStyles.WhiteText, { letterSpacing: 2 }]}>
            {isHidden ? this.renderHiddenNumber(cardCVV) : cardCVV}
          </Text>
        </View>
      </View>
      <View style={styles.visalogo}>
        <Text style={[commonStyles.largeText, commonStyles.WhiteText, commonStyles.bold, commonStyles.italic]}>VISA</Text>
      </View>
    </View>
  }
  renderCardNumber = () => {
    const { isHidden } = this.state;
    return cardNumber.split(" ").map((i, index) => {
      return <Text key={index}
        style={[commonStyles.WhiteText, { letterSpacing: 4 }, isHidden ? commonStyles.largeText : commonStyles.semiBoldText]}>
        {isHidden ? this.renderHiddenNumber(i) : i}
      </Text>
    })
  }
  renderHiddenNumber = (number) => {
    var str = '';
    number?.split("").map((item, index) => str += item != '/' ? '*' : '/')
    return str
  }
  renderLimitComponent = () => {
    const { cardLimit } = this.state;
    return <View style={styles.limitContainer}>
      <View style={styles.limit}>
        <Text style={[commonStyles.SmallText12]}>Debit card spending limit</Text>
        <View style={[commonStyles.row]}>
          <Text style={[commonStyles.SmallText12, commonStyles.bold, { color: colors.primary, right: 10 }]}>${cardSpendLimit}</Text>
          <View style={{ borderLeftWidth: 1, borderLeftColor: colors.lightGray, height: 16 }}>
            <Text style={[commonStyles.SmallText12, commonStyles.bold, { left: 10, color: colors.lightGray }]}>${priceFormat(cardLimit)}</Text>
          </View>
        </View>
      </View>
      <ProgressbarComponent value={cardSpendLimit != 0 ? cardSpendLimit / 5000 : 0} />
    </View>
  }

  /** Class Render **/
  render() {
    const { isHidden, cardLimit, cardLimitSwitch } = this.state;
    return (
      <View>
        <ScrollView style={styles.scrollItem}>
          <View style={styles.TopView}>
            <View style={{}}>
              <TouchableOpacity style={styles.hidecardnumber} onPress={() => this.setState({ isHidden: !isHidden })}>
                <Image source={isHidden ? Images.show : Images.eye} style={styles.eyeIcon} />
                <Text style={[commonStyles.SmallText12, commonStyles.bold, styles.hideCardInfoTextStyle]}>
                  {isHidden ? `Show card number` : `Hide card number`}
                </Text>
              </TouchableOpacity>
              {this.cardComponent()}
            </View>
            {cardLimitSwitch && this.renderLimitComponent()}
          </View>
          <View style={styles.bottomView}>
            <CardSettingComponent
              props={this.props}
              navigation={this.props.navigation}
              limit={cardLimit}
              onChangeSwitch={value => this.setState({ cardLimitSwitch: !value })}
              changeCardLimit={amount => this.setState({ cardLimit: amount })}
            />
          </View>
          <View style={{ backgroundColor: "white", height: 300, }} />
        </ScrollView>
      </View>
    )
  }
}

export default DebitcardComponent