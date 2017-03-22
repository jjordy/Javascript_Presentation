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
  S,
  Layout,
  Fill,
  Fit,
  Appear,
  CodePane,
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
  npm: require('../assets/npm.png'),
  linkedin: require('../assets/linkedin.png'),
  webpack: require('../assets/webpack.svg'),
  gulp: require('../assets/gulp.png'),
  grunt: require('../assets/grunt.svg'),
  babel: require('../assets/babel.png'),
  react: require('../assets/react.svg'),
  reactRouter: require('../assets/react-router.svg'),
  redux: require('../assets/redux.svg'),
  semantic: require('../assets/semantic-ui.svg'),
  reduxExample: require('../assets/redux_state_slice.png'),
  sentry1: require('../assets/sentry_1.png'),
  sentry2: require('../assets/sentry_2.png'),
  sentry3: require('../assets/sentry_3.png'),
  accessDevtools: require('../assets/access_the_devtools.gif'),
  devtoolsAppPane: require('../assets/devtools_application_pane.png'),
  devtoolsConsole: require('../assets/devtools_console.png'),
  devtoolsElements: require('../assets/devtools_elements_pane.png'),
  devtoolsNetwork: require('../assets/devtools_network_pane.png'),
  devtoolsNetworkDetail: require('../assets/devtools_network_detail_pane.png'),
  devtoolsNetworkReqHeaders: require('../assets/devtools_request_headers_pane.png'),
  consoleAJAX: require('../assets/console_ajax.png'),
  setupDevtools: require('../assets/setup_devtools.gif')
};

preloader(images);

const theme = createTheme({
  primary: 'white',
  secondary: '#1F2022',
  tertiary: '#03A9FC',
  quartenary: '#CECECE',
  alert: '#f30'
}, {
    primary: 'Montserrat',
    secondary: 'Helvetica'
  });


const Divider = () => (
  <div style={{ borderBottom: '2px solid #e7e7e7', marginTop: 15, marginBottom: 15 }} />
)

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
          <Appear fid="1">
            <List>
              <ListItem textSize="1.5rem">You go to your browser</ListItem>
              <ListItem textSize="1.5rem">You type in an address</ListItem>
              <ListItem textSize="1.5rem">The browser creates a request which goes to a Domain Name Server</ListItem>
              <ListItem textSize="1.5rem">The Domain name server converts your requested url into a Number (IP Address)</ListItem>
              <ListItem textSize="1.5rem">Your request arrives at the server</ListItem>
              <ListItem textSize="1.5rem">The server processes your request and returns the page</ListItem>
              <ListItem textSize="1.5rem">You proceed to browse facebook.</ListItem>
            </List>
          </Appear>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="tertiary"> {/* Anatomy 2 */}
          <Heading size={6} textColor="quartenary" caps>Anatomy of a Request</Heading>
          <Image width={450} src={images.browserDownload} />
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary"> {/* Server Role */}
          <Heading fit caps>On the server</Heading>
            <Text caps textColor="primary">At this point there are 2 things that can happen.
            Based on the type of server / application you are dealing with.</Text>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary"> {/* Dynamic server examples */}
          <Heading caps>Dynamic Web Server Examples</Heading>
          <Text caps textColor='primary'>Saint Student</Text>
          <Text caps textColor='primary'>Rest API</Text>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary"> {/* Static Web Server */}
          <Heading caps>Static Web Server</Heading>
          <Text fit textColor='primary'>Is only concerned with serving a folder of files to the internet aka a Virtual Directory</Text>
          <Divider />
          <Text fit textColor='primary'>There is a convention in HTTP protocol
          that says if an <S type='underline'>index.html</S> file exist in a static virtual directory you can serve that as the root of the directory.</Text>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary"> {/* Static Server Examples */}
          <Heading caps>Static Examples</Heading>
          <Divider />
          <Text fit textColor='primary'>As far as the Datacheck server is concerned Datacheck is <Text caps textColor='alert'>STATIC</Text></Text>
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
          <Appear fid="1">
            <List>
              <ListItem>Routing</ListItem>
              <ListItem>Data Fetching</ListItem>
              <ListItem>Rich User Experience</ListItem>
            </List>
          </Appear>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary"> {/* What makes a web app */}
          <Heading caps fit textColor="tertiary">
            Broken Down
          </Heading>
          <Divider />
          <Appear fid='1'>
            <Text caps textColor='primary' fit>A web application is <S type='underline'>one or many user interfaces arranged by function</S></Text>
          </Appear>
          <Appear fid='2'>
            <Text caps textColor='alert'>Make A complex task <S type='underline'>simple...</S></Text>
          </Appear>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary"> {/* Routing Overview */}
          <Heading caps fit textColor="tertiary">
            Routing Overview
          </Heading>
          <Appear fid="1">
            <List>
              <ListItem textSize="1.5rem">Routing allows us to divide our application into similar parts</ListItem>
              <ListItem textSize="1.5rem">Through urls we can tie data to a location</ListItem>
              <Appear fid="2">
                <Image src={images.dataMapUrl} width={450} />
              </Appear>
              <Appear fid="3">
                <ListItem textSize="1.5rem">Routing can take place on the server or the client (browser).</ListItem>
              </Appear>
            </List>
          </Appear>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary"> {/* Data Fetching Overview */}
          <Heading fit caps>Data Fetching</Heading>
          <br />
          <Appear fid="1">
            <Text fit textColor="quartenary">How are we going to get the data we need to display to our users.</Text>
          </Appear>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary"> {/* User Experience */}
          <Heading fit caps textColor="tertiary">User Experience</Heading>
          <List>
            <Appear fid="1">
              <ListItem textColor="primary">We want complete control of a users interactions across the application</ListItem>
            </Appear>
            <Appear fid="2">
              <ListItem textColor="primary">We want to allow complex actions</ListItem>
            </Appear>
            <Appear fid="2">
              <ListItem textColor="primary">A good user experience is converting complex actions into a simple interface.</ListItem>
            </Appear>
          </List>

        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary"> {/* Non JS Form */}
          <Heading size={1} caps fit>
            Bad User Experience
          </Heading>
          <Image src={images.staticSiteFormSubmittal} width={600} />
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
          <Image src={images.questions} width={400} />
          <Heading size={1} textColor="quartenary" caps fit>
            Questions ?
          </Heading>
        </Slide>
        {/* Javascript */}
        <Slide transition={['zoom']} bgColor="#222"> {/* Intro Header */}
          <Heading size={1} fit caps lineHeight={1} textColor="#FFF">
            Javascript
          </Heading>
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
        <Slide transition={['fade']} bgColor="secondary" textColor="primary"> {/* Oreilly Quote */}
          <BlockQuote>
            <Quote>Learning JavaScript used to mean you weren't a serious software developer. Today, not learning Javascript means the same thing.</Quote>
            <Cite>Tim O"Reilly</Cite>
          </BlockQuote>
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
                <Appear fid="1">
                  <ListItem textSize="2.0rem">Application Loaded upfront.</ListItem>
                </Appear>
                <br />
                <Appear fid="2">
                  <ListItem textSize="2.0rem">Better perceived Performance due to application logic existing locally in the browser.</ListItem>
                </Appear>
              </List>
            </Fill>
            <div style={{ borderRight: '2px solid #e7e7e7', marginRight: 15, marginLeft: 15 }} />
            <Fill>
              <List>
                Cons
                <br />
                <Appear fid="4">
                  <ListItem textSize="2.0rem">Slow Initial Load</ListItem>
                </Appear>
                <br />
                <Appear fid="5">
                  <ListItem textSize="2.0rem">Until Recently Search Crawlers have had problems parsing javascript sites.</ListItem>
                </Appear>
              </List>
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary"> {/* Questions */}
          <Heading size={1} caps fit>
            Mind Blown
          </Heading>
          <Image src={images.questions} width={400} />
          <Heading size={1} textColor="quartenary" caps fit>
            Questions ?
          </Heading>
        </Slide>
        {/* Javascript on the server */}
        <Slide transition={['zoom']} bgColor="#222"> {/* Intro Header */}
          <Heading size={1} fit caps lineHeight={1} textColor="#FFF">
            Javascript on the Server
          </Heading>
          <Image src={images.kat} />
          <Appear fid="1">
            <Text fit caps textColor="tertiary">Say what..</Text>
          </Appear>
        </Slide>
        <Slide transition={['fade']} bgColor="#222"> {/* NodeJS Intro */}
          <Image width={200} src={images.nodeJS} />
          <Text textColor="primary" fit>Node.js is an open-source, cross-platform JavaScript runtime environment
                for developing a diverse variety of server tools and applications.
                Although Node.js is not a JavaScript framework, many of
                its basic modules are written in JavaScript, and developers can write
                new modules in JavaScript. The runtime environment interprets
                JavaScript using Google's V8 JavaScript engine.</Text>
          <Appear fid="1">
            <List textColor="primary">
              <Appear fid="2">
                <ListItem>Event Driven architecture capable of asynchronous I/O</ListItem>
              </Appear>
              <Appear fid="2">
                <ListItem fit>Allows you to use javascript in a server environment.</ListItem>
              </Appear>
            </List>
          </Appear>
        </Slide>
        <Slide transition={['fade']} bgColor="#222"> {/* NPM Intro */}
          <Image width={200} src={images.npm} />
          <Appear fid="1">
            <List textColor="primary">
              <Appear fid="2">
                <ListItem>Default package manager for Node Javascript Runtime Environment</ListItem>
              </Appear>
              <Appear fid="2">
                <ListItem>Largest code registry in the world</ListItem>
              </Appear>
              <Appear fid="2">
                <ListItem>400,000 + Packages</ListItem>
              </Appear>
              <Appear fid="3">
                <ListItem>Makes it easy to install application dependencies</ListItem>
              </Appear>
            </List>
          </Appear>
        </Slide>
        <Slide transition={['fade']} bgColor="primary"> {/* Whose using it. */}
          <Heading fit caps>Whose Using Node</Heading>
          <Image src="https://www.paypalobjects.com/webstatic/en_US/i/buttons/PP_logo_h_100x26.png" width={100} /><br />
          <Image src="https://upload.wikimedia.org/wikipedia/commons/7/77/The_New_York_Times_logo.png" width={200} /><br />
          <Image src="https://cdn1.tnwcdn.com/wp-content/blogs.dir/1/files/2016/06/Netflix-Older-Logo.png" width={200} /><br />
          <Image src={images.linkedin} width={200} />
          <Appear fid="1">
            <Text fit textColor="secondary" >GoDaddy, Groupon, IBM, Microsoft, SAP, Walmart, Yahoo</Text>
          </Appear>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">{/* Serverside Breakdown */}
          <Heading>Server Side Breakdown</Heading>
          <Layout>
            <Fill>
              <List>
                Pros
                  <br />
                <Appear fid="1">
                  <ListItem textSize="2.0rem">Fast Initial Render</ListItem>
                </Appear>
                <br />
                <Appear fid="2">
                  <ListItem textSize="2.0rem">Good for SEO</ListItem>
                </Appear>
                <br />
                <Appear fid="3">
                  <ListItem textSize="2.0rem">Good for static content</ListItem>
                </Appear>
              </List>
            </Fill>
            <div style={{ borderRight: '2px solid #e7e7e7', marginRight: 15, marginLeft: 15 }} />
            <Fill>
              <List>
                Cons
                  <br />
                <Appear fid="4">
                  <ListItem textSize="2.0rem">Still need javascript for dynamic user interactions</ListItem>
                </Appear>
                <br />
                <Appear fid="5">
                  <ListItem textSize="2.0rem">Trips to the server are costly</ListItem>
                </Appear>
              </List>
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary"> {/* Web Overview */}
          <Heading>Web Overview</Heading>
          <br />
          <Appear fid="1">
            <Text fit textColor="quartenary">Application can be rendered on the server (Server Side Applcations)</Text>
          </Appear>
          <br />
          <Appear fid="2">
            <Text fit textColor="quartenary">Applications can be rendered on the client (Client Side Applications)</Text>
          </Appear>
          <br />
          <Appear fid="3" >
            <Text fit textColor="quartenary">Applications can be a hybrid of both. (Universal Javascript Application)</Text>
          </Appear>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary"> {/* Questions */}
          <Heading size={1} caps fit>
            Mind Blown
          </Heading>
          <Image src={images.questions} width={400} />
          <Heading size={1} textColor="quartenary" caps fit>
            Questions ?
          </Heading>
        </Slide>
        {/* Javascript in the build toolchain */}
        <Slide transition={['zoom']} bgColor="secondary"> {/* Build Intro */}
          <Heading size={1} fit caps lineHeight={1} textColor="#FFF">
            Javascript in the build toolchain
          </Heading>
          <Image src={images.webpack} width={300} />
          <Image src={images.gulp} width={100} />
          <Image src={images.grunt} width={100} />
          <Image src={images.babel} width={300} />
        </Slide>
        <Slide transition={['fade']} bgColor="secondary"> {/* Build List */}
          <List>
            <ListItem textSize="1.4rem" textColor="primary" >
              Because nodeJS is javascript and runs on the server/desktop its a great candidate for developer tools.
            </ListItem>
            <ListItem textSize="1.4rem" textColor="primary" >
              It also has a great way to manage application dependencies built in.
            </ListItem>
            <ListItem textSize="1.4rem" textColor="primary" >
              No matter the type a lot of modern web apps depend on the NODE ecosystem to get there dependenies and handle the build/compile process.
            </ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary"> {/* JS dev to prod*/}
          <Heading fit caps textColor="quartenary">What needs to happen to ship our JS to Production.</Heading>
          <List>
            <ListItem textSize="1.2rem" textColor="primary" >We need to make our code as small as possible because it has to go over the interwebz. (Minification)</ListItem>
            <ListItem textSize="1.2rem" textColor="primary" >We need to make our code work in a range of browsers despite there inconsistencies (Polyfilling)</ListItem>
            <ListItem textSize="1.2rem" textColor="primary" >
              We need to split our code into multiple files during development so its easy to reason about.
              But we need to ship as few files as possible</ListItem>
          </List>
        </Slide>
        {/* Javascript Libraries In Use at Global */}
        <Slide transition={['zoom']} bgColor="secondary"> {/* Libraries Intro */}
          <Heading size={1} fit caps lineHeight={1} textColor="#FFF">
            Javascript Libraries
          </Heading>
          <Layout>
            <Fill>
              <Image src={images.react} />
            </Fill>
            <Fill>
              <Image src={images.redux} />
            </Fill>
            <Fill>
              <Image src={images.reactRouter} />
            </Fill>
            <Fill>
              <Image src={images.semantic} />
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary"> {/* JS libraries and packages */}
          <Heading fit caps textColor="tertiary">Lets talk about Javascript Libraries and packages.</Heading>
          <Text fit caps textColor="primary">Using the tools we just talked about we can define dependencies in our
          application that allow us to solve problems faster and more efficiently.</Text>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary"> {/* React */}
          <Heading fit caps textColor="tertiary">React</Heading>
          <Text fit caps textColor="primary">A JAVASCRIPT LIBRARY FOR BUILDING USER INTERFACES</Text>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary"> {/* React Example */}
          <Heading fit caps textColor="tertiary">Simple React Example</Heading>
          <CodePane
            lang="jsx"
            source={require('raw-loader!../assets/react_app.example')}
            margin="20px auto"
          />
        </Slide>
        <Slide transition={['fade']} bgColor="secondary"> {/* Advanced Component */}
          <Heading fit caps textColor="tertiary">Advanced Component</Heading>
          <CodePane
            lang="jsx"
            source={require('raw-loader!../assets/complex_react.example')}
            margin="20px auto"
          />
        </Slide>
        <Slide transition={['fade']} bgColor="secondary"> {/* Using Advanced */}
          <Heading fit caps textColor="tertiary">Using the component</Heading>
          <CodePane
            lang="jsx"
            source={require('raw-loader!../assets/using_component.example')}
            margin="20px auto"
          />
        </Slide>
        <Slide transition={['fade']} bgColor="secondary"> {/* React Router*/}
          <Heading fit caps textColor="tertiary">React Router</Heading>
          <Text fit caps textColor="primary">You guessed it a router for react.</Text>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary"> {/* React Router Example */}
          <Heading fit caps textColor="tertiary">Simple React Router Example</Heading>
          <CodePane
            lang="jsx"
            source={require('raw-loader!../assets/react_router.example')}
            margin="20px auto"
          />
        </Slide>
        <Slide transition={['fade']} bgColor="secondary"> {/* Redux */}
          <Heading fit caps textColor="tertiary">Redux</Heading>
          <Text fit caps textColor="primary">Sane State & data management for React</Text>
          <Text fit caps textColor="primary">We need a way to manage all the data we get for our application</Text>
          <Text fit caps textColor="primary">We might need this data in multiple components accross the app.</Text>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary"> {/* Redux Example */}
          <Heading fit caps textColor="tertiary">Redux state example from datacheck.</Heading>
          <Image src={images.reduxExample} />
        </Slide>
        <Slide transition={['fade']} bgColor="secondary"> {/* Error handling */}
          <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
            Error handling
          </Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary"> {/* Error handling */}
          <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
            Sentry
          </Heading>
          <Text textColor="primary">Our goal is to catch errors across all our services
          and have one place where we can view and track them</Text>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary"> {/* Sentry example 1 */}
          <Heading caps fit>Sentry Error Title</Heading>
          <Layout>
            <Fit>
              <Image src={images.sentry1} />
            </Fit>
          </Layout>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary"> {/* Sentry example 2 */}
          <Heading caps fit>Diving deeper</Heading>
          <Layout>
            <Fit>
              <Image src={images.sentry2} />
            </Fit>
          </Layout>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary"> {/* Sentry example 3 */}
          <Layout>
            <Fit>
              <Image src={images.sentry3} />
            </Fit>
          </Layout>
        </Slide>
        <Slide transition={['zoom']} bgColor="secondary"> {/* Debugging Intro */}
          <Heading size={1} fit caps lineHeight={1} textColor="#FFF">
            Debugging web applications Using chrome dev tools.
          </Heading>
          <Text fit textColor="tertiary">These examples will use chrome dev tools</Text>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary"> {/* Accessing the devtools */}
          <Heading size={1} fit caps lineHeight={1} textColor="#FFF">
            Accessing the dev tools.
          </Heading>
          <Image src={images.accessDevtools} width={950} />
        </Slide>
        <Slide transition={['fade']} bgColor="secondary"> {/* Elements Pane */}
          <Heading size={1} fit caps lineHeight={1} textColor="#FFF">
            Elements Pane
          </Heading>
          <Image src={images.devtoolsElements} width={950} />
        </Slide>
        <Slide transition={['fade']} bgColor="secondary"> {/* Console Pane */}
          <Heading size={1} fit caps lineHeight={1} textColor="#FFF">
            Console Pane
          </Heading>
          <Image src={images.devtoolsConsole} width={950} />
        </Slide>
        <Slide transition={['fade']} bgColor="secondary"> {/* App Pane */}
          <Heading size={1} fit caps lineHeight={1} textColor="#FFF">
            Application Pane
          </Heading>
          <Image src={images.devtoolsAppPane} width={950} />
        </Slide>
        <Slide transition={['fade']} bgColor="secondary"> {/* Network Pane 1 */}
          <Heading size={1} fit caps lineHeight={1} textColor="#FFF">
            Network Pane
          </Heading>
          <Image src={images.devtoolsNetwork} width={950} />
        </Slide>
        <Slide transition={['fade']} bgColor="secondary"> {/* Network Pane 2 */}
          <Heading size={1} fit caps lineHeight={1} textColor="#FFF">
            Network Detail Pane
          </Heading>
          <Image src={images.devtoolsNetworkDetail} width={950} />
        </Slide>
        <Slide transition={['fade']} bgColor="secondary"> {/* Network Pane 3 */}
          <Heading size={1} fit caps lineHeight={1} textColor="#FFF">
            Network Headers Pane
          </Heading>
          <Image src={images.devtoolsNetworkReqHeaders} width={950} />
        </Slide>
        <Slide transition={['fade']} bgColor="secondary"> {/* Network Pane 3 */}
          <Heading size={1} fit caps lineHeight={1} textColor="#FFF">
            Ajax request in console.
          </Heading>
          <Image src={images.consoleAJAX} width={950} />
        </Slide>
        <Slide transition={['fade']} bgColor="secondary"> {/* Setup devtools */}
          <Heading size={1} fit caps lineHeight={1} textColor="#FFF">
            Turning that on.
          </Heading>
          <Image src={images.setupDevtools} width={950} />
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary"> {/* Questions */}
          <Heading size={1} caps fit>
            Mind Blown
          </Heading>
          <Image src={images.questions} width={400} />
          <Heading size={1} textColor="quartenary" caps fit>
            Questions ?
          </Heading>
        </Slide>
      </Deck>
    );
  }
}
