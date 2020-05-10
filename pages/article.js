import React, {useState} from 'react';
import axios from 'axios'
import _ from 'lodash'

export default () => {
  const [articles, setArticles] = useState([]);

  const fetchArticle = async () => {
    const result = await axios.get('/api/article')
    setArticles(result.data);
  }

  const renderArticle = (data) => {
    console.log(data)
    return (
      <div>
        <h2>{data.title}</h2>
        <p>{data.description}</p>
      </div>
    )
  }

  return (
    <div>
      <div onClick={async () => {await fetchArticle()}}>Fetch Articles</div>
      <div>
        {articles.map(article => {
          return renderArticle(article);
        })}
      </div>
    </div>
  )
}