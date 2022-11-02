import React from 'react'
import {DefaultPlayer as Video} from 'react-html5video'
import 'react-html5video/dist/styles.css'
//import intrVideo from '../video/animevost_1-seriya-Vanpanchmen-(vtoroy-sezon).mp4';

export const VideoPleer = () => {
  return (
    <Video autoPlay loop>
        <source src="https://firebasestorage.googleapis.com/v0/b/wakanim-43128.appspot.com/o/animevost_1-seriya-Vanpanchmen-(vtoroy-sezon).mp4?alt=media&token=fe8a58f7-4d47-4591-990f-b4ce33c8b69b" type='video/webm'/>
    </Video>
  )
}
