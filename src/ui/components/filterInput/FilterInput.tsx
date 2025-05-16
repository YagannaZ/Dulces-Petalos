import {useState} from "react";
import style from './_style/filterInput.module.css'

type Props = {
  onFilterChange: (text: string) => void;
};

export const PlantFilter = ({onFilterChange}: Props) => {
  const [filter, setFilter] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setFilter(val);
    onFilterChange(val);
  };

  return (
    <div className={style.inputWrapper}>
      <input
        className={style.input}
        type="text"
        value={filter}
        onChange={handleChange}
        placeholder="Busca en nuestra tienda"
        aria-label="Filtrar plantas por nombre"
      />
      <img src='/Search_icon.png' alt={'Buscar'} className={style.searchIcon}/>
    </div>
  );
};
