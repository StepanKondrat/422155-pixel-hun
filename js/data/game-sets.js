import imagesUrls from './images';
const PHOTO = `photo`;
const PAINT = `paint`;


const gameSets = [
  {gameType: `two`,
    gameAnswers: [PAINT, PHOTO],
    gameImages: []
  },
  {gameType: `one`,
    gameAnswers: [PAINT],
    gameImages: []
  },
  {gameType: `three`,
    gameAnswers: [PHOTO, PAINT, PHOTO],
    gameImages: []
  },
  {gameType: `one`,
    gameAnswers: [PAINT],
    gameImages: []
  },
  {gameType: `one`,
    gameAnswers: [PAINT],
    gameImages: []
  },
  {gameType: `two`,
    gameAnswers: [PAINT, PAINT],
    gameImages: []
  },
  {gameType: `three`,
    gameAnswers: [PAINT, PHOTO, PHOTO],
    gameImages: []
  },
  {gameType: `one`,
    gameAnswers: [PHOTO],
    gameImages: []
  },
  {gameType: `two`,
    gameAnswers: [PHOTO, PAINT],
    gameImages: []
  },
  {gameType: `three`,
    gameAnswers: [PHOTO, PHOTO, PAINT],
    gameImages: []
  },
];

const setImages = () =>{
  gameSets.forEach((item) => {
    const answers = item.gameAnswers;

    for (let i = 0; i <= answers.length; i++) {
      if (answers[i] === PAINT) {
        item.gameImages.push(imagesUrls.paintings[Math.floor(Math.random() * imagesUrls.paintings.length)]);
      } else {
        item.gameImages.push(imagesUrls.photos[Math.floor(Math.random() * imagesUrls.photos.length)]);
      }
    }
  });
};
setImages();
export {gameSets};
