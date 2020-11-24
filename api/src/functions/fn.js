export const handler = (event, context, callback) => {
  console.log(+ new Date())
  return callback(null, {
    statusCode: 200,
    body: + new Date()
  })
}
