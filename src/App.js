export default function App() {
  const get = () => {
    let a1 = Number(document.querySelector("#a1").value);
    let a2 = Number(document.querySelector("#a2").value);
    let n = Number(document.querySelector("#n").value);
    let res = document.querySelector("#res");
    calc(a1, a2, n, res);
  };

  const calc = (a1, a2, n, res) => {
    let r = a2 - a1;
    let an = a1 + (n - 1) * r;
    res.innerHTML = `<strong>a<sub>${n}</sub></strong>: ${an}`;
  };

  return (
    <div className="App">
      <header>
        <h1>Progressão Aritmética</h1>
        <p>Descubra o resultado final sem precisar fazer etapa por etapa</p>
      </header>
      <main>
        <div className="container">
          <input type={"text"} className="a1" id="a1" placeholder="a1" />
          <input type={"text"} className="a2" id="a2" placeholder="a2" />
          <input type={"text"} className="n" id="n" placeholder="an" />

          <button
            onClick={() => {
              get();
            }}
          >
            Calcular
          </button>
        </div>

        <span id="res">Resultado</span>
      </main>
    </div>
  );
}
