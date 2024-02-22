import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import SiteHero from "@site/src/components/SiteHero";

import Heading from '@theme/Heading';

function HomepageHeader() {
  const {siteTitle} = "useDocusaurusContext()";
  return (
    <SiteHero
        title='Stay Informed'
        description='Get access to the latest Cardano news and content, and the hottest topics happening around the Cardano ecosystem.'
        bannerType ='default'
      />
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
      FIXME: Ouroboros
      </main>
    </Layout>
  );
}
