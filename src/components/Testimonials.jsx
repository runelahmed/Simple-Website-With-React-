import testimonials from '../test.json';
import Testimonial from './Testimonial';

const Testimonials = () => {
  return (
    <section className="testimonials" id="testimonials">
      <div className="testimonials__container container">

        
            {testimonials.map((testimonial) => (
            <Testimonial key={testimonial.id} testimonial = {testimonial} />
            ))}
        
      </div>
    </section>
  )
}

export default Testimonials
