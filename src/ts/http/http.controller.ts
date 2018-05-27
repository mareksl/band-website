export class HttpController {
  //   eventsUrl = 'http://localhost:3000';
  //   getEvents() {
  //     fetch(this.eventsUrl).then(events => {});
  //   }
  getEventsDummy() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          page: 0,
          total: 1,
          events: [
            {
              _id: '5ad9bda2c7fac72de8dcc286',
              location: 'Sopot',
              date: 1524392100000.0,
              description: 'Lorem ipsum',
              link: 'https://google.com',
              __v: 0
            },
            {
              _id: '5ad9bda6c7fac72de8dcc287',
              location: 'Sopot',
              date: 1524305700000.0,
              description: 'Dolor sit amet',
              link: 'https://google.com',
              __v: 0
            },
            {
              _id: '5ad9bdabc7fac72de8dcc288',
              location: 'Gdynia',
              date: 1523873820000.0,
              description: 'Consectetur',
              link: 'https://google.com',
              __v: 0
            },
            {
              _id: '5b02c87a60e7f10f5c808f74',
              location: 'Random',
              date: 1526908920000.0,
              __v: 0
            },
            {
              _id: '5b02ca6c60e7f10f5c808f9e',
              location: 'Random',
              date: 1526909520000.0,
              link: 'https://google.com',
              __v: 0
            },
            {
              _id: '5b02ca7760e7f10f5c808f9f',
              location: 'Warszawa',
              date: 1526909520000.0,
              description: 'Test',
              link: 'https://google.com',
              __v: 0
            }
          ]
        });
      }, 500);
    });
  }
}
