import { FC } from 'react';
import { Box } from '@mui/material';
import Head from 'next/head';

interface Props {
  children: JSX.Element;
  title?: string;
}

export const Layout: FC<Props> = ({ title = 'OpenJira', children }) => {
  return (
    <Box sx={{ flexFlow: 1 }}>
      <Head>
        <title>{title}</title>
      </Head>
      {/* Navbar */}
      {/* Sidebar */}
      <Box sx={{ padding: '10px 20px' }}>{children}</Box>
    </Box>
  );
};
