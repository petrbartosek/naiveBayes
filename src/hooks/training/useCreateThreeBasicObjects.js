function useCreateThreeBasicObjects(obj) {
  
  // Words frequency function
  function mapWordsFrequency(words) {
    const counts = new Map();
    for (const word of words) { counts.set(word, (counts.get(word) ?? 0) + 1) }
    return counts;
  }

  if (obj){
    // Positive sentiment part
    const basicPositiveObject = obj.filter( feedback => feedback.sentiment === 'positive' )
          .map(feedback => feedback.words)
          let basicPositiveArr = []
          basicPositiveObject.map( arr => basicPositiveArr.push(...arr)) 

    // Negative sentiment part
    const basicNegativeObject = obj.filter( feedback => feedback.sentiment === 'negative')
          .map(feedback => feedback.words)
          let basicNegativeArr = []
          basicNegativeObject.map( arr => basicNegativeArr.push(...arr))
        
    // Neutral sentiment part
    const basicNeutralObject = obj.filter( feedback => feedback.sentiment === 'neutral')
          .map(feedback => feedback.words)
          let basicNeutralArr = []
          basicNeutralObject.map( arr => basicNeutralArr.push(...arr))

    // All words part
    const basicAllObject = obj.map(feedback => feedback.words)
          let basicAllArr = []
          basicAllObject.map( arr => basicAllArr.push(...arr))
        
    // Frequencies //
    const positiveWordsMap = mapWordsFrequency(basicPositiveArr)
    const negativeWordsMap = mapWordsFrequency(basicNegativeArr)
    const neutralWordsMap = mapWordsFrequency(basicNeutralArr)
    const allWordsMap = mapWordsFrequency(basicAllArr)

    //// Classifier ////
    let classifier0 = []

    for (const pair of allWordsMap ) {
      const frequencyAll = (positiveWordsMap.get(pair[0]) ? positiveWordsMap.get(pair[0]) + 1 : 1) + (negativeWordsMap.get(pair[0]) ? negativeWordsMap.get(pair[0]) + 1 : 1 ) + (neutralWordsMap.get(pair[0]) ? neutralWordsMap.get(pair[0]) + 1 : 1)

      classifier0.push({
        word: pair[0],
        countPositive: positiveWordsMap.get(pair[0]) ? positiveWordsMap.get(pair[0]) + 1 : 1,
        countNegative: negativeWordsMap.get(pair[0]) ? negativeWordsMap.get(pair[0]) + 1 : 1,
        countNeutral: neutralWordsMap.get(pair[0]) ?  neutralWordsMap.get(pair[0]) + 1 : 1,
        likelihoodPositive: positiveWordsMap.get(pair[0]) ? ((positiveWordsMap.get(pair[0]) + 1) / frequencyAll ) : (1 / frequencyAll),
        likelihoodNegative: negativeWordsMap.get(pair[0]) ? ((negativeWordsMap.get(pair[0]) + 1) / frequencyAll)  : (1 / frequencyAll),
        likelihoodNeutral:  neutralWordsMap.get(pair[0]) ?  ((neutralWordsMap.get(pair[0]) + 1) / frequencyAll)  : (1 / frequencyAll),
        frequencyAll : frequencyAll,
        // Prior 
        positivePrior : basicPositiveArr.length / basicAllArr.length,
        negativePrior : basicNegativeArr.length / basicAllArr.length,
        neutralPrior : basicNeutralArr.length / basicAllArr.length,
        denominator : basicAllArr.length,
      })
    }

    const classifier = classifier0.map( word => {
      return {
        ...word,
        positiveScore: word.likelihoodPositive * word.positivePrior,
        negativeScore: word.likelihoodNegative * word.negativePrior,
        neutralScore: word.likelihoodNeutral * word.neutralPrior
      }
    })
    console.log('classifier', classifier)

    return classifier
  }
}

export default useCreateThreeBasicObjects