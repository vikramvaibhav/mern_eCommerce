import React, { useState, useEffect } from 'react'
import BackNavHeader from '../components/Header/BackNavHeader'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { IonContent, IonPage, IonRow, IonCol, IonButton, IonList, IonItem, IonLabel, IonInput } from '@ionic/react';
import './LoginScreen.scss'

import { useDispatch, useSelector } from 'react-redux'
import { register } from '../redux'

const RegisterScreen = ({ location, history }) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [message, setMessage] = useState(null)

    const dispatch = useDispatch()

    const userRegister = useSelector(state => state.userRegister)
    const { loading, error, userInfo } = userRegister

    const redirect = location.search ? location.search.split('=')[1] : '/'

    useEffect(() => {
        if (userInfo) {
            history.push(redirect)
        }

    }, [history, userInfo, redirect])


    const submitHandler = (e) => {
        e.preventDefault()
        if (password !== confirmPassword) {
            setMessage('Password do not match')
        } else {
            dispatch(register(name, email, password))
        }
    }

    return (
        <IonPage id="login-page">
            <BackNavHeader name='Sign Up' />
            <IonContent fullscreen className="ion-padding">
                {message && <Message color='danger'>{message}</Message>}
                {error && <Message color='danger'>{error}</Message>}
                {loading && <Loader message={'Loading...'} />}

                <div className="login-logo">
                    <img src="assets/icon/icon.png" alt="logo" />
                </div>

                <form noValidate onSubmit={submitHandler}>
                    <IonList>
                        <IonItem>
                            <IonLabel position="stacked" color="primary">Name</IonLabel>
                            <IonInput name="name" type="name" value={name} spellCheck={false} autocapitalize="off" onIonChange={e => setName(e.target.value)}
                                required>
                            </IonInput>
                        </IonItem>

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

                        <IonItem>
                            <IonLabel position="stacked" color="primary">Confirm Password</IonLabel>
                            <IonInput name="confirmPassword" type="password" value={confirmPassword} onIonChange={e => setConfirmPassword(e.target.value)}>
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
                            <IonButton type="submit" expand="block">Register</IonButton>
                        </IonCol>
                        <IonCol>
                            <IonButton routerLink={redirect ? `/login?redirect=${redirect}` : '/login'} color="light" expand="block">Login</IonButton>
                        </IonCol>
                    </IonRow>
                </form>
            </IonContent>
        </IonPage>
    )
}

export default RegisterScreen
