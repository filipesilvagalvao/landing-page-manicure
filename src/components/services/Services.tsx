import Card from "../card/Card"
import Art from "../SGV/Art"
import Diamant from "../SGV/Diamant"
import Feet from "../SGV/Feet"
import Nail from "../SGV/Nail"
import Spa from "../SGV/Spa"

import styles from "./Services.module.css"


function Services() {
  return (
    <section className={styles.services}>
      <h2 className={styles.services__title}>Nossos Serviços</h2>
      <div className={styles.services__container}>
        <Card
          svg={<Nail />}
          title="Manicure & Pedicure"
          list={["Manicure tradicional", "Pedicure tradicional", "Manicure + Pedicure", "Esmaltação simples ou francesa"]}
          time="30–60 min"
        />
        <Card
          svg={<Diamant />}
          title="Alongamento de Unhas"
          list={["Gel", "Fibra de vidro", "Acrílico", "Banho de gel", "Manutenção e remoção"]}
          time="1h30–2h30"
        />
        <Card
          svg={<Art />}
          title="Nail Art & Design"
          list={["Nail art simples ou avançada", "Pedrarias e adesivos", "Encapsulamento", "Efeitos: baby boomer, marmorizado, cromado"]}
          time="1h30–2h30"
        />
        <Card
          svg={<Spa />}
          title="Tratamentos & Spa"
          list={["Spa dos pés", "Hidratação profunda", "Esfoliação", "Parafina para mãos e pés", "Tratamento para unhas fracas"]}
          time="1h30–2h30"
        />
        <Card
          svg={<Feet/>}
          title="Cuidados Especiais para os Pés"
          list={["Podologia estética", "Tratamento de calosidades", "Corte técnico", "Prevenção de unhas encravadas"]}
          time="1h30–2h30"
        />
      </div>
    </section>
  )
}

export default Services