// import "./style.css";

import PropTypes from 'prop-types';

function BasketLayout({setVipTickets, setRegularTickets, children}) {
    console.log(setVipTickets)
    console.log(setRegularTickets)
  return (
    <div>
        <Nav />
        {{ children }}
        <Footer/>
    </div>
  );
}

BasketLayout.propTypes = {
    setVipTickets: PropTypes.func,
    setRegularTickets: PropTypes.func,
    children: PropTypes.element
}

export default BasketLayout;

<MainLayout>
   <Programs>
</MainLayout>