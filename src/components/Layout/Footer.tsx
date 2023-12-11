import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className='text-bluish'>Just Flashcards © {new Date().getFullYear()}</p>
        <br></br>
        <p>Seamlessly create, refine, and structure your Flash Cards into decks and memorize.</p>
        <br></br>
        <ul className="footer-links text-reddish">
          <li><a href="/login">Login</a></li>
          <li><a href="/register">Register</a></li>
          <li><a href="https://github.com/iamsmruti/Just-Cards-Client" target="_blank">Github</a></li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
