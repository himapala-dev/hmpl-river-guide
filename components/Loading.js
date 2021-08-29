import styles from "../styles/components/Loading.module.scss";

function Loading(props) {
    return (
        <div className={props.loading ? styles.loading : styles.none}>
            <div className={styles.spinner}>
            </div>
        </div>
    );
}

export default Loading;