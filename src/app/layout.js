import './globals.css';
import Navbar from '../component/Navbar/navbar';
import Footer from '../component/footer/footer';
import { TimelineProvider } from '../components/Timeline/TimelineProvider';

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body className="bg-slate-50 text-slate-900">
        <TimelineProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </TimelineProvider>
      </body>
    </html>
  );
}