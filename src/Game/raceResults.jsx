/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import '../styles/game.css';


const PAGE_SIZE = 10;

const RaceResults = ({ winnerTable }) => {
	const [currentPage, setCurrentPage] = useState(() => {
		const index = winnerTable.findIndex((x) => x.RacerId !== undefined);
		return index !== -1
			? Math.ceil((index + 1) / PAGE_SIZE)
			: 1;
	});
	const totalResults = Object.keys(winnerTable).length;
	const totalPages = Math.ceil(totalResults / PAGE_SIZE);

	const startIndex = (currentPage - 1) * PAGE_SIZE;
	const endIndex = Math.min(startIndex + PAGE_SIZE, totalResults);
	const pagedResults = Object.values(winnerTable).slice(startIndex, endIndex);

	const handlePageChange = (page) => {
		setCurrentPage(page);
	};

	return (
		<div className="d-flex justify-content-center align-items-center flex-column my-5">
			<h2 className="text-center mb-3 text-light">Race Results</h2>

			<table className="table table-striped table-bordered table-dark">
				<thead>
					<tr>
						<th className='text-center' scope="col">Position</th>
						<th className='text-center' scope="col">Racer</th>
						<th className='text-center' scope="col">Lap Time</th>
					</tr>
				</thead>
				<tbody>
					{pagedResults.map((x, i) => (
						<tr key={x.Name}>
							<td  className={x.RacerId ? 'beat-once text-center' : 'text-center'} style={{fontWeight: 'bold'}}>{startIndex + i + 1}</td>
							<td className={x.RacerId ? 'beat-once text-center' : 'text-center'} style={{fontWeight: 'bold'}}>{x.RacerId ? <span style={{fontWeight: 'bold'}}>YOU</span> : x.rivalId}</td>
							<td  className={x.RacerId ? 'beat-once text-center' : 'text-center'} style={{fontWeight: 'bold'}}>{x.LapTime.toFixed(6)}s</td>
						</tr>
					))}
				</tbody>
			</table>

			{totalPages > 1 && (
				<nav>
					<ul className="pagination">
						{Array.from(Array(totalPages), (_, i) => i + 1).map((page) => (
							<li
								key={page}
								className={`page-item${page === currentPage ? ' active' : ''}`}
								onClick={() => handlePageChange(page)}
							>
								<button className="page-link">{page}</button>
							</li>
						))}
					</ul>
				</nav>
			)}
		</div>
	);
};

export default RaceResults;
