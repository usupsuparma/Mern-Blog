import React from 'react';
import {IcFacebook, IcInstagram, IcLinkedin, IcTwitter, IcWhatApp, IcYoutube, LogoKabayan} from "../../../assets";
import './footer.scss';

const Icon = ({img}) => {
		return (
				<div className={'icon-wrapper'}>
						<img className={'icon-medsos'} src={img} alt={'icon'}/>
				</div>
		)
}
const Footer = () => {
		return (
				<div>
						<div className={'footer'}>
								<div>
										<img className={'logo'} src={LogoKabayan} alt={'logo-app'}/>
								</div>
								<div className={'social-wrapper'}>
										<Icon img={IcFacebook}/>
										<Icon img={IcTwitter}/>
										<Icon img={IcInstagram}/>
										<Icon img={IcLinkedin}/>
										<Icon img={IcWhatApp}/>
										<Icon img={IcYoutube}/>
								</div>
						</div>
						<div className={'copyright'}>
								<p>copyright</p>
						</div>
				</div>
		)
}

export default Footer;
