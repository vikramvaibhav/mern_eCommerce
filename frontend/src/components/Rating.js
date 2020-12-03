import React from 'react'
import { IonIcon, IonLabel } from '@ionic/react'
import { starOutline, starHalf, star } from 'ionicons/icons'
import PropTypes from 'prop-types'

const Rating = ({ value, text, color }) => {
    return (
        <div>
            <IonIcon style={{ color }} slot="icon-only" icon={value >= 1 ? `${star}` : value >= 0.5 ? `${starHalf}` : `${starOutline}`}></IonIcon>
            <IonIcon style={{ color }} slot="icon-only" icon={value >= 2 ? `${star}` : value >= 1.5 ? `${starHalf}` : `${starOutline}`}></IonIcon>
            <IonIcon style={{ color }} slot="icon-only" icon={value >= 3 ? `${star}` : value >= 2.5 ? `${starHalf}` : `${starOutline}`}></IonIcon>
            <IonIcon style={{ color }} slot="icon-only" icon={value >= 4 ? `${star}` : value >= 3.5 ? `${starHalf}` : `${starOutline}`}></IonIcon>
            <IonIcon style={{ color }} slot="icon-only" icon={value >= 5 ? `${star}` : value >= 4.5 ? `${starHalf}` : `${starOutline}`}></IonIcon>
            <IonLabel>
                <p>{text && text}</p>
            </IonLabel>
        </div>

    )
}

// to give default prop value
Rating.defaultProps = {
    color: '#f8e825'
}

// to specify the type of each prop
Rating.propTypes = {
    value: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    color: PropTypes.string
}

export default Rating
