import style from './_style/Header.module.css'

export const Header = () => {
  return (
    <div className={style.mainHeader}>
      <a href="/">
        <img src="/Logo@2x.png" alt="Dulces Pétalos" className={style.logo}/>
      </a>
    </div>
  );
};