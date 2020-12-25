import React, { useState, useEffect } from 'react'
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
    IonButton,
    IonSelect,
    IonSelectOption
} from '@ionic/react'
import BackNavHeader from '../components/Header/BackNavHeader'
import Rating from '../components/Rating'
import { useDispatch, useSelector } from 'react-redux'
import { listProductDetails } from '../redux'
import Loader from '../components/Loader'
import Message from '../components/Message'

const ProductScreen = ({ history, match }) => {

    const [qty, setQty] = useState(1)

    const dispatch = useDispatch()

    const productDetails = useSelector((state) => state.productDetails)
    const { loading, error, product } = productDetails

    useEffect(() => {
        dispatch(listProductDetails(match.params.id))
    }, [dispatch, match.params.id])

    const addToCartHandler = () => {
        history.push(`/cart/${match.params.id}?qty=${qty}`)
    }

    return (
        <IonPage>
            {/* Navbar */}
            <BackNavHeader />

            {/* Content */}
            <IonContent fullscreen className="ion-padding">
                {loading ? <Loader message={'Loading...'} /> : error ? <Message color='danger'>{error}</Message> : (
                    <>
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
                                        {product.countInStock > 0 && (
                                            <IonItem>
                                                <IonLabel color="primary">
                                                    Quantity:
                                                </IonLabel>
                                                <IonSelect value={qty} onIonChange={(e) => setQty(e.target.value)} placeholder="Select Quantity">
                                                    {
                                                        [...Array(product.countInStock).keys()].map(x => (
                                                            <IonSelectOption key={x + 1} value={x + 1}>{x + 1}</IonSelectOption>
                                                        ))
                                                    }
                                                </IonSelect>
                                            </IonItem>
                                        )}
                                        <IonItem lines="none">
                                            <IonLabel>
                                                <p className="ion-text-wrap">Description: {product.description}</p>
                                            </IonLabel>
                                        </IonItem>
                                        <IonItem lines="none">
                                            <IonButton
                                                expand="full"
                                                size="medium"
                                                color="dark"
                                                onClick={addToCartHandler}
                                                disabled={product.countInStock === 0}
                                            >
                                                Add to Cart
                                            </IonButton>
                                        </IonItem>
                                    </IonList>
                                </IonCol>
                            </IonRow>
                        </IonGrid>
                    </>
                )}
            </IonContent>
        </IonPage >
    )
}

export default ProductScreen