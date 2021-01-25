import React from 'react'
import {
    IonHeader,
    IonToolbar,
    IonButtons,
    IonButton,
    IonMenuButton,
    IonTitle,
    IonIcon
} from '@ionic/react'
import { cart } from 'ionicons/icons';
const NavHeader = ({ name }) => {
    return (
        <IonHeader>
            <IonToolbar>
                <IonButtons slot="start">
                    <IonMenuButton />
                </IonButtons>
                <IonTitle>{name.charAt(0).toUpperCase() + name.slice(1)}</IonTitle>
                <IonButtons slot="end">
                    <IonButton routerLink={`/cart`}>
                        <IonIcon slot="icon-only" icon={cart}></IonIcon>
                    </IonButton>
                </IonButtons>
            </IonToolbar>
        </IonHeader>
    )
}
export default NavHeader