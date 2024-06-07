import { Dispatch, ReactNode } from "react";
import { Close } from "../icons";
import style from "./Modal.module.scss";

interface IModal {
   setActive: Dispatch<boolean>;
   active: boolean | (() => boolean);
   children: ReactNode;
}

export const Modal = ({ children, active, setActive }: IModal) => {
   return (
      active && (
         <div
            className={style.modal}
            onMouseDown={(e) => {
               e.stopPropagation();
               setActive(false);
            }}
         >
            <div
               className={style.contentContainer}
               onMouseDown={(e) => {
                  e.stopPropagation();
               }}
               onClick={(e) => e.stopPropagation()}
            >
               <button className={style.closeButton} onClick={() => setActive(false)}>
                  <Close />
               </button>
               <div>{children}</div>
            </div>
         </div>
      )
   );
};
