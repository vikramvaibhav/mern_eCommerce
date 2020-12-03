import React from 'react'
import {
    IonHeader,
    IonToolbar,
    IonButtons,
    IonBackButton,
    IonButton,
    IonIcon
} from '@ionic/react'
import { share } from 'ionicons/icons'

export const BackNavHeader = () => {
    const shareSession = () => { }
    return (
        <IonHeader>
            <IonToolbar>
                <IonButtons slot="start">
                    <IonBackButton defaultHref="/tabs/schedule"></IonBackButton>
                </IonButtons>
                <IonButtons slot="end">
                    <IonButton onClick={() => shareSession}>
                        <IonIcon slot="icon-only" icon={share}></IonIcon>
                    </IonButton>
                </IonButtons>
            </IonToolbar>
        </IonHeader>
    )
}
