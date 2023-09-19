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
  const addMatch = query.match(/What is (\d+) plus (\d+)/);
  if (addMatch) {
    const x: number = parseInt(addMatch[1]);
    const y: number = parseInt(addMatch[2]);
    return (x+y).toString();
  }
  const multMatch = query.match(/What is (\d+) multiplied by (\d+)/);
  if (addMatch) {
    const x: number = parseInt(addMatch[1]);
    const y: number = parseInt(addMatch[2]);
    return (x*y).toString();
  }

  // if (query.toLocaleLowerCase().includes("which of the following numbers is the largest: ")) {
  //   const numbers = query.match('/\d+/')!
  //   console.log((numbers));
  //   numbers?.map(parseInt)!;    
  //   return Math.max(...numbers).toString();
  // }
  return "";
}

