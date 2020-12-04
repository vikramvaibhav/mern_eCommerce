import {
    IonCol,
    IonContent,
    IonGrid,
    IonHeader,
    IonPage,
    IonRow,
    IonTitle,
    IonToolbar,
    IonList,
    IonItem,
    IonLabel,
    IonButton
} from '@ionic/react'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import BackNavHeader from '../components/Header/BackNavHeader'
import Rating from '../components/Rating'

const ProductScreen = ({ match }) => {
    const [product, setProduct] = useState({})

    useEffect(() => {
        const fetchProduct = async () => {
            const { data } = await axios.get(`/api/products/${match.params.id}`)
            setProduct(data)
        }
        fetchProduct()
    }, [match.params.id])

    return (
        <IonPage>
            {/* Navbar */}
            <BackNavHeader />

            {/* Content */}
            <IonContent fullscreen className="ion-padding">
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Products</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonGrid>
                    <IonRow>
                        <IonCol size="6">
                            <img src={product.image} alt={product.name} />
                        </IonCol>
                        <IonCol size="4">
                            <IonList>
                                <IonItem>
                                    <IonLabel>
                                        <h1 className="ion-text-wrap">{product.name}</h1>
                                    </IonLabel>
                                </IonItem>
                                <IonItem>
                                    <IonLabel>
                                        <Rating value={product.rating} text={`${product.numReviews} reviews`} />
                                    </IonLabel>
                                </IonItem>
                                <IonItem>
                                    <IonLabel>
                                        <h2>Price: ${product.price}</h2>
                                    </IonLabel>
                                </IonItem>
                                <IonItem>
                                    {product.countInStock > 0 ? (<IonLabel color="success"><p >Status: In Stock</p></IonLabel>) : (<IonLabel color="danger"><p> Status: Out of Stock</p></IonLabel>)}
                                </IonItem>
                                <IonItem lines="none">
                                    <IonLabel>
                                        <p className="ion-text-wrap">Description: {product.description}</p>
                                    </IonLabel>
                                </IonItem>
                                <IonItem lines="none">
                                    <IonButton expand="full" size="medium" color="dark" disabled={product.countInStock === 0}>Add to Cart</IonButton>
                                </IonItem>
                            </IonList>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage >
    )
}

export default ProductScreen