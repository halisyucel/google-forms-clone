import React from 'react';
import styles from '../../styles/components/editor.questions.module.scss';
import HeaderImage from './header-image';

export interface QuestionsProps {
	open: boolean;
}

const Questions: React.FC<QuestionsProps> = ({ open }) => {
	return (
		<div
			className={styles.questions}
			style={{
				display: open ? 'block' : 'none',
			}}
		>
			<HeaderImage />
		</div>
	);
};

export default Questions;
