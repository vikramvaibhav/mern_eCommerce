import React, { useState, useEffect } from 'react'
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonGrid,
  IonRow
} from '@ionic/react'
import { useParams } from 'react-router'
import NavHeader from '../components/Header/NavHeader'
import Product from '../components/Product'
import axios from 'axios'

import './HomeScreen.scss'

const Home = () => {

  const { name } = useParams()
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get('/api/products')
      setProducts(data)
    }
    fetchProducts()
  }, [])

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
