import {
  Avatar,
  Box,
  Center,
  Flex,
  Link,
  Spacer,
  Text
} from '@chakra-ui/react';

import siteConfig from '../../../../config/site.config';

const CopyrightNotice = () => {
  return (
    <Box
      id={'copyright'}
      py={5}
      px={{ base: 10, md: 20 }}
      bg={'gray.800'}
      color={'white'}
    >
      <Flex direction={{ base: 'column', md: 'row' }}>
        <Text>{siteConfig.copyrightText}</Text>
        <Spacer />
        <Text>v{siteConfig.siteVersion}</Text>
      </Flex>
      <Center>
        <Text title={'Made with Love and NextJs by Web3ID'}>
          &lt;/&gt; with 💖 &amp;{' '}
          <Avatar
            size={'xs'}
            name={'NextJs'}
            src={
              'https://pbs.twimg.com/profile_images/1565710214019444737/if82cpbS_400x400.jpg'
            }
          />{' '}
          by{' '}
          <Link href={'https://web30.my.id'} isExternal>
            Web3ID
          </Link>
        </Text>
      </Center>
    </Box>
  );
};

export default CopyrightNotice;
