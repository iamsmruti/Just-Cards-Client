const Footer = () => {
  return (
    <footer className="fixed bottom-0 w-full bg-gray-100 text-gray-600 py-4 text-center border-t border-gray-300">
      <div className="max-w-screen-lg mx-auto px-4">
        <p className='text-bluish'>Just Flashcards © {new Date().getFullYear()}</p>
        <br></br>
        <p>Seamlessly create, refine, and structure your Flash Cards into decks and memorize.</p>
        <br></br>
        <ul className="flex justify-center gap-3">
          <li><a href="/login" className="text-red-600 hover:text-red-700">Login</a></li>
          <li><a href="/register" className="text-red-600 hover:text-red-700">Register</a></li>
          <li><a href="https://github.com/iamsmruti/Just-Cards-Client" target="_blank" className="text-red-600 hover:text-red-700">Github</a></li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
