function isPrime(n){
    if(n<2){
        return false

    }

    for(let i=2; i<n; i++){
    if(n%i===0){
        return false

    }else{
        return true
    }
}
}

const number = 44;
let isPrime = true;

for (let i = 2; i <= number / 2; i++) {
  if (number % i === 0) {
    isPrime = false;
    break;
  }
}

if (isPrime) {
  console.log("Liczba jest pierwsza");
} else {
  console.log("Liczba nie jest pierwsza");
}

isPrimeFlag= true
function isPrime(n){
    if(n<2){
        isPrimeFlag = false
    }
    for(let i=2; i<n; i++){
        if(n%i===0){
            isPrimeFlag = false;
            break
        }
        isPrimeFlag = ture
    }
    return isPrimeFlag;
    
}