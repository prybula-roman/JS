const tweets = [
  { id: "000", likes: 5, tags: ["js", "nodejs"] },
  { id: "001", likes: 2, tags: ["html", "css"] },
  { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
  { id: "003", likes: 8, tags: ["css", "react"] },
  { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
];
//найти общее количество лайков в массиве
//1 for
let totalLikes=0;
for(let i=0;i!=tweets.length;i++){
  totalLikes+=tweets[i].likes
}
console.log(totalLikes)

totalLikes=0;
//2 forEach
tweets.forEach((element)=>{
totalLikes+=element.likes
})
console.log(totalLikes)
totalLikes=0
//3 reduce
totalLikes=tweets.reduce((totalLikes,element)=>{
return totalLikes+element.likes
},0)
console.log(totalLikes)
//собрать все теги tags каждого поста
const totalTags=tweets.reduce((accum,element)=>{
   accum.push(...element.tags)
   return accum
},[]) 

console.log(totalTags)
/////////////////////////////////////////

let tags = tweets.reduce((allTags, tweet) => {
  allTags.push(...tweet.tags);

  return allTags;
}, []);

console.log(tags);
// Наверное сбор тегов не одиночная операция, поэтому напишем функцию
// для сбора тегов из коллекции
//После того, как мы собрали все теги из постов, хорошо бы было посчитать количество уникальных тегов в массиве. И снова reduce тут как тут.
const getTags = tweets =>
  tweets.reduce((allTags, tweet) => {
    allTags.push(...tweet.tags);

    return allTags;
  }, []);

 tags = getTags(tweets);

// Вынесем callback-функцию отдельно, а в reducе передадим ссылку на нее.
// Это стандартная практика если callback-функция довольно большая.

// Если в объекте-аккумуляторе acc нету своего свойства с ключем tag,
// то создаем его и записывает ему значение 0.
// В противном случае увеличиваем значение на 1.
const getTagStats = (acc, tag) => {
  console.log(acc)
  console.log(tag)
  console.log(acc.hasOwnProperty(tag))
  console.log(acc[tag])
  console.log('\n\n')
  if (!acc.hasOwnProperty(tag)) {
    acc[tag] = 0;
  }

  acc[tag] += 1;

  return acc;
};

// Начальное значение аккумулятора это пустой объект {}
const countTags = tags => tags.reduce(getTagStats, {});

const tagCount = countTags(tags);
console.log(tagCount);