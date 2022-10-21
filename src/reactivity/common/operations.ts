export function incrementDecrement(operation: string, value: number) {
  switch (operation) {
    case 'increment':
      value++
      break

    case 'decrement':
      value--
      break

    default:
      value = 0
  }

  return value
}
