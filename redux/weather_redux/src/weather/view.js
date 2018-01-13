import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import * as Status from './status.js';

const Weather = ({status, cityName, weater, lowestTemp, highestTemp}) => {
    switch(status) {
        case Status.LOADING: {
            return <div>天气信息请求中...</div>;
        }
        case Status.SUCCESS: {
            return (
                <div>
                    {cityName} {weater} 最低气温 {lowestTemp} 最高气温 {highestTemp}
                </div>
            );
        }
        case Status.FAILURE: {
            return <div>天气信息装载失败</div>;
        }
        default: {
            throw new Error('unexpected status ' + status);
        }
    }
}

Weather.PropTypes = {
    status: PropTypes.string.isRequired,
    cityName: PropTypes.string,
    weater: PropTypes.string,
    lowestTemp: PropTypes.string,
    highestTemp: PropTypes.string
};

const mapStateToProps = (state) => {
    const weatherData = state.weather;

    return {
        status: weatherData.status,
        cityName: weatherData.city,
        weater: weatherData.weater,
        lowestTemp: weatherData.temp1,
        highestTemp: weatherData.temp2
    };
};

export default connect(mapStateToProps)(Weather);