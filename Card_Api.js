import React from 'react'


var Data = require("./Card.json")

const Card_Api = () => {
  return (
    <div style={{ margin: 100 }}>

    {Data.map((items)=>{
        return(

            <div class="card-group" key={items.id}>
            <div class="card">
              <img class="card-img-top" src={items.avatar_url} alt="Card image cap"/>
              <div class="card-body">
                <h5 class="card-title">{items.login}</h5>
                
                <p class="card-text"><small class="text-muted">{items.type}</small></p>
              </div>
            </div>
          
          </div>

        )
    })}
   

    
</div>
  )
}

export default Card_Api



