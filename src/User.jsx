import React from 'react'

function User(props) {


  return (
    <div>
        <div>
            {props.name}
        </div>

        {props.skills.map((ele)=>{
            return (
                <div>
                    {ele.hobbie}
                </div>
            )
        })}

    </div>
  )
}

export default User