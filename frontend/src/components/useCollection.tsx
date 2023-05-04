import { useState, useEffect } from 'react';

function useCollection<T>(collectionName: T) {
    const [data, setData] = useState([]);
  
    useEffect(() => {
      async function fetchData() {
        // Simulate fetching data from a Firestore-like database
        const response = await fetch(`/api/${collectionName}`);
        const data = await response.json();
        setData(data);
      }
  
      fetchData();
    }, [collectionName]);
  
    return data;
  }
  
  export default useCollection;