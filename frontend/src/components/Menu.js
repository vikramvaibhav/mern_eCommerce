import {
    IonContent,
    IonIcon,
    IonItem,
    IonLabel,
    IonList,
    IonListHeader,
    IonMenu,
    IonMenuToggle,
    IonThumbnail
} from '@ionic/react'

import React from 'react'
import { logout } from '../redux'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router'
import { mailOutline, starOutline, cartOutline, searchOutline, logInOutline, helpOutline, personAddOutline, personOutline, logOutOutline } from 'ionicons/icons'
import './Menu.css'

const routes = {
    appPages: [
        { title: 'Home', path: '/tabs/home', icon: mailOutline },
        { title: 'Offers', path: '/tabs/offers', icon: starOutline },
        { title: 'Search', path: '/tabs/search', icon: searchOutline },
        { title: 'Cart', path: '/tabs/cart', icon: cartOutline },
    ],
    loggedInPages: [
        { title: 'Profile', path: '/profile', icon: personOutline },
        { title: 'Support', path: '/support', icon: helpOutline },
    ],
    loggedOutPages: [
        { title: 'Login', path: '/login', icon: logInOutline },
        { title: 'Support', path: '/support', icon: helpOutline },
        { title: 'Signup', path: '/signup', icon: personAddOutline }
    ]
}

const Menu = ({ history }) => {
    const location = useLocation()

    const dispatch = useDispatch()

    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin

    const logoutHandler = () => {
        dispatch(logout())
    }

    function renderlistItems(list) {
        return list
            .filter(route => !!route.path)
            .map(p => (
                <IonMenuToggle key={p.title} auto-hide="false">
                    <IonItem className={location.pathname === p.path ? 'selected' : ''} routerLink={p.path} routerDirection="none" lines="none" detail={false}>
                        <IonIcon slot="start" icon={p.icon} />
                        <IonLabel>{p.title}</IonLabel>
                    </IonItem>
                </IonMenuToggle>
            ))
    }

    return (
        <IonMenu contentId="main" type="overlay">
            <IonContent forceOverscroll={false}>
                <IonList id="inbox-list" lines="none">
                    {userInfo ? (
                        <IonItem>
                            <IonThumbnail slot="start">
                                <img style={{ borderRadius: "4px" }} src="/images/logo-untappd.png" alt="ima" />
                            </IonThumbnail>
                            <IonLabel>
                                <h1>{userInfo.name}</h1>
                                <p>{userInfo.email}</p>
                            </IonLabel>
                        </IonItem>
                    ) : (
                            <>
                                <IonListHeader>MERN eCommerce App</IonListHeader>
                            </>
                        )
                    }
                    {renderlistItems(routes.appPages)}
                </IonList>
                <IonList id="inbox-list" lines="none">
                    <IonListHeader>Account</IonListHeader>
                    {userInfo ? renderlistItems(routes.loggedInPages) : renderlistItems(routes.loggedOutPages)}
                    {userInfo && (
                        <IonItem button onClick={logoutHandler} lines="none">
                            <IonIcon slot="start" icon={logOutOutline} />
                            <IonLabel>Logout</IonLabel>
                        </IonItem>
                    )
                    }
                </IonList>
            </IonContent>
        </IonMenu >
    )
}

export default Menu