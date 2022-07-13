import Header from './components/Header';
import MobileNav from './components/MobileNav';
import Posts from './components/Posts';
import SideBar from './components/SideBar';
import Stories from './components/Stories';

const App = () => {
  return (
    <>
      <Header /> 
      <div className='content'>
        <main>
          <Stories />
          <Posts /> 
        </main>
          <SideBar />
      </div>
      <MobileNav />
    </>
  );
}

export default App;
