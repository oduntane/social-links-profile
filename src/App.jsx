import img from './assets/avatar-jessica.jpeg'


export default function App() {

  return (
    <main className="container">
      <div className="card">

        <img src={img} alt="Jessica Randall"/>

        <div className="info">
          <p>Jessica Randall</p>
          <p>London, United Kingdom</p>
        </div>

        <p>
          <q>Front-end developer and avid reader.</q>
        </p>

        <ul className="links">
            <li><a href="#">GitHub</a></li>
            <li><a href="#">Frontend Mentor</a></li>
            <li><a href="#">LinkedIn</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">Instagram</a></li>
          </ul>
      </div>
    </main>
  )
}