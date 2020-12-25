import React from 'react'
import { IonLoading } from '@ionic/react';

const Loader = ({ message }) => {
    return (
        <IonLoading isOpen={true} message={message} />
    )
}

Loader.defaultProps = {
    message: 'Loading...'
}
export default Loader
