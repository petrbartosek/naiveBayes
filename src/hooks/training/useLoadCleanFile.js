import { useState } from 'react';

function useLoadCleanFile() {
    const [data, setData ] = useState(null);

    const loadFileHandler = (e) => {
        const data = e.target.files[0];
        let reader = new FileReader();  
        reader.readAsText(data);
        reader.onload = () => {
                let lines = reader.result
                .replaceAll(",","")
                .replaceAll(".","")
                .replaceAll('"','')
                .toLowerCase()
                .split(/\r?\n/);
            lines.pop(); // remove last line
            lines.shift();  // remove first line
            setData(lines);
        }
    }

  return { loadFileHandler, data }
}

export default useLoadCleanFile