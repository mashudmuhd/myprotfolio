export default {

  
  nav: {
    logo: 'CC',
    links: [
      { text: 'Work', to: 'mywork' },
      { text: 'Contact', to: 'mycontact' },
    ],
  },
  header: {
    img:
      'https://scontent.fcjb3-1.fna.fbcdn.net/v/t31.18172-8/24883633_1523279904419864_8989271431105942210_o.jpg?_nc_cat=104&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=29quJEJ7WbcAX_5T6kS&_nc_ht=scontent.fcjb3-1.fna&oh=55688d982da5b433c05fe02c44dacbde&oe=60E7D82F',
    text: ['Hi!', "It's me Mashhood.", 'I am '],
    typical: [
      ' Developer. 🖥',
      2000,
      'React Developer ',
      2000,
      'Mobile Developer',
      2000,
      'Web Developer',
      2000,
      
    ],
    btnText: 'Discover More',
  },

  stack: {
    title: 'Stack',
    tech: [
      {
        img: process.env.PUBLIC_URL + '/assets/flutter.png',
        alt: 'mongodb',
      },
      {
        img: process.env.PUBLIC_URL + '/logo512.png',
        alt: 'react',
      },
      {
        img: process.env.PUBLIC_URL + '/assets/express.png',
        alt: 'express',
      },
      {
        img: process.env.PUBLIC_URL + '/assets/node.png',
        alt: 'node',
      },

      {
        img: process.env.PUBLIC_URL + '/assets/android.jpg',
        alt: 'node',
      },
    ],
    desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only`,
  },

  cards:{
    title:"projects",
    list:[
      {img:process.env.PUBLIC_URL + './assets/amz.png' ,alt:'amzn',},
      {img:process.env.PUBLIC_URL +'./assets/netfl.png',alt:'netfli'},
    ],
    
  }
};
