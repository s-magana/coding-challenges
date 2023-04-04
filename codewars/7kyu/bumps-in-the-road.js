// Your car is old, it breaks easily. The shock absorbers are gone and you think it can handle about 15 more bumps before it dies totally.

// Unfortunately for you, your drive is very bumpy! Given a string showing either flat road (_) or bumps (n). If you are able to reach home safely by encountering 15 bumps or less, return Woohoo!, otherwise return Car Dead

// My solution:
function bump(x){
    let sum = 0
    let arr = x.split('').forEach(e => {
      if (e === 'n') {
        sum++
      }
    })
    if (sum <= 15) {
      return 'Woohoo!'
    } else {
      return 'Car Dead'
    }
}

const bump = x => x.split('n').length > 15 ? "Car Dead" : "Woohoo!"