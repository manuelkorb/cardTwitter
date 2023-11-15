import './App.css'
import { useState } from 'react'

export function TwitterFollowCard({name,userName}){
    const [isFollowing,setIsFollowing]=useState(false)

    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing
    ? 'tw-followCard-button is-following'
    : 'tw-followCard-button'

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    const imageSrc = `https://unavatar.io/${userName}`
    return(
    <article className='tw-followCard'>
        <header className='tw-followCard-header'>
            <img className='tw-followCard-avatar' alt="El icono de Midudev" src={imageSrc} />
            <div className='tw-followCard-info'>
                <strong>{name}</strong>
                <span className='tw-followCard-infoUserName'>@{userName}</span>
            </div>
        </header>

        <aside>
            <button className={buttonClassName} onClick={handleClick}>
                <span className='tw-followCard-text'>{text}</span> 
                <span className='tw-followCard-stopFollow'>Dejar de seguir</span>
            </button>
        </aside>
        
    </article>
    )
}