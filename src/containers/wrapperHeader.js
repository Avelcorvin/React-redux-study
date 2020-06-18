import { connect } from 'react-redux'
import React from 'react'

/**
 * фукция map state to props являеться функцией стейт
 * далее connect извлекает стейт из  mapstateto props
 * и передает стейт под видом пропсов в компоненту header
 * а сама компонента уже возвращаеться WrapperHeader
 */


const Header = ( data ) => {
    const { header, description } = data
    return (
        <div>
            <h1>
                {header}</h1>

            <p> 
                {description}</p>
        </div>
)}



const mapStateToProps = state => ({
            header: "Список дел",
            description: "Составь список дел",

})


export const WrapperHeader = connect(mapStateToProps)(Header)
