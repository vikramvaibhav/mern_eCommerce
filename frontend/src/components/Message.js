import React from 'react'
import { IonCard, IonCardContent, IonCol } from '@ionic/react';

const Message = ({ color, children }) => {
    return (
        <IonCol>
            <IonCard color={color}>
                <IonCardContent>
                    {children}
                </IonCardContent>
            </IonCard>
        </IonCol>
    )
}

Message.defaultProps = {
    color: 'success'
}

export default Message


