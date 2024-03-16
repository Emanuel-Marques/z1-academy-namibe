'use client';
import styles from './cardvideo.module.css';
import CardMedia from '@mui/material/CardMedia';
export default function CardVideo(){
    return(
        <>
        <div className={ styles['card-video'] }>
        <CardMedia
          src="/main-video.mp4"
          component="video"
          autoPlay
          loop
          muted
        />
        </div>
        
        </>
        
    );
}