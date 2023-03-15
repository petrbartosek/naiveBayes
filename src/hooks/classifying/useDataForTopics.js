function useDataForTopics(arr) {
    // Words frequency function
    function mapWordsFrequency(words) {
        const counts = new Map();
        for (const word of words) { counts.set(word, (counts.get(word) ?? 0) + 1) }
        return counts;
    }

    if (arr) {
        let topics0 = [];
        arr.map(f => topics0.push(f.topics.map(t => { return { sentiment: f.sentiment, topic: t.trim() } })))

        let topics = []
        topics0.map(arr => arr.map(f => topics.push(f)))

        const positiveTopics0 = topics.filter(t => t.sentiment === 'positive').map(t => t.topic)
        const negativeTopics0 = topics.filter(t => t.sentiment === 'negative').map(t => t.topic)
        const totalTopics0 = topics.map(t => t.topic)

        const positiveTopicsMap = mapWordsFrequency(positiveTopics0)
        const negativeTopicsMap = mapWordsFrequency(negativeTopics0)
        const totalTopicsMap = mapWordsFrequency(totalTopics0)

        console.log('positiveTopicsMap', positiveTopicsMap)
        console.log('negativeTopicsMap', negativeTopicsMap)
        console.log('totalTopicsMap', totalTopicsMap)
        
        let positiveTopics = []
        for(const pair of positiveTopicsMap){
            positiveTopics.push({topic: pair[0], count: pair[1]})
        }        
        
        let negativeTopics = []
        for(const n of negativeTopicsMap){
            negativeTopics.push({topic: n[0], count: n[1]})
        }

        let totalTopics = []
        for(const n of totalTopicsMap){
            totalTopics.push({topic: n[0], count: n[1]})
        }
        
        console.log('positiveTopics', positiveTopics)
        console.log('negativeTopics', negativeTopics)
        console.log('totalTopics', totalTopics)



        return {positiveTopics, negativeTopics, totalTopics }
    }
    
}
export default useDataForTopics