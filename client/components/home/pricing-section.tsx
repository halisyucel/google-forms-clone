import React from 'react';
import DoneIcon from '@mui/icons-material/Done';
import RemoveIcon from '@mui/icons-material/Remove';
import styles from '../../styles/components/home.pricing-section.module.scss';
import { Button } from '@mui/material';
import {Link} from 'react-router-dom';

const PricingSection = () => {
	return (
		<section id={'pricing'} className={styles.pricing_section}>
			<div className={styles.pricing_section__head}>
				<h2>Find the plan that’s right for you</h2>
				<h3>Google Forms is a part of Google Workspace</h3>
				<div className={styles.pricing_section__head__includes}>
					<p>Every plan includes</p>
					<ul>
						<li>
							<a href={'https://workspace.google.com/intl/en/products/docs/'} target={'_blank'} rel={'noopener noreferrer'}>
								<img src={'/pricings-docs.svg'} alt={'Docs Icon'}/>
							</a>
							<span>Docs</span>
						</li>
						<li>
							<a href={'https://workspace.google.com/intl/en/products/sheets/'} target={'_blank'} rel={'noopener noreferrer'}>
								<img src={'/pricings-sheets.svg'} alt={'Sheets Icon'}/>
							</a>
							<span>Sheets</span>
						</li>
						<li>
							<a href={'https://workspace.google.com/intl/en/products/slides/'} target={'_blank'} rel={'noopener noreferrer'}>
								<img src={'/pricings-slides.svg'} alt={'Slides Icon'}/>
							</a>
							<span>Slides</span>
						</li>
						<li>
							<a href={'https://workspace.google.com/intl/en/products/forms/'} target={'_blank'} rel={'noopener noreferrer'}>
								<img src={'/pricings-forms.svg'} alt={'Forms Icon'}/>
							</a>
							<span>Forms</span>
						</li>
						<li>
							<a href={'https://workspace.google.com/intl/en/products/keep/'} target={'_blank'} rel={'noopener noreferrer'}>
								<img src={'/pricings-keep.svg'} alt={'Keep Icon'}/>
							</a>
							<span>Keep</span>
						</li>
						<li>
							<a href={'https://workspace.google.com/intl/en/products/sites/'} target={'_blank'} rel={'noopener noreferrer'}>
								<img src={'/pricings-sites.svg'} alt={'Sites Icon'}/>
							</a>
							<span>Sites</span>
						</li>
						<li>
							<a href={'https://workspace.google.com/intl/en/products/drive/'} target={'_blank'} rel={'noopener noreferrer'}>
								<img src={'/pricings-drive.svg'} alt={'Drive Icon'}/>
							</a>
							<span>Drive</span>
						</li>
						<li>
							<a href={'https://workspace.google.com/intl/en/products/gmail/'} target={'_blank'} rel={'noopener noreferrer'}>
								<img src={'/pricings-gmail.svg'} alt={'Gmail Icon'}/>
							</a>
							<span>Gmail</span>
						</li>
						<li>
							<a href={'https://workspace.google.com/intl/en/products/meet/'} target={'_blank'} rel={'noopener noreferrer'}>
								<img src={'/pricings-meet.svg'} alt={'Meet Icon'}/>
							</a>
							<span>Meet</span>
						</li>
						<li>
							<a href={'https://workspace.google.com/intl/en/products/calendar/'} target={'_blank'} rel={'noopener noreferrer'}>
								<img src={'/pricings-calendar.svg'} alt={'Calendar Icon'}/>
							</a>
							<span>Calendar</span>
						</li>
						<li>
							<a href={'https://workspace.google.com/intl/en/products/chat/'} target={'_blank'} rel={'noopener noreferrer'}>
								<img src={'/pricings-chat.svg'} alt={'Chat Icon'}/>
							</a>
							<span>Chat</span>
						</li>
					</ul>
				</div>
			</div>
			<table>
				<thead>
					<tr>
						<th/>
						<th>
							<h4>For Personal (Free)</h4>
							<div className={styles.pricing_section__table_head}>
								<Link to={'/dashboard'}>
									<Button
										size={'large'}
										variant={'outlined'}
									>
										Go to Forms
									</Button>
								</Link>
							</div>
						</th>
						<th>
							<h4>Business Standard</h4>
							<div className={styles.pricing_section__table_head}>
								<span className={styles.pricing_section__table_head__pricing}>
									<span>$12 USD</span>
									<span>/user/month</span>
								</span>
								<Link to={'/dashboard'}>
									<Button
										size={'large'}
										variant={'contained'}
										disableElevation={true}
										style={{ marginBottom: '6px' }}
									>
										Get started
									</Button>
								</Link>
								<a
									href={'https://workspace.google.com/intl/en/pricing.html'}
									target={'_blank'}
									rel={'noopener noreferrer'}
								>
									See more plans
								</a>
							</div>
						</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>
							<div className={styles.pricing_section__table_cell}>
								<span className={styles.pricing_section__table_cell__image}>
									<img src={'/table-docs.svg'} alt={'Docs Icon'}/>
								</span>
								<b>Docs, Sheets, Slides, Forms</b>&nbsp;content creation
							</div>
						</td>
						<td><DoneIcon className={styles.pricing_section__table_icon__done}/></td>
						<td><DoneIcon className={styles.pricing_section__table_icon__done}/></td>
					</tr>
					<tr>
						<td>
							<div className={styles.pricing_section__table_cell}>
								<span className={styles.pricing_section__table_cell__image}>
									<img src={'/table-drive.svg'} alt={'Drive Icon'}/>
								</span>
								<b>Drive</b>&nbsp;Secure cloud storage
							</div>
						</td>
						<td><b>15 GB per user</b></td>
						<td><b>2 TB per user</b></td>
					</tr>
					<tr>
						<td>
							<div className={styles.pricing_section__table_cell}>
								<span className={styles.pricing_section__table_cell__image}/>
								Shared drives for your team
							</div>
						</td>
						<td><RemoveIcon className={styles.pricing_section__table_icon__remove}/></td>
						<td><DoneIcon className={styles.pricing_section__table_icon__done}/></td>
					</tr>
					<tr>
						<td>
							<div className={styles.pricing_section__table_cell}>
								<span className={styles.pricing_section__table_cell__image}>
									<img src={'/table-gmail.svg'} alt={'Gmail Icon'}/>
								</span>
								<b>Gmail</b>&nbsp;Secure email
							</div>
						</td>
						<td><DoneIcon className={styles.pricing_section__table_icon__done}/></td>
						<td><DoneIcon className={styles.pricing_section__table_icon__done}/></td>
					</tr>
					<tr>
						<td>
							<div className={styles.pricing_section__table_cell}>
								<span className={styles.pricing_section__table_cell__image}/>
								Custom business email
							</div>
						</td>
						<td><RemoveIcon className={styles.pricing_section__table_icon__remove}/></td>
						<td><DoneIcon className={styles.pricing_section__table_icon__done}/></td>
					</tr>
					<tr>
						<td>
							<div className={styles.pricing_section__table_cell}>
								<span className={styles.pricing_section__table_cell__image}>
									<img src={'/table-meet.svg'} alt={'Meet Icon'}/>
								</span>
								<b>Meet</b>&nbsp;Video and voice conferencing
							</div>
						</td>
						<td><b>100 participants</b></td>
						<td><b>150 participants</b></td>
					</tr>
					<tr>
						<td>
							<div className={styles.pricing_section__table_cell}>
								<span className={styles.pricing_section__table_cell__image}/>
								Meeting recordings saved to Drive
							</div>
						</td>
						<td><RemoveIcon className={styles.pricing_section__table_icon__remove}/></td>
						<td><DoneIcon className={styles.pricing_section__table_icon__done}/></td>
					</tr>
					<tr>
						<td>
							<div className={styles.pricing_section__table_cell}>
								<span className={styles.pricing_section__table_cell__image}>
									<img src={'/table-admin.svg'} alt={'Admin Icon'}/>
								</span>
								<b>Admin</b>&nbsp;Centralized administration
							</div>
						</td>
						<td><RemoveIcon className={styles.pricing_section__table_icon__remove}/></td>
						<td><DoneIcon className={styles.pricing_section__table_icon__done}/></td>
					</tr>
					<tr>
						<td>
							<div className={styles.pricing_section__table_cell}>
								<span className={styles.pricing_section__table_cell__image}/>
								Group-based security policy controls
							</div>
						</td>
						<td><RemoveIcon className={styles.pricing_section__table_icon__remove}/></td>
						<td><DoneIcon className={styles.pricing_section__table_icon__done}/></td>
					</tr>
					<tr>
						<td>
							<div className={styles.pricing_section__table_cell}>
								<span className={styles.pricing_section__table_cell__image}/>
								Customer support
							</div>
						</td>
						<td><b>Self-service online and community forums</b></td>
						<td><b>24/7 online support and community forums</b></td>
					</tr>
				</tbody>
			</table>
		</section>
	);
};

export default PricingSection;
