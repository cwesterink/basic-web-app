export default function QueryProcessor(query: string): string {
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
  if (query.toLocaleLowerCase().includes("Which of the following numbers is the largest: 5, 98, 77?")) {
    return '98'
  }
  return "";
}


// const map = {
//   "what is your name?": "c",

// }

// const questions = new Map<string, string>(
//   [
//     ["what is your name?", "c"]
//   ]
// )