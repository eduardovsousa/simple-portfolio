import { Container, Section, TestimonialAvatar } from './styles';
import AVTR1 from '../../assets/avatar/avatar1.jpg';
import AVTR2 from '/logo.png';

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data =[
  {
    avatar: AVTR1,
    name: 'Desenvolvedor',
    review: 'Atualmente, estou trabalhando com desenvolvimento de sites responsivos para o comércio atacadista de supermercados, onde criamos campanhas promocionais e concursos.'
  },
  {
    avatar: AVTR2,
    name: 'Freelancer',
    review: 'Sempre em busca de novas oportunidades para desenvolver o melhor conteúdo para os meus clientes. Caso haja interesse, entre em contato!'
  },
];

export function Testimonial() {
  return (
    <Container id='testimonials' className='container'>
      <Section>
        <h5>E hoje,</h5>
        <h2>Como trabalho?</h2>

        <Swiper className='TestimonialContainer'
        // install Swiper modules
          modules={[ Pagination ]}
          spaceBetween={40}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
        >
          {
            data.map(({avatar, name, review}, index) => {
              return (
                <SwiperSlide key={index} className='TestimonialContent'>
                  <TestimonialAvatar>
                    <img src={avatar} alt={name} />
                  </TestimonialAvatar>
                  <h5 className='client__name'>{name}</h5>
                  <small className='client__review'>{review}</small>
                </SwiperSlide>
              );
            })
          }

        </Swiper>
      </Section>
    </Container>
  );
}
