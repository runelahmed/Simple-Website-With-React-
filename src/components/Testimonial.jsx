

const Testimonial = ({testimonial}) => {


  return (

    <div className="testimonials__card">
                <div className="testimonials__image">
            <img src={testimonial.img} alt="Testimonial 1" />
          </div>
          <div className="testimonials__card--content">
            <p className="testimonials__card-text">
             {testimonial.body}
            </p>
            <h3 className="testimonials__card-title">{testimonial.name}</h3>
          </div>
    </div>
  
  )
}

export default Testimonial
