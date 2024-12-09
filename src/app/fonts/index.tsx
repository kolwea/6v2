import localFont from "next/font/local"
import { Roboto, Bebas_Neue } from 'next/font/google'


export const founders = localFont({
    src: [
        {
            path: 'Founders_Grotesk/FoundersGrotesk-Regular.otf',
            weight: '400',
            style: 'normal',
        },
        // {
        //   path: 'fonts/Founders_Grotesk/FoundersGrotesk-RegularItalic.otf',
        //   weight: '400',
        //   style: 'italic',
        // },
        // {
        //   path: '/fonts/Founders_Grotesk/FoundersGrotesk-Light.otf',
        //   weight: '400',
        //   style: 'light',
        // },
        // {
        //   path: '/fonts/Founders_Grotesk/FoundersGrotesk-Bold.otf',
        //   weight: '400',
        //   style: 'bold',
        // },

    ],
    variable: "--font-founders"
})

export const founderLight = localFont({
    src: [
        {
            path: 'Founders_Grotesk/FoundersGrotesk-Light.otf',
            weight: '400',
            style: 'light',
        }
    ],
    variable: "--font-founders-light"
})

export const roboto = Roboto({
    weight: ['100', '400', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    display: 'swap',
})

export const bebas = Bebas_Neue({
    weight: ['400'],
    style: ['normal'],
    subsets: ['latin'],
    display: 'swap',
})