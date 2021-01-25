import React, { useState, useEffect } from 'react'
import BackNavHeader from '../components/Header/BackNavHeader'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { IonContent, IonPage, IonRow, IonCol, IonButton, IonList, IonItem, IonLabel, IonInput } from '@ionic/react';
import './LoginScreen.scss'

import { useDispatch, useSelector } from 'react-redux'
import { login } from '../redux'

const LoginScreen = ({ location, history }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()

    const userLogin = useSelector(state => state.userLogin)
    const { loading, error, userInfo } = userLogin

    const redirect = location.search ? location.search.split('=')[1] : '/'

    useEffect(() => {
        if (userInfo) {
            history.push(redirect)
        }

    }, [history, userInfo, redirect])


    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(login(email, password))
    }

    return (
        <IonPage id="login-page">
            <BackNavHeader name='Sign In' />
            <IonContent fullscreen className="ion-padding">

                {loading && <Loader message={'Loading...'} />}
                {error && <Message color='danger'>{error}</Message>}

                <div className="login-logo">
                    <img src="assets/icon/icon.png" alt="logo" />
                </div>

                <form noValidate onSubmit={submitHandler}>
                    <IonList>
                        <IonItem>
                            <IonLabel position="stacked" color="primary">Email</IonLabel>
                            <IonInput name="email" type="email" value={email} spellCheck={false} autocapitalize="off" onIonChange={e => setEmail(e.target.value)}
                                required>
                            </IonInput>
                        </IonItem>

                        {/* {formSubmitted && usernameError && <IonText color="danger">
                            <p className="ion-padding-start">
                                Email is required
                        </p>
                        </IonText>} */}

                        <IonItem>
                            <IonLabel position="stacked" color="primary">Password</IonLabel>
                            <IonInput name="password" type="password" value={password} onIonChange={e => setPassword(e.target.value)}>
                            </IonInput>
                        </IonItem>

                        {/* {formSubmitted && passwordError && <IonText color="danger">
                            <p className="ion-padding-start">
                                Password is required
              </p>
                        </IonText>} */}
                    </IonList>

                    <IonRow>
                        <IonCol>
                            <IonButton type="submit" expand="block">Sign In</IonButton>
                        </IonCol>
                        <IonCol>
                            <IonButton routerLink={redirect ? `/register?redirect=${redirect}` : '/register'} color="light" expand="block">Register</IonButton>
                        </IonCol>
                    </IonRow>
                </form>
            </IonContent>
        </IonPage>
    )
}

export default LoginScreen
