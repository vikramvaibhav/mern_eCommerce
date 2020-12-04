import React from 'react'
import { Link } from 'react-router-dom'
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
    IonRow,
} from '@ionic/react'

import './Product.scss'
import Rating from './Rating'

const Product = ({ product }) => {
    return (
        <IonCol sizeXs="6" sizeSm="6" sizeMd="4" sizelg="4" sizeXl="4" >
            <component-card>
                <IonCard className="action-card">
                    <Link to={`/product/${product._id}`}>
                        <img className="header-img" src={product.image} alt={product.name} />
                    </Link>
                    <IonCardHeader>
                        <IonCardSubtitle>{product.category}</IonCardSubtitle>
                        <Link to={`/product/${product._id}`} style={{ textDecoration: 'none' }}>
                            <IonCardTitle>{product.name}</IonCardTitle>
                        </Link>
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
                                    <Link to={`/product/${product._id}`}>
                                        <IonButton size="small">view</IonButton>
                                    </Link>
                                </IonCol>
                            </IonRow>
                        </IonGrid>
                    </IonCardContent>
                </IonCard>
            </component-card>
        </IonCol >
    )
}

export default Product
