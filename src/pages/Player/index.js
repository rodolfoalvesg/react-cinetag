import Banner from 'components/Banner';
import styles from './Player.module.css';
import bannerplayer from "assets/images/banner-player.png";
import Title from 'components/Title';
import { useParams } from 'react-router-dom';
import NotFound from 'pages/NotFound';
import { useEffect, useState } from 'react';

function Player(){
    const params = useParams();
    const [videos, setVideos] = useState([]);
    
    useEffect(() => {
        fetch(`https://my-json-server.typicode.com/rodolfoalvesg/cinetag-api/videos?id=${params.id}`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setVideos(...data);
            });
    }, []);

    if (!videos) {
        return <NotFound />
    }

    return (
        <>
            <Banner image={bannerplayer}/>
            <Title>
                <h1>Player</h1>
            </Title>
            <section className={styles.container}>
                <iframe
                    width="100%"
                    height="100%"
                    src={videos.link}
                    title={videos.title}
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen
                >
                </iframe>
            </section>
        </>
    );
}

export default Player;