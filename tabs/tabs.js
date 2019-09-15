const msg = document.getElementById('msg')
const tabs = document.getElementsByClassName('tab-b')

function tabClick(event){
  // msg.innerText = this.innerText
  if (!this.classList.contains('active')) {
    for (j = 0; j < tabs.length; j++) {
      tabs[j].classList.remove('active')
    }

    this.classList.toggle('active');
  }

  if (this.dataset.scope === "1") {
    displayScope_1();
    return
  };

  if (this.dataset.scope === "2") {
    displayScope_2();
    return;
  }

}

for (j = 0; j < tabs.length; j++) {
  tabs[j].addEventListener('click', tabClick)
}

function displayScope_1(){
  const vport = document.querySelector('.vport')
  vport.innerHTML = `
  <form action="" method="post">
  <ol>
  <li>
  <fieldset>
    <legend>Językiem programowania nie jest:</legend><br/>
    <input type="radio" name="lang" id="html">
    <label for="html">HTML</label><br/>

    <input type="radio" name="lang" id="python">
    <label for="python">Python</label><br/>

    <input type="radio" name="lang" id="pascal">
    <label for="pascal">Pascal</label><br/>

    <input type="radio" name="lang" id="js">
    <label for="js">JavaScript</label><br/>
  </fieldset>
  </li>

  <li>
    <fieldset>
      <legend>Przeglądarką internetową nie jest:</legend><br/>
      <input type="radio" name="browser" id="chrome">
      <label for="chrome">Google Chrome</label><br/>

      <input type="radio" name="browser" id="firefox">
      <label for="firefox">Firefox</label><br/>

      <input type="radio" name="browser" id="mascara">
      <label for="mascara">Apple Mascara</label><br/>

      <input type="radio" name="browser" id="safari">
      <label for="safari">Safari</label><br/>
    </fieldset>
  </li>

  <li>
    <fieldset>
      <legend>Pamięć RAM w komputerze służy do:</legend><br/>
      <input type="radio" name="ram" id="temporary">
      <label for="temporary">Tymczasowego przechowywania danych podczas pracy komputera</label><br/>

      <input type="radio" name="ram" id="permanent">
      <label for="permanent">Długotrwałego przechowywania danych, również po wyłączeniu komputera</label><br/>

      <input type="radio" name="ram" id="config">
      <label for="config">Trwałego przechowywania informacji o konfiguracji komputera</label><br/>
    </fieldset>
  </li>

  <li>
    <fieldset>
      <legend>Systemem operacyjnym nie jest:</legend><br/>
      <input type="radio" name="opsys" id="linux">
      <label for="linux">Linux</label><br/>

      <input type="radio" name="opsys" id="office">
      <label for="office">Microsoft Office</label><br/>

      <input type="radio" name="opsys" id="dos">
      <label for="dos">DOS</label><br/>

      <input type="radio" name="opsys" id="android">
      <label for="android">Android</label><br/>
    </fieldset>
  </li>

  <li>
    <fieldset>
      <legend>Program antywirusowy to:</legend><br/>
      <input type="radio" name="antivirus" id="monitor">
      <label for="monitor">Program służący do śledzenia użytkowników w sieci Internet</label><br/>

      <input type="radio" name="antivirus" id="safety">
      <label for="safety">Program ochrony społeczeństwa przed chorobami zakaźnymi</label><br/>

      <input type="radio" name="antivirus" id="antivir">
      <label for="antivir">Program wykrywający i usuwający wirusy komputerowe</label><br/>

      <input type="radio" name="antivirus" id="edit">
      <label for="edit">Program umożliwiający edycję dokumentów</label><br/>
    </fieldset>
  </li>

  <li>
    <fieldset>
      <legend>Hotspot to:</legend><br/>
      <input type="radio" name="hotspot" id="hotdog">
      <label for="hotdog">Punkt sprzedaży hotdogów</label><br/>

      <input type="radio" name="hotspot" id="phone">
      <label for="phone">Miejsce, w którym można naładować telefon</label><br/>

      <input type="radio" name="hotspot" id="solarium">
      <label for="solarium">Inna nazwa solarium</label><br/>

      <input type="radio" name="hotspot" id="hotspot">
      <label for="hotspot">Publiczny punkt dostępu do Internetu</label><br/>
    </fieldset>
  </li>
  </ol>

  </form>
  `
}

function displayScope_2(){
  const vport = document.querySelector('.vport')
  vport.innerHTML = ``
}
