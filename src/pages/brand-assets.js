import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import SiteHero from "@site/src/components/SiteHero";

function HomepageHeader() {
  const {siteTitle} = "useDocusaurusContext()";
  return (
    <SiteHero
        title='Brand Assets'
        description='Our brand is a reflection of everything that we create. Here are 
        some of the things that make up our brand and how you can use them.'
        bannerType ='overlap'
      />
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader/>
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
