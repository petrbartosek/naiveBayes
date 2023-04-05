import Button from './Button';
import positiveTopics from '../assets/classifiedPositiveTopics'
import negativeTopics from '../assets/classifiedNegativeTopics'
import allTopics from '../assets/classifiedTopics'
import TopicsBarChart from '../components/graphs/TopicsBarChart'
import Logo from '../assets/Logo'

function Slide6({ forwardHandler, backwardHandler }) {
    const topics = allTopics.map( obj => {
        return { 
            topic: obj.topic,
            positive: positiveTopics.filter( line => line.topic === obj.topic)[0].count,
            negative: negativeTopics.filter( line => line.topic === obj.topic)[0].count * -1,
            total: obj.count
        }
    })

    const topTenPositive = topics.filter( topic => topic.positive ).sort((a,b) => b.positive-a.positive).splice(0,7)
    const topTenNegative = topics.filter( topic => topic.negative ).sort((a,b) => a.negative-b.negative).splice(0,7)

    console.log('Here are the topics', topics)


    
    return (
        <div className='slide6'>
            <div className='presentation-title'>
                <Logo />
                <h2>4. Discovery mode - Topics</h2>
            </div>

            <div className='content-container'>
                <div className='left'>
                    
                    <p># Top 7 positive Topics</p>
                    ----------------------------------
                    {topTenPositive.map( (t,i) => (
                        <ul className='top-topics' key={t.topic}>
                            <li className='positive'>{i+1}. {t.topic}: </li>
                            <li className='positive'>{t.positive}</li>
                        </ul>

                    ))}
                    
                    <p># Top 7 negative Topics</p>
                    ----------------------------------
                    {topTenNegative.map( (t,i) => (
                        <ul className='top-topics' key={t.topic}>
                            <li className='negative'>{i+1}. {t.topic}: </li>
                            <li className='negative'>{t.negative * -1}</li>
                        </ul>

                    ))}
                    
                </div>

                <div className='right'>
                    <p>Topics frequencies</p>
                    <TopicsBarChart data={topics}/>
                </div>
            </div>

            <div className='presentaion-nav'>
                <Button clickHandler={backwardHandler}>&lt;
                </ Button>
                <Button clickHandler={forwardHandler}>Next
                </ Button>
            </div>
        </div>
    )
}

export default Slide6