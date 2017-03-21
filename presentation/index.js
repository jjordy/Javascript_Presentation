// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Layout,
  Fit,
  Fill,
  Appear,
  Image,
  Quote,
  Slide,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png"),
  rocket: require('../assets/rocket-ship.svg'),
  static_site_Form_Submittal: require('../assets/static_site_Form_Submittal.gif'),
  dynamic_site_Form_Submittal: require('../assets/dynamic_site_Form_Submittal.gif'),
  bundle: require('../assets/bundle.png'),
  server_side: require('../assets/server_side.png')
};

preloader(images);

const theme = createTheme({
  primary: "white",
  secondary: "#1F2022",
  tertiary: "#03A9FC",
  quartenary: "#CECECE"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Slide transition={["zoom"]} bgColor="#222">
          <Image height={150} src={images.rocket} />
          <Heading size={1} fit caps lineHeight={1} textColor="#FFF">
            Into the next generation
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={3} fit bold>
            By Jordan Addison
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>What well go over in Hour 1</Heading>
          <List>
            <ListItem>Web & Web Application Basics</ListItem>
            <ListItem>Javascript on the client</ListItem>
            <ListItem>Javascript on the server</ListItem>
            <ListItem>Javascript in the build toolchain.</ListItem>
            <ListItem>Javascript libraries</ListItem>
            <ListItem>Error Collection and handling</ListItem>
            <ListItem textSize='2.0rem'>Using the browser tools to find errors and debug web applications</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>What well go over in Hour 2 (Advanced)</Heading>
          <List>
            <ListItem>Web Application deployment</ListItem>
            <ListItem>Application Monitoring & Process management</ListItem>
            <ListItem>Docker</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Learning JavaScript used to mean you weren't a serious software developer. Today, not learning Javascript means the same thing.</Quote>
            <Cite>Tim O'Reilly</Cite>
          </BlockQuote>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
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
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={1} caps fit>
            Non Javascript Example
          </Heading>
          <Image src={images.static_site_Form_Submittal} />
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={1} caps fit>
            Javascript Example
          </Heading>
          <Image src={images.dynamic_site_Form_Submittal} />
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={1} caps fit>
            Client Side Javascript Applications (SPA)
          </Heading>
          <Appear fid="1">
            <Text margin="10px 0 0" textColor="primary" size={3} fit bold>What is it?</Text>
          </Appear>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={4} caps textColor='tertiary'>
            A single-page application
          </Heading>
          <br />
          <Heading size={6} caps textColor='primary'>
             is a web application or  web site that fits on a single web page with the goal of providing a
              user experience similar to that of a desktop application.
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading caps textColor='tertiary'>
            So whats the difference?
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading fit caps textColor='tertiary'>Routing</Heading>
          <Appear fid="1">
            <Heading caps textColor='primary' fit>Client Side</Heading>
          </Appear>
          <Appear fid='2'>
            <div>
              <Text fit textColor='quartenary'>Routes are loaded when the application is first loaded in the browser.
                  Therefore routing is instant
              </Text>
              <Image src={images.bundle} width='100%'/>
            </div>
          </Appear>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Appear fid="1">
            <Heading caps textColor='primary' fit>Client Side</Heading>
          </Appear>
          <Appear fid='2'>
            <Text fit textColor='quartenary'>Because we already loaded all the routes when the page loaded. We
            dont need to go back to the server to find out if a route exist. What that means is when a user goes through your application
            they have a much more seamless experience browsing from page to page.
            </Text>
          </Appear>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading fit caps textColor='tertiary'>Routing</Heading>
          <Appear fid="1">
            <Heading caps textColor='primary' fit>Server Side</Heading>
          </Appear>
          <Appear fid='3'>
            <div>
              <Text fit textColor='quartenary'>
                When a link is clicked a request is made to the server to
                see if that route exist. The page is created and sent to the browser as a string.
              </Text>
            </div>
          </Appear>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Image src={images.server_side} width='100%' />
          <Appear fid='1'>
            <Text fit textColor='quartenary'>With each request we make a trip back to the server to do a few things.</Text>
          </Appear>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading>What is the Servers Role</Heading>
          <Appear fid='1'>
            <List>
              <Appear fid='2'>
              <ListItem textSize='1.5rem'>
                Firstly Check to make sure the link requested exist and is defined in the application.
              </ListItem>
              </Appear>
              <Appear fid='3'>
                <ListItem textSize='1.5rem'>
                  Secondly Fetch any data the next page might need
                </ListItem>
              </Appear>
              <Appear fid='4'>
                <ListItem textSize='1.5rem'>
                  Thirdly to turn that data back into something the browser can read. ( A string of html)
                </ListItem>
              </Appear>
            </List>
          </Appear>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading>So what does all that mean?</Heading>
          <Appear fid='1'>
            <Text fit textColor='quartenary'>Going back to the server is inefficient and results in a poor user experience most of the time.</Text>
          </Appear>
          <Appear fid='1'>
            <Text fit textColor='quartenary'>Why? Because most of the time data fetching is slow and it can also be done in the background.</Text>
          </Appear>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading>Breakdown</Heading>
          <Layout>
            <Fill>
              <Heading fit size={6} textColor='quartenary'>Server Side</Heading>
              <List>
                
              </List>
            </Fill>
            <div style={{borderRight: '2px solid #e7e7e7', marginRight: 15, marginLeft: 15}} />
            <Fill>
              <Heading fit size={6} textColor='quartenary'>Client Side</Heading>
              <List>
                
              </List>
            </Fill>
          </Layout>
        </Slide>
      </Deck>
    );
  }
}
