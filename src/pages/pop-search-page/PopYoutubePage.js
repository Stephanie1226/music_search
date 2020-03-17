import React from 'react';
import PYouTubeEmbed from '../../components/youtube-embed/PYouTubeEmbed';
import PopCheckboxes from '../../components/check-box/PopCheckboxes';
import PRelatedCardList from '../../components/collection-card/PRelatedCardList';
import './PopYoutubePageStyles.scss';


function PopYTpage (props) {
	return(
		<div>
			<div className='youtube_container'>
				<PYouTubeEmbed />
			</div>
			<div className='ckeckbox_container'>
				<PopCheckboxes />
			</div>
			<PRelatedCardList />
		</div>
	);
}

export default PopYTpage;

