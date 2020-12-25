import React, { useEffect } from 'react'
import {
    IonPage,
    IonContent,
    IonItem,
    IonLabel,
    IonSelect,
    IonSelectOption,
    IonButton,
    IonIcon,
    IonGrid,
    IonRow,
    IonCol,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IonItemDivider
} from '@ionic/react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import BackNavHeader from '../components/Header/BackNavHeader'
import Message from '../components/Message'

import { addToCart, removeFromCart } from '../redux'
import { trashOutline } from 'ionicons/icons'

const CartScreen = ({ match, location, history }) => {

    const productId = match.params.id

    const qty = location.search ? Number(location.search.split('=')[1]) : 1

    const dispatch = useDispatch()

    const cart = useSelector((state) => state.cart)
    const { cartItems } = cart

    useEffect(() => {
        if (productId) {
            dispatch(addToCart(productId, qty))
        }
    }, [dispatch, productId, qty])

    const removeFromCartHandler = (id) => {
        dispatch(removeFromCart(id))
    }

    const checkoutHandler = () => {
        history.push('/login?redirect=shipping')
    }

    return (
        <IonPage>
            <BackNavHeader name='Cart' />
            <IonContent fullscreen className="ion-padding">
                <IonGrid>
                    {cartItems.length === 0
                        ? <Message color="primary">Your cart is empty</Message>
                        : <IonRow>
                            <IonCol className="ion-padding" size="8">
                                {cartItems.map((item) => (
                                    <IonItem key={item.product} lines="full">
                                        <IonRow>
                                            <IonCol>
                                                <img src={item.image} alt={item.name} />
                                            </IonCol>
                                            <IonCol>
                                                <IonLabel>
                                                    <Link to={`/product/${item.product}`}>
                                                        <h5 className="ion-text-wrap">{item.name}</h5>
                                                    </Link>
                                                </IonLabel>
                                            </IonCol>
                                            <IonCol>
                                                <IonLabel>
                                                    <p>${item.price}</p>
                                                </IonLabel>
                                            </IonCol>
                                            <IonCol>
                                                <IonSelect
                                                    value={item.qty}
                                                    onChange={(e) =>
                                                        dispatch(
                                                            addToCart(item.product, Number(e.target.value))
                                                        )
                                                    } placeholder="Select Quantity">
                                                    {
                                                        [...Array(item.countInStock).keys()].map((x) => (
                                                            <IonSelectOption key={x + 1} value={x + 1}>{x + 1}</IonSelectOption>
                                                        ))
                                                    }
                                                </IonSelect>
                                            </IonCol>
                                            <IonCol>
                                                <IonButton color="danger" onClick={() => removeFromCartHandler(item.product)}>
                                                    <IonIcon slot="icon-only" icon={trashOutline} />
                                                </IonButton>
                                            </IonCol>
                                        </IonRow>
                                    </IonItem>
                                ))
                                }
                            </IonCol>
                            <IonCol size="4">
                                <IonCard>
                                    <IonCardHeader>
                                        <IonCardTitle>
                                            <h3>Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)}) items</h3>
                                        </IonCardTitle>
                                        <IonCardSubtitle>
                                            <h5>${cartItems.reduce((acc, item) => acc + item.qty * item.price, 0).toFixed(2)}</h5>
                                        </IonCardSubtitle>
                                        <IonItemDivider />
                                    </IonCardHeader>
                                    <IonCardContent>
                                        <IonButton
                                            color="dark"
                                            size="default"
                                            disabled={cartItems.length === 0}
                                            onClick={checkoutHandler}
                                            expand="full"
                                        >
                                            Proceed To Checkout
                                    </IonButton>
                                    </IonCardContent>
                                </IonCard>
                            </IonCol>
                        </IonRow>
                    }
                </IonGrid>
            </IonContent>
        </IonPage >
    )
}

export default CartScreen
