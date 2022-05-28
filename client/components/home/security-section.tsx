import React from 'react';
import styles from '../../styles/components/home.security-section.module.scss';

const SecuritySection = () => {
    return (
        <section id={'security'} className={styles.security_section}>
            <h2 className={styles.security_section__title}>
                Security, compliance, and privacy
            </h2>
            <div className={styles.security_section__logos}>
                <img src={'/security-logo-1.svg'} alt={'badge ISO IEC'} />
                <img src={'/security-logo-2.svg'} alt={'badge SOC'} />
                <img src={'/security-logo-3.svg'} alt={'badge FR'} />
                <img src={'/security-logo-4.svg'} alt={'badge Hipaa'} />
            </div>
            <div className={styles.security_section__content}>
                <div className={styles.security_section__content__column}>
                    <h3>Secure by default</h3>
                    <p>
                        We use industry-leading security measures to keep your
                        data safe, including advanced malware protections. Forms
                        is also cloud-native, eliminating the need for local
                        files and minimizing risk to your devices.
                    </p>
                    <h3>Encryption in transit and at rest</h3>
                    <p>
                        All files uploaded to Google Drive or created in Forms
                        are encrypted in transit and at rest.
                    </p>
                    <h3>Compliance to support regulatory requirements</h3>
                    <p>
                        Our products, including Forms, regularly undergo
                        independent verification of their security, privacy, and{' '}
                        <a
                            href={
                                'https://cloud.google.com/security/compliance'
                            }
                            target={'_blank'}
                            rel={'noopener noreferrer'}
                        >
                            compliance controls.
                        </a>
                    </p>
                </div>
                <div className={styles.security_section__content__column}>
                    <h3>Private by design</h3>
                    <p>
                        Forms adheres to the same robust privacy commitments and
                        data protections as the rest of{' '}
                        <a
                            href={'https://cloud.google.com/security/privacy'}
                            target={'_blank'}
                            rel={'noopener noreferrer'}
                        >
                            Google Cloud’s enterprise services.
                        </a>
                    </p>
                    <img src={'/privacy-icon.svg'} alt={'Privacy'} />
                    <ul
                        className={
                            styles.security_section__content__column__list
                        }
                    >
                        <li>You control your data.</li>
                        <li>
                            We never use your Forms content for ad purposes.
                        </li>
                        <li>
                            We never sell your personal information to third
                            parties.
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default SecuritySection;
