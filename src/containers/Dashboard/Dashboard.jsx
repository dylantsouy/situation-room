import React from 'react';
import { useTranslation } from '../../langs/useTranslation';
import './styles.scss';
import DashboardCard from '../../components/DashboardCard';
import StackedChart from '../../components/StackedChart';

export default function Dashboard() {
    const { t } = useTranslation('common');
    return (
        <div className='dashboard-wrapper'>
            <div className='block-title mb-2'>Number Monitor</div>
            <div className='dashboard-cards'>
                <DashboardCard
                    color='blue-light'
                    chartValue={50}
                    title='Chart1'
                    mainText='500 People'
                    subText='A total of people'
                />
                <DashboardCard
                    color='purple-light'
                    chartValue={50}
                    title='Chart1'
                    mainText='500 People'
                    subText='A total of people'
                />
                <DashboardCard
                    color='blue-dark'
                    chartValue={50}
                    title='Chart1'
                    mainText='500 People'
                    subText='A total of people'
                />
                <DashboardCard
                    color='orange-light'
                    chartValue={50}
                    title='Chart1'
                    mainText='500 People'
                    subText='A total of people'
                />
            </div>
            <div className='block-title mb-2 mt-4'>Top 5 Sales</div>
            <div className='bootom-chart'>
                <StackedChart />
            </div>
        </div>
    );
}
