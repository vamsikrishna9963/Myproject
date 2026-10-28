import React from 'react'

const Vamsi = () => {

    const frineds = [{
            id: 1,
            show:'RRR',
            time : '2:30pm'
    },{
            id: 2,
            show:'paradise',
            time : '1:30pm'
    },{
            id: 3,
            show:'Ak7',
            time : '1:50pm'
    },{
            id: 4,
            show:'Pushpa',
            time : '3:30pm'
    }]
  return (
    <div>
        <h1>PVP</h1>
        <ul>
            {frineds.map((friend) => (
                <p key={friend.id}>
                   this are  {friend.show} - {friend.time}
                </p>
            ))}
        </ul>
    </div>
  )
}



export default Vamsi;