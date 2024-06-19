function isNumberInt(number){
    if(!Number.isInteger(number)) {throw new Error(`${number} не целое`);}
    else {return number;}
}

try {
    console.log(isNumberInt(65));
    console.log(isNumberInt(65.875)); // Генерируется ошибка: The provided value is not an integer.
  } catch (error) {
    console.error(error.message);
  }