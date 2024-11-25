// 1. Arrow function hamda regular function ning barcha farqlarini batafsil yoritib bering. Buni pdf ga yuklanishi kerak. 
// 2. Quyidagi string metodlariga oid masalalarni ishlash, bunda module dan foydalanilsin


// Satrni teskari qilish: Berilgan satrni teskari tartibda qaytaring.

function wordss(str) {
    const words = str.split(' ');
    const first = words.shift();
    const last = words.pop();
    words.unshift(last);
    words.push(first);
    return words.join(' ');
  }
  
  function eper(str) {
    return str.split('').filter(char => char === char.toUpperCase() && char !== ' ').length;
  }
  
  
  
  function aab(a, b, b) {
    return a.split(b).join(b);
  }
  
  function countWords(str) {
    return str.split(' ').length;
  }
  
 
  
  function qaytariw(str) {
    return str.split(' ').map(word => word.split('').reverse().join('')).join(' ');
  }
  
  
  
  function indexiniTopish(str, a) {
    return str.indexOf(a);
  }
  

  
  function sortlaw(str) {
    const words = str.split(' ');
    return words.sort().join(' ');
  }
  
 
  
  function engkicigi(str, b) {
    return str.length > b ? str.slice(0, b) + '...' : str;
  }
  

  
  function qoshiw(str, a) {
    return str.split(' ').join(a);
  }
  
  function abs(str) {
    return str.toUpperCase();
  }
  

  
  function boshJoylar(str) {
    return str.trim();
  }
  
  function abbs(arr, key) {
    return Math.max(...arr.map(obj => obj[key]));
  }
  
  function kalitlari(arr, key) {
    return arr.sort((a, b) => a[key] - b[key]);
  }
  
  function kalit(arr, key) {
    return arr.reduce((sum, obj) => sum + obj[key], 0);
  }
  
  function filtter(arr, key, a) {
    return arr.filter(obj => obj[key] === a);
  }
  
 
  
  function add(arr, a, b) {
    return arr.map(obj => ({ ...obj, [a]: b }));
  }
  
  function yngilash(arr, a, b) {
    return arr.map(obj => obj.key === a ? { ...obj, ...b } : obj);
  }
  
  function ochirish(arr, key, value) {
    return arr.filter(obj => obj[key] !== value);
  }
  