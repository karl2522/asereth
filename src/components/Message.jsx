import { useNavigate } from 'react-router-dom'
import { random1, random10, random11, random12, random2, random3, random4, random5, random6, random7, random8, random9 } from '../assets'
import Carousel from './Carousel'
import { ImageCard } from './ImageCard'
import { ArrowLeft } from './icons'

function Message() {
  const navigate = useNavigate();

  // customize your own picture, title and subtext. You can also add more picture.
  const pictures = [
    { Image: random1, title: 'Random Pic', description: "To more and more pics like this bebeh!!! mga randoms hehehe. very cuteeee. i love you sauurrr much!"},   
    { Image: random2, title: 'Clingyyyyy', description: "Stay clingy bebeh ha??? GRRRR og sa lain mag clingy pusilon hehehe. labyeuwwww po <3"},
    { Image: random3, title: 'HAAHAHAHAHAHAH', description: "Imong happy pill bebeh oh hehehe. ana siya pwede ba daw pa kiss?? <3"},
    { Image: random4, title: '03A', description: "I miss mga hatods nako nimo sa sakayanan 03A huhu. I miss you so much bebehhh mwamwaaa"},
    { Image: random5, title: '03A Again', description: "Cutieee kaayo ta huhuhu. mingaw kog samot nimooo huhu. nag code ko ani di ta okay :(("},
    { Image: random6, title: 'Anime', description: "Anime bebeh oh hehehe. cute kaayo ta ani. i love youuuuuu (bebeh sa mutuo kag sa di kana na chat kay suggested sa akong IDE, kabaw man mag bisaya HAHAHAH)"},
    { Image: random7, title: '3A', description: "Tutok ko ani na mga pics mingawon kog samot nimo huhu. mga random pics nato nga ikaw manghagad og pic. i miss you pooooooo so bad :("},
    { Image: random8, title: 'Chambok', description: "Napay isa huhuhuh. unta dika mapulan magpic nato duha bebeh. kiss tikaa mao ako bawi hehe"},
    { Image: random9, title: 'With Pep (Iphone 11 Full Paid Cash)', description: "First pic with pep!!!! superrr memorableeeeee heheheeh puhon ako nasad palit iphone hehe"},
    { Image: random10, title: 'Close Up', description: "atong favorite angleee. supposedly sweet2 dapat ako message ari bebeh hahaha. sorry pooooo. i love yoouuuuuu!!"},
    { Image: random11, title: 'Close Up 1', description: "Magtanaw ko ani na pics makahunahuna kog maayo dugaya na nato, wana ko ka remember asa nii na picture huhuhu. ayaw kapulan nako bebeh bisan bagil kayko huhuhuh. i love yoouuu!"},
    { Image: random12, title: 'Close Up 2', description: "Cutie ani bebehlabssssss, dugay na kayni na picc natooooo. amishuuuu bebeheheheheh. hopefully ga enjoy kas mga pics hehe <3 bisan di kaayo sweet2 ang messages. labyeuwwww!"},
    
  ]
  return (
    <div className="min-h-screen bg-black/20 flex flex-col items-center justify-center">

      <div className="w-[90%] max-w-[400px]">
        <h1 className="text-2xl xs:text-2xl font-bold -mb-4 drop-shadow-lg text-white text-center">
            Our Messages
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

export default Message