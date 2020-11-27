import React from 'react';
import './textArea.scss';

const TextArea = ({...props}) => {
		return (
				<div>
						<textarea className={'text-area'} {...props} />
				</div>
		)
}

export default TextArea;
