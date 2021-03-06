import React from 'react';
import s from './ProfileInfo.module.css'
import {ProfileType} from "../../../redux/Profile-reducer";
import loader from "../../../assets/img/loading-13.gif";

type ProfileInfoProps={
    profile:ProfileType
}

const ProfileInfo = (props: ProfileInfoProps) => {
    if (!props.profile){
        return <div><img width={50} height={50} src={loader}/></div>
    }

    return (
        <div >
            <div>
                <img
                    src='https://yandex-images.clstorage.net/OOYo48265/1041eb5hvH/6pcXD4cL7vtRX8Jt_tVReSsIVW2-MNTwNmO8TgaMtdCJHfWxxsmKMpwmwDB_vzbCkqYyc-ecCoVNNuyXT-0N1q6BHRDJDq2jRgyFeo-NUTg3F1Iy6G3O6mpnrFFRiKXPy0_6ipKJmn7McpJaf7s23b2MEW2Qp3flYhTEvVPvAdf_nANS3TXHukpn_1Gx91ZlfChSeas-wqwXaK0jCpivnIo_4qXg_KB5zl2fbTf9ZJu2lR1jobN21UUgwaZG-yf22ZJHbuYj9-9GcehIsvpBe30fZlCqPfyGPEWdEQKBl6yXE_KJ69-zdMVZk2A28E2Itbo4fbyzYPRfI_6CY8ksw-KvWVXkG_b_Q1_cUJHifGt1BEVEuxLAnC1HhBkGhbGOsR3VgNv0pGvdSZRcCMRMpLGcO3i-uXrYTzfOkU_7GPr0jGB52CXs6EBzyGq6yG97UDhOYZAYya0vT7sLCIqsqIQu0oLE6p1R9VG2dwnMRamjugBIg4tg1X4yybxS1AP-0LBhY8Uu0_l9VsJkqOFPXUMoZW6SIc-aMEmbKyuko5KyEe2f9dKvacBRk38f2GOGr74lRbiwfe1EB-WkSPYL1PSKdFjmHvvdUVneRobPYmlXO1J7rBHdkDVjjicUnomfuDX6p-DDgnDUZ41OKPN-g6mKF2CIjnneXj_FslD0KeXDsERK7xPW71JL-0uozGNafztOWq4d2q0gVrsDKIePr4U22oTv6Z1MxUiYdhzZRY-EvRZ6hbt8w00l76Vt-h_f6aF0SM0i3vZEedt9tc9Uf0wHQUqLBuCGDU2PKzOMkqWxPt-rz-qKa9RrpG4rxkKYrZI5b4C1YcR7IOGjR-0BwuKxX07QPunWclDAdZjbXUBcBV9Elwf4mi9ppSMRkJi6mhfymuDIh1HJaodDAd5sqYCkFV2rvE_OZjf9l0_MDtzUpmRO0RDK1mtG312n0EVBbiRWULYi55YNVIcxFqg'/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large}/>
                Ava+descripti
            </div>

        </div>

    )
}

export default ProfileInfo