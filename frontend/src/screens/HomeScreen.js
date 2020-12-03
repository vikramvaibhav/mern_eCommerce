import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonGrid, IonRow } from '@ionic/react'
import React from 'react'
import { useParams } from 'react-router'
import NavHeader from '../components/Header/NavHeader'
import Product from '../components/Product'

import products from '../products'

import './HomeScreen.scss'

const Home = () => {

  const { name } = useParams()

  return (
    <IonPage>
      {/* Navbar */}
      <NavHeader name={name} />

      {/* Content */}
      <IonContent fullscreen className="ion-padding">
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{name}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonGrid style={{ marginBottom: '4rem' }}>
          <IonRow>
            {
              products.map(product => (
                <Product key={product._id} product={product} />
              ))
            }
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage >
  )
}

export default Home
