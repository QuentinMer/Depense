import s from "./style.module.css";

export function Logo({image, title}) {
    return <>
    <div className={s.container}>
        <img 
        className={s.img} 
        src={image} 
        alt="logo" />
        
    </div>
    </>;
}