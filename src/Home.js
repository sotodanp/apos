
import './App.css';
import Carousel from './components/carousel/Carousel';
import Headline from './components/Headline';
import HomeServices from './components/Services/HomeServices';
import AllServices from './components/Services/AllServices';
import License from './components/License';


const Home = () => {

    const src = 'https://scontent-mia3-2.xx.fbcdn.net/v/t1.6435-9/70181964_1049723968555646_2263429395416875008_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=730e14&_nc_ohc=wmWMJMk0ABsAX-RP3mQ&_nc_ht=scontent-mia3-2.xx&oh=00_AT9zLq_N1tfohDgiQwX-eQ0knVk_UHNB-mOpo-yyrv5vyQ&oe=62E2DF00'
    const src2 = 'https://scontent-mia3-2.xx.fbcdn.net/v/t1.6435-9/69650218_1049723518555691_1506116014184595456_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_ohc=xn5b93Tpzl8AX8e_Mmr&_nc_ht=scontent-mia3-2.xx&oh=00_AT_RWoXIwwKt1b24FjSxWP-gU8oLyf18FHTz8PW0ZUDOHA&oe=62E245BE'
    const src3 = 'https://scontent-mia3-2.xx.fbcdn.net/v/t1.6435-9/69468192_1049723728555670_3213252805812813824_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=730e14&_nc_ohc=aicJ9Us7qWoAX_XPFcO&_nc_ht=scontent-mia3-2.xx&oh=00_AT_lOLNLe8VWvl7NM9YAFN0GgvVsLfbWKFMl_YCxnFfVtA&oe=62DF4FFE'

    return (
        <div>
            <Carousel src={src} src2={src2} src3={src3} />
            <Headline />
            <HomeServices />
            <AllServices />
            <License />
        </div>

    )
}

export default Home
