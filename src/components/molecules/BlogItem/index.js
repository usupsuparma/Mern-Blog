import React from 'react';
import {RegisterBg} from "../../../assets";
import './blogItem.scss';
import {Button, Gap, Link} from "../../atoms";
import {useHistory} from 'react-router-dom';
const BlogItem = () => {
	const history = useHistory();
		return (
				<div className={'blog-item'}>
						<img className={'image-thumb'} src={RegisterBg} alt={'post'} />
						<div className={'content-detail'}>
								<p className={'title'}>Title post</p>
								<p className={'author'}>Author - Date post</p>
								<p className={'body'}>Dalam Video Tutorial MERN Basic ini, kalian akan belajar bagaimana membuat sebuah aplikasi yang utuh dari sisi FrontEnd dan Juga BackEnd dengan menggunakan satu bahasa utama yaitu Javascript.
										Dalam Video MERN ini, konsep CRUD dan REST API akan kita pelajari dengan mengimplementasikannya dalam sebuah aplikasi.
										Ingin tau lebih lanjut, silahkan menonton.
										Selamat Belajar.</p>
						</div>
					<Gap height={20} />
					<Button title={'See Detail '} onClick={() => history.push('/detail-blog')} />
				</div>
		)
}

export default BlogItem;
