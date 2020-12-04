import React from 'react'
import {
    IonHeader,
    IonToolbar,
    IonButtons,
    IonBackButton,
    IonButton,
    IonIcon
} from '@ionic/react'
import { cart } from 'ionicons/icons'

const BackNavHeader = () => {
    const shareSession = () => { }
    return (
        <IonHeader>
            <IonToolbar>
                <IonButtons slot="start">
                    <IonBackButton defaultHref="/tabs/home"></IonBackButton>
                </IonButtons>
                <IonButtons slot="end">
                    <IonButton onClick={() => shareSession}>
                        <IonIcon slot="icon-only" icon={cart}></IonIcon>
                    </IonButton>
                </IonButtons>
            </IonToolbar>
        </IonHeader>
    )
}

export default BackNavHeader