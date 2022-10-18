export function incrementDecrement(operation: string, value: number) {
  let newValue = 0

  switch (operation) {
    case 'increment':
      newValue = value + 1
      break

    case 'decrement':
      newValue = value - 1
      break
  }

  return newValue
}
