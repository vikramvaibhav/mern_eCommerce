import React, { useState, useEffect } from 'react'
import BackNavHeader from '../components/Header/BackNavHeader'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { IonContent, IonPage, IonRow, IonCol, IonButton, IonList, IonItem, IonLabel, IonInput } from '@ionic/react';
import './LoginScreen.scss'

import { useDispatch, useSelector } from 'react-redux'
import { getUserDetails, updateUserProfile } from '../redux'
import { USER_UPDATE_PROFILE_RESET } from '../redux/user/userConstants';

const ProfileScreen = ({ location, history }) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [message, setMessage] = useState(null)

    const dispatch = useDispatch()

    const userDetails = useSelector(state => state.userDetails)
    const { loading, error, user } = userDetails

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const userUpdateProfile = useSelector(state => state.userUpdateProfile)
    const { success } = userUpdateProfile

    useEffect(() => {
        setMessage('')
        if (!userInfo) {
            history.push('/login')
        } else {
            if (!user || !user.name) {
                dispatch({ type: USER_UPDATE_PROFILE_RESET })
                dispatch(getUserDetails('profile'))
            } else {
                setName(user.name)
                setEmail(user.email)
            }
        }

    }, [history, userInfo, user, dispatch])


    const submitHandler = (e) => {
        e.preventDefault()
        if (password !== confirmPassword) {
            setMessage('Password do not match')
        } else {
            dispatch(updateUserProfile({ id: user._id, name, email, password }))
        }
    }

    return (
        <IonPage id="login-page">
            <BackNavHeader name='User Profile' />
            <IonContent fullscreen className="ion-padding">
                {message && <Message color='danger'>{message}</Message>}
                {success && <Message color='success'>Profile Updated</Message>}
                {error && <Message color='danger'>{error}</Message>}
                {loading && <Loader message={'Loading...'} />}

                <form noValidate onSubmit={submitHandler}>
                    <IonList>
                        <IonItem>
                            <IonLabel position="floating" color="primary">Name</IonLabel>
                            <IonInput name="name" type="name" value={name} spellCheck={false} autocapitalize="off" onIonChange={e => setName(e.target.value)}
                                required>
                            </IonInput>
                        </IonItem>

                        <IonItem>
                            <IonLabel position="floating" color="primary">Email</IonLabel>
                            <IonInput name="email" type="email" value={email} spellCheck={false} autocapitalize="off" onIonChange={e => setEmail(e.target.value)}
                                required>
                            </IonInput>
                        </IonItem>

                        <IonItem>
                            <IonLabel position="floating" color="primary">Password</IonLabel>
                            <IonInput name="password" type="password" value={password} onIonChange={e => setPassword(e.target.value)}>
                            </IonInput>
                        </IonItem>

                        <IonItem>
                            <IonLabel position="floating" color="primary">Confirm Password</IonLabel>
                            <IonInput name="confirmPassword" type="password" value={confirmPassword} onIonChange={e => setConfirmPassword(e.target.value)}>
                            </IonInput>
                        </IonItem>

                    </IonList>
                    <IonRow>
                        <IonCol>
                            <IonButton type="submit" expand="block">Update</IonButton>
                        </IonCol>
                    </IonRow>
                </form>
            </IonContent>
        </IonPage>
    )
}

export default ProfileScreen
