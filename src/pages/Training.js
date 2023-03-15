import useLoadCleanFile from '../hooks/training/useLoadCleanFile';
import useCreateThreeBasicObjects from '../hooks/training/useCreateThreeBasicObjects';
import useCreateBasicDataObject from '../hooks/training/useCreateBasicDataObject';
import './Classifier.css'

function Training() {

    // 1. load and clean data
    const { loadFileHandler, data } = useLoadCleanFile();

    // 2. transform to array of objects {sentiment: string, words: [array]}
    const basicDataArr = useCreateBasicDataObject(data);
    console.log('basicDataArr', basicDataArr);

    // 3. create three sentiments groups & classifier
    const classifier = useCreateThreeBasicObjects(basicDataArr);
    console.log('classifier', classifier)



    return (
        <div className='classifier'>
            <h1>Model Training by Naive Bayes Classifier</h1>
            <form>
                <input type="file" onChange={loadFileHandler} />
            </form>
            <div className='classified-feedbacks'>
                {classifier &&
                    <div>
                        <br />
                        <h3>Prior</h3>
                        <p><strong> (+):</strong> {classifier[0].positivePrior.toFixed(3)}
                            <strong> (-):</strong> {classifier[0].negativePrior.toFixed(3)}
                            <strong> (0):</strong> {classifier[0].neutralPrior.toFixed(3)}</p>

                        <br />
                        <h3>Likelihood</h3>
                    </div>}
                <div className='likelihood-data'>
                    {
                        classifier && classifier.sort((a, b) => b.frequencyAll - a.frequencyAll)
                            .map((word, index) => (
                                <div key={word.word}>
                                    <p>{index + 1}: <span className='pink-big-text'>{word.word}: </span>

                                        <strong> (+):</strong> {word.likelihoodPositive.toFixed(3)}
                                        <strong> (-):</strong> {word.likelihoodNegative.toFixed(3)}
                                        <strong> (0):</strong> {word.likelihoodNeutral.toFixed(3)}
                                        <strong> (#):</strong> {word.frequencyAll}

                                    </p>
                                </div>
                            ))
                    }
                </div>
            </div>





        </div>
    )
}

export default Training