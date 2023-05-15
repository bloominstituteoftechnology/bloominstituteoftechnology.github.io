/* ❗ DO NOT CHANGE THIS FILE */
/* ❗ DO NOT CHANGE THIS FILE */
/* ❗ DO NOT CHANGE THIS FILE */

const quotes = [
  {
    id: 23,
    quote: "Any sufficiently advanced technology is indistinguishable from magic.",
    author: "Arthur C. Clarke",
    date: "1973"
  },
  {
    id: 42,
    quote: "The best way to predict the future is to invent it.",
    author: "Alan Kay",
    date: "1971"
  },
  {
    id: 10,
    quote: "It's not at all important to get it right the first time. It's vitally important to get it right the last time.",
    author: "Andrew Hunt and David Thomas",
    date: "1999"
  },
  {
    id: 88,
    quote: "I'm not a great programmer; I'm just a good programmer with great habits.",
    author: "Kent Beck",
    date: "2004"
  },
  {
    id: 55,
    quote: "The most damaging phrase in the language is: 'It's always been done that way.'",
    author: "Grace Hopper",
    date: "1978"
  },
  {
    id: 11,
    quote: "Optimism is an occupational hazard of programming: feedback is the treatment.",
    author: "Kent Beck",
    date: "2003"
  },
  {
    id: 77,
    quote: "The best thing about a boolean is even if you are wrong, you are only off by a bit.",
    author: "Anonymous",
    date: null
  },
  {
    id: 8,
    quote: "The most important single aspect of software development is to be clear about what you are trying to build.",
    author: "Bjarne Stroustrup",
    date: null
  },
  {
    id: 13,
    quote: "Programs must be written for people to read, and only incidentally for machines to execute.",
    author: "Harold Abelson and Gerald Jay Sussman",
    date: "1984"
  },
  {
    id: 66,
    quote: "You might not think that programmers are artists, but programming is an extremely creative profession. It's logic-based creativity.",
    author: "John Romero",
    date: null
  }
]

const adverbs = [
  "innovatively",
  "strategically",
  "synergistically",
  "dynamically",
  "holistically",
  "scalably",
  "proactively",
  "disruptively",
  "out-of-the-boxedly",
  "agilely"
]

const nouns = [
  "solutions",
  "paradigms",
  "platforms",
  "strategies",
  "initiatives",
  "synergies",
  "deliverables",
  "value propositions",
  "ecosystems",
  "mindshare"
]

const verbs = [
  "leverage",
  "optimize",
  "streamline",
  "innovate",
  "disrupt",
  "synergize",
  "transform",
  "empower",
  "monetize",
  "evolve"
]

const people = [
  {
    "id": 23,
    "fname": "Alex",
    "lname": "Lee",
    "dateOfBirth": "1985-10-13",
    "friends": [8, 11, 34]
  },
  {
    "id": 1,
    "fname": "Emily",
    "lname": "Nguyen",
    "dateOfBirth": "1992-04-02",
    "friends": []
  },
  {
    "id": 13,
    "fname": "Carlos",
    "lname": "Garcia",
    "dateOfBirth": "1978-07-23",
    "friends": [1, 2, 14]
  },
  {
    "id": 34,
    "fname": "Ashley",
    "lname": "Kim",
    "dateOfBirth": "1991-11-06",
    "friends": [23, 11, 80]
  },
  {
    "id": 2,
    "fname": "Mohammed",
    "lname": "Ali",
    "dateOfBirth": "1989-02-28",
    "friends": [5, 6, 13, 14]
  },
  {
    "id": 11,
    "fname": "Sarah",
    "lname": "Johnson",
    "dateOfBirth": "1986-09-03",
    "friends": [1, 23, 34]
  },
  {
    "id": 8,
    "fname": "Jason",
    "lname": "Wong",
    "dateOfBirth": "1983-12-25",
    "friends": [23, 14]
  },
  {
    "id": 80,
    "fname": "Samantha",
    "lname": "Singh",
    "dateOfBirth": "1980-06-16",
    "friends": [34, 99]
  },
  {
    "id": 14,
    "fname": "Michael",
    "lname": "Chen",
    "dateOfBirth": "1995-01-18",
    "friends": [13, 2, 8]
  },
  {
    "id": 99,
    "fname": "Kimberly",
    "lname": "Ng",
    "dateOfBirth": "1987-08-09",
    "friends": [80]
  },
  {
    "id": 6,
    "fname": "Luis",
    "lname": "Gonzalez",
    "dateOfBirth": "1990-03-29",
    "friends": []
  },
  {
    "id": 5,
    "fname": "Jessica",
    "lname": "Taylor",
    "dateOfBirth": "1982-05-08",
    "friends": [2, 15]
  },
  {
    "id": 15,
    "fname": "William",
    "lname": "Brown",
    "dateOfBirth": "1997-12-17",
    "friends": [5, 7, 99]
  },
  {
    "id": 7,
    "fname": "Maria",
    "lname": "Rodriguez",
    "dateOfBirth": "1988-08-01",
    "friends": [6, 15]
  },
  {
    "id": 12,
    "fname": "Daniel",
    "lname": "Garcia",
    "dateOfBirth": "1981-06-22",
    "friends": []
  }
]

if (typeof module !== 'undefined' && module.exports)
  module.exports = { quotes, adverbs, nouns, verbs, people }
