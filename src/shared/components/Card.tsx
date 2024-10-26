import React from 'react'

interface Props {
  children: React.ReactNode,
  classList?: string
}

const Card = (props: Props) => {
  const {children, classList} = props
  const classes = classList ? classList : ''
  return (
    <div className={ classes + ' card-componet'}>
      {children}
    </div>
  )
}

export default Card
