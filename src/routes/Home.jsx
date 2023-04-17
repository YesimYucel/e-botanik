import { Col, Row, Container } from 'react-bootstrap';
import image1 from './img/botanical1.jpg';


export default function Home() {
  const flowers = [
    {
      id: 1,
      title: "Yasemin",
      imageUrl: 'https://cdn.create.vista.com/api/media/small/26091565/stock-photo-jasmine-small-white-flower',
    },
    {
      id: 2,
      title: "Gül",
      imageUrl: 'https://cdn.create.vista.com/api/media/small/190771664/stock-photo-close-view-beautiful-red-rose',
    },

    {
      id: 3,
      title: "Lale",
      imageUrl: 'https://cdn.create.vista.com/api/media/small/66264975/stock-photo-tulips-bouquet',

    },

    {
      id: 4,
      title: "Karanfil",
      imageUrl: 'https://cdn.create.vista.com/api/media/small/153581718/stock-photo-beautiful-pink-carnation-flowers-on',
    },
    {
      id: 5,
      title: "Zambak",
      imageUrl: 'https://cdn.create.vista.com/api/media/small/11653294/stock-photo-two-pink-lily-flowers',

    },
    {
      id: 6,
      title: "Krizantem",
      imageUrl: 'https://cdn.create.vista.com/api/media/small/210841476/stock-photo-close-view-beautiful-pink-chrysanthemum',
    },




  ]
  const  trees = [
    {
      id: 1,
      title: "Kavak",
      imageUrl: 'https://cdn.create.vista.com/api/media/small/196571570/stock-photo-close-poplar-tree-green-leaves',
    },
    {
      id: 2,
      title: "Gürgen",
      imageUrl: 'https://cdn.create.vista.com/api/media/small/177149378/stock-photo-hornbeam-decorative-weeping-form-close',
    },

    {
      id: 3,
      title: "Çınar",
      imageUrl: 'https://cdn.create.vista.com/api/media/small/536938948/stock-photo-fall-autumn-yellow-leaves-of',

    },

    {
      id: 4,
      title: "Sandal",
      imageUrl: 'https://cdn.create.vista.com/api/media/small/63125743/stock-photo-fruits-of-pterocarpus-santalinus-red',
    },
    {
      id: 5,
      title: "Ardıç",
      imageUrl: 'https://cdn.create.vista.com/api/media/small/309398022/stock-photo-green-garden-spring-lots-ornamental',

    },
    {
      id: 6,
      title: "Kiraz Çiçegi",
      imageUrl: 'https://cdn.create.vista.com/api/media/small/409967218/stock-photo-cherry-blossom-tree-bloom',
      
     
    },




  ]


  return (
    <Container className='mt-5'>

      <Row className='mt-5'>
        <Col className='col-xl-6 col-12 pt-5 my-5'>
          <h1 className='text-success'>E-Botanik Kullanıcılarının
            <span className='text-warning'> %80'i</span> Memnun</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta, saepe.
            Lorem ipsum dolor sit amet consectetur.</p>
          <button type="button" class="btn btn-dark">Shop Now</button>
        </Col>
        <Col className='col-xl-6 pt-5 my-5'>

          <img src={image1} className='img-fluid' alt="" />

        </Col>


        <h2 className='text-center text-warning'>FLOWERS</h2>
        <hr />
        {flowers.map((flowers) => (
          <Col className='col-xl-4  col-12 my-2'>
            <div className='shadow-lg p-3 mb-5 bg-body-tertiary rounded-4' >
              <div className='card-img '>
                <img
                  className="d-block w-100 rounded-4"
                  src={flowers.imageUrl}
                  height={250}
                />
              </div>
              <h6 className='fw-bold p-3' style={{ textAlign: 'justify', fontSize: '12px' }}>{flowers.title}</h6>
            </div>
          </Col>
        ))}


      </Row>
      <Row className='my-5'>
        <Col className='col-xl-6 col-12 mb-3 position-relative'>
          <img src='https://cdn.create.vista.com/api/media/small/13851388/stock-photo-green-tunnel' className='img-fluid w-100' style={{height:'350px'}}  alt="" />

          <div className='position-absolute top-50 start-0 translate-middle-y p-5 bg-light opacity-75'>
            <h3>Most Used Trees</h3>
            <h5>Latest Collection</h5>
            <span>Up To 80% Preference Rate</span>
            <br />
            <button type="button" className="btn btn-dark d-block mt-2" style={{ background: 'black' }}>See Collections</button>
          </div>

        </Col>
        <Col className='col-xl-6 col-12 position-relative'>
          <img src='https://cdn.create.vista.com/api/media/small/330594272/stock-photo-spring-flowers-on-wood' className='img-fluid w-100' style={{height:'350px'}} alt="" />
          <div className='position-absolute top-50 start-0 translate-middle-y p-5 bg-light opacity-75'>
            <h3>Most Used Flowers</h3>
            <h5>Latest Collection</h5>
            <span>Up To 80% Preference Rate</span>
            <br />
            <button type="button" className="btn btn-dark d-block mt-2" style={{ background: 'black' }}>See Collections</button>
          </div>
        </Col>

      </Row>
      <Row>
        <h2 className='text-center text-warning'>TREES</h2>

        {trees.map((trees) => (
          <Col className='col-xl-4  col-12 my-2'>
            <div className='shadow-lg p-3 mb-5 bg-body-tertiary rounded-4' >
              <div className='card-img '>
                <img
                  className="d-block w-100 rounded-4"
                  src={trees.imageUrl}
                  height={250}
                />
              </div>
              <h6 className='fw-bold p-3' style={{ textAlign: 'justify', fontSize: '12px' }}>{trees.title}</h6>
              <p>{trees.fiyat}</p>
            </div>
          </Col>
        ))}
      </Row>
    </Container>

  );
}
