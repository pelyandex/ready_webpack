import { useState } from "react";

import { CloseOutlined } from "@ant-design/icons";

import s from "./styles.module.css";

export const Preloader = () => {
  const [show, setShow] = useState(true);

  if (!show) {
    return null;
  }
  return (
    <div className={s.preloader}>
      <div className={s.block}>
        <CloseOutlined onClick={() => setShow(false)} className={s.close} />
        <h1>Возможности прототипа:</h1>
        <ul>
          <li>Возможность запустить проект (кнопка сверху)</li>
          <li>Открыть меню проекта (кнопка сверху)</li>
          <li>Возможность перетаскивать любые ноды(мышь)</li>
          <li>Мобильная версия</li>
          <li>Карта в десктопной версии</li>
          <li>Элементы управления </li>
          <li>
            Библиотека модулей в десктоп версии (правый клик по воркфлоу){" "}
          </li>
          <li>Конфигурация ноды (даблклик по ноде) </li>
          <li>Фокус по сломанной ноде </li>
        </ul>
      </div>
    </div>
  );
};
