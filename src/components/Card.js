import "../stylesheets/card.css"

export default function Card({ele}) {
  return (
    <div className="Card">
        <div className="cardTitle">
            <div className="cardIcon"><img className="cartTitleIcon" src={`${ele.icon_url}`} alt="" /></div>
            <div className="cardName">
                <div className="cardNameHeading">{ele.title}</div>
                <div className="cardNameSubheading">{ele.category}</div>
            </div>
        </div>
        <div className="cardLink"><a href={`https:\\${ele.link}`}>{ele.link}</a></div>
        <div className="cardDesc">{ele.description}</div>
    </div>
  )
}
