import React from 'react'
import Helmet from 'react-helmet'
const Meta = ({ title, description, keyword }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description}></meta>
      <meta name='keywords' content={keyword}></meta>
    </Helmet>
  )
}

Meta.defaultProps = {
  title: 'Welcome to Proshop',
  description: 'We sell the best electronics for cheap',
  keyword: 'buy cheap electronics',
}

export default Meta
