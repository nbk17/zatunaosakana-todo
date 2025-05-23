import {useEffect, useState} from "react";

//魚インポートここから
import fish1 from '../assets/ナンヨウハギモドキ.png';
//魚インポートここまで

//以下関数
function RandomImage(){

    const images=[
        fish1,//魚追加
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