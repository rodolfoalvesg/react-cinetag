import Banner from "components/Banner";
import bannerhome from "assets/images/banner-home.png";
import Title from "components/Title";
import styles from "./Home.module.css";
import Card from "components/Card";
import { useEffect, useState } from "react";


function Home() {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        fetch('https://my-json-server.typicode.com/rodolfoalvesg/cinetag-api/videos')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setVideos(data);
            });
    }, []);
    return (
        <>
            <Banner image={bannerhome} />
            <Title>
                <h1>Um lugar para guardar seus vídeos e filmes!</h1>
            </Title>
            <section className={styles.container}>
                {
                    videos.map((video) => {
                        return <Card {...video} key={video.id} />
                    })
                }

            </section>
        </>
    );
}

export default Home;