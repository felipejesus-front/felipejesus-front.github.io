document.addEventListener("DOMContentLoaded", function () {
	const languageSelector = document.getElementById("language-selector");

	languageSelector.addEventListener("change", function () {
		loadLanguage(this.value);
	});

	function loadLanguage(lang) {
		fetch(`locales/${lang}.json`)
			.then((response) => response.json())
			.then((data) => {
				document.querySelectorAll("[data-translate]").forEach((element) => {
					const key = element.getAttribute("data-translate");
					const text = key.split(".").reduce((o, i) => o[i], data);
					if (text) {
						element.innerHTML = text;
					}
				});
			});
	}

	// Load default language
	loadLanguage("pt");
});
