import { Link } from "react-router-dom"


const Home = () => {
  return (
    <div className="home">
      <div className="home__content">
        <h1 className="home__title">Welcome to UserBase</h1>
        <p className="home__description">
          Discover all users, manage your profile and explore more.
        </p>
        <Link to="/user" className="home__button">View Users</Link>
      </div>
    </div>
  )
}

export default Home
