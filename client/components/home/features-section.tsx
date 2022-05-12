import React from 'react';
import styles from '../../styles/components/home.features-section.module.scss';

const FeaturesSection = () => {
	return (
		<section id={'features'} className={styles.features_section}>
			<div className={styles.features_section__feature}>
				<div className={styles.features_section__feature__image_wrapper}>
					<img
						src={'/features-slide-1.png'}
						alt={'Google Forms Clone'}
					/>
				</div>
				<div className={styles.features_section__feature__content}>
					<h2>Create an online form as easily as creating a document</h2>
					<p>Select from multiple question types, drag-and-drop to reorder questions, and customize values as easily as pasting a list.</p>
				</div>
			</div>
			<div className={styles.features_section__feature}>
				<div className={styles.features_section__feature__image_wrapper}>
					<img
						src={'/features-slide-2.png'}
						alt={'Google Forms Clone'}
					/>
				</div>
				<div className={styles.features_section__feature__content}>
					<h2>Send polished surveys and forms</h2>
					<p>Customize colors, images, and fonts to adjust the look and feel or reflect your organization’s branding. And add custom logic that shows questions based on answers, for a more seamless experience.</p>
				</div>
			</div>
			<div className={styles.features_section__feature}>
				<div className={styles.features_section__feature__image_wrapper}>
					<img
						src={'/features-slide-3.png'}
						alt={'Google Forms Clone'}
					/>
				</div>
				<div className={styles.features_section__feature__content}>
					<h2>Analyze responses with automatic summaries</h2>
					<p>See charts with response data update in real-time. Or open the raw data with Google Sheets for deeper analysis or automation.</p>
				</div>
			</div>
			<div className={styles.features_section__feature}>
				<div className={styles.features_section__feature__image_wrapper}>
					<img
						src={'/features-slide-4.png'}
						alt={'Google Forms Clone'}
					/>
				</div>
				<div className={styles.features_section__feature__content}>
					<h2>Create and respond to surveys from anywhere</h2>
					<p>Access, create, and edit forms on-the-go, from screens big and small. Others can respond to your survey from wherever they are—from any mobile device, tablet, or computer.</p>
				</div>
			</div>
			<div className={styles.features_section__advantages}>
				<div className={styles.features_section__advantages__background} />
				<div className={styles.features_section__advantages__advantage}>
					<img src={'/features-advantage-1.svg'} alt={'Google Forms Clone'} />
					<h3>Build forms and analyze results together</h3>
					<p>Add collaborators—just like with Google Docs, Sheets, and Slides—to build questions together in real-time. Then analyze results together without having to share multiple versions of the file.</p>
				</div>
				<div className={styles.features_section__advantages__advantage}>
					<img src={'/features-advantage-2.svg'} alt={'Google Forms Clone'} />
					<h3>Work with clean response data</h3>
					<p>Use built-in intelligence to set response validation rules. For example, ensure that email addresses are properly formatted or that numbers fall within a specified range.</p>
				</div>
				<div className={styles.features_section__advantages__advantage}>
					<img src={'/features-advantage-3.svg'} alt={'Google Forms Clone'} />
					<h3>Share forms via email, link, or website</h3>
					<p>It's easy to share forms with specific people or with a broad audience by embedding forms on your website or sharing the links on social media.</p>
				</div>
			</div>
			<img
				className={styles.features_section__background_image}
				src={'/background-image-2.png'}
				alt={'Google Forms Clone'}
			/>
			<img
				className={styles.features_section__background_image}
				src={'/background-image-3.png'}
				alt={'Google Forms Clone'}
			/>
		</section>
	);
};

export default FeaturesSection;
