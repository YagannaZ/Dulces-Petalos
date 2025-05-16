import style from './_style/Header.module.css'

export const Header = () => {
  return (
    <div className={style.main}>
      <img src="public/Logo@2x.png" alt='Dulces Pétalos' className={style.logo}/>
    </div>
  )
}