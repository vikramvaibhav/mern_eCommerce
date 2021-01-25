import React, { useEffect } from 'react'
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonGrid,
  IonRow
} from '@ionic/react'
import NavHeader from '../components/Header/NavHeader'
import Product from '../components/Product'
import Message from '../components/Message'
import Loader from '../components/Loader'

import { useParams } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { listProducts } from '../redux'

const HomeScreen = () => {

  const { name } = useParams()

  const dispatch = useDispatch()

  const productList = useSelector((state) => state.productList)
  const { loading, error, products } = productList

  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch])


  return (
    <IonPage id="product-list">
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
            {loading ? <Loader message={'Loading...'} /> : error ? <Message color='danger'>{error}</Message>
              : (
                products.map(product => (
                  <Product key={product._id} product={product} />
                ))
              )
            }
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage >
  )
}

export default HomeScreen
