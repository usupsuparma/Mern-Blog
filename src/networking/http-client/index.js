export const StatusCode = {
    Ok: 200,
    BadRequest: 400,
    Unauthorized: 401,
    ServerError: 500,
  };
  
  async function Post(url, body) {
    const options = {
      method: 'Post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: body != null ? JSON.stringify(body)
    };
    // @ts-ignore
    return await fetch(url, options);
  }
  
  async function Put(url, body) {
    const options = {
      method: 'Put',
      headers: {
        'Content-Type': 'application/json',
      },
      body: body != null ? JSON.stringify(body)
    };
    return await fetch(url, options);
  }
  
  class Request {
    url;
    method;
    headers;
    body;
  
    constructor(url, method) {
      this.url = url;
      this.method = method;
      this.headers = {};
    }
  
    static post(url) {
      return new Request(url, 'Post');
    }
  
    static put(url) {
      return new Request(url, 'Put');
    }
  
    static get(url) {
      return new Request(url, 'Get');
    }
  
    static delete(url) {
      return new Request(url, 'Delete');
    }
  
    jsonBody(body) {
      this.headers['Content-Type'] = 'application/json';
      this.body = JSON.stringify(body);
      return this;
    }
  
    // @ts-ignore
    multipartBody(body) {
      this.headers['Content-Type'] = 'multipart/form-data';
      this.body = body;
      return this;
    }
  
    bearerToken(token) {
      // @ts-ignore
      this.headers.Authorization = 'Bearer ' + token;
      return this;
    }
  
    header(key, value) {
      this.headers[key] = value;
      return this;
    }
  
    // @ts-ignore
    async call() {
      const options = {
        method: this.method,
        headers: this.headers,
        body: this.body,
      };
  
      // @ts-ignore
      return await fetch(this.url, options);
    }
  }
  
  export default {
    Post,
    Put,
    Request,
  };
  