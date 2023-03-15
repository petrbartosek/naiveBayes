import classifier from '../../assets/classifier'

function useCreateBasicArray(arr) {

    const classify = (word) => {

        const answear = classifier.filter( item => item.feedbackWord === word)

        if (answear.length > 0){
            return {
                    word: answear[0]?.feedbackWord,
                    positiveSentiment: answear[0]?.positiveScore,
                    negativeSentiment: answear[0]?.negativeScore,
                    neutralSentiment: answear[0]?.neutralScore,
                }
        } else {
            return {
                word: 'not in training set',
                positiveSentiment: 1,
                negativeSentiment: 1,
                neutralSentiment: 1,
            }
        }
    }

    if (arr) {
        const basicDataArray = arr.map( feedback => feedback.split(";") ).map( item => {
           return {
                feedback: item[0],
                age: item[1],
                gender: item[2],
                topics: item[3]
            }
        })

        const basicDataArray2 = basicDataArray.map( obj => {
            return {
                ...obj,
                feedback: obj.feedback.trim().split(" "),
                topics: obj.topics.trim().split("|")
            }
        })
    
        // add score data
        const scoredDataArray = basicDataArray2.map( obj => {
            return {
                ...obj,
                sentimentData: obj.feedback.map( word => {

                    return { 
                        score: classify(word),
                    }
                })
            }
        })
 
        // count final sentiment for a single feedback
        // prior for positive: 0.558, negative: 0.392, neutral: 0.050
        const sentimentDataArray = scoredDataArray.map( obj => {

            const multipliedPositiveScores = obj.sentimentData.map( word => word.score.positiveSentiment).map( s => Math.log10(s)).reduce((a, b) => a + b )
            const multipliedNegativeScores = obj.sentimentData.map( word => word.score.negativeSentiment).map( s => Math.log10(s)).reduce((a, b) => a + b )
            const multipliedNeutralScores = obj.sentimentData.map( word => word.score.neutralSentiment).map( s => Math.log10(s)).reduce((a, b) =>  a + b )

            const allScores = [multipliedPositiveScores, multipliedNegativeScores, multipliedNeutralScores]
            const indexOfMax = allScores.indexOf(Math.max(...allScores))
   
            return {
                ...obj,
                sentiment: indexOfMax === 0 ? 'positive' : indexOfMax === 1 ? 'negative' : 'neutral'
            }
        })
        
        console.log('sentimentDataArray', sentimentDataArray)

        // creating final array of objects
        const cleanedSentimentDataArray = sentimentDataArray.map( (obj, index) => {
            return {
                id: index+1,
                words: obj.feedback,
                feedback: obj.feedback.join(" "),
                sentiment: obj.sentiment,
                age: obj.age,
                gender: obj.gender,
                topics: obj.topics,
            }
        })

        return cleanedSentimentDataArray
    }
  
}

export default useCreateBasicArray