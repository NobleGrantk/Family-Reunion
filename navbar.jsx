import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';

const Router_App = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/home-page">Home</Link></li>
          <li><Link to="/registration">Registration</Link></li>
          <li><Link to="/event-details">EventDetails</Link></li>
          <li><Link to="/travel-information">TravelInformation</Link></li>
          <li><Link to="/photo-gallery">PhotoGallery</Link></li>
          <li><Link to="/schedule-of-events">ScheduleOfEvents</Link></li>
          <li><Link to="/social-media">SocialMedia</Link></li>
          <li><Link to="/contact-us">ContactUs</Link></li>
          <li><Link to="/faqs">FAQ's</Link></li>
        </ul>
      </nav>
      <Switch>
        <Route path="/home-page">
          <HomePage />
        </Route>
        <Route path="/registration">
          <registration />
        </Route>
        <Route path="/event-details">
          <EventDetails />
        </Route>
        <Route path="/travel-information">
          <TravelInformation />
        </Route>
        <Route path="/photo-gallery">
          <PhotoGallery />
        </Route>
        <Route path="/SOE">
          <SOE/>
        </Route>
        <Route path="/social-media">
          <SocialMedia />
        </Route>  
      </Switch>
    </Router>
  );
};

export default Router_App;
