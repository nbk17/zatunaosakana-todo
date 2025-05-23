import {useEffect, useState} from "react";

//魚インポートここから
import fish1 from '../assets/ナンヨウハギモドキ.png';
import fish2 from '../assets/えびかにっくすで！.png';
import fish3 from '../assets/おれんじさかな.png';
import fish4 from '../assets/きめーいか.png';
import fish5 from '../assets/ノット雑フグ.png';
import fish6 from '../assets/死んだ目魚.png';
//魚インポートここまで

//以下関数
function RandomImage(){

    const images=[
        fish1,fish2,fish3,fish4,fish5,fish6//魚追加
    ];
    const [randomImage,setRandomImage]=useState('');

    useEffect(()=>{
        const index = Math.floor(Math.random() * images.length);
        setRandomImage(images[index]);
    },[])
    return(
    <div>
        {randomImage && <img src={randomImage}/>}
    </div>
    )
}




export default RandomImage;