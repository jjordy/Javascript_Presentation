// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Layout,
  Fill,
  Appear,
  Image,
  Quote,
  Slide,
  Text
} from 'spectacle';

// Import image preloader util
import preloader from 'spectacle/lib/utils/preloader';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Require CSS
require('normalize.css');
require('spectacle/lib/themes/default/index.css');


const images = {
  city: require('../assets/city.jpg'),
  kat: require('../assets/kat.png'),
  logo: require('../assets/formidable-logo.svg'),
  markdown: require('../assets/markdown.png'),
  rocket: require('../assets/rocket-ship.svg'),
  staticSiteFormSubmittal: require('../assets/static_site_Form_Submittal.gif'),
  dynamicSiteFormSubmittal: require('../assets/dynamic_site_Form_Submittal.gif'),
  bundle: require('../assets/bundle.png'),
  serverSide: require('../assets/client_server_relationship.png'),
  membersScreen: require('../assets/members_screen.gif'),
  clientSideIndex: require('../assets/client_side_index.png'),
  complexActions: require('../assets/complex_actions.gif'),
  browserDownload: require('../assets/browser_parse_process.png'),
  dataMapUrl: require('../assets/url_data_map.png'),
  questions: require('../assets/questions.gif'),
  nodeJS: require('../assets/nodejs.png'),
  npm: require('../assets/npm.png')
};

preloader(images);

const theme = createTheme({
  primary: 'white',
  secondary: '#1F2022',
  tertiary: '#03A9FC',
  quartenary: '#CECECE'
}, {
  primary: 'Montserrat',
  secondary: 'Helvetica'
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={['zoom', 'slide']} transitionDuration={500} theme={theme}>
        {/* Introduction to Web Applications */}
        <Slide transition={['zoom']} bgColor="#222"> {/* Intro Header */}
          <Image height={150} src={images.rocket} />
          <Heading size={1} fit caps lineHeight={1} textColor="#FFF">
            Into the next generation
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={3} fit bold>
            By Jordan Addison
          </Text>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary"> {/* Legend 1 */}
          <Heading size={6} textColor="secondary" caps>What well go over in Hour 1</Heading>
          <List>
            <ListItem>Web & Web Application Basics</ListItem>
            <ListItem>Javascript on the client</ListItem>
            <ListItem>Javascript on the server</ListItem>
            <ListItem>Javascript in the build toolchain.</ListItem>
            <ListItem>Javascript libraries</ListItem>
            <ListItem>Error Collection and handling</ListItem>
            <ListItem textSize="2.0rem">Using the browser tools to find errors and debug web applications</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary"> {/* Legend 2 */}
          <Heading size={6} textColor="secondary" caps>What well go over in Hour 2 (Advanced)</Heading>
          <List>
            <ListItem>Web Application deployment</ListItem>
            <ListItem>Application Monitoring & Process management</ListItem>
            <ListItem>Docker</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="tertiary"> {/* Anatomy 1 */}
          <Heading size={6} textColor="quartenary" caps>Anatomy of a request</Heading>
          <List>
            <ListItem>You go to your browser</ListItem>
            <ListItem>You type in an address</ListItem>
            <ListItem>The internet does magic and converts the name you typed in into a number</ListItem>
            <ListItem>Your request arrives at the server</ListItem>
            <ListItem>The server processes your request and returns the page</ListItem>
            <ListItem>You proceed to browse facebook.</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="tertiary"> {/* Anatomy 2 */}
          <Heading size={6} textColor="quartenary" caps>Anatomy of a Request</Heading>
          <Image width={450} src={images.browserDownload} />
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary"> {/* Server Role */}
          <Heading fit caps>On the server</Heading>
          <Appear fid="1">
            <List>
              <Appear fid="2">
                <ListItem textSize="1.5rem">
                  Firstly Check to make sure the page requested exist and is defined in the application.
                </ListItem>
              </Appear>
              <Appear fid="3">
                <ListItem textSize="1.5rem">
                  Secondly Fetch any data the next page might need
                </ListItem>
              </Appear>
              <Appear fid="4">
                <ListItem textSize="1.5rem">
                  Thirdly to turn that data back into something the browser can read. ( A string of html)
                </ListItem>
              </Appear>
            </List>
          </Appear>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="tertiary"> {/* On the browser */}
          <Heading size={6} textColor="quartenary" caps>Once the browser has control back</Heading>
          <List>
            <ListItem>Parse html</ListItem>
            <ListItem>Compile Javascript</ListItem>
            <ListItem>Render Page</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary"> {/* What makes a web app */}
          <Heading caps fit textColor="tertiary">
            What makes a web application
          </Heading>
          <Appear fid='1'>
            <List>
              <ListItem>Routing</ListItem>
              <ListItem>Data Fetching</ListItem>
              <ListItem>Rich User Experience</ListItem>
            </List>
          </Appear>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary"> {/* Routing Overview */}
          <Heading caps fit textColor="tertiary">
            Routing Overview
          </Heading>
          <Appear fid='1'>
            <List>
              <ListItem textSize='1.5rem'>Routing allows us to divide our application into similar parts</ListItem>
              <ListItem textSize='1.5rem'>Through urls we can tie data to a location</ListItem>
              <Appear fid='2'>
                <Image src={images.dataMapUrl} width={450} />
              </Appear>
              <Appear fid='3'>
                <ListItem textSize='1.5rem'>Routing can take place on the server or the client (browser).</ListItem>
              </Appear>
            </List>
          </Appear>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary"> {/* Data Fetching Overview */}
          <Heading fit caps>Data Fetching</Heading>
          <br />
          <Appear fid='1'>
            <Text fit textColor='quartenary'>How are we going to get the data we need to display to our users.</Text>
          </Appear>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary"> {/* User Experience */}
          <Heading fit caps textColor="tertiary">User Experience</Heading>
          <List>
            <Appear fid="1">
              <ListItem textColor='primary'>We want complete control of a users interactions across the application</ListItem>
            </Appear>
            <Appear fid="2">
              <ListItem textColor='primary'>We want to allow complex actions</ListItem>
            </Appear>
            <Appear fid="2">
              <ListItem textColor='primary'>A good user experience is converting complex actions into a simple interface.</ListItem>
            </Appear>
          </List>

        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary"> {/* Non JS Form */}
          <Heading size={1} caps fit>
            Bad User Experience
          </Heading>
          <Image src={images.staticSiteFormSubmittal} width={600}/>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary"> {/* Javascript Form Submit */}
          <Heading size={1} caps fit>
            Good User Experience
          </Heading>
          <Image src={images.dynamicSiteFormSubmittal} width={600} />
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary"> {/* Questions */}
          <Heading size={1} caps fit>
            Mind Blown
          </Heading>
          <Image src={images.questions} width={400}/>
          <Heading size={1} textColor='quartenary' caps fit>
            Questions ?
          </Heading>
        </Slide>
        {/* Javascript */}
        <Slide transition={['zoom']} bgColor="#222"> {/* Intro Header */}
          <Heading size={1} fit caps lineHeight={1} textColor="#FFF">
            Javascript
          </Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary"> {/* Oreilly Quote */}
          <BlockQuote>
            <Quote>Learning JavaScript used to mean you weren't a serious software developer. Today, not learning Javascript means the same thing.</Quote>
            <Cite>Tim O"Reilly</Cite>
          </BlockQuote>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary"> {/* Why Javascript */}
          <Heading size={1} caps fit>
            Why Javascript?
          </Heading>
          <Appear fid="1">
            <Text margin="10px 0 0" textColor="primary" size={3} fit bold>What can html do without Javascript?</Text>
          </Appear>
          <Appear fid="2">
            <Text margin="10px 0 0" textColor="primary" size={3} fit bold>Not much</Text>
          </Appear>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary"> {/*Client Side App */}
          <Heading size={1} caps fit>
            Client Side Javascript Applications (SPA)
          </Heading>
          <Appear fid="1">
            <Text margin="10px 0 0" textColor="primary" size={3} fit bold>What is it?</Text>
          </Appear>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary"> {/* SPA Desc */}
          <Heading size={4} caps textColor="tertiary">
            A single-page application
          </Heading>
          <br />
          <Heading size={6} caps textColor="primary">
            is a web application or  web site that fits on a single web page with the goal of providing a
            user experience similar to that of a desktop application.
          </Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary"> {/* Client Side Route */}
          <Heading fit caps textColor="tertiary">Routing</Heading>
          <Appear fid="1">
            <Heading caps textColor="primary" fit>Client Side</Heading>
          </Appear>
          <Appear fid="2">
            <div>
              <Text fit textColor="quartenary">Routes are loaded when the application is first loaded in the browser.
                Therefore routing is instant
              </Text>
              <Image src={images.bundle} width="100%" />
            </div>
          </Appear>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary"> {/* Client Side Routing note */}
          <Appear fid="1">
            <Heading caps textColor="primary" fit>Client Side</Heading>
          </Appear>
          <Appear fid="2">
            <Text fit textColor="quartenary">Because we already loaded all the routes when the page loaded. We
              dont need to go back to the server to find out if a route exist. What that means is when a user goes through your application
              they have a much more seamless experience browsing from page to page.
            </Text>
          </Appear>
          <Appear fid="3">
            <Image src={images.clientSideIndex} width={850} />
          </Appear>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary"> {/* Data Fetching Client Side */}
          <Heading fit caps textColor="tertiary">Data Fetching</Heading>
          <Appear fid="1">
            <Heading caps textColor="primary" fit>Client Side</Heading>
          </Appear>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary"> {/* Data Fetching REST Overview */}
          <Heading fit caps textColor="tertiary">Rest API</Heading>
          <Appear fid="1">
            <List>
              <ListItem fit>Make Request via AJAX or Fetch</ListItem>
              <ListItem>Use http request to retreive our data only.</ListItem>
              <ListItem>Rest API isnt concerned with rendering or parsing any html or javascript.</ListItem>
              <ListItem>Rest API takes input and returns output in the form of an http response.</ListItem>
            </List>
          </Appear>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary"> {/* Client Side Complex Actions */}
          <Heading size={1} caps fit>
            Complex Client Side Actions
          </Heading>
          <Layout>
            <Fill>
              <Image width={450} src={images.complexActions} />
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary"> {/* Whats it mean? */}
          <Heading>So what does all that mean?</Heading>
          <Appear fid="1">
            <Text fit textColor="quartenary">Going back to the server is inefficient and results in a poor user experience most of the time.</Text>
          </Appear>
          <Appear fid="1">
            <Text fit textColor="quartenary">Why? Because most of the time data fetching is slow and it can also be done in the background.</Text>
          </Appear>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">{/* Client Side Breakdown */}
          <Heading>Client Side Breakdown</Heading>
          <Layout>
            <Fill>
              <List>
                Pros
                <br />
                <Appear fid='1'>
                  <ListItem textSize='2.0rem'>Application Loaded upfront.</ListItem>
                </Appear>
                <br />
                <Appear fid='2'>
                  <ListItem textSize='2.0rem'>Better perceived Performance due to application logic existing locally in the browser.</ListItem>
                </Appear>
              </List>
            </Fill>
            <div style={{ borderRight: '2px solid #e7e7e7', marginRight: 15, marginLeft: 15 }} />
            <Fill>
              <List>
                Cons
                <br />
                <Appear fid='4'>
                  <ListItem textSize='2.0rem'>Slow Initial Load</ListItem>
                </Appear>
                <br />
                <Appear fid='5'>
                  <ListItem textSize='2.0rem'>Until Recently Search Crawlers have had problems parsing javascript sites.</ListItem>
                </Appear>
              </List>
            </Fill>
          </Layout>
        </Slide>
      {/* Javascript on the server */}
      <Slide transition={['zoom']} bgColor="#222"> {/* Intro Header */}
        <Heading size={1} fit caps lineHeight={1} textColor="#FFF">
          Javascript on the Server
          </Heading>
      </Slide>
      <Slide transition={['zoom']} bgColor="#222"> {/* NodeJS Intro */}
        <Image width={200} src={images.nodeJS} />
        <Appear fid='1'>
          <List textColor='primary'>
            <Appear fid='2'>
              <ListItem>Chromes v8 Javascript engine on the server / desktop</ListItem>
            </Appear>
            <Appear fid='2'>
              <ListItem>Allows you to use javascript in a server environment.</ListItem>
            </Appear>
            <Appear fid='3'>
              <ListItem>Asynchronous</ListItem>
            </Appear>
          </List>
        </Appear>
      </Slide>
      <Slide transition={['zoom']} bgColor="#222"> {/* NodeJS Intro */}
        <Image width={200} src={images.npm} />
        <Appear fid='1'>
          <List textColor='primary'>
            <Appear fid='2'>
              <ListItem>Default package manager for Node Javascript Runtime Environment</ListItem>
            </Appear>
            <Appear fid='2'>
              <ListItem>Largest code registry in the world</ListItem>
            </Appear>
            <Appear fid='2'>
              <ListItem>400,000 + Packages</ListItem>
            </Appear>
            <Appear fid='3'>
              <ListItem>Makes it easy to install application dependencies</ListItem>
            </Appear>
          </List>
        </Appear>
      </Slide>
      <Slide transition={['fade']} bgColor="secondary" textColor="primary"> {/* Data Fetching Server */}
        <Heading fit caps textColor="tertiary">Data Fetching</Heading>
        <Appear fid="1">
          <Heading caps textColor="primary" fit>Server Side</Heading>
        </Appear>
      </Slide>
      <Slide transition={['fade']} bgColor="secondary" textColor="primary"> {/* Data Fetching Server */}
        <Heading fit caps textColor="tertiary">On the server</Heading>
        <Appear fid="1">
          <Text textColor='primary'>
            Because we are on the server we could directly talk
            to the database or use an interal api to get data.</Text>
        </Appear>
      </Slide>
      <Slide transition={['fade']} bgColor="secondary" textColor="primary">{/* Serverside Breakdown */}
        <Heading>Server Side Breakdown</Heading>
        <Layout>
          <Fill>
            <List>
              Pros
                <br />
              <Appear fid='1'>
                <ListItem textSize='2.0rem'>Fast Initial Render</ListItem>
              </Appear>
              <br />
              <Appear fid='2'>
                <ListItem textSize='2.0rem'>Good for SEO</ListItem>
              </Appear>
              <br />
              <Appear fid='3'>
                <ListItem textSize='2.0rem'>Good for static content</ListItem>
              </Appear>
            </List>
          </Fill>
          <div style={{ borderRight: '2px solid #e7e7e7', marginRight: 15, marginLeft: 15 }} />
          <Fill>
            <List>
              Cons
                <br />
              <Appear fid='4'>
                <ListItem textSize='2.0rem'>Still need javascript for dynamic user interactions</ListItem>
              </Appear>
              <br />
              <Appear fid='5'>
                <ListItem textSize='2.0rem'>Trips to the server are costly</ListItem>
              </Appear>
            </List>
          </Fill>
        </Layout>
      </Slide>
      <Slide transition={['fade']} bgColor="secondary" textColor="primary"> {/* Web Overview */}
        <Heading>Web Overview</Heading>
        <br />
        <Appear fid='1'>
          <Text fit textColor='quartenary'>Application can be rendered on the server (Server Side Applcations)</Text>
        </Appear>
        <br />
        <Appear fid='2'>
          <Text fit textColor='quartenary'>Applications can be rendered on the client (Client Side Applications)</Text>
        </Appear>
        <br />
        <Appear fid='3' >
          <Text fit textColor='quartenary'>Applications can be a hybrid of both. (Universal Javascript Application)</Text>
        </Appear>
      </Slide>
      </Deck>
    );
  }
}
