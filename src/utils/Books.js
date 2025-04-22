import thinkingFastSlow from '../assets/thinkingFastSlow.jpeg';
import theDiaryOfYoungGirl from '../assets/The Diary of a Young Girl.jpeg'
import thePowerOfHabbit from '../assets/The Power of Habit.jpeg'
import braveNewWorld from '../assets/Brave New World.jpeg'
import becoming from '../assets/Becoming.jpeg'


export const categories = ["Fiction", "Non-Fiction", "Sci-Fi", "Biography", "History"];

export const popularBooks = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    category: "Fiction",
    description: "A classic novel set in the 1920s.",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c"
  },
  {
    id: 2,
    title: "Sapiens",
    author: "Yuval Noah Harari",
    category: "Non-Fiction",
    description: "A brief history of humankind.",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?w=500&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Dune",
    author: "Frank Herbert",
    category: "Sci-Fi",
    description: "Epic science fiction saga.",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794"
  },
  {
    id: 4,
    title: "Educated",
    author: "Tara Westover",
    category: "Biography",
    description: "A memoir of a woman who grew up in a survivalist family.",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?w=500&auto=format&fit=crop" 
  },
  {
    id: 5,
    title: "1984",
    author: "George Orwell",
    category: "Fiction",
    description: "A dystopian novel about surveillance and control.",
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=500&auto=format&fit=crop"
  },
  {
    id: 6,
    title: "Becoming",
    author: "Michelle Obama",
    category: "Biography",
    description: "Memoir of the former First Lady of the United States.",
    rating: 4.9,
    image: becoming
  },
  {
    id: 7,
    title: "Brave New World",
    author: "Aldous Huxley",
    category: "Sci-Fi",
    description: "A vision of a futuristic society ruled by technology and control.",
    rating: 4.2,
    image: braveNewWorld
  },
  {
    id: 8,
    title: "The Power of Habit",
    author: "Charles Duhigg",
    category: "Non-Fiction",
    description: "Why we do what we do and how to change it.",
    rating: 4.3,
    image: thePowerOfHabbit
  },
  {
    id: 9,
    title: "The Diary of a Young Girl",
    author: "Anne Frank",
    category: "History",
    description: "The wartime diary of Anne Frank.",
    rating: 4.8,
    image: theDiaryOfYoungGirl
  },
  {
    id: 10,
    title: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
    category: "Non-Fiction",
    description: "Insights into human thinking and decision making.",
    rating: 4.4,
    image: thinkingFastSlow
  }
];
