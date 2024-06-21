import { useEffect, useState } from 'react';
import './styles.css';

export default function CustomScrollIndicator() {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [scrollPercentage, setScrollPercentage] = useState(0.0);

    async function fetchData(url) {
        try {
            setLoading(true);
            const response = await fetch(url);
            const data = await response.json();
            //console.log(data);

            if (data && data.products && data.products.length > 0) {
                setLoading(false);
                setData(data.products);
            }

        } catch (error) {
            console.log(error);
        }
    }

    function handleScrollPercentage() {
        //console.log(document.body.scrollTop, document.documentElement.scrollTop, document.documentElement.scrollHeight, document.documentElement.clientHeight);
        const howMuchScrolled = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

        const percentage = (howMuchScrolled / height) * 100;
        //console.log(percentage);
        setScrollPercentage(percentage);
        //console.log(scrollPercentage);
    }

    useEffect(() => {
        const url = 'https://dummyjson.com/products?limit=100';
        fetchData(url);
    },[]);

    useEffect(() => {
        window.addEventListener('scroll', handleScrollPercentage);
        return () => {
            window.removeEventListener('scroll',() => {});
        }
    },[]);

    console.log(scrollPercentage);

    return (
        <div className="custom-scroll-container">
            <div className="top-container">
                <h1>This is Scroll Indicator</h1>
                <div className="progress">
                    <div className="current-progress" style={{width: `${scrollPercentage}%`}}></div>
                </div>  
            </div>
            <div className="data-container">
                {
                    data && data.length > 0 ? 
                        data.map(dataItem => {
                            //console.log("Mapping");
                            return <p>{dataItem.title}</p>;
                        })
                    :null
                }
            </div>
        </div>
    );
}