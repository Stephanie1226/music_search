import React from 'react';
import './ClassicalSearchPageStyles.scss';
import ClassicalSearchHeader from './ClassicalSearchHeader';
import ClassicalCardList from '../../components/collection-card/ClassicalCardList';
import { classicalinfo } from './classicalinfo';


const ClassicalSearchPage = () => (
	<div>
		<ClassicalSearchHeader />
		<div className='c-card-section'>
			<ClassicalCardList classicalinfo={classicalinfo} />
		</div>
	</div>
)

export default ClassicalSearchPage;
