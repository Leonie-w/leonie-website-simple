class MyNav extends HTMLElement {
  connectedCallback() {
    const current = this.getAttribute("current");
    this.innerHTML = `
        <header>
		    <h1 class="leonie"><a href="index.html">LEONIE WIMMER</a></h1>
			<nav>
				<a class="nav-link ${!current || current === "singlepage" ? "active" : ""}" href="index.html"> work </a>
				<a class="nav-link ${current === "about-me" ? "active" : ""}" href="about-me.html"> about me </a>
				<a class="nav-link ${current === "contact" ? "active" : ""}" href="contact.html"> contact </a>
			</nav>
        </header>
        `;
  }
}

customElements.define("my-nav", MyNav);
