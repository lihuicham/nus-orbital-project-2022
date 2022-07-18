// Example of Collapsible/Accordion/Expandable List View in React Native
// https://aboutreact.com/collapsible-accordion-expandable-view/

// import React in our code
import React, { useState } from 'react';

// import all the components we are going to use
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

//import for the animation of Collapse and Expand
import * as Animatable from 'react-native-animatable';

//import for the Accordion view
import Accordion from 'react-native-collapsible/Accordion';

//Dummy content to show
//You can also use dynamic data by calling web service
const CONTENT = [
  {
    title: 'Can I restore my account after deleting it ?',
    content:
      'No. Deleting your account is an irreversible action. If you wish to use the app again after deleting your old account, you need to register a new account.',
  },
  {
    title: 'Why can\'t I edit my to-do item ?',
    content:
      'Yes, you cannot edit your to-do item after input. However, you can delete it by tapping on the item. This design is kept for the simplicity of the app and for the purpose of quick note-taking.',
  },
  {
    title: 'Can I change my email and password after registration ?',
    content: 
      'Yes. Go to Settings and there will be a tab for updating your email and password.'
  },
  {
    title: 'When is the daily notification ?',
    content: 'You will receive a notification from Track My Day every day at 9pm to remind you to track your habits !'
  },
  {
    title: 'Is Track My Day a free app ?',
    content: 'Yes. Track My Day is a free app with no in-app payments required. Thank you for choosing Track My Day.'
  },
  {
    title: 'I have some suggestions for the app !',
    content: 'You can contact the Track My Day team by writing an email to us ! Simply click the Report Issues button at the Menu drawer and change the subject of the email to "I have an idea for the app !" or equivalent texts. We will look into your suggestions and make improvements to the app. Thank you in advance !'
  },
  {
    title: 'I want to know more about Track My Day !',
    content: 'Swipe right to reveal the Menu drawer and click the About Us button. We included an introduction to the developers, links to our GitHub README documentation, demo video of the app and project poster. If you are interested in knowing the behind the scenes of the app, click the \'Read our journey\' link to read a blog post about our journey of creating Track My Day ! Cheers !'
  },
  {
    title: 'There\'s an issue with the app ! Please fix it ! ',
    content:
      'Swipe right to reveal the Menu drawer for the app and click the Report Issues button to write the issue to us ! We will fix the bug as soon as possible and publish an update on our GitHub README.'
  },
  {
    title: 'Need more help ?',
    content: 
        'Swipe right to reveal the Menu drawer for the app and click the Report Issues button. Simply write an email to us stating your question or problem, we will respond to you in 3 working days.'
  },
];

const FAQ = () => {
  // Ddefault active selector
  const [activeSections, setActiveSections] = useState([]);

  const setSections = (sections) => {
    //setting up a active section state
    setActiveSections(sections.includes(undefined) ? [] : sections);
  };

  const renderHeader = (section, _, isActive) => {
    //Accordion Header view
    return (
      <Animatable.View
        duration={400}
        style={[styles.header, isActive ? styles.active : styles.inactive]}
        transition="backgroundColor">
        <Text style={[styles.headerText, isActive ? styles.activeHeader : styles.inactiveHeader]}>{section.title}</Text>
      </Animatable.View>
    );
  };

  const renderContent = (section, _, isActive) => {
    //Accordion Content view
    return (
      <Animatable.View
        duration={400}
        style={[styles.content, isActive ? styles.active : styles.inactive]}
        transition="backgroundColor">
        <Animatable.Text
          animation={isActive ? 'bounceIn' : undefined}
          style={styles.textContent}>
          {section.content}
        </Animatable.Text>
      </Animatable.View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.faq}>
            FAQ
        </Text>
        <Text style={styles.expandTitle}>
            Please click the below options to expand. 
        </Text>
        <ScrollView>
          <Accordion
            activeSections={activeSections}
            sections={CONTENT}
            touchableComponent={TouchableOpacity}
            renderHeader={renderHeader}
            renderContent={renderContent}
            duration={400}
            onChange={setSections}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default FAQ;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9db6e',
    paddingTop: 25,
  },
  faq: {
    color: '#643202',
    fontSize: 50,
    margin: 20, 
    fontWeight: "bold"
  },
  header: {
    padding: 10,
  },
  headerText: {
    fontSize: 17,
    fontWeight: '500',
    marginVertical: 7,
    marginHorizontal: 10,  
  },
  content: {
    padding: 25,
  },
  textContent: {
    textAlign: 'center',
    color: 'white', 
    fontSize: 14,
    marginTop: -20,
    fontFamily: 'monospace'
  },
  active: {
    backgroundColor: '#0e015c',
  },
  inactive: {
    backgroundColor: '#f9db6e',
  },

  activeHeader: {
    color: '#ff9b16',
    fontSize: 22, 
    fontWeight: '300'
  },
  inactiveHeader: {
    color: 'black',
  },
  expandTitle: {
    fontSize: 13,
    fontWeight: '500',
    marginBottom: 10, 
    textAlign: 'center',
    color: '#969393'
  },

});
