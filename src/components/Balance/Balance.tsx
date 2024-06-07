import style from "./Balance.module.scss";

export const Balance = () => {
   return (
      <div className={style.container}>
         <h2 className={style.header}>Available Balance</h2>
         <div className={style.balance}>
            <article className={style.balanceCard}>
               <div className={style.name}>Auto Insurance</div>
               <div>1311 Cars</div>
               <div className={style.moneyWrapper}>
                  <div className={style.money}>$45,910</div> <div className={style.percent}>+ 4.5%</div>
               </div>
               <div className={style.diffWrapper}>
                  <div className={style.diff}>
                     <div>
                        <span className={style.arrowDown}>↓</span>100,930
                     </div>
                     <div>USD</div>
                  </div>
                  <div className={style.diff}>
                     <div>
                        <span className={style.arrowUp}>↑</span>54,120
                     </div>
                     <div>USD</div>
                  </div>
                  <div className={style.diff}>
                     <div>⭐125</div>
                     <div>VIP</div>
                  </div>
               </div>
            </article>

            <article className={style.balanceCard}>
               <div className={style.name}>Healt Insurance</div>
               <div>+2400 People</div>
               <div className={style.moneyWrapper}>
                  <div className={style.money}>$12,138</div> <div className={style.percent}>+ 4.5%</div>
               </div>
               <div className={style.diffWrapper}>
                  <div className={style.diff}>
                     <div>
                        <span className={style.arrowDown}>↓</span>11,930
                     </div>
                     <div>USD</div>
                  </div>
                  <div className={style.diff}>
                     <div>
                        <span className={style.arrowUp}>↑</span>54,120
                     </div>
                     <div>USD</div>
                  </div>
                  <div className={style.diff}>
                     <div>⭐150</div>
                     <div>VIP</div>
                  </div>
               </div>
            </article>

            <article className={style.balanceCard}>
               <div className={style.name}>Balance Insurance</div>
               <div>1311 Cars</div>
               <div className={style.moneyWrapper}>
                  <div className={style.money}>$3,910 </div> <div className={style.percent}>+ 4.5%</div>
               </div>
               <div className={style.diffWrapper}>
                  <div className={style.diff}>
                     <div>
                        <span className={style.arrowDown}>↓</span>100,930
                     </div>
                     <div>USD</div>
                  </div>
                  <div className={style.diff}>
                     <div>
                        <span className={style.arrowUp}>↑</span>54,120
                     </div>
                     <div>USD</div>
                  </div>
                  <div className={style.diff}>
                     <div>⭐125</div>
                     <div>VIP</div>
                  </div>
               </div>
            </article>
         </div>
      </div>
   );
};
