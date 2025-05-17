import {Link} from "react-router-dom";
import style from './_style/breadcrumbs.module.css'

type Props = {
  plantName: string;
};

export const Breadcrumbs = ({plantName}: Props) => (
  <nav className={style.breadcrumbs}>
    <Link to="/" className={style.link}>Inicio</Link>
    <span className={style.separator}> &gt; </span>
    <span className={style.current}>{plantName}</span>
  </nav>
);