import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TitleHeader from '../components/TitleHeader.jsx';
import '../styles/Home.css';
import './totalSum.css';
import Footer from '../components/Footer.jsx';
import Category from './Category.jsx';
import { navigation } from 'react-router-dom';

const TotalSum = () => {
	const [total, setTotal] = useState(null);
	const [categoryTotals, setCategoryTotals] = useState([]);
	const history = navigation();

	const categoryArray = [];

	useEffect(() => {
		const fetchTotal = async () => {
			try {
				const response = await axios.get('/api/totalSum');
				setTotal(response.data[0]);

				for (const property in response.data[1]) {
					categoryArray.push(
						<Category field={property} value={response.data[1][property]} />
					);
				}
			} catch (error) {
				console.error('Server Response: ', error);
			}
		};
		fetchTotal();
	}, []);

	const handleClick = () => {
		history.push('/'); // Redirect to the root route
	};

	return (
		<div className='totalSum-container'>
			<TitleHeader className='header' />
			<div className='totalSum'>
				<span>{`the total spendings using all of your receipts: ${total}`}</span>
				<div>{categoryArray}</div>
				<button onClick={handleClick}>back to Upload</button>
			</div>
			<Footer />
		</div>
	);
};

export default TotalSum;
