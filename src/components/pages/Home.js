import styles from "../layout/Home.module.css";
import savings from "../../img/savings.svg";
import LinkButton from "../layout/LinkButton";

function Home() {
  return (
    <section className={styles.homeContainer}>
      <h1>
        Bem-vindo ao <span>Costs</span>
      </h1>
      <p>Gerencie seus projetos conosco</p>
      <LinkButton to="/newproject" text="Novo Projeto" />
      <img src={savings} alt="Cost_img_center" />
    </section>
  );
}
export default Home;
