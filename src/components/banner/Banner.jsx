import "./Banner.css"

function Banner({ title, subtitle }) {
  return (
    <div className="banner">
      <h1 className="title">{title}</h1>
      <h3 className="subtitle">{subtitle}</h3>
    </div>
  )
}

export default Banner
