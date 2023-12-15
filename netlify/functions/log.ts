export default async (event: unknown, context: unknown) => {
  console.log('This will be logged in Netlify Functions Logs', event, context)

  // Your server-side logic here

  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Function executed successfully' }),
  }
}
