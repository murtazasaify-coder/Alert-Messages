import React from 'react'

export default function Alert(props) {
    const capitalize =(word)=>{

        let text=word.toLowerCase();
        return text.charAt(0).toUpperCase()+text.slice(1);
    }
  return (
    props.alert && <div>
            <div className={`alert alert-${props.alert.typ} alert-dismissible fade show`} role="alert">
                    <strong>{capitalize(props.alert.typ)}</strong>: {props.alert.msg}                    
            </div>
    </div>
  )
}
