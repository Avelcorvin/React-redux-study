import { connect } from 'react-redux'
import React from 'react'

/**
 * фукция map state to props являеться функцией стейт
 * далее connect извлекает стейт из  mapstateto props
 * и передает стейт под видом пропсов в компоненту header
 * а сама компонента уже возвращаеться WrapperHeader
 */


const Header = ( data ) => {
    const { header, description, pagenamber } = data
    return (
        <div>
            <h1>
                {header}</h1>

            <p> 
                {description}</p>

            <span>
                {pagenamber}</span></div>
)}



const mapStateToProps = state => ({
            header: "header",
            description: "descript",
            pagenamber: "#1"

})


export const WrapperHeader = connect(mapStateToProps)(Header)
