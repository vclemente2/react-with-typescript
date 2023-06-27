import { secondsToMinutes } from "../../../common/utils/time";
import style from "./Clock.module.scss";

export function Clock({ time }: { time: number }) {
  const [[minutesTens, minutesUnit], [secondsTens, secondsUnit]] =
    secondsToMinutes(time);

  return (
    <>
      <span className={style.relogioNumero}>{minutesTens}</span>
      <span className={style.relogioNumero}>{minutesUnit}</span>
      <span className={style.relogioDivisao}>:</span>
      <span className={style.relogioNumero}>{secondsTens}</span>
      <span className={style.relogioNumero}>{secondsUnit}</span>
    </>
  );
}
