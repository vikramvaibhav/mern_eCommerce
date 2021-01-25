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
    IonRouterLink
} from '@ionic/react'

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
                            <IonCol size-xl="8" size-lg="12" size-md="12" size-sm="12" size-xs="12">
                                {cartItems.map((item) => (
                                    <IonItem key={item.product} lines="full">
                                        <IonRow>
                                            <IonCol size-sm="4" size-xs="4">
                                                <img style={{ borderRadius: "4px" }} src={item.image} alt={item.name} />
                                            </IonCol>
                                            <IonCol size-sm="3" size-xs="3">
                                                <IonLabel>
                                                    <IonRouterLink style={{ color: "#000000", textDecoration: "none" }} routerLink={`/product/${item.product}`}>
                                                        <h5 className="ion-text-wrap">{item.name}</h5>
                                                    </IonRouterLink>
                                                </IonLabel>
                                                <IonLabel>
                                                    <p>${item.price}</p>
                                                </IonLabel>
                                            </IonCol>
                                            <IonCol size-sm="3" size-xs="3">
                                                <IonSelect
                                                    value={item.qty}
                                                    onIonFocus={(e) =>
                                                        dispatch(
                                                            addToCart(item.product, Number(e.target.value))
                                                        )
                                                    }>
                                                    {
                                                        [...Array(item.countInStock).keys()].map((x) => (
                                                            <IonSelectOption key={x + 1} value={x + 1}>{x + 1}</IonSelectOption>
                                                        ))
                                                    }
                                                </IonSelect>
                                            </IonCol>
                                            <IonCol size-sm="2" size-xs="2">
                                                <IonButton fill="clear" onClick={() => removeFromCartHandler(item.product)}>
                                                    <IonIcon color="danger" slot="icon-only" icon={trashOutline} />
                                                </IonButton>
                                            </IonCol>
                                        </IonRow>
                                    </IonItem>
                                ))
                                }
                            </IonCol>
                            <IonCol size-xl="4" size-lg="12" size-md="12" size-sm="12" size-xs="12">
                                <IonCard className="ion-no-padding">
                                    <IonCardHeader>
                                        <IonCardTitle>
                                            <h3>Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)}) items</h3>
                                        </IonCardTitle>
                                        <IonCardSubtitle>
                                            <h5>${cartItems.reduce((acc, item) => acc + item.qty * item.price, 0).toFixed(2)}</h5>
                                        </IonCardSubtitle>
                                    </IonCardHeader>
                                    <IonCardContent>
                                        <IonButton
                                            color="dark"
                                            size="default"
                                            disabled={cartItems.length === 0}
                                            onClick={checkoutHandler}
                                            // onClick={e => {
                                            //     e.preventDefault();
                                            //     history.push('/login?redirect=shipping')
                                            // }}
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
