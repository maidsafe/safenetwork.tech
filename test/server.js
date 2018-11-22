import handler from 'serve-handler'
import http from 'http'
import path from 'path'

export default class Server {
  constructor(port) {
    this.serve = null
    this.port = port || 3008
  }

  getPort() {
    return this.port
  }

  start() {
    return new Promise((resolve) => {
      try {
        this.server = http.createServer((request, response) => handler(request, response, {
          public: 'dist'
        }))
        this.server.listen(this.port, () => {
          console.log(`Server running at http://localhost:${this.port}`)
          resolve()
        })
      } catch(err) {
        console.log('Server Error :: ', err)
      }
    })
  }

  stop() {
    this.server.close();
  }
}
