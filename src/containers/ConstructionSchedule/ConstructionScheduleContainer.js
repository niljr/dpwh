// @flow
import React from 'react';
import ConstructionScheduleScreen from './ConstructionScheduleScreen';

type Props = {
    routes: Array<Object>
}

export default function ConstructionScheduleContainer({ routes }: Props): React$Element<any> {
    return <ConstructionScheduleScreen routes={routes}/>;
}
