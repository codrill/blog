import React from "react"
import footerStyles from "./footer.module.sass"

const Footer = () => {
  return (
    <footer className={footerStyles.footer}>
      <p>Made with ❤️ by <a href="https://github.com/mad-rat" title="Mad Rat Github">Mad Rat</a> </p>
      <p>Want to contribute? Write to <a href="mailto:kontakt@skrzepij.pl" title="Mad Rat e-mail">us</a>!</p>
    </footer>
  )
}

export default Footer
