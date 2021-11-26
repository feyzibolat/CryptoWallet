import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    FlatList,
    Animated,
    Image,
} from 'react-native';

import { connect } from 'react-redux';
import { getCoinMarket } from '../stores/market/marketActions';

import { MainLayout } from "./"
import { constants, COLORS, FONTS, SIZES, icons } from '../constants'

import { HeaderBar } from "../components"


const Market = ({ getCoinMarket, coins }) => {

    React.useEffect(() => {
        getCoinMarket()
    }, [])

    return (
        <MainLayout>
            <View
                style={{
                    flex: 1,
                    backgroundColor: COLORS.black
                }}
            >
                {/* Header */}
                <HeaderBar
                    title="Market"
                />

                {/* Tab Bar */}

                {/* Buttons */}

                {/* Market List */}


            </View>
        </MainLayout>
    )
}

function mapStateToProps(state) {
    return {
        coins: state.marketReducer.coins
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getCoinMarket: (currency, orderBy, sparkline, priceChangePerc, perPage, page) => { return dispatch(getCoinMarket(currency, orderBy, sparkline, priceChangePerc, perPage, page)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Market);