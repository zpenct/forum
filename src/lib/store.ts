declare module 'next-auth' {
  interface Session {
    user: {
      accessToken: string
    }
  }
}