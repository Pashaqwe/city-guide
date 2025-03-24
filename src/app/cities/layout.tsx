import { ReactNode, Suspense } from "react";

import s from "./Cities.module.scss";
type TCitiesLayoutProps = { children: ReactNode };

function CitiesLayout({ children }: Readonly<TCitiesLayoutProps>) {
  return (
    <div className={s.layout}>
      <Suspense fallback={"Загрузка"}>{children} </Suspense>
    </div>
  );
}

export default CitiesLayout;
