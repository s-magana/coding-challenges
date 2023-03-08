// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

// More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

// Example: (input --> output)

// "ATTGC" --> "TAACG"
// "GTAT" --> "CATA"

// My solutions: 
function DNAStrand(dna){
    let compDNA = dna.split('').map(e => {
      if (e === 'A') {
        return 'T'
      } else if (e === 'T') {
        return 'A'
      } else if (e === 'C') {
        return 'G'
      } else {
        return 'C'
      }
    }).join('')
    return compDNA
}

function DNAStrand(dna) {
    return dna.replace(/./g, c => DNAStrand.pairs[c])
  }
  
  DNAStrand.pairs = {
    A: 'T',
    T: 'A',
    C: 'G',
    G: 'C',
}