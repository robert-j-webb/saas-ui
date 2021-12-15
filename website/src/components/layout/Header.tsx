import { Box, Container, Flex } from '@chakra-ui/layout'
import Navigation from 'components/layout/Navigation'
import Logo from './Logo'

import LogoSolid from '/public/saasui.svg'
import LogoDark from '/public/saasui-dark.svg'

export interface HeaderProps {
  position: 'static' | 'absolute' | 'fixed' | 'sticky'
  variant: 'dark' | 'light'
}

const Header = ({ position, variant }: HeaderProps) => {
  return (
    <Box
      as="header"
      py="4"
      pos={position}
      top="0"
      w="full"
      backdropFilter="blur(5px)"
      zIndex="10"
    >
      <Container>
        <Flex width="full" align="center" justify="space-between">
          <Logo
            svg={<LogoDark />}
            svgDark={<LogoSolid />}
            text="Saas UI"
            onClick={(e) => {
              if (window.location.pathname === '/') {
                e.preventDefault()

                window.scrollTo({
                  top: 0,
                  behavior: 'smooth',
                })
              }
            }}
          />
          <Navigation />
        </Flex>
      </Container>
    </Box>
  )
}

export default Header
