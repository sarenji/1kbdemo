d=document,
// "chain". Stores 2-grams (2 words) with a list of possible words.
c={},
// "words". Stores words we've seen so far.
w=[],
// Store spaces in a variable to save a few bytes.
p=' ',
// Feed words from this element to the Markov chain.
r=d.getElementById('x').innerHTML.split(/\s+/),
// Number of words to generate.
n=999
// Loop until there are no more words to feed to the chain.
while(b=r.shift()){
  // Create a 2-gram.
  b+=p+r[0];
  // Initialize an array if there isn't one, then add 3rd word to list.
  (c[b]=c[b]||[]).push(b=r[1])
  // Also add 3rd word to a list of words (for use later).
  w.push(b)
}

while(--n){
  // Finds the list of random words to use, either from an existing
  // list in the 2-gram dictionary, or from the corpus of existing words.
  // Also, moves the r[0] pointer to become r[1].
  a=c[r[0]+p+(r[0]=r[1])]||w
  // Writes a random word to the screen, and the
  // r[1] pointer becomes that word. And so on.
  d.write((r[1]=a[Math.random()*a.length|0])+p)
}
