import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Section } from 'components/Section/Section';
import { ContactForm } from 'components/ContactForm/ContactForm';

const ContactsPage = () => {
    return <>
      <Section title="Phonebook">
        <ContactForm/>
      </Section>
       <Section title="Contacts">
            <Filter/>
            <ContactList/>
        </Section>
    </>
}

export default ContactsPage;

