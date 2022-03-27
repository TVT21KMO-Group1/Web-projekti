import React from 'react'

export default function (props) {
    console.log(props)
  return (
    <div>
        <div className="RavintolaSivuIso">
            <div className="RavintolaSivu"> {props.RavintolanRuuat.Tuote}</div>
            <div className="RavintolaSivu">{props.RavintolanRuuat.Kuvaus}</div>
            <div className="RavintolaSivu">{props.RavintolanRuuat.Hinta}</div>
        </div>
    
    </div>
  )
}
