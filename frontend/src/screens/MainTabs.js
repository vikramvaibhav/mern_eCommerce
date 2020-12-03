import React from 'react'
import { IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/react'
import { home, cart, search, star } from 'ionicons/icons'
import { Route, Redirect } from 'react-router'

import Home from './HomeScreen'

const MainTabs = () => {
    return (
        <IonTabs>
            <IonRouterOutlet>
                <Redirect exact path="/tabs" to="/tabs/home" />
                {/*
          Using the render method prop cuts down the number of renders your components will have due to route changes.
          Use the component prop when your component depends on the RouterComponentProps passed in automatically.
        */}
                <Route path="/tabs/:name" render={() => <Home />} exact={true} />
            </IonRouterOutlet>
            <IonTabBar slot="bottom">
                <IonTabButton tab="home" href="/tabs/home">
                    <IonIcon icon={home} />
                    <IonLabel>Home</IonLabel>
                </IonTabButton>
                <IonTabButton tab="offers" href="/tabs/offers">
                    <IonIcon icon={star} />
                    <IonLabel>Offers</IonLabel>
                </IonTabButton>
                <IonTabButton tab="search" href="/tabs/search">
                    <IonIcon icon={search} />
                    <IonLabel>Search</IonLabel>
                </IonTabButton>
                <IonTabButton tab="cart" href="/tabs/cart">
                    <IonIcon icon={cart} />
                    <IonLabel>Cart</IonLabel>
                </IonTabButton>
            </IonTabBar>
        </IonTabs>
    )
}

export default MainTabs
