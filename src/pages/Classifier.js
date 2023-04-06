import React from 'react'
import useLoadCleanFile from '../hooks/training/useLoadCleanFile';
import useCreateBasicArray from '../hooks/classifying/useCreateBasicArray';
import useDataForGraphs from '../hooks/classifying/useDataForGraphs';
import useDataForTopics from '../hooks/classifying/useDataForTopics';

import './Classifier.css'

function Classifier() {

  // 1. load and clean crude data
  const { loadFileHandler, data } = useLoadCleanFile();

  // 2. evaluate and match feedback 
  const finalSentimentArray = useCreateBasicArray(data)
  console.log('basicArray', finalSentimentArray)
  
  // 3. data for graphs
  const dataForGraphs = useDataForGraphs(finalSentimentArray)
  console.log('useDataForGraphs', dataForGraphs)
  
  // 4. topics processing
  const dataForTopics = useDataForTopics(finalSentimentArray)
 

  return (
    <div className='classifier'>
      <h1>CSV File Classification</h1>
      <form>
        <input type="file" onChange={loadFileHandler} />
      </form>

      {finalSentimentArray && <div className='classified-feedbacks'>
        <h2>Classified customers's feedbacks </h2>
        <ul className='table-header'>
          <li>#</li>
          <li>Feedback</li>
          <li>Age</li>
          <li>Gender</li>
          <li>Topics</li>
          <li >Sentiment</li>
        </ul>
        {finalSentimentArray && finalSentimentArray.map(item => (
          <ul key={item.id} >
            <li>{item.id}</li>
            <li>{item.feedback}</li>
            <li>{item.age}</li>
            <li>{item.gender}</li>
            <li>{item.topics.map(topic => `${topic.trim()}, `)}</li>
            <li
              className={item.sentiment === 'positive' ? 'positive' : item.sentiment === 'negative' ? 'negative' : 'neutral'}>{item.sentiment}</li>
          </ul>
        ))}

      </div>}
    </div>
  )
}

export default Classifier