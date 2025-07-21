import Header from './Header';
import Footer from './Footer';
import TerminalContact from './TerminalContact';

export default function Contact() {
  return (
    <>
      <Header className="mb-2" />
      <TerminalContact />
      <Footer className="mt-0" />
    </>
  );
}
