import style from "./Loader.module.scss";

export function Loader() {
   return (
      <div className={style.container}>
         <p className={style.text}>LOADING</p>
      </div>
   );
}
