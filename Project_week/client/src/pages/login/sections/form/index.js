import React, { useState } from "react";
import styles from "./form.module.scss";
import BrandLogo from "../../../../components/shared/brand";
import Input from "../../../../components/atoms/input";
import Button from "../../../../components/atoms/button";
import { useNavigate } from "react-router-dom";

function Form(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    return (
        <section className={styles["form-contianer"]}>
            <BrandLogo />
            <div className={styles.form}>
                <Button 
                text="Join with Google"
                icon="bi:google"
                className={styles.google}
                />
                <div className={styles.option}>
                    <span>or Join with email address</span>
                </div>
                <article className={styles.details}>
                    <Input type="email" placeholder={"Type your Email"} value={email} onChange={(e)=> setEmail(e.target.value)}/>
                    <Input type="password" placeholder={"Type your Password"} value={password} onChange={(e)=> setPassword(e.target.value)}/>
                    <Button 
                    text="Join with Email"
                    icon="material-symbols:login"
                    className={styles.emailButton}
                    handleClick={()=>navigate("/notes")}
                    />
                </article>
            </div>
        </section>
    );
}

export default Form;