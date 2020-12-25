import React from 'react'
import { Link } from 'react-router-dom'
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
    const shareSession = () => { }

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
                        <Link to={`/cart`}>
                            <IonButton onClick={() => shareSession}>
                                <IonIcon slot="icon-only" icon={cart}></IonIcon>
                            </IonButton>
                        </Link>
                    </IonButtons>
                }
            </IonToolbar>
        </IonHeader >
    )
}

export default BackNavHeader