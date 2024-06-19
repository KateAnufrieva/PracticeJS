async function fetchData(url) {
  try {

    let response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
   
    let data = await response.json();
    return data;
  } catch (error) {
    
    console.error('Error fetching data:', error);
    throw error; 
  }
}


const apiUrl = 'https://jsonplaceholder.typicode.com/todos/1';

fetchData(apiUrl)
  .then(data => {
    console.log('Data received:', data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
