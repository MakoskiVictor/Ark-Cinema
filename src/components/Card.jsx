import cardStyles from '@/styles/Card.module.css'

export function Card ({ image, title, rating, date, id }) {
  return (
    <section key={id} className={cardStyles.card}>
      <div className={cardStyles.top}>
        <img className={cardStyles.image} src={image} alt={`${title} image`} />
      </div>
      <div className={cardStyles.bottom}>
        <p>{title}</p>
        <p>{rating}</p>
        <p>{date}</p>
      </div>
    </section>
  )
}
