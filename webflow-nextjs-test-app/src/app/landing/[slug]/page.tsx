import type { InferGetStaticPropsType, GetStaticProps } from 'next'

// WEBFLOW_URL - is URL to the published Webflow site
const baseUrl = process.env.WEBFLOW_URL as string;

import parseHtml, { HTMLReactParserOptions } from 'html-react-parser';
import Head from 'next/head';
import { replaceBody } from '../../../helpers/replace-body';
import { replaceHead } from '../../../helpers/replace-head';
import { sanitize } from '../../../helpers/sanitize';

type LandingProps = {
  bodyContent: string;
  headContent: string;
};

const bodyParseOptions: HTMLReactParserOptions = { replace: replaceBody };
const headParseOptions: HTMLReactParserOptions = { replace: replaceHead };

const getContent = async()=>{
   
}

const Landing = ({ bodyContent, headContent }: LandingProps) => {
  const sanitizedHead = sanitize(headContent);
  const sanitizedBody = sanitize(bodyContent);

  return (
    <>
      <Head>{parseHtml(sanitizedHead, headParseOptions)}</Head>
      {parseHtml(sanitizedBody, bodyParseOptions)}
    </>
  );
};

export default Landing;
