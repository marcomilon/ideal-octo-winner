import type { Schema } from "../../data/resource"

export const handler: Schema["sayHello"]["functionHandler"] = async (event) => {
  // arguments typed from `.arguments()`
  const { name } = event.arguments

  console.log(`Hello, ${process.env.NAME}!`)
  // return typed from `.returns()`
  return `Hello, ${name}!`
}