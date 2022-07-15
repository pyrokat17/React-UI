import React, { FormEvent, ReactElement } from 'react'

interface FormProps {
    children?: ReactElement[] | ReactElement | undefined;
    onSubmit?: (e: FormEvent) => void 
}


export default function Form({children, onSubmit}: FormProps): ReactElement {
    console.log(children)
    const handleSubmit = (e: FormEvent): void => {

      if (onSubmit)  {onSubmit(e)}
    }
  return (
    <form onSubmit={(e) => handleSubmit(e)}>{children}</form>
  )
}
