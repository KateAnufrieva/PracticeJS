let i = 0;
function Operation1() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log('Operation 1 completed');
        resolve(1);
      }, 1000);
    });
  }
  
  function Operation2(previousResult) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log('Operation 2 start with', previousResult);
        resolve(previousResult + 1);
      }, 1000);
    });
  }
  
  function Operation3(previousResult) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log('Operation 3 start with', previousResult);
        resolve(previousResult + 1);
      }, 1000);
    });
  }
  
  function Operations() {
    Operation1()
      .then(result1 => {
        return Operation2(result1);
      })
      .then(result2 => {
        return Operation3(result2);
      })
      .then(result3 => {
        console.log('All operations completed with final result:', result3);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }
  
  Operations();
  