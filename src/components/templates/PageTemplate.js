import React from 'react'
import PropTypes from 'prop-types'
import Header from '../organisms/Header'
import Footer from '../organisms/Footer'

const PageTemplate = ({ pathname, children }) => {
    const activeItemName = pathname.substring(1) || 'dashboard'
    
    return (
        <div>
            <Header active={activeItemName}/>
            {children}
            <Footer />
        </div>
    )
}

PageTemplate.propTypes = {
    pathname: PropTypes.string.isRequired,
}

export default PageTemplate