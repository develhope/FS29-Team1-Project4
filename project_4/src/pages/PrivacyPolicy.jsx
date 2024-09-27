export function PrivacyPolicy() {
  const styles = {
    container: {
      padding: "20px",
      maxWidth: "1280px",
      margin: "0 auto",
      fontFamily: "Arial, sans-serif",
      lineHeight: "2",
      textAlign: "center",
    },
  };
  return (
    <div style={styles.container}>
      <h1>Privacy Policy</h1>
      <p>La tua privacy è importante per noi. Questa politica spiega come raccogliamo, utilizziamo e proteggiamo le tue informazioni personali.</p>

      <h2>Informazioni che raccogliamo</h2>
      <p>Raccogliamo informazioni quando visiti il nostro sito, ti registri o interagisci con i nostri servizi. Le informazioni possono includere:</p>
      <ul>
        <li>Nome</li>
        <li>Email</li>
        <li>Informazioni di pagamento</li>
        <li>Altri dettagli necessari per fornire il servizio</li>
      </ul>

      <h2>Come utilizziamo le informazioni</h2>
      <p>Utilizziamo le informazioni per:</p>
      <ul>
        <li>Fornire e gestire i nostri servizi</li>
        <li>Comunicare con te</li>
        <li>Migliorare il nostro sito web</li>
        <li>Rispettare le normative legali</li>
      </ul>

      <h2>Protezione delle informazioni</h2>
      <p>Adottiamo misure di sicurezza per proteggere le tue informazioni personali da accessi non autorizzati e divulgazioni.</p>

      <h2>Modifiche alla nostra privacy policy</h2>
      <p>Ci riserviamo il diritto di modificare questa privacy policy in qualsiasi momento. Ti informeremo delle modifiche tramite email o un avviso sul nostro sito.</p>

      <h2>Contatti</h2>
      <p>
        Se hai domande sulla nostra privacy policy, puoi contattarci a:
        <a href=""> info@esempio.com</a>.
      </p>
    </div>
  );
}
