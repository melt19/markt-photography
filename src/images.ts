import galah from './images/galah (1 of 1).jpeg'
import rocks1 from './images/gor -2388.jpeg'
import lake from './images/IMG_0470.jpeg'
import mountains from './images/IMG_0482.jpeg'
import helicopter from './images/IMG_0489.jpeg'
import festival from './images/IMG_0520.jpeg'
import koala from './images/IMG_1021.jpeg'
import kookaburra1 from './images/IMG_1069.jpeg'
import kookaburra2 from './images/IMG_1071.jpeg'
import telstratower from './images/IMG_1076.jpeg'
import redBirds from './images/IMG_1191.jpeg'
// import ant1 from './images/IMG_1200.jpeg' // small
// import bug from './images/IMG_1201.jpeg' // small
// import bird from './images/IMG_1202.jpeg' // small
import kookaburra3 from './images/IMG_1278.jpeg'
import kookaburra4 from './images/IMG_1279.jpeg'
import ant2 from './images/IMG_1299.jpeg'
import ant3 from './images/IMG_1301.jpeg'
import jumpingspider1 from './images/IMG_1303.jpeg'
import jumpingspider2 from './images/IMG_1309.jpeg'
import rocks2 from './images/IMG_1312.jpeg'
import carillon1 from './images/IMG_1363.jpeg'
import carillon2 from './images/IMG_1364.jpeg'
import carillon3 from './images/IMG_1365.jpeg'
import blackbird from './images/MT20221030_MtMajura_0U5A1474.jpeg'
import horizon from './images/Photo_6553605_DJI_5_jpg_10537753_0_2022413174054_photo_original.jpg.jpeg'
import wolfspider from './images/wolf spider (1 of 1).jpeg'

export type ImageInfo = {
  'image': any
  'title': string
  'category': string
  'location': string
}

export const imageList : { [ imageID : string ] : ImageInfo } = {
  'galah': {
    'image': galah,
    'title': 'Galah',
    'category': 'Birds',
    'location': 'AUS'
  },
  'rocks1': {
    'image': rocks1,
    'title': 'Fun Rocks',
    'category': 'Landscapes',
    'location': 'AUS'
  },
  'lake': {
    'image': lake,
    'title': 'Foggy Mountains over Lake',
    'category': 'Landscapes',
    'location': 'NZ'
  },
  'mountains': {
    'image': mountains,
    'title': 'Grassy Mountains over Lake',
    'category': 'Landscapes',
    'location': 'AUS'
  },
  'helicopter': {
    'image': helicopter,
    'title': 'Helicopter on Snowy Mountain',
    'category': 'Landscapes',
    'location': 'NZ'
  },
  'festival': {
    'image': festival,
    'title': 'Night Festival over Lake',
    'category': 'Landscapes',
    'location': 'AUS'
  },
  'koala': {
    'image': koala,
    'title': 'Koala in Tree',
    'category': 'Animals',
    'location': 'AUS'
  },
  'kookaburra1': {
    'image': kookaburra1,
    'title': 'Kookaburra Up Close',
    'category': 'Birds',
    'location': 'AUS'
  },
  'kookaburra2': {
    'image': kookaburra2,
    'title': 'Kookaburra on Pole',
    'category': 'Birds',
    'location': 'AUS'
  },
  'kookaburra3': {
    'image': kookaburra3,
    'title': 'Kookaburra on Branch',
    'category': 'Birds',
    'location': 'AUS'
  },
  'kookaburra4': {
    'image': kookaburra4,
    'title': 'Kookaburra Hiding',
    'category': 'Birds',
    'location': 'AUS'
  },
  'telstratower': {
    'image': telstratower,
    'title': 'Sunset over Telstra Tower',
    'category': 'Birds',
    'location': 'AUS'
  },
  'redBirds': {
    'image': redBirds,
    'title': 'Two Pretty Red Birds',
    'category': 'Birds',
    'location': 'AUS'
  },
  'ant2': {
    'image': ant2,
    'title': 'Ant Side Profile',
    'category': 'Insects',
    'location': 'AUS'
  },
  'ant3': {
    'image': ant3,
    'title': 'Ant Up Close',
    'category': 'Insects',
    'location': 'AUS'
  },
  'jumpingspider1': {
    'image': jumpingspider1,
    'title': 'Jumping Spider',
    'category': 'Insects',
    'location': 'AUS'
  },
  'jumpingspider2': {
    'image': jumpingspider2,
    'title': 'Jumping Spider Jumping!',
    'category': 'Insects',
    'location': 'AUS'
  },
  'rocks2': {
    'image': rocks2,
    'title': 'Fun Rocks from Far Away',
    'category': 'Landscapes',
    'location': 'AUS'
  },
  'carillon1': {
    'image': carillon1,
    'title': 'Carillon at Night',
    'category': 'Landscapes',
    'location': 'AUS'
  },
  'carillon2': {
    'image': carillon2,
    'title': 'Carillon at Dusk',
    'category': 'Landscapes',
    'location': 'AUS'
  },
  'carillon3': {
    'image': carillon3,
    'title': 'Carillon at Dusk',
    'category': 'Landscapes',
    'location': 'AUS'
  },
  'blackbird': {
    'image': blackbird,
    'title': 'Pretty Black Bird',
    'category': 'Birds',
    'location': 'AUS'
  },
  'horizon': {
    'image': horizon,
    'title': 'Horizon at Sunset',
    'category': 'Landscapes',
    'location': 'AUS'
  },
  'wolfspider': {
    'image': wolfspider,
    'title': 'Wolf Spider',
    'category': 'Insects',
    'location': 'AUS'
  }
}