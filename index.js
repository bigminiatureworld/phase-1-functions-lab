

function distanceFromHqInBlocks(location) {
    if (location <= 42) 
    return 42 - location
    else {
        return location - 42
    }
}
//distanceFromHqInBlocks()
console.log(location, "???")

function distanceFromHqInFeet(blockNumber) {
   return distanceFromHqInBlocks (blockNumber) * 264
}

//Calculates the number of feet a passenger travels given a starting block and an ending block
function distanceTravelledInFeet(start, destination) {
    if (start >= destination) {
        return (start - destination) * 264
    }
    else 
        return (destination - start) * 264
  }

 function calculatesFarePrice(startBlock, endBlock ) {
    let distance = distanceTravelledInFeet( startBlock, endBlock )
    console.log(startBlock)
    if ( distance <= 400 ) {
      return 0
    } else if ( distance <= 2000 ) {
      return ( distance - 400 ) * .02
    } else if (distance <= 2500) {
      return 25
    } else {
      return 'cannot travel that far'
      
    }
  }



























//     function distanceFromHqInBlocks( location ) {

//     if ( location <= 42 ) 
//         return 42 - location
//     else 
//         return location - 42 
//     }

//     function distanceFromHqInFeet( blockNumber ) {
//         return distanceFromHqInBlocks ( blockNumber ) * 264
//     }

//   function distanceTravelledInFeet(start, destination) {
//     if ( start >= destination ) {
//         return ( start - destination ) * 264 
//     }  else {
//         return (destination - start ) * 264
//     } 
//   }

//  function calculatesFarePrice(startBlock, endBlock ) {
//     let distance = distanceTravelledInFeet( startBlock, endBlock )
//     console.log('distance')
//     if ( distance <= 400 ) {
//       return 0
//     } else if ( distance <= 2000 ) {
//       return ( distance - 400 ) * .02
//     } else if (distance <= 2500) {
//       return 25
//     } else {
//       return 'cannot travel that far'
      
//     }
//   }

