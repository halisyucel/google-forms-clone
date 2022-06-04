import React from 'react';
import styled from 'styled-components';

export interface TabProps {
	value: string;
	className: string;
	backgroundColor: string;
	onClick: () => void;
}

const Tab: React.FC<TabProps> = ({ value, className, backgroundColor, onClick }) => {
	return (
		<span key={value} className={className} onClick={onClick}>
			{value.charAt(0).toUpperCase() + value.slice(1)}
		</span>
	);
};

export default styled(Tab)`
	&:hover {
		background-color: ${(props) => props.backgroundColor};
	}
`;
