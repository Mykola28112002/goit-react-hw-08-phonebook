
import { Div } from './App.styled';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Section } from './Section/Section';
import { Filter } from './Filter/Filter';


export function App() { 
    return <Div className='thema'>
      <Section title="Phonebook">
        <ContactForm
        />
      </Section>
      <Section title="Contacts">
        <Filter/>
        <ContactList/>
      </Section>
    </Div>
}