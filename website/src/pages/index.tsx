import { Box, Flex, SimpleGrid } from '@chakra-ui/layout'
import {
  Container,
  Button,
  SkeletonText,
  Heading,
  Text,
  UnorderedList,
  ListItem,
  Switch,
  VStack,
  Link,
  Icon,
  FormLabel,
  useColorModeValue,
  chakra,
  useDisclosure,
} from '@chakra-ui/react'

import Hero from 'components/marketing/Hero'
import Features from 'components/marketing/Features'
import CTA from 'components/marketing/CTA'
import Section from 'components/marketing/SectionWrapper'
import SectionTitle from 'components/marketing/SectionTitle'

import ScrollSpy from 'components/ScrollSpy'

import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import visit from 'unist-util-visit'
import { useState, useEffect } from 'react'

import ClipText from 'components/motion/ClipText'

import CodePanel from 'components/CodePanel'
import ScaleInView from 'components/motion/ScaleInView'

import NextJS from '/public/frameworks/nextjs.svg'
import Blitz from '/public/frameworks/blitz.svg'
import Supabase from '/public/frameworks/supabase.svg'
import Bedrock from '/public/frameworks/bedrock.svg'

import { SignupModal } from '@/components/SignupModal'
import { SignupForm } from '@/components/SignupForm'

const Home = ({ features }: any) => {
  return (
    <Box mb={8} w="full">
      <Hero
        title={
          <>
            The React{' '}
            <ClipText bgGradient="linear(to-r, purple.700, green.400)">
              design system
            </ClipText>{' '}
            for SaaS products
          </>
        }
        description={
          <>
            Saas UI is an advanced component library build with{' '}
            <Text color={useColorModeValue('black', 'white')} d="inline">
              Typescript
            </Text>{' '}
            and{' '}
            <Text color={useColorModeValue('black', 'white')} d="inline">
              Chakra UI
            </Text>{' '}
            that allows developers to build high quality and user friendly app
            frontends at speed.
          </>
        }
      ></Hero>
      <Features
        id="features"
        title="The SaaS SDK"
        description="A set of components, patterns and tools designed with productivity and scalability in mind."
        variant="alternate"
        columns={[1, null, 3]}
        features={[
          {
            title: 'Components.',
            description:
              'Themable, composable and accessible UI components, including forms, pages, lists, settings, modals and much more.',
            variant: 'inline',
          },
          {
            title: 'Authentication.',
            description:
              'Authentication screens with passwords, magic links, oauth, OTP and password reset functionality. Build-in support for Passport.js and Supabase.',
            variant: 'inline',
          },
          {
            title: 'Onboarding.',
            description:
              'Add user onboarding flows, like tours, hints and inline documentation without breaking a sweat.',
            variant: 'inline',
          },
          {
            title: 'Feature flags.',
            description:
              "Implement feature toggles for your billing plans with easy to use hooks. Connect Flagsmith, or other remote config services once you're ready.",
            variant: 'inline',
          },
          {
            title: 'Upselling.',
            description:
              'Components and hooks for upgrade flows designed to make upgrading inside your app frictionless.',
            variant: 'inline',
          },
          {
            title: 'Themes.',
            description:
              'Includes multiple themes with darkmode support, always have the perfect starting point for your next project.',
            variant: 'inline',
          },
          {
            title: 'Generators.',
            description:
              'Extend your design system while maintaininig code quality and consistency with build-in generators.',
            variant: 'inline',
          },
          {
            title: 'Monorepo.',
            description: (
              <>
                All code is available as packages in a high-performance{' '}
                <Link href="https://turborepo.com" target="_blank">
                  Turborepo
                </Link>
                , you have full control to modify and adjust it to your
                workflow.
              </>
            ),
            variant: 'inline',
          },
          {
            title: 'Documentation.',
            description:
              'Extensively documented, including storybooks, best practices, use-cases and examples.',
            variant: 'inline',
          },
        ]}
        reveal
      />
      <Section innerWidth={['100%', null, 'xl']}>
        <ScaleInView>
          <SectionTitle title="Building SaaS products that work great and look amazing is hard" />
        </ScaleInView>
        <ScaleInView>
          <VStack fontSize="lg" spacing="8" alignItems="flex-start">
            <Text>
              Building SaaS products requires you to be a generalist on many
              fronts. However many developers aren&apos;t very design savvy and
              vica versa.
            </Text>
            <Text>
              SaaS UI tries to fill this gap by giving developers an extensive
              set of beautifully designed components build on best in class
              tools. While on the same time serve as a great foundation for
              designers to create their brand.
            </Text>
            <Text>
              With SaaS UI you&apos;ll save hundreds of hours to build essential
              functionaly for your product, time that you can use to validate
              new ideas and find your perfect product market fit.
            </Text>
            <Text>— Eelco Wiersma</Text>
          </VStack>
        </ScaleInView>
      </Section>

      <Section variant="alternate">
        <ScaleInView>
          <SectionTitle
            title="Plays well with others"
            description="Saas UI is backend agnostic and works with the framework or starter pack that you love."
          />
        </ScaleInView>

        <SimpleGrid
          columns={[2, null, 4]}
          columnGap={8}
          sx={{
            svg: {
              width: '80%',
              height: 'auto',
              maxHeight: '40px',
            },
          }}
        >
          <ScaleInView>
            <Link
              href="https://nextjs.com"
              p="8"
              d="flex"
              sx={{
                path: {
                  fill: useColorModeValue('#000', '#fff'),
                },
              }}
            >
              <NextJS alt="Next.JS logo" />
            </Link>
          </ScaleInView>
          <ScaleInView>
            <Link href="https://blitzjs.com" p="8" d="flex">
              <Blitz alt="Blitz.js logo" />
            </Link>
          </ScaleInView>
          <ScaleInView>
            <Link
              href="https://supabase.com"
              p="8"
              d="flex"
              sx={{
                'path.supabase_svg__wordmark': {
                  fill: useColorModeValue('#1F1F1F', '#FFF'),
                },
              }}
            >
              <Supabase
                alt="Supabase logo"
                viewBox="0 0 581 113" // somehow this gets removed when importing
              />
            </Link>
          </ScaleInView>
          <ScaleInView>
            <Link href="https://bedrock.mxstbr.com" p="8" d="flex">
              <Bedrock alt="Bedrock logo" />
            </Link>
          </ScaleInView>
        </SimpleGrid>

        <Text
          fontSize="sm"
          opacity="0.4"
          width={['100%', null, '50%']}
          m="0 auto"
          mt="10"
        >
          Technologies included: Nextjs, React, Chakra UI, Typescript, Styled
          Components, Emotion, React Hook Form, Turborepo, Prettier, Storybook,
          Jest, Testing Library, Hygen and more...
        </Text>
      </Section>

      <RequestAccess />

      <Section id="faq">
        <ScaleInView>
          <SectionTitle title="Frequently asked questions" />
        </ScaleInView>

        <SimpleGrid columns={[1, null, 2]} spacing={10}>
          <FaqItem
            question="How many products can I use Saas UI for?"
            answer={
              <>
                The standard license can be used for one commercial application
                or SaaS product and unlimited internal tools. You can buy as
                many licenses are you need. <br /> The extended license does not
                have any restrictions.
              </>
            }
          />
          <FaqItem
            question="Can I use Saas UI for client work?"
            answer="Yes, that's totally up to you, as long as it fits the license you purchase."
          />
          <FaqItem
            question="Can I use Saas UI for Open Source projects?"
            answer="No currently not. A large part of Saas UI is already released under MIT license. We try to give back to the community as much as possible."
          />
          <FaqItem
            question="Does Saas UI include Figma, Sketch or other design files?"
            answer="No, Saas UI does not include any design assets. Maintaining design resources costs a lot of extra effort. We believe small teams can move much faster by designing directly in code, with help of Storybooks."
          />
          <FaqItem
            question="What does 'lifetime access' mean?"
            answer="Saas UI is a one-time purchase, with no recurring subscription. You will have access to all assets of the Saas UI library forever."
          />
          <FaqItem
            question="What does 'free updates' include?"
            answer={
              <>
                We&apos;ll add new components and improvements to the library as
                we get new ideas and feedback, these updates will always be free
                for all customers that sign-up for the early access. <br />
                <br />
                We might release different stacks, for example for Vue, these
                will be sold seperately.
              </>
            }
          />
          <FaqItem
            question="I'm not satisfied, can I get my money back?"
            answer="Yeah, no hard feelings. Saas UI is opinionated and might not suit your style, let us know within 30 days of your purchase and we'll refurn your money."
          />
          <FaqItem
            question="Do you offer technical support?"
            answer={
              <>
                Once you sign up you get access to our Discord community, where
                you can ask questions, report bugs or feature requests and get
                help from other customers. <br />
                <br />
                If you require more specialised support or consultancy contact
                us at{' '}
                <Link href="mailto:hello@saas-ui.dev">hello@saas-ui.dev</Link>
              </>
            }
          />
        </SimpleGrid>
      </Section>
    </Box>
  )
}

const RequestAccess = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      {/* <ScaleInView> */}
      <CTA
        id="request-access"
        title="Get early access"
        description={
          <>
            <p>
              Saas UI is currently in private beta, be the first to try it out.
            </p>
          </>
        }
        variant="subtle"
      >
        <Container
          borderRadius="md"
          bg={useColorModeValue('white', 'gray.700')}
          borderWidth="1px"
          borderColor={useColorModeValue('gray.300', 'gray.700')}
          p={8}
          width={['100%', 'md']}
        >
          <SignupForm />
        </Container>
      </CTA>
    </>
  )
}

const FaqItem = ({ question, answer }: any) => {
  return (
    <ScaleInView>
      <chakra.dl>
        <chakra.dt>{question}</chakra.dt>
        <chakra.dd color="gray.500">{answer}</chakra.dd>
      </chakra.dl>
    </ScaleInView>
  )
}

export default Home

export async function getStaticProps() {
  return {
    props: {
      header: {
        position: 'fixed',
        variant: 'dark',
      },
    },
  }
}
