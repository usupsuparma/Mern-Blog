import React,{useEffect, useState} from 'react'
import {Button, Gap} from "../../components/atoms";
import './home.scss';
import {BlogItem} from "../../components/molecules";
import { useHistory } from "react-router-dom";
import { Button as ButtonAntd } from 'antd';
import Axios from 'axios';

const  Home = () => {
    const [dataBlog, setDataBlog] = useState([]);
    const [page, setPage] = useState(1);
    const [perPage, setPerPage] = useState(5);

    useEffect(() => {
        Axios.get(`http://localhost:4000/v1/blog/posts?page=1&perPage=4`)
        .then(result => {
            console.log(result);
            const responseApi = result.data;

            setDataBlog(responseApi.data);
        })
        .catch(err => {
            console.log(err);
        })
    },[])

    const pageging =(pages) => {
        console.log(pages);
        Axios.get(`http://localhost:4000/v1/blog/posts?page=${pages}&perPage=4`)
        .then(result => {
            console.log(result);
            const responseApi = result.data;

            setDataBlog(responseApi.data);
        })
        .catch(err => {
            console.log(err);
        })
    }
    const history = useHistory();
    return (
        <div className={'home-page-wrapper'}>
            <div className={'create-wrapper'}>
                <Button title={'Create blog'} onClick={() => history.push('/create-blog')} />
                <Gap height={20} />
                <ButtonAntd type="primary">Primary Button</ButtonAntd>
            </div>
            <Gap height={20} />
            <div className={'content-wrapper'}>
                {dataBlog.map(blog => {
                    return <BlogItem key={blog._id} image={`http://localhost:4000/${blog.image}`} 
                    title={blog.title} 
                    body={blog.body}
                    name={blog.author.name}
                    date={blog.createdAt}
                     />
                })}

            </div>
            <div className={'pagination'}>
                <Button title={'previous'} onClick={() => {
                    setPage(page - 1);
                    pageging(page);
                }} />
                <Gap width={24}/>
                <Button title={'Next'} onClick={() => {
                    setPage(page + 1);
                    pageging(page);
                }} />
            </div>
            <Gap height={20} />
        </div>
    )
}

export default Home
