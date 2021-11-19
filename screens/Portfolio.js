import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    FlatList,
    Image
} from 'react-native';

import { MainLayout } from "./"
import { connect } from 'react-redux'
import { useFocusEffect } from "@react-navigation/native"
import { getHoldings, getCoinMarket } from "../stores/market/marketActions";

import { SIZES, COLORS, FONTS, dummyData, icons } from "../constants"

const Portfolio = ({ getHoldings, myHoldings }) => {

    useFocusEffect(
        React.useCallback(() => {
            getHoldings(holdings = dummyData.holdings)
        }, [])
    )

    let totalWallet = myHoldings?.reduce((a, b) => a + (b.total || 0), 0)
    let valueChange = myHoldings?.reduce((a, b) => a + (b.holding_value_change_7d || 0), 0)
    let percChange = valueChange / (totalWallet - valueChange) * 100

    function renderCurrentBalanceSection() {
        return (
            <View
                style={{
                    paddingHorizontal: SIZES.padding,
                    borderBottomLeftRadius: 25,
                    borderBottomRightRadius: 25,
                    backgroundColor: COLORS.gray
                }}
            >
                <Text style={{ marginTop: 50, color: COLORS.white, ...FONTS.largeTitle }}>Portfolio</Text>
            </View>
        )
    }

    return (
        <MainLayout>
            <View
                style={{
                    flex: 1,
                    backgroundColor: COLORS.black
                }}
            >
                {/* Header - Current balance */}
                {renderCurrentBalanceSection}

                {/* Chart */}

                {/* Your Assets  */}

            </View>
        </MainLayout>
    )
}



function mapStateToProps(state) {
    return {
        myHoldings: state.marketReducer.myHoldings,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getHoldings: (holdings, currency, coinList, orderBy, sparkline, priceChangePerc, perPage, page) => { return dispatch(getHoldings(holdings, currency, coinList, orderBy, sparkline, priceChangePerc, perPage, page)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Portfolio);