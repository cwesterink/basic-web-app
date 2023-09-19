export default function QueryProcessor(query: string): string {
  query = query.toLocaleLowerCase();
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }
  if (query.toLowerCase().includes("andrew")) {
    return (
      "cwesteri"
    );
  }
  if (query.toLocaleLowerCase().includes("what is your name?")) {
    return 'c'
  }
  const maxMatch = query.match(/which of the following numbers is the largest: (\d+), (\d+), (\d+)?/);
  if (maxMatch) {
    const x: number = parseInt(maxMatch[1]);
    const y: number = parseInt(maxMatch[2]);
    return Math.max(x,y).toString();
  }
  const addMatch = query.match(/what is (\d+) plus (\d+)/);
  if (addMatch) {
    const x: number = parseInt(addMatch[1]);
    const y: number = parseInt(addMatch[2]);
    return (x+y).toString();
  }
  const multMatch = query.match(/what is (\d+) multiplied by (\d+)/);
  if (multMatch) {
    const x: number = parseInt(multMatch[1]);
    const y: number = parseInt(multMatch[2]);
    return (x*y).toString();
  }
  const minusMatch = query.match(/what is (\d+) minus (\d+)/);
  if (minusMatch) {
    const x: number = parseInt(minusMatch[1]);
    const y: number = parseInt(minusMatch[2]);
    return (x-y).toString();
  }
  const primeMatch = query.match(/which of the following numbers are primes: (\d+), (\d+), (\d+), (\d+), (\d+)?/);

  if (primeMatch) {

    const vals = []
    for (let index = 1; index < 6; index++) {
      const element = parseInt(primeMatch[index]);
      vals.push(element);
    }
    for (const num of vals) {
      if (isPrime(num)) {
        return num.toString();
      }
    }
  }


  return "";
}


function isPrime(num: number): boolean {
  // Handle cases for 0 and 1
  if (num <= 1) {
    return false;
  }

  // Check for divisibility by numbers from 2 to the square root of num
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false; // If num is divisible by i, it's not prime
    }
  }

  return true; // If no divisors were found, num is prime
}