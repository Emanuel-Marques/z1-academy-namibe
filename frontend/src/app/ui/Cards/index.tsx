'use client'
import CardMedia from '@mui/material/CardMedia';
import styles from './cards.module.css';
import { barlowThin, barlowBold } from '@/app/lib/utils';
import Box from '@mui/material/Box';
export default function Cards() {
    return(
        <div className={ styles['main'] }>
            <div className={ styles['header'] }>
                <h1 className={ barlowThin.className }>PROGRAMAS <span className={ barlowBold.className }>Z1 ACADEMY NAMIBE</span></h1>
            </div>
            <div className={ styles['section'] }>
            <Box
              sx={{
                width: 300,
                borderRadius: 4,
                overflow: 'hidden',
                boxShadow: 4,
              }}
            >
                <CardMedia
                    src="/gilson.jpg"
                    component="img"
                >
                </CardMedia>
            </Box>
            <Box
              sx={{
                width: 300,
                borderRadius: 4,
                overflow: 'hidden',
                boxShadow: 4,
              }}
            >
                <CardMedia
                    src="/gilson.jpg"
                    component="img"
                >
                </CardMedia>
            </Box>
            <Box
              sx={{ width: 300, borderRadius: 4, overflow: 'hidden', boxShadow: 4, }} >
                <CardMedia
                    src="/gilson.jpg"
                    component="img"
                >
                </CardMedia>
            </Box>
            </div>
            
        </div>
    );
}