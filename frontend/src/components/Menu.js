import {
    IonContent,
    IonIcon,
    IonItem,
    IonLabel,
    IonList,
    IonListHeader,
    IonMenu,
    IonMenuToggle,
    IonNote
} from '@ionic/react'

import React from 'react'
import { useLocation } from 'react-router-dom'
import { mailOutline, starOutline, cartOutline, searchOutline } from 'ionicons/icons'
import './Menu.css'

const appPages = [
    {
        title: 'Home',
        path: '/tabs/home',
        icon: mailOutline
    },
    {
        title: 'Offers',
        path: '/tabs/offers',
        icon: starOutline
    },
    {
        title: 'Search',
        path: '/tabs/search',
        icon: searchOutline
    },
    {
        title: 'Cart',
        path: '/tabs/cart',
        icon: cartOutline
    },
]

const Menu = () => {
    const location = useLocation()

    return (
        <IonMenu contentId="main" type="overlay">
            <IonContent>
                <IonList id="inbox-list">
                    <IonListHeader>eCommerce</IonListHeader>
                    <IonNote>MERN eCommerce App</IonNote>
                    {appPages.map((appPage, index) => {
                        return (
                            <IonMenuToggle key={index} autoHide={false}>
                                <IonItem className={location.pathname === appPage.path ? 'selected' : ''} routerLink={appPage.path} routerDirection="none" lines="none" detail={false}>
                                    <IonIcon slot="start" icon={appPage.icon} />
                                    <IonLabel>{appPage.title}</IonLabel>
                                </IonItem>
                            </IonMenuToggle>
                        )
                    })}
                </IonList>
            </IonContent>
        </IonMenu>
    )
}

export default Menu
