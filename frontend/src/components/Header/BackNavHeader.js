import React from 'react'
import {
    IonHeader,
    IonToolbar,
    IonButtons,
    IonBackButton,
    IonButton,
    IonIcon,
    IonTitle
} from '@ionic/react'
import { cart } from 'ionicons/icons'
const BackNavHeader = ({ name }) => {

    return (
        <IonHeader>
            <IonToolbar>
                <IonButtons slot="start">
                    <IonBackButton defaultHref="/tabs/home"></IonBackButton>
                </IonButtons>
                {name ?
                    <IonTitle IonTitle > {name.charAt(0).toUpperCase() + name.slice(1)}</IonTitle>
                    : name !== "Cart" &&
                    <IonButtons slot="end">
                        <IonButton routerLink={`/cart`}>
                            <IonIcon slot="icon-only" icon={cart}></IonIcon>
                        </IonButton>
                    </IonButtons>
                }
            </IonToolbar>
        </IonHeader >
    )
}

export default BackNavHeader