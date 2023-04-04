
export default function Footer(){

  const dt = new Date();
  let year = dt.getFullYear();


  return(
    <footer className="footer">
      <p className="footer__title">&copy; {year} DenisZыkov - Mesto Russia </p>
    </footer>
  )
}