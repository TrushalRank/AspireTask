/** import statement **/
import { Text, View, Image, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import styles from './styles'
import commonStyles, { priceFormat } from '../../common/style/commonStyle'
import colors from '../../common/style/color'
import Images from '../../assets/images'

/** constant statement **/
const amounts = [5000, 10000, 20000]

class WeeklyLimt extends Component {
  /** Class Constructor **/
  constructor(props) {
    super(props);
    this.state = {
      amount: !!this.props.navigation?.state?.params?.weekLimit ? this.props.navigation?.state?.params?.weekLimit : 5000,
    }
  }

  /** Lifecycle Methods **/

  /** Custom Functions **/
  renderHeader = () => {
    return <View style={styles.TopView}>
      <TouchableOpacity style={styles.innerTopView}
        onPress={() => {
          this.props.route.params.onGoBack();
          this.props.navigation.goBack();
        }}
      >
        <Image source={Images.left} style={[styles.backIcon, { tintColor: 'white' }]} />
        <Image source={Images.aspireLogo} style={styles.logoIcon} />
      </TouchableOpacity>
      <Text style={[commonStyles.BoldText, commonStyles.WhiteText, { fontWeight: 'bold' }]}>Spending limit</Text>
    </View>
  }
  renderAmountView = () => {
    return amounts.map(amt => <TouchableOpacity style={styles.button}
      onPress={() => {
        this.setState({ amount: amt })
      }}
    >
      <Text style={[commonStyles.SmallText12, { color: colors.primary, fontWeight: '500' }]}>$$ {priceFormat(amt)}</Text>
    </TouchableOpacity>)
  }

  /** Class Render **/
  render() {
    const { amount } = this.state;
    return (
      <View style={styles.container}>
        {/** header part **/}
        {this.renderHeader()}
        <View style={styles.bottom}>
          {/** selected amount part **/}
          <View style={styles.bottomTop}>
            <Image source={Images.meter} style={styles.backIcon} />
            <Text style={[commonStyles.SmallText14, { left: 10 }]}>Set a weekly debit card limit</Text>
          </View>
          <View style={styles.innerBottomview}>
            <View style={styles.Amount}>
              <Text style={[commonStyles.WhiteText]}>$$</Text>
            </View>
            <Text style={[commonStyles.BoldText, { fontWeight: 'bold' }]}>{priceFormat(amount)}</Text>
          </View>
          <View style={styles.line} />
          <Text style={[commonStyles.SmallText12, { marginTop: '5%', color: colors.brown }]}>
            Here weekly means the last 7days-not the calender week
          </Text>
          {/** amount choice part **/}
          <View style={styles.amountbtn}>
            {this.renderAmountView()}
          </View>
          {/** save button **/}
          <View style={styles.buttonSave}>
            <TouchableOpacity style={styles.save} onPress={() => {
              this.props.route.params.onSaveCardLimit(amount)
              this.props.navigation.goBack()
            }}>
              <Text style={[commonStyles.WhiteText, commonStyles.semiBoldText]}>Save</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}

export default WeeklyLimt