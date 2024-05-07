import React from 'react'
import PropTypes from 'prop-types'
const NewsItem=(props)=> {
  
   
    let{title,description,imageUrl,newsUrl,author,date,source}=props;//PROPS USE KRNE KA TAREEKA//yaha is news id ki help se hum identify kr payege ki konsi news ke kie kya content bhejna h this is the way of destructuring mtlb news.js se content yaha shift hora h
    return (
      <>
       
      {/* yaha pe jo bhi aara h vo sb News.js ki wjh se aara h */}
      <div>
       
        <img src={!imageUrl?"https://images.wsj.net/im-903048/social":imageUrl}  class="card-img-top" alt="..."/>
        
      
        <div className="card-body">
        <h5 className="card-title">{!title?"this is title":title}... </h5>
        <p className="card-text">{description}...</p>
        <div class="card mb-3">
      </div>
      <p class="card-text"><small class="text-body-secondary">by {!author?"Unknown":author} on {new Date(date).toGMTstring}</small></p>
        <a href={newsUrl} class="btn btn-primary">Go somewhere</a>
      </div>
      </div>
      </>
    )
  
}

export default NewsItem