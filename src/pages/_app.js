import Head from 'next/head';
import 'antd/dist/antd.css';

const DoSports = ({ Component }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>DoSports!</title>
      </Head>
      <Component/>
    </>
  )
}

export default DoSports;