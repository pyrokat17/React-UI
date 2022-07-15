import React from 'react'
import "./Section.scss"
interface SectionProps {
    children: JSX.Element;
    contentPosition?: string
}

export default function Section({children, contentPosition}: SectionProps): JSX.Element {
    
  return (
    <div className={`section-element ${!contentPosition ? "" : contentPosition}`}>{children}</div>
  )
}
