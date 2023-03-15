function useCreateBasicDataObject(arr) {
    if (arr){
        const basicDataObject = arr.map(line => {
            const string = line.toString().split(";")

            return {
                sentiment: string[0] ? string[0] : null,
                words: string[1] ? string[1].toString().split(" ") : null
            }
        })
        return basicDataObject;
    }
}

export default useCreateBasicDataObject