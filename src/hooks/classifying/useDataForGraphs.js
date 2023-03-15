function useDataForGraphs(data) {
    if (data) {
        // total
        const totalFeedbacks = data.length;

        // sentiment classes
        const positiveOnes =  data.filter( feedback => feedback.sentiment ==='positive')
        const negativeOnes =  data.filter( feedback => feedback.sentiment ==='negative')
        const neutralOnes =  data.filter( feedback => feedback.sentiment ==='neutral')
        console.log('sentiment', positiveOnes, negativeOnes, neutralOnes )

        // gender groups
        const maleOnes =  data.filter( feedback => feedback.gender ==='male')
        const femaleOnes =  data.filter( feedback => feedback.gender ==='female')
        const diff =  data.filter( feedback => feedback.gender !=='female' && feedback.gender !=='male')
        console.log('maleOnes:', maleOnes, femaleOnes, diff ) 
        
        // gender groups advanced
        const menPositive = data.filter( feedback => feedback.gender === 'male' && feedback.sentiment ==='positive')
        const menNegative = data.filter( feedback => feedback.gender === 'male' && feedback.sentiment ==='negative')
        const menNeutral = data.filter( feedback => feedback.gender === 'male' && feedback.sentiment ==='neutral')
        console.log('gender groups', menPositive, menNegative, menNeutral ) 
        
        const womenPositive = data.filter( feedback => feedback.gender === 'female' && feedback.sentiment ==='positive')
        const womenNegative = data.filter( feedback => feedback.gender === 'female' && feedback.sentiment ==='negative')
        const womenNeutral = data.filter( feedback => feedback.gender === 'female' && feedback.sentiment ==='neutral')
        console.log('gender group w', womenPositive, womenNegative, womenNeutral ) 

        // age groups
        const age1 = data.filter( feedback => feedback.age === '< 30')
        const age2 = data.filter( feedback => feedback.age === '30 - 60')
        const age3 = data.filter( feedback => feedback.age === '60+')
        console.log('ages group', age1, age2, age3 ) 
        
        // age groups advaced
        const age1Positive = data.filter( feedback => feedback.age === '< 30' && feedback.sentiment ==='positive')
        const age1Negative = data.filter( feedback => feedback.age === '< 30' && feedback.sentiment ==='negative')
        const age1Neutral = data.filter( feedback => feedback.age === '< 30' && feedback.sentiment ==='neutral')

        const age2Positive = data.filter( feedback => feedback.age === '30 - 60' && feedback.sentiment ==='positive')
        const age2Negative = data.filter( feedback => feedback.age === '30 - 60' && feedback.sentiment ==='negative')
        const age2Neutral = data.filter( feedback => feedback.age === '30 - 60' && feedback.sentiment ==='neutral')

        const age3Positive = data.filter( feedback => feedback.age === '60+' && feedback.sentiment ==='positive')
        const age3Negative = data.filter( feedback => feedback.age === '60+' && feedback.sentiment ==='negative')
        const age3Neutral = data.filter( feedback => feedback.age === '60+' && feedback.sentiment ==='neutral')
        console.log('ages groups with sentiment',
                    age1Positive, age1Negative, age1Neutral,
                    age2Positive, age2Negative, age2Neutral,
                    age3Positive, age3Negative, age3Neutral ) 
        

        return  {menPositive, menNegative, menNeutral, womenPositive, womenNegative, womenNeutral }
    
    }
}

export default useDataForGraphs