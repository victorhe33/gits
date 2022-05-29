class HashTable{
  // default bucket size 31
  constructor(size=31){
    this.buckets = new Array(size);
  }

  hash(key){
    // create a hashed number value from the string
    const charArray = key.split('').map(char => char.charCodeAt(0));
    // djb2 hashing algorithm
    const hashCode = charArray.reduce((acc, cVal) => ((acc << 5) + acc) + cVal, 5381);
  
    // get an index from its value within the length of the buckets array
    const index = hashCode % this.buckets.length;
    return index < 0 ? index*-1 : index;
  }

  insert(key,value){
    // get the index
    const index = this.hash(key);
    // create a new bucket if one does not exist
    if(!this.buckets[index]){
      this.buckets[index] = [];
    }
    // add the key value pair to the bucket
    this.buckets[index].push([key,value]);
    return index;
  }

  search(key){
    // index of the bucket
    const index = this.hash(key);
    // if there is no bucket
    if(!this.buckets[index]) return null;
    // Otherwise, check the bucket(s)
    for(let bucket of this.buckets[index]){
      // if key  matches, return it's value
      if (bucket[0]===key){
        return bucket[1]; // bucket = [key, value]
      }
    }
    return null;
  }

  delete(key){
    // check if the bucket exists with a quick search
    if (this.search(key)) {
      // store the deleted bucket value and its key in a variable
      const deletedBucket = [key, this.search(key)];
      // get the index
      const index = this.hash(key);
      // remove the bucket from the array its index
      const newBuckets = this.buckets[index].filter(bucket => bucket[0]!==key);
      this.buckets[index] = newBuckets;
      // Return the deleted bucket 
      return deletedBucket;
    }
    console.log('Bucket not found');
    return null;
  }
}




const myHashTable = new HashTable(13);




myHashTable.insert('adam', 'ahonore42');
myHashTable.insert('michael', 'mlackey9601');
myHashTable.insert('andre', 'anpato');
myHashTable.insert('lizz', 'Lizzwest');
myHashTable.insert('hunter', 'whlong1');
myHashTable.insert('andrew', 'andrewliu1988');
myHashTable.insert('jonte', 'JYoung554');
myHashTable.insert('faryal', 'f-ansari');
myHashTable.insert('siobahn', 'siobahnschuck');
myHashTable.insert('christina', 'hipstina');
myHashTable.insert('luke', 'LukeArenas');
myHashTable.insert('nick', 'NickWill24');
myHashTable.insert('queenie', 'queeniewilliams');

console.log("first: ",myHashTable);
console.log('')
console.log('')

myHashTable.insert('aaaaa', 'aaaaa');
myHashTable.insert('bbbbb', 'bbbbb');
myHashTable.insert('ccccc', 'ccccc');
myHashTable.insert('ddddd', 'ddddd');
myHashTable.insert('eeeee', 'eeeee');
myHashTable.insert('fffff', 'fffff');
myHashTable.insert('ggggg', 'ggggg');
myHashTable.insert('hhhhh', 'hhhhh');
myHashTable.insert('iiiii', 'iiiii');
myHashTable.insert('jjjjj', 'jjjjj');
myHashTable.insert('kkkkk', 'kkkkk');
myHashTable.insert('lllll', 'lllll');
myHashTable.insert('mmmmm', 'mmmmm');
myHashTable.insert('nnnnn', 'nnnnn');
myHashTable.insert('ooooo', 'ooooo');
myHashTable.insert('ppppp', 'ppppp');
myHashTable.insert('qqqqq', 'qqqqq');
myHashTable.insert('rrrrr', 'rrrrr');
myHashTable.insert('sssss', 'sssss');
myHashTable.insert('ttttt', 'ttttt');
myHashTable.insert('uuuuu', 'uuuuu');
myHashTable.insert('vvvvv', 'vvvvv');
myHashTable.insert('wwwww', 'wwwww');
myHashTable.insert('xxxxx', 'xxxxx');
myHashTable.insert('yyyyy', 'yyyyy');
myHashTable.insert('zzzzz', 'zzzzz');

console.log("second: ",myHashTable);
console.log('')
console.log('')

console.log("finding andre: ", myHashTable.search('andre'));
console.log('')
console.log('')

myHashTable.delete('adam');
myHashTable.delete('hunter');
myHashTable.delete('lizz');

console.log("finding adam: ", myHashTable.search('adam'));
console.log('');
console.log('');

myHashTable.delete('qqqqq');
myHashTable.delete('rrrrr');
myHashTable.delete('sssss');
myHashTable.delete('ttttt');
myHashTable.delete('uuuuu');
myHashTable.delete('vvvvv');
myHashTable.delete('wwwww');
myHashTable.delete('xxxxx');
myHashTable.delete('yyyyy');
myHashTable.delete('zzzzz');

console.log("final: ", myHashTable);