
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
    { Image: pic00, title: 'The Kiss', description: "kiss muna bago kain ang peg! hehehe"}, 
    { Image: pic1, title: 'The After Ligo Pool', description: "mga pa cool sa elevator. mura rag wa na frustrate ang bebeh tungods bati na pictures hahaha"},   
    { Image: pic2, title: 'The Thumbs Up', description: "picture muna bago kain. i miss huhuhu"},
    { Image: pic3, title: 'Uwian Na :(', description: "mga sad peeps pero enjoy ra gihapon hahaha. balik nataaa plsssss"},
    { Image: pic4, title: 'Labas Dila', description: "signature pose hahahaah"},
    { Image: pic5, title: 'Sabak Picture HEHE', description: "pretty kaayo ang bebeh. ako murag tao hahaha"},
    { Image: pic6, title: 'Hmmm???', description: "mura rag wa gaaway gikan ba hahahaha. cute gihapon hehe"},
    { Image: pic7, title: 'Cute hmm??', description: "bago magsakuna, gipa dionela sa kilid hahahaha"},
    { Image: pic8, title: 'Mr DIY', description: "hays gipasayaw pako nimo ani hahahaah mura ko boang"},
    { Image: pic9, title: 'Barracks my fave', description: "random saturday lunchdate pero with friends hehehe"},
    { Image: pic10, title: 'Somewhere random', description: "padung ta mangaon ramen ani. lagot paka nako kay layo tag gisakyan hahaha"},
    { Image: pic11, title: 'Stolen Shot', description: "super cutie jud ni nga pic, thanks sa nag pic hehehe"},   
    { Image: pic12, title: 'Fave Piccccc!!', description: "best pic nato together bebeh hehe. cute kaayoooooo"},
    { Image: pic13, title: 'Babies', description: "mura tag mga batang gamay sa atong posing diri. 'nak picture ara' hahahaha"},
    { Image: pic14, title: 'First hotel', description: "mga white peeps. taod2 nakatug na diay to hehehe"},
    { Image: pic15, title: 'Hagba', description: "dara ako giingon, nakatug najud hahahaha. sorry bebehlabs hehehe"},
    { Image: pic16, title: 'Best flowers!', description: "very cuteee picccccc. mas cute kay pretty kaayo ang flowers na ako na buhat diri"},
    { Image: pic17, title: 'Cuddle', description: "cuddle pics hehehe. i miss hotel. i miss persimmon. i miss youuuuuu huhu"},
    

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