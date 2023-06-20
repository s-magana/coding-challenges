// Make a function called crossProduct that takes two 3 dimensional vectors (in the form of two arrays) and returns their cross product. You need to check if the passed arguments are of the expected format, otherwise throw the message: "Arguments are not 3D vectors!".

// crossProduct([1,0,0],[0,1,0]) //should return [0,0,1]
// crossProduct('gobbledigook', [1,1,1]) //should throw the string "Arguments are not 3D vectors!"
// Your function should handle non integers.

// More info on cross products: https://en.wikipedia.org/wiki/Cross_product

// crossprod([1,0,0], [0,1,0], 3, 3)         /* should return [0,0,1] */
// crossprod([1,2,3,4,5], [5,4,3,2,1], 5, 5) /* should return NULL */
// crossprod([6,6,6], NULL, 3, 3)            /* should return NULL */
// crossprod(NULL, NULL, 3, 3)               /* should return NULL */

// My solution: 
function crossProduct (vector1, vector2) {
    if (!(vector1 instanceof Array) || !(vector2 instanceof Array) || vector1.length !== 3 || vector2.length !== 3) {
      throw "Arguments are not 3D vectors!"
    }
    return [(vector1[1]*vector2[2] - vector2[1]*vector1[2]), (vector1[2]*vector2[0] - vector2[2]*vector1[0]), (vector1[0]*vector2[1] - vector2[0]*vector1[1])]
}

function crossProduct(v1, v2) {
    if (!v1 && !v2 || v1.length !== 3 || v2.length !== 3 || ![...v1, ...v2].every(v => typeof v === 'number')) throw 'Arguments are not 3D vectors!';
    const [ a1, a2, a3 ] = v1;
    const [ b1, b2, b3 ] = v2;
    return [ 
      a2 * b3 - a3 * b2, 
      a3 * b1 - a1 * b3, 
      a1 * b2 - a2 * b1
    ];
}