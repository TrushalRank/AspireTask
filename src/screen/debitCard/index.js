/** import statement **/
import { Text, View, Image } from 'react-native'
import React, { Component } from 'react'
import styles from './styles'
import commonStyles from '../../common/style/commonStyle'
import Images from '../../assets/images'
import DebitCardComponent from '../../component/debitcardComponent'
import { getTodoListWatcher } from '../../store/actions/Home'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class DebitCard extends Component {
  /** Class constructor **/
  constructor(props) {
    super(props);
  }

  /** Lifecycle Methods **/
  componentDidMount() {
    this.dummyGetApiCall()
  }
  /** Custom Functions **/


  /** API Calling **/
  dummyGetApiCall = () => {
    // this function is for call dummy api call and get data with display in console log.
    this.props.getTodoListWatcher({},
      async (res) => console.log("Api response...", await res),
      err => console.log("Api error...", err)
    )
  }

  /** Class Render **/
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.TopView}>
          <View style={styles.innerTopView}>
            <Text style={[commonStyles.BoldText, commonStyles.WhiteText, { marginTop: '2%', fontWeight: 'bold' }]}>Debit Card</Text>
            <Image source={Images.aspireLogo} style={styles.Icon} />
          </View>
          <View style={styles.innerMiddleView}>
            <Text style={[commonStyles.SmallText14, commonStyles.WhiteText]}>Available Balance</Text>
            <View style={styles.innerBottomview}>
              <View style={styles.Amount}>
                <Text style={[commonStyles.WhiteText]}>$$</Text>
              </View>
              <Text style={[commonStyles.WhiteText, commonStyles.BoldText, commonStyles.bold]}>3,000</Text>
            </View>
          </View>
        </View>
        {/** Debit card component **/}
        <DebitCardComponent props={this.props} navigation={this.props.navigation} />
      </View>
    )
  }
}
// ------ Connect to props functions and values ------ //
function mapStateToProps({ home }) {
  const { loader, error, todoListData } = home;
  return { loader, error, todoListData };
}

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      getTodoListWatcher
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(DebitCard);