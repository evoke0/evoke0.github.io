import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Automatic updates',
    Svg: require('@site/static/img/undraw_update.svg').default,
    description: (
      <>
        Kalpa is preconfigured to update itself on a daily basis. Stop losing time on boring updates; let the system take care of it.
      </>
    ),
  },
  {
    title: 'Immutable',
    Svg: require('@site/static/img/undraw_checking_boxes.svg').default,
    description: (
      <>
        Leveraging MicroOS' immutable nature, updates are either applied or not at all; no more broken systems after an update.
      </>
    ),
  },
  {
    title: 'Minimal',
    Svg: require('@site/static/img/techlife_boxes.svg').default,
    description: (
      <>
        Packed with the bare minimum to work efficiently. Kalpa is bloatware-free.
      </>
    ),
  },
  {
    title: 'Isolated',
    Svg: require('@site/static/img/techlife_isolated.svg').default,
    description: (
      <>
        Configured to use Flatpak by default, all your apps have extremely limited access to the host environment. Seconded by a read-only file system.
      </>
    ),
  },
  {
    title: 'Containerized workload',
    Svg: require('@site/static/img/undraw_container.svg').default,
    description: (
      <>
        With Distrobox and Podman ready to use, deploy or install your needs in just a flinch. When you are done with it, remove the container and do as if nothing had happened.
      </>
    ),
  },
  {
    title: 'Focus on what matters',
    Svg: require('@site/static/img/undraw_focus.svg').default,
    description: (
      <>
        Kalpa Desktop works out of the box. Just install it and forget about the OS; stay focused on your needs.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
