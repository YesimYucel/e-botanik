import { Col, Row, Container } from 'react-bootstrap';
export default function bitkiler() {

  const flowers = [
    {
      id: 1,
      title: "Yasemin",
      paragraf:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. A iste non eius! Officia aliquid rerum dolorum quibusdam cum maxime, nihil officiis voluptatem, nobis quaerat odio doloremque est. Numquam, temporibus non.',
      imageUrl: 'https://cdn.create.vista.com/api/media/small/26091565/stock-photo-jasmine-small-white-flower',
    },
    {
      id: 2,
      title: "Gül",
      imageUrl:'https://cdn.create.vista.com/api/media/small/190771664/stock-photo-close-view-beautiful-red-rose',
      paragraf:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. A iste non eius! Officia aliquid rerum dolorum quibusdam cum maxime, nihil officiis voluptatem, nobis quaerat odio doloremque est. Numquam, temporibus non.',
    },

    {
      id: 3,
      title: "Lale",
      imageUrl:'https://cdn.create.vista.com/api/media/small/66264975/stock-photo-tulips-bouquet',
      paragraf:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. A iste non eius! Officia aliquid rerum dolorum quibusdam cum maxime, nihil officiis voluptatem, nobis quaerat odio doloremque est. Numquam, temporibus non.',
      
    },

    {
      id: 4,
      title: "Karanfil",
      imageUrl:'https://cdn.create.vista.com/api/media/small/153581718/stock-photo-beautiful-pink-carnation-flowers-on',
      paragraf:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. A iste non eius! Officia aliquid rerum dolorum quibusdam cum maxime, nihil officiis voluptatem, nobis quaerat odio doloremque est. Numquam, temporibus non.',
    },
    {
      id: 5,
      title: "Zambak",
      imageUrl:'https://cdn.create.vista.com/api/media/small/11653294/stock-photo-two-pink-lily-flowers',
      paragraf:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. A iste non eius! Officia aliquid rerum dolorum quibusdam cum maxime, nihil officiis voluptatem, nobis quaerat odio doloremque est. Numquam, temporibus non.',

    },
    {
      id: 6,
      title: "Krizantem",
      imageUrl:'https://cdn.create.vista.com/api/media/small/210841476/stock-photo-close-view-beautiful-pink-chrysanthemum',
      paragraf:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. A iste non eius! Officia aliquid rerum dolorum quibusdam cum maxime, nihil officiis voluptatem, nobis quaerat odio doloremque est. Numquam, temporibus non.',
    },
    {
      id: 7,
      title: "Manolya",
      imageUrl:'https://cdn.create.vista.com/api/media/small/10946325/stock-photo-couple-of-magnolia-blossoms',
      paragraf:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. A iste non eius! Officia aliquid rerum dolorum quibusdam cum maxime, nihil officiis voluptatem, nobis quaerat odio doloremque est. Numquam, temporibus non.',
    },
    {
      id: 8,
      title: "Nergis",
      imageUrl:'https://cdn.create.vista.com/api/media/small/190767346/stock-photo-close-view-beautiful-tulips-daffodil',
      paragraf:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. A iste non eius! Officia aliquid rerum dolorum quibusdam cum maxime, nihil officiis voluptatem, nobis quaerat odio doloremque est. Numquam, temporibus non.',
    },
    {
      id: 9,
      title: "Nilüfer",
      imageUrl:'https://cdn.create.vista.com/api/media/small/6149185/stock-photo-lotus-flower',
      paragraf:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. A iste non eius! Officia aliquid rerum dolorum quibusdam cum maxime, nihil officiis voluptatem, nobis quaerat odio doloremque est. Numquam, temporibus non.',
    },
  ]
  


  return (
    
    <Container className='mt-5'>
    <Row >
      <h2 className='text-center'>Bitki Çeşitleri  </h2>
      <h4>Çiçekler  </h4>

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
            <p>{flowers.paragraf}</p>
          </div>
        </Col>
      ))}

    </Row>

    
  </Container>
  );
}
