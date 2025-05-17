import type {Plant} from "@/core/domain/Plant.ts";
import {useNavigate} from "react-router-dom";
import style from './_style/Card.module.css'

type Props = {
  plant: Plant
}

export const Card = ({plant}: Props) => {
  const navigate = useNavigate();

  const goToDetail = () => {
    navigate(`/plant/${plant.id}`)
  }

  return (
    <div className={style.card} onClick={goToDetail}>
      <div className={style.info}>
        <h4 className={style.title}>{plant.name}</h4>
        <p className={style.subtitle}>{plant.binomialName}</p>
      </div>
      <div className={style.imageWrapper}>
        <img src={plant.imgUrl} alt={plant.name} className={style.image}/>
        <div className={style.priceTag}><h6>€{plant.price.toFixed(2)}</h6>
        </div>
        <div className={style.arrow}><img src='/public/Arrow.png' alt={'Ir a detalle'}/></div>
      </div>
    </div>
  )
}