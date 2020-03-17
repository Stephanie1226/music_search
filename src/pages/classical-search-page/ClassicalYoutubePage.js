import React from 'react';
import CYouTubeEmbed from '../../components/youtube-embed/CYouTubeEmbed';
import ClassicalCheckboxes from '../../components/check-box/ClassicalCheckboxes';
import CRelatedCardList from '../../components/collection-card/CRelatedCardList';
import './ClassicalYoutubePageStyles.scss';


const ClassicalYTpage = () => {
	return(
		<div>
			<div className='youtube_container'>
				<CYouTubeEmbed />
			</div>
			<div className='ckeckbox_container'>
				<ClassicalCheckboxes />
			</div>
			<CRelatedCardList />
		</div>
	);
}


export default ClassicalYTpage;
