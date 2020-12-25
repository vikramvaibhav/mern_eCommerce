import React from 'react'
import { Link } from 'react-router-dom'
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
                    <Link to={`/cart`}>
                        <IonButton>
                            <IonIcon slot="icon-only" icon={cart}></IonIcon>
                        </IonButton>
                    </Link>
                </IonButtons>
            </IonToolbar>
        </IonHeader>
    )
}
export default NavHeader