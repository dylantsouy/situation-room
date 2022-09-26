import React from 'react';
import './styles.scss';
import PropTypes from 'prop-types';

export default function DashboardCard(props) {
    const { color, title, mainText, subText, chartValue } = props;
    return (
        <div className={`dashboard-card ${color}`}>
            <div className='title'>{title}</div>
            <div className='bottom'>
                <div className='chart'></div>
                <div className='text'>
                    <div className='main-text'>{mainText}</div>
                    <div className='sub-text'>{subText}</div>
                </div>
            </div>
        </div>
    );
}

DashboardCard.propTypes = {
    color: PropTypes.string,
    title: PropTypes.string,
    mainText: PropTypes.string,
    subText: PropTypes.string,
    chartValue: PropTypes.number,
};
