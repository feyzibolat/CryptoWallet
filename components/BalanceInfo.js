import React from 'react'
import {
    View,
    Text,
    Image
} from 'react-native';

import { COLORS, FONTS, SIZES, icons } from '../constants';

const BalanceInfo = ({ title, displayAmount, changePct, containerStyle }) => {
    return (
        <View style={{ ...containerStyle }}>
            {/* Title */}
            <Text style={{ ...FONTS.h3, color: COLORS.white }}>{title}</Text>

            {/* Figures */}
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'flex-end'
                }}
            >
                <Text style={{ ...FONTS.h3, color: COLORS.lightGray3 }}>$</Text>
                <Text style={{ marginLeft: SIZES.base, ...FONTS.h2, color: COLORS.white }}>{displayAmount}</Text>
                <Text style={{ ...FONTS.h3, color: COLORS.lightGray3 }}> USD</Text>
            </View>

            {/* Change Percentage */}
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'flex-end'
                }}
            >
                {
                    changePct != 0 &&
                    <Image
                        source={icons.upArrow}
                        style={{
                            width: 10,
                            height: 10,
                            alignSelf: 'center',
                            tintColor: (changePct > 0) ? COLORS.lightGreen : COLORS.red,
                            transform: (changePct > 0) ? [{ rotate: '45deg' }] : [{ rotate: '125deg' }]
                        }}
                    />
                }

                <Text
                    style={{
                        marginLeft: SIZES.base,
                        alignSelf: 'flex-end',
                        color: (changePct == 0) ? COLORS.lightGray3 : (changePct > 0) ? COLORS.lightGreen : COLORS.red,
                        ...FONTS.h4
                    }}
                >
                    {changePct.toFixed(2)}%
                </Text>

                <Text
                    style={{
                        marginLeft: SIZES.base,
                        alignSelf: 'flex-end',
                        color: COLORS.lightGray3,
                        ...FONTS.h5
                    }}
                >
                    7d Change
                </Text>
            </View>
        </View>
    )
}

export default BalanceInfo;