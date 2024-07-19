import React from 'react';
import styles from "./sidebar.module.scss";
import BrandLogo from '../brand';
import {Icon} from "@iconify/react";
import sidebarItems from "../../../data/sidebar.json";
import { useNavigate } from 'react-router-dom';

function Sidebar() {
    const navigate = useNavigate();
  return (
    <aside className={styles.sidebar}>
        <BrandLogo logoOnly={true} type={"dark"} className={styles.logo}/>
        <section>
            {
                sidebarItems.map((item, index)=>{
                    return (
                    <article key={index} className={styles.item}>
                        <Icon icon={item.icon} color={index === 1 ? "var(--light-grey)" : "var(--white)"}/>
                    </article>
                    );
                })
            }
        </section>
        <article className={styles.logout}>
            <Icon icon={'material-symbols:logout'} onClick={()=>{
                navigate("/");
            }}/>
        </article>
    </aside>
  );
}

export default Sidebar;