import Head from 'next/head';
import 'antd/dist/antd.css';

type DoSportsProps = {
  Component: React.FC
};

const DoSports: React.FC<DoSportsProps> = ({ Component }) => {
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