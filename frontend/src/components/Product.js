import React from 'react'
import {
    IonButton,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonCol,
    IonGrid,
    IonLabel,
    IonRouterLink,
    IonRow,
} from '@ionic/react'

import './Product.scss'
import Rating from './Rating'

const Product = ({ product }) => {
    return (
        <IonCol sizeXs="6" sizeSm="6" sizeMd="4" sizelg="4" sizeXl="4" >
            <IonCard className="product-card">
                <IonRouterLink routerLink={`/product/${product._id}`}>
                    <img src={product.image} alt={product.name} />
                </IonRouterLink>
                <IonCardHeader>
                    <IonCardSubtitle>{product.category}</IonCardSubtitle>
                    <IonRouterLink to={`/product/${product._id}`} style={{ textDecoration: 'none' }}>
                        <IonCardTitle>{product.name}</IonCardTitle>
                    </IonRouterLink>
                </IonCardHeader>
                <IonCardContent>
                    <IonGrid>
                        <IonRow>
                            <IonLabel>
                                <Rating value={product.rating} text={`${product.numReviews} reviews`} />
                            </IonLabel>
                        </IonRow>
                        <IonRow>
                            <IonCol>
                                <IonLabel>
                                    <h1>${product.price}</h1>
                                </IonLabel>
                            </IonCol>
                            <IonCol>
                                <IonButton routerLink={`/product/${product._id}`} size="small">view</IonButton>
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                </IonCardContent>
            </IonCard>
        </IonCol >
    )
}

export default Product
