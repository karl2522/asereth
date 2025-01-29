
import { useNavigate } from 'react-router-dom'
import {
  pic00, pic1,
  pic10, pic11, pic12, pic13, pic14, pic15, pic16, pic17,
  pic2, pic3, pic4, pic5, pic6, pic7, pic8, pic9
} from '../assets'
import Carousel from './Carousel'
import { ImageCard } from './ImageCard'
import { ArrowLeft } from './icons'

function Picture() {
  const navigate = useNavigate();

  const pictures = [
    { Image: pic00, title: 'September 3, 2024', description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, possimus!"}, 
    { Image: pic1, title: 'September 3, 2024', description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, possimus!"},   
    { Image: pic2, title: 'September 3, 2024', description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, possimus!"},
    { Image: pic3, title: 'September 3, 2024', description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, possimus!"},
    { Image: pic4, title: 'September 3, 2024', description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, possimus!"},
    { Image: pic5, title: 'September 3, 2024', description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, possimus!"},
    { Image: pic6, title: 'September 3, 2024', description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, possimus!"},
    { Image: pic7, title: 'September 3, 2024', description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, possimus!"},
    { Image: pic8, title: 'September 3, 2024', description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, possimus!"},
    { Image: pic9, title: 'September 3, 2024', description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, possimus!"},
    { Image: pic10, title: 'September 3, 2024', description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, possimus!"},
    { Image: pic11, title: 'September 3, 2024', description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, possimus!"},   
    { Image: pic12, title: 'September 3, 2024', description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, possimus!"},
    { Image: pic13, title: 'September 3, 2024', description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, possimus!"},
    { Image: pic14, title: 'September 3, 2024', description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, possimus!"},
    { Image: pic15, title: 'September 3, 2024', description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, possimus!"},
    { Image: pic16, title: 'September 3, 2024', description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, possimus!"},
    { Image: pic17, title: 'September 3, 2024', description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, possimus!"},
    

  ]
  return (
  
    <div className="min-h-screen bg-black/20 flex flex-col items-center justify-center">

      <div className="w-[90%] max-w-[400px]">
        <h1 className="text-2xl sm:text-2xl font-bold -mb-4 drop-shadow-lg text-white text-center">
            Our Pictures
          </h1>
        <Carousel>
          {pictures.map(({Image,title,description,index}) => (
            <ImageCard
              key={index}
              imageUrl={Image}
              altText="Placeholder image"
              title={title}
              description={description}
            />
          ))}
        </Carousel>

        <div className="flex justify-center w-full mt-12">
          <button
            className="px-4 py-2 flex justify-center items-center bg-white/20 gap-2 hover:bg-white/30 backdrop-blur-sm text-white text-sm border border-white/50 rounded-lg"
            onClick={() => navigate('/recap')}
          >
            <ArrowLeft /> Previous page
          </button>

        </div>
      </div>
    </div>


  )
}

export default Picture