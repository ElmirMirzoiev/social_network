import React from 'react';
import userImg from '../../../assets/images/user.png'
import ProfileStatus from "./ProfileStatus/ProfileStatus";
import Preloader from "../../../sharedComponents/Preloader/Preloader";
import styles from "./ProfileInfo.module.scss";


const ProfileInfo = ({userId, fullName, aboutMe, photos, contacts}) => {

    return (
        <div className={styles.container}>
            {!userId
                ? <div className={styles.preloader}>
                    <Preloader/>
                </div>

                : <div className={styles.profileInfo}>
                    <div className={styles.info}>
                        <img alt='ava'
                             src={!photos.large
                                 ? userImg
                                 : photos.large
                             }/>
                        <ProfileStatus/>
                    </div>
                    <ul className={styles.description}>
                        <li>{`Name: ${fullName}`}</li>
                        <li>{`AboutMe: ${aboutMe}`}</li>
                        <li>{`Instagram: ${contacts.instagram}`}</li>
                        <li>{`Vk: ${contacts.vk}`}</li>
                        <li>{`Github: ${contacts.github}`}</li>
                        <li>{`Twitter: ${contacts.twitter}`}</li>
                    </ul>
                </div>}
        </div>
    );
}

export default ProfileInfo;