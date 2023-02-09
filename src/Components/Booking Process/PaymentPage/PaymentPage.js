import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import './PaymentPage.css'
import Paypal from './Paypal';
import BookingNavbar from  '../../Booking Process/BookingNavbar/BookingNavbar'
import Mpesa from './Mpesa';
import Bank from './Bank';
import BYouWallet from './BYouWallet';

function PaymentPage() {
  return (
  <div className='flex  h-screen'>
    <BookingNavbar />
{/* Big Screens */}
<div className='hidden md:flex'>
<Tab.Container id="left-tabs-example" defaultActiveKey="first" color='success'>
      <Row className='tabs-div-bigscreen items-start'>
        <Col sm={3}  >
          
          <Nav variant="pills" className="flex-column">
          <Nav.Item className='active' >
              <Nav.Link eventKey="first" className='spec-nav-tab-bigscreen my-2'> Better You Wallet</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second" className='spec-nav-tab-bigscreen my-2'>Mpesa </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="third" className='spec-nav-tab-bigscreen my-2'>Bank</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="fourth" className='spec-nav-tab-bigscreen my-2'> Paypal</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={9}>
          <Tab.Content className='tab-content-bigscreen' >
            <Tab.Pane eventKey="first">
              <BYouWallet />
            </Tab.Pane>
            <Tab.Pane eventKey="second">
              <Mpesa />
            </Tab.Pane>
            <Tab.Pane eventKey="third">
              <Bank />
            </Tab.Pane>
            <Tab.Pane eventKey="fourth">
              <Paypal />
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
</div>

    {/* Small Screens */}
<div className='flex md:hidden'>
<Tab.Container id="left-tabs-example" defaultActiveKey="first" >
      <Row className='tabs-div-smallscreen'>
        {/* <Col sm={3}> */}
          
          <Nav variant="pills" className="flex w-screen bg-blue-70 justify-center" >
          <Nav.Item>
              <Nav.Link eventKey="first" className='spec-nav-tab-bigscreen spec-nav-tab' > Better You Wallet</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second" className='spec-nav-tab-bigscreen spec-nav-tab'>Mpesa </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="third" className='spec-nav-tab-bigscreen spec-nav-tab'>Bank</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="fourth" className='spec-nav-tab-bigscreen spec-nav-tab'> Paypal</Nav.Link>
            </Nav.Item>
          </Nav>
        {/* </Col> */}
        <Col sm={9}>
          <Tab.Content className='tab-content-smallscreen' >
            <Tab.Pane eventKey="first">
              <BYouWallet />
            </Tab.Pane>
            <Tab.Pane eventKey="second">
              <Mpesa />
            </Tab.Pane>
            <Tab.Pane eventKey="third">
              <Bank />
            </Tab.Pane>
            <Tab.Pane eventKey="fourth">
              <Paypal />
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
</div>

  </div>
  );
}

export default PaymentPage;
