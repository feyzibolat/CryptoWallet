import React from 'react';
import {
    View,
    Text
} from 'react-native';
// import {
//     ChartDot,
//     ChartPath,
//     ChartPathProvider,
//     ChartXLabel,
//     ChartYLabel, monotoneCubicInterpolation
// } from "@rainbow-me/animated-charts"
import moment from "moment";

import { SIZES, COLORS, FONTS, icons } from '../constants'

const Chart = ({ containerStyle, chartPrices }) => {

    //Points
    let startUnixTimestamp = moment().subtract(7, 'day').unix()
    let data = chartPrices ? chartPrices?.map((item, index) => {
        return {
            x: startUnixTimestamp + (index + 1) * 3600,
            y: item
        }
    }) : []

    // let points = monotoneCubicInterpolation({ data, range: 40 })

    const formatUSD = value => {
        'worklet';

        if (value === '') {
            return '';
        }

        return `$${Number(value).toFixed(2)}`
    }

    const formatDateTime = value => {
        'worklet';

        if (value === '') {
            return '';
        }

        var selectedDate = new Date(value * 1000);

        let date = `0${selectedDate.getDate()}`.slice(-2)
        let month = `0${selectedDate.getMonth() + 1}`.slice(-2)

        return `${date} / ${month}`
    }

    const formatNumber = (value, roundingPoint) => {
        if (value > 1e9) {
            return `${(value / 1e9).toFixed(roundingPoint)}B`
        } else if (value > 1e6) {
            return `${(value / 1e6).toFixed(roundingPoint)}M`
        } else if (value > 1e3) {
            return `${(value / 1e3).toFixed(roundingPoint)}K`
        } else {
            return value.toFixed(roundingPoint)
        }
    }
    const getYAxisLabelValues = () => {
        if (chartPrices != undefined) {
            let minValue = Math.min(...chartPrices)
            let maxValue = Math.max(...chartPrices)

            let midValue = (minValue + maxValue) / 2

            let higgerMidValue = (maxValue + midValue) / 2
            let lowerMidValue = (minValue + midValue) / 2

            let roundingPoint = 2

            return [
                formatNumber(maxValue, roundingPoint),
                formatNumber(higgerMidValue, roundingPoint),
                formatNumber(lowerMidValue, roundingPoint),
                formatNumber(minValue, roundingPoint)
            ]
        } else {
            return []
        }

    }
    return (
        <View
            style={{
                ...containerStyle
            }}
        >
            {/* Y Axis Label */}
            <View
                style={{
                    position: 'absolute',
                    left: SIZES.padding,
                    top: 0,
                    bottom: 0,
                    justifyContent: 'space-between'
                }}
            >
                {
                    getYAxisLabelValues().map((item, index) => {
                        return (
                            <Text
                                key={index}
                                style={{
                                    color: COLORS.lightGray3,
                                    ...FONTS.body4
                                }}
                            >
                                {item}
                            </Text>
                        )
                    })
                }

            </View>

            {/* Chart */}

        </View>
    )
}

export default Chart;