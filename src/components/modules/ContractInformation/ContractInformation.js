// @flow
import React, { useEffect, useState } from 'react';
import { TiArrowRepeat } from 'react-icons/ti';
import { FaQuestionCircle } from 'react-icons/fa';
import { ImFileText } from 'react-icons/im';
import { useSelector } from 'react-redux';
import moment from 'moment';
import Card from '../../base/Card/Card';
import Typography from '../../base/Typography/Typography';
import './contract-information.scss';

type Props = {
    className?: string,
};

export default function ContractInformation({ className = '' }: Props): React$Element<any> {
    const { currentContract } = useSelector(({ contract }) => contract);

    const prepareData = () => {
        setData({
            id: { label: 'Contract ID', value: currentContract.contractId },
            contractName: { label: 'Contract Name', value: currentContract.contractName.toUpperCase() },
            contractorName: { label: 'Contractor Name', value: currentContract.contractorName.toUpperCase() },
            effectivityDate: { label: 'Contract Effectivity Date', value: moment(currentContract.effectivityDate).format('L') },
            expiryDate: { label: 'Contract Expiry Date', value: moment(currentContract.expiryDate).format('L') },
            duration: { label: 'Duraction (CDs)', value: currentContract.duration },
            cost: { label: 'Contract Cost (PhP)', value: currentContract.cost },
            accomplishment: { label: 'Accomplishment', value: currentContract.accomplishment },
            status: { label: 'Implementation Status', value: currentContract.status.toUpperCase() }
        });
    };

    const [data, setData] = useState({});

    useEffect(() => {
        if (currentContract) {
            prepareData();
        }
    }, [currentContract]);

    return (
        !currentContract
            ? <div />
            : <Card
                className='contract-information'
                header={<div className='flex-spaced'>
                    <Typography
                        color='color-light'
                        className='contract-information__header'
                        weight='semi-bold'
                        variant='size-16'>
                        Contract Information
                    </Typography>
                    <div className='d-flex'>
                        <div className='contract-information__header-icon'>
                            <TiArrowRepeat size={18} />
                        </div>
                        <div className='contract-information__header-icon'>
                            <ImFileText />
                        </div>
                        <div className='contract-information__header-icon'>
                            <FaQuestionCircle />
                        </div>
                    </div>
                </div>}>

                <div className='contract-information__data'>
                    {Object.keys(data).map(item =>
                        <div className={`contract-information__data-item ${item.includes('Name') ? '' : '-wrap'}`} key={item}>
                            <Typography className={item.includes('Name') ? 'underlined' : ''}>
                                {data[item].label}:
                            </Typography>

                            <Typography>
                                {data[item].value}
                            </Typography>
                        </div>
                    )}
                </div>

                <div className='contract-information__sub-header'>
                    <Typography
                        color='color-light'
                        weight='semi-bold'>
                        Project Components
                    </Typography>
                </div>
                <Typography className='contract-information__sub-data'>
                    P00442396VS-CW1
                </Typography>
            </Card>
    );
}
