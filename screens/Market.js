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

const marketTabs = constants.marketTabs.map((marketTab) => ({
    ...marketTab,
    ref: React.createRef()
}))

const Tabs = () => {
    return (
        <View
            style={{
                flexDirection: 'row',
            }}
        >
            {/* Tabs */}
            {marketTabs.map((item, index) => {
                return (
                    <TouchableOpacity
                        key={`MarketTab-${index}`}
                        style={{
                            flex: 1
                        }}
                    //onPress
                    >
                        <View
                            ref={item.ref}
                            style={{
                                paddingHorizontal: 15,
                                alignItems: 'center',
                                justifyContent: 'center',
                                height: 40
                            }}
                        >
                            <Text style={{ color: COLORS.white, ...FONTS.h3 }}>{item.title}</Text>
                        </View>





                    </TouchableOpacity>
                )
            })}
        </View>
    )
}
const Market = ({ getCoinMarket, coins }) => {

    React.useEffect(() => {
        getCoinMarket()
    }, [])

    function renderTabBar() {
        return (
            <View
                style={{
                    marginTop: SIZES.radius,
                    marginHorizontal: SIZES.radius,
                    borderRadius: SIZES.radius,
                    backgroundColor: COLORS.gray
                }}
            >
                <Tabs />
            </View>
        )
    }

    function renderButtons() {
        return (
            <View
                
            >

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
                {/* Header */}
                <HeaderBar
                    title="Market"
                />

                {/* Tab Bar */}
                {renderTabBar()}

                {/* Buttons */}
                {renderButtons()}

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