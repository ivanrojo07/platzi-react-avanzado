import React, { Fragment } from 'react'
import { Helmet } from 'react-helmet'
import { Div, Subtitle, Title } from './styles'
import PropTypes from 'prop-types'

export const Layout = ({children, title, subtitle})=>{
    return (
    <Fragment>
        <Helmet>
            {
                title && <itle>{title} | Petgram 🐶</itle>
            }
            {
                subtitle && <meta name="description" content={subtitle} /> 
            }
        </Helmet>
        <Div>
            {
                title && <Title>{title}</Title>
            }
            {
                subtitle && <Subtitle>{subtitle}</Subtitle> 
            }
            {children}
        </Div>
    </Fragment>
    )
}

Layout.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    children: PropTypes.node.isRequired
}