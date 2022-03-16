module.exports = function solution(key_array: number[]): number {
  // The length of the array counts for each 1second it takes to press each key
  let counter: number = key_array.length

  if (key_array.length <= 2) { return counter }

  // Replace all 0's to 10 so maths become easier
  const values = key_array.map(x => x === 0 ? 10 : x)

  // We will assume that the the left hand is on the first key and the right will be on the second
  let left_hand = values[0]
  let right_hand = values[1]

  // Under the assumption that left and right have already been pressed we will loop from the third key to the end of the input
  for (let i = 2; i < values.length; i++) {
    const distance_from_left_hand: number = Math.abs(values[i] - left_hand)
    const distance_from_right_hand: number = Math.abs(values[i] - right_hand)

    // If left hand is the less distance than the right hand then add left distance to counter and move left hand to new value
    if (distance_from_left_hand < distance_from_right_hand) {
      // console.log("Left: " + distance_from_left_hand)
      left_hand = values[i]
      counter += distance_from_left_hand
    }

    // If right hand is the less distance than the left hand then add right distance to counter and move left hand to new value
    if (distance_from_right_hand < distance_from_left_hand) {
      // console.log("Right: " + distance_from_right_hand)
      right_hand = values[i]
      counter += distance_from_right_hand
    }

    // If distance is equal then check if left is closer to the next step or right ensuring next move is most effienct
    if (distance_from_left_hand === distance_from_right_hand) {
      const left_hand_next: number = Math.abs(values[i + 1] - left_hand)
      const right_hand_next: number = Math.abs(values[i + 1] - right_hand)

       // If left hand is further way than the right hand then add left distance to counter and move left hand to new value
      if (left_hand_next > right_hand_next) {
        // console.log("Left: " + distance_from_left_hand)
        left_hand = values[i]
        counter += distance_from_left_hand
      }

      // If right hand is further way than the left hand then add right distance to counter and move left hand to new value
      if (right_hand_next > left_hand_next) {
        // console.log("Right: " + distance_from_right_hand)
        right_hand = values[i]
        counter += distance_from_right_hand
      }
    }
  }

  return counter
}